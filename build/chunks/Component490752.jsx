/** Chunk was on web.js **/
/** chunk id: 490752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk165162 = require("./165162.jsx"),
  Chunk578550 = require("./578550.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk985018 = require("./985018.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function b(e) {
  let {
    user: t,
    guildId: n,
    viewProfileItem: E
  } = e, b = i.useRef(null), {
    trackUserProfileAction: O
  } = (0, _.NJ)(), {
    analyticsLocations: v,
    newestAnalyticsLocation: A
  } = (0, l.Ay)(o.A.USER_PROFILE_OVERFLOW_MENU), I = (0, a.bG)([h.A], () => h.A.getUserProfile(t.id)), S = null == I ? true : I.application, T = (0, f.A)({
    user: t,
    guildId: n,
    location: A,
    color: "danger",
    onBlock: () => O({
      action: "BLOCK",
      analyticsLocations: v
    }),
    onUnblock: () => O({
      action: "UNBLOCK",
      analyticsLocations: v
    })
  }), C = (0, p.A)({
    user: t,
    guildId: n,
    location: A,
    onIgnore: () => O({
      action: "IGNORE",
      analyticsLocations: v
    }),
    onUnignore: () => O({
      action: "UNIGNORE",
      analyticsLocations: v
    })
  }), N = (0, u.A)({
    applicationId: null == S ? true : S.id,
    user: t,
    guildId: n,
    onSubmit: () => O({
      action: "REPORT",
      analyticsLocations: v
    }),
    color: "danger"
  }), w = (0, d.A)({
    id: null == S ? true : S.id,
    label: g.intl.string(g.t["+NP/b2"]),
    onSuccess: () => O({
      action: "COPY_APP_ID",
      analyticsLocations: v
    })
  }), R = [
    [E],
    [C, T, N],
    [(0, c.A)({
      application: S,
      label: g.intl.string(g.t.WqhZss),
      onSuccess: () => O({
        action: "COPY_APP_LINK",
        analyticsLocations: v
      })
    }), w]
  ];
  return R.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(s.YNO, {
    targetElementRef: b,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(s.W1t, {
        "data-menu-mixed": true,
        navId: "user-bot-profile-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": g.intl.string(g.t.AXIHpV),
        children: R.map((e, t) => (0, r.jsx)(s.rXV, {
          children: e.map(e => e)
        }, t))
      })
    },
    children: e => (0, r.jsx)(m.br, y({
      buttonRef: b,
      action: "PRESS_OPTIONS",
      icon: s.jNK,
      tooltipText: g.intl.string(g.t["UKOtz+"])
    }, e))
  })
}