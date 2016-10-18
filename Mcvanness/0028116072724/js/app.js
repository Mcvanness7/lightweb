 var appstore=angular.module("applist",['ionic']);
 appstore.config(function($stateProvider,$urlRouterProvider){
     $stateProvider
         .state(
             "tabs",
             {url:"/tabs",abstract:true,templateUrl:"views/tabs/tabs.html"})
         .state(
             "transit",
             {url:"/transit",templateUrl:"views/transit/transit.html",controller:"transitCtrl"})
         .state(
             "tabs.home",
             {url:"/home",views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}})
         .state(
             "tabs.journey",
             {url:"/journey?:title",views:{"tab-home":{templateUrl:"views/journey/journey.html",controller:"journeyCtrl"}}})
         .state(
             "tabs.my",
             {url:"/my",views:{"tab-my":{templateUrl:"views/me/me.html"}}})
         .state(
             "tabs.message",
             {url:"/message",views:{"tab-message":{templateUrl:"views/message/message.html",controller:"messageCtrl"}}})
         .state(
             "tabs.search",
             {url:"/search",views:{"tab-search":{templateUrl:"views/search/search.html",controller:"searchCtrl"}}})
         .state(
             "tabs.more",
             {url:"/more",views:{"tab-search":{templateUrl:"views/more/more.html"}}})

         .state(
             "tabs.detail",
             {url:"/detail?:title",views:{"tab-shopping":{templateUrl:"views/detail/detail.html",controller:"detailCtrl"}}})
         .state(
             "tabs.shopping",
             {url:"/shopping",views:{"tab-shopping":{templateUrl:"views/shopping/shopping.html",controller:"shoppingCtrl"}}})
     $urlRouterProvider.otherwise("/transit")

 })
appstore.factory("productFactory", function ($http, $q) {
     return {
         query: function () {
             var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
             $http.get("products.json")
                 .success(function (data, status, headers, config) {
                     deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
                 })
                 .error(function (data, status, headers, config) {
                     deferred.reject(data);   // 声明执行失败，即服务器返回错误
                 });
             return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
         } // end query
     };
 });
 appstore.factory("dataFactory", function ($http) {
     var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
     $http.get("products.json").success(function (_data, status, headers, config) {
         data.productList = _data;
     });
     return {
         query: function () {
             return data;   // 返回数据
         } // end query
     };
 });
 appstore.factory("dataFactory2", function ($http) {
     var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
     $http.get("views/home/home.json").success(function (_data, status, headers, config) {
         data.productList = _data;
     });
     return {
         query: function () {
             return data;   // 返回数据
         } // end query
     };
 });