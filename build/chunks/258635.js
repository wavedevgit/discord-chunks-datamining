/** Chunk was on web.js **/
/** chunk id: 258635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var r = true,
  i = "Invariant failed";

function a(e, t) {
  if (!e) {
    if (r) throw Error(i);
    var n = "function" == typeof t ? t() : t,
      a = n ? "".concat(i, ": ").concat(n) : i;
    throw Error(a)
  }
}