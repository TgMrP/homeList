<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];

    public function items()
    {
        return $this->hasMany(Item::class)->whereNull('item_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
