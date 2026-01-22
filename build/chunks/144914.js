/** Chunk was on web.js **/
/** chunk id: 144914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  S: () => s
});
var Chunk674378 = require("./674378.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");

function s() {
  return (0, i.isWindows)() && "arm64" !== a.Ay.architecture || (0, i.isMac)()
}

function o(e) {
  let {
    LibraryApplicationStore: t,
    LaunchableGameStore: n,
    DispatchApplicationStore: i,
    ConnectedAppsStore: a,
    applicationId: s,
    branchId: o
  } = e;
  if (a.isConnected(s) || (null == o && (o = s), i.isLaunchable(s, o))) returntrue;
  let l = t.getLibraryApplication(s, o);
  return !(null != l && (0, r.XZ)(l)) && n.isLaunchable(s)
}