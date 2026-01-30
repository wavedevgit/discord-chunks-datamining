/** Chunk was on 89488 **/
/** chunk id: 647901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => s,
  x: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk865513 = require("./865513.js");
let _ = {
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

function s() {
  return i.useContext(c)
}

function d(e) {
  let {
    children: t,
    size: n,
    color: o,
    weight: d
  } = e, u = s(), p = i.useMemo(() => {
    let e = {
        className: true,
        size: null != n ? n : u.size,
        color: null != o ? o : u.color,
        weight: null != d ? d : u.weight
      },
      t = a()(_.SIZE[e.size], _.COLOR[e.color], _.WEIGHT[e.weight]);
    return "" !== t && (e.className = a()(l.zr, t)), e
  }, [n, o, d, u]);
  return (0, r.jsx)(c.Provider, {
    value: p,
    children: t
  })
}