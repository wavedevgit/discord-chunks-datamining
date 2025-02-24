/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Q: () => o,
  t: () => a
});
var r = n(780570),
  i = n(358085);

function o() {
  return (0, i.isWindows)() || (0, i.isMac)()
}

function a(e) {
  let {
    LibraryApplicationStore: t,
    LaunchableGameStore: n,
    DispatchApplicationStore: i,
    ConnectedAppsStore: o,
    applicationId: a,
    branchId: s
  } = e;
  if (o.isConnected(a) || (null == s && (s = a), i.isLaunchable(a, s))) return !0;
  let l = t.getLibraryApplication(a, s);
  return !(null != l && (0, r.Je)(l)) && n.isLaunchable(a)
}