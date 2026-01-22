/** Chunk was on web.js **/
/** chunk id: 743477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk533781 = require("./533781.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk547065 = require("./547065.js"),
  Chunk404036 = require("./404036.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk427262 = require("./427262.js"),
  Chunk545428 = require("./545428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");

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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    disabled: t,
    channel: i
  } = e, {
    analyticsLocations: b
  } = (0, c.Ay)(l.A.GIFT_BUTTON), O = (0, _.R1)(i), {
    Component: v,
    events: S,
    play: I
  } = (0, a.T)(), {
    enabled: T
  } = d.P.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), C = i.type === m.rbe.DM, N = (0, p.tA)({
    location: "gift-button",
    isGift: true,
    giftRecipient: O
  });
  if (t) return null;
  let R = () => {
    N && C && null != O ? (0, f.A)({
      giftRecipient: O,
      analyticsLocations: b,
      analyticsObject: {
        page: i.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
        section: m.JJy.CHANNEL_TEXT_AREA,
        object: m.ZSU.BUTTON_ICON,
        objectType: m.AnalyticsObjectTypes.GIFT
      }
    }) : T && C && null != O ? (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("22841").then(n.bind(n, 561376));
      return t => (0, r.jsx)(e, y({
        analyticsObject: {
          page: m.liQ.DM_CHANNEL,
          section: m.JJy.CHANNEL_TEXT_AREA,
          object: m.ZSU.BUTTON_ICON,
          objectType: m.AnalyticsObjectTypes.GIFT
        },
        analyticsLocations: b,
        giftRecipient: O
      }, t))
    }) : (0, u.A)({
      isGift: true,
      giftRecipient: null === O ? true : O,
      initialPlanId: null,
      analyticsLocations: b,
      analyticsObject: {
        page: i.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
        section: m.JJy.CHANNEL_TEXT_AREA,
        object: m.ZSU.BUTTON_ICON,
        objectType: m.AnalyticsObjectTypes.GIFT
      }
    })
  };
  return (0, r.jsx)(s.m, {
    ariaHidden: N,
    text: g.intl.string(N ? g.t.TW4JV0 : g.t.sWtWDX),
    children: (0, r.jsx)(h.A, A(y({
      className: E.x6,
      isActive: false,
      "aria-label": g.intl.string(N ? g.t.TW4JV0 : g.t.Z1RnTk),
      "aria-haspopup": "dialog",
      onClick: () => {
        R(), I()
      }
    }, S), {
      children: (0, r.jsx)(v, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }))
  })
}
let S = Chunk64700.memo(v)