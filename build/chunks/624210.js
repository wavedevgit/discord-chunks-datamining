/** Chunk was on web.js **/
/** chunk id: 624210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nl: () => u,
  Ub: () => c,
  fS: () => o,
  iY: () => l
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk224771 = require("./224771.js"),
  Chunk652215 = require("./652215.js");
async function o(e) {
  let {
    skuId: t,
    paymentSourceId: n,
    paymentGateway: o,
    loadId: l
  } = e;
  i.h.wait(() => {
    i.h.dispatch({
      type: "ORDER_CREATE_START"
    })
  });
  try {
    let e = {};
    null != n && (e.payment_source_id = n), null != o && (e.payment_gateway = o);
    let c = {
        order_line_items: [{
          sku_id: t,
          quantity: 1,
          purchase_type: a.BM.ONE_TIME
        }],
        billing_facet: e
      },
      u = (await r.Bo.post({
        url: s.Rsh.ORDER_CREATE,
        body: c,
        context: null != l && "" !== l ? {
          load_id: l
        } : true,
        rejectWithError: true
      })).body;
    if (null == u || null == u.id || "" === u.id) throw Error("Invalid order response");
    return await i.h.dispatch({
      type: "ORDER_CREATE_SUCCESS",
      orderId: u.id,
      order: u
    }), u
  } catch (e) {
    throw await i.h.dispatch({
      type: "ORDER_CREATE_FAIL"
    }), e
  }
}
async function l(e) {
  let {
    orderId: t,
    updates: n
  } = e;
  i.h.wait(() => {
    i.h.dispatch({
      type: "ORDER_UPDATE_START"
    })
  });
  try {
    let e = {};
    "paymentSourceId" in n && (e.billing_facet = {
      payment_source_id: n.paymentSourceId
    }), await r.Bo.patch({
      url: s.Rsh.ORDER_UPDATE(t),
      body: e,
      rejectWithError: true
    }), await i.h.dispatch({
      type: "ORDER_UPDATE_SUCCESS",
      orderId: t
    })
  } catch (e) {
    await i.h.dispatch({
      type: "ORDER_UPDATE_FAIL"
    })
  }
}
async function c(e) {
  let {
    orderId: t,
    expectedRevision: n,
    loadId: i
  } = e;
  try {
    let e = {};
    null != n && (e.expected_revision = n);
    let a = await r.Bo.post({
      url: s.Rsh.ORDER_SIGN(t),
      body: e,
      context: null != i && "" !== i ? {
        load_id: i
      } : true,
      rejectWithError: false
    });
    if (null == a.body) throw Error("Invalid sign order response");
    return a.body
  } catch (e) {
    throw e
  }
}
async function u(e) {
  try {
    let t = await r.Bo.post({
      url: s.Rsh.ORDER_DISCARD(e),
      rejectWithError: false
    });
    if (null == t.body) throw Error("Invalid discard order response");
    return await i.h.dispatch({
      type: "ORDER_DISCARD_SUCCESS",
      orderId: e
    }), t.body
  } catch (e) {
    throw e
  }
}