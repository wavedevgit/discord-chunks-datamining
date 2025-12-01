/** Chunk was on web.js **/
/** chunk id: 979372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => d,
  _: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk632065 = require("./632065.js");
let l = {
    SIZE: {
      default: true,
      reduced: Chunk632065.sizeReduced
    },
    COLOR: {
      default: true,
      muted: Chunk632065.colorMuted
    },
    WEIGHT: {
      default: true,
      reduced: Chunk632065.weightReduced
    }
  },
  c = Chunk473749.createContext({
    className: true,
    size: "default",
    color: "default",
    weight: "default"
  });

function u() {
  return Chunk473749.useContext(c)
}

function d(e) {
  let {
    children: t,
    size: n,
    color: a,
    weight: d
  } = e, f = u(), p = i.useMemo(() => {
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
    value: p,
    children: t
  })
}