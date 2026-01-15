/** Chunk was on web.js **/
/** chunk id: 333867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk301167 = require("./301167.js"),
  Chunk608579 = require("./608579.jsx"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = "payment-modal",
  T = "gift-payment-modal",
  C = new Set([Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM, Chunk409813.h8.GIFT_CUSTOMIZATION]);

function A(e) {
  let t, {
      skuId: u,
      analyticsLocations: _,
      analyticsObject: m,
      isGift: E = false,
      giftMessage: y,
      giftingOrigin: S,
      giftRecipient: A,
      onClose: w,
      onComplete: R,
      variantsReturnStyle: D
    } = e,
    x = false,
    L = (0, i.Z)(),
    j = e => {
      t = e
    },
    M = E ? T : I,
    k = f.default.getCurrentUser();
  if (!(null == k ? true : k.verified)) return void(0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
    return t => {
      var {
        onClose: n
      } = t, i = v(t, ["onClose"]);
      return (0, r.jsx)(e, O(b({}, i), {
        onClose: () => {
          n(), null == w || w(false)
        }
      }))
    }
  });
  o.Z.wait(() => {
    o.Z.dispatch({
      type: "PAYMENT_MODAL_OPEN"
    })
  });
  let {
    enabled: U
  } = (0, c.VL)({
    location: "openCollectiblesPaymentModal"
  }), G = () => {
    (0, h.x)({
      checkoutSucceeded: x
    }), x || p.default.track(g.rMx.PAYMENT_FLOW_CANCELED, {
      load_id: L,
      payment_type: g.Zuq[g.GZQ.ONE_TIME],
      location: m,
      is_gift: E,
      sku_id: u,
      location_stack: _
    }), (0, s.fw)(), (0, l.p)(), null == w || w(x), x && (0, d.qg)({
      variantsReturnStyle: D
    })
  }, Z = () => {
    null != t && C.has(t) && (0, a.Mr3)(M)
  }, F = {
    loadId: L,
    skuId: u,
    analyticsLocations: _,
    onStepChange: j,
    modalKey: M,
    isGift: E,
    giftMessage: y,
    giftingOrigin: S,
    giftRecipient: A,
    onClose: w,
    onCloseCallback: G,
    onCloseRequest: Z,
    onComplete: () => {
      x = true, null == R || R()
    }
  };
  if (U) return void N(F);
  P(F)
}
let N = e => {
    let {
      loadId: t,
      skuId: n,
      analyticsLocations: r,
      onStepChange: i,
      modalKey: a,
      isGift: o = false,
      giftMessage: s,
      giftingOrigin: l,
      giftRecipient: c,
      onClose: d,
      onCloseCallback: f,
      onCloseRequest: p,
      onComplete: _
    } = e;
    return (0, u.h4)().openCheckoutModal({
      loadId: t,
      skuId: n,
      analyticsLocations: r,
      giftContextProps: {
        isGift: o,
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
        modalKey: a,
        onCloseCallback: f,
        onCloseRequest: p
      }
    })
  },
  P = e => {
    let {
      loadId: t,
      skuId: n,
      analyticsLocations: i,
      onStepChange: o,
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
    return (0, a.ZDy)(async () => e => {
      var {
        onClose: a,
        returnRef: s
      } = e, p = v(e, ["onClose", "returnRef"]);
      return (0, r.jsx)(m.ZP, O(b({}, p), {
        loadId: t,
        skuId: n,
        isGift: l,
        giftMessage: c,
        giftingOrigin: u,
        analyticsLocations: i,
        giftRecipient: d,
        onClose: e => {
          a(), null == f || f(e)
        },
        onComplete: h,
        returnRef: s,
        onStepChange: o
      }))
    }, {
      modalKey: s,
      onCloseCallback: p,
      onCloseRequest: _
    })
  }