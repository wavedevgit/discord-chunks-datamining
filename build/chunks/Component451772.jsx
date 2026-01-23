/** Chunk was on web.js **/
/** chunk id: 451772, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk860923 = require("./860923.js"),
  Chunk816790 = require("./816790.js");
let u = 5500,
  d = 150,
  f = e => {
    let {
      id: t,
      occupant: n,
      x: a,
      y: f,
      assetKey: p,
      onClick: _,
      skipNewUserEducation: h = false,
      shadowPosition: m
    } = e, g = (0, l.A)(), E = i.useMemo(() => null == g ? true : g.seats[p], [g, p]), y = i.useMemo(() => null == E ? true : E.seat, [E]), b = i.useMemo(() => null == E ? true : E.shadow, [E]);
    return (0, r.jsx)(o.DUT, {
      "aria-label": "claim seat",
      onClick: null != _ ? e => {
        e.preventDefault(), e.stopPropagation(), _(t)
      } : true,
      className: s()(c.am, {
        [c.Sf]: null != n
      }),
      style: {
        transform: "translate(".concat(a, "px, ").concat(f, "px)")
      },
      children: (0, r.jsxs)("div", {
        className: c.LU,
        children: [null != b && null != m && (0, r.jsx)("img", {
          className: s()(c.Sl, c.r7),
          style: {
            transform: "translate(".concat(m.x, "px, ").concat(m.y, "px)")
          },
          src: null == E ? true : E.shadow,
          alt: ""
        }), null != y && (0, r.jsx)("img", {
          onDragStart: e => e.preventDefault(),
          className: s()(c.Sl, {
            [c.Sf]: null != n,
            [c.cb]: h
          }),
          style: {
            animationDelay: "".concat(u + d * t, "ms")
          },
          src: null == E ? true : E.seat,
          alt: ""
        })]
      })
    })
  }