/** Chunk was on web.js **/
/** chunk id: 533406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk391048 = require("./391048.js"),
  Chunk636099 = require("./636099.js"),
  Chunk769315 = require("./769315.js"),
  Chunk589078 = require("./589078.js"),
  Chunk954571 = require("./954571.js"),
  Chunk832163 = require("./832163.js"),
  Chunk179935 = require("./179935.js"),
  Chunk556808 = require("./556808.jsx"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = "slayer-payment-modal";

function b(e, t) {
  let {
    isGift: n,
    giftRecipient: r,
    giftingOrigin: a,
    additionalUserIds: c
  } = t, {
    analyticsLocations: h,
    guildId: m
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, g = (0, f.T)({
    location: "openSocialLayerStorefrontPaymentModal"
  }), E = d.A.getSKUEligibility(e.id);
  if (!n && null != m && g && (null == E || "checking" === E || "ineligible" === E)) return void(0, p.L)({
    guildId: m,
    skuId: e.id,
    onContinue: () => b(e, {
      isGift: n,
      giftRecipient: r,
      giftingOrigin: a,
      additionalUserIds: c
    }, {
      analyticsLocations: h,
      guildId: m
    })
  });
  let A = false,
    I = (0, i.A)(),
    {
      enabled: S
    } = (0, l.ik)({
      location: "openCollectiblesPaymentModal"
    }),
    T = () => {
      A || u.default.track(_.HAw.PAYMENT_FLOW_CANCELED, {
        load_id: I,
        payment_type: _.frM[_.VVm.ONE_TIME],
        is_gift: n,
        sku_id: e.id,
        application_id: e.applicationId,
        location_stack: h,
        sku_product_line: e.productLine
      }), (0, o.ET)(), (0, s.z)(), (0, p.l)()
    },
    C = () => {
      A = true
    },
    N = {
      loadId: I,
      skuId: e.id,
      applicationId: e.applicationId,
      analyticsLocations: null != h ? h : [],
      isGift: n,
      giftRecipient: r,
      giftingOrigin: a,
      additionalUserIds: c,
      onCloseCallback: T,
      onComplete: C,
      modalKey: y
    };
  S ? O(N) : v(N)
}
let O = e => {
    let {
      loadId: t,
      applicationId: n,
      skuId: r,
      analyticsLocations: i,
      isGift: a,
      giftRecipient: o,
      giftingOrigin: s,
      onCloseCallback: l,
      onComplete: u,
      modalKey: d
    } = e;
    return (0, c.KY)().openCheckoutModal({
      loadId: t,
      applicationId: n,
      skuId: r,
      analyticsLocations: i,
      onComplete: u,
      giftContextProps: {
        isGift: a,
        giftRecipient: o,
        giftingOrigin: s
      },
      openModalOptions: {
        modalKey: d,
        onCloseCallback: l
      }
    })
  },
  v = e => {
    let {
      loadId: t,
      applicationId: i,
      skuId: o,
      analyticsLocations: s,
      isGift: l,
      giftRecipient: c,
      giftingOrigin: u,
      additionalUserIds: d,
      onCloseCallback: f,
      onComplete: p,
      modalKey: _
    } = e;
    return (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 317042));
      return n => (0, r.jsx)(e, E(m({}, n), {
        loadId: t,
        applicationId: i,
        skuId: o,
        analyticsLocations: s,
        isGift: l,
        giftRecipient: c,
        additionalUserIds: d,
        giftingOrigin: u,
        onComplete: p
      }))
    }, {
      onCloseCallback: f,
      modalKey: _
    })
  }