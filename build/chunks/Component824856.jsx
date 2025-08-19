/** Chunk was on 66181 **/
/** chunk id: 824856, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk561537 = require("./561537.jsx"),
  Chunk269210 = require("./269210.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk58385 = require("./58385.js"),
  Chunk889989 = require("./889989.jsx"),
  Chunk937615 = require("./937615.js"),
  Chunk624138 = require("./624138.js"),
  Chunk150414 = require("./150414.js"),
  Chunk993553 = require("./993553.jsx"),
  Chunk337913 = require("./337913.js");

function b(e) {
  let {
    cta: t,
    storeListing: n,
    className: s
  } = e, {
    applicationId: b,
    benefits: x,
    description: _
  } = n, j = r.useMemo(() => null == n.thumbnail ? null : (0, g.q)(b, n.thumbnail, 256), [b, n.thumbnail]), {
    data: E
  } = (0, d.X)(n.skuId), C = r.useMemo(() => {
    if (null == E || 0 === E.length) return null;
    let e = E[0];
    return (0, m.xg)(e)
  }, [E]);
  return null == C ? null : (0, i.jsxs)(l.l, {
    className: a()(f.wrapper, s),
    header: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)("div", {
        className: f.headerTitle,
        children: [null != j && (0, i.jsx)(c.Eep, {
          src: j.href,
          imageClassName: f.subscriptionImg,
          width: 48,
          height: 48
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(c.X6q, {
            variant: "heading-md/bold",
            children: n.summary
          }), (0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            children: C
          })]
        })]
      }), t]
    }),
    children: [!(0, p.Ew)(_) && (0, i.jsx)("div", {
      className: f.description,
      children: (0, i.jsx)(h.Z, {
        variant: "text-sm/medium",
        children: _
      })
    }), null != x && x.length > 0 && (0, i.jsx)("div", {
      className: f.benefits,
      children: x.map(e => {
        let {
          id: t,
          name: n,
          description: r,
          icon: s
        } = e;
        return (0, i.jsx)(o.Gm, {
          header: n,
          icon: (0, u.n)(b, s),
          description: r
        }, t)
      })
    })]
  })
}