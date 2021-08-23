
<img src="https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/images/quiz-responsive-image.png" width="100%" alt="Health & Safety Quiz">


<a href="https://paulbowden673.github.io/Projects-MP-MP2-Quiz/" rel="nofollow" target="_blank">Click  here</a> to access the site.

**I built this website to give users a fun and enjoyable game to play. I based the game on Health & Safety questions so it can also be used for training**
## UX ##
**The purpose of this project is to create an Interactive Frontend Website using HTML, CSS and JavaScript. In order to do this I have built a Health & Safety Quiz game, where the users have to answer 20 questions about general Workplace Health & Safety**






**I incorporated the following things in order for the target audience to have a great experience when visiting my website,**

- A Home page with buttons to start the game and also view the game rules.
- A rules section so users can learn how to play the game.
- A highscores section so users can keep track of thier scores and complete against other users for the highest score.
- A Contact form so users can contact me with feedback via EmailJS.
 
  
**USER STORIES**

***First Time Visitor***

1.  As a first time visitor, I want to easily understand the purpose of the site and learn how to play the game.
2.  As a first time visitor, I want to find the game enjoyable and challenging.


***Returning Visitor***

1.  As a returning visitor, I want to still find the game enjoyable and challenging. 
2.  As a returning visitor, I want to be able to see the highest scores and try to beat them.
3.  As a returning visitor, I want to be able to give feedback on the quiz.


***Frequent Visitor***

1. As a frequent visitor, I want to still find the game enjoyable and challenging.
2. As a frequent visitor, I want to be able to try to beat the highest scores.
3. As a frequent visitor, I want to be able to give feedback on the quiz.

## Design
    
   ### Colour Scheme
   - The 3 main colours used on the site are Black, #571ce0 Blue and Red which are appropriate.
   ### Typography
   - The Roboto font is the main font used throughout the whole site, with sans-serif as fallback in case the font does not load correctly. It is frequently used and easy to read. 
   - The Merriweather Sans font is used for headings throughout the site, with sans-serif fallback in case the font does not load correctly, it is optimised for a bold display on modern web browsers. 
   
   ### Imagery

- Background image taken from Pexels.com. Photo by Ash @ModernAfflatus
- 404 page image taken from flaticon.com


## Wireframe Mock-ups 
These can be found at the following links 

