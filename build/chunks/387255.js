/** Chunk was on 46875 **/
/** chunk id: 387255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  N: () => c,
  i: () => o
}), require("./896048.js"), require("./638769.js");
var Chunk136722 = require("./136722.js"),
  Chunk495273 = require("./495273.js"),
  Chunk34457 = require("./34457.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return [...e].sort(r.uh).map(e => (0, r.B4)(e))
}

function c(e, t, n) {
  return e.filter(e => (0, i._m)(e, s.xBc.ADMINISTRATOR) || ((e, t, n) => {
    if (null == e.id) returnfalse;
    let r = a.aH({
      forceRoles: {
        [e.id]: e
      },
      context: n
    });
    return l.zy(r, t)
  })(e, n, t))
}