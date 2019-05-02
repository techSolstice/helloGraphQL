<?php

namespace App\Response;

use App\Entity\User;

class UserCollection
{
    /**
     * @var array|User[]
     */
    private $users;

    /**
     * PostCollection constructor.
     * @param User[]|array $users
     */
    public function __construct($users)
    {
        $this->users = $users;
    }

    /**
     * @return User[]|array
     */
    public function getUsers()
    {
        return $this->users;
    }
}
