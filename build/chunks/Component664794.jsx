/** Chunk was on web.js **/
/** chunk id: 664794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk622724 = require("./622724.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  var {
    type: t,
    user: n,
    guildId: m,
    viewProfileItem: b,
    appContext: y
  } = e, O = E(e, ["type", "user", "guildId", "viewProfileItem", "appContext"]);
  let v = i.useRef(null),
    {
      trackUserProfileAction: I
    } = (0, _.KZ)(),
    {
      analyticsLocations: T,
      newestAnalyticsLocation: S
    } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
    A = (0, d.Z)({
      user: n,
      guildId: m,
      onAction: () => I({
        action: "PRESS_INVITE_TO_SERVER",
        analyticsLocations: T
      })
    }),
    N = (0, c.Z)({
      user: n,
      guildId: m,
      location: S,
      color: "danger",
      appContext: y,
      onBlock: () => I({
        action: "BLOCK",
        analyticsLocations: T
      }),
      onIgnore: () => I({
        action: "IGNORE",
        analyticsLocations: T
      }),
      onUnblock: () => I({
        action: "UNBLOCK",
        analyticsLocations: T
      })
    }),
    C = (0, u.Z)({
      user: n,
      guildId: m,
      location: S,
      appContext: y,
      onBlock: () => I({
        action: "BLOCK",
        analyticsLocations: T
      }),
      onIgnore: () => I({
        action: "IGNORE",
        analyticsLocations: T
      }),
      onUnignore: () => I({
        action: "UNIGNORE",
        analyticsLocations: T
      })
    }),
    R = (0, f.Z)({
      user: n,
      guildId: m,
      location: S,
      appContext: y,
      color: "danger",
      onAction: () => I({
        action: "REPORT",
        analyticsLocations: T
      })
    }),
    P = [
      [b, A],
      [C, N, R, (0, f.T)({
        user: n,
        guildId: m,
        location: S,
        appContext: y,
        color: "danger",
        onAction: () => I({
          action: "REPORT",
          analyticsLocations: T
        })
      })],
      [(0, l.Z)({
        id: n.id,
        label: h.intl.string(h.t["/AXYnJ"]),
        onSuccess: () => I({
          action: "COPY_USER_ID",
          analyticsLocations: T
        })
      })]
    ];
  if (P.every(e => e.every(e => null == e))) return null;
  let w = t === p.j8.BANNER ? p.oY : p.ef;
  return (0, r.jsx)(s.Gt, {
    value: T,
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: v,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(a.v2r, {
          navId: "user-profile-overflow-menu",
          onSelect: true,
          onClose: t,
          "aria-label": h.intl.string(h.t.AXIHpa),
          children: P.map((e, t) => (0, r.jsx)(a.kSQ, {
            children: e.map(e => e)
          }, t))
        })
      },
      children: e => (0, r.jsx)(w, g({
        ref: v,
        action: "PRESS_OPTIONS",
        icon: a.xhG,
        tooltipText: h.intl.string(h.t.UKOtz8)
      }, e, O))
    })
  })
}