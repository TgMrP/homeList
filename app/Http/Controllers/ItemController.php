<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function store(Request $request, $board_id)
    {
        $userId = auth()->user()->id;
        $board = Board::whereId($board_id)->where('user_id', $userId)->first();

        $newItem = new Item();
        $newItem->title = $request->title;
        $newItem->item_id = $request->item_id;
        $newItem->board_id = $board->id;
        $newItem->save();

        return response($newItem, 200);
    }
}
