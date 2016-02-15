/**
 * Created by liangjiajie on 16/1/19.
 */
angular.module('lsApp')
.controller('jobCtrl',['$scope','lsFactory','$filter','SERVER','$modal',
        function($scope,lsFactory,$filter,SERVER,$modal){
        $scope.init = function(){
            getSelectJob();
            getJobData();
        }
        //表格参数
        $scope.tableParam = {
            page :1,
            pageSize : 10,
        }
        //过滤的数据
        $scope.selectParam = {
            placeVal : '',//工作地点
            typeVal:'',//工作类型
            productVal:''//产品类
        }
        $scope.clickJobPlace = function(type,val){
            if(type == 0){
                $scope.selectParam.placeVal = val;
            }else if(type == 1){
                $scope.selectParam.typeVal = val;
            }else if(type == 2){
                $scope.selectParam.productVal = val;
            }
            console.log($scope.selectParam);
            $scope.totalItems = $filter("filterJob")($scope.jobData,$scope.selectParam).length;

        }
            $scope.open = function(data){
                var modalInstance = $modal.open({
                    templateUrl: SERVER.modal_url.jobModaUrl,
                    controller : 'schoolJobDataCtrl',
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
        var getSelectJob = function(){
            lsFactory.ajaxService({
                method :'GET',
                url : SERVER.api_url.selectJobDataUrl,
                params : '',
                success:function(response){
                    $scope.selectJob = response.selectJob;
                    //console.log(JSON.stringify($scope.selectJob));

                }
            })
        }

        var getJobData = function(){
            lsFactory.ajaxService({
                method :'GET',
                url : SERVER.api_url.jobDataUrl,
                params : '',
                success : function(response){
                    $scope.jobData = response;
                    $scope.totalItems = response.length;
                }
            })
        }
    }])
    .controller('schoolJobDataCtrl',['$scope','$modalInstance','resolveData',function($scope,$modalInstance,resolveData){
        $scope.schooJobData = resolveData;
        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        }
    }])
