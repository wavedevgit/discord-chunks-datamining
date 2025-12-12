/** Chunk was on web.js **/
/** chunk id: 887505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => E,
  _: () => g
});
var Chunk473749 = require("./473749.js"),
  Chunk844718 = require("./844718.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk626135 = require("./626135.js"),
  Chunk152521 = require("./152521.js"),
  Chunk981631 = require("./981631.js"),
  Chunk545006 = require("./545006.js"),
  Chunk231338 = require("./231338.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = () => {
    let {
      enabled: e
    } = (0, Chunk844718.VL)({
      location: "getBaseAnalyticsEventData"
    });
    return {
      payment_type: Chunk981631.Zuq[Chunk981631.GZQ.ONE_TIME],
      is_gift: false,
      eligible_for_trial: false,
      payment_modal_version: module ? "v2" : Chunk545006.g
    }
  },
  g = (e, t) => {
    let {
      loadId: n,
      skuId: r,
      analyticsLocations: i,
      analyticsSourceLocation: o
    } = t;
    e === c.rMx.PAYMENT_FLOW_CANCELED && s.default.track(c.rMx.PAYMENT_FLOW_CANCELED, p({
      load_id: n,
      application_id: (0, l.Nb)(r),
      location: i,
      location_stack: i,
      payment_gateway: d.ht.VIRTUAL_CURRENCY,
      sku_id: r,
      currency: c.pKx.DISCORD_ORB
    }, null != o && {
      source: o
    }, h()))
  },
  E = e => {
    let {
      skuId: t,
      orbProductContext: n,
      analyticsLocations: i,
      analyticsSourceLocation: u
    } = e, {
      activitySessionId: f,
      hasPaymentSources: _,
      contextMetadata: g
    } = (0, o.JL)(), {
      loadId: E,
      startTime: b
    } = g, y = (0, r.useMemo)(() => {
      var e, r;
      return p(m(p({
        load_id: E,
        application_id: (0, l.Nb)(t),
        location: i,
        location_stack: i,
        sku_id: t,
        activity_session_id: f,
        payment_gateway: d.ht.VIRTUAL_CURRENCY
      }, null != n && {
        price: null != (e = n.orbPriceAmount) ? e : true,
        regular_price: null != (r = n.orbPriceAmount) ? r : true
      }), {
        currency: c.pKx.DISCORD_ORB
      }), null != u && {
        source: u
      }, h())
    }, [E, f, t, i, u, n]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)((e, t) => {
        let n = Date.now() - b;
        e === c.rMx.PAYMENT_FLOW_STARTED ? s.default.track(c.rMx.PAYMENT_FLOW_STARTED, m(p({}, y), {
          has_saved_payment_source: _,
          payment_gateway: d.ht.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === c.rMx.PAYMENT_FLOW_LOADED ? s.default.track(c.rMx.PAYMENT_FLOW_LOADED, m(p({}, y), {
          has_saved_payment_source: _,
          initial_step: a.h8.REVIEW,
          duration_ms: n
        })) : e === c.rMx.PAYMENT_FLOW_CANCELED ? s.default.track(c.rMx.PAYMENT_FLOW_CANCELED, m(p({}, y), {
          duration_ms: n
        })) : e === c.rMx.PAYMENT_FLOW_COMPLETED ? s.default.track(c.rMx.PAYMENT_FLOW_COMPLETED, m(p({}, y), {
          duration_ms: n
        })) : e === c.rMx.PAYMENT_FLOW_SUCCEEDED ? s.default.track(c.rMx.PAYMENT_FLOW_SUCCEEDED, m(p({}, y), {
          duration_ms: n
        })) : e === c.rMx.PAYMENT_FLOW_FAILED && s.default.track(c.rMx.PAYMENT_FLOW_FAILED, p(m(p({}, y), {
          duration_ms: n
        }), null != t ? {
          payment_error_code: t.code,
          error_message: t.message
        } : {}))
      }, [b, y, _])
    }
  }