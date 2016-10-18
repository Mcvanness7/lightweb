angular.module("applist").controller('messageCtrl',function($scope,$http){
    $scope.data4=[];
    $scope.page=0;
    $scope.total=1;
    $scope.loMore=function(){
        $http.get("views/message/message.json").success(function(banner){
            $scope.page++;
            angular.forEach(banner,function(page){
                $scope.data4.push(page)
            })
            $scope.total=20;
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    }
    $scope.loMore();
})

