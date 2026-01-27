/** Chunk was on 52081 **/
/** chunk id: 4274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => s,
  s: () => c
});
var Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  switch (e) {
    case o.t02.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = i.Ay.canUseIncreasedGuildCap(t) || (null == t ? true : t.isStaff()) ? o.cZu : o.qlD;
      return {
        title: a.intl.formatToPlainString(a.t["ttJ/hj"], {
          quantity: n
        }), description: a.intl.string(a.t.iLyuDO)
      };
    case o.t02.GUILD_AT_CAPACITY:
      return {
        title: a.intl.string(a.t.ZZlox4), description: a.intl.string(a.t.ZUEGFn)
      };
    case o.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: a.intl.string(a.t.kJwpBW), description: a.intl.string(a.t.ZUEGFn)
      };
    case o.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
      return {
        title: a.intl.string(a.t["u/xsK9"]), description: a.intl.string(a.t.SxY4IW)
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case o.t02.TOO_MANY_USER_GUILDS:
      return a.intl.string(a.t.iLyuDO);
    case o.t02.GUILD_AT_CAPACITY:
      return a.intl.string(a.t.M6unNJ);
    case o.t02.INVALID_COUNTRY_CODE:
      return a.intl.string(a.t.sRJGR1);
    case o.t02.INVALID_CANNOT_FRIEND_SELF:
      return a.intl.string(a.t["mY2R+F"]);
    case o.t02.INVITES_DISABLED:
      return a.intl.format(a.t.RXSeLl, {
        articleLink: l.A.getArticleURL(o.MVz.INVITE_DISABLED)
      });
    default:
      return a.intl.string(a.t.dDZRdy)
  }
}