export const handler = async (event, context) => {
  const apiKey = process.env.FAVQS_API_KEY;
  const response = await fetch('https://favqs.com/api/qotd', {
    headers: {
      'Authorization': `Token token="${apiKey}"`
    }
  });
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};