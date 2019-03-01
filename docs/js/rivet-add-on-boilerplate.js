(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.MyComponent = factory(root);
  }
})(
  typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : this,
  function(window) {
    "use strict";

    var sampleFunctionality = function(event) {
      var button = event.target.closest("#my-button");

      // Bail if the target was not a toggle button.
      if (!button) return;

      let message = prompt("What would you like me to say?");
      alert(message);
    };

    var init = function() {
      console.log("Rivet Add-on Boilerplate!");
      document.addEventListener("click", sampleFunctionality, false);
    };

    // Return public APIs
    return {
      init: init
    };
  }
);
