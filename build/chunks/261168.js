/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";

function r(e) {
  return function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
n.d(t, {
  Z: () => r
})