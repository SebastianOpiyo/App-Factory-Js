document.getElementById("button").addEventListener("click", loadCustomer); //event listener for button 1
document.getElementById("button2").addEventListener("click", loadCustomers); //event listener for button2

function loadCustomer() {
  const xhr = new XMLHttpRequest();
  //set up Ajax
  xhr.open("GET", "customer.json", true);
  xhr.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      const customer = JSON.parse(this.responseText);
      console.log(customer);
      const output = `<ul>
            <li>customer name: ${customer.id}</li> 
            <li>customer name: ${customer.names}</li>
            <li>customer name: ${customer.company}</li>
              </ul>`;
      document.getElementById("output").innerHTML = output;
    }
  };
  //initialize ajax
  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customers.json", true);
  xhr.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = "";
      customers.forEach(function(customer) {
        output += `<ul>
               <li>customer name: ${customer.id}</li>
               <li>customer name: ${customer.names}</li>
              <li>customer name: ${customer.company}</li>
               </ul>`;
      });
      document.getElementById("output").innerHTML = output;
    }
  };
  xhr.send();
}
