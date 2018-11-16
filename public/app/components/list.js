
const list = {
    template: `
    <button ng-click="$ctrl.getItems();">Refresh Shopping List</button>

    <ul>
        <li ng-repeat="item in $ctrl.items">{{item.product}}</li>
    </ul>

    `,
    controller: ["ListService",function(ListService) {
        const vm = this;
        vm.getItems = () => {
            ListService.getItems().then((response) => {
                console.log(response);
                vm.items = response.data;
            });
        }
    }]
}



angular
    .module("shoppingListApp")
    .component("list",list)