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
  } = e, y = (0, o.Ay)(), b = (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme), O = null != m ? m : null == p ? true : p.getAvatarURL(null == _ ? true : _.guildId, 80), v = (0, a.nt)("PRIMARY_530", {
    saturation: 1
  }), [A, I] = (0, c.rh)(O, v, false);
  if (!(null == _ ? true : _.canEditThemes) && !g) return {
    theme: y,
    primaryColor: null,
    secondaryColor: null
  };
  let S = null == _ ? true : _.getPreviewThemeColors(h),
    T = null != (t = null == S ? true : S[0]) ? t : (0, r.LX)(A),
    C = null != (n = null == S ? true : S[1]) ? n : (0, r.LX)(I),
    N = b || E ? y : null != (f = (0, u.tM)(T)) ? f : y;
  return N === d.NJ8.DARK && (0, s.Mw)(y) ? N = y : N === d.NJ8.DARK && (0, s.qB)(y) && (N = d.NJ8.DARKER), {
    theme: N,
    primaryColor: T,
    secondaryColor: C
  }
}