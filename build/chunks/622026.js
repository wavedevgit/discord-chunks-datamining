/** Chunk was on web.js **/
/** chunk id: 622026, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  IC: () => o
});
class i {
  isFeatureTeenByDefault(e) {
    return (this.teenByDefault & e) != 0
  }
  constructor(e) {
    r(this, "teenByDefault", true), this.teenByDefault = e
  }
}
class a {
  isFeatureAgeGated(e) {
    return (this.gatedFeatures & e) != 0
  }
  constructor(e) {
    r(this, "gatedFeatures", true), this.gatedFeatures = e
  }
}
class o {
  isFeatureAgeGated(e) {
    return this.ageVerification.isFeatureAgeGated(e)
  }
  isFeatureTeenByDefault(e) {
    return this.settings.isFeatureTeenByDefault(e)
  }
  static fromConnectionOpen(e) {
    return new o(new i(e.teen_by_default_settings), new a(e.age_gated_features))
  }
  constructor(e, t) {
    r(this, "settings", true), r(this, "ageVerification", true), this.settings = e, this.ageVerification = t
  }
}