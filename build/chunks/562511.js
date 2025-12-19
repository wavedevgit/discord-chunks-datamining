/** Chunk was on 6043 **/
/** chunk id: 562511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A2: () => h,
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
    let t = (0, s.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds);
    return (0, r.e7)([c.Z, d.default, o.ZP], () => {
      var t, n;
      if (null === e) returnfalse;
      let a = c.Z.getGuild(e);
      if (true === a || !(0, u.up)(a) || null == a.profile || null === a.profile.tag) returnfalse;
      let r = d.default.getCurrentUser();
      if (true === r || (null == (t = r.primaryGuild) ? true : t.identityGuildId) === a.id && (null == (n = r.primaryGuild) ? true : n.tag) === a.profile.tag) returnfalse;
      let i = o.ZP.getMember(e, r.id);
      return null != i && !i.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, s.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds),
      n = (0, r.e7)([m.Z], () => null === e ? null : m.Z.getGuildLastSeenInfo(e)),
      o = (0, r.e7)([d.default], () => {
        var e;
        return null == (e = d.default.getCurrentUser()) ? true : e.primaryGuild
      }),
      u = (0, r.e7)([c.Z], () => {
        var t, n;
        return null == (n = c.Z.getGuild(e)) || null == (t = n.profile) ? true : t.tag
      });
    if (a.useEffect(() => {
        t && null === n && null != e && null != u && l.Z.dispatch({
          type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
          guildId: e,
          lastSeenInfo: {
            tag: u
          }
        })
      }, [e, u, t, n]), null == u || (null == o ? true : o.identityGuildId) === e && (null == o ? true : o.tag) === u) returnfalse;
    let f = (null == o ? true : o.identityGuildId) === e && (null == o ? true : o.tag) === null,
      h = null === n || (null == n ? true : n.tag) === u;
    return f && !h && t
  }(e) ? t ? "available" : null : "changed"
}

function h(e) {
  return null !== f(e)
}