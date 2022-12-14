// function fileValidation_i() {
//     var fileInput =
//         document.getElementById("image");
     
//     var filePath = fileInput.value;
 
//     // Allowing file type
//     var allowedExtensions =
//             /(\.jpg|\.jpeg|\.png|\.gif)$/i;
     
//     if (!allowedExtensions.exec(filePath)) 
//     {
//         alert('Invalid image file type');
//         fileInput.value = '';
//         return false;
//     }
//     else
//     {
    document.querySelector("#image").addEventListener("change", function(){
    const pass=new FileReader();
    pass.addEventListener("load",()=>{
        localStorage.setItem("Recent-image",pass.result);
    });

        pass.readAsDataURL(this.files[0]);
     });
        
//     }
// };


// function fileValidation_h() {
//     var fileInput =
//         document.getElementById("masheet");
     
//     var filePath = fileInput.value;
 
//     // Allowing file type
//     var allowedExtensions =
//             /(\.pdf|\.word|\.docx)$/i;
     
//     if (!allowedExtensions.exec(filePath)) 
//     {
//         alert('Invalid hsc file type');
//         fileInput.value = '';
//         return false;
//     }
//     else
//     {
        document.querySelector("#masheet").addEventListener("change", function(){
            const hsc=new FileReader();
            hsc.addEventListener("load",()=>{
                localStorage.setItem("HSC mark sheet",hsc.result);
            });
        
            hsc.readAsDataURL(this.files[0]);
        });   
//     }
// };


// function fileValidation_s() {
//     var fileInput =
//         document.getElementById("marksheet1");
     
//     var filePath = fileInput.value;
 
//     // Allowing file type
//     var allowedExtensions =
//             /(\.pdf|\.word|\.docx)$/i;
     
//     if (!allowedExtensions.exec(filePath)) 
//     {
//         alert('Invalid ssc file type');
//         fileInput.value = '';
//         return false;
//     }
//     else
//     {
        document.querySelector("#marksheet1").addEventListener("change", function(){
            const mark=new FileReader();
            mark.addEventListener("load",()=>{
                localStorage.setItem("SSC marksheet",mark.result);
            });
        
            mark.readAsDataURL(this.files[0]);
        });
        
//     }
// };


// function fileValidation_o() {
//     var fileInput =
//         document.getElementById("marksheet3");
     
//     var filePath = fileInput.value;
 
//     // Allowing file type
//     var allowedExtensions =
//             /(\.pdf|\.word|\.docx)$/i;
     
//     if (!allowedExtensions.exec(filePath)) 
//     {
//         alert('Invalid semester marksheet file type');
//         fileInput.value = '';
//         return false;
//     }
//     else
//     {
        document.querySelector("#marksheet3").addEventListener("change", function(){
            const sem=new FileReader();
            sem.addEventListener("load",()=>{
                localStorage.setItem("Semester marksheet",sem.result);
            });
        
            sem.readAsDataURL(this.files[0]);
        });
        
//     }
// };


