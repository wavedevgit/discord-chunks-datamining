/** Chunk was on web.js **/
/** chunk id: 916784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XJ: () => r,
  dK: () => i,
  td: () => s,
  vq: () => a
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
      s = a.offsetWidth,
      o = a.offsetHeight;
    return !(s || o || e.getClientRects().length)
  },
  a = function(e) {
    if (e instanceof Element) returntrue;
    var t, n = null == (t = null == e ? true : e.ownerDocument) ? true : t.defaultView;
    return !!(n && e instanceof n.Element)
  },
  s = function(e) {
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