/** Chunk was on 34712 **/
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
  Chunk352009 = require("./352009.js");

function O(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), o.forEach(function(n) {
      var o;
      o = t[n], n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = o
    })
  }
  return e
}

function Z(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t.push.apply(t, o)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function P(e, n) {
  if (null == e) return {};
  var t, o, r = function(e, n) {
    if (null == e) return {};
    var t, o, r = {},
      l = Object.keys(e);
    for (o = 0; o < l.length; o++) t = l[o], n.indexOf(t) >= 0 || (r[t] = e[t]);
    return r
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++) t = l[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
  }
  return r
}

function T(e) {
  let {
    user: n,
    currentUser: t,
    guild: a,
    guildMember: s,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: p,
    onRemoveRole: m
  } = e, b = f && null != s, h = r.useRef(null), j = r.useMemo(() => "roles-".concat((0, l.Z)()), []), T = (0, i.ZP)({
    id: j,
    isEnabled: true,
    scrollToStart: y.Cyb,
    scrollToEnd: y.Cyb,
    wrap: true
  }), N = d.length, A = 0 === N ? _.intl.string(_.t["vR7M+/"]) : _.intl.formatToPlainString(_.t.PCs0oq, {
    numRoles: N
  }), C = d.map(e => {
    var r;
    return (0, o.jsx)(g.Z, {
      role: e,
      guildId: a.id,
      disableBorderColor: true,
      onRemove: () => m(e),
      canRemove: (null == (r = e.tags) ? true : r.guild_connections) === null ? n.id === t.id : f && x.r6(a, t.id, u, e)
    }, e.id)
  });
  return (0, o.jsx)(c.bG, {
    navigator: T,
    children: (0, o.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n
        } = e, t = P(e, ["ref"]);
        return (0, o.jsxs)("div", Z(O({
          className: I.root,
          "aria-label": A,
          ref: n
        }, t), {
          children: [C, b && (0, o.jsx)(v.Z, {
            buttonRef: h,
            guild: a,
            guildMember: s,
            numRoles: N,
            highestRole: u,
            onAddRole: p
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
    guildId: l
  } = e, i = P(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: c
  } = (0, b.KZ)(), g = (0, a.e7)([p.Z], () => p.Z.getGuild(l)), v = (0, a.e7)([u.ZP], () => u.ZP.getMember(l, n.id)), I = null == v ? true : v.roles, N = (0, a.Wu)([f.Z], () => f.Z.getManyRoles(l, null != I ? I : []).sort(h.Z), [I, l]), [A] = (0, a.Wu)([m.Z], () => [m.Z.can(y.Plq.MANAGE_ROLES, g), m.Z.getGuildVersion(l)]), C = r.useCallback(e => {
    var t, o;
    c({
      action: "REMOVE_ROLE"
    });
    let r = null != (o = null == I ? true : I.filter(n => n !== e.id)) ? o : [];
    (null == (t = e.tags) ? true : t.guild_connections) === null ? s.Z.unassignGuildRoleConnection(l, e.id) : d.Z.updateMemberRoles(l, n.id, r, [], [e.id])
  }, [I, l, n.id, c]), E = r.useCallback(e => {
    c({
      action: "ADD_ROLE"
    });
    let t = null != I ? I : [];
    t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(l, n.id, t, [e], [])
  }, [I, l, n.id, c]);
  if (null == g) return null;
  let S = A && null != v;
  return 0 !== N.length || S ? (0, o.jsx)(j.Z, Z(O({
    heading: _.intl.string(_.t.LPJmLy)
  }, i), {
    children: (0, o.jsx)(T, {
      user: n,
      currentUser: t,
      guild: g,
      guildMember: v,
      roles: N,
      highestRole: x.e9(g, t.id),
      canManageRoles: A,
      onAddRole: E,
      onRemoveRole: C
    })
  })) : null
}