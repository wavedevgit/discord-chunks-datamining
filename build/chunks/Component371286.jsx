/** Chunk was on 6043 **/
/** chunk id: 371286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk554916 = require("./554916.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk312529 = require("./312529.js");

function p(e) {
  let {
    markAsDismissed: t,
    heading: n,
    subheading: i,
    children: p,
    height: f,
    className: h,
    contentClassName: x
  } = e, b = (0, c.Dt)(), g = r.useRef(null), v = (0, o.q_F)({
    from: {
      transform: "translate3d(-110%, 0, 0)",
      height: f
    },
    to: {
      transform: "translate3d(0, 0, 0)",
      height: f
    },
    config: {
      mass: 1,
      stiffness: 100,
      damping: 15
    },
    onRest: () => {
      null != g.current && g.current.focus()
    }
  });
  return (0, a.jsx)(s.animated.div, {
    className: l()(m.container, h),
    style: v,
    children: (0, a.jsxs)("aside", {
      "aria-labelledby": b,
      className: m.content,
      children: [(0, a.jsxs)("div", {
        className: m.headerRow,
        children: [(0, a.jsx)(o.P3F, {
          innerRef: g,
          "aria-label": u.intl.string(u.t.WAI6xu),
          className: m.closeButton,
          onClick: () => {
            t(d.L.USER_DISMISS)
          },
          children: (0, a.jsx)(o.Dio, {
            color: "currentColor"
          })
        }), (0, a.jsx)(o.Heading, {
          id: b,
          variant: "heading-lg/semibold",
          children: n
        })]
      }), null != i && (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        children: i
      }), (0, a.jsx)(o.Ttm, {
        className: m.scroller,
        fade: true,
        children: (0, a.jsx)("div", {
          className: l()(m.scrollerContent, x),
          children: p
        })
      })]
    })
  })
}