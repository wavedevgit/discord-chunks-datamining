/** Chunk was on web.js **/
/** chunk id: 711959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cs: () => l,
  GP: () => c,
  LV: () => s
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk197550 = require("./197550.js"),
  Chunk981631 = require("./981631.js");
async function s(e) {
  let {
    skuId: t,
    paymentSourceId: n,
    paymentGateway: s,
    loadId: l
  } = e;
  i.Z.wait(() => {
    i.Z.dispatch({
      type: "ORDER_CREATE_START"
    })
  });
  try {
    let e = {};
    null != n && (e.payment_source_id = n), null != s && (e.payment_gateway = s);
    let c = {
        order_line_items: [{
          sku_id: t,
          quantity: 1,
          purchase_type: o.bl.ONE_TIME
        }],
        billing_facet: e
      },
      u = (await r.tn.post({
        url: a.ANM.ORDER_CREATE,
        body: c,
        context: null != l && "" !== l ? {
          load_id: l
        } : true,
        rejectWithError: true
      })).body;
    if (null == u || null == u.id || "" === u.id) throw Error("Invalid order response");
    return await i.Z.dispatch({
      type: "ORDER_CREATE_SUCCESS",
      orderId: u.id,
      order: u
    }), u
  } catch (e) {
    throw await i.Z.dispatch({
      type: "ORDER_CREATE_FAIL"
    }), e
  }
}
async function l(e) {
  let {
    orderId: t,
    updates: n
  } = e;
  i.Z.wait(() => {
    i.Z.dispatch({
      type: "ORDER_UPDATE_START"
    })
  });
  try {
    let e = {};
    "paymentSourceId" in n && (e.billing_facet = {
      payment_source_id: n.paymentSourceId
    }), await r.tn.patch({
      url: a.ANM.ORDER_UPDATE(t),
      body: e,
      rejectWithError: true
    }), await i.Z.dispatch({
      type: "ORDER_UPDATE_SUCCESS",
      orderId: t
    })
  } catch (e) {
    await i.Z.dispatch({
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
    let o = await r.tn.post({
      url: a.ANM.ORDER_SIGN(t),
      body: e,
      context: null != i && "" !== i ? {
        load_id: i
      } : true,
      rejectWithError: false
    });
    if (null == o.body) throw Error("Invalid sign order response");
    return o.body
  } catch (e) {
    throw e
  }
}