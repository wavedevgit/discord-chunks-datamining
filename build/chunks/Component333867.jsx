/** Chunk was on web.js **/
/** chunk id: 333867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk159351 = require("./159351.js"),
  Chunk667 = require("./667.js"),
  Chunk844718 = require("./844718.js"),
  Chunk762853 = require("./762853.js"),
  Chunk335131 = require("./335131.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk409813 = require("./409813.js"),
  Chunk608579 = require("./608579.jsx"),
  Chunk981631 = require("./981631.js");

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

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let S = "payment-modal",
  I = "gift-payment-modal",
  T = new Set([Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM, Chunk409813.h8.GIFT_CUSTOMIZATION]);

function C(e) {
  let t, {
      skuId: u,
      analyticsLocations: _,
      analyticsObject: m,
      isGift: g = false,
      giftMessage: b,
      giftingOrigin: v,
      giftRecipient: C,
      onClose: P,
      onComplete: R,
      variantsReturnStyle: w
    } = e,
    D = false,
    x = (0, i.Z)(),
    L = e => {
      t = e
    },
    j = g ? I : S,
    M = f.default.getCurrentUser();
  if (!(null == M ? true : M.verified)) return void(0, o.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
    return t => {
      var {
        onClose: n
      } = t, i = O(t, ["onClose"]);
      return (0, r.jsx)(e, y(E({}, i), {
        onClose: () => {
          n(), null == P || P(false)
        }
      }))
    }
  });
  a.Z.wait(() => {
    a.Z.dispatch({
      type: "PAYMENT_MODAL_OPEN"
    })
  });
  let {
    enabled: k
  } = (0, c.VL)({
    location: "openCollectiblesPaymentModal"
  }), U = () => {
    D || p.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
      load_id: x,
      payment_type: h.Zuq[h.GZQ.ONE_TIME],
      location: m,
      is_gift: g,
      sku_id: u,
      location_stack: _
    }), (0, s.fw)(), (0, l.p)(), null == P || P(D), D && (0, d.qg)({
      variantsReturnStyle: w
    })
  }, G = () => {
    null != t && T.has(t) && (0, o.Mr3)(j)
  }, Z = {
    loadId: x,
    skuId: u,
    analyticsLocations: _,
    onStepChange: L,
    modalKey: j,
    isGift: g,
    giftMessage: b,
    giftingOrigin: v,
    giftRecipient: C,
    onClose: P,
    onCloseCallback: U,
    onCloseRequest: G,
    onComplete: () => {
      D = true, null == R || R()
    }
  };
  if (k) return void A(Z);
  N(Z)
}
let A = e => {
    let {
      loadId: t,
      skuId: n,
      analyticsLocations: r,
      onStepChange: i,
      modalKey: o,
      isGift: a = false,
      giftMessage: s,
      giftingOrigin: l,
      giftRecipient: c,
      onClose: d,
      onCloseCallback: f,
      onCloseRequest: p,
      onComplete: _
    } = e;
    return u.yU.openCheckoutModal({
      loadId: t,
      skuId: n,
      analyticsLocations: r,
      giftContextProps: {
        isGift: a,
        giftMessage: s,
        giftingOrigin: l,
        giftRecipient: c
      },
      onClose: d,
      onComplete: _,
      flowSpecificOptions: {
        onStepChange: i
      },
      openModalOptions: {
        modalKey: o,
        onCloseCallback: f,
        onCloseRequest: p
      }
    })
  },
  N = e => {
    let {
      loadId: t,
      skuId: n,
      analyticsLocations: i,
      onStepChange: a,
      modalKey: s,
      isGift: l = false,
      giftMessage: c,
      giftingOrigin: u,
      giftRecipient: d,
      onClose: f,
      onCloseCallback: p,
      onCloseRequest: _,
      onComplete: h
    } = e;
    return (0, o.ZDy)(async () => e => {
      var {
        onClose: o,
        returnRef: s
      } = e, p = O(e, ["onClose", "returnRef"]);
      return (0, r.jsx)(m.ZP, y(E({}, p), {
        loadId: t,
        skuId: n,
        isGift: l,
        giftMessage: c,
        giftingOrigin: u,
        analyticsLocations: i,
        giftRecipient: d,
        onClose: e => {
          o(), null == f || f(e)
        },
        onComplete: h,
        returnRef: s,
        onStepChange: a
      }))
    }, {
      modalKey: s,
      onCloseCallback: p,
      onCloseRequest: _
    })
  }