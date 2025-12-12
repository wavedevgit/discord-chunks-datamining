/** Chunk was on web.js **/
/** chunk id: 57949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => _
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

function _(e) {
  let {
    guildProductListing: t,
    guildId: u,
    sourceAnalyticsLocations: f
  } = e, _ = false, m = (0, i.Z)(), h = t.id, g = () => {
    _ = true
  };
  (0, o.ZDy)(async () => {
    let {
      default: e
    } = await n.e("88806").then(n.bind(n, 578780));
    return n => (0, r.jsx)(e, p(d({}, n), {
      applicationId: t.application_id,
      skuId: h,
      sourceAnalyticsLocations: f,
      guildProductContext: {
        guildProductListingId: t.id,
        guildId: u
      },
      loadId: m,
      onComplete: g
    }))
  }, {
    onCloseCallback: () => {
      _ || l.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: m,
        payment_type: c.Zuq[c.GZQ.ONE_TIME],
        is_gift: false,
        sku_id: h,
        location_stack: Array.isArray(f) ? f : [f]
      }), (0, a.fw)(), (0, s.p)()
    },
    onCloseRequest: c.dG4
  })
}