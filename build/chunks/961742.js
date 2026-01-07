/** Chunk was on web.js **/
/** chunk id: 961742, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return n ? parseFloat(n.replace("px", "")) : 0
}
require("./444675.js"), (() => {
  let e = 0,
    t = () => `0000${(1679616*Math.random()|0).toString(36)}`.slice(false);
  return () => (e += 1, `u${t()}${e}`)
})()