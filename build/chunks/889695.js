/** Chunk was on 10280 **/
n.d(t, {
  Z: () => w
}), n(388685), n(539854);
var r = n(200651),
  i = n(192379),
  l = n(658722),
  o = n.n(l),
  a = n(392711),
  c = n.n(a),
  s = n(149765),
  u = n(442837),
  d = n(481060),
  p = n(271383),
  f = n(430824),
  g = n(594174),
  b = n(700785),
  h = n(709054),
  O = n(962086),
  _ = n(160404),
  y = n(225675),
  m = n(981631),
  S = n(388032),
  v = n(318135);

function P(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null != (t = e.colorString) ? t : "currentColor"
    },
    children: e.name
  })
}

function w(e) {
  let {
    guildId: t
  } = e, n = (0, u.e7)([g.default], () => g.default.getCurrentUser()), l = (0, u.e7)([f.Z], () => f.Z.getGuild(t)), a = (0, u.e7)([f.Z], () => f.Z.getRoles(t)), {
    impersonateType: w,
    viewingRoles: j
  } = (0, u.cj)([_.Z], () => ({
    impersonateType: _.Z.getImpersonateType(t),
    viewingRoles: _.Z.getViewingRoles(t)
  })), E = w === y.z.SERVER_SHOP, x = (0, u.e7)([p.ZP], () => null != n ? p.ZP.getTrueMember(t, n.id) : null), [I, C] = (0, d.A7R)(null == j ? [] : h.default.keys(j)), N = i.useRef(l);
  i.useEffect(() => {
    let e = {},
      t = N.current;
    if (null != t && null != w) {
      for (let t of I) {
        let n = a[t];
        null != n && (e[t] = n)
      }(0, O.Zm)(t.id, {
        type: w,
        roles: e
      })
    }
  }, [I, w, a]);
  let Z = null != l && null != n && null != x ? c()(a).filter(e => -1 !== x.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    R = i.useMemo(() => null != l && null != n ? Object.values(a).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !E || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == Z ? void 0 : Z.id) === e.id || b.r6(l, n.id, Z, e)) : [], [l, n, E, Z, a]);
  if (null == n || null == l || null == x) return null;
  let T = {};
  return (x.roles.forEach(e => {
    let t = a[e];
    null != t && (T[t.id] = t)
  }), s.e$(b.I0({
    forceRoles: T,
    context: l
  }), s.$e(m.Plq.MANAGE_GUILD, m.Plq.MANAGE_ROLES)) || l.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: v.container,
    children: (0, r.jsx)(d.hQY, {
      placeholder: S.intl.string(S.t.Sojqsr),
      value: I,
      onChange: C,
      autoFocus: !0,
      children: e => {
        let t = R.reduce((t, n) => (o()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.lo1, {
            value: n.id,
            children: [(0, r.jsx)(d.lo1.Label, {
              children: P(n)
            }), (0, r.jsx)(d.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = a[l.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(d.lo1, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(d.lo1.Label, {
            children: P(n)
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