/** Chunk was on 50033 **/
/** chunk id: 885338, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
  x = null != window.opener;

function v() {
  let {
    type: e
  } = (0, i.g)(), n = (0, f.mw)(e), l = (0, o.o)().get("error-code"), a = t.useCallback(() => {
    window.close()
  }, []), v = t.useMemo(() => {
    switch (n) {
      case h.fg2.AMAZON_MUSIC:
        return (0, s.jsx)("div", {
          className: r()(p.iU, p.zH),
          children: c.Fr ? b.intl.format(b.t["0EikXi"], {
            link: () => (0, s.jsx)(u.MzZ, {
              href: j,
              children: j
            })
          }) : b.intl.format(b.t.hKHZhO, {
            link: () => (0, s.jsx)(u.MzZ, {
              href: j,
              children: j
            })
          })
        });
      case h.fg2.YOUTUBE:
        if (l === h.t02.UNKNOWN_ACCOUNT.toString()) return (0, s.jsx)("div", {
          className: r()(p.iU, p.zH),
          children: b.intl.format(b.t.nQPJdL, {
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
  return (0, s.jsxs)(f.mP, {
    platformType: n,
    children: [(0, s.jsx)("div", {
      className: r()(p.iU, p.z3),
      children: b.intl.format(b.t.E62dXo, {
        name: N.name
      })
    }), (0, s.jsx)("div", {
      className: r()(p.iU, p.zH),
      children: b.intl.string(b.t.Ra6lcp)
    }), v, x ? (0, s.jsx)(d.$n, {
      className: p.HM,
      onClick: a,
      children: b.intl.string(b.t.i4jeWR)
    }) : null, null != l ? (0, s.jsx)("div", {
      className: r()(p.iU, p.nf),
      children: b.intl.format(b.t.LElyIL, {
        errorCode: l
      })
    }) : null]
  })
}