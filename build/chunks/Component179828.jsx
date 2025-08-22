/** Chunk was on 98360 **/
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

function I(e) {
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
  var t, r, o = function(e, n) {
    if (null == e) return {};
    var t, r, o = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
    return o
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) t = l[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
  }
  return o
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
    onAddRole: m,
    onRemoveRole: p
  } = e, b = f && null != s, g = o.useRef(null), j = o.useMemo(() => "roles-".concat((0, l.Z)()), []), T = (0, i.ZP)({
    id: j,
    isEnabled: true,
    scrollToStart: _.Cyb,
    scrollToEnd: _.Cyb,
    wrap: true
  }), N = d.length, A = 0 === N ? y.intl.string(y.t["vR7M+/"]) : y.intl.formatToPlainString(y.t.PCs0oq, {
    numRoles: N
  }), C = d.map(e => {
    var o;
    return (0, r.jsx)(h.Z, {
      role: e,
      guildId: a.id,
      disableBorderColor: true,
      onRemove: () => p(e),
      canRemove: (null == (o = e.tags) ? true : o.guild_connections) === null ? n.id === t.id : f && x.r6(a, t.id, u, e)
    }, e.id)
  });
  return (0, r.jsx)(c.bG, {
    navigator: T,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n
        } = e, t = P(e, ["ref"]);
        return (0, r.jsxs)("div", Z(I({
          className: O.root,
          "aria-label": A,
          ref: n
        }, t), {
          children: [C, b && (0, r.jsx)(v.Z, {
            buttonRef: g,
            guild: a,
            guildMember: s,
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
    guildId: l
  } = e, i = P(e, ["user", "currentUser", "guildId"]);
  let {
    trackUserProfileAction: c
  } = (0, b.KZ)(), h = (0, a.e7)([m.Z], () => m.Z.getGuild(l)), v = (0, a.e7)([u.ZP], () => u.ZP.getMember(l, n.id)), O = null == v ? true : v.roles, N = (0, a.Wu)([f.Z], () => f.Z.getManyRoles(l, null != O ? O : []).sort(g.Z), [O, l]), [A] = (0, a.Wu)([p.Z], () => [p.Z.can(_.Plq.MANAGE_ROLES, h), p.Z.getGuildVersion(l)]), C = o.useCallback(e => {
    var t, r;
    c({
      action: "REMOVE_ROLE"
    });
    let o = null != (r = null == O ? true : O.filter(n => n !== e.id)) ? r : [];
    (null == (t = e.tags) ? true : t.guild_connections) === null ? s.Z.unassignGuildRoleConnection(l, e.id) : d.Z.updateMemberRoles(l, n.id, o, [], [e.id])
  }, [O, l, n.id, c]), E = o.useCallback(e => {
    c({
      action: "ADD_ROLE"
    });
    let t = null != O ? O : [];
    t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(l, n.id, t, [e], [])
  }, [O, l, n.id, c]);
  if (null == h) return null;
  let S = A && null != v;
  return 0 !== N.length || S ? (0, r.jsx)(j.Z, Z(I({
    heading: y.intl.string(y.t.LPJmLy)
  }, i), {
    children: (0, r.jsx)(T, {
      user: n,
      currentUser: t,
      guild: h,
      guildMember: v,
      roles: N,
      highestRole: x.e9(h, t.id),
      canManageRoles: A,
      onAddRole: E,
      onRemoveRole: C
    })
  })) : null
}