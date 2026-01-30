/** Chunk was on 78376 **/
/** chunk id: 511968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk273166 = require("./273166.jsx"),
  Chunk885996 = require("./885996.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk963342 = require("./963342.js"),
  Chunk3432 = require("./3432.jsx"),
  Chunk580630 = require("./580630.js"),
  Chunk240248 = require("./240248.js"),
  Chunk237218 = require("./237218.js"),
  Chunk689296 = require("./689296.jsx"),
  Chunk542858 = require("./542858.js");

function f(e) {
  let {
    cta: t,
    storeListing: n,
    className: l
  } = e, {
    applicationId: f,
    benefits: b,
    description: h
  } = n, E = i.useMemo(() => null == n.thumbnail ? null : (0, m.t)(f, n.thumbnail, 256), [f, n.thumbnail]), {
    data: O
  } = (0, d.j)(n.skuId), C = i.useMemo(() => {
    if (null == O || 0 === O.length) return null;
    let e = O[0];
    return (0, _._J)(e)
  }, [O]);
  return null == C ? null : (0, r.jsxs)(a.q, {
    className: s()(A.iE, l),
    header: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: A.qd,
        children: [null != E && (0, r.jsx)(c._V3, {
          src: E.href,
          imageClassName: A.rW,
          width: 48,
          height: 48
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/bold",
            children: n.summary
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            children: C
          })]
        })]
      }), t]
    }),
    children: [!(0, p.uJ)(h) && (0, r.jsx)("div", {
      className: A.h_,
      children: (0, r.jsx)(g.A, {
        variant: "text-sm/medium",
        children: h
      })
    }), null != b && b.length > 0 && (0, r.jsx)("div", {
      className: A.PX,
      children: b.map(e => {
        let {
          id: t,
          name: n,
          description: i,
          icon: l
        } = e;
        return (0, r.jsx)(o.FY, {
          header: n,
          icon: (0, u.N)(f, l),
          description: i
        }, t)
      })
    })]
  })
}