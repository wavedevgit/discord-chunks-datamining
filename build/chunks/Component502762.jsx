/** Chunk was on web.js **/
/** chunk id: 502762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk576635 = require("./576635.js"),
  Chunk213053 = require("./213053.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk639701 = require("./639701.js");
let f = Object.assign(Chunk473749.forwardRef(function(e, t) {
  let {
    user: n,
    displayProfile: i,
    themeType: o,
    className: f,
    pendingThemeColors: p,
    themeOverride: _,
    children: m,
    forceShowPremium: h = false,
    forceUserTheme: g = false
  } = e, {
    theme: E,
    primaryColor: b,
    secondaryColor: y
  } = (0, l.Z)({
    user: n,
    displayProfile: i,
    pendingThemeColors: p,
    isPreview: h,
    forceUserTheme: g
  }), {
    profileThemeStyle: O,
    profileThemeClassName: v
  } = (0, c.Z)({
    theme: null != _ ? _ : E,
    themeType: o,
    primaryColor: b,
    secondaryColor: y,
    forceUserTheme: g
  });
  return (0, r.jsx)("div", {
    className: a()(d.outer, v, f),
    style: O,
    ref: t,
    children: (0, r.jsx)("div", {
      className: d.inner,
      children: (0, r.jsx)(s.ze6, {
        theme: null != _ ? _ : E,
        children: (0, r.jsx)(u.X, {
          themeType: o,
          theme: null != _ ? _ : E,
          primaryColor: b,
          secondaryColor: y,
          userId: n.id,
          children: m
        })
      })
    })
  })
}), {
  Overlay: Chunk473749.forwardRef(function(e, t) {
    let {
      children: n,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      ref: t,
      className: a()(d.overlay, i),
      children: n
    })
  })
})