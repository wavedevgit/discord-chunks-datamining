/** Chunk was on 93886 **/
/** chunk id: 562511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A2: () => v,
  S3: () => f
});
var Chunk473749 = require("./473749.js"),
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
    let t = (0, o.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds);
    return (0, a.e7)([c.Z, d.default, s.ZP], () => {
      var t, n;
      if (null === e) returnfalse;
      let r = c.Z.getGuild(e);
      if (true === r || !(0, u.up)(r) || null == r.profile || null === r.profile.tag) returnfalse;
      let a = d.default.getCurrentUser();
      if (true === a || (null == (t = a.primaryGuild) ? true : t.identityGuildId) === r.id && (null == (n = a.primaryGuild) ? true : n.tag) === r.profile.tag) returnfalse;
      let i = s.ZP.getMember(e, a.id);
      return null != i && !i.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, o.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds),
      n = (0, a.e7)([_.Z], () => null === e ? null : _.Z.getGuildLastSeenInfo(e)),
      s = (0, a.e7)([d.default], () => {
        var e;
        return null == (e = d.default.getCurrentUser()) ? true : e.primaryGuild
      }),
      u = (0, a.e7)([c.Z], () => {
        var t, n;
        return null == (n = c.Z.getGuild(e)) || null == (t = n.profile) ? true : t.tag
      });
    if (r.useEffect(() => {
        t && null === n && null != e && null != u && l.Z.dispatch({
          type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
          guildId: e,
          lastSeenInfo: {
            tag: u
          }
        })
      }, [e, u, t, n]), null == u || (null == s ? true : s.identityGuildId) === e && (null == s ? true : s.tag) === u) returnfalse;
    let f = (null == s ? true : s.identityGuildId) === e && (null == s ? true : s.tag) === null,
      v = null === n || (null == n ? true : n.tag) === u;
    return f && !v && t
  }(e) ? t ? "available" : null : "changed"
}

function v(e) {
  return null !== f(e)
}