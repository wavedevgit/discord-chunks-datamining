/** Chunk was on 70675 **/
/** chunk id: 931617, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk910693 = require("./910693.js"),
  Chunk434404 = require("./434404.js"),
  Chunk402235 = require("./402235.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk96541 = require("./96541.js");

function h(e, n, t) {
  var i, a;
  return (0, l.jsxs)("div", {
    className: p.roleRow,
    children: ["dot" === n ? (0, l.jsx)(r.FhE, {
      className: p.roleDot,
      color: null != (i = e.colorString) ? i : O.Pbq,
      colors: t ? e.colorStrings : null,
      background: false,
      tooltip: false
    }) : (0, l.jsx)(r.xko, {
      className: p.roleDot,
      color: null != (a = e.colorString) ? a : O.Pbq,
      colors: t ? e.colorStrings : null
    }), (0, l.jsx)("div", {
      children: e.name
    })]
  })
}

function j(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] && arguments[2],
    p = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null,
    j = arguments.length > 4 && true !== arguments[4] && arguments[4],
    P = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
    v = (0, i.e7)([g.Z], () => g.Z.getSortedRoles(n)),
    x = (0, i.e7)([a.Z], () => a.Z.roleStyle),
    y = (0, u.sE)(n, {
      location: p,
      targetUserId: e
    }),
    {
      userRoles: N,
      isGuildMember: E,
      canManageRoles: _
    } = (0, i.cj)([c.ZP, f.Z], () => {
      let t = c.ZP.getMember(n, e);
      return {
        userRoles: null != t ? t.roles : [],
        isGuildMember: null != t,
        canManageRoles: null != P && f.Z.can(O.Plq.MANAGE_ROLES, P)
      }
    }, [e, n, P]),
    C = (0, s.ZP)(n, e);
  if (__OVERLAY__ || null == N || null == P || !E) return null;
  let I = f.Z.getHighestRole(P),
    S = _ && !j ? v.map(t => {
      if ((0, d.fI)(t)) return null;
      let i = t.managed || !f.Z.isRoleHigher(P, I, t),
        a = N.includes(t.id);
      return i && !a ? null : (0, l.jsx)(r.S89, {
        id: t.id,
        label: () => h(t, x, C),
        disabled: i,
        action: () => {
          N.includes(t.id) ? (o.Z.updateMemberRoles(n, e, N.filter(e => e !== t.id), [], [t.id]), y(u.jQ.REMOVE_ROLE)) : (o.Z.updateMemberRoles(n, e, N.concat([t.id]), [t.id], []), y(u.jQ.ADD_ROLE))
        },
        checked: a
      }, t.id)
    }) : v.map(e => (0, d.fI)(e) || !N.includes(e.id) ? null : (0, l.jsx)(r.sNh, {
      id: e.id,
      label: () => h(e, x, C)
    }, e.id));
  return 0 === (S = S.filter(b.lm)).length ? null : t ? S : (0, l.jsx)(r.sNh, {
    id: "roles",
    label: m.intl.formatToPlainString(m.t.PCs0oo, {
      numRoles: S.length
    }),
    children: S
  })
}