/** Chunk was on web.js **/
/** chunk id: 297987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ng: () => o,
  TW: () => r,
  mD: () => i
});
let r = e => {
    var t;
    return null != (t = null == e ? true : e.ownerDocument) ? t : document
  },
  i = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;

function a(e) {
  return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType
}

function o(e) {
  return a(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e
}