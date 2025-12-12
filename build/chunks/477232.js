/** Chunk was on web.js **/
/** chunk id: 477232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Zq: () => a,
  kR: () => i,
  r3: () => r
});
let r = e => {
    var t;
    return null != (t = null == e ? true : e.ownerDocument) ? t : document
  },
  i = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;

function o(e) {
  return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType
}

function a(e) {
  return o(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e
}