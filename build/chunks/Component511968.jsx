/** Chunk was on web.js **/
/** chunk id: 511968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    cta: t,
    storeListing: n,
    className: a
  } = e, {
    applicationId: g,
    benefits: E,
    description: b
  } = n, y = i.useMemo(() => null == n.thumbnail ? null : (0, _.t)(g, n.thumbnail, 256), [g, n.thumbnail]), {
    data: O
  } = (0, u.j)(n.skuId), A = i.useMemo(() => {
    if (null == O || 0 === O.length) return null;
    let e = O[0];
    return (0, f._J)(e)
  }, [O]);
  return null == A ? null : (0, r.jsxs)(o.q, {
    className: s()(m.iE, a),
    header: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: m.qd,
        children: [null != y && (0, r.jsx)(c._V3, {
          src: y.href,
          imageClassName: m.rW,
          width: 48,
          height: 48
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/bold",
            children: n.summary
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            children: A
          })]
        })]
      }), t]
    }),
    children: [!(0, p.uJ)(b) && (0, r.jsx)("div", {
      className: m.h_,
      children: (0, r.jsx)(h.A, {
        variant: "text-sm/medium",
        children: b
      })
    }), null != E && E.length > 0 && (0, r.jsx)("div", {
      className: m.PX,
      children: E.map(e => {
        let {
          id: t,
          name: n,
          description: i,
          icon: a
        } = e;
        return (0, r.jsx)(l.FY, {
          header: n,
          icon: (0, d.N)(g, a),
          description: i
        }, t)
      })
    })]
  })
}