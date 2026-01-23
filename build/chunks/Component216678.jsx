/** Chunk was on web.js **/
/** chunk id: 216678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk391048 = require("./391048.js"),
  Chunk636099 = require("./636099.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    isGift: y = false
  } = e, b = false, O = (0, i.A)();
  (0, a.mMO)(async () => {
    let {
      default: e
    } = await n.e("53068").then(n.bind(n, 226151));
    return n => {
      let {
        onClose: i
      } = n, a = _(n, ["onClose"]);
      return (0, r.jsx)(e, p(d({}, a), {
        loadId: O,
        applicationId: t,
        skuId: u,
        analyticsLocations: m,
        analyticsLocationObject: g,
        isGift: y,
        onClose: e => {
          i(), null == f || f(e)
        },
        onComplete: e => {
          b = true, null == h || h(e)
        }
      }))
    }
  }, {
    contextKey: E,
    onCloseCallback: () => {
      b || l.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
        load_id: O,
        payment_type: c.frM[c.VVm.ONE_TIME],
        location: g,
        is_gift: y,
        sku_id: u,
        application_id: t,
        location_stack: m
      }), (0, s.ET)(), (0, o.z)(), null == f || f(b)
    },
    onCloseRequest: c.tEg
  })
}