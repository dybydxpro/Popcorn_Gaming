<?php

namespace App\Enums;

enum UserType: int {
    case SuperAdmin = 10;
    case Admin = 20;
    case User = 30;
}
