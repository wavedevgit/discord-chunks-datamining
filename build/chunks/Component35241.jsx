/** Chunk was on web.js **/
/** chunk id: 35241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk985018 = require("./985018.jsx");

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
  } = (0, c.NJ)(), {
    analyticsLocations: h
  } = (0, o.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU), m = [
    [n],
    [(0, l.A)({
      id: t.id,
      label: d.intl.string(d.t["/AXYnE"]),
      onSuccess: () => _({
        action: "COPY_USER_ID",
        analyticsLocations: h
      })
    })]
  ];
  return m.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(a.YNO, {
    targetElementRef: f,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.W1t, {
        navId: "non-user-bot-profile-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": d.intl.string(d.t.AXIHpV),
        children: m.map((e, t) => (0, r.jsx)(a.rXV, {
          children: e.map(e => e)
        }, t))
      })
    },
    children: e => (0, r.jsx)(u.br, p({
      buttonRef: f,
      action: "PRESS_OPTIONS",
      icon: a.jNK,
      tooltipText: d.intl.string(d.t["UKOtz+"])
    }, e))
  })
}