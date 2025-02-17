authmodule.controller("loginController", function ($scope) {
    $scope.user = {
        email: "Amartya@gmail.com",
        password: "admin"
    };

    $scope.users = [
        { email: "AmartyaK@gmail.com", password: "admin" },
        { email: "test@gmail.com", password: "admin" },
        { email: "john@gmail.com", password: "admin" },
        { email: "user1@gmail.com", password: "admin" }
    ];

    $scope.onValidate = function () {
        let validUser = $scope.users.find(u => u.email === $scope.user.email && u.password === $scope.user.password);
        if (validUser) {
            console.log("Welcome, " + $scope.user.email);
            document.getElementById("loginMessage").innerText = "Welcome, " + $scope.user.email;
        } else {
            console.log("Invalid User!");
            document.getElementById("loginMessage").innerText = "Invalid User!";
        }
    };
});
