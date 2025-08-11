/** Chunk was on web.js **/
/** chunk id: 679332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk785717 = require("./785717.js"),
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

function _(e) {
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

function p(e) {
  let {
    user: t,
    viewProfileItem: n
  } = e, f = i.useRef(null), {
    trackUserProfileAction: p
  } = (0, c.KZ)(), {
    analyticsLocations: h
  } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU), m = [
    [n],
    [(0, l.Z)({
      id: t.id,
      label: d.intl.string(d.t["/AXYnJ"]),
      onSuccess: () => p({
        action: "COPY_USER_ID",
        analyticsLocations: h
      })
    })]
  ];
  return m.every(e => e.every(e => null == e)) ? null : <o.yRy targetElementRef={f} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "non-user-bot-profile-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": d.intl.string(d.t.AXIHpa),
        children: m.map((e, t) => (0, r.jsx)(o.kSQ, {
          children: e.map(e => e)
        }, t))
      })
    }}>{e => (0, r.jsx)(u.oY, _({
      ref: f,
      action: "PRESS_OPTIONS",
      icon: o.xhG,
      tooltipText: d.intl.string(d.t.UKOtz8)
    }, e))}</o.yRy>
}