/**
 * Created by liangjiajie on 16/1/20.
 */
angular.module('lsApp')
.controller('infoCtrl',['$scope','lsFactory','$modal','SERVER'
        ,function($scope,lsFactory,$modal,SERVER){
        var getSchoolInfoData = function(){
            lsFactory.ajaxService({
                url : SERVER.api_url.schoolInfoDataUrl,
                params : '',
                success:function(response){
                    $scope.schoolInfoData = response;
                }

            })
        }
        $scope.open = function(data){
            var modalInstance = $modal.open({
                templateUrl: SERVER.modal_url.schoolModalUrl,
                controller : 'schoolInfoCtrl',
                backdrop : 'static',
                size : 'lg',
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
        $scope.init = function(){
            getSchoolInfoData();
        }
        $scope.clickDemo = function(){
            getSchoolInfoData();
        }
    }])
.controller('schoolInfoCtrl',['$scope','$modalInstance','resolveData',function($scope,$modalInstance,resolveData){
        $scope.schoolInfoItem = resolveData;
        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        }
    }])