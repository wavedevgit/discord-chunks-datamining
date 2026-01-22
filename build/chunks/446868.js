/** Chunk was on web.js **/
/** chunk id: 446868, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let {
  CAPTCHA: o,
  EMAIL: l,
  PHONE: c,
  REVERIFY_EMAIL: u,
  REVERIFY_PHONE: d
} = Chunk652215.Fz7, f = {
  [Chunk652215.a3B.REQUIRE_VERIFIED_EMAIL]: [l],
  [Chunk652215.a3B.REQUIRE_VERIFIED_PHONE]: [c],
  [Chunk652215.a3B.REQUIRE_REVERIFIED_EMAIL]: [u],
  [Chunk652215.a3B.REQUIRE_REVERIFIED_PHONE]: [d],
  [Chunk652215.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, c],
  [Chunk652215.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, u],
  [Chunk652215.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, d],
  [Chunk652215.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [u, d],
  [Chunk652215.a3B.REQUIRE_CAPTCHA]: [o],
  [Chunk652215.a3B.AGREEMENTS]: [],
  [Chunk652215.a3B.REQUIRE_SAFETY_FLOWS]: []
}, p = {
  isPhoneReverification: (e, t) => true !== e && e.isPhoneVerified() && (t === a.a3B.REQUIRE_REVERIFIED_PHONE || t === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === a.a3B.REQUIRE_REVERIFIED_EMAIL || e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  isFullScreenVerification(e) {
    return e === a.a3B.REQUIRE_CAPTCHA || e === a.a3B.REQUIRE_VERIFIED_EMAIL || e === a.a3B.REQUIRE_VERIFIED_PHONE || e === a.a3B.REQUIRE_REVERIFIED_PHONE || e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e)
  },
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : f[e],
  getButtonTitle(e) {
    switch (e) {
      case a.Fz7.EMAIL:
        return s.intl.string(s.t["1MPz27"]);
      case a.Fz7.PHONE:
        return s.intl.string(s.t.mjJeco);
      case a.Fz7.REVERIFY_EMAIL:
        return s.intl.string(s.t.nmdPFX);
      case a.Fz7.REVERIFY_PHONE:
        return s.intl.string(s.t.of2125);
      default:
        return s.intl.string(s.t["oF6+Ww"])
    }
  },
  areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
}