import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery';
import 'jquery/src/jquery.js';
import './sass/styles.scss';
import {convert} from "./logic.js";


$(document).ready(function(){
  $("#calculate").click(function(){
    const birthday = $("#inputField").val();
    convert(birthday);
  });
});
