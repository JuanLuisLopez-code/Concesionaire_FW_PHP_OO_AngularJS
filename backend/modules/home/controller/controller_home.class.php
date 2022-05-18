<?php
    class controller_home {
        function carousel() { 
            echo json_encode(common::load_model('home_model', 'get_carousel'));
        }

        function categoria() {
            echo json_encode(common::load_model('home_model', 'get_categoria'));
        }

        function type() {
            echo json_encode(common::load_model('home_model', 'get_type'));
        }

        // function load_more() {
        //     echo json_encode(common::load_model('home_model', 'get_load_more'));
        // }

    }
?>