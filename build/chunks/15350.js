/** Chunk was on web.js **/
/** chunk id: 15350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => o
}), require("./539854.js");
var Chunk285651 = require("./285651.js"),
  Chunk138421 = require("./138421.js");
let o = (e, t, n) => {
  if ("" === e) return null;
  let o = [],
    a = [];
  return (0, i.WL)(e).forEach(e => {
    let i = (0, r.cO)(e, t, n);
    i === r.eb.SENDABLE ? o.push(e) : i === r.eb.SENDABLE_WITH_PREMIUM && a.push(e)
  }), {
    sendable: o,
    sendableWithPremium: a
  }
}