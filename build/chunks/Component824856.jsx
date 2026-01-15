/** Chunk was on web.js **/
/** chunk id: 824856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk533594 = require("./533594.jsx"),
  Chunk621082 = require("./621082.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk58385 = require("./58385.js"),
  Chunk889989 = require("./889989.jsx"),
  Chunk937615 = require("./937615.js"),
  Chunk624138 = require("./624138.js"),
  Chunk150414 = require("./150414.js"),
  Chunk993553 = require("./993553.jsx"),
  Chunk426167 = require("./426167.js");

function g(e) {
  let {
    cta: t,
    storeListing: n,
    className: a
  } = e, {
    applicationId: g,
    benefits: E,
    description: b
  } = n, y = i.useMemo(() => null == n.thumbnail ? null : (0, _.q)(g, n.thumbnail, 256), [g, n.thumbnail]), {
    data: O
  } = (0, u.X)(n.skuId), v = i.useMemo(() => {
    if (null == O || 0 === O.length) return null;
    let e = O[0];
    return (0, f.xg)(e)
  }, [O]);
  return null == v ? null : (0, r.jsxs)(s.l, {
    className: o()(m.wrapper, a),
    header: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: m.headerTitle,
        children: [null != y && (0, r.jsx)(c.Eep, {
          src: y.href,
          imageClassName: m.subscriptionImg,
          width: 48,
          height: 48
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/bold",
            children: n.summary
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            children: v
          })]
        })]
      }), t]
    }),
    children: [!(0, p.Ew)(b) && (0, r.jsx)("div", {
      className: m.description,
      children: (0, r.jsx)(h.Z, {
        variant: "text-sm/medium",
        children: b
      })
    }), null != E && E.length > 0 && (0, r.jsx)("div", {
      className: m.benefits,
      children: E.map(e => {
        let {
          id: t,
          name: n,
          description: i,
          icon: a
        } = e;
        return (0, r.jsx)(l.Gm, {
          header: n,
          icon: (0, d.n)(g, a),
          description: i
        }, t)
      })
    })]
  })
}