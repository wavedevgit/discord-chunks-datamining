/** Chunk was on 11776 **/
/** chunk id: 179828, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk217919 = require("./217919.js");

function I(e) {
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

function P(e, t) {
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

function E(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}

function Z(e) {
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
  } = e, b = f && null != s, j = l.useRef(null), x = l.useMemo(() => "roles-".concat((0, i.Z)()), []), Z = (0, o.ZP)({
    id: x,
    isEnabled: true,
    scrollToStart: O.Cyb,
    scrollToEnd: O.Cyb,
    wrap: true
  }), T = d.length, N = 0 === T ? v.intl.string(v.t["vR7M+/"]) : v.intl.formatToPlainString(v.t.PCs0oq, {
    numRoles: T
  }), S = d.map(e => {
    var l;
    return (0, r.jsx)(y.Z, {
      role: e,
      guildId: c.id,
      disableBorderColor: true,
      onRemove: () => m(e),
      canRemove: (null == (l = e.tags) ? true : l.guild_connections) === null ? t.id === n.id : f && g.r6(c, n.id, u, e)
    }, e.id)
  });
  return (0, r.jsx)(a.bG, {
    navigator: Z,
    children: (0, r.jsx)(a.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = E(e, ["ref"]);
        return (0, r.jsxs)("div", P(I({
          className: _.root,
          "aria-label": N,
          ref: t
        }, n), {
          children: [S, b && (0, r.jsx)(h.Z, {
            buttonRef: j,
            guild: c,
            guildMember: s,
            numRoles: T,
            highestRole: u,
            onAddRole: p
          })]
        }))
      }
    })
  })
}

function T(e) {
  var {
    user: t,
    currentUser: n,
    guildId: i
  } = e, o = E(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: a
  } = (0, b.KZ)(), y = (0, c.e7)([p.Z], () => p.Z.getGuild(i)), h = (0, c.e7)([u.ZP], () => u.ZP.getMember(i, t.id)), _ = null == h ? true : h.roles, T = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(i, null != _ ? _ : []).sort(j.Z), [_, i]), [N] = (0, c.Wu)([m.Z], () => [m.Z.can(O.Plq.MANAGE_ROLES, y), m.Z.getGuildVersion(i)]), S = l.useCallback(e => {
    var n, r;
    a({
      action: "REMOVE_ROLE"
    });
    let l = null != (r = null == _ ? true : _.filter(t => t !== e.id)) ? r : [];
    (null == (n = e.tags) ? true : n.guild_connections) === null ? s.Z.unassignGuildRoleConnection(i, e.id) : d.Z.updateMemberRoles(i, t.id, l, [], [e.id])
  }, [_, i, t.id, a]), A = l.useCallback(e => {
    a({
      action: "ADD_ROLE"
    });
    let n = null != _ ? _ : [];
    n.includes(e) || (n = [...n, e]), d.Z.updateMemberRoles(i, t.id, n, [e], [])
  }, [_, i, t.id, a]);
  if (null == y) return null;
  let w = N && null != h;
  return 0 !== T.length || w ? (0, r.jsx)(x.Z, P(I({
    heading: v.intl.string(v.t.LPJmLy)
  }, o), {
    children: (0, r.jsx)(Z, {
      user: t,
      currentUser: n,
      guild: y,
      guildMember: h,
      roles: T,
      highestRole: g.e9(y, n.id),
      canManageRoles: N,
      onAddRole: A,
      onRemoveRole: S
    })
  })) : null
}