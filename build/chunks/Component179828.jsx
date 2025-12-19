/** Chunk was on 93979 **/
/** chunk id: 179828, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk854458 = require("./854458.js");

function T(e) {
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

function N(e, n) {
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

function A(e, n) {
  if (null == e) return {};
  var t, l, i = function(e, n) {
    if (null == e) return {};
    var t, l, i = {},
      o = Object.keys(e);
    for (l = 0; l < o.length; l++) t = o[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
    return i
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++) t = o[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
  }
  return i
}

function P(e) {
  let {
    user: n,
    currentUser: t,
    guild: c,
    guildMember: s,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: m,
    onRemoveRole: p
  } = e, h = f && null != s, j = i.useRef(null), b = i.useMemo(() => "roles-".concat((0, o.Z)()), []), I = (0, r.ZP)({
    id: b,
    isEnabled: true,
    scrollToStart: y.Cyb,
    scrollToEnd: y.Cyb,
    wrap: true
  }), P = d.length, E = 0 === P ? Z.intl.string(Z.t["vR7M+y"]) : Z.intl.formatToPlainString(Z.t.PCs0oo, {
    numRoles: P
  }), _ = d.map(e => {
    var i;
    return (0, l.jsx)(v.Z, {
      role: e,
      guildId: c.id,
      disableBorderColor: true,
      onRemove: () => p(e),
      canRemove: (null == (i = e.tags) ? true : i.guild_connections) === null ? n.id === t.id : f && x.r6(c, t.id, u, e)
    }, e.id)
  });
  return (0, l.jsx)(a.bG, {
    navigator: I,
    children: (0, l.jsx)(a.SJ, {
      children: e => {
        var {
          ref: n
        } = e, t = A(e, ["ref"]);
        return (0, l.jsxs)("div", N(T({
          className: O.root,
          "aria-label": E,
          ref: n
        }, t), {
          children: [_, h && (0, l.jsx)(g.Z, {
            buttonRef: j,
            guild: c,
            guildMember: s,
            numRoles: P,
            highestRole: u,
            onAddRole: m
          })]
        }))
      }
    })
  })
}

function E(e) {
  var {
    user: n,
    currentUser: t,
    guildId: o
  } = e, r = A(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: a
  } = (0, h.KZ)(), v = (0, c.e7)([m.Z], () => m.Z.getGuild(o)), g = (0, c.e7)([u.ZP], () => u.ZP.getMember(o, n.id)), O = null == g ? true : g.roles, E = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(o, null != O ? O : []).sort(j.Z), [O, o]), [_] = (0, c.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, v), p.Z.getGuildVersion(o)]), C = i.useCallback(e => {
    var t, l;
    a({
      action: "REMOVE_ROLE"
    });
    let i = null != (l = null == O ? true : O.filter(n => n !== e.id)) ? l : [];
    (null == (t = e.tags) ? true : t.guild_connections) === null ? s.Z.unassignGuildRoleConnection(o, e.id) : d.Z.updateMemberRoles(o, n.id, i, [], [e.id])
  }, [O, o, n.id, a]), S = i.useCallback(e => {
    a({
      action: "ADD_ROLE"
    });
    let t = null != O ? O : [];
    t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(o, n.id, t, [e], [])
  }, [O, o, n.id, a]);
  if (null == v) return null;
  let w = _ && null != g;
  return 0 !== E.length || w ? (0, l.jsx)(b.Z, N(T({
    heading: Z.intl.string(Z.t["LPJmL/"]),
    scrollTargetId: I.Tb.ROLES
  }, r), {
    children: (0, l.jsx)(P, {
      user: n,
      currentUser: t,
      guild: v,
      guildMember: g,
      roles: E,
      highestRole: x.e9(v, t.id),
      canManageRoles: _,
      onAddRole: S,
      onRemoveRole: C
    })
  })) : null
}