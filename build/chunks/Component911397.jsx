/** Chunk was on 40184 **/
/** chunk id: 911397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk195045 = require("./195045.js"),
  Chunk663537 = require("./663537.js");
let u = e => {
  let {
    id: t,
    occupant: n,
    x: l,
    y: u,
    assetKey: d,
    onClick: p,
    skipNewUserEducation: f = false,
    shadowPosition: h
  } = e, m = (0, s.Z)(), g = r.useMemo(() => null == m ? true : m.seats[d], [m, d]), b = r.useMemo(() => null == g ? true : g.seat, [g]), y = r.useMemo(() => null == g ? true : g.shadow, [g]);
  return (0, i.jsx)(o.P3F, {
    "aria-label": "claim seat",
    onClick: e => {
      e.preventDefault(), e.stopPropagation(), p(t)
    },
    className: a()(c.seat, {
      [c.claimed]: null != n
    }),
    style: {
      transform: "translate(".concat(l, "px, ").concat(u, "px)")
    },
    children: (0, i.jsxs)("div", {
      className: c.seatWrapper,
      children: [null != y && null != h && (0, i.jsx)("img", {
        className: a()(c.image, c.shadow),
        style: {
          transform: "translate(".concat(h.x, "px, ").concat(h.y, "px)")
        },
        src: null == g ? true : g.shadow,
        alt: ""
      }), null != b && (0, i.jsx)("img", {
        onDragStart: e => e.preventDefault(),
        className: a()(c.image, {
          [c.claimed]: null != n,
          [c.noAnimation]: f
        }),
        style: {
          animationDelay: "".concat(5500 + 150 * t, "ms")
        },
        src: null == g ? true : g.seat,
        alt: ""
      })]
    })
  })
}