const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.json());       
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));
 

app.get('/',function(req,res) {
  res.sendFile(__dirname + "/index.html");
});
app.get('/success', function(req,res){ 
    res.sendFile(__dirname + "/public/success.html") 
  });
   

app.post('/', (req, res) => {
    const formData = {
      firstname: req.body.fname,
      lastname: req.body.lname,
      email: req.body.email,
      streetname: req.body.streetname,
      zipcode: req.body.zipcode,
      city: req.body.city,
      startdate: req.body.startdate,
      enddate: req.body.enddate,
    };

    const formObject = JSON.stringify(formData);
    res.redirect('/success.html');
    console.log(formObject);
  });

 

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}); 