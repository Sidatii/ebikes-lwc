import { LightningElement } from 'lwc';

export default class BikeCard extends LightningElement {
    
    bike = {
        Id: 'a042v00001Kt3mQAAR',
        Name: 'Electra X4',
        Picture__c:
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg',
        Description__c:
            'A commuter bike to get you where you need to go fast. The Electra X4 features a Shimano Altus drivetrain, Tektro Hydraulic disc brakes and a 500Wh battery, and a range of up to 70 miles.',
        Price__c: 2000,
        Rating__c: '4.9',
        Total_Reviews__c: 49
    };

    get backgroundStyle() {
        return `background-image:url(${this.bike.Picture__c})`;
    }

    get bikeURL() {
        return `/${this.bike.Id}`;
    }
}