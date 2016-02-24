var 
	linkFavoritesState = document.getElementById("favorites-state"),
	linkCartState = document.getElementById("cart-state"),
	linkPopupFeedback = document.getElementById("show-popup-feedback"),
	linkPopupMap = document.getElementById("show-popup-map"),
	linksAddToFav = document.querySelectorAll(".item-buttons .btn.add-to-fav"),
	linksPopupCartPlus = document.querySelectorAll(".item-buttons .btn.buy"),
	popupFeedback = document.querySelector(".popup-content-feedback"),
	popupMap = document.querySelector(".popup-content-map"),
	popupCartPlus = document.querySelector(".popup-content-cart-plus"),
	btnClosePopupFeedback = document.getElementById("hide-popup-feedback"),
	btnClosePopupMap = document.getElementById("hide-popup-map"),
	btnClosePopupCartPlus = document.getElementById("hide-popup-cart-plus"),
	btnContinue = document.querySelector(".popup-content-btns .btn-continue"),
	formFeedback = document.getElementById("form-feedback"),
	inputNamePopupFeedback = document.getElementById("sender-name-field"),
	inputEmailPopupFeedback = document.getElementById("sender-email-field"),
	inputMessagePopupFeedback = document.getElementById("sender-message-field"),
	storageName = localStorage.getItem("name"),
	storageEmail = localStorage.getItem("email");

// Клик по кнопке "Заблудились?"
if ( linkPopupFeedback ) {
	linkPopupFeedback.addEventListener("click", function(event) {
		event.preventDefault(event);
		popupFeedback.classList.add("popup-show");

		if ( storageName ) {
			inputNamePopupFeedback.value = storageName;
			inputEmailPopupFeedback.focus();
		} else {
			inputNamePopupFeedback.focus();
		}

		if ( storageEmail ) {
			inputEmailPopupFeedback.value = storageEmail;
			inputMessagePopupFeedback.focus();
		}
	});
}

// Клик по кнопке X(Закрыть) в окне попапа "Заблудились?"
if ( btnClosePopupFeedback ) {
	btnClosePopupFeedback.addEventListener("click", function(event) {
		event.preventDefault(event);
		popupFeedback.classList.remove("popup-show");
		popupFeedback.classList.remove("popup-error");
	});
}

// Запрещаем отправку пустой формы
if ( formFeedback ) {
	formFeedback.addEventListener("submit", function(event) {
		if ( !inputNamePopupFeedback.value || !inputEmailPopupFeedback.value || !inputMessagePopupFeedback.value ) {
			event.preventDefault(event);
			popupFeedback.classList.remove("popup-error");
			popupFeedback.offsetWidth = popupFeedback.offsetWidth;
			popupFeedback.classList.add("popup-error");
		} else {
			localStorage.setItem("name", inputNamePopupFeedback.value);
			localStorage.setItem("email", inputEmailPopupFeedback.value);
		}
	});
}

// Клик по мини-карте
if ( linkPopupMap ) {
	linkPopupMap.addEventListener("click", function(event) {
		event.preventDefault(event);
		popupMap.classList.add("popup-show");
	});
}

// Клик по кнопке X(Закрыть) в окне полной карты
if ( btnClosePopupMap ) {
	btnClosePopupMap.addEventListener("click", function(event) {
		event.preventDefault(event);
		popupMap.classList.remove("popup-show");
	});
}

// Клик по кнопке "Купить"
for ( i=0; i < linksPopupCartPlus.length; i++ ) {
	linksPopupCartPlus[i].addEventListener("click", function(event){
		event.preventDefault(event);
		
		if ( !linkCartState.classList.contains("selected") ) {
			linkCartState.classList.add("selected");
		}
		popupCartPlus.classList.add("popup-show");
	});
}

// Клик по кнопке "В закладки"
for ( i=0; i < linksAddToFav.length; i++ ) {
	linksAddToFav[i].addEventListener("click", function(event){
		event.preventDefault(event);
		
		if ( !linkFavoritesState.classList.contains("selected") ) {
			linkFavoritesState.classList.add("selected");
		}
	});
}

// Клик по кнопке X(Закрыть) в окне "Товар добавлен в корзину"
btnClosePopupCartPlus.addEventListener("click", function(event) {
	event.preventDefault(event);
	popupCartPlus.classList.remove("popup-show");
});

// Клик по кнопке "Продолжить покупки" в окне "Товар добавлен в корзину"
btnContinue.addEventListener("click", function(event) {
	event.preventDefault(event);
	popupCartPlus.classList.remove("popup-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if ( popupFeedback ) {
			if (popupFeedback.classList.contains("popup-show")) {
				popupFeedback.classList.remove("popup-show");
				popupFeedback.classList.remove("popup-error");
			}
		}
		if ( popupMap ) {
			if (popupMap.classList.contains("popup-show")) {
				popupMap.classList.remove("popup-show");
			}
		}
		if ( popupCartPlus ) {
			if (popupCartPlus.classList.contains("popup-show")) {
				popupCartPlus.classList.remove("popup-show");
			}
		}
	}
});
