/** Chunk was on web.js **/
/** chunk id: 952124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk279332 = require("./279332.js"),
  Chunk14491 = require("./14491.jsx"),
  Chunk423086 = require("./423086.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk276022 = require("./276022.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e) {
  let {
    user: t,
    guildId: n,
    viewProfileItem: y,
    onCloseProfile: v
  } = e, I = i.useRef(null), {
    trackUserProfileAction: T
  } = (0, m.KZ)(), {
    analyticsLocations: S,
    newestAnalyticsLocation: A
  } = (0, l.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU), C = c.J.useExperiment({
    location: "UserSettingsAuthedApps"
  }, {
    autoTrackExposure: true
  }).enabled, N = (0, a.e7)([g.Z], () => g.Z.getUserProfile(t.id)), R = null == N ? true : N.application, P = (0, _.Z)({
    user: t,
    application: null != R ? R : true,
    guildId: n,
    onItemClick: () => {
      T({
        action: "MANAGE_APP",
        analyticsLocations: S
      }), null == v || v()
    }
  }), w = (0, p.Z)({
    user: t,
    guildId: n,
    location: A,
    color: "danger",
    onBlock: () => T({
      action: "BLOCK",
      analyticsLocations: S
    }),
    onUnblock: () => T({
      action: "UNBLOCK",
      analyticsLocations: S
    })
  }), D = (0, h.Z)({
    user: t,
    guildId: n,
    location: A,
    onIgnore: () => T({
      action: "IGNORE",
      analyticsLocations: S
    }),
    onUnignore: () => T({
      action: "UNIGNORE",
      analyticsLocations: S
    })
  }), L = (0, d.Z)({
    applicationId: null == R ? true : R.id,
    user: t,
    guildId: n,
    onSubmit: () => T({
      action: "REPORT",
      analyticsLocations: S
    }),
    color: "danger"
  }), x = (0, f.Z)({
    id: null == R ? true : R.id,
    label: b.intl.string(b.t["+NP/b2"]),
    onSuccess: () => T({
      action: "COPY_APP_ID",
      analyticsLocations: S
    })
  }), M = [
    [y], C ? [P] : [],
    [D, w, L],
    [(0, u.Z)({
      application: R,
      label: b.intl.string(b.t.WqhZss),
      onSuccess: () => T({
        action: "COPY_APP_LINK",
        analyticsLocations: S
      })
    }), x]
  ];
  return M.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(o.yRy, {
    targetElementRef: I,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "user-bot-profile-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": b.intl.string(b.t.AXIHpV),
        children: M.map((e, t) => (0, r.jsx)(o.kSQ, {
          children: e.map(e => e)
        }, t))
      })
    },
    children: e => (0, r.jsx)(E.oY, O({
      ref: I,
      action: "PRESS_OPTIONS",
      icon: o.xhG,
      tooltipText: b.intl.string(b.t["UKOtz+"])
    }, e))
  })
}