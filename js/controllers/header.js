/**
 * Created by liangjiajie on 16/1/25.
 */
angular.module('lsApp')
.controller('lsHeader',['$scope',function($scope){
    $scope.headIndex=0;
    $scope.clickHead = function(index){
        $scope.headIndex = index;
    }
}])