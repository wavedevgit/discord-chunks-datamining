/** Chunk was on web.js **/
"use strict";
var r = n(97131).f;
e.exports = function(e, t, n) {
  n in e || r(e, n, {
    configurable: !0,
    get: function() {
      return t[n]
    },
    set: function(e) {
      t[n] = e
    }
  })
}