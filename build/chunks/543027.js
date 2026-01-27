/** Chunk was on web.js **/
/** chunk id: 543027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk224771 = require("./224771.js"),
  Chunk624210 = require("./624210.js"),
  Chunk573582 = require("./573582.js"),
  Chunk224949 = require("./224949.js"),
  Chunk818348 = require("./818348.js");

function u(e) {
  return !d(e)
}

function d(e) {
  var t;
  return (null == e || null == (t = e.billing_facet) ? true : t.payment_gateway) === c.kM.VIRTUAL_CURRENCY
}

function f(e) {
  return null != e.paymentSourceId || null != e.paymentGateway
}

function p(e, t) {
  let n = (0, i.bG)([l.A], () => l.A.currentOrder),
    d = (0, i.bG)([l.A], () => l.A.currentOrderId),
    p = (0, i.bG)([l.A], () => l.A.isCreatingOrder),
    _ = s.A.useExperiment({
      location: "payment_modal"
    }).enabled,
    h = (0, r.useRef)(null),
    m = (0, r.useRef)(""),
    g = (0, r.useRef)(false),
    E = (0, r.useRef)(false),
    y = (0, r.useRef)(null);
  (0, r.useEffect)(() => {
    if (!_ || null == d || null == t.paymentSourceId) return;
    let e = t.paymentSourceId;
    async function r() {
      let r = null != n ? n : await (0, a.r$)(d),
        i = null == r ? true : r.billing_facet;
      if ((null == i ? true : i.payment_source_id) === t.paymentSourceId) {
        h.current = d, m.current = e;
        return
      }
      u(r) && (await (0, o.iY)({
        orderId: d,
        updates: t
      }), h.current = d, m.current = e)
    }(h.current !== d || m.current !== e) && r()
  }, [d, n, t.paymentSourceId, _]), (0, r.useEffect)(() => {
    let e = y.current;
    y.current = d, null == d && null != e ? (E.current = true, h.current = null, m.current = "", g.current = false) : null != d && (E.current = false)
  }, [d]), (0, r.useEffect)(() => {
    var n;
    if (null != d) {
      g.current = false, E.current = false;
      return
    }
    if (E.current || !_ || p || g.current || null == e || !f(t)) return;
    g.current = true;
    let r = t.paymentGateway === c.kM.VIRTUAL_CURRENCY;
    (0, o.fS)({
      skuId: e,
      paymentSourceId: r ? true : null != (n = t.paymentSourceId) ? n : true,
      paymentGateway: t.paymentGateway,
      loadId: t.loadId
    })
  }, [d, p, e, t, _])
}