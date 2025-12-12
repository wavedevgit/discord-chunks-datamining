/** Chunk was on web.js **/
/** chunk id: 367989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk911331 = require("./911331.js");

function i(e) {
  return e === Object(e) && 0 !== Object.keys(e).length
}

function o(e, t) {
  true === t && (t = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(e) {
    var r = e.el,
      i = e.top,
      o = e.left;
    r.scroll && n ? r.scroll({
      top: i,
      left: o,
      behavior: t
    }) : (r.scrollTop = i, r.scrollLeft = o)
  })
}

function a(e) {
  returnfalse === e ? {
    block: "end",
    inline: "nearest"
  } : i(e) ? e : {
    block: "start",
    inline: "nearest"
  }
}
let s = function(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (i(t) && "function" == typeof t.behavior) return t.behavior(n ? (0, r.Z)(e, t) : []);
  if (n) {
    var s = a(t);
    return o((0, r.Z)(e, s), s.behavior)
  }
}