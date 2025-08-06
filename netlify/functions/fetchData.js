// If you’re on Node 18+ you can omit the next line:
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const key = process.env.MY_API_KEY;
    const url = `https://api.example.com/data?key=${key}`;
    const res = await fetch(url);
    if (!res.ok) {
      return {
        statusCode: res.status,
        body: `Fetch error: ${res.statusText}`
      };
    }
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `Server error: ${err.message}`,
    };
  }
};
