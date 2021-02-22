<?php

namespace Database\Factories;

use App\Models\Board;
use App\Models\Item;
use Illuminate\Database\Eloquent\Factories\Factory;

class ItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Item::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "item_id" => null,
            "board_id" => function () {
                Board::factory()->create();
            },
            "title" => $this->faker->sentence(3),
            "done" => false
        ];
    }
}
