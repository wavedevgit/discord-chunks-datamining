/** Chunk was on 39048 **/
/** chunk id: 938925, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk276777 = require("./276777.js");

function g(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.nM,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "interactive-text-active",
      className: u.qg,
      children: n
    }), t ? (0, r.jsx)(c.yr3, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
      className: s()(u.aL, u.xp)
    }) : (0, r.jsx)("div", {
      className: s()(u.aL, u.VL)
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
  } = e, [m, p] = i.useState(false), f = n.flatMap(e => e.items.map(e => e.completed)), h = f.filter(e => e).length / f.length, b = (0, c.zhh)({
    width: "".concat(100 * h, "%")
  });
  return (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsxs)(c.DUT, {
      className: u.jr,
      onClick: () => p(e => !e),
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        className: u.TK,
        children: t
      }), (0, r.jsx)(d.A, {
        direction: m ? d.A.Directions.DOWN : d.A.Directions.UP,
        className: u.D
      })]
    }), (0, r.jsx)("div", {
      className: u.ux,
      children: (0, r.jsx)(a.animated.div, {
        className: u.zZ,
        style: b
      })
    }), !m && n.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.cGx, {
          className: u.yF
        }), (0, r.jsx)("div", {
          className: u.p8,
          children: (0, r.jsx)(c.D0$, {
            label: n,
            children: l.map((e, t) => (0, r.jsx)(g, {
              children: e.description,
              checked: e.completed
            }, t))
          })
        })]
      }, t)
    }), null !== l && "" !== l && null !== s && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.cGx, {
        className: u.yF
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.x6,
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