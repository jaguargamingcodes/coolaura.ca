function _(selector) {
    document.querySelector(selector)
    return {
        hide: function() {
            document.querySelector(selector).style.display = 'none'
        }, show: function() {
            document.querySelector(selector).style.display = 'block'
        }
    }
}

