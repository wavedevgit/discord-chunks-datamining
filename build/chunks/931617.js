/** Chunk was on 70675 **/
n.d(t, {
  Z: () => h
});
var l = n(200651);
n(192379);
var r = n(866442),
  i = n(442837),
  a = n(481060),
  o = n(607070),
  u = n(605436),
  s = n(910693),
  c = n(434404),
  d = n(271383),
  g = n(430824),
  f = n(496675),
  Z = n(823379),
  b = n(981631),
  p = n(388032),
  O = n(929956);

function m(e, t) {
  var n, i;
  return (0, l.jsxs)("div", {
    className: O.roleRow,
    children: ["dot" === t ? (0, l.jsx)(a.FhE, {
      className: O.roleDot,
      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, r.Rf)(b.p6O),
      background: !1,
      tooltip: !1
    }) : (0, l.jsx)(a.xko, {
      className: O.roleDot,
      color: null !== (i = e.colorString) && void 0 !== i ? i : (0, r.Rf)(b.p6O)
    }), (0, l.jsx)("div", {
      children: e.name
    })]
  })
}

function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    O = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    h = (0, i.e7)([g.Z], () => g.Z.getGuild(t)),
    N = (0, i.e7)([g.Z], () => g.Z.getRoles(t)),
    j = (0, i.e7)([o.Z], () => o.Z.roleStyle),
    P = (0, s.sE)(t, {
      location: r,
      targetUserId: e
    }),
    {
      userRoles: v,
      isGuildMember: x,
      canManageRoles: y
    } = (0, i.cj)([d.ZP, f.Z], () => {
      let n = d.ZP.getMember(t, e);
      return {
        userRoles: null != n ? n.roles : [],
        isGuildMember: null != n,
        canManageRoles: null != h && f.Z.can(b.Plq.MANAGE_ROLES, h)
      }
    }, [e, t, h]);
  if (__OVERLAY__ || null == v || null == h || !x) return null;
  let E = f.Z.getHighestRole(h),
    C = Object.values(N).filter(e => !(0, u.pM)(h.id, e.id)),
    _ = y && !O ? C.map(n => {
      let r = n.managed || !f.Z.isRoleHigher(h, E, n),
        i = -1 !== v.indexOf(n.id);
      return r && !i ? null : (0, l.jsx)(a.S89, {
        id: n.id,
        label: () => m(n, j),
        disabled: r,
        action: () => {
          v.includes(n.id) ? (c.Z.updateMemberRoles(t, e, v.filter(e => e !== n.id), [], [n.id]), P(s.jQ.REMOVE_ROLE)) : (c.Z.updateMemberRoles(t, e, v.concat([n.id]), [n.id], []), P(s.jQ.ADD_ROLE))
        },
        checked: i
      }, n.id)
    }) : C.filter(e => -1 !== v.indexOf(e.id)).map(e => (0, u.pM)(h.id, e.id) ? null : (0, l.jsx)(a.sNh, {
      id: e.id,
      label: () => m(e, j)
    }, e.id));
  return 0 === _.filter(Z.lm).length ? null : n ? _ : (0, l.jsx)(a.sNh, {
    id: "roles",
    label: p.NW.formatToPlainString(p.t.PCs0oq, {
      numRoles: _.length
    }),
    children: _
  })
}