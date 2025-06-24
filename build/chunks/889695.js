/** Chunk was on 7463 **/
n.d(t, {
  Z: () => T
}), n(388685), n(539854);
var a = n(255367),
  r = n(73800),
  o = n(658722),
  i = n.n(o),
  c = n(392711),
  l = n.n(c),
  s = n(149765),
  u = n(442837),
  d = n(481060),
  p = n(271383),
  g = n(430824),
  m = n(594174),
  _ = n(700785),
  b = n(709054),
  f = n(962086),
  h = n(160404),
  y = n(225675),
  O = n(981631),
  C = n(388032),
  S = n(318135);

function v(e) {
  var t;
  return (0, a.jsx)("span", {
    style: {
      color: null != (t = e.colorString) ? t : "currentColor"
    },
    children: e.name
  })
}

function T(e) {
  let {
    guildId: t
  } = e, n = (0, u.e7)([m.default], () => m.default.getCurrentUser()), o = (0, u.e7)([g.Z], () => g.Z.getGuild(t)), c = (0, u.e7)([g.Z], () => g.Z.getRoles(t)), {
    impersonateType: T,
    viewingRoles: I
  } = (0, u.cj)([h.Z], () => ({
    impersonateType: h.Z.getImpersonateType(t),
    viewingRoles: h.Z.getViewingRoles(t)
  })), P = T === y.z.SERVER_SHOP, x = (0, u.e7)([p.ZP], () => null != n ? p.ZP.getTrueMember(t, n.id) : null), [w, j] = (0, d.A7R)(null == I ? [] : b.default.keys(I)), E = r.useRef(o);
  r.useEffect(() => {
    let e = {},
      t = E.current;
    if (null != t && null != T) {
      for (let t of w) {
        let n = c[t];
        null != n && (e[t] = n)
      }(0, f.Zm)(t.id, {
        type: T,
        roles: e
      })
    }
  }, [w, T, c]);
  let R = null != o && null != n && null != x ? l()(c).filter(e => -1 !== x.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    N = r.useMemo(() => null != o && null != n ? Object.values(c).filter(e => e.id !== o.id).filter(e => {
      var t;
      return !P || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == R ? void 0 : R.id) === e.id || _.r6(o, n.id, R, e)) : [], [o, n, P, R, c]);
  if (null == n || null == o || null == x) return null;
  let A = {};
  return (x.roles.forEach(e => {
    let t = c[e];
    null != t && (A[t.id] = t)
  }), s.e$(_.I0({
    forceRoles: A,
    context: o
  }), s.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES)) || o.isOwner(n.id)) ? (0, a.jsx)("div", {
    className: S.container,
    children: (0, a.jsx)(d.hQY, {
      placeholder: C.intl.string(C.t.Sojqsr),
      value: w,
      onChange: j,
      autoFocus: !0,
      children: e => {
        let t = N.reduce((t, n) => (i()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, a.jsxs)(d.lo1, {
            value: n.id,
            children: [(0, a.jsx)(d.lo1.Label, {
              children: v(n)
            }), (0, a.jsx)(d.lo1.Checkbox, {})]
          }, n.id)), t), []),
          n = c[o.getEveryoneRoleId()];
        return null != n && t.push((0, a.jsxs)(d.lo1, {
          value: n.id,
          disabled: !0,
          children: [(0, a.jsx)(d.lo1.Label, {
            children: v(n)
          }), (0, a.jsx)(d.lo1.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, a.jsx)(d.Text, {
    variant: "text-md/medium",
    children: C.intl.string(C.t.MNSTbW)
  })
}