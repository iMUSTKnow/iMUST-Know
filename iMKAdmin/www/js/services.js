angular.module('starter.services', ['ngResource'])
  .service('usersService', function($resource) {

    //var factory = {};
    var users = [{
      firstname: 'Abubakar',
      lastname: 'Basman',
      username: 'abs15',
      password: '123',
      email: 'absm@gmail.com',
      address: 'CDO City',
      birthday:'May 15, 1996',
      usertype: 'Admin'
    },{
      firstname: 'Jay Mark',
      lastname: 'Dumio',
      username: 'jaydums',
      password: '123',
      email: 'Jay@gmail.com',
      address: 'CDO City',
      birthday:'December 4, 1995',
      usertype: 'Admin'
    },{
      firstname: 'Elah',
      lastname: 'Teodoro',
      username: 'hale',
      password: '123',
      email: 'hale@gmail.com',
      address: 'CDO City',
      birthday:'September 8, 1996',
      usertype: 'Admin'
    },
     {
      firstname: 'Jonela',
      lastname: 'Generosa',
      username: 'elaii',
      password: '123',
      email: 'elaii@gmail.com',
      address: 'CDO City',
      birthday:'October 10, 1995',
      usertype: 'Admin'
    }];

    //  return {
    this.getUsers = function() {
      // return $http.get("http://localhost:8100/users").then(function(response){
      // 	users = response;
      return users;
      //});
    };

    this.insertUser = function(firstName, lastName, userName, passWord, email, address, birthday, userType) {
      // var newID = users.length + 1;

      users.push({
        // id: newID,
        firstname: firstName,
        lastname: lastName,
        // username: userName,
        // email: email,
        // password: passWord,
        // address: address,
        // birthday: birthday,
        usertype: userType
      });

    };
    //  }

    this.updateUser = function(firstName, lastName, userName, emailAddress, password, type, key){
        user[key].firstname= firstName;
        user[key].lastname= lastName;
        user[key].username= userName;
        user[key].email= emailAddress;
        user[key].password= password;
        user[key].userType= type;
    };
    
    this.deleteUser = function(key) {
        user.splice(key, 1);
    };

  });
