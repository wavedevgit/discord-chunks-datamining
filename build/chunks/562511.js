/** Chunk was on 26628 **/
/** chunk id: 562511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A2: () => g,
  S3: () => f
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk645041 = require("./645041.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk731722 = require("./731722.js"),
  Chunk864133 = require("./864133.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let t = function(e) {
    let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds);
    return (0, i.e7)([c.Z, u.default, a.ZP], () => {
      var t, n;
      if (null === e) returnfalse;
      let r = c.Z.getGuild(e);
      if (true === r || !(0, d.up)(r) || null == r.profile || null === r.profile.tag) returnfalse;
      let i = u.default.getCurrentUser();
      if (true === i || (null == (t = i.primaryGuild) ? true : t.identityGuildId) === r.id && (null == (n = i.primaryGuild) ? true : n.tag) === r.profile.tag) returnfalse;
      let l = a.ZP.getMember(e, i.id);
      return null != l && !l.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds),
      n = (0, i.e7)([h.Z], () => null === e ? null : h.Z.getGuildLastSeenInfo(e)),
      a = (0, i.e7)([u.default], () => {
        var e;
        return null == (e = u.default.getCurrentUser()) ? true : e.primaryGuild
      }),
      d = (0, i.e7)([c.Z], () => {
        var t, n;
        return null == (n = c.Z.getGuild(e)) || null == (t = n.profile) ? true : t.tag
      });
    if (r.useEffect(() => {
        t && null === n && null != e && null != d && o.Z.dispatch({
          type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
          guildId: e,
          lastSeenInfo: {
            tag: d
          }
        })
      }, [e, d, t, n]), null == d || (null == a ? true : a.identityGuildId) === e && (null == a ? true : a.tag) === d) returnfalse;
    let f = (null == a ? true : a.identityGuildId) === e && (null == a ? true : a.tag) === null,
      g = null === n || (null == n ? true : n.tag) === d;
    return f && !g && t
  }(e) ? t ? "available" : null : "changed"
}

function g(e) {
  return null !== f(e)
}