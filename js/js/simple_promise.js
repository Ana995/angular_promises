/**
 * Created by V3790154 on 7/13/2016.
 */
var app = angular.module("app_promise", []);

app.controller("PromiseCtrl", function($scope, $q, $http, $timeout) {

        /*functie de testare simplu get*/
        $scope.mini_test = function () {
            var tmp = [];
            $http.get("https://www.reddit.com/r/Angular/.json").success(function (data) {
                tmp.push(data);
                $scope.combinedNestedResult = tmp.join(", ");
                console.log(combinedNestedResult);
                console.log(tmp);
            });
        };
 /*promise*/
    debugger;
    $http.get("https://www.reddit.com/r/Angular/.json")
        .then(
            /*Succes merge*/
            function(response){

                console.log("Your data is" + response.data);
                console.log(response.data);

            }).catch(function(error){

               console.log("You failed go away!!" + error);
        });

    $scope.startDeferredTime=function(success){
        deferredTimer(success).then(function(data){
                $scope.startDeferredTimerResult="Successfully finished,you rock!" + data.message;
            },
            function(data){
                $scope.startDeferredTimerResult="Failed you did something wrong!! Go away!" + data.message;
            }
        );
    };
    function deferredTimer(success){
        var deferred=$q.defer();
        $timeout(function(){
            if(success){
                deferred.resolve({message:"This is great!"});
            }
            else{

                deferred.reject({message:"NOT GOOD"});
            }

        },1000);

        return deferred.promise;
    }

    });