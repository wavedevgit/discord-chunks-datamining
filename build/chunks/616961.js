/** Chunk was on web.js **/
/** chunk id: 616961, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => a
}), require("./321073.js");
var Chunk361670 = require("./361670.js"),
  Chunk464114 = require("./464114.js");
let a = (e, t, n) => {
  if ("" === e) return null;
  let a = [],
    s = [];
  return (0, i.G2)(e).forEach(e => {
    let i = (0, r.W$)(e, t, n);
    i === r.Ux.SENDABLE ? a.push(e) : i === r.Ux.SENDABLE_WITH_PREMIUM && s.push(e)
  }), {
    sendable: a,
    sendableWithPremium: s
  }
}