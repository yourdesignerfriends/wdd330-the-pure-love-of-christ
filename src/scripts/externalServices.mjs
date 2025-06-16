function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor() {
    this.baseURL = '/.netlify/functions';
  }

  async getQuoteOfTheDay() {
    const url = `${this.baseURL}/qotd`;
    const response = await fetch(url);
    const data = await convertToJson(response);
    return data.quote;
  }
}