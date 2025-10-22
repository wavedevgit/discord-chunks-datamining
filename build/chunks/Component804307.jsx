/** Chunk was on 35755 **/
/** chunk id: 804307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk98880 = require("./98880.jsx"),
  Chunk387206 = require("./387206.js");

function p(e) {
  let {
    look: t = u.U4.LARGE_BANNER
  } = e, n = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), {
    styleLarge: r,
    styleSmall: p
  } = l.useMemo(() => ({
    styleLarge: {
      width: "".concat(10 + 50 * Math.random(), "%")
    },
    styleSmall: {
      width: "".concat(30 + 60 * Math.random(), "%")
    }
  }), []);
  return (0, i.jsxs)("div", {
    className: a()(d.container, d.loadingAnimation, {
      [d.noAnimation]: n,
      [d.containerBorderRadius]: t !== u.U4.ROW,
      [d.rowContainer]: t === u.U4.ROW
    }),
    children: [(0, i.jsx)("div", {
      className: a()(d.bannerImage, {
        [d.mediumBanner]: t === u.U4.MEDIUM_BANNER,
        [d.largeBanner]: t === u.U4.LARGE_BANNER
      })
    }), (0, i.jsxs)("div", {
      className: a()(d.appDetailsContainer, {
        [d.appDetailsRowContainer]: t === u.U4.ROW
      }),
      children: [(0, i.jsx)("div", {
        className: a()(d.iconPlaceholder, {
          [d.rowIconPlaceholder]: t === u.U4.ROW
        })
      }), (0, i.jsxs)("div", {
        className: d.textContainer,
        children: [(0, i.jsx)("div", {
          className: d.textPlaceholder,
          style: r,
          children: (0, i.jsx)(s.Heading, {
            className: d.hidden,
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: "_"
          })
        }), (0, i.jsx)("div", {
          className: d.textPlaceholder,
          style: p,
          children: (0, i.jsx)(s.Text, {
            className: d.hidden,
            variant: "text-sm/normal",
            color: "text-secondary",
            lineClamp: 1,
            children: "_"
          })
        })]
      }), t === u.U4.ROW && (0, i.jsx)("div", {
        className: d.rowDivider
      })]
    })]
  })
}