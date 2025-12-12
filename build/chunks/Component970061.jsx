/** Chunk was on 384 **/
/** chunk id: 970061, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk992981 = require("./992981.js");

function g(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.row,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "interactive-text-active",
      className: d.rowText,
      children: n
    }), t ? (0, r.jsx)(c.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
      className: s()(d.rowIcon, d.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: s()(d.rowIcon, d.rowIconEmpty)
    })]
  })
}

function m(e) {
  let {
    title: t,
    children: n,
    buttonLabel: l,
    buttonCallback: s,
    disabled: o
  } = e, [m, p] = i.useState(false), f = n.flatMap(e => e.items.map(e => e.completed)), h = f.filter(e => e).length / f.length, x = (0, c.q_F)({
    width: "".concat(100 * h, "%")
  });
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)(c.P3F, {
      className: d.headerBar,
      onClick: () => p(e => !e),
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        className: d.headerText,
        children: t
      }), (0, r.jsx)(u.Z, {
        direction: m ? u.Z.Directions.DOWN : u.Z.Directions.UP,
        className: d.headerCaret
      })]
    }), (0, r.jsx)("div", {
      className: d.progressBarOuter,
      children: (0, r.jsx)(a.animated.div, {
        className: d.progressBarInner,
        style: x
      })
    }), !m && n.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.izJ, {
          className: d.divider
        }), (0, r.jsx)("div", {
          className: d.categoryTitle,
          children: (0, r.jsx)(c.gNt, {
            label: n,
            children: l.map((e, t) => (0, r.jsx)(g, {
              children: e.description,
              checked: e.completed
            }, t))
          })
        })]
      }, t)
    }), null !== l && "" !== l && null !== s && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.izJ, {
        className: d.divider
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: d.button,
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: l,
          onClick: s,
          disabled: 1 !== h || o
        })
      })]
    })]
  })
}