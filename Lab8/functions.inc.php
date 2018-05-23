<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $div="<div class ='row'>";
    $right="<div class='col-md-4'>";


    $right.="<a href='post.php?id=1' class=''>"."<img class='img-responsive' src='images/".${"thumb".$number}."'/></a>"."</div>";
    $right.="<div class='col-md-8'>"."<h2>".${"title".$number}."</h2>";
    $right.="<div class='details'>"."POST BY"."<a href=\"user.php?id=2\" class=\"\">".${"userName".$number}."</a>";
    $right.="<span class='pull-right'>".${"date".$number}."</span>";
    $right.="<p class='ratings'>";
    for($i=0,$j=0;$i<5;$i++){
        if($j<${"reviewsRating".$number}){
             $right.="<img src='images/star-gold.svg' width='16'>";
             $j++;
        }
        else{
             $right.="<img src='images/star-white.svg' width='16'>";
        }
    }

    $right.=${"reviewsNum".$number}."REVIEWS"."</div>"."<p class='excerpt'>".${"excerpt".$number}."</p>";
    $right.="<p><a href=\"post.php?id=1\" class=\"btn btn-primary btn-sm\">Read more</a></p>"."</div>";
    $div.=$right."</div>"."<hr/>";

    echo $div;

}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;
}

?>