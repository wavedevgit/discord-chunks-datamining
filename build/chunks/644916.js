/** Chunk was on web.js **/
/** chunk id: 644916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => p
});
var Chunk115434 = require("./115434.js"),
  Chunk704215 = require("./704215.js"),
  Chunk283693 = require("./283693.js"),
  Chunk911969 = require("./911969.js"),
  Chunk317381 = require("./317381.js"),
  Chunk416587 = require("./416587.js"),
  Chunk874703 = require("./874703.js"),
  Chunk65679 = require("./65679.js"),
  Chunk885472 = require("./885472.js"),
  Chunk582113 = require("./582113.js");

function p(e) {
  switch (e) {
    case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
      var t, n;
      return null != (n = null == (t = c.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) ? true : t.version) ? n : 0;
    case i.z.GIFTING_PROMOTION_ICON:
    case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
    case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
    case i.z.GIFTING_PROMOTION_REMINDER:
      return (0, d.m)();
    case i.z.ACTIVITIES_VOICE_LAUNCHER_BADGE:
      return (0, l.O)({
        storeState: s.ZP.getState(),
        surface: a.eR.VOICE_LAUNCHER
      });
    case i.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK:
      return 0;
    case i.z.COLLECTIBLES_SHOP_WIDE_BANNER:
      return (0, u.k)();
    case i.z.GAME_SHOP_ANNOUNCEMENT_MODAL:
      return f.dQ;
    default:
      return (0, o.UT)(e, {
        andFail: false
      }), 0
  }
}