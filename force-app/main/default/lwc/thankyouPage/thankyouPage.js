import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ThankyouPage extends LightningElement {
   

    renderedCallback() {
        
        setTimeout(function(){
            window.location.href = 'https://c2m1-hfs.cs74.force.com/customer/s/';
         }, 5000);
      }
}