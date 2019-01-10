var setCookie = function(name, value) {
  document.cookie =
        name +
        "=" +
        value +
        "; path=/; domain=" +
        "chawkins.com" +
        "; expires=" +
        new Date(+new Date() + 1000 * 60 * 60 * 24 * 365).toUTCString(); // one year
};

var getCookie = function(name) {
  var match = document.cookie.match(new RegExp(name + "=([^;]+)"));
    if (match) {
      return match[1];
    } else {
      // check to see if there are legacy cookies with spaces
      var legacyMatch = document.cookie.match(
        new RegExp(name + "=([^;]+)")
      );
      if (legacyMatch) return legacyMatch[1];
    }
}
