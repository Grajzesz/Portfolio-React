<?
extract($_POST);
mail("buskiewiczmariusz@gmail.com", "temat", $wiadomosc);
echo "mail wyslany";
?>