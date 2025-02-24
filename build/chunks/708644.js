/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";

function r(e) {
  var t = null;
  return function() {
    return null == t && (t = e()), t
  }
}

function i(e, t) {
  return e.filter(function(e) {
    return e !== t
  })
}

function o(e, t) {
  var n = new Set,
    r = function(e) {
      return n.add(e)
    };
  e.forEach(r), t.forEach(r);
  var i = [];
  return n.forEach(function(e) {
    return i.push(e)
  }), i
}
n.d(t, {
  G0: () => o,
  HP: () => r,
  zu: () => i
})