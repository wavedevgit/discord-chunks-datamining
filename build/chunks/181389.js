/** Chunk was on web.js **/
/** chunk id: 181389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jl: () => l,
  g9: () => c
}), require("./539854.js"), require("./35282.js");
var Chunk395041 = require("./395041.jsx");
require("./349033.js");
var Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js");
require("./72006.js"), require("./981631.js");
let o = {
  [Chunk532428.Qe.FILTER]: Chunk395041.w,
  [Chunk532428.Qe.ANSWER]: Chunk395041.O
};

function s(e, t, n, r) {
  t.findEntityRanges(t => {
    let n = t.getEntity();
    return null !== n && e.getEntity(n).getType() === r
  }, n)
}

function l() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = [];
  return Object.keys(e).forEach(n => {
    let r = e[n];
    t.push({
      strategy: (e, t, r) => s(r, e, t, n),
      component: o[r.componentType]
    })
  }), t
}

function c(e, t) {
  let {
    focusOffset: n,
    anchorOffset: r
  } = t.getSelection();
  return (0, i.g9)(e, n, r)
}