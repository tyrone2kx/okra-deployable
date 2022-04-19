const Okra = {
    create: function () {
        if (document.getElementById("okra-widget") && window.closeOkraWidget) {
            window.closeOkraWidget()
        }
        const widget = document.createElement("div");
        widget.style.width = "100%";
        widget.style.height = "100vh";
        widget.style.position = "absolute";
        widget.style.top = "0px";
        widget.style.bottom = "0px";
        // widget.style.zIndex = "9999";
        this.open = function ({ key, token, charge, country, env = "sandbox", payment = true }) {
          widget.setAttribute("data-key", key);
          widget.setAttribute("data-token", token);
          widget.setAttribute("data-amount", charge.amount);
          widget.setAttribute("data-currency", charge.currency);
          widget.setAttribute("data-env", env);
          widget.setAttribute("data-payment", payment);
          widget.setAttribute("data-country", country);
          widget.setAttribute("id", "okra-widget");
          document.body.appendChild(widget)
          var script = document.createElement('script');
          var link = document.createElement('link');
          link.rel = "stylesheet"
          link.type = "text/css"
          link.href = "index.css"
          script.type = 'text/javascript';
          script.src = "widget.js";
          document.head.appendChild(script);
          document.head.appendChild(link);
        }
        window.closeOkraWidget = () => {
          widget.setAttribute("id", "");
          document.body.removeChild(widget);
        };
      }
}