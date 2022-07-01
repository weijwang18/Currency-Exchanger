export default class CurrencyExchanger {
  static async getCurrency(Code, inputAmount) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${Code}/${inputAmount}`
      );
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