- [Wireframe 3 screen sizes](/https://paulbowden673.github.io/Projects-MP-MP2-Quiz/assets/documents/wireframes/milestoneProject2Quiz.pdf)

## Features

- Responsive on all screen sizes
- Interactive elements 

### [Home Page](Https://github.com/PaulBowden673/Projects-MP-MP2/index.html)

- Navigation links for the Home page and Contact page.
- Buttons to view the rules and highscores, restart the game and clear the high scores list.
- Contact button to allow users to send feedback via EmailJS API

#### Home

#### Rules

#### Highscores

#### Contact



### [404 Page](Https://github.com/PaulBowden673/Projects-MP-MP2/quiz404.html)

- 404 Error page to direct user back to the home page.
- Links to social media pages

#### 404 Page


## Technologies Used

### Languages 

-  [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)  - This was used for the layout of the website.
-  [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)    - This was used to style the website.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - THis was used to make the website interactive and make the quiz work.

### Libraries 

 - [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) -  This was used to design a mobile-first responsive website layout quickly, also using components ( navigation bar, modal, form, footer)

 ### Tools

- [Google Fonts](https://fonts.google.com/) - This was used for selecting the fonts for the website. 
- [amiresponsive](http://ami.responsivedesign.is/) - This was used to check how responsive the site is on different devices.
- [Gitpod](https://www.gitpod.io/) - Online IDE linked to GitHub repository, this was used to write my code.
- [GitHub](https://github.com/) - This was used to store, host and deploy the project files, after being pushed from Gitpod.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - This was used to audit My site for quality and to check responsiveness. 
- [EmailJS](https://www.emailjs.com/) - This was used to send emails to the owner from the contact form contained in the quiz.

## Future updates

- Fetch questions from JSON file to allow questions to be changed without changing the code - struggled to be able to impliment this at this time.
- Change the qustions so the answers are in a random order to avoid regular users knowing where the answers will be
- Add more questions in  random order to give a better experience for returning users
- Add futher sets of questions to make the game more challenging, such as Food Safety, Fire Safety, Licensing.

## Testing
 I have thoroughly tested this website and was unable to find any broken links within it. I have also tried to submit blank contact forms and forms with incorrect email addresses which gave me an error message by way of alert box when thhe emial was sent.
 
 ### Testing User Stories from UX section

User stories from the UX section were tested to ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals. 

 #### First Time visitor

1. As a first time Visitor, I want to easily understand the purpose of the site and how to play the game.
    1. On entering the site, the user is presented with a clean website detailing the purpose of the site and giving instructions on how to play the game after clicking on the rules button.  
2. As a first time visitor, I want to find the game enjoyable and challenging.
    1. . On entering the website the user is presented with several buttons - Play, Rules, Highscores and Contact. THe user can then easily choose to play or to review the other options presented.
 
 #### Returning Visitor

1.  As a returning visitor, I want to still find the game enjoyable and challenging. 
    1.  The questions are displayed in a random order everytime the game is started.
2.  As a returning visitor, I want to be able to give feedback to the website owner and suggest improvements or ideas.
    1. The contact button takes the user from the home screen to blank email form for them to complete with name, email address and message. Upon clicking send email, the email is sent via EmailJS to the site owner.

#### Frequent Visitor

1. As a frequent visitor,  I want to still find the game enjoyable and challenging.
    1. The questions are presented in a random order everytime the game is played.
2. As a frequent visitor,  I want to be able to try to beat the highest scores.
    1. The user can display the current table of high scores ( the scores are only saved locally on the same device previously used)
3. As a frequent visitor, I want to be able to give feedback on the quiz.
    1. The contact button takes the user from the home screen to blank email form for them to complete with name, email address and message. Upon clicking send email, the email is sent via EmailJS to the site owner.
    
#### Devices

- Samsung S9
- Samsung S6 Lte Tablet
- Ipad 
- Iphone 6/7/8
- Desktop with 4K 2056px Monitor
- Dell Inspiron 5405 Laptop 

#### Browsers

- Microsoft Edge
- Chrome
- Firefox
- Safari 

## Issues/Bugs

- The score was showing the previous game score rather than the current game score. After investigation, I identified that the issue was in the script.js file. Once the game had ended the score was set to the local storage. The finalScore variable was then set to get the score from the local storage, this was getting the wrong score. To resolve the issue, I put the finalScore variable in the function that increments the score during the quiz and set it to return that score.After testing this more the issue was resolved.

- During testing I identified an issue in the main Quiz Game section. In the script.js file, any correct or incorrect answers selected by the user would have the relevant style class applied to change the colour, once the answer was selected, the answer button did not change to the relevant colour, instead the surrounding area in between the buttons would have the style class applied to change the colour. I identified that the style class was being applied to the parent element of the answer button which is the div containing all the answer buttons. The style class was applied to the div rather than the answer buttons. To fix the issue, I changed the code in the script.js to ensure the style class is applied to the answer buttons. Further testing was completed, and the answer buttons now correctly have the style applied.

- An additional issue was identified within the main Quiz Game section. The answer buttons have a hover style applied, once the user selects the answer and the new class style is applied for correct or incorrect answer, the hover style was still in effect. if the user was still hovering over the answer button, they were not able to see whether the answer was correct or incorrect. This affected the UX of the quiz. To resolve the issue, I added additional style classes to separate the answer buttons from the other buttons. Then I added additional code in the script.js, when the user selects the answer the hover style would be removed from the button and the correct/incorrect style class applied. The hover style is now removed, and they are able to view whether the answer is correct or incorrect.

- During testing an issue was found with the finish quiz modal that pops up once user has finished the game. The default behaviour for a modal is to close if mouse is clicked outside of the modal or if 'esc' is pressed on keyboard. This was causing an issue as the user was able to close the finish quiz modal and return back to the quiz game section. However, they would not be able to view the finish quiz modal again, and all the progress would be lost. The only way to exit the game would be to reload the webpage or select the 'Quit Game' button and return to the Home page. This identified issue would reduce the UX and functionality of the end game section. To resolve this issue, I added additional code to the script.js for the finish quiz modal as well as confirmation modals. This has improved the overall UX of the quiz game. Once the user is presented with the finish quiz modal, they can no longer close this without selecting one of the provided buttons. The user is also not able to close the additional confirmation modal without selecting one of the options. 

- On mobile devices, a UX issue was identified with the hover style. Once the user clicked the button to select their answer, the answer would have the correct class applied to change colour. However, once the next question was presented the hover style was still applied to the last selected button. I was unable to resolve this issue using CSS :hover styling or with a javaScript function to listen for touch devices. I was able to remove the hover styling, but the button text would still change color. On other attempts the hover stlye on the ans-btn was removed from all screen sizes rather than just on mobile devices. Neither solution gave me the resolution I was wanting.

### Validation

All files passed validation testing at 



- [HTML] - Issue with empty heading id=Progress-text due to it being filled by javascript during game to show progress.

 ###### HTML index.html page

  ![HTML Validation](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/w3%20HTML%20Validation%20index.html.png)
  
  ###### HTML 404.html page
  
  ![HTML Validation](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/w3%20HTML%20Validation%20quiz404.html.png)

- [CSS] - Issue with validating with Bootstrap. When validated as Direct Input no issues were found

 #### CSS Style.css 
 
 ###### By URL
 
  ![CSS Validation style.css](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/w3%20CSS%20validator%20style.css.png)
  
  ###### By Direct Input
  
  ![CSS Validation Direct Input](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/w3%20CSS%20validator%20style.css%20Direct%20Input.png)

  #### CSS 404Style.css
  
  ###### By URL
  
  ![CSS Validation quiz404.css](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/w3%20CSS%20validator%20style404.css.png)

  ###### By Direct Input
 
  ![CSS Validation Direct Input](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/w3%20CSS%20validator%20style404.css%20Direct%20Input.png)

- [Lighthouse]

 ###### Lighthouse Validation Desktop
 
![Lighthouse Validation Desktop](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/Lightouse%20Report%20Desktop%20MP2%20Quiz.png)

###### Lighthouse Validation Mobile

![Lighthouse Validation Mobile](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/Lighthouse%20Report%20Mobile%20MP2%20Quiz.png)

- [JSHint]

###### Script.js

![jsHint Validation Report](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/JSHint%20validation%20script.js.png)

###### EmailJS.js

![jsHint Validation Report EmailJS.js](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz/blob/main/assets/documents/validation/JSHint%20validation%20emailJS.js.png)
## Deployment 
### GitHub Pages

The project was deployed at GitHub Pages using the following steps

1. Log in to GitHub
2. Go to the repositories tab at the top of the screen. 
3. Click on the repository named PaulBowden673/Projects-MP-MP2-Quiz
4. At the top of the repository, locate and click the 'Settings' button on the menu.
5. Scroll down the Settings page until you locate 'GitHub Pages' section.
6. Under 'Source', click on the dropdown menu and select 'Master Branch'.
7. The page will refresh, scroll back down the page and locate the published site in the 'GitHub Pages' section.

### Forking the GitHub Repository

Forking the repository will make a copy of the original repository, to view or make changes without affecting the original repository using the following steps

1. Log in to GitHub and locate the repository named PaulBowden673/Projects-MP-MP2-Quiz
2. At the top of the Repository, above the 'Settings' button on the menu, locate the 'Fork' button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the repository named PaulBowden673/Projects-MP-MP2-Quiz
2. Under the repository name, click 'Clone or Download'.
3. To clone the repository using HTTPS, under 'Clone with HTTPS', copy the link.
4. Open Git Bash
5. Change the current working directory to where you want the cloned directory to be made.
6. Type 'git clone' and paste the URL you copied.
7. Press Enter. Your local clone will be created.

## Credits

### Content

I have borrowed code ideas and inspiration from the following sources during this project. This helped me to write my code and make my project work.

- https://www.youtube.com/watch?v=f4fB9Xg2JEY&amp;t=3763s&amp;ab_channel=BrianDesignBrianDesign

- https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript

- https://www.lcn.com/blog/beginners-guide-custom-404-pages/

- https://medium.com/nerd-for-tech/javascript-build-quiz-application-f6ee0a235417

- https://codereview.stackexchange.com/questions/189399/quiz-app-from-a-json-file

- CodeInstitute 

### Media

- Background image - www.Pexels.com. (Photo by Ash @ModernAfflatus)

- 404 page image - www.flaticon.com


## Acknowledgements

- [Code Institute](https://www.codeinstitute.net/)
- Newcastle College
- Bootstrap framework

