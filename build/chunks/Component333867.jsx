/** Chunk was on web.js **/
/** chunk id: 333867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk159351 = require("./159351.js"),
  Chunk667 = require("./667.js"),
  Chunk335131 = require("./335131.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk409813 = require("./409813.js"),
  Chunk608579 = require("./608579.jsx"),
  Chunk981631 = require("./981631.js");

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

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = "payment-modal",
  v = "gift-payment-modal",
  I = new Set([Chunk409813.h8.REVIEW, Chunk409813.h8.CONFIRM, Chunk409813.h8.GIFT_CUSTOMIZATION]);

function T(e) {
  let t, {
      skuId: f,
      isGift: h = false,
      giftMessage: g,
      giftingOrigin: y,
      onClose: T,
      onComplete: S,
      analyticsLocations: A,
      analyticsObject: C,
      giftRecipient: N,
      variantsReturnStyle: R
    } = e,
    P = false,
    D = (0, i.Z)(),
    w = e => {
      t = e
    },
    L = h ? v : O,
    x = u.default.getCurrentUser();
  if (!(null == x ? true : x.verified)) return void(0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
    return t => {
      var {
        onClose: n
      } = t, i = b(t, ["onClose"]);
      return (0, r.jsx)(e, E(m({}, i), {
        onClose: () => {
          n(), null == T || T(false)
        }
      }))
    }
  });
  o.Z.wait(() => {
    o.Z.dispatch({
      type: "PAYMENT_MODAL_OPEN"
    })
  }), (0, a.ZDy)(async () => e => {
    var {
      onClose: t,
      returnRef: n
    } = e, i = b(e, ["onClose", "returnRef"]);
    return (0, r.jsx)(_.Z, E(m({}, i), {
      loadId: D,
      skuId: f,
      isGift: h,
      giftMessage: g,
      giftingOrigin: y,
      analyticsLocations: A,
      giftRecipient: N,
      onClose: e => {
        t(), null == T || T(e)
      },
      onComplete: () => {
        P = true, null == S || S()
      },
      returnRef: n,
      onStepChange: w
    }))
  }, {
    modalKey: L,
    onCloseCallback: () => {
      P || d.default.track(p.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: D,
        payment_type: p.Zuq[p.GZQ.ONE_TIME],
        location: C,
        is_gift: h,
        sku_id: f,
        location_stack: A
      }), (0, s.fw)(), (0, l.p)(), null == T || T(P), P && (0, c.qg)({
        variantsReturnStyle: R
      })
    },
    onCloseRequest: () => {
      null != t && I.has(t) && (0, a.Mr3)(L)
    }
  })
}