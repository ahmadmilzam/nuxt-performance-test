// callback - the function to run after onLoad
// delay - wait X milliseconds after onLoad
function onLoadVendor (callback, delay = 1) {
  // missed the load event, run now
  if (document.readyState === "complete") {
    setTimeout(() => callback(), delay);
  } else {
    window.addEventListener("load", function() {
      setTimeout(() => callback(), delay);
    });
  }
};

export default onLoadVendor;
