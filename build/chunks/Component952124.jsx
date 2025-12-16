/** Chunk was on web.js **/
/** chunk id: 952124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk14491 = require("./14491.jsx"),
  Chunk423086 = require("./423086.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  let {
    user: t,
    guildId: n,
    viewProfileItem: E
  } = e, y = i.useRef(null), {
    trackUserProfileAction: O
  } = (0, _.KZ)(), {
    analyticsLocations: v,
    newestAnalyticsLocation: S
  } = (0, l.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU), I = (0, a.e7)([m.Z], () => m.Z.getUserProfile(t.id)), T = null == I ? true : I.application, C = (0, f.Z)({
    user: t,
    guildId: n,
    location: S,
    color: "danger",
    onBlock: () => O({
      action: "BLOCK",
      analyticsLocations: v
    }),
    onUnblock: () => O({
      action: "UNBLOCK",
      analyticsLocations: v
    })
  }), A = (0, p.Z)({
    user: t,
    guildId: n,
    location: S,
    onIgnore: () => O({
      action: "IGNORE",
      analyticsLocations: v
    }),
    onUnignore: () => O({
      action: "UNIGNORE",
      analyticsLocations: v
    })
  }), N = (0, u.Z)({
    applicationId: null == T ? true : T.id,
    user: t,
    guildId: n,
    onSubmit: () => O({
      action: "REPORT",
      analyticsLocations: v
    }),
    color: "danger"
  }), P = (0, d.Z)({
    id: null == T ? true : T.id,
    label: g.intl.string(g.t["+NP/b2"]),
    onSuccess: () => O({
      action: "COPY_APP_ID",
      analyticsLocations: v
    })
  }), R = [
    [E],
    [A, C, N],
    [(0, c.Z)({
      application: T,
      label: g.intl.string(g.t.WqhZss),
      onSuccess: () => O({
        action: "COPY_APP_LINK",
        analyticsLocations: v
      })
    }), P]
  ];
  return R.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(o.yRy, {
    targetElementRef: y,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "user-bot-profile-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": g.intl.string(g.t.AXIHpV),
        children: R.map((e, t) => (0, r.jsx)(o.kSQ, {
          children: e.map(e => e)
        }, t))
      })
    },
    children: e => (0, r.jsx)(h.oY, b({
      buttonRef: y,
      action: "PRESS_OPTIONS",
      icon: o.xhG,
      tooltipText: g.intl.string(g.t["UKOtz+"])
    }, e))
  })
}