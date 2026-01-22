/** Chunk was on 34078 **/
/** chunk id: 933924, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => u
}), require("./457529.js");
var Chunk430370 = require("./430370.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk77729 = require("./77729.js"),
  Chunk954571 = require("./954571.js"),
  Chunk917136 = require("./917136.js"),
  Chunk652215 = require("./652215.js");
async function u(e) {
  let {
    abortController: t,
    loginSource: r,
    giftCodeSKUId: u
  } = e;
  try {
    if (null == a.A && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable) {
      if (!await PublicKeyCredential.isConditionalMediationAvailable()) return;
      let {
        challenge: e,
        ticket: a
      } = await (0, o.Ud)(), d = (0, n.d5)(JSON.parse(e));
      d.signal = t.signal;
      let h = await (0, n.Jt)(d);
      s.h.dispatch({
        type: "PASSWORDLESS_START"
      }), l.default.track(c.HAw.LOGIN_ATTEMPTED, {
        source: c.mdB.PASSWORDLESS_CONDITIONAL_UI,
        login_method: "passwordless",
        login_source: r,
        gift_code_sku_id: u
      }), await i.A.loginWebAuthn({
        ticket: a,
        credential: JSON.stringify(h),
        source: r,
        giftCodeSKUId: u
      })
    }
  } catch (e) {}
}