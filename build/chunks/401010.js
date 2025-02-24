/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";

function r(e, t, n) {
  var r = t.reduce(function(t, n) {
    return t || e.getData(n)
  }, "");
  return null != r ? r : n
}
n.d(t, {
  R: () => r
})