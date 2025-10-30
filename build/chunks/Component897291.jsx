/** Chunk was on web.js **/
/** chunk id: 897291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk996146 = require("./996146.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk109213 = require("./109213.js"),
  Chunk51144 = require("./51144.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744114 = require("./744114.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    disabled: t,
    channel: i
  } = e, {
    analyticsLocations: g
  } = (0, c.ZP)(l.Z.GIFT_BUTTON), b = (0, f.Ft)(i), {
    Component: O,
    events: v,
    play: I
  } = (0, a.$)(), {
    enabled: T
  } = d.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), S = i.type === p.d4z.DM;
  if (t) return null;
  let A = () => {
    T && S && null != b ? (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59207").then(n.bind(n, 435626));
      return t => (0, r.jsx)(e, E({
        analyticsObject: {
          page: p.ZY5.DM_CHANNEL,
          section: p.jXE.CHANNEL_TEXT_AREA,
          object: p.qAy.BUTTON_ICON,
          objectType: p.AnalyticsObjectTypes.GIFT
        },
        analyticsLocations: g,
        giftRecipient: b
      }, t))
    }) : (0, u.Z)({
      isGift: true,
      giftRecipient: null === b ? true : b,
      initialPlanId: null,
      analyticsLocations: g,
      analyticsObject: {
        page: i.isPrivate() ? p.ZY5.DM_CHANNEL : p.ZY5.GUILD_CHANNEL,
        section: p.jXE.CHANNEL_TEXT_AREA,
        object: p.qAy.BUTTON_ICON,
        objectType: p.AnalyticsObjectTypes.GIFT
      }
    })
  };
  return (0, r.jsx)(o.u, {
    text: h.intl.string(h.t.sWtWDX),
    children: (0, r.jsx)(_.Z, y(E({
      className: m.button,
      isActive: false,
      "aria-label": h.intl.string(h.t.Z1RnTk),
      "aria-haspopup": "dialog",
      onClick: () => {
        A(), I()
      }
    }, v), {
      children: (0, r.jsx)(O, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }))
  })
}
let v = Chunk647438.memo(O)