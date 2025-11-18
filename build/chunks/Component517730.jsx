/** Chunk was on web.js **/
/** chunk id: 517730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = "social-layer-storefront-item-claimed-successfully-modal",
  _ = e => {
    let {
      sku: t,
      application: l,
      analyticsLocations: u
    } = e;
    (0, i.ZDy)(async () => {
      let {
        SocialLayerStorefrontItemClaimedSuccessfullyModal: e
      } = await n.e("21021").then(n.bind(n, 519193));
      return n => (0, r.jsx)(e, d(c({}, n), {
        sku: t,
        application: l,
        analyticsLocations: u
      }))
    }, {
      modalKey: f,
      onCloseCallback: () => {
        a.default.track(s.rMx.SLAYER_STOREFRONT_MODAL_CLOSED, {
          type: o.ng,
          sku_id: t.id,
          application_id: l.id,
          location_stack: null != u ? u : []
        })
      }
    })
  }