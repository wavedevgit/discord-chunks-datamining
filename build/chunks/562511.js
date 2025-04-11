/** Chunk was on 69313 **/
n.d(t, {
  A2: () => f,
  S3: () => p
});
var i = n(192379),
  r = n(442837),
  l = n(704215),
  o = n(645041),
  s = n(314852),
  a = n(65361),
  c = n(271383),
  u = n(430824),
  d = n(594174),
  h = n(731722),
  E = n(864133),
  g = n(981631);

function p(e) {
  let {
    fetchGuildProfile: t,
    fetchStatus: n,
    guildProfile: p
  } = (0, a.u)(e), f = function(e) {
    let t = (0, o.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : g.lds);
    return (0, r.e7)([u.Z, d.default, c.ZP], () => {
      var t;
      if (null === e) return !1;
      let n = u.Z.getGuild(e);
      if (void 0 === n || !(0, h.u)(n) || null == n.profile) return !1;
      let i = d.default.getCurrentUser();
      if (void 0 === i || (null == (t = i.primaryGuild) ? void 0 : t.identityGuildId) === n.id) return !1;
      let r = c.ZP.getMember(e, i.id);
      return null != r && !r.isPending
    }, [e]) && !t
  }(e), _ = function(e, t) {
    let n = (0, r.e7)([E.Z], () => null === e ? null : E.Z.getGuildLastSeenInfo(e)),
      i = (0, r.e7)([d.default], () => {
        var e;
        return null == (e = d.default.getCurrentUser()) ? void 0 : e.primaryGuild
      });
    if (null === t || null === t.tag) return !1;
    let l = (null == i ? void 0 : i.identityGuildId) === e && (null == i ? void 0 : i.tag) === null,
      o = null !== n && n.tag === t.tag;
    return l && !o
  }(e, p);
  return (i.useEffect(() => {
    n === s.a.NOT_FETCHED && t()
  }, [t, n]), null === p) ? null : _ ? "changed" : f ? "available" : null
}

function f(e) {
  return null !== p(e)
}