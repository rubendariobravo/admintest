<?php
    $contra = password_hash('Facha#21',PASSWORD_DEFAULT,['cost'=>12]);
    echo $contra;
?>