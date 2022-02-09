import { LightningElement,track, wire } from 'lwc';
import getEmployees from '@salesforce/apex/EmployeeBrowser1.getEmployees';
const columns = [
    {
        label: 'View',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            iconName: 'action:preview',
            title: 'Preview',
            variant: 'border-filled',
            alternativeText: 'View'
        }
    },

    {
        label: "Name",
        fieldName: "Name",
    },
];
export default class ParentGallery extends LightningElement {
@track ProjectId;
@track records;
@track error;
@wire(getEmployees,{accId:'$accountId'})
wiredprodata({error,data}){
    if(data){
        this.record=data;
        this.error=undefined;
    }
    else{
        this.record=undefined;
        this.error=error;
    }
}
handlechange(event){
    this.ProjectId=event.detail;
}

}