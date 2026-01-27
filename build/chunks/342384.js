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
  } = e, o = new URL(r.BVt.ACTIVITY_DETAILS(t), "".concat(location.protocol, "//").concat(location.host)), s = o.searchParams;
  return null != a && s.set("link_id", a), null != i && s.set("referrer_id", i), null != n && s.set("custom_id", n), o.toString()
}

function a(e) {
  let {
    id: t,
    customInstallUrl: n,
    installParams: i,
    integrationTypesConfig: a
  } = e;
  if (null != n) return n;
  let o = new URLSearchParams;
  o.set("client_id", t);
  let s = null != a && Object.values(a).some(e => (null == e ? true : e.oauth2_install_params) != null || (null == e ? true : e.oauth2InstallParams) != null);
  if (null != i && !s) {
    let {
      permissions: e,
      scopes: t
    } = i;
    null != e && o.set("permissions", e), null != t && o.set("scope", t.join(" "))
  }
  return "".concat(location.protocol, "//").concat(location.host).concat(r.BVt.OAUTH2_AUTHORIZE, "?").concat(o.toString())
}