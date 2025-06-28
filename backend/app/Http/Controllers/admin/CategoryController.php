<?php

namespace App\Http\Controllers\admin;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('id', 'desc')->get();

        return response()->json(
            [
                'status' => '200',
                'data' => $categories
            ]
        );
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 400);
        }

        $slug = Str::slug($request->name);
        if (Category::where('slug', $slug)->count() > 0) {
            $rand = rand(000000, 999999);
            $slug = $slug . '-' . $rand;
        }
        $category           = new Category();
        $category->user_id  = $request->user()->id;
        $category->name     = $request->name;
        $category->slug     = $slug;
        $category->status   = $request->status;
        $category->save();

        return response()->json([
            'status' => '200',
            'message' => 'Category created successfully.'
        ], 200);
    }


    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'status' => '404',
                'message' => 'Category not found.'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 400);
        }
        $slug = Str::slug($request->name);
        $exisingcategory = Category::where('slug', $slug)
            ->where('id', '!=', $category->id)
            ->exists();

        $category->name = $request->name;
        $category->slug = $slug;
        $category->status = $request->status;
        $category->save();
    }
}
