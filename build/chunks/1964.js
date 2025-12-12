/** Chunk was on web.js **/
/** chunk id: 1964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let {
  CAPTCHA: s,
  EMAIL: l,
  PHONE: c,
  REVERIFY_EMAIL: u,
  REVERIFY_PHONE: d
} = Chunk981631.PUi, f = {
  [Chunk981631.c2C.REQUIRE_VERIFIED_EMAIL]: [l],
  [Chunk981631.c2C.REQUIRE_VERIFIED_PHONE]: [c],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_EMAIL]: [u],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_PHONE]: [d],
  [Chunk981631.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, c],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, u],
  [Chunk981631.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, d],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [u, d],
  [Chunk981631.c2C.REQUIRE_CAPTCHA]: [s],
  [Chunk981631.c2C.AGREEMENTS]: [],
  [Chunk981631.c2C.REQUIRE_SAFETY_FLOWS]: []
}, p = {
  isPhoneReverification: (e, t) => true !== e && e.isPhoneVerified() && (t === o.c2C.REQUIRE_REVERIFIED_PHONE || t === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === o.c2C.REQUIRE_REVERIFIED_EMAIL || e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  isFullScreenVerification(e) {
    return e === o.c2C.REQUIRE_CAPTCHA || e === o.c2C.REQUIRE_VERIFIED_EMAIL || e === o.c2C.REQUIRE_VERIFIED_PHONE || e === o.c2C.REQUIRE_REVERIFIED_PHONE || e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e)
  },
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : f[e],
  getButtonTitle(e) {
    switch (e) {
      case o.PUi.EMAIL:
        return a.intl.string(a.t["1MPz27"]);
      case o.PUi.PHONE:
        return a.intl.string(a.t.mjJeco);
      case o.PUi.REVERIFY_EMAIL:
        return a.intl.string(a.t.nmdPFX);
      case o.PUi.REVERIFY_PHONE:
        return a.intl.string(a.t.of2125);
      default:
        return a.intl.string(a.t["oF6+Ww"])
    }
  },
  areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
}