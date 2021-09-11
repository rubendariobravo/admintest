<?php
    $contra = password_hash('hormigota',PASSWORD_DEFAULT,['cost'=>12]);
    echo $contra;
?>