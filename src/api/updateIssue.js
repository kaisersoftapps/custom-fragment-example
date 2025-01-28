/*
  Expected bodyData:
    const bodyData = {
      "update": {
        "components": [
          { "add": { "id": "10137" } }
        ]
      }
    };
*/
export const updateIssue = async (issueIdOrKey, bodyData) => {
  const response = await requestJira(`/rest/api/3/issue/${issueIdOrKey}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  });

  if (response.status !== 204) return `Error: ${response.status}. ${response.statusText}`;

  return 'ok';
}