/** Chunk was on 87557 **/
/** chunk id: 587084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => h,
  r: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk45780 = require("./45780.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk685073 = require("./685073.js"),
  Chunk334165 = require("./334165.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      shouldShow: n = true
    } = t,
    u = (0, i.G$)(l.V.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : m.dJq),
    p = (0, a.bG)([o.A, c.default, s.Ay], () => {
      var t, n;
      if (null === e) returnfalse;
      let a = o.A.getGuild(e);
      if (true === a || !(0, d.Rg)(a) || null == a.profile || null === a.profile.tag) returnfalse;
      let l = c.default.getCurrentUser();
      if (true === l || (null == (t = l.primaryGuild) ? true : t.identityGuildId) === a.id && (null == (n = l.primaryGuild) ? true : n.tag) === a.profile.tag) returnfalse;
      let r = s.Ay.getMember(e, l.id);
      return null != r && !r.isPending
    }, [e]);
  return (0, r.ww)(p && n && !u ? [l.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], null != e ? e : m.eGj)
}

function h(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      shouldShow: i = true
    } = n,
    s = null == e ? true : e.primaryGuild,
    c = null != (t = null == s ? true : s.identityGuildId) ? t : null,
    d = (0, a.bG)([u.A], () => null === c ? null : u.A.getGuildLastSeenInfo(c)),
    m = (0, a.bG)([o.A], () => {
      var e, t;
      return null == (t = o.A.getGuild(c)) || null == (e = t.profile) ? true : e.tag
    }),
    p = null != m && (null == s ? true : s.identityGuildId) === c && (null == s ? true : s.tag) === null,
    h = null != c && (null == d ? true : d.tag) === m,
    x = null !== c && p && !h;
  return (0, r.Wl)(x && i ? l.M.GUILD_TAG_UPDATED_COACHMARK : null, {
    cooldownDurationMs: 864e5
  })
}