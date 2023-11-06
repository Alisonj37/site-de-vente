total =0;

function additionner(){
    let fruit = document.getElementById("fruit").value
    
    switch(fruit){
        case "Banane":
            total += 10
            alert("vous avez choisi une banane, le prix total de la banane est" + total + "US")
            break;
        case "Cerise":
            total += 20
             alert("vous avez choisi une grape de cerise, le prix total de la grape du cerise est" + total + "US")
                break;
      case "Grnadia":
        total += 23
             alert("vous avez choisi un grenadia, le prix total d'un grenadia est" + total +"US")
             break;
        case "Mangue":
            total += 30
             alert("vous avez choisi une mangue, le prix total d'une mangue est" + total + "US")
             break;
        default:
            alert("vous devez faire un choix") 
            break; 
    }          
}
function finaliser(){
    alert("le prix total des achats sont" + total + "US")
}