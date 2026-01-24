# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [404.html](https://github.com/angela64711/first-milestone-project/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/first-milestone-project/404.html) | ![screenshot](documentation/validation/html--404.png) 
|  | [about.html](https://github.com/angela64711/first-milestone-project/blob/main/about.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/first-milestone-project/about.html) | ![screenshot](documentation/validation/html--about.png) | 
|  | [contact.html](https://github.com/angela64711/first-milestone-project/blob/main/contact.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/first-milestone-project/contact.html) | ![screenshot](documentation/validation/html--contact.png) | 
|  | [index.html](https://github.com/angela64711/first-milestone-project/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/first-milestone-project/index.html) | ![screenshot](documentation/validation/html--index.png) | 
|  | [services.html](https://github.com/angela64711/first-milestone-project/blob/main/services.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/first-milestone-project/services.html) | ![screenshot](documentation/validation/html--services.png) | 
|  | [success.html](https://github.com/angela64711/first-milestone-project/blob/main/success.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/first-milestone-project/success.html) | ![screenshot](documentation/validation/html--success.png) | 


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [style.css](https://github.com/angela64711/first-milestone-project/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://angela64711.github.io/first-milestone-project) | ![screenshot](documentation/validation/css-assets-style.png) | 


## Responsiveness

I have tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/responsiveness/mobile-home.png) | ![screenshot](documentation/responsiveness/tablet-home.png) | ![screenshot](documentation/responsiveness/desktop-home.png) | Works as expected |
| Services | ![screenshot](documentation/responsiveness/mobile-services.png) | ![screenshot](documentation/responsiveness/tablet-services.png) | ![screenshot](documentation/responsiveness/desktop-services.png) | Works as expected |
| About Me | ![screenshot](documentation/responsiveness/mobile-about.png) | ![screenshot](documentation/responsiveness/tablet-about.png) | ![screenshot](documentation/responsiveness/desktop-about.png) | Works as expected |
| Contact | ![screenshot](documentation/responsiveness/mobile-contact.png) | ![screenshot](documentation/responsiveness/tablet-contact.png) | ![screenshot](documentation/responsiveness/desktop-contact.png) | Works as expected |
| Success | ![screenshot](documentation/responsiveness/mobile-success.png) | ![screenshot](documentation/responsiveness/tablet-success.png) | ![screenshot](documentation/responsiveness/desktop-success.png) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/mobile-404.png) | ![screenshot](documentation/responsiveness/tablet-404.png) | ![screenshot](documentation/responsiveness/desktop-404.png) | Works as expected |

## Browser Compatibility

I have tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Edge | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/testing/chrome-home.png) | ![screenshot](documentation/testing/firefox-home.png) | ![screenshot](documentation/testing/edge-home.webp) | Works as expected |
| Services | ![screenshot](documentation/testing/chrome-services.png) | ![screenshot](documentation/testing/firefox-services.png) | ![screenshot](documentation/testing/edge-services.webp) | Works as expected |
| About Me | ![screenshot](documentation/testing/chrome-about.png) | ![screenshot](documentation/testing/firefox-about.png) | ![screenshot](documentation/testing/edge-about.webp) | Works as expected |
| Contact | ![screenshot](documentation/testing/chrome-contact.png) | ![screenshot](documentation/testing/firefox-contact.png) | ![screenshot](documentation/testing/edge-contact.webp) | Works as expected |
| Success | ![screenshot](documentation/testing/chrome-success.png) | ![screenshot](documentation/testing/firefox-success.png) | ![screenshot](documentation/testing/edge-success.webp) | Works as expected |
| 404 | ![screenshot](documentation/testing/chrome-404.png) | ![screenshot](documentation/testing/firefox-404.png) | ![screenshot](documentation/testing/edge-404.webp) | Works as expected |

## Lighthouse Audit

I have tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse/mobile-home.png) | ![screenshot](documentation/lighthouse/desktop-home.png) |
| Services | ![screenshot](documentation/lighthouse/mobile-services.png) | ![screenshot](documentation/lighthouse/desktop-services.png) |
| About Me | ![screenshot](documentation/lighthouse/mobile-about.png) | ![screenshot](documentation/lighthouse/desktop-about.png) |
| Contact | ![screenshot](documentation/lighthouse/mobile-contact.png) | ![screenshot](documentation/lighthouse/desktop-contact.png) |
| Success | ![screenshot](documentation/lighthouse/mobile-success.png) | ![screenshot](documentation/lighthouse/desktop-success.png) |
| 404 | ![screenshot](documentation/lighthouse/mobile-404.png) | ![screenshot](documentation/lighthouse/desktop-404.png) |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Screenshot | Screenshot 2 |
| --- | --- |  --- |  --- |  --- | --- |
| All pages | Feature is expected to have accessible navigation links. | Checked navigation links for correct functionality and accessibility. | Navigation links were functional and accessible. | ![screenshot](documentation/defensive/navigation.png) | |
| All pages | Feature is expected to be fully responsive. | Resized the browser window and tested on multiple devices (mobile, tablet, desktop). | The page was responsive across all tested screen sizes. | ![screenshot](documentation/defensive/responsive01.png) | ![screenshot](documentation/defensive/responsive02.png) | |
| Home | Feature is expected to display a hero image with the doula's name, a desciption of what she does and her motto, along with a CTA to contact her. | Verified that the page displays the doula's name, field and motto in a clear and concise manner. | The CTA to the contact page works as expected. | ![screenshot](documentation/defensive/hero.png) | |
| Home | Feature is expected to display four cards, summarizing each of the services offered. Each is expected to include a link to the corresponding section in the services page.| Verified that the cards are displayed as expected | The links to the services page works as expected. | ![screenshot](documentation/defensive/cards.png) | ![screenshot](documentation/defensive/card-link.png) |
| Home | Feature is expected to display a portrait image of the doula, a short text about her, along with a CTA to find out more about her, which links to the About Me page. | Verified that the page displays the doula's portrait and a short text. | The CTA to the About Me page works as expected. | ![screenshot](documentation/defensive/doula01.png) | |
| Home | Feature is expected to display two logos of the websites where the doula has been featured, both of which are links to the corresponding websites. | Verified that the page displays the featured in section with the two logos. | The links to the websites work as expected and open in a different tab. | ![screenshot](documentation/defensive/featured.png) | ![screenshot](documentation/defensive/tcm.png) |
| Services | Feature is expected to show the services the doula offers, after a short intro text,  along with detailed descriptions of what they include, an image and a CTA to the contact page | Confirmed that the page displays the services, in a structured manner. | Each link to the contact page works as expected. | ![screenshot](documentation/defensive/services.png) | ![screenshot](documentation/defensive/services.png) |
| Services | Feature is expected to show the packages the doula offers along with their prices. | Confirmed that the page contains the four packages offered. | They were displayed as expected. | ![screenshot](documentation/defensive/packages.png) | |
| About Me | Feature is expected to show a portrait picture of the doula, a short intro about her with a CTA to send a message, along with a long text about her story and a CTA to the services page. | Confirmed that the page contains the portrait image of the doula, along with the two texts and two CTA buttons. | The links work as expected. | ![screenshot](documentation/defensive/about.png) | |
| About Me | Feature is expected to show the doula's education, credentials and training in the form of a list. | Confirmed that the page contains all the necessary information about her qualifications. | All the credentials were displayed as expected. | ![screenshot](documentation/defensive/about.png) | |
| Contact | Feature is expected to prevent submission of an empty form. | Attempted to submit the form without filling any fields. | Form submission was blocked, as expected. | ![screenshot](documentation/defensive/contact01.png) | |
| Contact | Feature is expected to enforce valid input types for each field. | Entered invalid data (e.g., random text in an email field, numbers in a name field, etc.). | Error messages were displayed appropriately, and submission was blocked. | ![screenshot](documentation/defensive/contact02.png) | |
| Success | Feature is expected to show an affirmative message after the form has been submitted correctly, which includes a link to the home page. | Entered valid data. | Success messages were displayed appropriately and the link worked as expected. | ![screenshot](documentation/defensive/success.png) | |
| Social Links | Feature is expected to include working links to the doula’s social platforms (Instagram and Facebook). | Clicked each social link to verify redirection to the correct platform page. | All links redirected to the correct platform pages, opening in new browser tabs. | ![screenshot](documentation/defensive/facebook.png) | ![screenshot](documentation/defensive/instagram.png)
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/no`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot](documentation/defensive/404.png) | |

## User Story Testing

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a pregnant or trying-to-conceive person in Berlin | I want to quickly understand what a full-spectrum doula offers | so I can decide if this support fits my needs. | ![screenshot](documentation/features/service-cards.png) |
| As an English-speaking expat | I want the site to feel designed for internationals | so I feel supported navigating pregnancy in Germany. | ![screenshot](documentation/features/hero-img.png) |
| As a client at a specific pregnancy stage | I want services clearly separated by prenatal, birth, and postpartum care | so I can easily find what applies to me. | ![screenshot](documentation/features/services-page.png) |
| As someone experiencing fertility struggles or loss | I want counseling services presented with sensitivity | so I feel safe exploring this option. | ![screenshot](documentation/features/services-page.png) |
| As someone unfamiliar with German maternity care | I want to understand how doula support works alongside doctors and midwives | so I feel confident choosing this service. | ![screenshot](documentation/features/about-me-page.png) |
| As a pregnant woman | I want to learn about the doula’s philosophy and background | so I can feel trust before making contact. | ![screenshot](documentation/features/about-me-page.png) |
| As a ready-to-reach-out client | I want an easy, calming way to make contact | so reaching out doesn’t feel stressful. | ![screenshot](documentation/features/contact-page.png) |
| As a pregnant person browsing the website on my mobile phone | I want to quickly find the information I'm looking for, using a clear and simple navigation | so that I feel supported and not overwhelmed while exploring the doula's services. | ![screenshot](documentation/features/mobile-home.png) |
| As a doula | I want visitors to clearly understand my personal story, values, and motivations for becoming a doula | so that they feel an emotional connection and trust me before reaching out. | ![screenshot](documentation/features/about-me-page.png) |

## Bugs

### Fixed Bugs

#### Bug 1

The four service cards on the home page were not behaving as expected at different breakpoints. Even though they stacked correctly on mobile width, they touched each other when they appeared two or four in a row at larger screen sizes. Many attempts were made to address the issue utilising m- and p- Bootstrap classes and CSS positioning. After many attempts, I came to the conclusion that the grid was breaking, because cards were placed in the same column. I corrected that, but still the responsiveness wasn't as expected and after researching Bootstrap documentation, I implemented a card grid, which brought the desired results.  

![screenshot](documentation/bugs/bug1.png) 
![screenshot](documentation/bugs/bug1-fix.png)

#### Bug 2

The buttons with the links in the bottom of the cards, were not properly aligned and staying in the bottom of the card. Their position was affected by the length of the text above. Trying to fix the link into a specific position with CSS or mb classes didn't work. To fix that bug I introduced a card footer and set a min card-body length. The code can be seen in the screenshots above.

#### Bug 3

The detailed text of each of the services in the services section was behaving problematically and not responsively. To fix this, I took the list out of the paragraph element.

![screenshot](documentation/bugs/bug3.png) 
![screenshot](documentation/bugs/bug3-fix.png)

#### Bug 4

Slight horizontal scrolling was visible in the home page. Trying to identify each element of the page that might cause it and understanding the inherited Bootstrap margins or paddings didn't help. I switched to the container-fluid class and implemented the following CSS, after researching CSS tutorials.

![screenshot](documentation/bugs/bug4-fix.png)


### Known Issues

The project is designed to be responsive from `375px` and upwards, at all four screen sizes tested, in line with the material taught on the course LMS. 
Service card buttons misalign slightly at some random screen widths, like 1372px and 1560px due to text reflow, as these resolutions are outside the project’s scope, as taught by Code Institute. ![screenshot](documentation/bugs/poor-responsiveness.png)


> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot completely rule out the possibility of minor undiscovered issues.

