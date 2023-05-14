public with sharing class EmailFileAttachment {
    public EmailFileAttachment() {
        attach.setContentType('application/pdf');
attach.Body = Blob.toPDF(body);
    }
}