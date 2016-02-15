/**
 * Created by liangjiajie on 16/1/20.
 */
angular.module('lsApp').factory('lsFactory',['$http',function($http){
    //ajaxService对象
    var ajaxService = function(opt){
        $http({
            method:opt.method || 'GET',
            url:opt.url,
            params:opt.params,
            data:opt.data,
            cache :true
        }).then(function(response){
            if(response.status === 200){
                (opt.success || angular.noop)(response.data);
                return ;
            }
            (opt.error || angular.noop)();
        })
    }

    return{
        ajaxService : ajaxService
    }
}])