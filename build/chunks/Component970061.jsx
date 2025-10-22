/** Chunk was on 29679 **/
/** chunk id: 970061, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk595187 = require("./595187.js");

function g(e) {
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

function m(e) {
  let {
    title: t,
    children: n,
    buttonLabel: l,
    buttonCallback: a,
    disabled: o
  } = e, [m, p] = i.useState(false), f = n.flatMap(e => e.items.map(e => e.completed)), h = f.filter(e => e).length / f.length, b = (0, c.q_F)({
    width: "".concat(100 * h, "%")
  });
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsxs)(c.P3F, {
      className: u.headerBar,
      onClick: () => p(e => !e),
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        className: u.headerText,
        children: t
      }), (0, r.jsx)(d.Z, {
        direction: m ? d.Z.Directions.DOWN : d.Z.Directions.UP,
        className: u.headerCaret
      })]
    }), (0, r.jsx)("div", {
      className: u.progressBarOuter,
      children: (0, r.jsx)(s.animated.div, {
        className: u.progressBarInner,
        style: b
      })
    }), !m && n.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.izJ, {
          className: u.divider
        }), (0, r.jsx)("div", {
          className: u.categoryTitle,
          children: (0, r.jsx)(c.gNt, {
            label: n,
            children: l.map((e, t) => (0, r.jsx)(g, {
              children: e.description,
              checked: e.completed
            }, t))
          })
        })]
      }, t)
    }), null !== l && "" !== l && null !== a && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.izJ, {
        className: u.divider
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.button,
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: l,
          onClick: a,
          disabled: 1 !== h || o
        })
      })]
    })]
  })
}