import { LightningElement, wire, track,api } from 'lwc';
import getProjects from '@salesforce/apex/EmployeeBrowser1.getProject';
import getEmployees from '@salesforce/apex/EmployeeBrowser1.getEmployees';
import { NavigationMixin } from 'lightning/navigation';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Project__c';
import Name from '@salesforce/schema/Project__c.Name';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

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

export default class employeedetails extends NavigationMixin(LightningElement){
    
    projectOptionList;
    selectedProject;
    selectedEmployeeId='';
@api recordId;
@api Current_project__c;
    @track columns = columns;
    @track contactRow={};
    @track rowOffset = 0;  
    @track modalContainer = false;
    
  
//     @wire(getEmployees) EmployeeList;
@wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
    accountMetadata;
    @wire(getPicklistValues,
        {
            recordTypeId: '$accountMetadata.data.defaultRecordTypeId', 
            fieldApiName: Name
        }
    )

    industryPicklist;


    @wire(getProjects) projects;
    
     accountId;
     handleClick(event){
     this.accountId=event.target.value;
     const proid=new CustomEvent('sampleevent',
 {
    detail:this.accountId
 });
 this.dispatchEvent(proid);
     }
    //  @wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
    //  contactInfo;
    //  @wire(getPicklistValues,
    //     {
           
    //         fieldApiName: Name
    //     }
    // )
    // leadSourceValues;
        
 
    // @track ProjectId;
    // @track records;
    // @track error;
    // @wire(getEmployees,{accId:'$accountId'})
    // wiredprodata({error,data}){
    //     if(data){
    //         this.record=data;
    //         this.error=undefined;
    //     }
    //     else{
    //         this.record=undefined;
    //         this.error=error;
    //     }
    // }
    // handlechange(event){
    //     this.projectOptionList=event.target.value;
    //     this.notifyParent();
    // }
    // notifyParent(){
    //     const evt = new CustomEvent('filterchange',{
    //     detail:{
    //     ProjectId: this.projectOptionList,
            
    //     }});
    //     this.dispatchEvent(evt);
    //     }
    
 
    // onRecordClick(event1) {
    //     // Navigate to the CaseComments related list page
    //     // for a specific Case record.
    //     const row = event1.detail.row;
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: row.Id,
    //              actionName: 'view'
    //         }
    //     });
    // }
    }
