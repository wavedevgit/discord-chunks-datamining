/** Chunk was on web.js **/
/** chunk id: 44120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk391048 = require("./391048.js"),
  Chunk636099 = require("./636099.js"),
  Chunk769315 = require("./769315.js"),
  Chunk589078 = require("./589078.js"),
  Chunk979286 = require("./979286.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk166532 = require("./166532.js"),
  Chunk301518 = require("./301518.js"),
  Chunk165823 = require("./165823.jsx"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
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
      E(e, t, n[t])
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

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let I = "payment-modal",
  S = "gift-payment-modal",
  T = new Set([Chunk166532.pn.REVIEW, Chunk166532.pn.CONFIRM, Chunk166532.pn.GIFT_CUSTOMIZATION]);

function C(e) {
  let t, {
      skuId: u,
      analyticsLocations: _,
      analyticsObject: m,
      isGift: E = false,
      giftMessage: b,
      giftingOrigin: A,
      giftRecipient: C,
      onClose: R,
      onComplete: P,
      variantsReturnStyle: D
    } = e,
    x = false,
    L = (0, i.A)(),
    j = e => {
      t = e
    },
    M = E ? S : I,
    k = f.default.getCurrentUser();
  if (!(null == k ? true : k.verified)) return void(0, a.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
    return t => {
      let {
        onClose: n
      } = t, i = v(t, ["onClose"]);
      return (0, r.jsx)(e, O(y({}, i), {
        onClose: () => {
          n(), null == R || R(false)
        }
      }))
    }
  });
  s.h.wait(() => {
    s.h.dispatch({
      type: "PAYMENT_MODAL_OPEN"
    })
  });
  let {
    enabled: U
  } = (0, c.ik)({
    location: "openCollectiblesPaymentModal"
  }), G = () => {
    (0, h.S)({
      checkoutSucceeded: x
    }), x || p.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
      load_id: L,
      payment_type: g.frM[g.VVm.ONE_TIME],
      location: m,
      is_gift: E,
      sku_id: u,
      location_stack: _
    }), (0, o.ET)(), (0, l.z)(), null == R || R(x), x && (0, d.gB)({
      variantsReturnStyle: D
    })
  }, V = () => {
    null != t && T.has(t) && (0, a.OoC)(M)
  }, F = {
    loadId: L,
    skuId: u,
    analyticsLocations: _,
    onStepChange: j,
    modalKey: M,
    isGift: E,
    giftMessage: b,
    giftingOrigin: A,
    giftRecipient: C,
    onClose: R,
    onCloseCallback: G,
    onCloseRequest: V,
    onComplete: () => {
      x = true, null == P || P()
    }
  };
  U ? N(F) : w(F)
}
let N = e => {
    let {
      loadId: t,
      skuId: n,
      analyticsLocations: r,
      onStepChange: i,
      modalKey: a,
      isGift: s = false,
      giftMessage: o,
      giftingOrigin: l,
      giftRecipient: c,
      onClose: d,
      onCloseCallback: f,
      onCloseRequest: p,
      onComplete: _
    } = e;
    return (0, u.Tx)().openCheckoutModal({
      loadId: t,
      skuId: n,
      analyticsLocations: r,
      giftContextProps: {
        isGift: s,
        giftMessage: o,
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
  w = e => {
    let {
      loadId: t,
      skuId: n,
      analyticsLocations: i,
      onStepChange: s,
      modalKey: o,
      isGift: l = false,
      giftMessage: c,
      giftingOrigin: u,
      giftRecipient: d,
      onClose: f,
      onCloseCallback: p,
      onCloseRequest: _,
      onComplete: h
    } = e;
    return (0, a.mMO)(async () => e => {
      let {
        onClose: a,
        returnRef: o
      } = e, p = v(e, ["onClose", "returnRef"]);
      return (0, r.jsx)(m.Ay, O(y({}, p), {
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
        returnRef: o,
        onStepChange: s
      }))
    }, {
      modalKey: o,
      onCloseCallback: p,
      onCloseRequest: _
    })
  }