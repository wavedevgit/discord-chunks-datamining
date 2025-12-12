/** Chunk was on web.js **/
/** chunk id: 383466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  jD: () => o,
  kK: () => a,
  xj: () => i,
  zd: () => r
});
var r = function(e) {
    return e instanceof SVGElement && "getBBox" in e
  },
  i = function(e) {
    if (r(e)) {
      var t = e.getBBox(),
        n = t.width,
        i = t.height;
      return !n && !i
    }
    var a = e,
      o = a.offsetWidth,
      s = a.offsetHeight;
    return !(o || s || e.getClientRects().length)
  },
  a = function(e) {
    var t, n, r = null == (n = null == (t = e) ? true : t.ownerDocument) ? true : n.defaultView;
    return !!(r && e instanceof r.Element)
  },
  o = function(e) {
    switch (e.tagName) {
      case "INPUT":
        if ("image" !== e.type) break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        returntrue
    }
    returnfalse
  }