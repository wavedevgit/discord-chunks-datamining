/** Chunk was on 60458 **/
/** chunk id: 383124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk210753 = require("./210753.js"),
  Chunk77498 = require("./77498.js"),
  Chunk634070 = require("./634070.js");

function m(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: l,
    disabled: m
  } = e, {
    isFetching: g,
    coverImageUrl: p
  } = (0, c.$)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), h = (0, o.e7)([d.Z], () => {
    var e, n;
    return null != (n = null == (e = d.Z.getDetectableGame(t)) ? true : e.name) ? n : ""
  }), f = i.useCallback(() => {
    null == l || l(t)
  }, [t, l]), b = i.useMemo(() => g ? null : null == p ? (0, r.jsx)("div", {
    className: u.gameUnknownImage,
    children: (0, r.jsx)(s.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: u.gameImage,
    alt: h,
    src: p
  }), [p, g, h]);
  return (0, r.jsxs)("div", {
    className: a()(u.selectedGame, {
      [u.dimmed]: !n,
      [u.disabled]: m
    }),
    children: [(0, r.jsxs)(s.P3F, {
      "aria-disabled": m,
      tabIndex: m ? false : 0,
      onClick: m ? true : f,
      className: a()(u.gameImageBackground, {
        [u.gameImageLoading]: g,
        [u.disabled]: m
      }),
      children: [n && (0, r.jsx)("div", {
        className: u.checkBackground,
        children: (0, r.jsx)(s.XZJ, {
          displayOnly: true,
          value: n
        })
      }), b]
    }), (0, r.jsx)(s.Text, {
      className: u.gameName,
      variant: "text-xs/medium",
      color: "header-primary",
      children: h
    })]
  })
}