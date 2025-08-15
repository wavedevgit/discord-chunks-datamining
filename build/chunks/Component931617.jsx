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
    className: O.roleRow,
    children: ["dot" === n ? (0, l.jsx)(r.FhE, {
      className: O.roleDot,
      color: null != (i = e.colorString) ? i : p.Pbq,
      colors: t ? e.colorStrings : null,
      background: false,
      tooltip: false
    }) : (0, l.jsx)(r.xko, {
      className: O.roleDot,
      color: null != (a = e.colorString) ? a : p.Pbq,
      colors: t ? e.colorStrings : null
    }), (0, l.jsx)("div", {
      children: e.name
    })]
  })
}

function j(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] && arguments[2],
    O = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null,
    j = arguments.length > 4 && true !== arguments[4] && arguments[4],
    P = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
    v = (0, i.e7)([g.Z], () => g.Z.getSortedRoles(n)),
    x = (0, i.e7)([a.Z], () => a.Z.roleStyle),
    _ = (0, o.sE)(n, {
      location: O,
      targetUserId: e
    }),
    {
      userRoles: y,
      isGuildMember: N,
      canManageRoles: E
    } = (0, i.cj)([d.ZP, b.Z], () => {
      let t = d.ZP.getMember(n, e);
      return {
        userRoles: null != t ? t.roles : [],
        isGuildMember: null != t,
        canManageRoles: null != P && b.Z.can(p.Plq.MANAGE_ROLES, P)
      }
    }, [e, n, P]),
    C = (0, s.ZP)(n, e);
  if (__OVERLAY__ || null == y || null == P || !N) return null;
  let I = b.Z.getHighestRole(P),
    S = E && !j ? v.map(t => {
      if ((0, c.fI)(t)) return null;
      let i = t.managed || !b.Z.isRoleHigher(P, I, t),
        a = y.includes(t.id);
      return i && !a ? null : (0, l.jsx)(r.S89, {
        id: t.id,
        label: () => h(t, x, C),
        disabled: i,
        action: () => {
          y.includes(t.id) ? (u.Z.updateMemberRoles(n, e, y.filter(e => e !== t.id), [], [t.id]), _(o.jQ.REMOVE_ROLE)) : (u.Z.updateMemberRoles(n, e, y.concat([t.id]), [t.id], []), _(o.jQ.ADD_ROLE))
        },
        checked: a
      }, t.id)
    }) : v.map(e => (0, c.fI)(e) || !y.includes(e.id) ? null : (0, l.jsx)(r.sNh, {
      id: e.id,
      label: () => h(e, x, C)
    }, e.id));
  return 0 === (S = S.filter(f.lm)).length ? null : t ? S : (0, l.jsx)(r.sNh, {
    id: "roles",
    label: m.intl.formatToPlainString(m.t.PCs0oq, {
      numRoles: S.length
    }),
    children: S
  })
}