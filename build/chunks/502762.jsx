/** Chunk was on web.js **/
/** chunk id: 502762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk576635 = require("./576635.js"),
  Chunk213053 = require("./213053.js"),
  Chunk652853 = require("./652853.js"),
  Chunk750883 = require("./750883.js");
let f = Object.assign(Chunk73800.forwardRef(function(e, t) {
  let {
    user: n,
    displayProfile: i,
    themeType: o,
    className: f,
    pendingThemeColors: _,
    themeOverride: p,
    children: h,
    forceShowPremium: m = false,
    forceUserTheme: g = false
  } = e, {
    theme: E,
    primaryColor: b,
    secondaryColor: y
  } = (0, l.Z)({
    user: n,
    displayProfile: i,
    pendingThemeColors: _,
    isPreview: m,
    forceUserTheme: g
  }), {
    profileThemeStyle: O,
    profileThemeClassName: v
  } = (0, c.Z)({
    theme: null != p ? p : E,
    themeType: o,
    primaryColor: b,
    secondaryColor: y,
    forceUserTheme: g
  });
  return <div className={a()(d.outer, v, f)} style={O} ref={t}><div className={d.inner}><s.ze6 theme={null != p ? p : E}><u.X themeType={o} theme={null != p ? p : E} primaryColor={b} secondaryColor={y}>{h}</u.X></s.ze6></div></div>
}), {
  Overlay: Chunk73800.forwardRef(function(e, t) {
    let {
      children: n,
      className: i
    } = e;
    return <div ref={t} className={a()(d.overlay, i)}>{n}</div>
  })
})