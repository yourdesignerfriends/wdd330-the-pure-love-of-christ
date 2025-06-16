export const handler = async (event, context) => {
  const response = await fetch('https://bored-api.appbrewery.com/filter?type=charity');
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};