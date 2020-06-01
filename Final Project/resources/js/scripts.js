function get(element) {
    return document.getElementById(element);
}

let currentWindow = document.URL;

(function() {

    var planetIcon = get('planet-icon');

    planetIcon.addEventListener('click', randomPage);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function randomPage(){
        var randomNum = getRandomInt(1, 8);

        switch(randomNum){
            case 1:
                window.location.href = "index.html";
                break;
            case 2:
                window.location.href = "about.html"
                break;
            case 3:
                window.location.href = "contact.html"
                break;
            case 4:
                window.location.href = "portfolio.html"
                break;
            case 5:
                window.location.href = "shop.html"
                break;
            case 6:
                window.location.href = "cart.html"
                break;
            case 7:
                window.location.href = "shop.html"
                break;
        }
    }
}());

if (currentWindow.includes('contact.html')){
    var email1 = get('email1');
    var email2 = get('email2');
    var submitBtn = get('form-button');
    var form = get('contact-form');
    var message = get('form-message');
    var name = get('name');

    submitBtn.addEventListener('click', validateEmail);

    function validateEmail(e) {
        var emailOneInput = email1.value;
        var emailTwoInput = email2.value;

        var nameVal = name.value;
        var messageVal = message.value;

        var isValid = true;
        let errorCode = 0;

        if (nameVal === '') {
            isValid = false;
            errorCode = 2;
        }

        else if (emailOneInput === '' || emailTwoInput === '') {
            isValid = false;
            errorCode = 4;
        }

        else if (emailOneInput !== emailTwoInput) {
            isValid = false;
            errorCode = 1;
        }

        else if (messageVal === '') {
            isValid = false;
            errorCode = 3;
        }
        console.log(isValid);

        if (isValid === false) {
            switch (errorCode) {
                case 0:
                    alert("The website has encountered an unexpected error. Please try again later.");
                    break;
                case 1:
                    alert("The emails you entered did not match");
                    break;
                case 2:
                    alert("You must enter a name before submitting the form");
                    break;
                case 3:
                    alert("You must enter a message before submitting the form.");
                    break;
                case 4:
                    alert("You must enter your email and then confirm it.");
            }
            e.preventDefault();
        }
    }
}

if (currentWindow.includes('shop.html')){
    window.addEventListener('load', hidePictures);
    let sectionTitles = get('section-titles');
    let sectionPictures = get('section-pictures');
    let listItem = document.querySelectorAll('.showcase li');
    // let newItem = document.querySelectorAll('li.new');
    // let vintageItem = document.querySelectorAll('li.vintage');
    let headings = document.querySelectorAll('h2');
    let body = document.querySelector('body');
    let footer = document.querySelector('footer');

    let createH2 = document.createElement('h2');
    let headingBlurb = document.createElement('p');
    let link = document.createElement('a');
    let linkText = document.createTextNode('here');
    link.appendChild(linkText);


    let h2Text;
    let divTextbox = document.createElement('div');

    let indexOfVintageItems = 0;
    let indexOfNewItems = 0;
    

    headings.forEach(item => {item.addEventListener('click', userSectionChoice)})

    function hidePictures(){
        sectionPictures.remove();
    }

    function fadeOutAndRemove(element){
        element.classList.add('animate', 'fadeOut');
        element.addEventListener('transitionend', function(){
            element.parentNode.removeChild(element);
            body.insertBefore(sectionPictures, footer);
            body.insertBefore(divTextbox, sectionPictures);
        })
    }

    function addTransitionOrder(index){
        let classOrder;
        let currentIndex = index;

        if(listItem[currentIndex].classList.contains('vintage')){
            classOrder = determineTransitionOrder(indexOfVintageItems);
            indexOfVintageItems++;
        }

        else if (listItem[currentIndex].classList.contains('new')) {
            classOrder = determineTransitionOrder(indexOfNewItems);
            indexOfNewItems++;
        }
        return classOrder;
    }

    function determineTransitionOrder(index) {
        switch (index) {
            case 0:
                classOrder = 'one';
                break;
            case 1:
                classOrder = 'two';
                break;
            case 2:
                classOrder = 'three';
                break;
            case 3:
                classOrder = 'four';
                break;
            case 4:
                classOrder = 'five';
                break;
            case 5:
                classOrder = 'six';
                break;
            case 6:
                classOrder = 'seven';
                break;
        }

        return classOrder;
    }

    function fadeInAfterTitle(element, i){
        sectionTitles.addEventListener('transitionend', function () {
            element.classList.add('animate', 'fadeLeft');
            element.classList.add(addTransitionOrder(i));
        });
    }

    function userSectionChoice(e){
        let newOrVintage = e.target.id;

        fadeOutAndRemove(sectionTitles);

        divTextbox.setAttribute('class', 'textbox');
        divTextbox.classList.add('one', 'animate', 'fadeDown');
        console.log(sectionTitles.classList);
        //sectionTitles.remove();
        //body.insertBefore(sectionPictures, footer);
        if(newOrVintage === 'new'){
            for(let i = 0; i < listItem.length; i++){
                if(listItem[i].classList.contains('vintage')){
                    listItem[i].classList.add('animate', 'fadeLeft', addTransitionOrder(i));
                    listItem[i].remove();
                } else {
                    fadeInAfterTitle(listItem[i], i);
                }
                    
            }
            h2Text = document.createTextNode('ascendant styles');
            headingBlurb.innerHTML = 'click <span id="vintage">here</span> to check out unaltered bargain bin gold';
        }
        else if (newOrVintage === 'vintage') {
            for (let i = 0; i < listItem.length; i++) {
                if (listItem[i].classList.contains('new')) {
                    listItem[i].classList.add('animate', 'fadeLeft', addTransitionOrder(i));
                    listItem[i].remove();
                } else {
                    
                    fadeInAfterTitle(listItem[i], i);
                }

            }
            h2Text = document.createTextNode('fashion in retrograde');
            headingBlurb.innerHTML = 'feeling a bit more modern? see what\'s new <span id="new">here</span>';
        }

        createH2.appendChild(h2Text);
        
        divTextbox.appendChild(createH2);
        divTextbox.appendChild(headingBlurb);

    }

    headingBlurb.addEventListener('click', reverseSection) 

    function reverseSection(e){
        var newOrVintage = e.target.id
        let list = get('product-list');
        if(newOrVintage === 'vintage' || newOrVintage === 'new'){
            if(newOrVintage === 'vintage'){
                for (let i = 0; i < listItem.length; i++) {
                    if (listItem[i].classList.contains('new')) {
                        listItem[i].remove();
                    }
                    else if (listItem[i].classList.contains('vintage')) {
                        list.appendChild(listItem[i]);
                    }
                }
                h2Text.textContent = 'fashion in retrograde';
                headingBlurb.innerHTML = 'feeling a bit more modern? see what\'s new <span id="new">here</span>';
            }
            else if (newOrVintage === 'new') {
                for (let i = 0; i < listItem.length; i++) {
                    if (listItem[i].classList.contains('vintage')){
                        listItem[i].remove();
                    }
                    else if (listItem[i].classList.contains('new')){
                        list.appendChild(listItem[i]);
                    }
                }
                h2Text.textContent = 'ascendant styles';
                headingBlurb.innerHTML = 'click <span id="vintage">here</span> to check out unaltered bargain bin gold';
            }
            createH2.appendChild(h2Text);

            divTextbox.appendChild(createH2);
            divTextbox.appendChild(headingBlurb);

            body.insertBefore(divTextbox, sectionPictures);
        }
    }
}
