/** Chunk was on 60458 **/
/** chunk id: 970061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk267895 = require("./267895.js");

function m(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.row,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: u.rowText,
      children: n
    }), t ? (0, r.jsx)(c.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(u.rowIcon, u.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: a()(u.rowIcon, u.rowIconEmpty)
    })]
  })
}

function g(e) {
  let {
    title: t,
    children: n,
    buttonLabel: l,
    buttonCallback: a,
    disabled: o
  } = e, [g, p] = i.useState(false), h = n.flatMap(e => e.items.map(e => e.completed)), f = h.filter(e => e).length / h.length, b = (0, c.q_F)({
    width: "".concat(100 * f, "%")
  });
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsxs)(c.P3F, {
      className: u.headerBar,
      onClick: () => p(e => !e),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-md/semibold",
        className: u.headerText,
        children: t
      }), (0, r.jsx)(d.Z, {
        direction: g ? d.Z.Directions.DOWN : d.Z.Directions.UP,
        className: u.headerCaret
      })]
    }), (0, r.jsx)("div", {
      className: u.progressBarOuter,
      children: (0, r.jsx)(s.animated.div, {
        className: u.progressBarInner,
        style: b
      })
    }), !g && n.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.$i$, {
          className: u.divider
        }), (0, r.jsx)(c.vwX, {
          className: u.categoryTitle,
          children: n
        }), l.map((e, t) => (0, r.jsx)(m, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), null !== l && "" !== l && null !== a && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.$i$, {
        className: u.divider
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.button,
        children: (0, r.jsx)(c.zxk, {
          variant: "primary",
          size: "sm",
          text: l,
          onClick: a,
          disabled: 1 !== f || o
        })
      })]
    })]
  })
}