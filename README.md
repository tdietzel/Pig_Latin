# _Pig Latin Word Changer_

#### By _**Trent Dietzel**_

#### _An application that turns your boring words into Pig Latin!_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_A practice application for learning how to use loops. Focuses on using TDD to break down the problem into smaller pieces of functionality (*Bottom of page*). _It will transform any word you put into it into the_ __Pig Latin__ _version!_

## Setup/Installation Requirements

* _Fork your own copy of this repository from [GitHub](https://github.com/tdietzel22/Pig_Latin)_
* _Open Git BASH [Download Link](https://gitforwindows.org/)_
* _Use 'git clone projecturl' to clone the project from the forked repo_
* _Open the project in [VS Code](https://code.visualstudio.com/) (Git shortcut: enter 'code .' after navigating to the top level of the project directory)_
* _View site on [github-pages](https://tdietzel22.github.io/Pig_Latin/)_ __<~~ Try it out now!__

## Known Bugs

* _Will only work with one word. Multiple words will return random answers until it gets updated._

## License

_MIT License_

Copyright (c) _2023 Trent Dietzel_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _2023 Trent Dietzel_


__PROJECT TESTS__

# Describe: pigLatin()

__Test #1__: "It will add 'way' to the end of words that begin with a vowel."
__Code:__
let phrase = "a";
pigLatin(phrase);
__Expected Output:__ "away"

__Test #2__: "It will add "qu" + "ay" to the end of words that begin with 'qu'."
__Code:__
let phrase = "quick";
pigLatin(phrase);
__Expected Output:__ "ickquay"

__Test #3__: "It will move consonant values until it reaches a vowel and then add 'ay'"
__Code:__
let phrase = "code";
pigLatin(phrase);
__Expected Output:__ "odecay"

__Test #4__: "It will move the first consonant to the back and add 'ay' if 'qu' comes second."
__Code:__
let phrase = "squeal";
pigLatin(phrase);
__Expected Output:__ "quealsay"

__Test #5__: "It will return pig latin for more than one word."
__Code:__
let phrase = "away code quick squeal";
pigLatin(phrase);
__Expected Output:__ "awayway odecay ickquay quealsay"
