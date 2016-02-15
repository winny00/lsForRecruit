/**
 * Created by liangjiajie on 16/1/19.
 */
angular.module('lsApp')
.controller('aboutCtrl',['$scope',function($scope){
        $scope.menuIndex = 0;
        $scope.menuClick = function(index){
            $scope.menuIndex = index;
        }

    }])