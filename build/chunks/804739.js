/** Chunk was on web.js **/
/** chunk id: 804739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => a,
  t: () => s
});
var Chunk780570 = require("./780570.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js");

function a() {
  return (0, Chunk358085.isWindows)() && "arm64" !== Chunk998502.ZP.architecture || (0, Chunk358085.isMac)()
}

function s(e) {
  let {
    LibraryApplicationStore: t,
    LaunchableGameStore: n,
    DispatchApplicationStore: i,
    ConnectedAppsStore: o,
    applicationId: a,
    branchId: s
  } = e;
  if (o.isConnected(a) || (null == s && (s = a), i.isLaunchable(a, s))) returntrue;
  let l = t.getLibraryApplication(a, s);
  return !(null != l && (0, r.Je)(l)) && n.isLaunchable(a)
}