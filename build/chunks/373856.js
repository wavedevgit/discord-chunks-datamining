/** Chunk was on web.js **/
/** chunk id: 373856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => g,
  g: () => m
});
var Chunk64700 = require("./64700.js"),
  Chunk769315 = require("./769315.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk954571 = require("./954571.js"),
  Chunk310829 = require("./310829.js"),
  Chunk652215 = require("./652215.js");
require("./322076.js");
var Chunk818348 = require("./818348.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = () => {
    let {
      enabled: e
    } = (0, i.ik)({
      location: "getBaseAnalyticsEventData"
    });
    return {
      payment_type: c.frM[c.VVm.ONE_TIME],
      is_gift: false,
      eligible_for_trial: false,
      payment_modal_version: e ? "v2" : "v1"
    }
  },
  m = (e, t) => {
    let {
      loadId: n,
      skuId: r,
      analyticsLocations: i,
      analyticsSourceLocation: a
    } = t;
    e === c.HAw.PAYMENT_FLOW_CANCELED && o.default.track(c.HAw.PAYMENT_FLOW_CANCELED, f({
      load_id: n,
      application_id: (0, l.p)(r),
      location: i,
      location_stack: i,
      payment_gateway: u.ps.VIRTUAL_CURRENCY,
      sku_id: r,
      currency: c.Yri.DISCORD_ORB
    }, null != a && {
      source: a
    }, h()))
  },
  g = e => {
    let {
      skuId: t,
      orbProductContext: n,
      analyticsLocations: i,
      analyticsSourceLocation: d
    } = e, {
      activitySessionId: p,
      hasPaymentSources: m,
      contextMetadata: g
    } = (0, a.P5)(), {
      loadId: E,
      startTime: y
    } = g, b = (0, r.useMemo)(() => {
      var e, r;
      return f(_(f({
        load_id: E,
        application_id: (0, l.p)(t),
        location: i,
        location_stack: i,
        sku_id: t,
        activity_session_id: p,
        payment_gateway: u.ps.VIRTUAL_CURRENCY
      }, null != n && {
        price: null != (e = n.orbPriceAmount) ? e : true,
        regular_price: null != (r = n.orbPriceAmount) ? r : true
      }), {
        currency: c.Yri.DISCORD_ORB
      }), null != d && {
        source: d
      }, h())
    }, [E, p, t, i, d, n]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)((e, t) => {
        let n = Date.now() - y;
        e === c.HAw.PAYMENT_FLOW_STARTED ? o.default.track(c.HAw.PAYMENT_FLOW_STARTED, _(f({}, b), {
          has_saved_payment_source: m,
          payment_gateway: u.ps.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === c.HAw.PAYMENT_FLOW_LOADED ? o.default.track(c.HAw.PAYMENT_FLOW_LOADED, _(f({}, b), {
          has_saved_payment_source: m,
          initial_step: s.pn.REVIEW,
          duration_ms: n
        })) : e === c.HAw.PAYMENT_FLOW_CANCELED ? o.default.track(c.HAw.PAYMENT_FLOW_CANCELED, _(f({}, b), {
          duration_ms: n
        })) : e === c.HAw.PAYMENT_FLOW_COMPLETED ? o.default.track(c.HAw.PAYMENT_FLOW_COMPLETED, _(f({}, b), {
          duration_ms: n
        })) : e === c.HAw.PAYMENT_FLOW_SUCCEEDED ? o.default.track(c.HAw.PAYMENT_FLOW_SUCCEEDED, _(f({}, b), {
          duration_ms: n
        })) : e === c.HAw.PAYMENT_FLOW_FAILED && o.default.track(c.HAw.PAYMENT_FLOW_FAILED, f(_(f({}, b), {
          duration_ms: n
        }), null != t ? {
          payment_error_code: t.code,
          error_message: t.message
        } : {}))
      }, [y, b, m])
    }
  }