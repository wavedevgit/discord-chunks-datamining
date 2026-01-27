/** Chunk was on 37372 **/
/** chunk id: 75255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk739508 = require("./739508.js"),
  Chunk652215 = require("./652215.js");
let a = Object.freeze({}),
  c = {
    redeemGiftCode: async function(e) {
      let {
        code: t,
        options: r = a,
        onRedeemed: c,
        onError: u
      } = e, {
        channelId: d = null,
        paymentSource: E = null
      } = r;
      l.h.dispatch({
        type: "GIFT_CODE_REDEEM",
        code: t
      });
      try {
        let e = await n.Bo.post({
          url: s.Rsh.GIFT_CODE_REDEEM(t),
          body: {
            channel_id: d,
            payment_source_id: null == E ? true : E.id,
            gateway_checkout_context: await (0, o.ob)(E)
          },
          oldFormErrors: true,
          rejectWithError: false
        });
        return l.h.dispatch({
          type: "GIFT_CODE_REDEEM_SUCCESS",
          code: t,
          entitlement: e.body
        }), null == c || c(), {
          code: t,
          entitlement: e
        }
      } catch (r) {
        let e = new i.Ey(r);
        throw l.h.dispatch({
          type: "GIFT_CODE_REDEEM_FAILURE",
          code: t,
          error: e
        }), null == u || u(e), e
      }
    }
  }