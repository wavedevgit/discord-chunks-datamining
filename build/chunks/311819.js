/** Chunk was on web.js **/
/** chunk id: 311819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  J: () => o
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk981631 = require("./981631.js");

function i(e) {
  let {
    applicationId: t,
    customId: n,
    referrerId: i,
    linkId: o
  } = e, a = new URL(r.Z5c.ACTIVITY_DETAILS(t), "".concat(location.protocol, "//").concat(location.host)), s = a.searchParams;
  return null != o && s.set("link_id", o), null != i && s.set("referrer_id", i), null != n && s.set("custom_id", n), a.toString()
}

function o(e) {
  let {
    id: t,
    customInstallUrl: n,
    installParams: i,
    integrationTypesConfig: o
  } = e;
  if (null != n) return n;
  let a = new URLSearchParams;
  a.set("client_id", t);
  let s = null != o && Object.values(o).some(e => (null == e ? true : e.oauth2_install_params) != null || (null == e ? true : e.oauth2InstallParams) != null);
  if (null != i && !s) {
    let {
      permissions: e,
      scopes: t
    } = i;
    null != e && a.set("permissions", e), null != t && a.set("scope", t.join(" "))
  }
  return "".concat(location.protocol, "//").concat(location.host).concat(r.Z5c.OAUTH2_AUTHORIZE, "?").concat(a.toString())
}