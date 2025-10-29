/** Chunk was on 41619 **/
/** chunk id: 901375, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  j: () => u
}), require("./49124.js");
var Chunk533126 = require("./533126.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk579806 = require("./579806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk365007 = require("./365007.js"),
  Chunk981631 = require("./981631.js");
async function u(e) {
  let {
    abortController: t,
    loginSource: r,
    giftCodeSKUId: u
  } = e;
  try {
    if (null == a.Z && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable) {
      if (!await PublicKeyCredential.isConditionalMediationAvailable()) return;
      let {
        challenge: e,
        ticket: a
      } = await (0, l.us)(), d = (0, n.wz)(JSON.parse(e));
      d.signal = t.signal;
      let h = await (0, n.U2)(d);
      s.Z.dispatch({
        type: "PASSWORDLESS_START"
      }), o.default.track(c.rMx.LOGIN_ATTEMPTED, {
        source: c.uRl.PASSWORDLESS_CONDITIONAL_UI,
        login_method: "passwordless",
        login_source: r,
        gift_code_sku_id: u
      }), await i.Z.loginWebAuthn({
        ticket: a,
        credential: JSON.stringify(h),
        source: r,
        giftCodeSKUId: u
      })
    }
  } catch (e) {}
}