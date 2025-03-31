/** Chunk was on 83379 **/
n.d(t, {
  Z: () => N
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  a = n(658722),
  o = n.n(a),
  l = n(392711),
  s = n.n(l),
  c = n(149765),
  u = n(442837),
  d = n(481060),
  p = n(271383),
  m = n(430824),
  f = n(594174),
  h = n(700785),
  g = n(709054),
  _ = n(962086),
  b = n(160404),
  v = n(225675),
  x = n(981631),
  y = n(388032),
  E = n(387522);

function O(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function N(e) {
  let {
    guildId: t
  } = e, n = (0, u.e7)([f.default], () => f.default.getCurrentUser()), a = (0, u.e7)([m.Z], () => m.Z.getGuild(t)), l = (0, u.e7)([m.Z], () => m.Z.getRoles(t)), {
    impersonateType: N,
    viewingRoles: j
  } = (0, u.cj)([b.Z], () => ({
    impersonateType: b.Z.getImpersonateType(t),
    viewingRoles: b.Z.getViewingRoles(t)
  })), C = N === v.z.SERVER_SHOP, I = (0, u.e7)([p.ZP], () => null != n ? p.ZP.getTrueMember(t, n.id) : null), [S, T] = (0, d.A7R)(null == j ? [] : g.default.keys(j)), P = i.useRef(a);
  i.useEffect(() => {
    let e = {},
      t = P.current;
    if (null != t && null != N) {
      for (let t of S) {
        let n = l[t];
        null != n && (e[t] = n)
      }(0, _.Zm)(t.id, {
        type: N,
        roles: e
      })
    }
  }, [S, N, l]);
  let A = null != a && null != n && null != I ? s()(l).filter(e => -1 !== I.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    w = i.useMemo(() => null != a && null != n ? Object.values(l).filter(e => e.id !== a.id).filter(e => {
      var t;
      return !C || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == A ? void 0 : A.id) === e.id || h.r6(a, n.id, A, e)) : [], [a, n, C, A, l]);
  if (null == n || null == a || null == I) return null;
  let Z = {};
  return (I.roles.forEach(e => {
    let t = l[e];
    null != t && (Z[t.id] = t)
  }), c.e$(h.I0({
    forceRoles: Z,
    context: a
  }), c.$e(x.Plq.MANAGE_GUILD, x.Plq.MANAGE_ROLES)) || a.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: E.container,
    children: (0, r.jsx)(d.hQY, {
      placeholder: y.NW.string(y.t.Sojqsr),
      value: S,
      onChange: T,
      autoFocus: !0,
      children: e => {
        let t = w.reduce((t, n) => (o()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.lo1, {
            value: n.id,
            children: [(0, r.jsx)(d.lo1.Label, {
              children: O(n)
            }), (0, r.jsx)(d.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = l[a.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(d.lo1, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(d.lo1.Label, {
            children: O(n)
          }), (0, r.jsx)(d.lo1.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    children: y.NW.string(y.t.MNSTbW)
  })
}