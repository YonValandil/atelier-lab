<?php
function exponentiation_rapide($x, $n) {
     if ($n == 0) {
	 echo "\r\nn = ".$n;
         return 1;
     } else if ($n % 2 == 0) {
         $a = exponentiation_rapide($x, $n / 2);
	 echo "\r\npaire a = ".$a." | n = ".$n;
         return $a * $a;
     } else {
	 echo "\r\nn = ".$n;
         return $x * exponentiation_rapide($x, $n - 1);    
     }
}

echo "\r\nresult = ".exponentiation_rapide(2, 10);
?>

