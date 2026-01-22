/** Chunk was on 22477 **/
/** chunk id: 687173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk501785 = require("./501785.js");

function p(e) {
  let {
    markAsDismissed: t,
    heading: n,
    subheading: i,
    children: p,
    height: h,
    className: f,
    contentClassName: x
  } = e, b = (0, c.GV)(), g = l.useRef(null), v = (0, o.zhh)({
    from: {
      transform: "translate3d(-110%, 0, 0)",
      height: h
    },
    to: {
      transform: "translate3d(0, 0, 0)",
      height: h
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
    className: r()(m.kL, f),
    style: v,
    children: (0, a.jsxs)("aside", {
      "aria-labelledby": b,
      className: m.Qs,
      children: [(0, a.jsxs)("div", {
        className: m.U1,
        children: [(0, a.jsx)(o.DUT, {
          innerRef: g,
          "aria-label": u.intl.string(u.t.WAI6xu),
          className: m.b,
          onClick: () => {
            t(d.i.USER_DISMISS)
          },
          children: (0, a.jsx)(o.PGe, {
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
      }), (0, a.jsx)(o.HOs, {
        className: m.XG,
        fade: true,
        children: (0, a.jsx)("div", {
          className: r()(m.gT, x),
          children: p
        })
      })]
    })
  })
}