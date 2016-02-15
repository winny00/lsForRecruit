/**
 * Created by liangjiajie on 16/1/18.
 */
//路由的配置
angular.module('lsApp').config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('ls',{
            url: '/ls',
            templateUrl: 'html/main.html',
        }).state('ls.home', {
            url: '/home',
            templateUrl: 'html/home.html',
            controller:"homeCtrl"
        }).state('ls.school', {
            url: '/school',
            templateUrl: 'html/school.html',
            controller : 'schoolCtrl'
        }).state('ls.school.info',{
            url : '/info',
            views :{
                "school" : {
                    templateUrl : 'html/school/information.html',
                    controller : 'infoCtrl'
                }
            }
        }).state('ls.school.process',{
            url :'/process',
            views :{
                "school" : {
                    templateUrl : 'html/school/process.html',
                }
            }
        }).state('ls.school.job',{
            url : '/job',
            views : {
                "school" : {
                    templateUrl :'html/school/jobs.html',
                    controller:'jobCtrl'
                }
            }
        }).state('ls.sociology', {
            url: '/sociology',
            templateUrl: 'html/sociology.html',
            controller : 'sociologyCtrl'
        }).state('ls.about',{
            url:'/about',
            templateUrl:'html/about.html',
            controller : 'aboutCtrl'
        }).state('ls.about.pro',{
            url: '/pro',
            views : {
                "about" : {
                    templateUrl: 'html/about/companyprofile.html',
                }
            }
        }).state('ls.about.contactus',{
            url: '/contactus',
            views : {
                "about" : {
                    templateUrl: 'html/about/contactus.html',
                }
            }
        }).state('ls.about.person',{
            url:'/person',
            views :{
                "about" :{
                    templateUrl : 'html/about/personinls.html',
                    controller : 'personCtrl'
                }
            }
        }).state('ls.about.culture',{
            url : '/culture',
            views :{
                "about" : {
                    templateUrl : 'html/about/lsculture.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/ls/home');
}])