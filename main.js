name_of_the_student_array = [];

function submit()
{
  var name_1 = document.getElementById("name of the student_1").value;
  var name_2 = document.getElementById("name of the student_2").value;

  name_of_the_student_array.push(name_1);
  name_of_the_student_array.push(name_2)
  
  console.log(name_of_the_student_array);

  document.getElementById("display name").innerHTML = name_of_the_student_array;

  

}
function sort()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display name").innerHTML = name_of_the_student_array;
}