/** Chunk was on 66866 **/
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
    case a.evJ.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = l.ZP.canUseIncreasedGuildCap(t) || (null == t ? true : t.isStaff()) ? a.tHP : a.DZw;
      return {
        title: o.intl.formatToPlainString(o.t["ttJ/ho"], {
          quantity: n
        }), description: o.intl.string(o.t.iLyuDA)
      };
    case a.evJ.GUILD_AT_CAPACITY:
      return {
        title: o.intl.string(o.t.ZZlox8), description: o.intl.string(o.t.ZUEGFh)
      };
    case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: o.intl.string(o.t.kJwpBQ), description: o.intl.string(o.t.ZUEGFh)
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case a.evJ.TOO_MANY_USER_GUILDS:
      return o.intl.string(o.t.iLyuDA);
    case a.evJ.GUILD_AT_CAPACITY:
      return o.intl.string(o.t.M6unND);
    case a.evJ.INVALID_COUNTRY_CODE:
      return o.intl.string(o.t.sRJGR0);
    case a.evJ.INVALID_CANNOT_FRIEND_SELF:
      return o.intl.string(o.t["mY2R+P"]);
    case a.evJ.INVITES_DISABLED:
      return o.intl.format(o.t.RXSeLi, {
        articleLink: i.Z.getArticleURL(a.BhN.INVITE_DISABLED)
      });
    default:
      return o.intl.string(o.t.dDZRd3)
  }
}