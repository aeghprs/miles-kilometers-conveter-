(function(){
	'use Script';
    let converter = 'miles';
    var heading = document.querySelector('h1');
    var pintro = document.querySelector('p');
    var ans = document.getElementById('answer');
    var form = document.getElementById('convert');
    


    document.addEventListener('keydown',function(event){

        var key = event.code;
        if (key === 'KeyK'){
            converter = 'kilometers';
            heading.innerHTML = 'Kilometer to miles converter';
            pintro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
        }

        else if (key === 'KeyM'){
            converter = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            pintro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        }
    });

    form.addEventListener('submit',function(event){

        event.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);

        if ( distance )
        {
            if ( converter == 'miles')
            {
                var converted = (distance * 1.609344).toFixed(3);
                ans.innerHTML = `${distance} miles = ${converted} kilometers`;
            }
            else{
                var converted = (distance * 0.621371192).toFixed(3);
                ans.innerHTML = `${distance} kilometers = ${converted} miles`;
            }
        }
        else
        {
            ans.innerHTML = 'Please enter a number';
        }
    });

})();