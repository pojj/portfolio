import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isFullScreen = false;
  project = {
    number: 6,
    img: 'assets/images/MacroManager.png',
    title: 'Macro Manager',
    url: 'https://github.com/pojj/macro-manager',
    description:
      'Developed a web application for tracking meals and creating recipes, with data stored in MongoDB using indexed collections. Utilized document referencing to efficiently link ingredients, recipes, and meals. Implemented custom user authentication with JWTs and cookies.',
    list: ['ReactJS', 'NextJS', 'MongoDB', 'JWT authentication'],
  };

  // Method to open the full-screen image
  openFullScreenImage() {
    this.isFullScreen = true;
  }

  // Method to close the full-screen image
  closeFullScreenImage() {
    this.isFullScreen = false;
  }

  project6() {
    this.project = {
      number: 6,
      img: 'assets/images/MacroManager.png',
      title: 'Macro Manager',
      url: 'https://github.com/pojj/macro-manager',
      description:
        'Developed a web application for tracking meals and creating recipes, with data stored in MongoDB using indexed collections. Utilized document referencing to efficiently link ingredients, recipes, and meals. Implemented custom user authentication with JWTs and cookies.',
      list: ['ReactJS', 'NextJS', 'MongoDB', 'JWT authentication'],
    };
  }

  project5() {
    this.project = {
      number: 5,
      img: 'assets/images/FoodAI.png',
      title: 'Meal Nutrition AI',
      url: 'https://github.com/pojj/Food-CNN/',
      description:
        'I transfer trained an AI to identify dishes to provide their nutritional info from only a picture. I also deployed the AI as a Flask API for easy access and use.',
      list: ['Python', 'PyTorch', 'Flask', 'HTML/JS'],
    };
  }

  project4() {
    this.project = {
      number: 4,
      img: 'assets/images/Joustle.png',
      title: 'Joustle (Wordle Variant)',
      url: 'https://github.com/pojj/wordle-variant',
      description:
        'My orginal spin off on the game Wordle: A word game crossed with Player vs Player combat mechanics.',
      list: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    };
  }

  project3() {
    this.project = {
      number: 3,
      img: 'assets/images/Sudoku.png',
      title: 'Sudoku',
      url: 'https://github.com/pojj/Sudoku',
      description:
        'Ground up build of the game Sudoku in Java to consolidate my understanding of Java and Object Oriented Programming.',
      list: ['Java', 'Java Swing UI library', 'Object Orientated Programming'],
    };
  }

  project2() {
    this.project = {
      number: 2,
      img: 'assets/images/AmongusRunner.png',
      title: '2D Platforming Game',
      url: 'https://github.com/pojj/Programming_11',
      description:
        'A 2D game where the player runs and jumps from swarming enemies. Made in Python and contains animated character models and movement.',
      list: [
        'Python',
        'SimpleGUI UI libary',
        'Object Orientated Programming',
        'Aminated models through character sprite sheets',
      ],
    };
  }

  project1() {
    this.project = {
      number: 1,
      img: 'assets/images/tetris.png',
      title: 'Tetris Clone with Multiplayer and AI',
      url: 'https://github.com/pojj/tetris-ai',
      description:
        'A remake of the game Tetris, with optional multiplayer or play against a computer. (With adjustable AI difficulty)',
      list: ['Python', 'PyGame Module'],
    };
  }
}
