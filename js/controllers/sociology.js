/**
 * Created by liangjiajie on 16/1/19.
 */

angular.module('lsApp')
.controller('sociologyCtrl',['$scope','lsFactory','SERVER','$modal','$filter'
        ,function($scope,lsFactory,SERVER,$modal,$filter){
        $scope.init = function(){
            getSelectJob();
            getJobData();
        }
            var DemoData;
        $scope.selectNavStatus='';
        $scope.selectType  = -1;
        $scope.selectNavVal = function(val,type){
            $scope.selectNavStatus = val;
            $scope.selectType = type;
            $scope.selectParam.placeVal = '';
            $scope.selectParam.typeVal = '';
            $scope.selectParam.productVal = '';
            $scope.jobData = $filter('filterHotAndNewJob')(DemoData,$scope.selectNavStatus);
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
            $scope.jobData = DemoData;
            if(type == 0){
                $scope.selectParam.placeVal = val;
            }else if(type == 1){
                $scope.selectParam.typeVal = val;
            }else if(type == 2){
                $scope.selectParam.productVal = val;
            }
            $scope.totalItems = $filter("filterJob")(DemoData,$scope.selectParam).length;

        }
        $scope.open = function(data){
            var modalInstance = $modal.open({
                templateUrl: SERVER.modal_url.jobModaUrl,
                controller : 'sociologyJobDataCtrl',
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
                    $scope.selectHotJob = response.hotJob;
                    $scope.selectNewJob = response.newJob;

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
                    DemoData = response;
                    $scope.totalItems = response.length;
                }
            })
        }
    }])
.controller('sociologyJobDataCtrl',['$scope','$modalInstance','resolveData',function($scope,$modalInstance,resolveData){
        $scope.schooJobData = resolveData;
        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        }
    }])