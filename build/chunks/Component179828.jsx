/** Chunk was on 93979 **/
/** chunk id: 179828, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk434404 = require("./434404.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk635042 = require("./635042.js"),
  Chunk256226 = require("./256226.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk314172 = require("./314172.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk798925 = require("./798925.js");

function Z(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function _(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function P(e, n) {
  if (null == e) return {};
  var t, l, o = function(e, n) {
    if (null == e) return {};
    var t, l, o = {},
      r = Object.keys(e);
    for (l = 0; l < r.length; l++) t = r[l], n.indexOf(t) >= 0 || (o[t] = e[t]);
    return o
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (l = 0; l < r.length; l++) t = r[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
  }
  return o
}

function N(e) {
  let {
    user: n,
    currentUser: t,
    guild: s,
    guildMember: a,
    roles: d,
    highestRole: u,
    canManageRoles: m,
    onAddRole: f,
    onRemoveRole: p
  } = e, h = m && null != a, b = o.useRef(null), v = o.useMemo(() => "roles-".concat((0, r.Z)()), []), N = (0, i.ZP)({
    id: v,
    isEnabled: true,
    scrollToStart: y.Cyb,
    scrollToEnd: y.Cyb,
    wrap: true
  }), T = d.length, A = 0 === T ? O.intl.string(O.t["vR7M+/"]) : O.intl.formatToPlainString(O.t.PCs0oq, {
    numRoles: T
  }), E = d.map(e => {
    var o;
    return (0, l.jsx)(j.Z, {
      role: e,
      guildId: s.id,
      disableBorderColor: true,
      onRemove: () => p(e),
      canRemove: (null == (o = e.tags) ? true : o.guild_connections) === null ? n.id === t.id : m && x.r6(s, t.id, u, e)
    }, e.id)
  });
  return (0, l.jsx)(c.bG, {
    navigator: N,
    children: (0, l.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n
        } = e, t = P(e, ["ref"]);
        return (0, l.jsxs)("div", _(Z({
          className: I.root,
          "aria-label": A,
          ref: n
        }, t), {
          children: [E, h && (0, l.jsx)(g.Z, {
            buttonRef: b,
            guild: s,
            guildMember: a,
            numRoles: T,
            highestRole: u,
            onAddRole: f
          })]
        }))
      }
    })
  })
}

function T(e) {
  var {
    user: n,
    currentUser: t,
    guildId: r
  } = e, i = P(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: c
  } = (0, h.KZ)(), j = (0, s.e7)([f.Z], () => f.Z.getGuild(r)), g = (0, s.e7)([u.ZP], () => u.ZP.getMember(r, n.id)), I = null == g ? true : g.roles, T = (0, s.Wu)([m.Z], () => m.Z.getManyRoles(r, null != I ? I : []).sort(b.Z), [I, r]), [A] = (0, s.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, j), p.Z.getGuildVersion(r)]), E = o.useCallback(e => {
    var t, l;
    c({
      action: "REMOVE_ROLE"
    });
    let o = null != (l = null == I ? true : I.filter(n => n !== e.id)) ? l : [];
    (null == (t = e.tags) ? true : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(r, e.id) : d.Z.updateMemberRoles(r, n.id, o, [], [e.id])
  }, [I, r, n.id, c]), C = o.useCallback(e => {
    c({
      action: "ADD_ROLE"
    });
    let t = null != I ? I : [];
    t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(r, n.id, t, [e], [])
  }, [I, r, n.id, c]);
  if (null == j) return null;
  let S = A && null != g;
  return 0 !== T.length || S ? (0, l.jsx)(v.Z, _(Z({
    heading: O.intl.string(O.t.LPJmLy)
  }, i), {
    children: (0, l.jsx)(N, {
      user: n,
      currentUser: t,
      guild: j,
      guildMember: g,
      roles: T,
      highestRole: x.e9(j, t.id),
      canManageRoles: A,
      onAddRole: C,
      onRemoveRole: E
    })
  })) : null
}