/** Chunk was on web.js **/
/** chunk id: 15350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => a
}), require("./539854.js");
var Chunk285651 = require("./285651.js"),
  Chunk138421 = require("./138421.js");
let a = (e, t, n) => {
  if ("" === e) return null;
  let a = [],
    o = [];
  return (0, i.WL)(e).forEach(e => {
    let i = (0, r.cO)(e, t, n);
    i === r.eb.SENDABLE ? a.push(e) : i === r.eb.SENDABLE_WITH_PREMIUM && o.push(e)
  }), {
    sendable: a,
    sendableWithPremium: o
  }
}