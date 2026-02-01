/** Chunk was on web.js **/
/** chunk id: 186433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./142703.js");
var r, i, a, o, s, Chunk627968 = require("./627968.js");
require("./140595.js"), require("./64700.js");
var Chunk507240 = require("./507240.js"),
  Chunk284009 = require("./284009.js"),
  d = require.n(Chunk284009),
  Chunk999212 = require("./999212.jsx"),
  Chunk242120 = require("./242120.js"),
  Chunk716680 = require("./716680.js"),
  Chunk908379 = require("./908379.js"),
  Chunk46460 = require("./46460.js"),
  Chunk557042 = require("./557042.js"),
  Chunk8917 = require("./8917.js"),
  Chunk728458 = require("./728458.js"),
  Chunk975571 = require("./975571.js"),
  Chunk769341 = require("./769341.js"),
  Chunk837921 = require("./837921.js"),
  Chunk763685 = require("./763685.js"),
  Chunk184849 = require("./184849.js"),
  Chunk723702 = require("./723702.js"),
  Chunk976860 = require("./976860.js"),
  Chunk350723 = require("./350723.js"),
  Chunk913934 = require("./913934.js"),
  Chunk451988 = require("./451988.js"),
  Chunk77729 = require("./77729.js"),
  Chunk772432 = require("./772432.jsx"),
  Chunk975616 = require("./975616.jsx"),
  Chunk617590 = require("./617590.js"),
  Chunk111162 = require("./111162.js"),
  Chunk769253 = require("./769253.js"),
  Chunk639723 = require("./639723.js"),
  Chunk626584 = require("./626584.js"),
  Chunk927813 = require("./927813.js"),
  Chunk316501 = require("./316501.js"),
  Chunk338816 = require("./338816.js");
Chunk111162.default.cssDebuggingEnabled && require.e("42592").then(require.t.bind(require, 196995, 19)), (0, Chunk316501.pF)();
let F = 5 * Chunk927813.A.Millis.MINUTE,
  B = document.getElementById("app-mount");
d()(null != B, "Could not find app-mount"), B.className = __OVERLAY__ ? "" : Chunk769253.l;
let H = (0, Chunk507240.createRoot)(B),
  Y = {
    "/oauth2/authorize": Chunk184849.A,
    "/one-time": Chunk338816.A
  };

function W(e, t, n) {
  var r;
  let i = null != n ? new URLSearchParams(n) : null;
  null != (r = Y[t]) && r.call(Y, i) || (0, T.pX)(t)
}
let K = e => H.render((0, l.jsx)(D.e, {
  children: (0, l.jsx)(P.A, {
    children: (0, l.jsx)(e, {})
  })
}));
if (null != Chunk77729.A) {
  null == (r = Chunk77729.A.setUncaughtExceptionHandler) || r.call(Chunk77729.A, (e, t) => {
    setImmediate(() => {
      throw y.A.captureCrash(e), e
    })
  }), Chunk837921.Ay.appLoaded();
  let e = null == (i = (a = Chunk77729.A.remoteApp).getVersion) ? true : i.call(a),
    t = null == (o = (s = Chunk77729.A.remoteApp).getBuildNumber) ? true : o.call(s),
    n = {};
  null != Chunk77729.A.remoteApp.getModuleVersions && (n = Chunk77729.A.remoteApp.getModuleVersions()), Chunk728458.A.setExtra({
    hostVersion: module,
    moduleVersions: require
  }), Chunk728458.A.setTags({
    nativeBuildNumber: null == exports ? true : exports.toString()
  });
  let l = Object.keys(require).filter(e => null != n[e]).map(e => "".concat(e, ": ").concat(n[e])).join(", ");
  new Chunk626584.A().log("[NATIVE INFO] host ".concat(module, ", modules: ").concat(Chunk627968, ", build: ").concat(exports)), Chunk837921.Ay.pauseFrameEvictor(), Chunk837921.Ay.initializeExitHook(), Chunk837921.Ay.initializeWERHandler()
}
if ((0, Chunk913934.M)(window), __OVERLAY__) K(Chunk999212.A.Overlay);
else if (null != window.require && null == window.DiscordNative) K(Chunk999212.A.OutdatedClient);
else {
  if (document.addEventListener("scroll", e => e.preventDefault()), Chunk723702.isPlatformEmbedded) {
    window.onbeforeunload = () => v.Ay.beforeUnload(), Chunk837921.Ay.on("HELP_OPEN", () => window.open(b.A.getCommunityURL()));
    let e = new Chunk451988.J_(F, () => v.Ay.purgeMemory());
    Chunk837921.Ay.on("MAIN_WINDOW_BLUR", () => {
      e.delay(), v.Ay.setFocused(false), (0, C.XC)(window, false)
    }), Chunk837921.Ay.on("MAIN_WINDOW_FOCUS", () => {
      e.cancel(), v.Ay.setFocused(true), (0, C.XC)(window, true)
    }), Chunk837921.Ay.on("MAIN_WINDOW_PATH", W), Chunk837921.Ay.on("MAIN_WINDOW_HIDDEN", () => {
      (0, C.R)(window)
    })
  }
  Chunk46460.A.initialize(), Chunk242120.A.initialize(), Chunk716680.A.init(), Chunk8917.A.init(), Chunk639723.A.init(), Chunk908379.A.initialize(), Chunk769341.A.initialize(), Chunk763685.A.initialize(), Chunk557042.n(), (0, Chunk617590.wP)(), K(Chunk999212.A.App)
}