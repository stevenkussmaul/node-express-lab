function ListService($http) {
    const self = this;
    self.getItems = () => {
        return $http({
            method: "GET",
            url: "/shoppingList"
        });

    }
}


angular
    .module("shoppingListApp")
    .service("ListService",ListService)