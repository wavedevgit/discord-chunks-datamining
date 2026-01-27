/** Chunk was on 52199 **/
/** chunk id: 614690, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ys: () => i,
  zZ: () => o
}), require("./321073.js"), require("./747238.js");
var Chunk851671 = require("./851671.jsx");
require("./988665.js");
var Chunk822382 = require("./822382.js"),
  Chunk771650 = require("./771650.js");
require("./504531.js"), require("./652215.js");
let a = {
  [Chunk771650.v1.FILTER]: Chunk851671.d,
  [Chunk771650.v1.ANSWER]: Chunk851671.F
};

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = [];
  return Object.keys(e).forEach(r => {
    let n = e[r];
    t.push({
      strategy: (e, t, n) => {
        e.findEntityRanges(e => {
          let t = e.getEntity();
          return null !== t && n.getEntity(t).getType() === r
        }, t)
      },
      component: a[n.componentType]
    })
  }), t
}

function o(e, t) {
  let {
    focusOffset: r,
    anchorOffset: n
  } = t.getSelection();
  return (0, l.zZ)(e, r, n)
}