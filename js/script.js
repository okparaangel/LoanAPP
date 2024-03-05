let point = 0 ; 
let accountBalance = 10000; 


function calculateAnnualSalary (){
  let inputField = document.getElementById("monthlySalary"); 
  let input = inputField.value; 
  if (input === ""){
    inputField.style.borderColor = "red" 
    let error = document.getElementById("errorMessage") 
    error.style.color ="red" 
    error.textContent = "Fill the form" 
    error.style.fontSize = "12px"
  }else{
    let annuallySalary = input * 12 
    loanLimit = 45/100 * annuallySalary
    return loanLimit
  }
}

function getRequired (){
  let inputField = document.getElementById("userLoanAmount"); 
  let input = inputField.value; 
  if (input === ""){
    inputField.style.borderColor = "red"
    let error = document.getElementById("errorMessageLoanAmount") 
    error.style.color ="red" 
    error.textContent = "Fill the form" 
    error.style.fontSize = "12px"
  }else{
    if (input <= accountBalance ) {
      point += 10
      console.log(point); 
    }
  }
  return userLoanAmount
}


function creditScoreChecker(){
  let creditScore = document.getElementById("creditHistory"); 
 let inputField = creditScore
  if (creditScore.value === ""){
  inputField.style.borderColor = "red"
    let error = document.getElementById("errorMessagecreditHistory") 
    error.style.color ="red" 
    error.textContent = "Fill the form" 
    error.style.fontSize = "12px"
}
else if (creditScore >= 1){
    point += 10; 
    console.log(point); 
  }
return creditHistory
}
 function lastDepositDate(){
  let lastDepositValue = document.getElementById("depositDate"); 
  let userDepositDate = new Date(lastDepositValue); 
  let today = new Date();
  let differenceInMs = today - userDepositDate ;
  let differenceInDays = Math.floor(differenceInMs /
  (1000 * 60 * 60 *24)) 
  let inputField = lastDepositValue
  if (lastDepositValue.value ===""){
    inputField.style.borderColor = "red"
  }
  if (differenceInDays <= 30){
    point += 5;
  }else{
    console.log ( point)
  }
  return lastDepositDate;
 }

 function collectionDate(){
  let collectiondate =document.getElementById("collectiondate"); 
  if(collectiondate.value === ''){
    collectiondate.classList.add('error')
  }else{
  let userCollectionDate = new Date(collectiondate); 
  let today = new Date();
  let differenceInMs = today - userCollectionDate ;
  let differenceInDays = Math.floor(differenceInMs /
  (1000 * 60 * 60 *24)) 
  let inputField = collectiondate
  if (collectiondate.value === ""){
    inputField.style.borderColor = "red"
      let error = document.getElementById("errorMessageCollectionDate")
      error.textContent = "Fill the form" 
      console.log(error); 
      error.style.color ="red" 
      error.style.fontSize = "12px"
  }
  
  else (differenceInDays >= 180);{
    point += 10;
  }
  return collectiondate
}
 }

 function repaymentPeriod(){
  let loanPaymentDate = document.getElementById("loanpaymentperiod");
  let userLoanPaymentDate = new Date(loanPaymentDate);
  let today = new Date();
  let differenceInMs =userLoanPaymentDate -  today;
  let differenceInDays = Math.floor(differenceInMs /
  (1000 * 60 * 60 *24)) 
  let inputField = loanPaymentDate
  if (inputField.value === ""){
    inputField.style.borderColor = "red"
      let error = document.getElementById("errorMessageLoanRepayment") 
      error.style.color ="red" 
      error.textContent = "Fill the form" 
      error.style.fontSize = "12px"
  }

  else (differenceInDays <= 180);{
    point += 5;
  }  
  return loanPaymentDate;
 }


 function accountType(){
  let accounttype = document.getElementById("accounttype"); 
   
  let inputField = accounttype
  if (accounttype.value === ""){
    inputField.style.borderColor = "red"
      let error = document.getElementById("errorMessageaccountType") 
      error.style.color ="red" 
      error.textContent = "Fill the form" 
      error.style.fontSize = "12px"
  }else if (accounttype >= 1){
    point += 10; 
  }
    else{
      point +=5
      console.log(point); 
    }
    return accounttype
  } 

function getLoan(){
  calculateAnnualSalary(); 
  getRequired(); 
  creditScoreChecker(); 
  lastDepositDate();
  collectionDate();
  repaymentPeriod();
  accountType();

  if(point >= 30){
    console.log(point); 
     window.location.href = "acknowledgment.html";
     alert("Congratulations Your Loan Has Been Awarded  " )
  }
}








// let point = 0;
// const accountBalance = 210000;

// function calculateAnnualSalary(){
//     let inputField = document.getElementById("monthlySalary");
//     let input = inputField.value;
//     if(input === ""){
//         inputField.style.borderColor = "red"
//         let error = document.getElementById("errorMessage")
//         error.style.color = "red"
//         error.textContent = "fill the form"
//         error.style.fontSize = "12px"
//     }else{
//         let annualSalary = input * 12;
//         //console.log(annualSalary);
//         return annualSalary
//     }
// }

// function getRequired(){
//     let inputField = document.getElementById("userLoanAmount");
//     let input = inputField.value;
//     if(input === ""){
//         inputField.style.borderColor = "red"
//         let error = document.getElementById("errorMessageLoanAmount")
//         error.style.color = "red"
//         error.textContent = "fill the form"
//         error.style.fontSize = "12px"
//     }else{
        
//     }
// }

// function creditScoreChecker(){
//     let creditScore = document.getElementById("creditHistory").value;

//     if(creditScore >= 1){
//         point =+ 10;
//         //console.log(point);
//     }
// }

// function lastDepositDate(){
//     let lastDepositValue = document.getElementById("depoistDate").value;
//     let userDepositDate = new Date(lastDepositValue);
//     let today = new Date();

//     let differenceInMs = today - userDepositDate;

//     let differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 *24))

//     if(differenceInDays <= 30){
//         point += 5;
//     }
//     console.log(point);
// }

// function getLoan(){
//     calculateAnnualSalary();
//     getRequired();
//     creditScoreChecker();
//     lastDepositDate();

//     window.location.href = "approved.html"
// }


// console.log(point);