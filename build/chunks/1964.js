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
  isPhoneReverification: (e, t) => true !== e && e.isPhoneVerified() && (t === a.c2C.REQUIRE_REVERIFIED_PHONE || t === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === a.c2C.REQUIRE_REVERIFIED_EMAIL || e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  isFullScreenVerification(e) {
    return e === a.c2C.REQUIRE_CAPTCHA || e === a.c2C.REQUIRE_VERIFIED_EMAIL || e === a.c2C.REQUIRE_VERIFIED_PHONE || e === a.c2C.REQUIRE_REVERIFIED_PHONE || e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e)
  },
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : f[e],
  getButtonTitle(e) {
    switch (e) {
      case a.PUi.EMAIL:
        return o.intl.string(o.t["1MPz27"]);
      case a.PUi.PHONE:
        return o.intl.string(o.t.mjJeco);
      case a.PUi.REVERIFY_EMAIL:
        return o.intl.string(o.t.nmdPFX);
      case a.PUi.REVERIFY_PHONE:
        return o.intl.string(o.t.of2125);
      default:
        return o.intl.string(o.t["oF6+Ww"])
    }
  },
  areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
}