/** Chunk was on 52272 **/
n.d(t, {
  O: () => c,
  l: () => s
});
var r = n(594174),
  i = n(63063),
  o = n(74538),
  a = n(981631),
  l = n(388032);

function s(e) {
  switch (e) {
    case a.evJ.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = o.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
      return {
        title: l.NW.formatToPlainString(l.t["ttJ/ho"], {
          quantity: n
        }), description: l.NW.string(l.t.iLyuDA)
      };
    case a.evJ.GUILD_AT_CAPACITY:
      return {
        title: l.NW.string(l.t.ZZlox8), description: l.NW.string(l.t.ZUEGFh)
      };
    case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: l.NW.string(l.t.kJwpBQ), description: l.NW.string(l.t.ZUEGFh)
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case a.evJ.TOO_MANY_USER_GUILDS:
      return l.NW.string(l.t.iLyuDA);
    case a.evJ.GUILD_AT_CAPACITY:
      return l.NW.string(l.t.M6unND);
    case a.evJ.INVALID_COUNTRY_CODE:
      return l.NW.string(l.t.sRJGR0);
    case a.evJ.INVALID_CANNOT_FRIEND_SELF:
      return l.NW.string(l.t["mY2R+P"]);
    case a.evJ.INVITES_DISABLED:
      return l.NW.format(l.t.RXSeLi, {
        articleLink: i.Z.getArticleURL(a.BhN.INVITE_DISABLED)
      });
    default:
      return l.NW.string(l.t.dDZRd3)
  }
}