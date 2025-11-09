/** Chunk was on web.js **/
/** chunk id: 804307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk98880 = require("./98880.jsx"),
  Chunk387206 = require("./387206.js");

function f(e) {
  let {
    look: t = u.U4.LARGE_BANNER
  } = e, n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
    styleLarge: a,
    styleSmall: f
  } = i.useMemo(() => ({
    styleLarge: {
      width: "".concat(10 + 50 * Math.random(), "%")
    },
    styleSmall: {
      width: "".concat(30 + 60 * Math.random(), "%")
    }
  }), []);
  return (0, r.jsxs)("div", {
    className: o()(d.container, d.loadingAnimation, {
      [d.noAnimation]: n,
      [d.containerBorderRadius]: t !== u.U4.ROW,
      [d.rowContainer]: t === u.U4.ROW
    }),
    children: [(0, r.jsx)("div", {
      className: o()(d.bannerImage, {
        [d.mediumBanner]: t === u.U4.MEDIUM_BANNER,
        [d.largeBanner]: t === u.U4.LARGE_BANNER
      })
    }), (0, r.jsxs)("div", {
      className: o()(d.appDetailsContainer, {
        [d.appDetailsRowContainer]: t === u.U4.ROW
      }),
      children: [(0, r.jsx)("div", {
        className: o()(d.iconPlaceholder, {
          [d.rowIconPlaceholder]: t === u.U4.ROW
        })
      }), (0, r.jsxs)("div", {
        className: d.textContainer,
        children: [(0, r.jsx)("div", {
          className: d.textPlaceholder,
          style: a,
          children: (0, r.jsx)(l.Heading, {
            className: d.hidden,
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: "_"
          })
        }), (0, r.jsx)("div", {
          className: d.textPlaceholder,
          style: f,
          children: (0, r.jsx)(l.Text, {
            className: d.hidden,
            variant: "text-sm/normal",
            color: "text-secondary",
            lineClamp: 1,
            children: "_"
          })
        })]
      }), t === u.U4.ROW && (0, r.jsx)("div", {
        className: d.rowDivider
      })]
    })]
  })
}