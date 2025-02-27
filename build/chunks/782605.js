/** Chunk was on 72453 **/
n.d(t, {
  O: () => c,
  l: () => s
});
var r = n(594174),
  i = n(63063),
  a = n(74538),
  o = n(981631),
  l = n(388032);

function s(e) {
  switch (e) {
    case o.evJ.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = a.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? o.tHP : o.DZw;
      return {
        title: l.NW.formatToPlainString(l.t["ttJ/ho"], {
          quantity: n
        }), description: l.NW.string(l.t.iLyuDA)
      };
    case o.evJ.GUILD_AT_CAPACITY:
      return {
        title: l.NW.string(l.t.ZZlox8), description: l.NW.string(l.t.ZUEGFh)
      };
    case o.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: l.NW.string(l.t.kJwpBQ), description: l.NW.string(l.t.ZUEGFh)
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case o.evJ.TOO_MANY_USER_GUILDS:
      return l.NW.string(l.t.iLyuDA);
    case o.evJ.GUILD_AT_CAPACITY:
      return l.NW.string(l.t.M6unND);
    case o.evJ.INVALID_COUNTRY_CODE:
      return l.NW.string(l.t.sRJGR0);
    case o.evJ.INVALID_CANNOT_FRIEND_SELF:
      return l.NW.string(l.t["mY2R+P"]);
    case o.evJ.INVITES_DISABLED:
      return l.NW.format(l.t.RXSeLi, {
        articleLink: i.Z.getArticleURL(o.BhN.INVITE_DISABLED)
      });
    default:
      return l.NW.string(l.t.dDZRd3)
  }
}