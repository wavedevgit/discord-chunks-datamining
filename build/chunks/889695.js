/** Chunk was on 61564 **/
n.d(t, {
  Z: () => N
}), n(47120), n(653041);
var r = n(200651),
  o = n(192379),
  i = n(658722),
  a = n.n(i),
  c = n(392711),
  l = n.n(c),
  s = n(149765),
  u = n(442837),
  d = n(481060),
  _ = n(271383),
  g = n(430824),
  b = n(594174),
  m = n(700785),
  f = n(709054),
  p = n(962086),
  h = n(160404),
  O = n(225675),
  C = n(981631),
  S = n(388032),
  v = n(548969);

function I(e) {
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
  } = e, n = (0, u.e7)([b.default], () => b.default.getCurrentUser()), i = (0, u.e7)([g.Z], () => g.Z.getGuild(t)), c = (0, u.e7)([g.Z], () => g.Z.getRoles(t)), {
    impersonateType: N,
    viewingRoles: T
  } = (0, u.cj)([h.Z], () => ({
    impersonateType: h.Z.getImpersonateType(t),
    viewingRoles: h.Z.getViewingRoles(t)
  })), x = N === O.z.SERVER_SHOP, P = (0, u.e7)([_.ZP], () => null != n ? _.ZP.getTrueMember(t, n.id) : null), [E, L] = (0, d.A7R)(null == T ? [] : f.default.keys(T)), y = o.useRef(i);
  o.useEffect(() => {
    let e = {},
      t = y.current;
    if (null != t && null != N) {
      for (let t of E) {
        let n = c[t];
        null != n && (e[t] = n)
      }(0, p.Zm)(t.id, {
        type: N,
        roles: e
      })
    }
  }, [E, N, c]);
  let k = null != i && null != n && null != P ? l()(c).filter(e => -1 !== P.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    w = o.useMemo(() => null != i && null != n ? Object.values(c).filter(e => e.id !== i.id).filter(e => {
      var t;
      return !x || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == k ? void 0 : k.id) === e.id || m.r6(i, n.id, k, e)) : [], [i, n, x, k, c]);
  if (null == n || null == i || null == P) return null;
  let A = {};
  return (P.roles.forEach(e => {
    let t = c[e];
    null != t && (A[t.id] = t)
  }), s.e$(m.I0({
    forceRoles: A,
    context: i
  }), s.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)) || i.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: v.container,
    children: (0, r.jsx)(d.hQY, {
      placeholder: S.NW.string(S.t.Sojqsr),
      value: E,
      onChange: L,
      autoFocus: !0,
      children: e => {
        let t = w.reduce((t, n) => (a()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.lo1, {
            value: n.id,
            children: [(0, r.jsx)(d.lo1.Label, {
              children: I(n)
            }), (0, r.jsx)(d.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = c[i.getEveryoneRoleId()];
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
    children: S.NW.string(S.t.MNSTbW)
  })
}