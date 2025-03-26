/** Chunk was on 52272 **/
n.d(t, {
  Z: () => c
});
var r = n(544891),
  i = n(570140),
  o = n(881052),
  a = n(122289),
  l = n(981631);
let s = Object.freeze({}),
  c = {
    redeemGiftCode: async function(e) {
      let {
        code: t,
        options: n = s,
        onRedeemed: c,
        onError: u
      } = e, {
        channelId: d = null,
        paymentSource: p = null
      } = n;
      i.Z.dispatch({
        type: "GIFT_CODE_REDEEM",
        code: t
      });
      try {
        let e = await r.tn.post({
          url: l.ANM.GIFT_CODE_REDEEM(t),
          body: {
            channel_id: d,
            payment_source_id: null == p ? void 0 : p.id,
            gateway_checkout_context: await (0, a.cn)(p)
          },
          oldFormErrors: !0,
          rejectWithError: !1
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