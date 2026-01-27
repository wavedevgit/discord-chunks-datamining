/** Chunk was on web.js **/
/** chunk id: 144914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  S: () => o
});
var Chunk674378 = require("./674378.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");

function o() {
  return (0, i.isWindows)() && "arm64" !== a.Ay.architecture || (0, i.isMac)()
}

function s(e) {
  let {
    LibraryApplicationStore: t,
    LaunchableGameStore: n,
    DispatchApplicationStore: i,
    ConnectedAppsStore: a,
    applicationId: o,
    branchId: s
  } = e;
  if (a.isConnected(o) || (null == s && (s = o), i.isLaunchable(o, s))) returntrue;
  let l = t.getLibraryApplication(o, s);
  return !(null != l && (0, r.XZ)(l)) && n.isLaunchable(o)
}