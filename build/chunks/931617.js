/** Chunk was on 50929 **/
n.d(l, {
  Z: () => v
});
var t = n(200651);
n(192379);
var r = n(866442),
  i = n(442837),
  o = n(481060),
  s = n(607070),
  c = n(605436),
  d = n(910693),
  u = n(434404),
  a = n(181918),
  f = n(271383),
  g = n(430824),
  h = n(496675),
  b = n(823379),
  Z = n(981631),
  p = n(388032),
  O = n(746765);

function j(e, l, n) {
  var i, s;
  return (0, t.jsxs)("div", {
    className: O.roleRow,
    children: ["dot" === l ? (0, t.jsx)(o.FhE, {
      className: O.roleDot,
      color: null != (i = e.colorString) ? i : (0, r.Rf)(Z.p6O),
      colors: n ? e.colorStrings : null,
      background: !1,
      tooltip: !1
    }) : (0, t.jsx)(o.xko, {
      className: O.roleDot,
      color: null != (s = e.colorString) ? s : (0, r.Rf)(Z.p6O),
      colors: n ? e.colorStrings : null
    }), (0, t.jsx)("div", {
      children: e.name
    })]
  })
}

function v(e, l) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    O = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    v = (0, i.e7)([g.Z], () => g.Z.getGuild(l)),
    x = (0, i.e7)([g.Z], () => g.Z.getRoles(l)),
    m = (0, i.e7)([s.Z], () => s.Z.roleStyle),
    R = (0, d.sE)(l, {
      location: r,
      targetUserId: e
    }),
    {
      userRoles: E,
      isGuildMember: N,
      canManageRoles: _
    } = (0, i.cj)([f.ZP, h.Z], () => {
      let n = f.ZP.getMember(l, e);
      return {
        userRoles: null != n ? n.roles : [],
        isGuildMember: null != n,
        canManageRoles: null != v && h.Z.can(Z.Plq.MANAGE_ROLES, v)
      }
    }, [e, l, v]),
    P = (0, a.$V)(l, "useUserRolesItems");
  if (__OVERLAY__ || null == E || null == v || !N) return null;
  let S = h.Z.getHighestRole(v),
    k = Object.values(x).filter(e => !(0, c.pM)(v.id, e.id)),
    M = _ && !O ? k.map(n => {
      let r = n.managed || !h.Z.isRoleHigher(v, S, n),
        i = -1 !== E.indexOf(n.id);
      return r && !i ? null : (0, t.jsx)(o.S89, {
        id: n.id,
        label: () => j(n, m, P),
        disabled: r,
        action: () => {
          E.includes(n.id) ? (u.Z.updateMemberRoles(l, e, E.filter(e => e !== n.id), [], [n.id]), R(d.jQ.REMOVE_ROLE)) : (u.Z.updateMemberRoles(l, e, E.concat([n.id]), [n.id], []), R(d.jQ.ADD_ROLE))
        },
        checked: i
      }, n.id)
    }) : k.filter(e => -1 !== E.indexOf(e.id)).map(e => (0, c.pM)(v.id, e.id) ? null : (0, t.jsx)(o.sNh, {
      id: e.id,
      label: () => j(e, m, P)
    }, e.id));
  return 0 === M.filter(b.lm).length ? null : n ? M : (0, t.jsx)(o.sNh, {
    id: "roles",
    label: p.NW.formatToPlainString(p.t.PCs0oq, {
      numRoles: M.length
    }),
    children: M
  })
}