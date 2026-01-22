/** Chunk was on web.js **/
/** chunk id: 4274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => l,
  s: () => c
});
var Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  switch (e) {
    case s.t02.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = a.Ay.canUseIncreasedGuildCap(t) || (null == t ? true : t.isStaff()) ? s.cZu : s.qlD;
      return {
        title: o.intl.formatToPlainString(o.t["ttJ/hj"], {
          quantity: n
        }), description: o.intl.string(o.t.iLyuDO)
      };
    case s.t02.GUILD_AT_CAPACITY:
      return {
        title: o.intl.string(o.t.ZZlox4), description: o.intl.string(o.t.ZUEGFn)
      };
    case s.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: o.intl.string(o.t.kJwpBW), description: o.intl.string(o.t.ZUEGFn)
      };
    case s.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
      return {
        title: o.intl.string(o.t["u/xsK9"]), description: o.intl.string(o.t.SxY4IW)
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case s.t02.TOO_MANY_USER_GUILDS:
      return o.intl.string(o.t.iLyuDO);
    case s.t02.GUILD_AT_CAPACITY:
      return o.intl.string(o.t.M6unNJ);
    case s.t02.INVALID_COUNTRY_CODE:
      return o.intl.string(o.t.sRJGR1);
    case s.t02.INVALID_CANNOT_FRIEND_SELF:
      return o.intl.string(o.t["mY2R+F"]);
    case s.t02.INVITES_DISABLED:
      return o.intl.format(o.t.RXSeLl, {
        articleLink: i.A.getArticleURL(s.MVz.INVITE_DISABLED)
      });
    default:
      return o.intl.string(o.t.dDZRdy)
  }
}