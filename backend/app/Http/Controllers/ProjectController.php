<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;
use App\Models\Project;
use App\Http\Resources\ProjectResource;

class ProjectController extends Controller
{
    public function index()
{
    $projects = Project::select([
        'id',
        'title',
        'description',
        'category',
        'technologies',
        'image',
        'github_url',
        'demo_url',
    ])->get();

    return response()->json([
        'success' => true,
        'data' => ProjectResource::collection($projects),
    ]);
}

}
