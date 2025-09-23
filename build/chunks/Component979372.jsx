/** Chunk was on web.js **/
/** chunk id: 979372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => d,
  _: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk433769 = require("./433769.js");
let l = {
    SIZE: {
      default: true,
      reduced: Chunk433769.sizeReduced
    },
    COLOR: {
      default: true,
      muted: Chunk433769.colorMuted
    },
    WEIGHT: {
      default: true,
      reduced: Chunk433769.weightReduced
    }
  },
  c = Chunk647438.createContext({
    className: true,
    size: "default",
    color: "default",
    weight: "default"
  });

function u() {
  return Chunk647438.useContext(c)
}

function d(e) {
  let {
    children: t,
    size: n,
    color: a,
    weight: d
  } = e, f = u(), _ = i.useMemo(() => {
    let e = {
        className: true,
        size: null != n ? n : f.size,
        color: null != a ? a : f.color,
        weight: null != d ? d : f.weight
      },
      t = o()(l.SIZE[e.size], l.COLOR[e.color], l.WEIGHT[e.weight]);
    return "" !== t && (e.className = o()(s.root, t)), e
  }, [n, a, d, f]);
  return (0, r.jsx)(c.Provider, {
    value: _,
    children: t
  })
}