/// <reference types = "Cypress" />
import 'cypress-file-upload' //dosya yükleme işlemi yaptığımız için
import '@4tw/cypress-drag-drop'//sürükle bırak yapacağımız için

//yükleyeceğimiz dosyanın fixtures kısmında olması gerekiyor.
//bu çalışma için test1.pdf ve test2.pdf adlı dosyalarınız olmalı

describe("File Uploads", ()=>{

    it('Single File Upload',()=>{ // 1 dosya yükleme
        cy.visit("https://the-internet.herokuapp.com/upload");
//attachFile() fonksiyonu ile dosya yükleme işlemini yapıyoruz.        
        cy.get('input[id=file-upload]').attachFile('test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(3000);
//dosya yüklendikten sonra çıkan yazıyı kontrol ediyoruz.        
        cy.get('h3').should('have.text','File Uploaded!');
    })

    it('File upload -  Rename',()=>{ //yükleme aşamasında  dosya adını değiştirme
        cy.visit("https://the-internet.herokuapp.com/upload");      
        cy.get('input[id=file-upload]')
        .attachFile({filePath:'test1.pdf',fileName:'ismail.pdf'});
        cy.get('#file-submit').click();
        cy.wait(3000);        
        cy.get('h3').should('have.text','File Uploaded!');
    })
    
    it('File Upload - Drag and Drop ',()=>{ //dosya yükle kaydır bırak
        cy.visit("https://the-internet.herokuapp.com/upload");        
//dosya yüklerken kaydık bırak işlemi tam olarak böyle yapılıyor      
        cy.get('#drag-drop-upload').attachFile("test1.pdf",{subjectType:'drag-n-drop'});
        cy.wait(3000); 
//dosyanın oraya yüklenip yüklenmediğini kontrol ediyoruz.        
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains('test1.pdf');
        cy.get('#file-submit').click();
    })

    it.only('Multiple File Upload',()=>{ //çoklu dosya yükleme
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
//köşeli parantez içine alarak bu işlemi yapabiliyoruz. Bu sitede olmuyor.       
       // cy.get('#filesToUpload').attachFile(["test1.pdf","test2.pdf"]);
        cy.wait(3000);
    })
})