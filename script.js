//this function displays value of range selector chosen
function dispinterest(vol) {
    document.querySelector("#irate").value= vol+"%";
  }

  //this function checks amount entered to be > 0.
  function checkdata() {
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("interest").value;
    var years = document.getElementById("years").value;

    // check validity of amount
    if (amount <= 0) {
      alert("Enter a positive number");
      document.getElementById('amount').focus();
      return false;
    }

   
    // return if all is well after displaying the results
    return true;    

  }
  //this function displays the result
  function showresult() {
    var amount = document.getElementById("amount").value;
    if (amount <= 0) {
        alert("Enter a positive number");
        var ele = document.getElementById("lin1f");
            ele.innerHTML = "";
            ele = document.getElementById("lin1s");
            ele.innerHTML = "";
            var ele = document.getElementById("lin1t");
            ele.innerHTML = "";
           
            ele = document.getElementById("lin2f");
            ele.innerHTML = "";
            ele = document.getElementById("lin2s");
            ele.innerHTML = "";
            ele = document.getElementById("lin2t");
            ele.innerHTML = ""; 
            
            ele = document.getElementById("lin3f");
            ele.innerHTML = "";
            ele = document.getElementById("lin3s");
            ele.innerHTML = "";
            ele = document.getElementById("lin3t");
            ele.innerHTML = "";

            ele = document.getElementById("lin4f");
            ele.innerHTML = "";
            ele = document.getElementById("lin4s");
            ele.innerHTML = "";
        document.getElementById("amount").focus();
    } else {    
    var interest = document.getElementById("interest").value;
    var years = document.getElementById("years").value;
    var iamt = amount * interest * years / 100;
    var dateObj = new Date();
    var cyear = dateObj.getFullYear();
    var matyr = parseInt(cyear) + parseInt(years);
    var ele = document.getElementById("lin1f");
    ele.innerHTML = "If you deposit ";
    var ele = document.getElementById("lin1s");
    ele.innerHTML = amount;
    var ele = document.getElementById("lin1t");
    ele.innerHTML = ",";
    
    var ele = document.getElementById("lin2f");
    ele.innerHTML = "at an intrest rate of ";
    var ele = document.getElementById("lin2s");
    ele.innerHTML = interest + "%";
    var ele = document.getElementById("lin2t");
    ele.innerHTML = ".";

    var ele = document.getElementById("lin3f");
    ele.innerHTML = "You will receive an amount of ";
    var ele = document.getElementById("lin3s");
    ele.innerHTML = iamt;
    var ele = document.getElementById("lin3t");
    ele.innerHTML = ",";

    var ele = document.getElementById("lin4f");
    ele.innerHTML = "in the year ";
    var ele = document.getElementById("lin4s");
    ele.innerHTML = matyr;
    //var ele = document.getElementById("lin4t");
    //ele.innerHTML = ".";
    }
  }        