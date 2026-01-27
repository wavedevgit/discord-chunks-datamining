/** Chunk was on 34078 **/
/** chunk id: 933924, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => h
}), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./457529.js");
var Chunk430370 = require("./430370.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk77729 = require("./77729.js"),
  Chunk954571 = require("./954571.js"),
  Chunk464477 = require("./464477.js"),
  Chunk917136 = require("./917136.js"),
  Chunk652215 = require("./652215.js");
async function h(e) {
  let {
    abortController: t,
    loginSource: r,
    giftCodeSKUId: h
  } = e;
  try {
    if (null == l.A && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable) {
      let e;
      if (!await PublicKeyCredential.isConditionalMediationAvailable()) return;
      let {
        challenge: l,
        ticket: d
      } = await (0, c.Ud)();
      try {
        let r = (0, n.d5)(JSON.parse(l));
        r.signal = t.signal, e = await (0, n.Jt)(r)
      } catch (e) {
        if (!(e instanceof DOMException)) throw e;
        switch (e.name) {
          case "AbortError":
          case "NotAllowedError":
            break;
          default:
            (0, o.Os)(e)
        }
        return
      }
      s.h.dispatch({
        type: "PASSWORDLESS_START"
      }), a.default.track(u.HAw.LOGIN_ATTEMPTED, {
        source: u.mdB.PASSWORDLESS_CONDITIONAL_UI,
        login_method: "passwordless",
        login_source: r,
        gift_code_sku_id: h
      }), await i.A.loginWebAuthn({
        ticket: d,
        credential: JSON.stringify(e),
        source: r,
        giftCodeSKUId: h
      })
    }
  } catch (e) {}
}