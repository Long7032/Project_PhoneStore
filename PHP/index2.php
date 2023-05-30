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

    $arr = array($apple, $banana, $orange);
    // var_dump($arr)
echo '<pre>';
print_r($arr);
echo '</pre>'
?>