function addClass(selector, class_name) {
    document.querySelector(selector).classList.add(class_name);
}

function removeClass(selector, class_name) {
    document.querySelector(selector).classList.remove(class_name);
}

function menuEventListener(radio_name, class_name) {
    var rad = document.getElementsByName(radio_name);
    var prev = null;
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            prev = rad[i];
            addClass('#' + prev.value, class_name);
        }
        rad[i].addEventListener('change', function () {
            if (this !== prev) {
                changeTargetPlaylist((prev) ? prev.value : rad, this.value, class_name);
                prev = this;
            }
        });
    }
}

function changeTargetPlaylist(old_tp, new_tp, class_name) {
    if (typeof old_tp == "string") {
        removeClass('#' + old_tp, class_name);
    } else {
        old_tp.forEach(element => {
            removeClass('#' + element.value, class_name);
        });
    }
    addClass('#' + new_tp, class_name);
}