/** Chunk was on web.js **/
/** chunk id: 669253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk928658 = require("./928658.js"),
  Chunk239211 = require("./239211.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk888897 = require("./888897.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = e => {
    let {
      appRecord: t,
      closePopout: n,
      selectedGuildId: i,
      selectedChannelId: l,
      children: u = null
    } = e, d = (0, s.A)({
      id: t.id,
      label: c.intl.string(c.t["+NP/b2"])
    });
    return (0, r.jsxs)(a.W1t, {
      "data-menu-mixed": true,
      navId: "authorized-app-action-menu",
      onClose: n,
      "aria-label": c.intl.string(c.t.tKobzb),
      onSelect: true,
      children: [(0, r.jsx)(a.Drp, {
        id: "report",
        label: c.intl.string(c.t["+78Pfm"]),
        color: "danger",
        action: () => (0, o.r3)({
          application: t,
          entrypoint: "authorized_apps_settings",
          contextualGuildId: i,
          contextualChannelId: l
        })
      }), u, d]
    })
  },
  m = e => {
    let {
      appRecord: t,
      botUser: n,
      closePopout: i,
      selectedGuildId: a,
      selectedChannelId: s
    } = e;
    return (0, r.jsx)(h, {
      appRecord: t,
      closePopout: i,
      selectedGuildId: a,
      selectedChannelId: s,
      children: (0, l.A)({
        user: n,
        location: "UserSettingsAuthedApps",
        color: "danger"
      })
    })
  },
  g = e => {
    let {
      appRecord: t,
      selectedGuildId: n,
      selectedChannelId: s
    } = e, o = i.useRef(null);
    return (0, r.jsx)(a.YNO, {
      targetElementRef: o,
      renderPopout: e => {
        let {
          closePopout: i
        } = e;
        return null == t.bot ? (0, r.jsx)(h, {
          appRecord: t,
          closePopout: i,
          selectedGuildId: n,
          selectedChannelId: s
        }) : (0, r.jsx)(m, {
          appRecord: t,
          botUser: t.bot,
          closePopout: i,
          selectedGuildId: n,
          selectedChannelId: s
        })
      },
      align: "right",
      position: "bottom",
      children: e => (0, r.jsx)(a.DUT, _(f({
        innerRef: o,
        className: u.a,
        "aria-label": c.intl.string(c.t["UKOtz+"])
      }, e), {
        children: (0, r.jsx)(a.jNK, {
          size: "xs",
          color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT
        })
      }))
    })
  }