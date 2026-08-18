<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'title' => 'Venue Management System',
            'description' => 'A system for managing venue bookings and events.',
            'category' => 'Web Development',
            'technologies' => 'HTML, CSS, JavaScript, Laravel',
            'image' => 'venue-management.png',
            'github_url' => null,
            'demo_url' => null,
        ]);
        Project::create([
            'title' => 'Metaverse Museum',
            'description' => 'A system for virtual museum experiences.',
            'category' => 'Game Development',
            'technologies' => 'Unity, C#, MediaPipe',
            'image' => 'metaverse-museum.png',
            'github_url' => null,
            'demo_url' => null,
        ]);
        Project::create([
            'title' => 'Hiragana Adaptive Learning System',
            'description' => 'A system for adaptive learning of Hiragana characters.',
            'category' => 'Web Development',
            'technologies' => 'HTML, CSS, JavaScript',
            'image' => 'hiragana-learning.png',
            'github_url' => null,
            'demo_url' => null,
        ]);
    }

}
