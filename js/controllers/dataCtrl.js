/**
 * Created by V3790154 on 7/13/2016.
 */
var app= angular.module('App_promises',['$q','getData']);

app.controller('dataCtrl',function($scope,getData){
    $scope.listData=getData.getList().then(function(topData){
        console.log('Testing...');
    },function(msg){
        alert(msg);
    });
    console.log($scope.listData);
});

