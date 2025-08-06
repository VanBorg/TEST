exports.handler = async (event) => {
  const key = process.env.MY_API_KEY;
  const res = await fetch(https://api.example.com/data?key=);
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
};
