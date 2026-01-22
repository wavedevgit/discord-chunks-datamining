/** Chunk was on web.js **/
/** chunk id: 490752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
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
  } = (0, _.NJ)(), {
    analyticsLocations: A,
    newestAnalyticsLocation: v
  } = (0, l.Ay)(o.A.USER_PROFILE_OVERFLOW_MENU), S = (0, a.bG)([h.A], () => h.A.getUserProfile(t.id)), I = null == S ? true : S.application, T = (0, f.A)({
    user: t,
    guildId: n,
    location: v,
    color: "danger",
    onBlock: () => O({
      action: "BLOCK",
      analyticsLocations: A
    }),
    onUnblock: () => O({
      action: "UNBLOCK",
      analyticsLocations: A
    })
  }), C = (0, p.A)({
    user: t,
    guildId: n,
    location: v,
    onIgnore: () => O({
      action: "IGNORE",
      analyticsLocations: A
    }),
    onUnignore: () => O({
      action: "UNIGNORE",
      analyticsLocations: A
    })
  }), N = (0, u.A)({
    applicationId: null == I ? true : I.id,
    user: t,
    guildId: n,
    onSubmit: () => O({
      action: "REPORT",
      analyticsLocations: A
    }),
    color: "danger"
  }), R = (0, d.A)({
    id: null == I ? true : I.id,
    label: g.intl.string(g.t["+NP/b2"]),
    onSuccess: () => O({
      action: "COPY_APP_ID",
      analyticsLocations: A
    })
  }), w = [
    [E],
    [C, T, N],
    [(0, c.A)({
      application: I,
      label: g.intl.string(g.t.WqhZss),
      onSuccess: () => O({
        action: "COPY_APP_LINK",
        analyticsLocations: A
      })
    }), R]
  ];
  return w.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(s.YNO, {
    targetElementRef: y,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(s.W1t, {
        navId: "user-bot-profile-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": g.intl.string(g.t.AXIHpV),
        children: w.map((e, t) => (0, r.jsx)(s.rXV, {
          children: e.map(e => e)
        }, t))
      })
    },
    children: e => (0, r.jsx)(m.br, b({
      buttonRef: y,
      action: "PRESS_OPTIONS",
      icon: s.jNK,
      tooltipText: g.intl.string(g.t["UKOtz+"])
    }, e))
  })
}