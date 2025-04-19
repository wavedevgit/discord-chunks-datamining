/** Chunk was on 86668 **/
n.d(t, {
  Z: () => C
}), n(388685), n(539854);
var r = n(200651),
  i = n(192379),
  o = n(658722),
  l = n.n(o),
  a = n(392711),
  c = n.n(a),
  s = n(149765),
  u = n(442837),
  d = n(481060),
  b = n(271383),
  p = n(430824),
  g = n(594174),
  f = n(700785),
  _ = n(709054),
  h = n(962086),
  m = n(160404),
  O = n(225675),
  y = n(981631),
  S = n(388032),
  P = n(318135);

function v(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null != (t = e.colorString) ? t : "currentColor"
    },
    children: e.name
  })
}

function C(e) {
  let {
    guildId: t
  } = e, n = (0, u.e7)([g.default], () => g.default.getCurrentUser()), o = (0, u.e7)([p.Z], () => p.Z.getGuild(t)), a = (0, u.e7)([p.Z], () => p.Z.getRoles(t)), {
    impersonateType: C,
    viewingRoles: w
  } = (0, u.cj)([m.Z], () => ({
    impersonateType: m.Z.getImpersonateType(t),
    viewingRoles: m.Z.getViewingRoles(t)
  })), I = C === O.z.SERVER_SHOP, j = (0, u.e7)([b.ZP], () => null != n ? b.ZP.getTrueMember(t, n.id) : null), [x, E] = (0, d.A7R)(null == w ? [] : _.default.keys(w)), N = i.useRef(o);
  i.useEffect(() => {
    let e = {},
      t = N.current;
    if (null != t && null != C) {
      for (let t of x) {
        let n = a[t];
        null != n && (e[t] = n)
      }(0, h.Zm)(t.id, {
        type: C,
        roles: e
      })
    }
  }, [x, C, a]);
  let T = null != o && null != n && null != j ? c()(a).filter(e => -1 !== j.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    Z = i.useMemo(() => null != o && null != n ? Object.values(a).filter(e => e.id !== o.id).filter(e => {
      var t;
      return !I || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == T ? void 0 : T.id) === e.id || f.r6(o, n.id, T, e)) : [], [o, n, I, T, a]);
  if (null == n || null == o || null == j) return null;
  let R = {};
  return (j.roles.forEach(e => {
    let t = a[e];
    null != t && (R[t.id] = t)
  }), s.e$(f.I0({
    forceRoles: R,
    context: o
  }), s.$e(y.Plq.MANAGE_GUILD, y.Plq.MANAGE_ROLES)) || o.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: P.container,
    children: (0, r.jsx)(d.hQY, {
      placeholder: S.intl.string(S.t.Sojqsr),
      value: x,
      onChange: E,
      autoFocus: !0,
      children: e => {
        let t = Z.reduce((t, n) => (l()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.lo1, {
            value: n.id,
            children: [(0, r.jsx)(d.lo1.Label, {
              children: v(n)
            }), (0, r.jsx)(d.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = a[o.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(d.lo1, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(d.lo1.Label, {
            children: v(n)
          }), (0, r.jsx)(d.lo1.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    children: S.intl.string(S.t.MNSTbW)
  })
}