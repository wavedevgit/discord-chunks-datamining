/** Chunk was on 91042 **/
/** chunk id: 180798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk504049 = require("./504049.js"),
  Chunk997509 = require("./997509.js"),
  Chunk676608 = require("./676608.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk721779 = require("./721779.js");

function y(e, t, n) {
  var i, a;
  return (0, l.jsxs)("div", {
    className: p.x,
    children: ["dot" === t ? (0, l.jsx)(r.WYI, {
      className: p.m,
      color: null != (i = e.colorString) ? i : m.TpD,
      colors: n ? e.colorStrings : null,
      background: false,
      tooltip: false
    }) : (0, l.jsx)(r.RYH, {
      className: p.m,
      color: null != (a = e.colorString) ? a : m.TpD,
      colors: n ? e.colorStrings : null
    }), (0, l.jsx)("div", {
      children: e.name
    })]
  })
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    p = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null,
    E = arguments.length > 4 && true !== arguments[4] && arguments[4],
    v = (0, i.bG)([b.A], () => b.A.getGuild(t)),
    h = (0, i.bG)([A.A], () => A.A.getSortedRoles(t)),
    j = (0, i.bG)([a.A], () => a.A.roleStyle),
    x = (0, o.$9)(t, {
      location: p,
      targetUserId: e
    }),
    {
      userRoles: S,
      isGuildMember: M,
      canManageRoles: C
    } = (0, i.cf)([c.Ay, g.A], () => {
      let n = c.Ay.getMember(t, e);
      return {
        userRoles: null != n ? n.roles : [],
        isGuildMember: null != n,
        canManageRoles: null != v && g.A.can(m.xBc.MANAGE_ROLES, v)
      }
    }, [e, t, v]),
    D = (0, d.Ay)(t, e);
  if (__OVERLAY__ || null == S || null == v || !M) return null;
  let I = g.A.getHighestRole(v),
    P = C && !E ? h.map(n => {
      if ((0, u.Oy)(n)) return null;
      let i = n.managed || !g.A.isRoleHigher(v, I, n),
        a = S.includes(n.id);
      return i && !a ? null : (0, l.jsx)(r.sLh, {
        id: n.id,
        label: () => y(n, j, D),
        disabled: i,
        action: () => {
          S.includes(n.id) ? (s.A.updateMemberRoles(t, e, S.filter(e => e !== n.id), [], [n.id]), x(o.Nj.REMOVE_ROLE)) : (s.A.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []), x(o.Nj.ADD_ROLE))
        },
        checked: a
      }, n.id)
    }) : h.map(e => (0, u.Oy)(e) || !S.includes(e.id) ? null : (0, l.jsx)(r.Drp, {
      id: e.id,
      label: () => y(e, j, D)
    }, e.id));
  return 0 === (P = P.filter(f.Vq)).length ? null : n ? P : (0, l.jsx)(r.Drp, {
    id: "roles",
    label: O.intl.formatToPlainString(O.t.PCs0oo, {
      numRoles: P.length
    }),
    children: P
  })
}