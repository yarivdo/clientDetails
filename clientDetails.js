$(document).ready(startHere);

function startHere() {

    $('#Centre').val('0'); //Sets Default
    $('#btnSubmit').click(startTest);
}

function startTest() {
    //Start by saving the data
    var NHI = $('#NHI').val();
    var gender = $('#Gender').val();
    var DOB = $('#DOB').val();
    var centre = $('#Centre').val();

    localStorage.setItem("NHI", NHI);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("DOB", DOB);
    localStorage.setItem("Ethnicity", ethnicity);
    localStorage.setItem("Centre", centre);
    
    window.open('../MemoryGame/memoryIndex.html');
}
