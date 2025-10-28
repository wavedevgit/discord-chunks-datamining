/** Chunk was on 93886 **/
/** chunk id: 562511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A2: () => v,
  S3: () => _
});
var Chunk647438 = require("./647438.js"),
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

function _(e) {
  let t = function(e) {
    let t = (0, o.FT)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds);
    return (0, i.e7)([c.Z, d.default, s.ZP], () => {
      var t, n;
      if (null === e) returnfalse;
      let r = c.Z.getGuild(e);
      if (true === r || !(0, u.up)(r) || null == r.profile || null === r.profile.tag) returnfalse;
      let i = d.default.getCurrentUser();
      if (true === i || (null == (t = i.primaryGuild) ? true : t.identityGuildId) === r.id && (null == (n = i.primaryGuild) ? true : n.tag) === r.profile.tag) returnfalse;
      let a = s.ZP.getMember(e, i.id);
      return null != a && !a.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, o.FT)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds),
      n = (0, i.e7)([p.Z], () => null === e ? null : p.Z.getGuildLastSeenInfo(e)),
      s = (0, i.e7)([d.default], () => {
        var e;
        return null == (e = d.default.getCurrentUser()) ? true : e.primaryGuild
      }),
      u = (0, i.e7)([c.Z], () => {
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
    let _ = (null == s ? true : s.identityGuildId) === e && (null == s ? true : s.tag) === null,
      v = null === n || (null == n ? true : n.tag) === u;
    return _ && !v && t
  }(e) ? t ? "available" : null : "changed"
}

function v(e) {
  return null !== _(e)
}