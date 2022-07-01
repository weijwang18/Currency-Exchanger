import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchanger from "./currency.js";

function getElements(response) {
  if (response.conversion_result) {
    $("#output").text(response["conversion_result"]);
  } else {
    $(".showErrors").text(`There was an error: ${response["error-type"]}`);
  }
}

$(document).ready(function () {
  $("#form").submit(function () {
    let Code = $("#currencies").val();
    let inputAmount = $("#amountInput").val();
    CurrencyExchanger.getCurrency(Code, inputAmount).then(function (response) {
      getElements(response);
      $("#input").text(inputAmount);
    });
  });
});
