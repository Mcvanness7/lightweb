angular.module("applist").controller('journeyCtrl',function($stateParams,$scope,$http,dataFactory2,$ionicViewSwitcher,$state){

    $scope.title = $stateParams.title;
    var data=dataFactory2.query()
    // 查询出来要显示在view中的商品数据

    angular.forEach(data.productList, function (item) {
        angular.forEach(item.left,function(smallleft){
            if(smallleft.title==$scope.title){
                $scope.product = smallleft;
                return false;
            }
        })

    });

    angular.forEach(data.productList, function (item) {
        angular.forEach(item.right,function(smallright){
            if(smallright.title==$scope.title){
                $scope.product = smallright;
                return false;
            }
        })

    });

})
