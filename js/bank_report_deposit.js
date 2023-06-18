// step:-1
document.getElementById("btn_Deposit").addEventListener("click", function () {
  // step:-2

  const depositInput = document.getElementById("Deposit_input");
  const newDepositAmount = depositInput.value;
  const newDepositConvertToNum = parseFloat(newDepositAmount);

  // step:-7 Clear The Deposit Input
  depositInput.value = "";

  // extra and optional
  if (isNaN(newDepositConvertToNum)) {
    alert("শুধু টাকা জমা দেওয়ার পরিমান দিতে পারবেন");
    return;
  }

  // step:-3

  const depositTotalAmount = document.getElementById("Deposit_Amount");
  const previousDepositTotal = depositTotalAmount.innerText;
  const DepositTotalConvertToNum = parseFloat(previousDepositTotal);
  // // step:-4
  const currentDepositTotal = DepositTotalConvertToNum + newDepositConvertToNum;
  depositTotalAmount.innerText = currentDepositTotal;
  // // step:-5
  const BalanceTotalElement = document.getElementById("Balance_Amount");
  const previousBalanceTotal = BalanceTotalElement.innerText;
  const previousBalanceTotalConvertNum = parseFloat(previousBalanceTotal);
  // // step:-6
  const currentBalanceTotal =
    previousBalanceTotalConvertNum + newDepositConvertToNum;
  // set The Balance Total
  BalanceTotalElement.innerText = currentBalanceTotal;
});
