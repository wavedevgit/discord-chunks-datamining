/** Chunk was on 88235 **/
n.d(t, {
  Z: () => E
}), n(642613), n(388685);
var r = n(200651),
  l = n(192379),
  i = n(772848),
  o = n(924826),
  s = n(91192),
  a = n(442837),
  c = n(749210),
  d = n(434404),
  u = n(271383),
  f = n(430824),
  p = n(496675),
  h = n(700785),
  j = n(785717),
  g = n(256226),
  m = n(678738),
  v = n(314172),
  b = n(981631),
  O = n(388032),
  x = n(217919);

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
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

function I(e, t) {
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

function P(e) {
  let {
    user: t,
    currentUser: n,
    guild: a,
    guildMember: c,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: p,
    onRemoveRole: j
  } = e, m = f && null != c, P = l.useRef(null), E = l.useMemo(() => "roles-".concat((0, i.Z)()), []), T = (0, o.ZP)({
    id: E,
    isEnabled: !0,
    scrollToStart: b.Cyb,
    scrollToEnd: b.Cyb,
    wrap: !0
  }), N = d.length, S = 0 === N ? O.intl.string(O.t["vR7M+/"]) : O.intl.formatToPlainString(O.t.PCs0oq, {
    numRoles: N
  }), A = d.map(e => {
    var l;
    return (0, r.jsx)(g.Z, {
      role: e,
      guildId: a.id,
      disableBorderColor: !0,
      onRemove: () => j(e),
      canRemove: f ? h.r6(a, n.id, u, e) : (null == (l = e.tags) ? void 0 : l.guild_connections) === null && t.id === n.id
    }, e.id)
  });
  return (0, r.jsx)(s.bG, {
    navigator: T,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = I(e, ["ref"]);
        return (0, r.jsxs)("div", y(Z({
          className: x.root,
          "aria-label": S,
          ref: t
        }, n), {
          children: [A, m && (0, r.jsx)(v.Z, {
            buttonRef: P,
            guild: a,
            guildMember: c,
            numRoles: N,
            highestRole: u,
            onAddRole: p
          })]
        }))
      }
    })
  })
}

function E(e) {
  var {
    user: t,
    currentUser: n,
    guild: i
  } = e, o = I(e, ["user", "currentUser", "guild"]);
  let {
    trackUserProfileAction: s
  } = (0, j.KZ)(), g = (0, a.e7)([u.ZP], () => u.ZP.getMember(i.id, t.id)), v = (0, a.e7)([f.Z], () => f.Z.getRoles(i.id)), x = null == g ? void 0 : g.roles, E = l.useMemo(() => null == x || 0 === x.length ? [] : Object.values(v).filter(e => x.includes(e.id)).sort((e, t) => {
    var n, r;
    let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
      i = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
    return l && !i ? 1 : !l && i ? -1 : 0
  }), [v, x]), T = h.e9(i, n.id), [N] = (0, a.Wu)([p.Z], () => [p.Z.can(b.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]), S = l.useCallback(e => {
    var n, r;
    s({
      action: "REMOVE_ROLE"
    });
    let l = null != (r = null == x ? void 0 : x.filter(t => t !== e.id)) ? r : [];
    (null == (n = e.tags) ? void 0 : n.guild_connections) === null ? c.Z.unassignGuildRoleConnection(i.id, e.id) : d.Z.updateMemberRoles(i.id, t.id, l, [], [e.id])
  }, [x, i.id, t.id, s]), A = l.useCallback(e => {
    s({
      action: "ADD_ROLE"
    });
    let n = null != x ? x : []; - 1 === n.indexOf(e) && (n = n.concat([e])), d.Z.updateMemberRoles(i.id, t.id, n, [e], [])
  }, [x, i.id, t.id, s]), C = N && null != g;
  return 0 !== E.length || C ? (0, r.jsx)(m.Z, y(Z({
    heading: O.intl.string(O.t.LPJmLy)
  }, o), {
    children: (0, r.jsx)(P, {
      user: t,
      currentUser: n,
      guild: i,
      guildMember: g,
      roles: E,
      highestRole: T,
      canManageRoles: N,
      onAddRole: A,
      onRemoveRole: S
    })
  })) : null
}