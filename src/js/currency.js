export default class CurrencyExchanger {
  static getCurrency(countryCode){
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${countryCode}`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}