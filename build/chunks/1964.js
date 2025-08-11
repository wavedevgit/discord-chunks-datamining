/** Chunk was on 76540 **/
/** chunk id: 1964, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");
let {
  CAPTCHA: o,
  EMAIL: a,
  PHONE: c,
  REVERIFY_EMAIL: h,
  REVERIFY_PHONE: u
} = Chunk981631.PUi, d = {
  [Chunk981631.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
  [Chunk981631.c2C.REQUIRE_VERIFIED_PHONE]: [c],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_EMAIL]: [h],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
  [Chunk981631.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, c],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, h],
  [Chunk981631.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, u],
  [Chunk981631.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [h, u],
  [Chunk981631.c2C.REQUIRE_CAPTCHA]: [o],
  [Chunk981631.c2C.AGREEMENTS]: [],
  [Chunk981631.c2C.REQUIRE_SAFETY_FLOWS]: []
}, E = {
  isPhoneReverification: (e, t) => true !== e && e.isPhoneVerified() && (t === r.c2C.REQUIRE_REVERIFIED_PHONE || t === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === r.c2C.REQUIRE_REVERIFIED_EMAIL || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  isFullScreenVerification(e) {
    return e === r.c2C.REQUIRE_CAPTCHA || e === r.c2C.REQUIRE_VERIFIED_EMAIL || e === r.c2C.REQUIRE_VERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e)
  },
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : d[e],
  getButtonTitle(e) {
    switch (e) {
      case r.PUi.EMAIL:
        return l.intl.string(l.t["1MPz29"]);
      case r.PUi.PHONE:
        return l.intl.string(l.t.mjJecn);
      case r.PUi.REVERIFY_EMAIL:
        return l.intl.string(l.t.nmdPFR);
      case r.PUi.REVERIFY_PHONE:
        return l.intl.string(l.t.of2129);
      default:
        return l.intl.string(l.t["oF6+W1"])
    }
  },
  areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
}