/** Chunk was on 70675 **/
/** chunk id: 931617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk100953 = require("./100953.js");

function P(e, t, n) {
  var r, o;
  return (0, l.jsxs)("div", {
    className: p.roleRow,
    children: ["dot" === t ? (0, l.jsx)(i.FhE, {
      className: p.roleDot,
      color: null != (r = e.colorString) ? r : O.Pbq,
      colors: n ? e.colorStrings : null,
      background: false,
      tooltip: false
    }) : (0, l.jsx)(i.xko, {
      className: p.roleDot,
      color: null != (o = e.colorString) ? o : O.Pbq,
      colors: n ? e.colorStrings : null
    }), (0, l.jsx)("div", {
      children: e.name
    })]
  })
}

function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    p = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null,
    m = arguments.length > 4 && true !== arguments[4] && arguments[4],
    j = (0, r.e7)([g.Z], () => g.Z.getGuild(t)),
    y = (0, r.e7)([Z.Z], () => Z.Z.getSortedRoles(t)),
    E = (0, r.e7)([o.Z], () => o.Z.roleStyle),
    N = (0, a.sE)(t, {
      location: p,
      targetUserId: e
    }),
    {
      userRoles: v,
      isGuildMember: S,
      canManageRoles: C
    } = (0, r.cj)([c.ZP, f.Z], () => {
      let n = c.ZP.getMember(t, e);
      return {
        userRoles: null != n ? n.roles : [],
        isGuildMember: null != n,
        canManageRoles: null != j && f.Z.can(O.Plq.MANAGE_ROLES, j)
      }
    }, [e, t, j]),
    x = (0, u.ZP)(t, e);
  if (__OVERLAY__ || null == v || null == j || !S) return null;
  let M = f.Z.getHighestRole(j),
    T = C && !m ? y.map(n => {
      if ((0, d.fI)(n)) return null;
      let r = n.managed || !f.Z.isRoleHigher(j, M, n),
        o = v.includes(n.id);
      return r && !o ? null : (0, l.jsx)(i.S89, {
        id: n.id,
        label: () => P(n, E, x),
        disabled: r,
        action: () => {
          v.includes(n.id) ? (s.Z.updateMemberRoles(t, e, v.filter(e => e !== n.id), [], [n.id]), N(a.jQ.REMOVE_ROLE)) : (s.Z.updateMemberRoles(t, e, v.concat([n.id]), [n.id], []), N(a.jQ.ADD_ROLE))
        },
        checked: o
      }, n.id)
    }) : y.map(e => (0, d.fI)(e) || !v.includes(e.id) ? null : (0, l.jsx)(i.sNh, {
      id: e.id,
      label: () => P(e, E, x)
    }, e.id));
  return 0 === (T = T.filter(b.lm)).length ? null : n ? T : (0, l.jsx)(i.sNh, {
    id: "roles",
    label: h.intl.formatToPlainString(h.t.PCs0oo, {
      numRoles: T.length
    }),
    children: T
  })
}