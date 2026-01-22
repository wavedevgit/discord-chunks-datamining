/** Chunk was on web.js **/
/** chunk id: 465856, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (null != e.title && null != e.filename) {
    let t = e.filename.lastIndexOf("."),
      n = t > 0 ? e.filename.substr(t) : "";
    return e.title + n
  }
  return e.filename
}
require.d(exports, {
  A: () => r
})