/** Chunk was on 87557 **/
/** chunk id: 687173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk864605 = require("./864605.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk501785 = require("./501785.js");

function p(e) {
  let {
    markAsDismissed: t,
    heading: n,
    subheading: r,
    children: p,
    height: h,
    className: x,
    contentClassName: g
  } = e, f = (0, c.GV)(), b = l.useRef(null), v = (0, o.zhh)({
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
      null != b.current && b.current.focus()
    }
  });
  return (0, a.jsx)(s.animated.div, {
    className: i()(m.kL, x),
    style: v,
    children: (0, a.jsxs)("aside", {
      "aria-labelledby": f,
      className: m.Qs,
      children: [(0, a.jsxs)("div", {
        className: m.U1,
        children: [(0, a.jsx)(o.DUT, {
          innerRef: b,
          "aria-label": u.intl.string(u.t.WAI6xu),
          className: m.b,
          onClick: () => {
            t(d.i.USER_DISMISS)
          },
          children: (0, a.jsx)(o.PGe, {
            color: "currentColor"
          })
        }), (0, a.jsx)(o.Heading, {
          id: f,
          variant: "heading-lg/semibold",
          children: n
        })]
      }), null != r && (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-subtle",
        children: r
      }), (0, a.jsx)(o.HOs, {
        className: m.XG,
        fade: true,
        children: (0, a.jsx)("div", {
          className: i()(m.gT, g),
          children: p
        })
      })]
    })
  })
}