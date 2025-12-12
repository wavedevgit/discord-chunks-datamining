/** Chunk was on web.js **/
/** chunk id: 572004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JG: () => d,
  wS: () => u
}), require("./415506.js");
var r, i, Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js");
let l = Chunk358085.isPlatformEmbedded && null != Chunk998502.ZP.copy,
  c = "function" == typeof(null == (i = window.navigator) || null == (r = i.clipboard) ? true : r.writeText),
  u = l || c;
async function d(e, t, n) {
  if (!u) {
    null == n || n(Error("Clipboard API not supported."));
    return
  }
  try {
    l ? s.ZP.copy(e) : await window.navigator.clipboard.writeText(e), null == t || t()
  } catch (e) {
    null == n || n(e), o.Z.captureException(e)
  }
}