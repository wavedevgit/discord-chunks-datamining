/** Chunk was on 26434 **/
/** chunk id: 782605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => c,
  l: () => s
});
var Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  switch (e) {
    case o.evJ.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = l.ZP.canUseIncreasedGuildCap(t) || (null == t ? true : t.isStaff()) ? o.tHP : o.DZw;
      return {
        title: a.intl.formatToPlainString(a.t["ttJ/ho"], {
          quantity: n
        }), description: a.intl.string(a.t.iLyuDA)
      };
    case o.evJ.GUILD_AT_CAPACITY:
      return {
        title: a.intl.string(a.t.ZZlox8), description: a.intl.string(a.t.ZUEGFh)
      };
    case o.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: a.intl.string(a.t.kJwpBQ), description: a.intl.string(a.t.ZUEGFh)
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case o.evJ.TOO_MANY_USER_GUILDS:
      return a.intl.string(a.t.iLyuDA);
    case o.evJ.GUILD_AT_CAPACITY:
      return a.intl.string(a.t.M6unND);
    case o.evJ.INVALID_COUNTRY_CODE:
      return a.intl.string(a.t.sRJGR0);
    case o.evJ.INVALID_CANNOT_FRIEND_SELF:
      return a.intl.string(a.t["mY2R+P"]);
    case o.evJ.INVITES_DISABLED:
      return a.intl.format(a.t.RXSeLi, {
        articleLink: i.Z.getArticleURL(o.BhN.INVITE_DISABLED)
      });
    default:
      return a.intl.string(a.t.dDZRd3)
  }
}