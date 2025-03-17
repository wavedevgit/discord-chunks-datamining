/** Chunk was on 70675 **/
n.d(t, {
  Z: () => N
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
  Z = n(496675),
  b = n(823379),
  f = n(981631),
  p = n(388032),
  O = n(929956);

function m(e, t) {
  var n, i;
  return (0, l.jsxs)("div", {
    className: O.roleRow,
    children: ["dot" === t ? (0, l.jsx)(a.FhE, {
      className: O.roleDot,
      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, r.Rf)(f.p6O),
      background: !1,
      tooltip: !1
    }) : (0, l.jsx)(a.xko, {
      className: O.roleDot,
      color: null !== (i = e.colorString) && void 0 !== i ? i : (0, r.Rf)(f.p6O)
    }), (0, l.jsx)("div", {
      children: e.name
    })]
  })
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    O = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    N = (0, i.e7)([g.Z], () => g.Z.getGuild(t)),
    h = (0, i.e7)([g.Z], () => g.Z.getRoles(t)),
    j = (0, i.e7)([o.Z], () => o.Z.roleStyle),
    P = (0, s.sE)(t, {
      location: r,
      targetUserId: e
    }),
    {
      userRoles: x,
      isGuildMember: v,
      canManageRoles: y
    } = (0, i.cj)([d.ZP, Z.Z], () => {
      let n = d.ZP.getMember(t, e);
      return {
        userRoles: null != n ? n.roles : [],
        isGuildMember: null != n,
        canManageRoles: null != N && Z.Z.can(f.Plq.MANAGE_ROLES, N)
      }
    }, [e, t, N]);
  if (__OVERLAY__ || null == x || null == N || !v) return null;
  let E = Z.Z.getHighestRole(N),
    _ = Object.values(h).filter(e => !(0, u.pM)(N.id, e.id)),
    C = y && !O ? _.map(n => {
      let r = n.managed || !Z.Z.isRoleHigher(N, E, n),
        i = -1 !== x.indexOf(n.id);
      return r && !i ? null : (0, l.jsx)(a.S89, {
        id: n.id,
        label: () => m(n, j),
        disabled: r,
        action: () => {
          x.includes(n.id) ? (c.Z.updateMemberRoles(t, e, x.filter(e => e !== n.id), [], [n.id]), P(s.jQ.REMOVE_ROLE)) : (c.Z.updateMemberRoles(t, e, x.concat([n.id]), [n.id], []), P(s.jQ.ADD_ROLE))
        },
        checked: i
      }, n.id)
    }) : _.filter(e => -1 !== x.indexOf(e.id)).map(e => (0, u.pM)(N.id, e.id) ? null : (0, l.jsx)(a.sNh, {
      id: e.id,
      label: () => m(e, j)
    }, e.id));
  return 0 === C.filter(b.lm).length ? null : n ? C : (0, l.jsx)(a.sNh, {
    id: "roles",
    label: p.NW.formatToPlainString(p.t.PCs0oq, {
      numRoles: C.length
    }),
    children: C
  })
}