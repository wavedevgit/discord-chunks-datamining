/** Chunk was on 50033 **/
/** chunk id: 885338, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk607399 = require("./607399.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk458518 = require("./458518.js"),
  Chunk573648 = require("./573648.js"),
  Chunk950198 = require("./950198.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk201736 = require("./201736.js");
let j = "https://dis.gd/Amazon-Music-Connection",
  v = null != window.opener;

function x() {
  let {
    type: e
  } = (0, i.g)(), n = (0, f.mw)(e), l = (0, u.o)().get("error-code"), t = s.useCallback(() => {
    window.close()
  }, []), x = s.useMemo(() => {
    switch (n) {
      case h.fg2.AMAZON_MUSIC:
        return (0, r.jsx)("div", {
          className: a()(p.iU, p.zH),
          children: c.Fr ? g.intl.format(g.t["0EikXi"], {
            link: () => (0, r.jsx)(o.MzZ, {
              href: j,
              children: j
            })
          }) : g.intl.format(g.t.hKHZhO, {
            link: () => (0, r.jsx)(o.MzZ, {
              href: j,
              children: j
            })
          })
        });
      case h.fg2.YOUTUBE:
        if (l === h.t02.UNKNOWN_ACCOUNT.toString()) return (0, r.jsx)("div", {
          className: a()(p.iU, p.zH),
          children: g.intl.format(g.t.nQPJdL, {
            link: "https://support.google.com/youtube/answer/1646861"
          })
        });
        return null;
      default:
        return null
    }
  }, [l, n]);
  if (null == n) return null;
  let N = m.A.get(n);
  return (0, r.jsxs)(f.mP, {
    platformType: n,
    children: [(0, r.jsx)("div", {
      className: a()(p.iU, p.z3),
      children: g.intl.format(g.t.E62dXo, {
        name: N.name
      })
    }), (0, r.jsx)("div", {
      className: a()(p.iU, p.zH),
      children: g.intl.string(g.t.Ra6lcp)
    }), x, v ? (0, r.jsx)(d.$n, {
      className: p.HM,
      onClick: t,
      children: g.intl.string(g.t.i4jeWR)
    }) : null, null != l ? (0, r.jsx)("div", {
      className: a()(p.iU, p.nf),
      children: g.intl.format(g.t.LElyIL, {
        errorCode: l
      })
    }) : null]
  })
}