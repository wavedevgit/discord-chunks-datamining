/** Chunk was on web.js **/
/** chunk id: 679332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let {
    user: t,
    viewProfileItem: n
  } = e, f = i.useRef(null), {
    trackUserProfileAction: _
  } = (0, c.KZ)(), {
    analyticsLocations: m
  } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU), h = [
    [n],
    [(0, l.Z)({
      id: t.id,
      label: d.intl.string(d.t["/AXYnE"]),
      onSuccess: () => _({
        action: "COPY_USER_ID",
        analyticsLocations: m
      })
    })]
  ];
  return h.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(a.yRy, {
    targetElementRef: f,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "non-user-bot-profile-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": d.intl.string(d.t.AXIHpV),
        children: h.map((e, t) => (0, r.jsx)(a.kSQ, {
          children: e.map(e => e)
        }, t))
      })
    },
    children: e => (0, r.jsx)(u.oY, p({
      buttonRef: f,
      action: "PRESS_OPTIONS",
      icon: a.xhG,
      tooltipText: d.intl.string(d.t["UKOtz+"])
    }, e))
  })
}