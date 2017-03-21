var employee = { 
	name: "Shubham Agarwal", age: 21, salary: 60000, 
	address: { 
		city: "Gurugram", 
		state: "Haryana", 
		pin: 122001
		},
	}

console.log("Name: "+ employee['name'] + "\nAge: "+ employee['age'] +"\nSalary: " + employee['salary'] + "\nCity: " + employee.address.city +"\nState: " + employee.address.state + "\nPincode: " + employee.address.pin);
