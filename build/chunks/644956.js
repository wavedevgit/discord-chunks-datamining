/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => B
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n.n(s),
  c = n(866442),
  u = n(442837),
  d = n(481060),
  f = n(239091),
  _ = n(276264),
  p = n(493773),
  h = n(607070),
  g = n(100527),
  m = n(906732),
  E = n(82295),
  v = n(818083),
  b = n(14263),
  y = n(480608),
  O = n(124072),
  S = n(184301),
  I = n(347475),
  T = n(592125),
  N = n(271383),
  A = n(430824),
  C = n(594174),
  R = n(51144),
  P = n(388032),
  D = n(509045),
  w = n(340462);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = (0, v.B)({
  kind: "user",
  id: "2021-07_role_popout",
  label: "Role Popout",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Popout",
    config: {
      enabled: !0
    }
  }]
});

function U(e) {
  let {
    member: t,
    guildId: i,
    channelId: o,
    role: a
  } = e, s = (0, u.e7)([A.Z], () => {
    var e;
    return null === (e = A.Z.getGuild(i)) || void 0 === e ? void 0 : e.ownerId
  }, [i]), l = (0, u.e7)([C.default], () => C.default.getUser(t.userId), [t.userId]), c = (0, u.e7)([T.Z], () => T.Z.getChannel(o), [o]);
  return null == l || null == c ? null : (0, r.jsx)(d.yRy, {
    preload: () => (0, S.Z)(t.userId, l.getAvatarURL(i, 80), {
      guildId: i,
      channelId: o
    }),
    renderPopout: e => (0, r.jsx)(I.Z, k(x({}, e), {
      userId: t.userId,
      guildId: i,
      channelId: o,
      roleId: a.id
    })),
    spacing: 14,
    children: (e, o) => {
      let {
        isShown: u
      } = o;
      return (0, r.jsx)(_.Z, x({
        selected: u,
        colorString: t.colorString,
        colorRoleName: a.name,
        user: l,
        isOwner: t.userId === s,
        nick: t.nick,
        premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
        channel: c,
        guildId: i,
        onContextMenu: e => {
          (0, f.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("50506"), n.e("79695"), n.e("13351"), n.e("98783"), n.e("97589"), n.e("7717"), n.e("12612")]).then(n.bind(n, 757387));
            return t => (0, r.jsx)(e, k(x({}, t), {
              user: l,
              guildId: i,
              channel: c,
              showMediaItems: !0
            }))
          })
        }
      }, e), t.userId)
    }
  }, t.userId)
}

function G(e) {
  let {
    popoutProps: t,
    roleId: n,
    guildId: o,
    channelId: a
  } = e, s = i.useRef(null);
  (0, p.ZP)(() => {
    var e;
    return null === (e = t.setPopoutRef) || void 0 === e || e.call(t, s.current), () => {
      var e;
      return null === (e = t.setPopoutRef) || void 0 === e ? void 0 : e.call(t, null)
    }
  });
  let c = (0, b.Z)(o),
    f = (0, u.e7)([A.Z], () => {
      var e;
      return null === (e = A.Z.getGuild(o)) || void 0 === e ? void 0 : e.getEveryoneRoleId()
    }, [o]),
    _ = (0, u.Wu)([N.ZP, C.default], () => {
      let e = N.ZP.getMembers(o),
        t = null == n || n === f ? e : e.filter(e => e.roles.includes(n));
      return l()(t).filter(e => null != C.default.getUser(e.userId)).sortBy(e => {
        var t;
        return null !== (t = e.nick) && void 0 !== t ? t : R.ZP.getName(C.default.getUser(e.userId))
      }).value()
    }, [o, n, f]),
    h = (0, u.e7)([A.Z], () => {
      let e = null != n ? n : f;
      return null == e ? null : A.Z.getRole(o, e)
    }, [o, n, f]),
    g = null == n ? null : null == c ? void 0 : c[n],
    m = i.useMemo(() => null != h ? _.map(e => (0, r.jsx)(U, {
      member: e,
      guildId: o,
      channelId: a,
      role: h
    }, e.userId)) : [], [a, o, h, _]);
  if (null == h) return null;
  let v = null == g ? h.name : P.NW.formatToPlainString(P.t.CuAQkJ, {
    title: h.name,
    count: g
  });
  return (0, r.jsx)("div", k(x({
    className: D.rolePopout,
    ref: s
  }, t), {
    children: (0, r.jsxs)(d.Ttm, {
      className: D.roleScroller,
      children: [(0, r.jsx)(E.Z, {
        className: D.roleHeader,
        "aria-label": P.NW.formatToPlainString(P.t.UaqbkZ, {
          title: h.name,
          count: m.length
        }),
        children: (0, r.jsx)("span", {
          "aria-hidden": !0,
          children: v
        })
      }), m, null == g || g <= m.length ? null : (0, r.jsx)(E.Z, {
        className: D.roleHeader,
        children: P.NW.formatToPlainString(P.t["9oMmZG"], {
          count: g - m.length
        })
      })]
    })
  }))
}

function B(e) {
  let {
    roleColor: t,
    roleId: n,
    channelId: i,
    roleName: o,
    guildId: s,
    children: l,
    inlinePreview: f = !1
  } = e, {
    analyticsLocations: _
  } = (0, m.ZP)(g.Z.ROLE_MENTION), p = (0, u.e7)([h.Z], () => h.Z.roleStyle), E = null != t && 0 !== t && !f, v = E && "dot" === p, b = e => (0, r.jsxs)(O.Z, k(x({
    className: a()(D.roleMention),
    color: "username" === p && E ? t : null
  }, e), {
    children: [v && (0, r.jsx)(d.FhE, {
      color: (0, c.Rf)(t),
      className: w.roleDot,
      background: !1,
      tooltip: !1
    }), l]
  })), {
    enabled: S
  } = j.getCurrentConfig({
    location: "2ec235_1"
  }, {
    autoTrackExposure: !1
  });
  return !S || f || null == i || null == s || null == n && "@everyone" !== o ? (0, r.jsx)(m.Gt, {
    value: _,
    children: b()
  }) : (0, r.jsx)(m.Gt, {
    value: _,
    children: (0, r.jsx)(d.yRy, {
      preload: async () => {
        null != n && await (0, y.H)(s, n)
      },
      renderPopout: e => (0, r.jsx)(G, {
        guildId: s,
        channelId: i,
        roleId: n,
        popoutProps: e
      }),
      position: "right",
      children: b
    })
  })
}