/** Chunk was on 384 **/
/** chunk id: 383124, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  }), f = (0, o.e7)([u.Z], () => {
    var e, n;
    return null != (n = null == (e = u.Z.getDetectableGame(t)) ? true : e.name) ? n : ""
  }), h = i.useCallback(() => {
    null == l || l(t)
  }, [t, l]), x = i.useMemo(() => m ? null : null == p ? (0, r.jsx)("div", {
    className: d.gameUnknownImage,
    children: (0, r.jsx)(a.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: d.gameImage,
    alt: f,
    src: p
  }), [p, m, f]);
  return (0, r.jsxs)("div", {
    className: s()(d.selectedGame, {
      [d.dimmed]: !n,
      [d.disabled]: g
    }),
    children: [(0, r.jsxs)(a.P3F, {
      "aria-disabled": g,
      tabIndex: g ? false : 0,
      onClick: g ? true : h,
      className: s()(d.gameImageBackground, {
        [d.gameImageLoading]: m,
        [d.disabled]: g
      }),
      children: [n && (0, r.jsx)("div", {
        className: d.checkBackground,
        children: (0, r.jsx)(a.FZ5, {
          checked: n
        })
      }), x]
    }), (0, r.jsx)(a.Text, {
      className: d.gameName,
      variant: "text-xs/medium",
      color: "text-strong",
      children: f
    })]
  })
}