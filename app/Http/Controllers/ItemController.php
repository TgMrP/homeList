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

        if ($board) {
            $newItem = new Item();
            $newItem->title = $request->title;
            $newItem->item_id = $request->item_id;
            $newItem->board_id = $board->id;
            $newItem->save();

            $newItem->board->touch();

            return response($newItem->fresh()->load('board'), 200);
        }

        return response(null, 401);
    }

    public function mark($id)
    {
        $item = Item::whereId($id)->first();
        if (!$item) return response(null, 404);
        if ($item->board->user_id !== auth()->user()->id) return response(null, 401);

        $item->done = !$item->done;
        $item->save();

        $item->board->touch();

        return response($item->fresh()->load('board'), 200);
    }
}
