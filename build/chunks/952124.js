/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => y
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(100527),
  s = n(906732),
  l = n(279332),
  c = n(14491),
  u = n(299206),
  d = n(276022),
  f = n(389052),
  _ = n(158508),
  p = n(622724),
  h = n(785717),
  m = n(621853),
  g = n(475413),
  E = n(388032);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  let {
    user: t,
    guildId: n,
    viewProfileItem: v,
    onCloseProfile: y
  } = e, {
    trackUserProfileAction: O
  } = (0, h.KZ)(), {
    analyticsLocations: I,
    newestAnalyticsLocation: S
  } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU), T = l.J.useExperiment({
    location: "UserSettingsAuthedApps"
  }, {
    autoTrackExposure: !0
  }).enabled, N = (0, i.e7)([m.Z], () => m.Z.getUserProfile(t.id)), A = null == N ? void 0 : N.application, C = (0, d.Z)({
    user: t,
    application: null != A ? A : void 0,
    guildId: n,
    onItemClick: () => {
      O({
        action: "MANAGE_APP",
        analyticsLocations: I
      }), null == y || y()
    }
  }), R = (0, f.Z)({
    user: t,
    guildId: n,
    location: S,
    color: "danger",
    onBlock: () => O({
      action: "BLOCK",
      analyticsLocations: I
    }),
    onUnblock: () => O({
      action: "UNBLOCK",
      analyticsLocations: I
    })
  }), P = (0, _.Z)({
    user: t,
    guildId: n,
    location: S,
    onIgnore: () => O({
      action: "IGNORE",
      analyticsLocations: I
    }),
    onUnignore: () => O({
      action: "UNIGNORE",
      analyticsLocations: I
    })
  }), w = (0, p.Z)({
    user: t,
    guildId: n,
    location: S,
    color: "danger",
    onAction: () => O({
      action: "REPORT",
      analyticsLocations: I
    })
  }), D = (0, u.Z)({
    id: null == A ? void 0 : A.id,
    label: E.NW.string(E.t["+NP/b2"]),
    onSuccess: () => O({
      action: "COPY_APP_ID",
      analyticsLocations: I
    })
  }), L = [
    [v], T ? [C] : [],
    [P, R, w],
    [(0, c.Z)({
      application: A,
      label: E.NW.string(E.t.WqhZsr),
      onSuccess: () => O({
        action: "COPY_APP_LINK",
        analyticsLocations: I
      })
    }), D]
  ];
  return L.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(o.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "user-bot-profile-overflow-menu",
        onSelect: void 0,
        onClose: t,
        "aria-label": E.NW.string(E.t.AXIHpa),
        children: L.map((e, t) => (0, r.jsx)(o.kSQ, {
          children: e.map(e => e)
        }, t))
      })
    },
    children: e => (0, r.jsx)(g.oY, b({
      action: "PRESS_OPTIONS",
      icon: o.xhG,
      tooltipText: E.NW.string(E.t.UKOtz8)
    }, e))
  })
}