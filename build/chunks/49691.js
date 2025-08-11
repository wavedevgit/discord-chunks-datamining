/** Chunk was on web.js **/
/** chunk id: 49691, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (null == e) return window;
  if ("[object Window]" !== e.toString()) {
    var t = e.ownerDocument;
    return t && t.defaultView || window
  }
  return e
}
require.d(exports, {
  Z: () => r
})