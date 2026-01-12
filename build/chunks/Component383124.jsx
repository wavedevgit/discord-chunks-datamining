/** Chunk was on 9536 **/
/** chunk id: 383124, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk210753 = require("./210753.js"),
  Chunk77498 = require("./77498.js"),
  Chunk43837 = require("./43837.js");

function g(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: l,
    disabled: g
  } = e, {
    isFetching: f,
    coverImageUrl: m
  } = (0, c.$)(t, {
    coverImageSize: 256
  }), b = (0, o.e7)([d.Z], () => {
    var e, n;
    return null != (n = null == (e = d.Z.getDetectableGame(t)) ? true : e.name) ? n : ""
  }), p = i.useCallback(() => {
    null == l || l(t)
  }, [t, l]), h = i.useMemo(() => f ? null : null == m ? (0, r.jsx)("div", {
    className: u.gameUnknownImage,
    children: (0, r.jsx)(s.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: u.gameImage,
    alt: b,
    src: m
  }), [m, f, b]);
  return (0, r.jsxs)("div", {
    className: a()(u.selectedGame, {
      [u.dimmed]: !n,
      [u.disabled]: g
    }),
    children: [(0, r.jsxs)(s.P3F, {
      "aria-disabled": g,
      tabIndex: g ? false : 0,
      onClick: g ? true : p,
      className: a()(u.gameImageBackground, {
        [u.gameImageLoading]: f,
        [u.disabled]: g
      }),
      children: [n && (0, r.jsx)("div", {
        className: u.checkBackground,
        children: (0, r.jsx)(s.FZ5, {
          checked: n
        })
      }), h]
    }), (0, r.jsx)(s.Text, {
      className: u.gameName,
      variant: "text-xs/medium",
      color: "text-strong",
      children: b
    })]
  })
}