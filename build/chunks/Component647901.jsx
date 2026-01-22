/** Chunk was on web.js **/
/** chunk id: 647901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => u,
  x: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk865513 = require("./865513.js");
let l = {
    SIZE: {
      default: true,
      reduced: Chunk865513.k2
    },
    COLOR: {
      default: true,
      muted: Chunk865513.JF
    },
    WEIGHT: {
      default: true,
      reduced: Chunk865513.Xj
    }
  },
  c = Chunk64700.createContext({
    className: true,
    size: "default",
    color: "default",
    weight: "default"
  });

function u() {
  return i.useContext(c)
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
      t = s()(l.SIZE[e.size], l.COLOR[e.color], l.WEIGHT[e.weight]);
    return "" !== t && (e.className = s()(o.zr, t)), e
  }, [n, a, d, f]);
  return (0, r.jsx)(c.Provider, {
    value: p,
    children: t
  })
}