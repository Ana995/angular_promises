/**
 * Created by V3790154 on 7/13/2016.
 */
var app = angular.module("app_promise", []);

app.controller("PromiseCtrl", function($scope, $q, $http, $timeout) {

    /*functie de testare simplu get*/

    $scope.mini_test = function() {
       debugger;
        var tmp = [];
        var first;
        var self=this;
        
        $http.get("https://www.reddit.com/r/Angular/.json").success(function(data) {
            tmp.push(data);
            self.first=data;
            $scope.combinedNestedResult = tmp.join(", ");
          // console.log(tmp);
            console.log(first);
            //console.log(first[1]);
        });
    }
    $scope.getData=function(){
        var firstData=$http.get("https://www.reddit.com/r/Angular/.json");
        var secondData=$http.get("https://api.github.com/users/hadley/orgs");
        $q.all([firstData,secondData]).then(function(result){
            var tmp=[];
            angular.forEach(result,function (response) {
                tmp.push(response.data);
                //console.log(tmp);
                $scope.second=response.data;
                //console.log(secondData);
                $scope.first=response.data;
                console.log(firstData);

            });
            return tmp;
        }).then(function(result){
            $scope.combineResult=result.join(", ");
            //console.log(result);
        });
    };


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