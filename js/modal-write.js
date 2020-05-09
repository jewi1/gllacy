var button = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var wrap = document.querySelector(".modal-wrap");
var close = popup.querySelector(".button-close");
var form = popup.querySelector(".modal-form");
var nameModal = popup.querySelector(".name-input");
var emailModal = popup.querySelector(".email-input");
var mailModal = popup.querySelector(".mail-textarea");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";


try {
    storageName = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

try {
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    wrap.classList.add("modal-show")
    if (storageName) {
        nameModal.value = storageName;
    } else {
        nameModal.focus();
    }

    if (storageEmail) {
        emailModal.value = storageEmail;
    } else {
        emailModal.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    wrap.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!nameModal.value || !emailModal.value || !mailModal.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", nameModal.value);
            localStorage.setItem("email", emailModal.value);
        }
    }
});