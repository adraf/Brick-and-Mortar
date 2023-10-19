# Brick & Mortar Exeter

### Completed February 2023
#### Time Frame
I completed this project in my spare time around a full-time role. This was over a number of months due to the busy schedule of the client’s business and the client moving their shop. This took less than 10 hours off and on and then with edits (e.g. change of images after the shop move).

## Project Overview

I offered my services to help a smaller local business by building them a website and to get to add some more work to my portfolio. The site meant that a lot of the key information they wanted to share with their customers could be in one place instead of dotted around on their Instagram account, as a lot of businesses in Devon opt to use social media in lieu of a real website. You can see the full site here: [brickandmortarexeter.com](https://www.brickandmortarexeter.com)

## Technologies Used

* HTML
* CSS
* JavaScript

## Featured Code

#### Confirm box

The client had mentioned that they had issues with customers bypassing the booking form and contacting them directly to make bookings, this was meaning a lot more time with customer admin, so I came up with the idea of a dialog box to notify customers of the options before they emailed. The box lets them know what options they have and then the button they select will take them to the correct sections of the site. If they would like to book, they go to booking page, if they would like to email about a specific question, they are directed to a new email to send.  

HTML
```
<!-- confirm box for email -->
  <div class="overlay" id="overlay" hidden>
    <div class="confirm-box">
      <div onclick="closeConfirmBox()" class="confirmClose"></div>
      <img id="confirmLogo" src="./images/hero_logo_black.png" alt="brick and mortar logo">
      <p>If you would like to email us with any questions, please continue to <b>Send Email</b>.</p>
      <p>If you are looking to request a booking, please select <b>Make Booking</b> to use the Resurva booking form.</p>
      <p>Thanks.</p>
      <div>
        <button class="confirmBtn" onclick="isConfirm(false)">Make Booking</button>
        <button class="confirmBtn" onclick="isConfirm(true)">Send Email</button>
      </div>
    </div>
  </div>
```

JavaScript
```
// personalised confirm box for email
function showConfirmBox() {
  document.getElementById("overlay").hidden = false;
}
function closeConfirmBox() {
  document.getElementById("overlay").hidden = true;
}

function isConfirm(answer) {
  if (answer) {
  // answer true
    window.open('mailto:brickandmortarexeter@gmail.com?subject=Website%20Enquiry', '_blank');
  } else {
  // answer false
    window.open('https://brickmortar.resurva.com/book', '_blank');
  }
  closeConfirmBox();
}
```


## Challenges

#### Main page background opacity

I wanted to have an opacity to the background image so that the content on the page stood out more for users. This also fit the style that the client had wanted. I had gone ahead and added everything in without thinking that the `opacity: 0.3;` would affect all the contents on the page. After the initial hiccup I was able to correct this in the CSS with `:before`.

```
/* Main/Landing Page */
/* Background */
#landingPageBody {
  position: relative;
  height: 100vh;
  width: 100vw;
}

/* background image w/opacity */
#landingPageBody:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
  background-image: url(./images/bm_new_front.jpeg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
```

## Wins

The site was launched and was immediately met with great feedback from the client’s customer base. 

## Future Content

It would have been great to be able to also build the booking reservation section for the customers too. At the moment the site mainly acts as an information and contact site, and then customers are linked to a Resurva booking page. 
