/**
 * Created by liangjiajie on 16/1/20.
 */
angular.module('lsApp')
.controller('schoolCtrl',['$scope','lsFactory',function($scope,lsFactory){
        $scope.menuIndex = 0;
        $scope.menuClick = function(index){
            $scope.menuIndex = index;
        }


    }])