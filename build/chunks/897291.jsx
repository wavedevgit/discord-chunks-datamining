/** Chunk was on web.js **/
/** chunk id: 897291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk996146 = require("./996146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk963249 = require("./963249.js"),
  Chunk109213 = require("./109213.js"),
  Chunk51144 = require("./51144.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302195 = require("./302195.js");

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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    disabled: t,
    channel: i
  } = e, {
    analyticsLocations: m
  } = (0, l.ZP)(s.Z.GIFT_BUTTON), E = (0, d.Ft)(i), {
    Component: y,
    events: O,
    play: v
  } = (0, o.$)(), {
    enabled: I
  } = u.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), T = i.type === _.d4z.DM;
  if (t) return null;
  let S = () => {
    I && T && null != E ? (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59207").then(n.bind(n, 435626));
      return t => <e{...g({
        analyticsObject: {
          page: _.ZY5.DM_CHANNEL,
          section: _.jXE.CHANNEL_TEXT_AREA,
          object: _.qAy.BUTTON_ICON,
          objectType: _.Qqv.GIFT
        },
        analyticsLocations: m,
        giftRecipient: E
      }, t)} />
    }) : (0, c.Z)({
      isGift: true,
      giftRecipient: null === E ? true : E,
      initialPlanId: null,
      analyticsLocations: m,
      analyticsObject: {
        page: i.isPrivate() ? _.ZY5.DM_CHANNEL : _.ZY5.GUILD_CHANNEL,
        section: _.jXE.CHANNEL_TEXT_AREA,
        object: _.qAy.BUTTON_ICON,
        objectType: _.Qqv.GIFT
      }
    })
  };
  return <a.ua7 text={p.intl.string(p.t.sWtWDQ)}>{e => (0, r.jsx)(f.Z, b(g(b(g({}, e), {
      className: h.button,
      isActive: false,
      "aria-label": p.intl.string(p.t.Z1RnTk),
      "aria-haspopup": "dialog",
      onClick: () => {
        S(), v()
      }
    }), O), {
      children: (0, r.jsx)(y, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }))}</a.ua7>
}
let O = Chunk73800.memo(y)