const Alert = {
    confirm_no_cancel: {
        default: function (message, buttonmessage, func) {
            let overlay = document.createElement('div')
            overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; background-color: rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;'
            let overlayContainer = document.createElement('div');
            overlayContainer.style = `width: 40vw; height: 15vh; background-color: rgba(255, 255, 255, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;`
            let alertmessage = document.createElement('h1');
            alertmessage.style = 'font-size: 35px; font-family: monospace';
            alertmessage.textContent = message;
            let alertbutton = document.createElement('button');
            alertbutton.style = 'color: white; width: 100px; height: 30px; font-size: 20px; background-color: rgb(0, 21, 255); border-radius: 100px; font-family: monospace; border: none; cursor: pointer;'
            alertbutton.textContent = buttonmessage;
            alertbutton.addEventListener('click', function () {
                func();
                document.body.removeChild(overlay);
            });
            document.body.appendChild(overlay)
            overlay.appendChild(overlayContainer)
            overlayContainer.appendChild(alertmessage)
            overlayContainer.appendChild(alertbutton)
        }, error: function (message, buttonmessage, func) {
            let overlay = document.createElement('div')
            overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; background-color: rgba(255, 0, 0, 0.28); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;'
            let overlayContainer = document.createElement('div');
            overlayContainer.style = `width: 40vw; height: 15vh; background-color: rgba(255, 0, 0, 0.26); display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;`
            let alertmessage = document.createElement('h1');
            alertmessage.style = 'font-size: 35px; font-family: monospace; color: rgb(26, 0, 0)';
            alertmessage.textContent = message;
            let alertbutton = document.createElement('button');
            alertbutton.style = 'color: white; width: 100px; height: 30px; font-size: 20px; background-color: rgb(255, 0, 0); border-radius: 100px; font-family: monospace; border: none; cursor: pointer;'
            alertbutton.textContent = buttonmessage;
            alertbutton.addEventListener('click', function () {
                func();
                document.body.removeChild(overlay);
            });
            document.body.appendChild(overlay)
            overlay.appendChild(overlayContainer)
            overlayContainer.appendChild(alertmessage)
            overlayContainer.appendChild(alertbutton)
        }, success: function (message, buttonmessage, func) {
            let overlay = document.createElement('div')
            overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; background-color: rgba(21, 255, 0, 0.28); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;'
            let overlayContainer = document.createElement('div');
            overlayContainer.style = `width: 40vw; height: 15vh; background-color: rgba(17, 255, 0, 0.26); display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;`
            let alertmessage = document.createElement('h1');
            alertmessage.style = 'font-size: 35px; font-family: monospace; color: rgb(8, 56, 0)';
            alertmessage.textContent = message;
            let alertbutton = document.createElement('button');
            alertbutton.style = 'color: white; width: 100px; height: 30px; font-size: 20px; background-color: rgb(43, 255, 0); border-radius: 100px; font-family: monospace; border: none; cursor: pointer;'
            alertbutton.textContent = buttonmessage;
            alertbutton.addEventListener('click', function () {
                func();
                document.body.removeChild(overlay);
            });
            document.body.appendChild(overlay)
            overlay.appendChild(overlayContainer)
            overlayContainer.appendChild(alertmessage)
            overlayContainer.appendChild(alertbutton)
        }
    }, confirm: {
        default: function (message, buttonmessage, func, cancelfunc) {
            let overlay = document.createElement('div')
            overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; background-color: rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;'
            let overlayContainer = document.createElement('div');
            overlayContainer.style = `width: 40vw; height: 15vh; background-color: rgba(255, 255, 255, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;`
            let alertmessage = document.createElement('h1');
            alertmessage.style = 'font-size: 35px; font-family: monospace';
            alertmessage.textContent = message;
            let alertbutton = document.createElement('button');
            alertbutton.style = 'display: inline; color: white; width: 100px; height: 30px; font-size: 20px; background-color: rgb(0, 21, 255); border-radius: 100px; font-family: monospace; border: none; cursor: pointer;'
            alertbutton.textContent = buttonmessage;
            alertbutton.addEventListener('click', function () {
                func();
                document.body.removeChild(overlay);
            });
            let closebutton = document.createElement('button');
            closebutton.textContent = '×';
            closebutton.style = 'position: absolute; top: 10px; right: 15px; border: none; background: none; font-size: 24px; cursor: pointer; color: #555;';
            closebutton.onclick = () => document.body.removeChild(overlay); cancelfunc;
            document.body.appendChild(overlay)
            overlay.appendChild(overlayContainer)
            overlayContainer.appendChild(alertmessage)
            overlayContainer.appendChild(alertbutton)
            overlayContainer.style.position = 'relative';
            overlayContainer.appendChild(closebutton)
        }, error: function (message, buttonmessage, func, cancelfunc) {
            let overlay = document.createElement('div')
            overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; background-color: rgba(255, 0, 0, 0.23); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;'
            let overlayContainer = document.createElement('div');
            overlayContainer.style = `width: 40vw; height: 15vh; background-color: rgba(255, 0, 0, 0.24); display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;`
            let alertmessage = document.createElement('h1');
            alertmessage.style = 'font-size: 35px; font-family: monospace';
            alertmessage.textContent = message;
            let alertbutton = document.createElement('button');
            alertbutton.style = 'display: inline; color: white; width: 100px; height: 30px; font-size: 20px; background-color: rgb(255, 0, 0); border-radius: 100px; font-family: monospace; border: none; cursor: pointer;'
            alertbutton.textContent = buttonmessage;
            alertbutton.addEventListener('click', function () {
                func();
                document.body.removeChild(overlay);
            });
            let closebutton = document.createElement('button');
            closebutton.textContent = '×';
            closebutton.style = 'position: absolute; top: 10px; right: 15px; border: none; background: none; font-size: 24px; cursor: pointer; color: #555;';
            closebutton.onclick = () => document.body.removeChild(overlay); cancelfunc;
            document.body.appendChild(overlay)
            overlay.appendChild(overlayContainer)
            overlayContainer.appendChild(alertmessage)
            overlayContainer.appendChild(alertbutton)
            overlayContainer.style.position = 'relative';
            overlayContainer.appendChild(closebutton)
        }, success: function (message, buttonmessage, func, cancelfunc) {
            let overlay = document.createElement('div')
            overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; background-color: rgba(43, 255, 0, 0.23); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;'
            let overlayContainer = document.createElement('div');
            overlayContainer.style = `width: 40vw; height: 15vh; background-color: rgba(47, 255, 0, 0.24); display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;`
            let alertmessage = document.createElement('h1');
            alertmessage.style = 'font-size: 35px; font-family: monospace';
            alertmessage.textContent = message;
            let alertbutton = document.createElement('button');
            alertbutton.style = 'display: inline; color: white; width: 100px; height: 30px; font-size: 20px; background-color: rgb(21, 255, 0); border-radius: 100px; font-family: monospace; border: none; cursor: pointer;'
            alertbutton.textContent = buttonmessage;
            alertbutton.addEventListener('click', function () {
                func();
                document.body.removeChild(overlay);
            });
            let closebutton = document.createElement('button');
            closebutton.textContent = '×';
            closebutton.style = 'position: absolute; top: 10px; right: 15px; border: none; background: none; font-size: 24px; cursor: pointer; color: #555;';
            closebutton.onclick = () => document.body.removeChild(overlay); cancelfunc;
            document.body.appendChild(overlay)
            overlay.appendChild(overlayContainer)
            overlayContainer.appendChild(alertmessage)
            overlayContainer.appendChild(alertbutton)
            overlayContainer.style.position = 'relative';
            overlayContainer.appendChild(closebutton)
        }
    }, prompt: function(message, buttonmessage, func) {
            let overlay = document.createElement('div')
            overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; background-color: rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;'
            let overlayContainer = document.createElement('div');
            overlayContainer.style = `width: 40vw; height: 15vh; background-color: rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;`
            let alertmessage = document.createElement('h1');
            alertmessage.style = 'font-size: 35px; font-family: monospace';
            alertmessage.textContent = message;
            let alertinput = document.createElement('input');
            alertinput.style = `width: 30vw; height: 5vh; color: black;`
            let alertbutton = document.createElement('button');
            alertbutton.style = 'display: inline; color: white; width: 100px; height: 30px; font-size: 20px; background-color: rgb(0, 38, 255); border-radius: 100px; font-family: monospace; border: none; cursor: pointer;'
            alertbutton.textContent = buttonmessage;
            alertbutton.addEventListener('click', function () {
                func();
                document.body.removeChild(overlay);
                let finalValue = alertinput.value; 
                func(finalValue);        
            });
            let closebutton = document.createElement('button');
            closebutton.textContent = '×';
            closebutton.style = 'position: absolute; top: 10px; right: 15px; border: none; background: none; font-size: 24px; cursor: pointer; color: #555;';
            closebutton.onclick = () => document.body.removeChild(overlay); 
            document.body.appendChild(overlay)
            overlay.appendChild(overlayContainer)
            overlayContainer.appendChild(alertmessage)
            overlay.appendChild(alertinput);
            overlayContainer.appendChild(alertbutton)
            overlayContainer.style.position = 'relative';
            overlayContainer.appendChild(closebutton)
    }
}


