/** Chunk was on web.js **/
/** chunk id: 911397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk195045 = require("./195045.js"),
  Chunk663537 = require("./663537.js");
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
    } = e, g = (0, l.Z)(), E = i.useMemo(() => null == g ? true : g.seats[p], [g, p]), b = i.useMemo(() => null == E ? true : E.seat, [E]), y = i.useMemo(() => null == E ? true : E.shadow, [E]);
    return (0, r.jsx)(s.P3F, {
      "aria-label": "claim seat",
      onClick: null != _ ? e => {
        e.preventDefault(), e.stopPropagation(), _(t)
      } : true,
      className: o()(c.seat, {
        [c.claimed]: null != n
      }),
      style: {
        transform: "translate(".concat(a, "px, ").concat(f, "px)")
      },
      children: (0, r.jsxs)("div", {
        className: c.seatWrapper,
        children: [null != y && null != m && (0, r.jsx)("img", {
          className: o()(c.image, c.shadow),
          style: {
            transform: "translate(".concat(m.x, "px, ").concat(m.y, "px)")
          },
          src: null == E ? true : E.shadow,
          alt: ""
        }), null != b && (0, r.jsx)("img", {
          onDragStart: e => e.preventDefault(),
          className: o()(c.image, {
            [c.claimed]: null != n,
            [c.noAnimation]: h
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