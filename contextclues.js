$(document).ready(function () {
    var friends = ["Danny Devito", "Alice", "Jack", "Betty White", "Vladmir Putin"];
    var locations = ["Texas", "Canada", "Santa Monica", "Hell", "Yarnham", "Agrabah", "The Hidden Leaf Village", "New York", "Dixie Land", "Belgium"];
    var weapons = ["Gun", "Knife", "Bazooka", "Landmine", "Sword", "Crossbow", "Spear", "Great Axe", "Rifle", "katana", "club", "gun", "Bayonet", "Cannon", "Rapier", "Slingshot", "Kunai", "Trebuchet", "Hammer", "Sycthe"];

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $($h3).appendTo("main");
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];
        function accuAlert() {
            alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
        }
        return accuAlert;
    }
});
