/** Chunk was on 54157 **/
/** chunk id: 181389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jl: () => i,
  g9: () => o
}), require("./539854.js"), require("./35282.js");
var Chunk395041 = require("./395041.jsx");
require("./349033.js");
var Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js");
require("./72006.js"), require("./981631.js");
let a = {
  [Chunk532428.Qe.FILTER]: Chunk395041.w,
  [Chunk532428.Qe.ANSWER]: Chunk395041.O
};

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = [];
  return Object.keys(module).forEach(n => {
    let r = e[n];
    t.push({
      strategy: (e, t, r) => {
        e.findEntityRanges(e => {
          let t = e.getEntity();
          return null !== t && r.getEntity(t).getType() === n
        }, t)
      },
      component: a[r.componentType]
    })
  }), exports
}

function o(e, t) {
  let {
    focusOffset: n,
    anchorOffset: r
  } = t.getSelection();
  return (0, s.g9)(e, n, r)
}