 /*function randimg()
  {
                
    let imgs = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];    
    let randomIndex = Math.floor(Math.random() * imgs.length);
    document.querySelector('.lading-page').style.background ='url(' +imgs[randomIndex]+ ')';
  }

  randimg();
 setInterval(randimg, 2000);
 */

 //------------------------------------------------------------------------------------------

 let imgs = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];    

 let backgroundOption = true;
 
 let backgroundIntrval;
 
 function randomimg()
 {
 
   if(backgroundOption === true)
   {
     backgroundIntrval = setInterval(() => {
 
       let randomIndex = Math.floor(Math.random() * imgs.length);
       document.querySelector('.lading-page').style.background ='url(' +imgs[randomIndex]+ ')';
 
     },1000);
   }
 }
 randomimg();
 
 //----------------------------------------------------------------
 
  document.querySelector(".toggle .fa-cog").onclick =function(){
  
   this.classList.toggle("fa-spin");
    
   document.querySelector(".setiing-box").classList.toggle("open");
 
 
 }; 
 
 
 //------------------------------------------------------------------
 
 
 // Fetch all item using (get)
                                      //From div
 let mineColor = localStorage.getItem("option-box");
 if(mineColor !==null)
 {
   //console.log(localStorage.getItem('color-option'));
 
                                             //Proprty         //value
   document.documentElement.style.setProperty('--main-color', localStorage.getItem("option-box"));
 
 }
                                     // get class and li
 
 let color = document.querySelectorAll(".color-list li");
 
 // use the loop to opreate action
 
 color.forEach(li =>{
 
 li.addEventListener("click",(e) => {
 
 document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
 
 //set color item to save in localStorge
 
 localStorage.setItem("option-box",e.target.dataset.color);
 });
 
 });
 
 
 //----------------------------------------------------------------------------------------
 
 
 //Switch Random background option
 
 let randomBackE1 = document.querySelectorAll(".Random-background span");
 
 // use the loop to opreate action
 
 randomBackE1.forEach(span => {
 
 span.addEventListener("click",(e) => {
 
 
 //Remove Active Class From All Childrens
 e.target.parentElement.querySelectorAll(".active").forEach(element =>{
 
 
   element.classList.remove("active");
 });
 e.target.classList.add("active");
 
 // this is for yes or no option  
 
 if(e.target.dataset.background === 'yes')
 {
   backgroundOption= true;
   randomimg();
 }
 else {
 
   backgroundOption=false;
   clearInterval(backgroundIntrval);
 
 }
 
 });
 });
 
  //-------------------------------------------------------------------------
 
 // Select Skills selctor
 
 let  ourSkill = document.querySelector(".skills");
 
 window.onscroll = function() {
 
   // Skills offset Top 
 
   let skillsoffsetTop = ourSkill.offsetTop;
 
   // Skills outer higet
 
   let skillsOuterHeiget = ourSkill.offsetHeight;
 
  // Window Heiget
 
  let windowHiget = this.innerHeight;
 
  // Window scroolTop
 let windowscroolTop = this.pageYOffset;
 
 if(windowscroolTop > (skillsoffsetTop + skillsOuterHeiget - windowHiget )) {
 
   let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
   allSkills.forEach(skill =>
     {
       skill.style.width = skill.dataset.progress;
     });
 }
 
 };
 
 //------------------------------------------------------------------------------
 
 
 // Create popup with imge
 
 let ourGallery = document.querySelectorAll(".gallery img");
 
   ourGallery.forEach(img => {
 
   img.addEventListener('click',(e) => {
 
   let overly = document.createElement("div");
 
   overly.className = 'popup-overly';
 
   document.body.appendChild(overly);
 
   let popupBox = document.createElement("div");
 
   popupBox.className = 'popup-box';
 
   let popupImge = document.createElement("img");
 
   popupImge.src = img.src;
 
   popupBox.appendChild(popupImge);
 
   document.body.appendChild(popupBox);
 
 // Craete the close span
 let closeButton = document.createElement("span");
 
 // create the close button
 
 let CLoseButtonText= document.createTextNode("X");
 
 // Append Text to close button
 
 closeButton.appendChild(CLoseButtonText);
 
 //Add class to close button
 
 closeButton.className = 'close-button';
 
 popupBox.appendChild(closeButton);
 
 });
 
 });
 
 // Close popup 
 
 
 
   document.addEventListener('click',function(e) {
 
   if( e.target.className== 'close-button') {
 
 
       e.target.parentNode.remove();
     document.querySelector("popup-overly").remove();
 
   }
   });
 
      // Reset Button
 
      document.querySelector(".Reset-Option").onclick = function() {
 
       localStorage.clear();
       window.location.reload();
 
 
      } 
 
 
      // Toggel Menu
 
      let toggel = document.querySelector(".toggle-menu");
 
      let tLink = document.querySelector(".links");
 
      toggel.onclick = function() {
 
       // Toggle Class 
 
       this.classList.toggle("menu-active");
 
       // Toggle Class "Open On Button"
 
       tLink.classList.toggle("open");
 
      };
 
      
 
 
 
 