/** Chunk was on 34078 **/
/** chunk id: 933924, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => h
}), require("./801460.js"), require("./508300.js"), require("./650828.js");
var Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk77729 = require("./77729.js"),
  Chunk954571 = require("./954571.js"),
  Chunk464477 = require("./464477.js"),
  Chunk917136 = require("./917136.js"),
  Chunk293731 = require("./293731.js"),
  Chunk652215 = require("./652215.js");
async function h(e) {
  let {
    abortController: t,
    loginSource: r,
    giftCodeSKUId: h
  } = e;
  if (null == i.A && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable) {
    let e;
    try {
      if (!await PublicKeyCredential.isConditionalMediationAvailable()) return
    } catch (e) {
      (0, a.Os)(e);
      return
    }
    let {
      challenge: i,
      ticket: d
    } = await (0, o.Ud)();
    try {
      e = await (0, c.J)(i, t.signal)
    } catch (e) {
      if (!(e instanceof DOMException)) throw e;
      switch (e.name) {
        case "AbortError":
        case "NotAllowedError":
          break;
        default:
          (0, a.Os)(e)
      }
      return
    }
    n.h.dispatch({
      type: "PASSWORDLESS_START"
    }), l.default.track(u.HAw.LOGIN_ATTEMPTED, {
      source: u.mdB.PASSWORDLESS_CONDITIONAL_UI,
      login_method: "passwordless",
      login_source: r,
      gift_code_sku_id: h
    }), await s.A.loginWebAuthn({
      ticket: d,
      credential: e,
      source: r,
      giftCodeSKUId: h
    })
  }
}