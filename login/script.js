angular.module('loginApp', ['ngCookies'])
// .controller('loginCtrl', function ($scope, $http) {
//     $scope.formData = {};
//     $scope.formData.username = "";
//
//
//     $scope.send = function () {
//
//         $cookies.put('user', formData.username);
//         var username = $cookies.get('user');
//
// //You can set the expired time with the third params
//         var today = new Date();
//         var expired = new Date(today);
//         expired.setDate(today.getDate() + 1); //Set expired date to tomorrow
//         $cookies.put('user', formData.username, {expires: expired});
//
//
//         if ($scope.formData.username == "admin") {
//             $scope.formData.username = "Welcome Admin";
//
//
//         } else {
//             $scope.formData.username = "Welcome User";
//         }
//
//         return $scope.formData.username
//     };


    .controller('loginCtrl', ['$cookieStore', function ($cookieStore) {

        $scope.formData = {};

        // Put cookie
        $cookieStore.put('formData.username', 'oatmeal');
        // Get cookie
        var favoriteCookie = $cookieStore.get('formData.username');
        console.log(favoriteCookie);
        // Removing a cookie
        $cookieStore.remove('myFavorite');
    }]);


$().ready(function () {
    $("#card").flip({
        trigger: 'manual'
    });
});


$(".signup_link").click(function () {

    $(".signin_form").css('opacity', '0');
    $(".signup_form").css('opacity', '100');


    $("#card").flip(true);

    return false;
});

$("#unflip-btn").click(function () {

    $(".signin_form").css('opacity', '100');
    $(".signup_form").css('opacity', '0');

    $("#card").flip(false);

    return false;

});