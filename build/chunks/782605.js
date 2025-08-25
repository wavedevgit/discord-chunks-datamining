/** Chunk was on web.js **/
/** chunk id: 782605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c,
  l: () => l
});
var Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  switch (e) {
    case a.evJ.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = o.ZP.canUseIncreasedGuildCap(t) || (null == t ? true : t.isStaff()) ? a.tHP : a.DZw;
      return {
        title: s.intl.formatToPlainString(s.t["ttJ/ho"], {
          quantity: n
        }), description: s.intl.string(s.t.iLyuDA)
      };
    case a.evJ.GUILD_AT_CAPACITY:
      return {
        title: s.intl.string(s.t.ZZlox8), description: s.intl.string(s.t.ZUEGFh)
      };
    case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: s.intl.string(s.t.kJwpBQ), description: s.intl.string(s.t.ZUEGFh)
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case a.evJ.TOO_MANY_USER_GUILDS:
      return s.intl.string(s.t.iLyuDA);
    case a.evJ.GUILD_AT_CAPACITY:
      return s.intl.string(s.t.M6unND);
    case a.evJ.INVALID_COUNTRY_CODE:
      return s.intl.string(s.t.sRJGR0);
    case a.evJ.INVALID_CANNOT_FRIEND_SELF:
      return s.intl.string(s.t["mY2R+P"]);
    case a.evJ.INVITES_DISABLED:
      return s.intl.format(s.t.RXSeLi, {
        articleLink: i.Z.getArticleURL(a.BhN.INVITE_DISABLED)
      });
    default:
      return s.intl.string(s.t.dDZRd3)
  }
}