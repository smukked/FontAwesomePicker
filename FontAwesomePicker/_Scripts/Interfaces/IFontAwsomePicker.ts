module ProActive.SharePoint.IntraActive.Interfaces {
    export interface IFontAwsomePicker extends ng.IScope {
        fontAwsome: Models.FontAwsomeModel;
        fontAwsomeList: Models.FontAwsomeModel[];
        fontAwsomeListVisible: boolean;
        showList(): void;
        filterList(): void;
        selectIcon(fontAwsome: Models.FontAwsomeModel): void;

    }
} 