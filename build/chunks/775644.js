/** Chunk was on web.js **/
/** chunk id: 775644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk122289 = require("./122289.js"),
  Chunk981631 = require("./981631.js");
let l = Object.freeze({}),
  c = {
    redeemGiftCode: async function(e) {
      let {
        code: t,
        options: n = l,
        onRedeemed: c,
        onError: u
      } = e, {
        channelId: d = null,
        paymentSource: f = null
      } = n;
      i.Z.dispatch({
        type: "GIFT_CODE_REDEEM",
        code: t
      });
      try {
        let e = await r.tn.post({
          url: s.ANM.GIFT_CODE_REDEEM(t),
          body: {
            channel_id: d,
            payment_source_id: null == f ? true : f.id,
            gateway_checkout_context: await (0, a.cn)(f)
          },
          oldFormErrors: true,
          rejectWithError: false
        });
        return i.Z.dispatch({
          type: "GIFT_CODE_REDEEM_SUCCESS",
          code: t,
          entitlement: e.body
        }), null == c || c(), {
          code: t,
          entitlement: e
        }
      } catch (n) {
        let e = new o.HF(n);
        throw i.Z.dispatch({
          type: "GIFT_CODE_REDEEM_FAILURE",
          code: t,
          error: e
        }), null == u || u(e), e
      }
    }
  }