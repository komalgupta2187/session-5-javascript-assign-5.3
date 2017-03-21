var employee = { 
	name: "Komal Arya", age: 29, salary: 80000, 
	address: { 
		city: "Pune", 
		state: "Maharastra", 
		pin: 412114
		},
	}

console.log("Name: "+ employee['name'] + "\nAge: "+ employee['age'] +"\nSalary: " + employee['salary'] + "\nCity: " + employee.address.city +"\nState: " + employee.address.state + "\nPincode: " + employee.address.pin);
