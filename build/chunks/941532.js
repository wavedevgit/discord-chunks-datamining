/** Chunk was on web.js **/
/** chunk id: 941532, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => a
});
var Chunk589414 = require("./589414.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = (0, r.a)(e);
  if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
    let n = t ? i.t.yVfotv : i.t.rxlyKL;
    return i.intl.format(n, {
      application: e.name,
      privacyPolicyURL: e.privacy_policy_url,
      termsOfServiceURL: e.terms_of_service_url
    })
  }
  if (null != e.privacy_policy_url) {
    let n = t ? i.t.pYVSah : i.t.TBvmM2;
    return i.intl.format(n, {
      application: e.name,
      privacyPolicyURL: e.privacy_policy_url
    })
  }
  if (null != e.terms_of_service_url) {
    let n = t ? i.t.nBLOp5 : i.t["q0T/Q1"];
    return i.intl.format(n, {
      application: e.name,
      termsOfServiceURL: e.terms_of_service_url
    })
  }
  let n = t ? i.t["8LemYv"] : i.t["3Ywek3"];
  return i.intl.formatToPlainString(n, {
    application: e.name
  })
}