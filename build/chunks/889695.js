/** Chunk was on 69472 **/
n.d(t, {
  Z: () => P
}), n(47120), n(653041);
var r = n(200651),
  o = n(192379),
  i = n(658722),
  a = n.n(i),
  l = n(392711),
  c = n.n(l),
  s = n(149765),
  d = n(442837),
  u = n(481060),
  _ = n(271383),
  b = n(430824),
  g = n(594174),
  f = n(700785),
  m = n(709054),
  p = n(962086),
  h = n(160404),
  C = n(225675),
  S = n(981631),
  O = n(388032),
  v = n(967113);

function x(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, d.e7)([g.default], () => g.default.getCurrentUser()), i = (0, d.e7)([b.Z], () => b.Z.getGuild(t)), l = (0, d.e7)([b.Z], () => b.Z.getRoles(t)), {
    impersonateType: P,
    viewingRoles: T
  } = (0, d.cj)([h.Z], () => ({
    impersonateType: h.Z.getImpersonateType(t),
    viewingRoles: h.Z.getViewingRoles(t)
  })), y = P === C.z.SERVER_SHOP, N = (0, d.e7)([_.ZP], () => null != n ? _.ZP.getTrueMember(t, n.id) : null), [I, w] = (0, u.A7R)(null == T ? [] : m.default.keys(T)), k = o.useRef(i);
  o.useEffect(() => {
    let e = {},
      t = k.current;
    if (null != t && null != P) {
      for (let t of I) {
        let n = l[t];
        null != n && (e[t] = n)
      }(0, p.Zm)(t.id, {
        type: P,
        roles: e
      })
    }
  }, [I, P, l]);
  let j = null != i && null != n && null != N ? c()(l).filter(e => -1 !== N.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    R = o.useMemo(() => null != i && null != n ? Object.values(l).filter(e => e.id !== i.id).filter(e => {
      var t;
      return !y || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == j ? void 0 : j.id) === e.id || f.r6(i, n.id, j, e)) : [], [i, n, y, j, l]);
  if (null == n || null == i || null == N) return null;
  let E = {};
  return (N.roles.forEach(e => {
    let t = l[e];
    null != t && (E[t.id] = t)
  }), s.e$(f.I0({
    forceRoles: E,
    context: i
  }), s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES)) || i.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: v.container,
    children: (0, r.jsx)(u.hQY, {
      placeholder: O.NW.string(O.t.Sojqsr),
      value: I,
      onChange: w,
      autoFocus: !0,
      children: e => {
        let t = R.reduce((t, n) => (a()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(u.lo1, {
            value: n.id,
            children: [(0, r.jsx)(u.lo1.Label, {
              children: x(n)
            }), (0, r.jsx)(u.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = l[i.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(u.lo1, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(u.lo1.Label, {
            children: x(n)
          }), (0, r.jsx)(u.lo1.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(u.Text, {
    variant: "text-md/medium",
    children: O.NW.string(O.t.MNSTbW)
  })
}