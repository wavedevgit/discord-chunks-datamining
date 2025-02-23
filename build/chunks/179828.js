/** Chunk was on 73049 (3f1f94e277187cab.js) **/
t.d(n, {
  Z: () => O
}), t(230036), t(47120);
var r = t(200651),
  o = t(192379),
  i = t(772848),
  l = t(924826),
  s = t(91192),
  c = t(442837),
  a = t(749210),
  d = t(434404),
  u = t(271383),
  f = t(430824),
  p = t(496675),
  m = t(700785),
  I = t(785717),
  b = t(256226),
  g = t(678738),
  y = t(314172),
  j = t(981631),
  h = t(388032),
  v = t(894660);

function x(e) {
  let {
    user: n,
    currentUser: t,
    guild: c,
    guildMember: a,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: p,
    onRemoveRole: I
  } = e, g = f && null != a, x = o.useMemo(() => "roles-".concat((0, i.Z)()), []), O = (0, l.ZP)({
    id: x,
    isEnabled: !0,
    scrollToStart: j.Cyb,
    scrollToEnd: j.Cyb,
    wrap: !0
  }), _ = d.length, Z = 0 === _ ? h.NW.string(h.t["vR7M+/"]) : h.NW.formatToPlainString(h.t.PCs0oq, {
    numRoles: _
  }), N = d.map(e => {
    var o;
    return (0, r.jsx)(b.Z, {
      role: e,
      guildId: c.id,
      disableBorderColor: !0,
      onRemove: () => I(e),
      canRemove: f ? m.r6(c, t.id, u, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && n.id === t.id
    }, e.id)
  });
  return (0, r.jsx)(s.bG, {
    navigator: O,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var n, t, {
            ref: o
          } = e,
          i = function(e, n) {
            if (null == e) return {};
            var t, r, o = function(e, n) {
              if (null == e) return {};
              var t, r, o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
              return o
            }(e, n);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
            }
            return o
          }(e, ["ref"]);
        return (0, r.jsxs)("div", (n = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = r
            })
          }
          return e
        }({
          className: v.root,
          "aria-label": Z,
          ref: o
        }, i), t = t = {
          children: [N, g && (0, r.jsx)(y.Z, {
            guild: c,
            guildMember: a,
            numRoles: _,
            highestRole: u,
            onAddRole: p
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        }), n))
      }
    })
  })
}

function O(e) {
  let {
    user: n,
    currentUser: t,
    guild: i,
    scrollIntoView: l
  } = e, {
    trackUserProfileAction: s
  } = (0, I.KZ)(), b = (0, c.e7)([u.ZP], () => u.ZP.getMember(i.id, n.id)), y = (0, c.e7)([f.Z], () => f.Z.getRoles(i.id)), v = null == b ? void 0 : b.roles, O = o.useMemo(() => null == v || 0 === v.length ? [] : Object.values(y).filter(e => v.includes(e.id)).sort((e, n) => {
    var t, r;
    let o = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
      i = (null === (r = n.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
    return o && !i ? 1 : !o && i ? -1 : 0
  }), [y, v]), _ = m.e9(i, t.id), [Z] = (0, c.Wu)([p.Z], () => [p.Z.can(j.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]), N = o.useCallback(e => {
    var t, r;
    s({
      action: "REMOVE_ROLE"
    });
    let o = null !== (r = null == v ? void 0 : v.filter(n => n !== e.id)) && void 0 !== r ? r : [];
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i.id, e.id) : d.Z.updateMemberRoles(i.id, n.id, o, [], [e.id])
  }, [v, i.id, n.id, s]), P = o.useCallback(e => {
    s({
      action: "ADD_ROLE"
    });
    let t = null != v ? v : []; - 1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(i.id, n.id, t, [e], [])
  }, [v, i.id, n.id, s]), E = Z && null != b;
  return 0 !== O.length || E ? (0, r.jsx)(g.Z, {
    heading: h.NW.string(h.t.LPJmLy),
    scrollIntoView: l,
    children: (0, r.jsx)(x, {
      user: n,
      currentUser: t,
      guild: i,
      guildMember: b,
      roles: O,
      highestRole: _,
      canManageRoles: Z,
      onAddRole: P,
      onRemoveRole: N
    })
  }) : null
}