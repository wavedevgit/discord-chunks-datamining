/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
t.exports = {
  encode: function(t, e, r) {
    return t + "-" + e + "-" + r
  },
  decode: function(t) {
    var e = t.split("-").reverse(),
      r = e[0],
      n = e[1];
    return {
      blockKey: e.slice(2).reverse().join("-"),
      decoratorKey: parseInt(n, 10),
      leafKey: parseInt(r, 10)
    }
  }
}