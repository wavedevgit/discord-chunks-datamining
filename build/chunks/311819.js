/** Chunk was on web.js **/
/** chunk id: 311819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  J: () => a
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk981631 = require("./981631.js");

function i(e) {
  let {
    applicationId: t,
    customId: n,
    referrerId: i,
    linkId: a
  } = e, o = new URL(r.Z5c.ACTIVITY_DETAILS(t), "".concat(location.protocol, "//").concat(location.host)), s = o.searchParams;
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
  return "".concat(location.protocol, "//").concat(location.host).concat(r.Z5c.OAUTH2_AUTHORIZE, "?").concat(o.toString())
}