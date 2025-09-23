/** Chunk was on 31553 **/
/** chunk id: 179828, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
  Chunk352009 = require("./352009.js");

function I(e) {
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

function P(e, n) {
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

function N(e, n) {
  if (null == e) return {};
  var t, l, i = function(e, n) {
    if (null == e) return {};
    var t, l, i = {},
      r = Object.keys(e);
    for (l = 0; l < r.length; l++) t = r[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
    return i
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (l = 0; l < r.length; l++) t = r[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
  }
  return i
}

function T(e) {
  let {
    user: n,
    currentUser: t,
    guild: a,
    guildMember: c,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: m,
    onRemoveRole: p
  } = e, j = f && null != c, x = i.useRef(null), g = i.useMemo(() => "roles-".concat((0, r.Z)()), []), T = (0, o.ZP)({
    id: g,
    isEnabled: true,
    scrollToStart: y.Cyb,
    scrollToEnd: y.Cyb,
    wrap: true
  }), E = d.length, A = 0 === E ? O.intl.string(O.t["vR7M+/"]) : O.intl.formatToPlainString(O.t.PCs0oq, {
    numRoles: E
  }), S = d.map(e => {
    var i;
    return (0, l.jsx)(v.Z, {
      role: e,
      guildId: a.id,
      disableBorderColor: true,
      onRemove: () => p(e),
      canRemove: (null == (i = e.tags) ? true : i.guild_connections) === null ? n.id === t.id : f && h.r6(a, t.id, u, e)
    }, e.id)
  });
  return (0, l.jsx)(s.bG, {
    navigator: T,
    children: (0, l.jsx)(s.SJ, {
      children: e => {
        var {
          ref: n
        } = e, t = N(e, ["ref"]);
        return (0, l.jsxs)("div", P(I({
          className: Z.root,
          "aria-label": A,
          ref: n
        }, t), {
          children: [S, j && (0, l.jsx)(b.Z, {
            buttonRef: x,
            guild: a,
            guildMember: c,
            numRoles: E,
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
    guildId: r
  } = e, o = N(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: s
  } = (0, j.KZ)(), v = (0, a.e7)([m.Z], () => m.Z.getGuild(r)), b = (0, a.e7)([u.ZP], () => u.ZP.getMember(r, n.id)), Z = null == b ? true : b.roles, E = (0, a.Wu)([f.Z], () => f.Z.getManyRoles(r, null != Z ? Z : []).sort(x.Z), [Z, r]), [A] = (0, a.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, v), p.Z.getGuildVersion(r)]), S = i.useCallback(e => {
    var t, l;
    s({
      action: "REMOVE_ROLE"
    });
    let i = null != (l = null == Z ? true : Z.filter(n => n !== e.id)) ? l : [];
    (null == (t = e.tags) ? true : t.guild_connections) === null ? c.Z.unassignGuildRoleConnection(r, e.id) : d.Z.updateMemberRoles(r, n.id, i, [], [e.id])
  }, [Z, r, n.id, s]), C = i.useCallback(e => {
    s({
      action: "ADD_ROLE"
    });
    let t = null != Z ? Z : [];
    t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(r, n.id, t, [e], [])
  }, [Z, r, n.id, s]);
  if (null == v) return null;
  let w = A && null != b;
  return 0 !== E.length || w ? (0, l.jsx)(g.Z, P(I({
    heading: O.intl.string(O.t.LPJmLy)
  }, o), {
    children: (0, l.jsx)(T, {
      user: n,
      currentUser: t,
      guild: v,
      guildMember: b,
      roles: E,
      highestRole: h.e9(v, t.id),
      canManageRoles: A,
      onAddRole: C,
      onRemoveRole: S
    })
  })) : null
}