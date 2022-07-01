export default class CurrencyExchanger {
  static getCurrency(Code,inputAmount){
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${Code}/${inputAmount}`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(response);
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}

