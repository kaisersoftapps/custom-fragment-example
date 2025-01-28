/*
  We expect the "context", "router", "showFlag" and "requestJira" to be globally accessible across all Fragments.
*/
import { getProjectComponents } from './api/getProjectComponents';
import { updateIssue } from './api/updateIssue';
import { addDarkThemeSupport } from './util/darkThemeSupport';
import { resizeWindow } from './util/resizeWindow';

addDarkThemeSupport();

document.addEventListener("DOMContentLoaded", async (event) => {
  const context = await view.getContext();
  const projectComponents = await getProjectComponents(context.extension.project.key);

  document.getElementById('available-components').innerHTML =
    projectComponents.map(component => `<label><input type="checkbox" value="${component.id}">${component.name}</label>`).join(" ");

  document.getElementById('add-components-btn').addEventListener('click', async () => {
    const checkedBoxes = [...document.querySelectorAll('#available-components input:checked')];
    if (!checkedBoxes.length) {
      showFlag({
        id: 'error-flag',
        title: 'Please select at least one component',
        type: 'error', // 'info' | 'success' | 'warning' | 'error';
        isAutoDismiss: true,
      });
      return;
    }
    const bodyData = {
      update: {
        components: checkedBoxes.map(checkedBox => ({ "add": { "id": checkedBox.value } }))
      }
    };

    const response = await updateIssue(context.extension.issue.key, bodyData);

    if (response === 'ok') {
      showFlag({
        id: 'success-flag',
        title: 'Components have been added successfully',
        type: 'success', // 'info' | 'success' | 'warning' | 'error';
        isAutoDismiss: true,
      });
      setTimeout(async () => { await view.refresh() }, 1000); // Refresh page to show added Components
    } else {
      showFlag({
        id: 'error-flag',
        title: response,
        type: 'error', // 'info' | 'success' | 'warning' | 'error';
        isAutoDismiss: true,
      });
    }
  });

  document.getElementById('manage-components-btn').addEventListener('click', (event) => {
    event.preventDefault();
    router.open(`/jira/${context.extension.project.type}/projects/${context.extension.project.key}/components`)
  });

  document.getElementById('loader').style.display = 'none';
  document.getElementById('app').style.display = 'block';

  resizeWindow();  // Resize fragment window to content
});
