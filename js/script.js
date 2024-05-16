// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

document.getElementById("multiplicationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  // Perform multiplication using addition and loops
  var result = 0;
  for (var i = 0; i < num2; i++) {
    result += num1; // Add num1 to itself num2 times
  }

  // Display the result
  var resultDiv = document.getElementById("result");
  resultDiv.textContent = "The result of " + num1 + " * " + num2 + " is: " + result;
});
</script >