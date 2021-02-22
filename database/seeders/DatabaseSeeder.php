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
        $users_limit = $this->command->ask('Please enter the limit for users creating !!');
        $board_limit = $this->command->ask('Please enter the limit for board per user creating !!');
        $items_limit = $this->command->ask('Please enter the limit for items per board of user creating !!');


        for ($i = 0; $i < $users_limit; $i++) {
            $num = $i > 0 ? $i : '';
            $user = User::factory()->create([
                'email' => "test{$num}@test.com"
            ]);


            for ($x = 0; $x < $board_limit; $x++) {
                $board = Board::factory()->create([
                    "user_id" => $user->id
                ]);

                Item::factory($items_limit)->create([
                    "board_id" => $board->id
                ]);
            }
        }
    }
}
