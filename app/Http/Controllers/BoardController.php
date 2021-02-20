<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index(Request $request)
    {
        $boards = $request->user()->boards;

        return response($boards, 200);
    }

    public function store(Request $request)
    {
        $newBoard = new Board();

        $newBoard->title = $request->title;
        $newBoard->user_id = $request->user()->id;
        $newBoard->save();

        return response($newBoard, 200);
    }
}
