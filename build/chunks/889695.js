/** Chunk was on 91365 **/
n.d(t, {
  Z: () => x
}), n(388685), n(539854);
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
  m = n(700785),
  p = n(709054),
  f = n(962086),
  h = n(160404),
  C = n(225675),
  S = n(981631),
  O = n(388032),
  v = n(318135);

function y(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null != (t = e.colorString) ? t : "currentColor"
    },
    children: e.name
  })
}

function x(e) {
  let {
    guildId: t
  } = e, n = (0, d.e7)([g.default], () => g.default.getCurrentUser()), i = (0, d.e7)([b.Z], () => b.Z.getGuild(t)), l = (0, d.e7)([b.Z], () => b.Z.getRoles(t)), {
    impersonateType: x,
    viewingRoles: P
  } = (0, d.cj)([h.Z], () => ({
    impersonateType: h.Z.getImpersonateType(t),
    viewingRoles: h.Z.getViewingRoles(t)
  })), w = x === C.z.SERVER_SHOP, I = (0, d.e7)([_.ZP], () => null != n ? _.ZP.getTrueMember(t, n.id) : null), [T, k] = (0, u.A7R)(null == P ? [] : p.default.keys(P)), j = o.useRef(i);
  o.useEffect(() => {
    let e = {},
      t = j.current;
    if (null != t && null != x) {
      for (let t of T) {
        let n = l[t];
        null != n && (e[t] = n)
      }(0, f.Zm)(t.id, {
        type: x,
        roles: e
      })
    }
  }, [T, x, l]);
  let R = null != i && null != n && null != I ? c()(l).filter(e => -1 !== I.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    N = o.useMemo(() => null != i && null != n ? Object.values(l).filter(e => e.id !== i.id).filter(e => {
      var t;
      return !w || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == R ? void 0 : R.id) === e.id || m.r6(i, n.id, R, e)) : [], [i, n, w, R, l]);
  if (null == n || null == i || null == I) return null;
  let B = {};
  return (I.roles.forEach(e => {
    let t = l[e];
    null != t && (B[t.id] = t)
  }), s.e$(m.I0({
    forceRoles: B,
    context: i
  }), s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES)) || i.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: v.container,
    children: (0, r.jsx)(u.hQY, {
      placeholder: O.NW.string(O.t.Sojqsr),
      value: T,
      onChange: k,
      autoFocus: !0,
      children: e => {
        let t = N.reduce((t, n) => (a()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(u.lo1, {
            value: n.id,
            children: [(0, r.jsx)(u.lo1.Label, {
              children: y(n)
            }), (0, r.jsx)(u.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = l[i.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(u.lo1, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(u.lo1.Label, {
            children: y(n)
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