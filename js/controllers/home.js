/**
 * Created by liangjiajie on 16/1/18.
 */

angular.module('lsApp')
    .controller('homeCtrl',['$scope',function($scope){
        $scope.ball_1_on = false;
        $scope.ball_2_on = false;
        $scope.ball_3_on = false;
        $scope.ball_4_on = false;
        $scope.ball_5_on = false;
        $scope.myInterval = 5000;
                // 轮播图数据初始化
                 var slides = $scope.slides = [];
                 // 添加轮播图源
                 slides.push({ image: 'img/u0.png', text: '' });
                 slides.push({ image: 'img//u0.png', text: '' });
    }])