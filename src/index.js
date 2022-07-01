import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchanger from "./js/currency.js";

function getElements(response) {
  if (response) {
    let countryCode = $("#currencies").val();
    let inputAmount = $("#amountInput").val();
    $(".input").text(inputAmount);
    $("#output").text(
      `${
        response["conversion_rates"]} * ${response["conversion_rates"].countryCode
      }`
    );
  } else {
    $(".showErrors").text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $("#covertButton").submit(function () {
    CurrencyExchanger.getCurrency().then(function (response) {
      getElements(response);
    });
  });
});
