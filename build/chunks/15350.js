/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  S: () => o
}), n(653041);
var r = n(285651),
  i = n(138421);
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