/** Chunk was on web.js **/
/** chunk id: 711959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => s,
  L: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function o(e) {
  let {
    skuId: t,
    paymentSourceId: n
  } = e;
  i.Z.wait(() => {
    i.Z.dispatch({
      type: "ORDER_CREATE_START"
    })
  });
  try {
    let e = {
        order_line_items: [{
          sku_id: t,
          quantity: 1,
          purchase_type: 0
        }],
        billing_facet: {
          payment_source_id: n
        }
      },
      o = (await r.tn.post({
        url: a.ANM.ORDER_CREATE,
        body: e,
        rejectWithError: true
      })).body.id;
    await i.Z.dispatch({
      type: "ORDER_CREATE_SUCCESS",
      orderId: o
    })
  } catch (e) {
    await i.Z.dispatch({
      type: "ORDER_CREATE_FAIL"
    })
  }
}
async function s(e) {
  let {
    orderId: t,
    updates: {
      paymentSourceId: n
    }
  } = e;
  i.Z.wait(() => {
    i.Z.dispatch({
      type: "ORDER_UPDATE_START"
    })
  });
  try {
    let e = {
      billing_facet: {
        payment_source_id: n
      }
    };
    await r.tn.patch({
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