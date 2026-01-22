/** Chunk was on web.js **/
/** chunk id: 357186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => p
});
var Chunk379197 = require("./379197.js"),
  Chunk554146 = require("./554146.js"),
  Chunk933681 = require("./933681.js"),
  Chunk155718 = require("./155718.js"),
  Chunk933958 = require("./933958.js"),
  Chunk476370 = require("./476370.js"),
  Chunk457421 = require("./457421.js"),
  Chunk514190 = require("./514190.js"),
  Chunk173834 = require("./173834.js"),
  Chunk188275 = require("./188275.js");

function p(e) {
  switch (e) {
    case i.M.COLLECTIBLES_SHOP_ENTRY_MARKETING:
      var t, n;
      return null != (t = null == (n = c.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)) ? true : n.version) ? t : 0;
    case i.M.GIFTING_PROMOTION_ICON:
    case i.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
    case i.M.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
    case i.M.GIFTING_PROMOTION_REMINDER:
      return (0, d.p)();
    case i.M.ACTIVITIES_VOICE_LAUNCHER_BADGE:
      return (0, l.C)({
        storeState: o.Ay.getState(),
        surface: s.YI.VOICE_LAUNCHER
      });
    case i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK:
      return 0;
    case i.M.COLLECTIBLES_SHOP_WIDE_BANNER:
      return (0, u.N)();
    case i.M.GAME_SHOP_ANNOUNCEMENT_MODAL:
      return f.Lo;
    default:
      return (0, a.dr)(e, {
        andFail: false
      }), 0
  }
}