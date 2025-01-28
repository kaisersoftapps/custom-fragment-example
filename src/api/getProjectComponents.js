export const getProjectComponents = async (projectIdOrKey) => {
  const response = await requestJira(`/rest/api/3/project/${projectIdOrKey}/components`, {
    headers: { 'Accept': 'application/json' }
  });

  return await response.json();
}