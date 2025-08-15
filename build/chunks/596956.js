/** Chunk was on web.js **/
/** chunk id: 596956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => a,
  T: () => i
});
var Chunk476326 = require("./476326.js");

function i(e, t) {
  if (t.id === e.uri || null != t.id && t.id === e.id) returntrue;
  if (t.item.platform === r.ow.REACT_NATIVE) {
    let {
      item: r
    } = t, {
      filename: i
    } = e;
    if (r.originalUri === e.uri) returntrue;
    if (null != i) {
      var n;
      if (null == (n = r.originalUri) ? true : n.includes(i)) returntrue
    }
  }
  returnfalse
}

function a(e, t) {
  return 0 === t ? 0 : Math.min(Math.floor(e / t * 100), 100)
}