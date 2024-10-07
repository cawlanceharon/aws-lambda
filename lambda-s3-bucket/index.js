// Replace 'export' with 'module.exports'
module.exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    event: JSON.stringify(event),
    body: JSON.stringify('Hello from Lambda!'),
    message: 'This is from localhost',
  };
  console.log("Response:", response);
  return response;
};