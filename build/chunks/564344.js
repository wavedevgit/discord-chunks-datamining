/** Chunk was on 624 (fb0e3e021d08f8af.js) **/
n.d(t, {
  Z: () => S
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(503089),
  o = n(906732),
  c = n(254901),
  d = n(18438),
  u = n(778825),
  m = n(851894),
  g = n(484459),
  p = n(216045),
  h = n(839469),
  f = n(25990),
  b = n(594174),
  N = n(585483),
  x = n(16703),
  _ = n(785145),
  E = n(981631),
  j = n(526761),
  C = n(726985),
  O = n(388032),
  v = n(277865);

function S() {
  c.Z.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, s.e7)([u.Z], () => u.Z.getGuild()),
    t = (0, x.Z)(),
    n = (0, s.e7)([u.Z, f.Z], () => u.Z.showNotice() || f.Z.showNotice()),
    S = null != e ? e : t,
    T = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
    {
      subsection: I,
      setSubsection: y
    } = (0, _.Z)(),
    {
      analyticsLocations: A
    } = (0, o.ZP)(),
    {
      hasSearchResults: P,
      searchResults: R
    } = (0, h.E)();

  function D(t) {
    if (I !== t) {
      if (n) {
        N.S.dispatch(E.CkL.SHAKE_APP, {
          duration: 300,
          intensity: l.$x
        }), N.S.dispatch(E.CkL.EMPHASIZE_NOTICE);
        return
      }
      t === j.NB.GUILD && null == e && null != S && (0, d.Fq)(S, A), y(t)
    }
  }
  i.useEffect(() => {
    null != T && (0, g.Z)(T.id, T.getAvatarURL(null == S ? void 0 : S.id, 80), {
      guildId: null == S ? void 0 : S.id
    })
  }, [null == S ? void 0 : S.id, T]);
  let Z = !0,
    w = !0;
  return P && 1 === R.length && (R.includes(C.s6.PROFILE_SERVER_PROFILES) ? (D(j.NB.GUILD), w = !1) : R.includes(C.s6.PROFILE_USER_PROFILE) && (D(j.NB.USER_PROFILE), Z = !1)), (0, r.jsx)(o.Gt, {
    value: A,
    children: (0, r.jsxs)(a.y5t, {
      component: (0, r.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: O.NW.string(O.t["vi7f+v"])
      }),
      children: [(0, r.jsxs)(a.njP, {
        className: v.tabBar,
        type: "top",
        look: "brand",
        selectedItem: I,
        onItemSelect: D,
        children: [w ? (0, r.jsx)(a.njP.Item, {
          className: v.tabBarItem,
          id: j.NB.USER_PROFILE,
          children: O.NW.string(O.t["OU3/Pj"])
        }, j.NB.USER_PROFILE) : null, Z ? (0, r.jsx)(a.njP.Item, {
          className: v.tabBarItem,
          id: j.NB.GUILD,
          children: O.NW.string(O.t.kPHroa)
        }, j.NB.GUILD) : null]
      }), I === j.NB.GUILD ? (0, r.jsx)(m.Z, {
        selectedGuild: S
      }) : (0, r.jsx)(p.Z, {})]
    })
  })
}