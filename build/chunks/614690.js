/** Chunk was on web.js **/
/** chunk id: 614690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ys: () => l,
  zZ: () => c
}), require("./321073.js"), require("./747238.js");
var Chunk851671 = require("./851671.jsx");
require("./988665.js");
var Chunk822382 = require("./822382.js"),
  Chunk771650 = require("./771650.js");
require("./504531.js"), require("./652215.js");
let s = {
  [Chunk771650.v1.FILTER]: Chunk851671.d,
  [Chunk771650.v1.ANSWER]: Chunk851671.F
};

function o(e, t, n, r) {
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
      strategy: (e, t, r) => o(r, e, t, n),
      component: s[r.componentType]
    })
  }), t
}

function c(e, t) {
  let {
    focusOffset: n,
    anchorOffset: r
  } = t.getSelection();
  return (0, i.zZ)(e, n, r)
}