/** Chunk was on web.js **/
/** chunk id: 576635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk900089 = require("./900089.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk220082 = require("./220082.js"),
  Chunk168631 = require("./168631.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  var t, n, f;
  let {
    user: p,
    displayProfile: _,
    pendingThemeColors: m,
    pendingAvatarSrc: h,
    isPreview: g,
    forceUserTheme: E
  } = e, b = (0, s.ZP)(), y = (0, i.e7)([l.Z], () => l.Z.syncProfileThemeWithUserTheme), O = null != h ? h : null == p ? true : p.getAvatarURL(null == _ ? true : _.guildId, 80), v = (0, o.x3)("PRIMARY_530", {
    saturation: 1
  }), [S, I] = (0, c.Cf)(O, v, false);
  if (!(null == _ ? true : _.canEditThemes) && !g) return {
    theme: b,
    primaryColor: null,
    secondaryColor: null
  };
  let T = null == _ ? true : _.getPreviewThemeColors(m),
    C = null != (t = null == T ? true : T[0]) ? t : (0, r._i)(S),
    A = null != (n = null == T ? true : T[1]) ? n : (0, r._i)(I),
    N = y || E ? b : null != (f = (0, u.V3)(C)) ? f : b;
  return N === d.BRd.DARK && (0, a.wj)(b) ? N = b : N === d.BRd.DARK && (0, a.ap)(b) && (N = d.BRd.DARKER), {
    theme: N,
    primaryColor: C,
    secondaryColor: A
  }
}