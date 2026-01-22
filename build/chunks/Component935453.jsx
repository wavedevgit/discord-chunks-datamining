/** Chunk was on web.js **/
/** chunk id: 935453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => _
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

function _(e) {
  let {
    guildProductListing: t,
    guildId: u,
    sourceAnalyticsLocations: f
  } = e, _ = false, h = (0, i.A)(), m = t.id, g = () => {
    _ = true
  };
  (0, a.mMO)(async () => {
    let {
      default: e
    } = await n.e("41469").then(n.bind(n, 35052));
    return n => (0, r.jsx)(e, p(d({}, n), {
      applicationId: t.application_id,
      skuId: m,
      sourceAnalyticsLocations: f,
      guildProductContext: {
        guildProductListingId: t.id,
        guildId: u
      },
      loadId: h,
      onComplete: g
    }))
  }, {
    onCloseCallback: () => {
      _ || l.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
        load_id: h,
        payment_type: c.frM[c.VVm.ONE_TIME],
        is_gift: false,
        sku_id: m,
        location_stack: Array.isArray(f) ? f : [f]
      }), (0, s.ET)(), (0, o.z)()
    },
    onCloseRequest: c.tEg
  })
}