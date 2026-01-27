/** Chunk was on web.js **/
/** chunk id: 736400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => i,
  X3: () => a,
  n2: () => o
}), require("./896048.js");
var Chunk136722 = require("./136722.js");

function i(e) {
  for (let {
      permissionOverwrites_: t
    }
    of e)
    if (null != t)
      for (let e in t) {
        let n = t[e];
        n.allow = r.iu(n.allow), n.deny = r.iu(n.deny)
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
      n.allow = r.iu(n.allow), n.deny = r.iu(n.deny)
    }
  return e
}