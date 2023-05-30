<?php

class Fruit {
    // Properties
    public $name;
    public $color;
  
    // Methods
    function __construct($name, $color){
        $this->name = $name;
        $this->color = $color;
    }
  }
    $apple = new Fruit("Apple", "red");
    $banana = new Fruit("Banana", "yellow");
    $orange = new Fruit("Orange", "orange");
    $coconut = new Fruit("Coconut", "brown");

$arr = array($apple, $banana, $orange);
array_push($arr, $coconut);

// echo ($arr);

//  var_export($arr);

$myJSON = json_encode($arr);
echo ($myJSON);


// $myArr = json_decode($myJSON);
// echo ("<br><br><br>");
// var_dump($myArr);

// echo ("<br><br><br>");
// var_dump($myArr[0]);

?>