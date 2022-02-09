import { LightningElement } from 'lwc';
import Payment_Object from '@salesforce/schema/Payment__c';
import PayMilestone from '@salesforce/schema/Payment__c.Payment_Milestone__c';
import Project from '@salesforce/schema/Payment__c.Project_Name__c';
import Mode from '@salesforce/schema/Payment__c.Payment_Mode__c';
import Amount from '@salesforce/schema/Payment__c.Amount_Received__c';
import Warranty_Object from '@salesforce/schema/Warranty__c';
import ProjectWarranty from '@salesforce/schema/Warranty__c.Project_Name__c';
import warType from '@salesforce/schema/Warranty__c.Warranty_Type__c';	
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Payment extends LightningElement {
    Payobject = Payment_Object;    
    payType = PayMilestone;
    project=Project;
    paymode=Mode;
    amountreceived=Amount;
   WarObject=Warranty_Object;
   ProjectWar=ProjectWarranty;
   warantyType=warType;
    handleAccountCreated(event){
        // Run code when account is created.
const evt = new ShowToastEvent({
    title: 'Your Payment Received Succesfully',
    message: 'Thanks for making the payment',
    variant: 'success',
});
this.dispatchEvent(evt);
setTimeout(function(){
    window.location.href = 'https://c2m1-hfs.cs74.force.com/customer/s/paymentpage';
 }, 500);
this.dispatchEvent(event);
console.log(evt.detail.id);
}
handleerror(enet){
    const evt = new ShowToastEvent({
        title: 'You have already Made the payment for this Term',
        message: 'Please check once and get back ',
        variant: 'error',
    });
    this.dispatchEvent(evt);
   
}
handleAccountCreated1(event){
    // Run code when account is created.
const evt = new ShowToastEvent({
title: 'Your Warranty Extended Succesfully',
message: 'Thanks for extending your warranty',
variant: 'success',
});
this.dispatchEvent(evt);
setTimeout(function(){
window.location.href = 'https://c2m1-hfs.cs74.force.com/customer/s/paymentpage';
}, 500);
this.dispatchEvent(event);
console.log(evt.detail.id);
}
handleerror1(enet){
const evt = new ShowToastEvent({
    title: 'You have a Active Warranty Available',
    message: 'Please Activate your WARRANTY once it gets expired ',
    variant: 'error',
});
this.dispatchEvent(evt);

}
}