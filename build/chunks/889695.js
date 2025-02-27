/** Chunk was on 46086 **/
n.d(t, {
  Z: () => E
}), n(47120), n(653041);
var r = n(200651),
  o = n(192379),
  i = n(658722),
  a = n.n(i),
  l = n(392711),
  c = n.n(l),
  s = n(149765),
  u = n(442837),
  d = n(481060),
  _ = n(271383),
  g = n(430824),
  b = n(594174),
  p = n(700785),
  m = n(709054),
  f = n(962086),
  O = n(160404),
  h = n(225675),
  S = n(981631),
  v = n(388032),
  C = n(214174);

function I(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function E(e) {
  let {
    guildId: t
  } = e, n = (0, u.e7)([b.default], () => b.default.getCurrentUser()), i = (0, u.e7)([g.Z], () => g.Z.getGuild(t)), l = (0, u.e7)([g.Z], () => g.Z.getRoles(t)), {
    impersonateType: E,
    viewingRoles: T
  } = (0, u.cj)([O.Z], () => ({
    impersonateType: O.Z.getImpersonateType(t),
    viewingRoles: O.Z.getViewingRoles(t)
  })), P = E === h.z.SERVER_SHOP, N = (0, u.e7)([_.ZP], () => null != n ? _.ZP.getTrueMember(t, n.id) : null), [L, x] = (0, d.A7R)(null == T ? [] : m.default.keys(T)), y = o.useRef(i);
  o.useEffect(() => {
    let e = {},
      t = y.current;
    if (null != t && null != E) {
      for (let t of L) {
        let n = l[t];
        null != n && (e[t] = n)
      }(0, f.Zm)(t.id, {
        type: E,
        roles: e
      })
    }
  }, [L, E, l]);
  let A = null != i && null != n && null != N ? c()(l).filter(e => -1 !== N.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    R = o.useMemo(() => null != i && null != n ? Object.values(l).filter(e => e.id !== i.id).filter(e => {
      var t;
      return !P || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == A ? void 0 : A.id) === e.id || p.r6(i, n.id, A, e)) : [], [i, n, P, A, l]);
  if (null == n || null == i || null == N) return null;
  let w = {};
  return (N.roles.forEach(e => {
    let t = l[e];
    null != t && (w[t.id] = t)
  }), s.e$(p.I0({
    forceRoles: w,
    context: i
  }), s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES)) || i.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: C.container,
    children: (0, r.jsx)(d.hQY, {
      placeholder: v.NW.string(v.t.Sojqsr),
      value: L,
      onChange: x,
      autoFocus: !0,
      children: e => {
        let t = R.reduce((t, n) => (a()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.lo1, {
            value: n.id,
            children: [(0, r.jsx)(d.lo1.Label, {
              children: I(n)
            }), (0, r.jsx)(d.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = l[i.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(d.lo1, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(d.lo1.Label, {
            children: I(n)
          }), (0, r.jsx)(d.lo1.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    children: v.NW.string(v.t.MNSTbW)
  })
}