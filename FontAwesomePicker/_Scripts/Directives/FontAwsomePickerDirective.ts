module DES.Directives {
    export function FontAwsomePickerDirective() {
        return {
            restrict: 'A',
            replace: true,
            template: Views.FontAwsomePickerView,
            scope: {},
            link: ($scope: Interfaces.IFontAwsomePicker, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {

                var strEndsWith = (str, suffix): boolean => {
                    return str.match(suffix + "$") == suffix;
                }

                var faStyleSheet = <string>attrs['fontAwsomePicker'];
                var faStyle = <string>attrs['value'];
                var iconSelected = false;
                
                $scope.fontAwsome = new Models.FontAwsomeModel(faStyle.replace('fa-', ''), '');
                $scope.fontAwsomeSelected = new Models.FontAwsomeModel(faStyle.replace('fa-', ''), faStyle);
                $scope.fontAwsomeListVisible = false;
                $scope.fontAwsomeList = [];

                // find font awsome icons
                if (faStyleSheet) {
                    angular.forEach(document.styleSheets, (sheet: StyleSheet, i) => {
                        if (sheet.href && strEndsWith(sheet.href, faStyleSheet) && sheet['rules']) {
                            var ruleList = <CSSRuleList>sheet['rules'];
                            angular.forEach(ruleList, (rule: CSSStyleRule, j) => {
                                var selectorTxt = rule['selectorText'];
                                if (selectorTxt && selectorTxt.indexOf('.fa-') === 0 && strEndsWith(selectorTxt, '::before')) {
                                    $scope.fontAwsomeList.push(
                                        new Models.FontAwsomeModel(
                                            selectorTxt.substring(4, selectorTxt.indexOf('::before')),
                                            selectorTxt.substring(1, selectorTxt.indexOf('::before'))
                                        )
                                    );
                                }
                            });
                        }
                    });
                }

                $scope.selectIcon = (fontAwsome: Models.FontAwsomeModel) => {
                    $scope.fontAwsomeListVisible = false;
                    iconSelected = true;
                    $scope.fontAwsomeSelected = angular.copy(fontAwsome);
                    $scope.fontAwsome.label = fontAwsome.label;
                }

                $scope.showList = () => {
                    if (!$scope.fontAwsomeListVisible) {
                        $scope.fontAwsome.label = '';
                        $scope.fontAwsome.selector = '';
                      
                    } else {
                        $scope.fontAwsome.label = $scope.fontAwsomeSelected.label;
                        iconSelected = true;
                    }
                    $scope.fontAwsomeListVisible = !$scope.fontAwsomeListVisible;
                }

                $scope.filterList = () => {
                    $scope.fontAwsomeListVisible = true;
                }

                $scope.$watch('fontAwsome', (newValue: string, oldValue) => {
                    if (!iconSelected && newValue !== oldValue) {
                        $scope.filterList();
                    }
                    iconSelected = false;
                }, true);
            }
        }
    }
}