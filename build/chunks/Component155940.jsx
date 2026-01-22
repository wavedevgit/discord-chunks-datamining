/** Chunk was on web.js **/
/** chunk id: 155940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk169909 = require("./169909.jsx"),
  Chunk457806 = require("./457806.js");

function f(e) {
  let {
    look: t = u.r0.LARGE_BANNER
  } = e, n = (0, o.bG)([c.A], () => c.A.useReducedMotion), {
    styleLarge: a,
    styleSmall: f
  } = i.useMemo(() => ({
    styleLarge: {
      width: "".concat(10 + 50 * Math.random(), "%")
    },
    styleSmall: {
      width: "".concat(30 + 60 * Math.random(), "%")
    }
  }), []);
  return (0, r.jsxs)("div", {
    className: s()(d.kL, d.NX, {
      [d.cb]: n,
      [d.uS]: t !== u.r0.ROW,
      [d.qd]: t === u.r0.ROW
    }),
    children: [(0, r.jsx)("div", {
      className: s()(d._e, {
        [d.i2]: t === u.r0.MEDIUM_BANNER,
        [d.ir]: t === u.r0.LARGE_BANNER
      })
    }), (0, r.jsxs)("div", {
      className: s()(d.TD, {
        [d.Ne]: t === u.r0.ROW
      }),
      children: [(0, r.jsx)("div", {
        className: s()(d.Pz, {
          [d.Lu]: t === u.r0.ROW
        })
      }), (0, r.jsxs)("div", {
        className: d.FS,
        children: [(0, r.jsx)("div", {
          className: d.jC,
          style: a,
          children: (0, r.jsx)(l.Heading, {
            className: d.R,
            variant: "heading-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: "_"
          })
        }), (0, r.jsx)("div", {
          className: d.jC,
          style: f,
          children: (0, r.jsx)(l.Text, {
            className: d.R,
            variant: "text-sm/normal",
            color: "text-subtle",
            lineClamp: 1,
            children: "_"
          })
        })]
      }), t === u.r0.ROW && (0, r.jsx)("div", {
        className: d.ek
      })]
    })]
  })
}