/** Chunk was on 77978 **/
n.d(t, {
  A2: () => p,
  S3: () => f
});
var i = n(73800),
  l = n(442837),
  r = n(704215),
  o = n(570140),
  s = n(645041),
  a = n(271383),
  u = n(430824),
  c = n(594174),
  d = n(731722),
  h = n(864133),
  g = n(981631);

function f(e) {
  let t = function(e) {
    let t = (0, s.FT)(r.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : g.lds);
    return (0, l.e7)([u.Z, c.default, a.ZP], () => {
      var t, n;
      if (null === e) return !1;
      let i = u.Z.getGuild(e);
      if (void 0 === i || !(0, d.up)(i) || null == i.profile || null === i.profile.tag) return !1;
      let l = c.default.getCurrentUser();
      if (void 0 === l || (null == (t = l.primaryGuild) ? void 0 : t.identityGuildId) === i.id && (null == (n = l.primaryGuild) ? void 0 : n.tag) === i.profile.tag) return !1;
      let r = a.ZP.getMember(e, l.id);
      return null != r && !r.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, s.FT)(r.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : g.lds),
      n = (0, l.e7)([h.Z], () => null === e ? null : h.Z.getGuildLastSeenInfo(e)),
      a = (0, l.e7)([c.default], () => {
        var e;
        return null == (e = c.default.getCurrentUser()) ? void 0 : e.primaryGuild
      }),
      d = (0, l.e7)([u.Z], () => {
        var t, n;
        return null == (n = u.Z.getGuild(e)) || null == (t = n.profile) ? void 0 : t.tag
      });
    if (i.useEffect(() => {
        t && null === n && null != e && null != d && o.Z.dispatch({
          type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
          guildId: e,
          lastSeenInfo: {
            tag: d
          }
        })
      }, [e, d, t, n]), null == d || (null == a ? void 0 : a.identityGuildId) === e && (null == a ? void 0 : a.tag) === d) return !1;
    let f = (null == a ? void 0 : a.identityGuildId) === e && (null == a ? void 0 : a.tag) === null,
      p = null === n || (null == n ? void 0 : n.tag) === d;
    return f && !p && t
  }(e) ? t ? "available" : null : "changed"
}

function p(e) {
  return null !== f(e)
}