/** Chunk was on web.js **/
/** chunk id: 38217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => i,
  _$: () => a,
  d7: () => o
}), require("./388685.js");
var Chunk149765 = require("./149765.js");

function i(e) {
  for (let {
      permissionOverwrites_: t
    }
    of e)
    if (null != t)
      for (let e in t) {
        let n = t[e];
        n.allow = r.vB(n.allow), n.deny = r.vB(n.deny)
      }
}

function a(e) {
  for (let [t, n] of e) i(n)
}

function o(e) {
  let {
    permissionOverwrites_: t
  } = e;
  if (null != t)
    for (let e in t) {
      let n = t[e];
      n.allow = r.vB(n.allow), n.deny = r.vB(n.deny)
    }
  return e
}