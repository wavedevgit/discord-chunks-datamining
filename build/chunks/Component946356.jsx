/** Chunk was on web.js **/
/** chunk id: 946356, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk101928 = require("./101928.js"),
  Chunk195898 = require("./195898.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk436466 = require("./436466.js");
let f = Object.assign(Chunk64700.forwardRef(function(e, t) {
  let {
    user: n,
    displayProfile: i,
    themeType: a,
    className: f,
    pendingThemeColors: p,
    themeOverride: _,
    children: h,
    forceShowPremium: m = false,
    forceUserTheme: g = false
  } = e, {
    theme: E,
    primaryColor: y,
    secondaryColor: b
  } = (0, l.A)({
    user: n,
    displayProfile: i,
    pendingThemeColors: p,
    isPreview: m,
    forceUserTheme: g
  }), {
    profileThemeStyle: O,
    profileThemeClassName: v
  } = (0, c.A)({
    theme: null != _ ? _ : E,
    themeType: a,
    primaryColor: y,
    secondaryColor: b,
    forceUserTheme: g
  });
  return (0, r.jsx)("div", {
    className: s()(d.A7, v, f),
    style: O,
    ref: t,
    children: (0, r.jsx)("div", {
      className: d.vW,
      children: (0, r.jsx)(o.wXn, {
        theme: null != _ ? _ : E,
        children: (0, r.jsx)(u.U, {
          themeType: a,
          theme: null != _ ? _ : E,
          primaryColor: y,
          secondaryColor: b,
          userId: n.id,
          children: h
        })
      })
    })
  })
}), {
  Overlay: Chunk64700.forwardRef(function(e, t) {
    let {
      children: n,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      ref: t,
      className: s()(d.Lw, i),
      children: n
    })
  })
})