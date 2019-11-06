$(function(){
  var randomNum = Math.floor((Math.random() *100) +1);//déclare dans une variable un nombre au hasard entre 0 et 100
  var count = 0;
  $('button').on('click', function(){//appel de la fonction sur le clic du bouton
    count++;//ajoute 1 à chaque clic
    if($('input').val() < randomNum){//condition si la valeur de l'input est inférieur au chiffre
      $('label').html('Plus.');//affiche 'plus' sur le label
    }

    else if ($('input').val() > randomNum){//condition si la valeur de l'input est supérieur au chiffre
      $('label').html('Moins.');//affiche 'moins' sur le label
    }
    else{
      $('label').html('Bravo vous avez réussi en ' + count + ' essais');//sinon affiche sur le label le messge et le nombre de cliques
    }
  })
})
