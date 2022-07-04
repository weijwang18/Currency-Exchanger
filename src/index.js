import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchanger from "./currency.js";

$(document).ready(function () {
  function clearFields() {
    $("#currencies").val("");
    $(".showErrors").text("");
    $("#output").text("");
    $("#input").text("");
  }

  function getElements(response) {
    if (response.conversion_result) {
      $("#output").text(
        `${response.conversion_result} ${response.target_code}`
      );
    // } else if (response["error-type"]) {
    //   $(".showErrors").text(
    //       `${response["error-type"]}. The currency you entered doesn't exist.`
    //     );
    } else {
      $(".showErrors").text(`There was an error: ${response.statusText}`);
    }
  }

  async function makeApiCall(Code, inputAmount) {
    const response = await CurrencyExchanger.getCurrency(Code, inputAmount);
    getElements(response);
  }

  $("#covertButton").click(function () {
    let Code = $("#currencies").val();
    let inputAmount = $("#amountInput").val();
    clearFields();
    if ( inputAmount === "") {
      alert ("Please enter a number")
    } else if ( inputAmount < 0){
      alert ("Please enter a positive")
    } else {
    makeApiCall(Code, inputAmount);
    $(".outputResult").show();
    $("#input").text(`${inputAmount} United States Dollar equals`);
    }
  });
});
