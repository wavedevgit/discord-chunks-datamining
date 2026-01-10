/** Chunk was on 49131 **/
/** chunk id: 993259, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => c,
  K: () => o
}), require("./388685.js"), require("./642613.js");
var Chunk149765 = require("./149765.js"),
  Chunk605436 = require("./605436.js"),
  Chunk345162 = require("./345162.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return [...e].sort(a.W).map(e => (0, a.X0)(e))
}

function c(e, t, n) {
  return e.filter(e => (0, i.Fs)(e, s.Plq.ADMINISTRATOR) || ((e, t, n) => {
    if (null == e.id) returnfalse;
    let a = l.I0({
      forceRoles: {
        [e.id]: e
      },
      context: n
    });
    return r.e$(a, t)
  })(e, n, t))
}