/** Chunk was on 75283 **/
/** chunk id: 179828, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, o = function(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
  }
  return o
}

function T(e) {
  let {
    user: t,
    currentUser: n,
    guild: c,
    guildMember: s,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: p,
    onRemoveRole: m
  } = e, g = f && null != s, h = o.useRef(null), _ = o.useMemo(() => "roles-".concat((0, i.Z)()), []), T = (0, l.ZP)({
    id: _,
    isEnabled: true,
    scrollToStart: v.Cyb,
    scrollToEnd: v.Cyb,
    wrap: true
  }), C = d.length, A = 0 === C ? y.intl.string(y.t["vR7M+/"]) : y.intl.formatToPlainString(y.t.PCs0oq, {
    numRoles: C
  }), N = d.map(e => {
    var o;
    return (0, r.jsx)(x.Z, {
      role: e,
      guildId: c.id,
      disableBorderColor: true,
      onRemove: () => m(e),
      canRemove: (null == (o = e.tags) ? true : o.guild_connections) === null ? t.id === n.id : f && b.r6(c, n.id, u, e)
    }, e.id)
  });
  return (0, r.jsx)(a.bG, {
    navigator: T,
    children: (0, r.jsx)(a.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = P(e, ["ref"]);
        return (0, r.jsxs)("div", Z(O({
          className: I.root,
          "aria-label": A,
          ref: t
        }, n), {
          children: [N, g && (0, r.jsx)(j.Z, {
            buttonRef: h,
            guild: c,
            guildMember: s,
            numRoles: C,
            highestRole: u,
            onAddRole: p
          })]
        }))
      }
    })
  })
}

function C(e) {
  var {
    user: t,
    currentUser: n,
    guildId: i
  } = e, l = P(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: a
  } = (0, g.KZ)(), x = (0, c.e7)([p.Z], () => p.Z.getGuild(i)), j = (0, c.e7)([u.ZP], () => u.ZP.getMember(i, t.id)), I = null == j ? true : j.roles, C = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(i, null != I ? I : []).sort(h.Z), [I, i]), [A] = (0, c.Wu)([m.Z], () => [m.Z.can(v.Plq.MANAGE_ROLES, x), m.Z.getGuildVersion(i)]), N = o.useCallback(e => {
    var n, r;
    a({
      action: "REMOVE_ROLE"
    });
    let o = null != (r = null == I ? true : I.filter(t => t !== e.id)) ? r : [];
    (null == (n = e.tags) ? true : n.guild_connections) === null ? s.Z.unassignGuildRoleConnection(i, e.id) : d.Z.updateMemberRoles(i, t.id, o, [], [e.id])
  }, [I, i, t.id, a]), E = o.useCallback(e => {
    a({
      action: "ADD_ROLE"
    });
    let n = null != I ? I : [];
    n.includes(e) || (n = [...n, e]), d.Z.updateMemberRoles(i, t.id, n, [e], [])
  }, [I, i, t.id, a]);
  if (null == x) return null;
  let S = A && null != j;
  return 0 !== C.length || S ? (0, r.jsx)(_.Z, Z(O({
    heading: y.intl.string(y.t.LPJmLy)
  }, l), {
    children: (0, r.jsx)(T, {
      user: t,
      currentUser: n,
      guild: x,
      guildMember: j,
      roles: C,
      highestRole: b.e9(x, n.id),
      canManageRoles: A,
      onAddRole: E,
      onRemoveRole: N
    })
  })) : null
}