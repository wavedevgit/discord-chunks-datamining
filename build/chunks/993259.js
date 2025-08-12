/** Chunk was on 54214 **/
/** chunk id: 993259, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => d,
  K: () => c
}), require("./388685.js"), require("./642613.js");
var Chunk149765 = require("./149765.js"),
  Chunk605436 = require("./605436.js"),
  Chunk345162 = require("./345162.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");
let o = (e, t, n) => {
  if (null == e.id) returnfalse;
  let i = l.I0({
    forceRoles: {
      [e.id]: e
    },
    context: n
  });
  return r.e$(i, t)
};

function c(e) {
  return [...e].sort(i.W).map(e => (0, i.X0)(e))
}

function d(e, t, n) {
  return e.filter(e => (0, a.Fs)(e, s.Plq.ADMINISTRATOR) || o(e, n, t))
}