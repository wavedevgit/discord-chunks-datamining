/** Chunk was on web.js **/
/** chunk id: 659848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk197550 = require("./197550.js"),
  Chunk711959 = require("./711959.js"),
  Chunk526056 = require("./526056.js"),
  Chunk877820 = require("./877820.js"),
  Chunk231338 = require("./231338.js");

function u(e) {
  return !d(e)
}

function d(e) {
  var t;
  return (null == e || null == (t = e.billing_facet) ? true : t.payment_gateway) === c.gg.VIRTUAL_CURRENCY
}

function f(e) {
  return null != e.paymentSourceId || null != e.paymentGateway
}

function p(e, t) {
  let n = (0, i.e7)([l.Z], () => l.Z.currentOrder),
    d = (0, i.e7)([l.Z], () => l.Z.currentOrderId),
    p = (0, i.e7)([l.Z], () => l.Z.isCreatingOrder),
    _ = s.Z.useExperiment({
      location: "payment_modal"
    }).enabled,
    m = (0, r.useRef)(null),
    h = (0, r.useRef)(""),
    g = (0, r.useRef)(false),
    E = (0, r.useRef)(false),
    b = (0, r.useRef)(null);
  (0, r.useEffect)(() => {
    if (!_ || null == d || null == t.paymentSourceId) return;
    let e = t.paymentSourceId;
    async function r() {
      let r = null != n ? n : await (0, a.co)(d),
        i = null == r ? true : r.billing_facet;
      if ((null == i ? true : i.payment_source_id) === t.paymentSourceId) {
        m.current = d, h.current = e;
        return
      }
      u(r) && (await (0, o.Cs)({
        orderId: d,
        updates: t
      }), m.current = d, h.current = e)
    }(m.current !== d || h.current !== e) && r()
  }, [d, n, t.paymentSourceId, _]), (0, r.useEffect)(() => {
    let e = b.current;
    b.current = d, null == d && null != e ? (E.current = true, m.current = null, h.current = "", g.current = false) : null != d && (E.current = false)
  }, [d]), (0, r.useEffect)(() => {
    var n;
    if (null != d) {
      g.current = false, E.current = false;
      return
    }
    if (E.current || !_ || p || g.current || null == e || !f(t)) return;
    g.current = true;
    let r = t.paymentGateway === c.gg.VIRTUAL_CURRENCY;
    (0, o.LV)({
      skuId: e,
      paymentSourceId: r ? true : null != (n = t.paymentSourceId) ? n : true,
      paymentGateway: t.paymentGateway,
      loadId: t.loadId
    })
  }, [d, p, e, t, _])
}