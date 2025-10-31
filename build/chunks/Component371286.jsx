/** Chunk was on 42340 **/
/** chunk id: 371286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk13941 = require("./13941.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18845 = require("./18845.js");

function u(e) {
  let {
    markAsDismissed: t,
    heading: n,
    subheading: u,
    children: m,
    height: p
  } = e, h = (0, o.Dt)(), x = r.useRef(null), g = (0, i.q_F)({
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
      null != x.current && x.current.focus()
    }
  });
  return (0, a.jsx)(l.animated.div, {
    className: d.container,
    style: g,
    children: (0, a.jsxs)("aside", {
      "aria-labelledby": h,
      className: d.content,
      children: [(0, a.jsxs)("div", {
        className: d.headerRow,
        children: [(0, a.jsx)(i.P3F, {
          innerRef: x,
          "aria-label": c.intl.string(c.t.WAI6xu),
          className: d.closeButton,
          onClick: () => {
            t(s.L.USER_DISMISS)
          },
          children: (0, a.jsx)(i.Dio, {
            color: "currentColor"
          })
        }), (0, a.jsx)(i.Heading, {
          id: h,
          variant: "heading-lg/semibold",
          children: n
        })]
      }), null != u && (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: u
      }), (0, a.jsx)(i.Ttm, {
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