import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  project = {
    number: 1,
    img: 'assets/images/Joustle.png',
    title: 'Joustle (Wordle Variant)',
    url: 'https://github.com/pojj/wordle-variant',
    description:
      'My orginal spin off on the game Wordle: A word game crossed with Player vs Player combat mechanics.',
    list: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
  };
  project1() {
    this.project = {
      number: 1,
      img: 'assets/images/Joustle.png',
      title: 'Joustle (Wordle Variant)',
      url: 'https://github.com/pojj/wordle-variant',
      description:
        'My orginal spin off on the game Wordle: A word game crossed with Player vs Player combat mechanics.',
      list: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    };
  }

  project2() {
    this.project = {
      number: 2,
      img: 'assets/images/Sudoku.png',
      title: 'Sudoku',
      url: 'https://github.com/pojj/Sudoku',
      description:
        'Ground up build of the game Sudoku in Java to consolidate my understanding of Java and Object Oriented Programming.',
      list: ['Java', 'Java Swing UI library', 'Object Orientated Programming'],
    };
  }

  project3() {
    this.project = {
      number: 3,
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

  project4() {
    this.project = {
      number: 4,
      img: 'assets/images/tetris.png',
      title: 'Tetris Clone with Multiplayer and AI',
      url: 'https://github.com/pojj/tetris-ai',
      description:
        'A remake of the game Tetris, with optional multiplayer or play against a computer. (With adjustable AI difficulty)',
      list: ['Python', 'PyGame Module'],
    };
  }
}
