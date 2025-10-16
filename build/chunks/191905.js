/** Chunk was on web.js **/
/** chunk id: 191905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => a
});
var Chunk594886 = require("./594886.js");
let i = new Map;

function a(e) {
  let {
    locale: t
  } = (0, r.j)(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? false : 1).join() : "");
  if (i.has(n)) return i.get(n);
  let a = new Intl.Collator(t, e);
  return i.set(n, a), a
}