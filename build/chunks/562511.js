/** Chunk was on 84249 **/
/** chunk id: 562511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => p,
  Z: () => h
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk645041 = require("./645041.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk731722 = require("./731722.js"),
  Chunk864133 = require("./864133.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      shouldShow: n = true
    } = t,
    u = (0, l.FT)(r.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : m.lds),
    p = (0, a.e7)([o.Z, c.default, s.ZP], () => {
      var t, n;
      if (null === e) returnfalse;
      let a = o.Z.getGuild(e);
      if (true === a || !(0, d.up)(a) || null == a.profile || null === a.profile.tag) returnfalse;
      let r = c.default.getCurrentUser();
      if (true === r || (null == (t = r.primaryGuild) ? true : t.identityGuildId) === a.id && (null == (n = r.primaryGuild) ? true : n.tag) === a.profile.tag) returnfalse;
      let i = s.ZP.getMember(e, r.id);
      return null != i && !i.isPending
    }, [e]);
  return (0, i.ZT)(p && n && !u ? [r.z.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], null != e ? e : m.kod)
}

function h(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      shouldShow: l = true
    } = n,
    s = null == e ? true : e.primaryGuild,
    c = null != (t = null == s ? true : s.identityGuildId) ? t : null,
    d = (0, a.e7)([u.Z], () => null === c ? null : u.Z.getGuildLastSeenInfo(c)),
    m = (0, a.e7)([o.Z], () => {
      var e, t;
      return null == (t = o.Z.getGuild(c)) || null == (e = t.profile) ? true : e.tag
    }),
    p = null != m && (null == s ? true : s.identityGuildId) === c && (null == s ? true : s.tag) === null,
    h = null != c && (null == d ? true : d.tag) === m,
    f = null !== c && p && !h;
  return (0, i.bf)(f && l ? r.z.GUILD_TAG_UPDATED_COACHMARK : null, {
    cooldownDurationMs: 864e5
  })
}