let dropdown = $('#dropbox');
let submit = $('#img-btn');
let approvel = true;
var breed;



$.get("https://dog.ceo/api/breeds/list/all", function (data) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function () { 
    approvel = true;
});

$('#img-btn').click(function (e) {
    e.preventDefault();

    if (approvel) {
        breed = dropdown.val();
        displayDog(breed);
        approvel = false;
    }

    
})

$('#next_btn ').click(function (e) { 
    e.preventDefault();

    if (breed !== undefined) {
        displayDog(breed)
    }  
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
  
    $('#dog-Img img').remove();

    $.get(url, function (data) {
        let imageUrl = data.message;
        $('#dog-Img').attr('src', imageUrl)
    })
}

