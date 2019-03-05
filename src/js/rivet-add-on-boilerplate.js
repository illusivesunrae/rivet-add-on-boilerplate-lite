const MyComponent = (() => {
  "use strict";
  /**
   * Begin writing private functions below.
   */
  const handleClick = event => {
    var button = event.target.closest("#my-button");

    if (!button) return;

    let message = prompt("What would you like me to say?");

    alert(message);
  }

  const Constructor = function(selector) {
    this.nodes = document.querySelectorAll(selector);
  };

  /**
   * Begin writing component methods below.
   */
  Constructor.prototype.sampleFunctionality = event => {
    document.addEventListener("click", handleClick);
  };

  return Constructor;
})();
