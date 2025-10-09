/** Chunk was on 64982 **/
/** chunk id: 383124, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk210753 = require("./210753.js"),
  Chunk77498 = require("./77498.js"),
  Chunk512622 = require("./512622.js");

function g(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: l,
    disabled: g
  } = e, {
    isFetching: m,
    coverImageUrl: p
  } = (0, c.$)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), f = (0, o.e7)([d.Z], () => {
    var e, n;
    return null != (n = null == (e = d.Z.getDetectableGame(t)) ? true : e.name) ? n : ""
  }), h = i.useCallback(() => {
    null == l || l(t)
  }, [t, l]), b = i.useMemo(() => m ? null : null == p ? (0, r.jsx)("div", {
    className: u.gameUnknownImage,
    children: (0, r.jsx)(s.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: u.gameImage,
    alt: f,
    src: p
  }), [p, m, f]);
  return (0, r.jsxs)("div", {
    className: a()(u.selectedGame, {
      [u.dimmed]: !n,
      [u.disabled]: g
    }),
    children: [(0, r.jsxs)(s.P3F, {
      "aria-disabled": g,
      tabIndex: g ? false : 0,
      onClick: g ? true : h,
      className: a()(u.gameImageBackground, {
        [u.gameImageLoading]: m,
        [u.disabled]: g
      }),
      children: [n && (0, r.jsx)("div", {
        className: u.checkBackground,
        children: (0, r.jsx)(s.FZ5, {
          checked: n
        })
      }), b]
    }), (0, r.jsx)(s.Text, {
      className: u.gameName,
      variant: "text-xs/medium",
      color: "header-primary",
      children: f
    })]
  })
}