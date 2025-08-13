/** Chunk was on 25761 **/
/** chunk id: 901375, original params: e,t,n (module,exports,require) **/
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
    loginSource: n,
    giftCodeSKUId: u
  } = e;
  try {
    if (null == a.Z && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable) {
      if (!await PublicKeyCredential.isConditionalMediationAvailable()) return;
      let {
        challenge: e,
        ticket: a
      } = await (0, o.us)(), d = (0, r.wz)(JSON.parse(e));
      d.signal = t.signal;
      let p = await (0, r.U2)(d);
      s.Z.dispatch({
        type: "PASSWORDLESS_START"
      }), l.default.track(c.rMx.LOGIN_ATTEMPTED, {
        source: c.uRl.PASSWORDLESS_CONDITIONAL_UI,
        login_method: "passwordless",
        login_source: n,
        gift_code_sku_id: u
      }), await i.Z.loginWebAuthn({
        ticket: a,
        credential: JSON.stringify(p),
        source: n,
        giftCodeSKUId: u
      })
    }
  } catch (e) {}
}