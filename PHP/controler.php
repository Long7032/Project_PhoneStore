<?php
    class Product{
        private $id;
        private $name;
        private $gender;
        private $description;

        function __construct($id, $name, $gender, $description){
            $this->id = $id;
            $this->name = $name;
            $this->gender = $gender;
            $this->description = $description;
        }

        function getId(){
            return $this->id;
        }

        function __destruct(){
        echo "{$this->id} and {$this->name} and {$this->gender} and {$this->description}";
        }
    }

    $q = $_REQUEST["q"];
    $rs = json_decode($q);
    var_dump($rs);

    $product = new Product($rs->id, $rs->name, $rs->gender, $rs->description);


?>