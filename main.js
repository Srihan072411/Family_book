var images = ["Family pic.JPG","My dad and I.jpg", "My mom and I.jpg" , "My Parents.jpg", "Me,Myself.jpg"]; 
var names = ["Fmaily Book","Raghuram", "Sandhya", "Mom and Dad", "Srihan"]; 
var i = 0; 
function Update() { 
i++; 
var numbers_of_family_member_in_array = 5 
if(i > numbers_of_family_member_in_array ) 
{ 
i = 0;
 } 
var updatedImage = images[i]; 
var updatedName = names[i]; 
document.getElementById("family_member_image").src = updatedImage; 
document.getElementById("family_member_name").innerHTML = updatedName; 
}