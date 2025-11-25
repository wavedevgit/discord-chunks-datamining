/** Chunk was on web.js **/
/** chunk id: 887505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => g,
  _: () => m
});
var Chunk473749 = require("./473749.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk626135 = require("./626135.js"),
  Chunk152521 = require("./152521.js"),
  Chunk981631 = require("./981631.js"),
  Chunk545006 = require("./545006.js"),
  Chunk231338 = require("./231338.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
    payment_type: Chunk981631.Zuq[Chunk981631.GZQ.ONE_TIME],
    is_gift: false,
    eligible_for_trial: false,
    payment_modal_version: Chunk545006.g
  },
  m = (e, t) => {
    let {
      loadId: n,
      skuId: r,
      analyticsLocations: i,
      analyticsSourceLocation: a
    } = t;
    e === l.rMx.PAYMENT_FLOW_CANCELED && o.default.track(l.rMx.PAYMENT_FLOW_CANCELED, f({
      load_id: n,
      application_id: (0, s.Nb)(r),
      location: i,
      location_stack: i,
      payment_gateway: u.ht.VIRTUAL_CURRENCY,
      sku_id: r,
      currency: l.pKx.DISCORD_ORB
    }, null != a && {
      source: a
    }, h))
  },
  g = e => {
    let {
      skuId: t,
      orbProductContext: n,
      analyticsLocations: c,
      analyticsSourceLocation: d
    } = e, {
      activitySessionId: _,
      hasPaymentSources: m,
      contextMetadata: g
    } = (0, i.JL)(), {
      loadId: E,
      startTime: b
    } = g, y = (0, r.useMemo)(() => {
      var e, r;
      return f(p(f({
        load_id: E,
        application_id: (0, s.Nb)(t),
        location: c,
        location_stack: c,
        sku_id: t,
        activity_session_id: _,
        payment_gateway: u.ht.VIRTUAL_CURRENCY
      }, null != n && {
        price: null != (e = n.orbPriceAmount) ? e : true,
        regular_price: null != (r = n.orbPriceAmount) ? r : true
      }), {
        currency: l.pKx.DISCORD_ORB
      }), null != d && {
        source: d
      }, h)
    }, [E, _, t, c, d, n]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)((e, t) => {
        let n = Date.now() - b;
        e === l.rMx.PAYMENT_FLOW_STARTED ? o.default.track(l.rMx.PAYMENT_FLOW_STARTED, p(f({}, y), {
          has_saved_payment_source: m,
          payment_gateway: u.ht.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === l.rMx.PAYMENT_FLOW_LOADED ? o.default.track(l.rMx.PAYMENT_FLOW_LOADED, p(f({}, y), {
          has_saved_payment_source: m,
          initial_step: a.h8.REVIEW,
          duration_ms: n
        })) : e === l.rMx.PAYMENT_FLOW_CANCELED ? o.default.track(l.rMx.PAYMENT_FLOW_CANCELED, p(f({}, y), {
          duration_ms: n
        })) : e === l.rMx.PAYMENT_FLOW_COMPLETED ? o.default.track(l.rMx.PAYMENT_FLOW_COMPLETED, p(f({}, y), {
          duration_ms: n
        })) : e === l.rMx.PAYMENT_FLOW_SUCCEEDED ? o.default.track(l.rMx.PAYMENT_FLOW_SUCCEEDED, p(f({}, y), {
          duration_ms: n
        })) : e === l.rMx.PAYMENT_FLOW_FAILED && o.default.track(l.rMx.PAYMENT_FLOW_FAILED, f(p(f({}, y), {
          duration_ms: n
        }), null != t ? {
          payment_error_code: t.code,
          error_message: t.message
        } : {}))
      }, [b, y, m])
    }
  }