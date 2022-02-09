import { LightningElement,api, } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Case';
import CaseContact from '@salesforce/schema/Case.ContactId';
import Project from '@salesforce/schema/Case.Project_Name__c';
import Type from '@salesforce/schema/Case.Type';
import Reason from '@salesforce/schema/Case.Reason';
import Subject from '@salesforce/schema/Case.Subject';
import Description from '@salesforce/schema/Case.Description';	
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class WebToLead extends LightningElement {

    accountObject = ACCOUNT_OBJECT;    
       contactfield = CaseContact;
    ProjectField = Project;
    caseType=Type;
    caseReason=Reason;
    CaseSubject=Subject;
    Desc=Description;
    handleAccountCreated(event){
                // Run code when account is created.
        const evt = new ShowToastEvent({
            title: 'Case Raised Succenfully',
            message: 'we will get back to you shortly',
            variant: 'success',
        });
        this.dispatchEvent(evt);
        setTimeout(function(){
            window.location.href = 'https://c2m1-hfs.cs74.force.com/customer/s/visual-page';
         }, 500);
        this.dispatchEvent(event);
        console.log(evt.detail.id);
    }  
    // }handleAccountCreated(event){
    //             // Run code when account is created.
    //     const evt = new ShowToastEvent({
    //         title: 'Case Created',
    //         message: 'Record ID: ' + event.detail.Id,
    //         variant: 'success',
    //     });
    //     this.dispatchEvent(evt);
    //     setTimeout(function(){
    //         window.location.href = 'https://c2m1-hfs.cs74.force.com/customer/s/toparticles';
    //      }, 500);
    //     this.dispatchEvent(event);
    //     console.log(evt.detail.id);
    // }
    handleerror(enet){
        const evt = new ShowToastEvent({
            title: 'You dont have a Active Warranty to raise a Case',
            message: 'Please Activate your WARRANTY ',
            variant: 'error',
        });
        this.dispatchEvent(evt);
       
    }
}