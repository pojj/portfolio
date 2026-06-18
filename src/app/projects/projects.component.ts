import { Component } from '@angular/core';

interface Project {
  title: string;
  img: string;
  url: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Macro Manager',
      img: 'assets/images/MacroManager.png',
      url: 'https://github.com/pojj/macro-manager',
      description:
        'A full-stack nutrition app for logging meals and building recipes. Models many-to-many relationships in MongoDB across 1000+ meals, ingredients, and recipes, with custom JWT + cookie auth — and a built-in AI that reads nutrition info straight from a photo of your dish.',
      tags: ['Next.js', 'MongoDB', 'JWT', 'PyTorch'],
      featured: true,
    },
    {
      title: 'Meal Nutrition AI',
      img: 'assets/images/FoodAI.png',
      url: 'https://github.com/pojj/Food-CNN/',
      description:
        'A CNN that identifies a dish from a single photo and returns its nutritional info. Transfer-trained on Food-101 to 81% top-1 / 95% top-3 accuracy and served as a Flask API.',
      tags: ['Python', 'PyTorch', 'Flask'],
    },
    {
      title: 'Joustle',
      img: 'assets/images/Joustle.png',
      url: 'https://github.com/pojj/wordle-variant',
      description:
        'My original spin on Wordle — a word game crossed with player-vs-player combat mechanics.',
      tags: ['React', 'JavaScript', 'CSS'],
    },
    {
      title: 'Tetris AI',
      img: 'assets/images/tetris.png',
      url: 'https://github.com/pojj/tetris-ai',
      description:
        'A Tetris remake with optional local multiplayer or a configurable AI opponent with adjustable difficulty.',
      tags: ['Python', 'PyGame', 'AI'],
    },
    {
      title: 'Sudoku',
      img: 'assets/images/Sudoku.png',
      url: 'https://github.com/pojj/Sudoku',
      description:
        'A ground-up build of Sudoku in Java to sharpen my grasp of object-oriented design and the Swing UI toolkit.',
      tags: ['Java', 'Swing', 'OOP'],
    },
    {
      title: '2D Platformer',
      img: 'assets/images/AmongusRunner.png',
      url: 'https://github.com/pojj/Programming_11',
      description:
        'A 2D runner where the player dodges swarming enemies, featuring animated character models built from sprite sheets.',
      tags: ['Python', 'SimpleGUI', 'OOP'],
    },
  ];
}
