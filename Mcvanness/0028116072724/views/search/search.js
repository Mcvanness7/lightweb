angular.module("applist").controller('searchCtrl',function($scope,$http,$state){
        $scope.data=[];
        $scope.page=0;
        $scope.total=1;

        $scope.loadMore=function(){
            $scope.page++;
            $http.get("views/search/search.json").success(function(picTxt){
                angular.forEach(picTxt,function(imforma){
                    $scope.data.push(imforma)
                })
                $scope.total=10;
            }).finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete")
            })
        }
        $scope.loadMore()
        $scope.toMore=function(){
            $state.go("tabs.more");
            //$ionicViewSwitcher.nextDirection("forward");
        }

})

