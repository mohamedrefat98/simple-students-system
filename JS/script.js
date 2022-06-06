var container = document.getElementById("container");
function addStudent(){
   var studentName = prompt("enter student name");
   var newEle = document.createElement("div");
   newEle.setAttribute("class", "studentBox");
    
   if(studentName == null){
       return ;
   }else if(studentName == ""){
        studentName = prompt("please enter student name");
   }else{
        newEle.innerText = studentName ;
        container.appendChild(newEle);
   }
   var del = document.createElement("span");
    del.innerText = "X";
    del.setAttribute("class","del");
    newEle.appendChild(del); 
    del.onclick = function (){
        del.parentNode.remove();
    }

} 


function search(){
    var searchStudent = document.getElementById("search");
    var searchText = (searchStudent.value).trim();
    var students = document.querySelectorAll(".studentBox");
    if(searchText != ""){
        for (e of students){
                var ind = e.innerText.indexOf("\n");
                var studentText = e.innerText.slice(0,ind);
                if(studentText == searchText){
                    e.style.display="block";
                }
                else{
                    e.style.display="none";
                }
            }
        }
        else {
            for (e of students){
                e.style.display="block";
            }
        }

        
    
}