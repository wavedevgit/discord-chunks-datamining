/** Chunk was on web.js **/
/** chunk id: 654108, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = null == e ? true : e.activeElement;
  return ["INPUT", "TEXTAREA"].includes(null == t ? true : t.tagName) || (null == t ? true : t.isContentEditable)
}
require.d(exports, {
  A: () => r
})