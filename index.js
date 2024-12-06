/** Question 1:
 You are given an object book with the properties title, author, and yearPublished. Perform the following operations: */
var book={
    "title":"THE BEST OF RUSKIN BOND" ,
    "author":"RUSKIN BOND",
    "yearpublish":1990,
}
console.log(book)
/**1 access the author property and print it. */
console.log(book['author'])
// 2.Modify the yearPublished property to 2022.
book['yearpublish']=2002;
console.log(book)
//3.Add a new property genre to the book object with the value “Fiction”.
book['genre']='Fiction'
console.log(book);
//4.Delete the title property from the book object.
delete book.title
console.log(book);
console.log("..............................................................")

/** Question 2:
  You are given an object employee with the properties name, age, position, and salary. Perform the following operations:*/
var employee={
    'name':"tagore",
    'age':22,
    'position':"web devloper",
    'salary':"40,000",
}
console.log(employee);
// 1.	Access the position property and print it.
console.log(employee['position'])
console.log(employee.position)
//2.	Modify the salary property to 50000.
employee['salary']=50000;
console.log(employee);
//3.	Add a new property department to the employee object with the value “HR”.
employee['department']="HR"
console.log(employee)
// 4.	Delete the age property from the employee object.
delete employee.age
console.log(employee)
// console.clear()
console.log("................................................................")
/**Question 3:
You are given an object product with the properties id, name, price, and category. Perform the following operations:
 */
var product={
    "id":"0034",
    "name":"redmi",
    "price":700000,
    "category":"Accessories",
}
console.log(product);
// 1.	Access the price property and print it.
console.log(product["price"])
//2.	Modify the category property to “Electronics”.
product['category']="Electronics";
console.log(product);
//3.	Add a new property inStock to the product object with the value true.
product['instock']=true;
console.log(product);
// 4.	Delete the id property from the product object.
delete product.id
console.log(product);
console.log(".....................................")
console.clear()
/**Question 4:
You are given an object car with the properties make, model, year, and color. Perform the following operations:
 */
var car={
    make:"Audi",
    model:"e-tron GT ",
    year:2020,
    color:'red'
}
console.log(car);
//1.	Access the make property and print it.
console.log(car["make"])
// 2.	Modify the color property to “Black”.
car['color']="black";
console.log(car);
// 3.	Add a new property engineType to the car object with the value “V6”.
car["engineType"]="v6";
console.log(car);
// 4.	Delete the year property from the car object.
delete car.year
console.log(car)
console.clear()
/**Question 5:
You are given an object student with the properties name, age, grade, and school. Perform the following operations:
 */
var student={
    name:"suman",
    age:23,
    grade:90,
    school:"svs school"
}
console.log(student);
// 1.	Access the school property and print it.
console.log(student.school)
// 2.	Modify the grade property to 95.
student["grade"]=95;
console.log(student);
// 3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
student["hobbies"]="reading"
student["hobbies"]="sports"
console.log(student)
// 4.	Delete the age property from the student object.
delete student.age
console.log(student)
console.table(student)
console.clear()
/**Question 6:
You are given an object user with the following structure:
*/
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
  console.log(user);
// Perform the following operations:
//  1.	Access the city property from the address object and print it.
console.log(user.profile.address.city)
console.log(user['profile']['address']['city'])
// 2.	Modify the theme property in the preferences object to “light”.
user["preferences"]['theme']="light";
console.log(user)
// 3.	Add a new property phone to the profile object with the value “555-9876”.
user['profile']['mobile']="555-9876";
console.log(user)
console.log(user.profile)
// 4.	Delete the zip property from the address object.
delete user.profile.address.zip
console.log(user['profile']["address"])
console.table(user)
console.clear();
/**Question 7:
You are given an object company with the following structure:
 */
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };
  console.log(company);
//  1.	Access the email of the second employee (Bob) and print it.
console.log(['employee'][1]['contact']['email']);
// 2.	Modify the phonr number of alice to "555-1111"; 
company['employees'][0]['contact']['phone']="555-1111";
// 3 add a new property department with valu of 'engineering' to the first employee(alice)
company['employees'][0]['department']='Engineering'
// 4.delete the location property from the company object.
delete comapny['location']




  

