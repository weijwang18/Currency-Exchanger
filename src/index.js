import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchanger from "./currency.js";

$(document).ready(function () {
  function getElements(response) {
    if (response.conversion_result) {
      $("#output").text(`${response.conversion_result}`);
    } else {
      $(".showErrors").text(`There was an error: ${response.error_type}`);
    }
  }

  async function makeApiCall(Code, inputAmount) {
    const response = await CurrencyExchanger.getCurrency(Code, inputAmount);
    getElements(response);
  }

  $("#covertButton").click(function () {
    let Code = $("#currencies").val();
    let inputAmount = $("#amountInput").val();
    makeApiCall(Code, inputAmount);
    $("#input").text(inputAmount);
  });
});
