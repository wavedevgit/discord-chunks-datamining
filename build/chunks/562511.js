/** Chunk was on 44022 **/
n.d(t, {
  A2: () => E,
  S3: () => f
});
var i = n(73800),
  r = n(442837),
  l = n(704215),
  o = n(570140),
  s = n(645041),
  a = n(271383),
  u = n(430824),
  c = n(594174),
  d = n(358085),
  h = n(731722),
  g = n(864133),
  p = n(981631);

function f(e) {
  let t = function(e) {
    let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds);
    return (0, r.e7)([u.Z, c.default, a.ZP], () => {
      var t, n;
      if (null === e) return !1;
      let i = u.Z.getGuild(e);
      if (void 0 === i || !(0, h.up)(i) || null == i.profile || null === i.profile.tag) return !1;
      let r = c.default.getCurrentUser();
      if (void 0 === r || (null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === i.id && (null == (n = r.primaryGuild) ? void 0 : n.tag) === i.profile.tag) return !1;
      let l = a.ZP.getMember(e, r.id);
      return null != l && !l.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds),
      n = (0, r.e7)([g.Z], () => null === e ? null : g.Z.getGuildLastSeenInfo(e)),
      a = (0, r.e7)([c.default], () => {
        var e;
        return null == (e = c.default.getCurrentUser()) ? void 0 : e.primaryGuild
      }),
      h = (0, r.e7)([u.Z], () => {
        var t, n;
        return null == (n = u.Z.getGuild(e)) || null == (t = n.profile) ? void 0 : t.tag
      });
    if (i.useEffect(() => {
        t && null === n && null != e && null != h && o.Z.dispatch({
          type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
          guildId: e,
          lastSeenInfo: {
            tag: h
          }
        })
      }, [e, h, t, n]), null == h || (null == a ? void 0 : a.identityGuildId) === e && (null == a ? void 0 : a.tag) === h) return !1;
    let f = (null == a ? void 0 : a.identityGuildId) === e && (null == a ? void 0 : a.tag) === null || (0, d.isDesktop)(),
      E = null === n || (null == n ? void 0 : n.tag) === h;
    return f && !E && t
  }(e) ? t ? "available" : null : "changed"
}

function E(e) {
  return null !== f(e)
}