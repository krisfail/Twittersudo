// ==UserScript==
// @name     TwitterのDraft画面に出る文字をsudoの注意書きに変更するやつ
// @version  1.0.0
// @include  https://twitter.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant    none
// ==/UserScript==
(
    window.onload = function() {
        document.getElementsByClassName('public-DraftEditorPlaceholder-inner')[0].innerHTML = "#1) Respect the privacy of others.\n#2) Think before you type.\n#3) With great power comes great responsibility.\n"
    }
)();