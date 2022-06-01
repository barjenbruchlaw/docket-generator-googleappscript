$(document).ready(function () {
    var max_fields = 20;
    var wrapper = $(".container1");
    var add_button = $(".add_form_field");

    var x = 0;
    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div><input type="text" name="caseNumber[]"/><button class="delete">-</button></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper).on("click", ".delete", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});

const formElement = document.querySelector('form#forms')

const getFormJSON = (form) => {
    const data = new FormData(form);
    return Array.from(data.keys()).reduce((result, key) => {
        if (result[key]) {
            result[key] = data.getAll(key)
            return result
        }
        result[key] = data.get(key);
        return result;
    }, {});
};

const handler = (event) => {
    event.preventDefault();
    const valid = formElement.reportValidity();
    if (valid) {
        const result = getFormJSON(formElement);
        console.log(result)
    }
}

formElement.addEventListener("submit", handler)