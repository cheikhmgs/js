$.get("http://hp-api.herokuapp.com/api/characters/students")
.then(function (data) {


	for(i=0 ; i<25; i++){
$('#para').append('<div class="card" style="width: 18rem;"><img class="card-img-top" src="'+(data[i].image)+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">Name : '+(data[i].name)+'</h5><p class="card-text">Species : '+(data[i].species)+
	
'<br>Sexe : '+(data[i].gender)+
'<br>Maison : '+data[i].house+
'<br>Date de naissance : '+data[i].dateOfBirth+
'<br>Année : '+data[i].yearOfBirth+
'<br> Sang: '+data[i].ancestry+
'<br> Couleur des yeux: '+data[i].eyeColour+
'<br> Couleur des cheveux: '+data[i].hairColour+
'<br> Baguette: '+data[i].wand.wood+
'<br> Cors de Baguette: '+data[i].wand.core+
'<br> Wand Length: '+data[i].wand.length+
'<br> patronus: '+data[i].patronus+
'<br> hogwarts Student: '+data[i].hogwartsStudent+
'<br> hogwarts Staff: '+data[i].hogwartsStaff+
'<br> Actor: '+data[i].actor+
'<br> Alive: '+data[i].alive+'<br></div>');


}


});








	