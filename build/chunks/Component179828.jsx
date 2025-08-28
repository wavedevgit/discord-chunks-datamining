/** Chunk was on 82008 **/
/** chunk id: 179828, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => N
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

function _(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function Z(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function P(e, n) {
  if (null == e) return {};
  var t, r, l = function(e, n) {
    if (null == e) return {};
    var t, r, l = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || (l[t] = e[t]);
    return l
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) t = o[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
  }
  return l
}

function T(e) {
  let {
    user: n,
    currentUser: t,
    guild: s,
    guildMember: a,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: m,
    onRemoveRole: p
  } = e, b = f && null != a, x = l.useRef(null), g = l.useMemo(() => "roles-".concat((0, o.Z)()), []), T = (0, i.ZP)({
    id: g,
    isEnabled: true,
    scrollToStart: y.Cyb,
    scrollToEnd: y.Cyb,
    wrap: true
  }), N = d.length, A = 0 === N ? O.intl.string(O.t["vR7M+/"]) : O.intl.formatToPlainString(O.t.PCs0oq, {
    numRoles: N
  }), E = d.map(e => {
    var l;
    return (0, r.jsx)(j.Z, {
      role: e,
      guildId: s.id,
      disableBorderColor: true,
      onRemove: () => p(e),
      canRemove: (null == (l = e.tags) ? true : l.guild_connections) === null ? n.id === t.id : f && h.r6(s, t.id, u, e)
    }, e.id)
  });
  return (0, r.jsx)(c.bG, {
    navigator: T,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n
        } = e, t = P(e, ["ref"]);
        return (0, r.jsxs)("div", Z(_({
          className: I.root,
          "aria-label": A,
          ref: n
        }, t), {
          children: [E, b && (0, r.jsx)(v.Z, {
            buttonRef: x,
            guild: s,
            guildMember: a,
            numRoles: N,
            highestRole: u,
            onAddRole: m
          })]
        }))
      }
    })
  })
}

function N(e) {
  var {
    user: n,
    currentUser: t,
    guildId: o
  } = e, i = P(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: c
  } = (0, b.KZ)(), j = (0, s.e7)([m.Z], () => m.Z.getGuild(o)), v = (0, s.e7)([u.ZP], () => u.ZP.getMember(o, n.id)), I = null == v ? true : v.roles, N = (0, s.Wu)([f.Z], () => f.Z.getManyRoles(o, null != I ? I : []).sort(x.Z), [I, o]), [A] = (0, s.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, j), p.Z.getGuildVersion(o)]), E = l.useCallback(e => {
    var t, r;
    c({
      action: "REMOVE_ROLE"
    });
    let l = null != (r = null == I ? true : I.filter(n => n !== e.id)) ? r : [];
    (null == (t = e.tags) ? true : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(o, e.id) : d.Z.updateMemberRoles(o, n.id, l, [], [e.id])
  }, [I, o, n.id, c]), C = l.useCallback(e => {
    c({
      action: "ADD_ROLE"
    });
    let t = null != I ? I : [];
    t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(o, n.id, t, [e], [])
  }, [I, o, n.id, c]);
  if (null == j) return null;
  let S = A && null != v;
  return 0 !== N.length || S ? (0, r.jsx)(g.Z, Z(_({
    heading: O.intl.string(O.t.LPJmLy)
  }, i), {
    children: (0, r.jsx)(T, {
      user: n,
      currentUser: t,
      guild: j,
      guildMember: v,
      roles: N,
      highestRole: h.e9(j, t.id),
      canManageRoles: A,
      onAddRole: C,
      onRemoveRole: E
    })
  })) : null
}