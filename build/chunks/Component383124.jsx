/** Chunk was on 29679 **/
/** chunk id: 383124, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk210753 = require("./210753.js"),
  Chunk77498 = require("./77498.js"),
  Chunk223947 = require("./223947.js");

function g(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: l,
    disabled: g
  } = e, {
    isFetching: p,
    coverImageUrl: f
  } = (0, d.$)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), h = (0, c.e7)([u.Z], () => {
    var e, n;
    return null != (n = null == (e = u.Z.getDetectableGame(t)) ? true : e.name) ? n : ""
  }), b = i.useCallback(() => {
    null == l || l(t)
  }, [t, l]), x = i.useMemo(() => p ? null : null == f ? (0, r.jsx)("div", {
    className: m.gameUnknownImage,
    children: (0, r.jsx)(o.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: m.gameImage,
    alt: h,
    src: f
  }), [f, p, h]);
  return (0, r.jsxs)("div", {
    className: s()(m.selectedGame, {
      [m.dimmed]: !n,
      [m.disabled]: g
    }),
    children: [(0, r.jsxs)(o.P3F, {
      "aria-disabled": g,
      tabIndex: g ? false : 0,
      onClick: g ? true : b,
      className: s()(m.gameImageBackground, {
        [m.gameImageLoading]: p,
        [m.disabled]: g
      }),
      children: [n && (0, r.jsx)("div", {
        className: m.checkBackground,
        children: (0, r.jsx)(a.$q, {
          displayOnly: true,
          value: n
        })
      }), x]
    }), (0, r.jsx)(o.Text, {
      className: m.gameName,
      variant: "text-xs/medium",
      color: "header-primary",
      children: h
    })]
  })
}