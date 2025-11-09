/** Chunk was on web.js **/
/** chunk id: 897291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
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
  Chunk998030 = require("./998030.js"),
  Chunk909917 = require("./909917.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744114 = require("./744114.js");

function b(e, t, n) {
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
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let {
    disabled: t,
    channel: i
  } = e, {
    analyticsLocations: b
  } = (0, c.ZP)(l.Z.GIFT_BUTTON), O = (0, p.Ft)(i), {
    Component: I,
    events: S,
    play: T
  } = (0, a.$)(), {
    enabled: A
  } = d.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), C = (0, f.yc)({
    location: "gift-button"
  }), N = i.type === m.d4z.DM;
  if (t) return null;
  let R = () => {
    C && N && null != O ? (0, _.Z)({
      giftRecipient: O,
      analyticsLocations: b,
      analyticsObject: {
        page: i.isPrivate() ? m.ZY5.DM_CHANNEL : m.ZY5.GUILD_CHANNEL,
        section: m.jXE.CHANNEL_TEXT_AREA,
        object: m.qAy.BUTTON_ICON,
        objectType: m.AnalyticsObjectTypes.GIFT
      }
    }) : A && N && null != O ? (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59207").then(n.bind(n, 435626));
      return t => (0, r.jsx)(e, y({
        analyticsObject: {
          page: m.ZY5.DM_CHANNEL,
          section: m.jXE.CHANNEL_TEXT_AREA,
          object: m.qAy.BUTTON_ICON,
          objectType: m.AnalyticsObjectTypes.GIFT
        },
        analyticsLocations: b,
        giftRecipient: O
      }, t))
    }) : (0, u.Z)({
      isGift: true,
      giftRecipient: null === O ? true : O,
      initialPlanId: null,
      analyticsLocations: b,
      analyticsObject: {
        page: i.isPrivate() ? m.ZY5.DM_CHANNEL : m.ZY5.GUILD_CHANNEL,
        section: m.jXE.CHANNEL_TEXT_AREA,
        object: m.qAy.BUTTON_ICON,
        objectType: m.AnalyticsObjectTypes.GIFT
      }
    })
  };
  return (0, r.jsx)(o.u, {
    text: g.intl.string(g.t.sWtWDX),
    children: (0, r.jsx)(h.Z, v(y({
      className: E.button,
      isActive: false,
      "aria-label": g.intl.string(g.t.Z1RnTk),
      "aria-haspopup": "dialog",
      onClick: () => {
        R(), T()
      }
    }, S), {
      children: (0, r.jsx)(I, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }))
  })
}
let S = Chunk647438.memo(I)