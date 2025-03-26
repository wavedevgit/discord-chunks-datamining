/** Chunk was on 81818 **/
t.d(n, {
  Z: () => x
}), t(230036), t(47120);
var o = t(200651),
  r = t(192379),
  i = t(772848),
  l = t(924826),
  s = t(91192),
  c = t(442837),
  a = t(749210),
  d = t(434404),
  u = t(271383),
  f = t(430824),
  p = t(496675),
  b = t(700785),
  y = t(785717),
  v = t(256226),
  g = t(678738),
  m = t(314172),
  I = t(981631),
  j = t(388032),
  h = t(319466);

function _(e) {
  let {
    user: n,
    currentUser: t,
    guild: c,
    guildMember: a,
    roles: d,
    highestRole: u,
    canManageRoles: f,
    onAddRole: p,
    onRemoveRole: y
  } = e, g = f && null != a, _ = r.useRef(null), x = r.useMemo(() => "roles-".concat((0, i.Z)()), []), O = (0, l.ZP)({
    id: x,
    isEnabled: !0,
    scrollToStart: I.Cyb,
    scrollToEnd: I.Cyb,
    wrap: !0
  }), Z = d.length, P = 0 === Z ? j.NW.string(j.t["vR7M+/"]) : j.NW.formatToPlainString(j.t.PCs0oq, {
    numRoles: Z
  }), N = d.map(e => {
    var r;
    return (0, o.jsx)(v.Z, {
      role: e,
      guildId: c.id,
      disableBorderColor: !0,
      onRemove: () => y(e),
      canRemove: f ? b.r6(c, t.id, u, e) : (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null && n.id === t.id
    }, e.id)
  });
  return (0, o.jsx)(s.bG, {
    navigator: O,
    children: (0, o.jsx)(s.SJ, {
      children: e => {
        var n, t, {
            ref: r
          } = e,
          i = function(e, n) {
            if (null == e) return {};
            var t, o, r = function(e, n) {
              if (null == e) return {};
              var t, o, r = {},
                i = Object.keys(e);
              for (o = 0; o < i.length; o++) t = i[o], n.indexOf(t) >= 0 || (r[t] = e[t]);
              return r
            }(e, n);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (o = 0; o < i.length; o++) t = i[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
            }
            return r
          }(e, ["ref"]);
        return (0, o.jsxs)("div", (n = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), o.forEach(function(n) {
              var o;
              o = t[n], n in e ? Object.defineProperty(e, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = o
            })
          }
          return e
        }({
          className: h.root,
          "aria-label": P,
          ref: r
        }, i), t = t = {
          children: [N, g && (0, o.jsx)(m.Z, {
            buttonRef: _,
            guild: c,
            guildMember: a,
            numRoles: Z,
            highestRole: u,
            onAddRole: p
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t.push.apply(t, o)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        }), n))
      }
    })
  })
}

function x(e) {
  let {
    user: n,
    currentUser: t,
    guild: i,
    scrollIntoView: l
  } = e, {
    trackUserProfileAction: s
  } = (0, y.KZ)(), v = (0, c.e7)([u.ZP], () => u.ZP.getMember(i.id, n.id)), m = (0, c.e7)([f.Z], () => f.Z.getRoles(i.id)), h = null == v ? void 0 : v.roles, x = r.useMemo(() => null == h || 0 === h.length ? [] : Object.values(m).filter(e => h.includes(e.id)).sort((e, n) => {
    var t, o;
    let r = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
      i = (null === (o = n.tags) || void 0 === o ? void 0 : o.guild_connections) !== null;
    return r && !i ? 1 : !r && i ? -1 : 0
  }), [m, h]), O = b.e9(i, t.id), [Z] = (0, c.Wu)([p.Z], () => [p.Z.can(I.Plq.MANAGE_ROLES, i), null != i ? p.Z.getGuildVersion(i.id) : null]), P = r.useCallback(e => {
    var t, o;
    s({
      action: "REMOVE_ROLE"
    });
    let r = null !== (o = null == h ? void 0 : h.filter(n => n !== e.id)) && void 0 !== o ? o : [];
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(i.id, e.id) : d.Z.updateMemberRoles(i.id, n.id, r, [], [e.id])
  }, [h, i.id, n.id, s]), N = r.useCallback(e => {
    s({
      action: "ADD_ROLE"
    });
    let t = null != h ? h : []; - 1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(i.id, n.id, t, [e], [])
  }, [h, i.id, n.id, s]), E = Z && null != v;
  return 0 !== x.length || E ? (0, o.jsx)(g.Z, {
    heading: j.NW.string(j.t.LPJmLy),
    scrollIntoView: l,
    children: (0, o.jsx)(_, {
      user: n,
      currentUser: t,
      guild: i,
      guildMember: v,
      roles: x,
      highestRole: O,
      canManageRoles: Z,
      onAddRole: N,
      onRemoveRole: P
    })
  }) : null
}