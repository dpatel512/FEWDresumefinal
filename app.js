// Validations to add
// When validation fails, add `li` element with validation text to `ul#errors` element


const submitForm = document.querySelector("#application-form")
submitForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // First and last name must be at least 2 characters

    let firstName = document.querySelector('#first-name').value
    let lastName = document.querySelector('#last-name').value

    if (firstName.length < 2) {
        const listItemOne = document.createElement('li')
        listItemOne.innerText = "First name must be at least 2 characters"
        document.querySelector('#errors').append(listItemOne)
    }

    if (lastName.length < 2) {
        const listItemTwo = document.createElement('li')
        listItemTwo.innerText = "Last name must be at least 2 characters"
        document.querySelector('#errors').append(listItemTwo)
    }

    // Email must contain "@"

    let email = document.querySelector('#email').value
    let result = email.includes("@");

    if (result == false) {
        const listItemEight = document.createElement('li')
        listItemEight.innerText = "Email must contain @"
        document.querySelector('#errors').append(listItemEight)
    }

    // Phone number snippets must be valid length (3, 3 and 4 - check all at once)

    let phoneAreaCode = document.querySelector('#phone-area-code').value
    let phonePrefix = document.querySelector('#phone-prefix').value
    let phoneLineNumber = document.querySelector('#phone-line-number').value

    if (phoneAreaCode.length < 3) {
        const listItemThree = document.createElement('li')
        listItemThree.innerText = "Area code must be at least 3 characters"
        document.querySelector('#errors').append(listItemThree)
    }

    if (phonePrefix.length < 3) {
        const listItemFour = document.createElement('li')
        listItemFour.innerText = "Phone prefix must be at least 3 characters"
        document.querySelector('#errors').append(listItemFour)
    }

    if (phoneLineNumber.length < 4) {
        const listItemFive = document.createElement('li')
        listItemFive.innerText = "Phone line number must be at least 4 characters"
        document.querySelector('#errors').append(listItemFive)
    }

    // Past experience should be at least 50 characters

    let pastExperience = document.querySelector('#past-experience').value

    if (pastExperience.length < 50) {
        const listItemSeven = document.createElement('li')
        listItemSeven.innerText = "Past experience should be at least 50 characters"
        document.querySelector('#errors').append(listItemSeven)
    }


})