/** Chunk was on web.js **/
/** chunk id: 75255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk739508 = require("./739508.js"),
  Chunk652215 = require("./652215.js");
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
      i.h.dispatch({
        type: "GIFT_CODE_REDEEM",
        code: t
      });
      try {
        let e = await r.Bo.post({
          url: o.Rsh.GIFT_CODE_REDEEM(t),
          body: {
            channel_id: d,
            payment_source_id: null == f ? true : f.id,
            gateway_checkout_context: await (0, s.ob)(f)
          },
          oldFormErrors: true,
          rejectWithError: false
        });
        return i.h.dispatch({
          type: "GIFT_CODE_REDEEM_SUCCESS",
          code: t,
          entitlement: e.body
        }), null == c || c(), {
          code: t,
          entitlement: e
        }
      } catch (n) {
        let e = new a.Ey(n);
        throw i.h.dispatch({
          type: "GIFT_CODE_REDEEM_FAILURE",
          code: t,
          error: e
        }), null == u || u(e), e
      }
    }
  }