/** Chunk was on web.js **/
/** chunk id: 253231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Zq: () => o,
  r3: () => r
});
let r = e => {
  var t;
  return null != (t = null == e ? true : e.ownerDocument) ? t : document
};

function i(e) {
  return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType
}

function o(e) {
  return i(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e
}