/** Chunk was on web.js **/
/** chunk id: 980463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gq: () => p,
  SN: () => g,
  gA: () => _,
  qc: () => m,
  zI: () => h
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk343817 = require("./343817.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959546 = require("./959546.js"),
  Chunk992970 = require("./992970.js"),
  Chunk317951 = require("./317951.js"),
  Chunk287941 = require("./287941.js"),
  Chunk235894 = require("./235894.js"),
  Chunk981631 = require("./981631.js");
let f = {
    [Chunk317951.D1]: Chunk981631.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
    [Chunk317951.FX]: Chunk981631.ANM.FETCH_HD_STREAMING_ENTITLEMENT
  },
  p = async e => {
    o.Z.dispatch({
      type: "CONSUMABLES_PRICE_FETCH_STARTED",
      skuId: e
    });
    try {
      let t = await r.tn.get({
        url: d.ANM.CONSUMABLE_FETCH_PRICE(e),
        rejectWithError: false
      });
      if (null == t.body.price) throw o.Z.dispatch({
        type: "CONSUMABLES_PRICE_FETCH_FAILED",
        skuId: e
      }), Error("price not found");
      let n = t.body.price;
      return o.Z.dispatch({
        type: "CONSUMABLES_PRICE_FETCH_SUCCEEDED",
        skuId: e,
        price: n
      }), {
        amount: n.amount,
        currency: n.currency,
        exponent: n.currency_exponent
      }
    } catch (t) {
      throw o.Z.dispatch({
        type: "CONSUMABLES_PRICE_FETCH_FAILED",
        skuId: e
      }), new i.Hx(t)
    }
  }, _ = async e => {
    if (o.Z.dispatch({
        type: "CONSUMABLES_ENTITLEMENT_FETCH_STARTED",
        skuId: e
      }), null == f[e]) throw o.Z.dispatch({
      type: "CONSUMABLES_ENTITLEMENT_FETCH_FAILED",
      skuId: e
    }), Error("Invalid consumable skuId: ".concat(e));
    try {
      let t = await r.tn.get({
          url: f[e],
          rejectWithError: false
        }),
        n = null != t.body.entitlement ? a.Z.createFromServer(t.body.entitlement) : null,
        i = t.body.num_potions;
      return o.Z.dispatch({
        type: "CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED",
        skuId: e,
        entitlement: n,
        numPotions: i
      }), t.body.entitlement
    } catch (t) {
      throw o.Z.dispatch({
        type: "CONSUMABLES_ENTITLEMENT_FETCH_FAILED",
        skuId: e
      }), new i.Hx(t)
    }
  }, m = async (e, t, n) => {
    try {
      await r.tn.post({
        url: d.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
        body: {
          channel_id: e,
          message_id: t,
          emoji_name: h(n)
        },
        rejectWithError: false
      }), o.Z.dispatch({
        type: "CLEAR_CONSUMED_ENTITLEMENT",
        skuId: l.D1
      })
    } catch (e) {
      throw new i.Hx(e)
    }
    let a = (0, u.NV)(n);
    (0, c.I)(a, true, true, s.LL.MessageSent)
  }, h = e => null != e.id ? "".concat(e.name, ":").concat(e.id) : e.optionallyDiverseSequence, g = e => {
    o.Z.dispatch({
      type: "CONSUMABLES_CLEAR_ERROR",
      skuId: e
    })
  }