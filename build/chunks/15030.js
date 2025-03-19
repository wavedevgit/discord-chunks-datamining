/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(704215),
  l = n(481060),
  o = n(725803),
  c = n(605236),
  A = n(999382),
  d = n(614342),
  u = n(303737),
  g = n(618748),
  f = n(500395),
  m = n(975464),
  p = n(981631),
  h = n(674563),
  C = n(85207);

function b() {
  let e;
  let t = (0, s.e7)([A.Z], () => A.Z.getGuild()),
    {
      application: n,
      loading: b
    } = (0, o.Z)(null == t ? void 0 : t.id, h.wW.GUILD_ROLE_SUBSCRIPTIONS),
    v = i.useRef(null),
    x = (0, d.Z)(null != t ? t : void 0);
  i.useEffect(() => {
    null != t && (0, u.sO)(t) && (0, c.EW)(a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
  }, [t]);
  let N = (null == t ? void 0 : t.hasFeature(p.oNc.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(p.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
  return e = null == t || b ? (0, r.jsx)(l.$jN, {}) : null != x ? (0, r.jsx)(f.Z, {
    guild: t,
    config: x
  }) : N ? (0, r.jsx)(m.Z, {
    guild: t
  }) : (0, r.jsx)(g.Z, {
    guild: t,
    application: n
  }), (0, r.jsx)("div", {
    className: C.settingsColumn,
    children: (0, r.jsx)("div", {
      className: C.settingsContainer,
      children: (0, r.jsx)(l.w0Z, {
        className: C.settingsScroller,
        children: (0, r.jsx)("main", {
          ref: v,
          className: C.settingsContent,
          children: (0, r.jsx)(l.JcV, {
            containerRef: v,
            children: e
          })
        })
      })
    })
  })
}