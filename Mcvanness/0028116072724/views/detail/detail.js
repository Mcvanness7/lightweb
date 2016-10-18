angular.module("applist")
    .controller("detailCtrl",function($scope,$stateParams,dataFactory){
    // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
    $scope.title = $stateParams.title;
    // 查询出来要显示在view中的商品数据
    var data = dataFactory.query();

    angular.forEach(data.productList, function (item) {

        angular.forEach(item.smallPic,function(smallitem){
            if (smallitem.title == $scope.title) {

                $scope.product = smallitem;

                return false;   // 中断forEach循环 <=> break
            }
        })

    });
})
