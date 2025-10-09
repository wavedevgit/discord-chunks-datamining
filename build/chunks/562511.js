/** Chunk was on 93886 **/
/** chunk id: 562511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A2: () => h,
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
    let t = (0, o.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds);
    return (0, r.e7)([u.Z, c.default, s.ZP], () => {
      var t, n;
      if (null === e) returnfalse;
      let i = u.Z.getGuild(e);
      if (true === i || !(0, d.up)(i) || null == i.profile || null === i.profile.tag) returnfalse;
      let r = c.default.getCurrentUser();
      if (true === r || (null == (t = r.primaryGuild) ? true : t.identityGuildId) === i.id && (null == (n = r.primaryGuild) ? true : n.tag) === i.profile.tag) returnfalse;
      let l = s.ZP.getMember(e, r.id);
      return null != l && !l.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, o.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds),
      n = (0, r.e7)([p.Z], () => null === e ? null : p.Z.getGuildLastSeenInfo(e)),
      s = (0, r.e7)([c.default], () => {
        var e;
        return null == (e = c.default.getCurrentUser()) ? true : e.primaryGuild
      }),
      d = (0, r.e7)([u.Z], () => {
        var t, n;
        return null == (n = u.Z.getGuild(e)) || null == (t = n.profile) ? true : t.tag
      });
    if (i.useEffect(() => {
        t && null === n && null != e && null != d && a.Z.dispatch({
          type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
          guildId: e,
          lastSeenInfo: {
            tag: d
          }
        })
      }, [e, d, t, n]), null == d || (null == s ? true : s.identityGuildId) === e && (null == s ? true : s.tag) === d) returnfalse;
    let _ = (null == s ? true : s.identityGuildId) === e && (null == s ? true : s.tag) === null,
      h = null === n || (null == n ? true : n.tag) === d;
    return _ && !h && t
  }(e) ? t ? "available" : null : "changed"
}

function h(e) {
  return null !== _(e)
}