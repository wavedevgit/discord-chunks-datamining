/** Chunk was on 89455 **/
/** chunk id: 647901, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => u,
  x: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk865513 = require("./865513.js");
let s = {
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

function _(e) {
  let {
    children: n,
    size: t,
    color: o,
    weight: _
  } = e, d = u(), b = i.useMemo(() => {
    let e = {
        className: true,
        size: null != t ? t : d.size,
        color: null != o ? o : d.color,
        weight: null != _ ? _ : d.weight
      },
      n = a()(s.SIZE[e.size], s.COLOR[e.color], s.WEIGHT[e.weight]);
    return "" !== n && (e.className = a()(l.zr, n)), e
  }, [t, o, _, d]);
  return (0, r.jsx)(c.Provider, {
    value: b,
    children: n
  })
}