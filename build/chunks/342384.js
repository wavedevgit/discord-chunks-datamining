/** Chunk was on web.js **/
/** chunk id: 342384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => a,
  W: () => i
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk652215 = require("./652215.js");

function i(e) {
  let {
    applicationId: t,
    customId: n,
    referrerId: i,
    linkId: a
  } = e, s = new URL(r.BVt.ACTIVITY_DETAILS(t), "".concat(location.protocol, "//").concat(location.host)), o = s.searchParams;
  return null != a && o.set("link_id", a), null != i && o.set("referrer_id", i), null != n && o.set("custom_id", n), s.toString()
}

function a(e) {
  let {
    id: t,
    customInstallUrl: n,
    installParams: i,
    integrationTypesConfig: a
  } = e;
  if (null != n) return n;
  let s = new URLSearchParams;
  s.set("client_id", t);
  let o = null != a && Object.values(a).some(e => (null == e ? true : e.oauth2_install_params) != null || (null == e ? true : e.oauth2InstallParams) != null);
  if (null != i && !o) {
    let {
      permissions: e,
      scopes: t
    } = i;
    null != e && s.set("permissions", e), null != t && s.set("scope", t.join(" "))
  }
  return "".concat(location.protocol, "//").concat(location.host).concat(r.BVt.OAUTH2_AUTHORIZE, "?").concat(s.toString())
}