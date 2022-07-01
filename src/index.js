import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchanger from "./currency.js";

function getElements(response) {
  if (response["conversion_rates"]) {
    let Code = $("#currencies").val();
    let inputAmount = $("#amountInput").val();
    $(".input").text(inputAmount);
    $("#output").text(response["conversion_rates"][`"${Code}"`]);
  } else {
    $(".showErrors").text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $("#covertButton").submit(function () {
    CurrencyExchanger.getCurrency(Code,inputAmount).then(function (response) {
      getElements(response);
    });
  });
});
