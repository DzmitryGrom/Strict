/*global $*/
$(document).ready(function () {
    'use strict';
    $(".checkbox-dynamic").on("click", function(){
        $(this).toggleClass("checked");
    })
    $(".btn-delete").on("click", function(){
        $(this).parent().parent().removeClass("show");
        $(".shadow").removeClass("show");
        $("body").removeClass("fixed");
    })
    $(".btn-preview").on("click", function(){
        $(this).parent().parent().parent().prev().addClass("show");
        $(".shadow").addClass("show");
        $("body").addClass("fixed");
    })
});