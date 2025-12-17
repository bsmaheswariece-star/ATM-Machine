let accounts = {
  acc1:{pin:"1111", balance:5000},
  acc2:{pin:"2222", balance:12000}
};
let currentAcc;

function insertCard(){
  document.getElementById("start").style.display="none";
  document.getElementById("pinScreen").style.display="block";
}

function checkPin(){
  let acc = document.getElementById("account").value;
  let pin = document.getElementById("pin").value;

  if(accounts[acc].pin === pin){
    currentAcc = acc;
    document.getElementById("pinScreen").style.display="none";
    document.getElementById("menu").style.display="block";
  }else{
    document.getElementById("pinMsg").innerText="Wrong PIN";
  }
}

function checkBalance(){
  document.getElementById("output").innerText =
  "Balance: ₹" + accounts[currentAcc].balance;
}

function withdraw(){
  let amt = prompt("Enter amount");
  if(amt <= accounts[currentAcc].balance){
    accounts[currentAcc].balance -= amt;
    document.getElementById("output").innerText =
    "Withdraw Success. Balance ₹" + accounts[currentAcc].balance;
  }else{
    document.getElementById("output").innerText = "Insufficient Balance";
  }
}

function deposit(){
  let amt = prompt("Enter amount");
  accounts[currentAcc].balance += Number(amt);
  document.getElementById("output").innerText =
  "Deposit Success. Balance ₹" + accounts[currentAcc].balance;
}

function exit(){
  location.reload();
}
