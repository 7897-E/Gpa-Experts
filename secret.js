document.addEventListener('DOMContentLoaded', () => {
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
      
    }

    const verifyCookie = getCookie('verified');
    if (verifyCookie !== 'true') {
        window.location.href = 'index.html';
    }else{
      about();
    }
});
function about() {
  var url = window.location.href;
  var win = window.open();
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:#333333;border:none;";
  if (url.includes("https://") || url.includes("http://")) {
    iframe.src = url;
  } else {
    iframe.src = "https://" + url;
  }
  win.document.body.appendChild(iframe);
  setTimeout(function() {
    tryCloseWindow(); // Close the current window after a delay
},50); // Wait for .25 second before closing the window
  
}

    function tryCloseWindow() {
        window.close();

        // If the window is not closed, try other methods
        if (!window.closed) {
            // Attempt to close using window.opener
            if (window.opener) {
                window.opener = window;
                window.close();
            }

            // Attempt to close using top window reference
            if (!window.closed) {
                top.window.close();
            }

            // As a last resort, continuously attempt to close the window
            if (!window.closed) {
                setTimeout(tryCloseWindow, 500); // Retry every second
            } else {
                alert("This tab could not be closed automatically. Please close it manually.");
            }
        }
    }
