/** Chunk was on 64946 **/
n.d(t, {
  A2: () => f,
  S3: () => g
});
var i = n(73800),
  r = n(442837),
  l = n(704215),
  o = n(570140),
  s = n(645041),
  a = n(271383),
  u = n(430824),
  c = n(594174),
  d = n(731722),
  h = n(864133),
  p = n(981631);

function g(e) {
  let t = function(e) {
    let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds);
    return (0, r.e7)([u.Z, c.default, a.ZP], () => {
      var t, n;
      if (null === e) return !1;
      let i = u.Z.getGuild(e);
      if (void 0 === i || !(0, d.up)(i) || null == i.profile || null === i.profile.tag) return !1;
      let r = c.default.getCurrentUser();
      if (void 0 === r || (null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === i.id && (null == (n = r.primaryGuild) ? void 0 : n.tag) === i.profile.tag) return !1;
      let l = a.ZP.getMember(e, r.id);
      return null != l && !l.isPending
    }, [e]) && !t
  }(e);
  return ! function(e) {
    let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds),
      n = (0, r.e7)([h.Z], () => null === e ? null : h.Z.getGuildLastSeenInfo(e)),
      a = (0, r.e7)([c.default], () => {
        var e;
        return null == (e = c.default.getCurrentUser()) ? void 0 : e.primaryGuild
      }),
      d = (0, r.e7)([u.Z], () => {
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
    let g = (null == a ? void 0 : a.identityGuildId) === e && (null == a ? void 0 : a.tag) === null,
      f = null === n || (null == n ? void 0 : n.tag) === d;
    return g && !f && t
  }(e) ? t ? "available" : null : "changed"
}

function f(e) {
  return null !== g(e)
}