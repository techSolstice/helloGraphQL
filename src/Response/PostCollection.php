<?php

namespace App\Response;

use App\Entity\Post;

class PostCollection
{
    /**
     * @var array|Post[]
     */
    private $posts;

    /**
     * PostCollection constructor.
     * @param Post[]|array $posts
     */
    public function __construct($posts)
    {
        $this->posts = $posts;
    }

    /**
     * @return Post[]|array
     */
    public function getPosts()
    {
        return $this->posts;
    }
}
