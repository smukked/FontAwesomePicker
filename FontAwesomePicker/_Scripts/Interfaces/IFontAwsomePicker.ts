module DES.Interfaces {
    export interface IFontAwsomePicker extends ng.IScope {
        fontAwsome: Models.FontAwsomeModel;
        fontAwsomeSelected: Models.FontAwsomeModel;
        fontAwsomeList: Models.FontAwsomeModel[];
        fontAwsomeListVisible: boolean;
        showList(): void;
        filterList(): void;
        selectIcon(fontAwsome: Models.FontAwsomeModel): void;
    }
} 