/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
e.exports = function(e, t, r, i) {
  var o = this;

  function a(t) {
    return function() {
      o.nextExpectedAction = t, ++o.sequenceLevels[e], o.resetSequenceTimer()
    }
  }

  function s(t) {
    var a;
    o.fireCallback(r, t, e), "keyup" !== i && (a = n(619820), o.ignoreNextKeyup = a(t)), setTimeout(function() {
      o.resetSequences()
    }, 10)
  }
  o.sequenceLevels[e] = 0;
  for (var l = 0; l < t.length; ++l) {
    var c = l + 1 === t.length ? s : a(i || o.getKeyInfo(t[l + 1]).action);
    o.bindSingle(t[l], c, i, e, l)
  }
}