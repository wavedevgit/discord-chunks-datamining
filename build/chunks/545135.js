/** Chunk was on 33213 **/
n.d(t, {
  default: () => w
});
var i = n(200651);
n(192379);
var r = n(512722),
  s = n.n(r),
  l = n(442837),
  a = n(481060),
  o = n(239091),
  c = n(100527),
  u = n(906732),
  d = n(299206),
  g = n(894059),
  b = n(423589),
  p = n(837949),
  S = n(122074),
  N = n(314897),
  f = n(984933),
  O = n(594174),
  E = n(241851),
  h = n(94953),
  y = n(976192),
  j = n(904483),
  _ = n(429824),
  P = n(919815),
  v = n(858822),
  A = n(993356),
  m = n(58338),
  x = n(422525),
  L = n(522762),
  I = n(466330),
  Z = n(981631),
  M = n(388032);

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let {
    guild: t,
    onSelect: r,
    hideSettings: c
  } = e, u = t.id, G = f.ZP.getDefaultChannel(u), w = (0, l.e7)([O.default], () => {
    let e = O.default.getCurrentUser();
    return s()(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), C = (0, I.Z)({
    guild: t,
    source: Z.t4x.GUILD_CONTEXT_MENU,
    channel: G
  }), k = (0, L.Z)(u), U = (0, v.Z)(t), R = (0, A.Z)(t), W = (0, x.Z)(t), B = (0, y.Z)({
    guildId: t.id,
    userId: N.default.getId(),
    analyticsLocation: {
      page: Z.ZY5.GUILD_CHANNEL,
      section: Z.jXE.CHAT_USERNAME,
      object: Z.qAy.CONTEXT_MENU_ITEM
    }
  }), Y = (0, h.Z)({
    guildId: t.id,
    userId: N.default.getId(),
    analyticsLocation: {
      page: Z.ZY5.GUILD_CHANNEL,
      section: Z.jXE.CHAT_USERNAME,
      object: Z.qAy.CONTEXT_MENU_ITEM
    }
  }), Q = (0, j.Z)(t), H = (0, g.Z)(t.id), F = (0, d.Z)({
    id: t.id,
    label: M.NW.string(M.t["94lLDw"])
  }), V = (0, P.Z)(t, {
    section: Z.jXE.GUILD_LIST
  }), q = (0, p.Z)(t.id), K = (0, m.Z)(t.id), X = (0, S.ng)(t.id, !1), z = (0, _.Z)(t), J = (0, b.Mn)("GuildContextMenu");

  function $() {
    (0, a.h7j)(e => (0, i.jsx)(E.g, T(D({}, e), {
      guild: t
    })))
  }
  return t.hasFeature(Z.oNc.HUB) ? (0, i.jsxs)(a.v2r, {
    navId: "guild-context",
    onClose: o.Zy,
    "aria-label": M.NW.string(M.t.HpQykZ),
    onSelect: r,
    children: [(0, i.jsxs)(a.kSQ, {
      children: [C, (0, i.jsx)(a.sNh, {
        id: "privacy",
        label: M.NW.string(M.t.IlFwwc),
        action: () => (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("50506"), n.e("68880"), n.e("93828"), n.e("11935"), n.e("22878"), n.e("13351"), n.e("66711"), n.e("97349"), n.e("17938"), n.e("53937"), n.e("6380"), n.e("46097"), n.e("76540"), n.e("8739"), n.e("18543"), n.e("58059"), n.e("28467"), n.e("18895"), n.e("88936"), n.e("30243"), n.e("99393"), n.e("49508"), n.e("68241"), n.e("22646"), n.e("3940"), n.e("25183"), n.e("85574"), n.e("76030"), n.e("48923"), n.e("30419"), n.e("88712"), n.e("18824"), n.e("1815"), n.e("45847"), n.e("40247"), n.e("24389"), n.e("97434")]).then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, T(D({}, n), {
            guild: t
          }))
        })
      }), B]
    }), w ? null : (0, i.jsx)(a.kSQ, {
      children: (0, i.jsx)(a.sNh, {
        id: "leave-guild",
        label: M.NW.string(M.t.Dv8gFR),
        action: $,
        color: "danger"
      })
    }), (0, i.jsx)(a.kSQ, {
      children: F
    })]
  }) : (0, i.jsxs)(a.v2r, {
    navId: "guild-context",
    onClose: o.Zy,
    "aria-label": M.NW.string(M.t.HpQykZ),
    onSelect: r,
    children: [(0, i.jsx)(a.kSQ, {
      children: V
    }), (0, i.jsx)(a.kSQ, {
      children: C
    }), (0, i.jsxs)(a.kSQ, {
      children: [U, J || __OVERLAY__ ? null : R, J && !__OVERLAY__ ? K : null, X, k, q]
    }), (0, i.jsxs)(a.kSQ, {
      children: [c ? null : W, __OVERLAY__ ? null : (0, i.jsx)(a.sNh, {
        id: "privacy",
        label: M.NW.string(M.t.BayiAg),
        action: () => (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("50506"), n.e("68880"), n.e("93828"), n.e("11935"), n.e("22878"), n.e("13351"), n.e("66711"), n.e("97349"), n.e("17938"), n.e("53937"), n.e("6380"), n.e("46097"), n.e("76540"), n.e("8739"), n.e("18543"), n.e("58059"), n.e("28467"), n.e("18895"), n.e("88936"), n.e("30243"), n.e("99393"), n.e("49508"), n.e("68241"), n.e("22646"), n.e("3940"), n.e("25183"), n.e("85574"), n.e("76030"), n.e("48923"), n.e("30419"), n.e("88712"), n.e("18824"), n.e("1815"), n.e("45847"), n.e("40247"), n.e("24389"), n.e("97434")]).then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, T(D({}, n), {
            guild: t
          }))
        })
      }), B, Y]
    }), (0, i.jsxs)(a.kSQ, {
      children: [Q, H]
    }), (0, i.jsxs)(a.kSQ, {
      children: [z, !w && (0, i.jsx)(a.sNh, {
        id: "leave-guild",
        label: M.NW.string(M.t.J2TBi4),
        action: $,
        color: "danger"
      })]
    }), (0, i.jsx)(a.kSQ, {
      children: F
    })]
  })
}

function w(e) {
  let {
    analyticsLocations: t
  } = (0, u.ZP)(c.Z.CONTEXT_MENU);
  return (0, i.jsx)(u.Gt, {
    value: t,
    children: (0, i.jsx)(G, D({}, e))
  })
}