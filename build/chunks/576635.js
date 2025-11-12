/** Chunk was on web.js **/
/** chunk id: 576635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk220082 = require("./220082.js"),
  Chunk44315 = require("./44315.js"),
  Chunk168631 = require("./168631.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  var t, n, f;
  let {
    user: _,
    displayProfile: p,
    pendingThemeColors: h,
    pendingAvatarSrc: m,
    isPreview: g,
    forceUserTheme: E
  } = e, b = (0, o.ZP)(), y = (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme), O = null != m ? m : null == _ ? true : _.getAvatarURL(null == p ? true : p.guildId, 80), v = (0, c.Sl)(d.Ilk.PRIMARY_530).hex, [I, T] = (0, l.Cf)(O, v, false);
  if (!(null == p ? true : p.canEditThemes) && !g) return {
    theme: b,
    primaryColor: null,
    secondaryColor: null
  };
  let S = null == p ? true : p.getPreviewThemeColors(h),
    A = null != (t = null == S ? true : S[0]) ? t : (0, r._i)(I),
    C = null != (n = null == S ? true : S[1]) ? n : (0, r._i)(T),
    N = y || E ? b : null != (f = (0, u.V3)(A)) ? f : b;
  return N === d.BRd.DARK && (0, a.wj)(b) ? N = b : N === d.BRd.DARK && (0, a.ap)(b) && (N = d.BRd.DARKER), {
    theme: N,
    primaryColor: A,
    secondaryColor: C
  }
}