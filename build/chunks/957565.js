/** Chunk was on web.js **/
/** chunk id: 957565, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d,
  p5: () => u
}), require("./65821.js");
var r, i, Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js");
let l = Chunk723702.isPlatformEmbedded && null != Chunk837921.Ay.copy,
  c = "function" == typeof(null == (i = window.navigator) || null == (r = i.clipboard) ? true : r.writeText),
  u = l || c;
async function d(e, t, n) {
  if (!u) {
    null == n || n(Error("Clipboard API not supported."));
    return
  }
  try {
    l ? o.Ay.copy(e) : await window.navigator.clipboard.writeText(e), null == t || t()
  } catch (e) {
    null == n || n(e), s.A.captureException(e)
  }
}