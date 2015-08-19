/**
 * Created by yxia on 8/18/15.
 */
var myApp = angular.module("myApp", ['firebase']);

myApp.controller("xiayan", function ($scope) {
    $scope.xiayan1 = "xiayan1111";
});

myApp.controller("exampleController", function ($scope) {

    $scope.debugMsg = "xxxxx message";
    //var ref = new Firebase("https://gnfvrhmlm7o.firebaseio-demo.com");

    //$scope.messages = $firebaseArray(ref);
});

//$scope.list = $firebase(new Firebase("https://test-list.firebaseio-demo.com/list"));

myApp.controller("firebaseController", ["$scope", "$firebaseArray", function ($scope, $firebaseArray) {

    var demo2 = "https://xydemo.firebaseio.com/list";
    var list = $firebaseArray(new Firebase(demo2));
    $scope.list = list;

    // add an item
    //list.$add({ foo: "Mike" });
    //list.$add({ foo: "Jane" });
    //list.$add({ foo: "Joe" });
    //list.$add({ foo: "Waylon" });




    //remove an item


    // make the list available in the DOM
    //$scope.list = list;
    //console.log(list);

}



]);