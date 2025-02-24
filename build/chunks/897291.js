/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => O
});
var r = n(200651),
  i = n(192379),
  o = n(996146),
  a = n(481060),
  s = n(100527),
  l = n(906732),
  c = n(540059),
  u = n(963249),
  d = n(109213),
  f = n(51144),
  p = n(443603),
  _ = n(981631),
  h = n(388032),
  m = n(342203);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    disabled: t,
    channel: i
  } = e, {
    analyticsLocations: g
  } = (0, l.ZP)(s.Z.GIFT_BUTTON), v = (0, f.Ft)(i), {
    Component: y,
    events: O,
    play: S
  } = (0, o.$)(), {
    enabled: I
  } = d.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: !1
  }), T = (0, c.Q3)("ChannelPremiumGiftButton"), N = i.type === _.d4z.DM;
  if (t) return null;
  let A = () => {
    I && N && null != v ? (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59207").then(n.bind(n, 435626));
      return t => (0, r.jsx)(e, E({
        analyticsObject: {
          page: _.ZY5.DM_CHANNEL,
          section: _.jXE.CHANNEL_TEXT_AREA,
          object: _.qAy.BUTTON_ICON,
          objectType: _.Qqv.GIFT
        },
        analyticsLocations: g,
        giftRecipient: v
      }, t))
    }) : (0, u.Z)({
      isGift: !0,
      giftRecipient: null === v ? void 0 : v,
      initialPlanId: null,
      analyticsLocations: g,
      analyticsObject: {
        page: i.isPrivate() ? _.ZY5.DM_CHANNEL : _.ZY5.GUILD_CHANNEL,
        section: _.jXE.CHANNEL_TEXT_AREA,
        object: _.qAy.BUTTON_ICON,
        objectType: _.Qqv.GIFT
      }
    })
  };
  return (0, r.jsx)(a.ua7, {
    text: h.NW.string(h.t.sWtWDQ),
    children: e => (0, r.jsx)(p.Z, b(E(b(E({}, e), {
      innerClassName: m.button,
      isActive: !1,
      "aria-label": h.NW.string(h.t.Z1RnTk),
      "aria-haspopup": "dialog",
      onClick: () => {
        A(), S()
      }
    }), O), {
      children: (0, r.jsx)(y, {
        size: T ? "refresh_sm" : void 0,
        color: "currentColor"
      })
    }))
  })
}
let O = i.memo(y)