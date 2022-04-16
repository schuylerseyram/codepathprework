# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Schuyler Seyram**

Time spent: **8** hours spent in total

Link to project: (https://glitch.com/edit/#!/scalloped-notch-tie)

## Required Functionality

The following **required** functionality is complete:

* [ Yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Yes ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Yes ] Game buttons each light up and play a sound when clicked. 
* [Yes ] Computer plays back sequence of clues including sound and visual cue for each button
* [Yes ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Yes ] User wins the game after guessing a complete pattern
* [Yes ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Yes ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Yes ] More than 4 functional game buttons
* [Yes ] Playback speeds up on each turn
* [Yes ] Computer picks a different pattern each time the game is played
* [Yes ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ Yes] List anything else that you can get done to improve the app!
  * Added touchscreen support

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://github.com/schuylerseyram/codepathprework/blob/main/preworkgifs/Play_till_win.gif)
![](https://github.com/schuylerseyram/codepathprework/blob/main/preworkgifs/added_touchscreen.gif)
![](https://github.com/schuylerseyram/codepathprework/blob/main/preworkgifs/lose_game.gif)
![](https://github.com/schuylerseyram/codepathprework/blob/main/preworkgifs/lose_game_three_tries.gif)
![](https://github.com/schuylerseyram/codepathprework/blob/main/preworkgifs/random_pattern.gif)
![](https://github.com/schuylerseyram/codepathprework/blob/main/preworkgifs/speed_up.gif)
## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.programiz.com/javascript/library/math/random
  https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I had challenges implementing speeding up the game, creating random patterns and choosing colors for the tiles.  The hint given in speeding up the game said Math.random could be used. Upon using math. random, I realized the game wasn't running. So I wrote code to output the array into the console and found out that Math.random produces numbers in the range from 0 to 1. Using online forums, I came up with code that converted these random decimals to positive integers. Upon doing that I also realized that I had to further modify the code to produce numbers from 1-8, both bounds inclusive. This was because I had a total of 8 buttons and a number above 8 would cause the code to stop working.
Also, I had problems finding a suitable decrement for the clueHoldTime and had to take a while testing for values. I then settled for a constant decrement of 25. 30 seemed too high and 20 seemed too low. For increments of 25 and above, the clueHoldTime seemed to run down quickly and would not hold the Clue long enough to be spotted after a certain stage  of the game.
In addition to this, I also had a hard time finding pairs of colors to use for the tiles. In the end I would even admit that some of the colors I settled for might have not been the best but In a certain sense it adds more difficulty to the game cause it means that for some of the tiles one really has to be alert to the visual cues as the color the tile switches to when the clue is played is just a bit darker in shade than the original.
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Some of the questions I have include:

1.Does the browser one use end up severely limiting the functionality of a webpage. For example, can the latest version of Opera limit some website functions as compared to Google Chrome?
2. How do various languages and web frameworks come together to function and how do  they communicate with other object oriented languages like Java and C and Python. Are there generic functions or classes for this purpose or the team has to design custom classes to suit this purpose.
3. With interactive websites and websites where heavy to moderate amount of data is computed, how are the resources obtained. Are resources such as memory and computing power derived from servers alone, or the cache and browser permissions give access to the website to use RAM and CPU power or there’s sort of like in between the two options above


]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project, I would try to come up with various difficulty levels . These levels would include:
Color combinations for tiles that require rapt attention to catch the visual cues. I.e. It would be much difficult to see the visual clue because when the button is used, the color change will not be dark enough to easily detect.
A decrease in the number of chances one has to click the correct button after a clue is played. 
I would further mix single tones with audios such that one button in the gam might give a note while the other might give a tone.
To aid people who want to develop their musical ear, I would have a level that sets the buttons to play the C major scale and then take of visual clues so only audio clues are available. 

]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/2742a55f254c4470a9ffa95e65881f8d)


## License

    Copyright [Schuyler Seyram]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
