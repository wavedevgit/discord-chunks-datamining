/** Chunk was on 23736 **/
/** chunk id: 371286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk312529 = require("./312529.js");

function u(e) {
  let {
    markAsDismissed: t,
    heading: n,
    subheading: u,
    children: m,
    height: p
  } = e, h = (0, s.Dt)(), f = r.useRef(null), x = (0, l.q_F)({
    from: {
      transform: "translate3d(-110%, 0, 0)",
      height: p
    },
    to: {
      transform: "translate3d(0, 0, 0)",
      height: p
    },
    config: {
      mass: 1,
      stiffness: 100,
      damping: 15
    },
    onRest: () => {
      null != f.current && f.current.focus()
    }
  });
  return (0, a.jsx)(i.animated.div, {
    className: d.container,
    style: x,
    children: (0, a.jsxs)("aside", {
      "aria-labelledby": h,
      className: d.content,
      children: [(0, a.jsxs)("div", {
        className: d.headerRow,
        children: [(0, a.jsx)(l.P3F, {
          innerRef: f,
          "aria-label": c.intl.string(c.t.WAI6xu),
          className: d.closeButton,
          onClick: () => {
            t(o.L.USER_DISMISS)
          },
          children: (0, a.jsx)(l.Dio, {
            color: "currentColor"
          })
        }), (0, a.jsx)(l.Heading, {
          id: h,
          variant: "heading-lg/semibold",
          children: n
        })]
      }), null != u && (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        children: u
      }), (0, a.jsx)(l.Ttm, {
        className: d.scroller,
        fade: true,
        children: (0, a.jsx)("div", {
          className: d.scrollerContent,
          children: m
        })
      })]
    })
  })
}