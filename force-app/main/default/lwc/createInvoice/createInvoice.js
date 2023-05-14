import { LightningElement } from 'lwc';

export default class CreateInvoice extends LightningElement {
    handleInvoiceCreated() {
        const refreshEvt = new CustomEvent('refresh');
        // Fire the custom event
        this.dispatchEvent(refreshEvt);
    }

    handleCancel() {
        const cancelEvt = new CustomEvent('cancel');
        // Fire the custom event
        this.dispatchEvent(cancelEvt);
    }

    handleSave() {
        const saveEvt = new CustomEvent('save');
        // Fire the custom event
        this.dispatchEvent(saveEvt);
    }

    handleDelete() {
        const deleteEvt = new CustomEvent('delete');
        // Fire the custom event
        this.dispatchEvent(deleteEvt);
    }

    handleEdit() {
        const editEvt = new CustomEvent('edit');
        // Fire the custom event
        this.dispatchEvent(editEvt);
    }

    handleView() {
        const viewEvt = new CustomEvent('view');
        // Fire the custom event
        this.dispatchEvent(viewEvt);
    }

    handleSend() {
        const sendEvt = new CustomEvent('send');
        // Fire the custom event
        this.dispatchEvent(sendEvt);
    }

    handlePrint() {
        const printEvt = new CustomEvent('print');
        // Fire the custom event
        this.dispatchEvent(printEvt);
    }

    handleEmail() {
        const emailEvt = new CustomEvent('email');
        // Fire the custom event
        this.dispatchEvent(emailEvt);
    }
}