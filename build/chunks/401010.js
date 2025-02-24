/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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