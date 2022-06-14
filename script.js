function compute()
{
    p = document.getElementById("principal").value;
    i = document.getElementById("rate").value;
    years= document.getElementById("years").value;
    
    var si =p*i*years/100;
  
 
    document.getElementById("result").innerHTML=" If you deposit"+p+" <br> at an interest rate of "+i+"%  <br>You will receive an amount of  "+si+" ";
    
}
        