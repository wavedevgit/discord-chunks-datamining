/** Chunk was on web.js **/
/** chunk id: 101928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk374994 = require("./374994.js"),
  Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk654107 = require("./654107.js"),
  Chunk543699 = require("./543699.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  var t, n, f;
  let {
    user: p,
    displayProfile: _,
    pendingThemeColors: h,
    pendingAvatarSrc: m,
    isPreview: g,
    forceUserTheme: E
  } = e, b = (0, o.Ay)(), y = (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme), O = null != m ? m : null == p ? true : p.getAvatarURL(null == _ ? true : _.guildId, 80), A = (0, a.nt)("PRIMARY_530", {
    saturation: 1
  }), [v, S] = (0, c.rh)(O, A, false);
  if (!(null == _ ? true : _.canEditThemes) && !g) return {
    theme: b,
    primaryColor: null,
    secondaryColor: null
  };
  let I = null == _ ? true : _.getPreviewThemeColors(h),
    T = null != (t = null == I ? true : I[0]) ? t : (0, r.LX)(v),
    C = null != (n = null == I ? true : I[1]) ? n : (0, r.LX)(S),
    N = y || E ? b : null != (f = (0, u.tM)(T)) ? f : b;
  return N === d.NJ8.DARK && (0, s.Mw)(b) ? N = b : N === d.NJ8.DARK && (0, s.qB)(b) && (N = d.NJ8.DARKER), {
    theme: N,
    primaryColor: T,
    secondaryColor: C
  }
}