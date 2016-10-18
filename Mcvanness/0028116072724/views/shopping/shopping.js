angular.module("applist").controller('shoppingCtrl',function($scope,$http,dataFactory,$ionicViewSwitcher,$state){
        $scope.data2=[];
        $scope.page=0;
        $scope.total=1;
    $scope.loMore=function(){
        $http.get("products.json").success(function(banner){
            $scope.page++;
            angular.forEach(banner,function(page){
                $scope.data2.push(page)
            })
            $scope.total=20;
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    }
    $scope.loMore();
        $scope.data=dataFactory.query();



        $scope.toDetail=function(product){
            $state.go("tabs.detail",{title:product});
            //$ionicViewSwitcher.nextDirection("forward");
        }
})
