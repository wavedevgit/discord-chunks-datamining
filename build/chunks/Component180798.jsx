/** Chunk was on 91042 **/
/** chunk id: 180798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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
  Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  var l;
  return {
    type: "roleDot",
    variant: "dot" === t ? "dot" : "circle",
    color: null != (l = e.colorString) ? l : m.TpD,
    colors: n ? e.colorStrings : null
  }
}

function y(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    y = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null,
    E = arguments.length > 4 && true !== arguments[4] && arguments[4],
    v = (0, i.bG)([b.A], () => b.A.getGuild(t)),
    h = (0, i.bG)([A.A], () => A.A.getSortedRoles(t)),
    j = (0, i.bG)([a.A], () => a.A.roleStyle),
    x = (0, o.$9)(t, {
      location: y,
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
    D = (0, s.Ay)(t, e);
  if (__OVERLAY__ || null == S || null == v || !M) return null;
  let P = g.A.getHighestRole(v),
    I = C && !E ? h.map(n => {
      if ((0, u.Oy)(n)) return null;
      let i = n.managed || !g.A.isRoleHigher(v, P, n),
        a = S.includes(n.id);
      return i && !a ? null : (0, l.jsx)(r.sLh, {
        id: n.id,
        leadingAccessory: p(n, j, D),
        label: n.name,
        disabled: i,
        action: () => {
          S.includes(n.id) ? (d.A.updateMemberRoles(t, e, S.filter(e => e !== n.id), [], [n.id]), x(o.Nj.REMOVE_ROLE)) : (d.A.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []), x(o.Nj.ADD_ROLE))
        },
        checked: a
      }, n.id)
    }) : h.map(e => (0, u.Oy)(e) || !S.includes(e.id) ? null : (0, l.jsx)(r.Drp, {
      id: e.id,
      leadingAccessory: p(e, j, D),
      label: e.name
    }, e.id));
  return 0 === (I = I.filter(f.Vq)).length ? null : n ? I : (0, l.jsx)(r.Drp, {
    id: "roles",
    label: O.intl.formatToPlainString(O.t.PCs0oo, {
      numRoles: I.length
    }),
    children: I
  })
}