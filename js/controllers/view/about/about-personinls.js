/**
 * Created by liangjiajie on 16/1/19.
 */
angular.module('lsApp')
.controller('personCtrl',['$scope','lsFactory','$modal','SERVER',
        function($scope,lsFactory,$modal,SERVER){

        $scope.open = function(data){
            var modalInstance = $modal.open({
                templateUrl: SERVER.modal_url.aboutCarouselPhotoUrl,
                controller : 'photoCtrl',
                backdrop : 'static',
                size : 'mid',
                resolve : {
                    resolveData:function(){
                        return data;
                    }
                },
                result : function(){
                }

            });
            modalInstance.result.then(function(result){
            })
        }
        var getPhotoData = function(){
            lsFactory.ajaxService({
                url : SERVER.api_url.photoDataUrl,
                params : '',
                success:function(response){
                    $scope.picList = response;
                }
            })
        }
        $scope.init = function(){
            getPhotoData();
        }
    }])
.controller('photoCtrl',['$scope','$modalInstance','resolveData',function($scope,$modalInstance,resolveData){
        $scope.photoData = resolveData;
        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        }
    }])