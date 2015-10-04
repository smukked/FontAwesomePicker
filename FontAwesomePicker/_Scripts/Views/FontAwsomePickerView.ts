module DES.Views {
    export var FontAwsomePickerView =
        '<div class="paFaPicker" ng-cloak> \
                <div class="faIcon fa" ng-class="fontAwsomeSelected.selector"></div> \
                <input class="faLabel" type="text" ng-model="fontAwsome.label" value="{{fontAwsomeSelected.selector}}" /> \
                <i class="fa fa-list faListBtn" ng-click="showList()" title="List all"></i> \
                <div class="faList" ng-show="fontAwsomeListVisible"> \
                    <i ng-repeat="icon in fontAwsomeList | filter:fontAwsome.label:strict" ng-click="selectIcon(icon)" class="fa {{icon.selector}}" title="{{icon.label}}"></i> \
                </div> \
            </div>';
}  


