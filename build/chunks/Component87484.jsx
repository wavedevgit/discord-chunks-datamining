/** Chunk was on web.js **/
/** chunk id: 87484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk159351 = require("./159351.js"),
  Chunk667 = require("./667.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    applicationId: t,
    skuId: u,
    onClose: f,
    onComplete: h,
    analyticsLocations: m,
    analyticsLocationObject: g,
    contextKey: E,
    isGift: b = false
  } = e, y = false, O = (0, i.Z)();
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await n.e("61670").then(n.bind(n, 409600));
    return n => {
      var {
        onClose: i
      } = n, a = _(n, ["onClose"]);
      return (0, r.jsx)(e, p(d({}, a), {
        loadId: O,
        applicationId: t,
        skuId: u,
        analyticsLocations: m,
        analyticsLocationObject: g,
        isGift: b,
        onClose: e => {
          i(), null == f || f(e)
        },
        onComplete: e => {
          y = true, null == h || h(e)
        }
      }))
    }
  }, {
    contextKey: E,
    onCloseCallback: () => {
      y || l.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: O,
        payment_type: c.Zuq[c.GZQ.ONE_TIME],
        location: g,
        is_gift: b,
        sku_id: u,
        application_id: t,
        location_stack: m
      }), (0, o.fw)(), (0, s.p)(), null == f || f(y)
    },
    onCloseRequest: c.dG4
  })
}