/**
 * Created by lingqing.yang on 2016/12/24.
 */

require('./js/renderer.js');

jQuery = require("./js/external/jquery.js");
(function ($) {
    var percent = 0;
    var loadCheckInterval = setInterval(function () {
        percent += 10;
        var $loader = $('#loadingFlash');
        $loader.find('.progress').css('width', percent + '%');
        if (percent >= 100) {
            //Execute function
            setTimeout(function () {
                $loader.remove();
            }, 200);
            //Clear timer
            clearInterval(loadCheckInterval);
        }
    }, 200);

    var title = document.querySelector('title');
    const webview = document.getElementById('webview')
    webview.addEventListener('ipc-message', (event) => {
        if (event.channel == 'setAppTitle'){
            title.innerHTML = event.args[0];
        }
    })

})(jQuery);
