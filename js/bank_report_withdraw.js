// step:-1
document.getElementById("btn_Withdraw").addEventListener("click", function () {
  // step:-2
  const withdrawInput = document.getElementById("Withdraw_input");
  const newWithdrawAmountString = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step:-7
  withdrawInput.value = "";
// extra and optional
  if (isNaN(newWithdrawAmount)) {
    alert("শুধু আপনার টাকা উত্তোলন নাম্বার দিতে পারবেন");
    return;
  }

  // step:-3
  const withdrawTotalElement = document.getElementById("Withdraw_Amount");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step:-5
  const BalanceTotalElement = document.getElementById("Balance_Amount");
  const previousBalanceTotalString = BalanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("আপনার একাউন্টে এত টাকা নাই। ");
    return;
  }

  // step:-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step:-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  BalanceTotalElement.innerText = newBalanceTotal;
});
