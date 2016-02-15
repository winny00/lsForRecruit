/**
 * Created by liangjiajie on 16/1/24.
 */
//常量的配置
angular.module('lsApp')
    .constant('VERSION',{
    vs : "1.0"
})
    .constant('SERVER',{
        api_url : {
            schoolInfoDataUrl : "./data/jobMsg.json",
            selectJobDataUrl : "./data/wordtype2.json",
            jobDataUrl : "./data/job2_1.json",
            photoDataUrl : "./data/photoData.json"
        },
        modal_url : {
            schoolModalUrl : "html/views/schoolWindow.html",
            jobModaUrl : 'html/views/jobWindow.html',
            aboutCarouselPhotoUrl : "html/views/carouselPhoto.html"
        }
})
    //启动项
    .run(function($rootScope,VERSION){
    $rootScope.VERSION = VERSION;
});

