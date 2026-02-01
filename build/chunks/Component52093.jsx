/** Chunk was on 90228 **/
/** chunk id: 52093, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => d,
  L5: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js");
require("./714510.js"), require("./92246.js"), require("./985018.jsx");
var Chunk718493 = require("./718493.js");

function o(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: l
  } = e;
  return (0, a.jsxs)("li", {
    className: r()(s.gY, {
      [s.HP]: n
    }, {
      [s.h4]: l
    }),
    children: [(0, a.jsxs)("div", {
      className: s.cJ,
      children: [(0, a.jsx)("div", {
        className: s.$P,
        children: n && (0, a.jsx)(i.rOg, {
          className: s.ap,
          color: i.LU0.colors.WHITE
        })
      }), l && (0, a.jsx)("div", {
        className: s.UK
      })]
    }), (0, a.jsx)("div", {
      className: s.M7,
      children: t
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(i.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
let d = function(e) {
  let {
    children: t,
    heading: n,
    steps: l
  } = e;
  return (0, a.jsxs)("div", {
    className: s.iE,
    children: [(0, a.jsx)("div", {
      className: s.Mj,
      children: (0, a.jsx)(i.Heading, {
        className: s.R_,
        color: "text-strong",
        variant: "text-xs/semibold",
        children: n
      })
    }), (0, a.jsx)("div", {
      className: s.lp,
      children: (0, a.jsx)("ul", {
        children: l.map((e, t) => (0, a.jsx)(o, {
          isComplete: e.isComplete,
          hasNextStep: t < l.length - 1,
          children: e.renderContent()
        }, t))
      })
    }), t]
  })
}