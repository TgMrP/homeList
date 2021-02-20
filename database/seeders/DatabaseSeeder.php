<?php

namespace Database\Seeders;

use App\Models\Board;
use App\Models\Item;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 9; $i++) {
            $num = $i > 0 ? $i : '';
            $user = User::factory()->create([
                'email' => "test{$num}@test.com"
            ]);


            for ($x = 0; $x < 5; $x++) {
                $board = Board::factory()->create([
                    "user_id" => $user->id
                ]);

                Item::factory(20)->create([
                    "board_id" => $board->id
                ]);
            }
        }
    }
}
