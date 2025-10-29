/** Chunk was on web.js **/
/** chunk id: 750081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./358797.js");
var r, i, a, o, s, Chunk951288 = require("./951288.js");
require("./92138.js"), require("./647438.js");
var Chunk602954 = require("./602954.js"),
  Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722),
  Chunk832037 = require("./832037.jsx"),
  Chunk749349 = require("./749349.js"),
  Chunk464253 = require("./464253.js"),
  Chunk485359 = require("./485359.js"),
  Chunk395727 = require("./395727.js"),
  Chunk471638 = require("./471638.js"),
  Chunk766646 = require("./766646.js"),
  Chunk960048 = require("./960048.js"),
  Chunk63063 = require("./63063.js"),
  Chunk240849 = require("./240849.js"),
  Chunk998502 = require("./998502.js"),
  Chunk513566 = require("./513566.js"),
  Chunk534713 = require("./534713.js"),
  Chunk358085 = require("./358085.js"),
  Chunk703656 = require("./703656.js"),
  Chunk284737 = require("./284737.js"),
  Chunk473159 = require("./473159.js"),
  Chunk846519 = require("./846519.js"),
  Chunk579806 = require("./579806.js"),
  Chunk896361 = require("./896361.jsx"),
  Chunk746106 = require("./746106.jsx"),
  Chunk177692 = require("./177692.js");
require("./986484.js");
var Chunk857192 = require("./857192.js"),
  Chunk113752 = require("./113752.js"),
  Chunk44163 = require("./44163.js"),
  Chunk710845 = require("./710845.js"),
  Chunk70956 = require("./70956.js"),
  Chunk378799 = require("./378799.js"),
  Chunk758731 = require("./758731.js");
Chunk857192.default.cssDebuggingEnabled && require.e("95666").then(require.bind(require, 754261)), (0, Chunk378799.s5)();
let Z = 5 * Chunk70956.Z.Millis.MINUTE,
  F = document.getElementById("app-mount");
d()(null != F, "Could not find app-mount"), F.className = __OVERLAY__ ? "" : Chunk113752.appMount;
let V = (0, Chunk602954.createRoot)(F),
  H = {
    "/oauth2/authorize": Chunk534713.Z,
    "/one-time": Chunk758731.Z
  };

function Y(e, t, n) {
  var r;
  let i = null != n ? new URLSearchParams(n) : null;
  null != (r = H[t]) && r.call(H, i) || (0, A.uL)(t)
}
let W = e => V.render((0, l.jsx)(w.w, {
  children: (0, l.jsx)(D.Z, {
    children: (0, l.jsx)(e, {})
  })
}));
if (null != Chunk579806.Z) {
  null == (r = Chunk579806.Z.setUncaughtExceptionHandler) || r.call(Chunk579806.Z, (e, t) => {
    setImmediate(() => {
      throw b.Z.captureCrash(e), e
    })
  }), Chunk998502.ZP.appLoaded();
  let e = null == (i = (a = Chunk579806.Z.remoteApp).getVersion) ? true : i.call(a),
    t = null == (o = (s = Chunk579806.Z.remoteApp).getBuildNumber) ? true : o.call(s),
    n = {};
  null != Chunk579806.Z.remoteApp.getModuleVersions && (n = Chunk579806.Z.remoteApp.getModuleVersions()), Chunk960048.Z.setExtra({
    hostVersion: module,
    moduleVersions: require
  }), Chunk960048.Z.setTags({
    nativeBuildNumber: null == exports ? true : exports.toString()
  });
  let l = Object.keys(require).filter(e => null != n[e]).map(e => "".concat(e, ": ").concat(n[e])).join(", ");
  new Chunk710845.Z().log("[NATIVE INFO] host ".concat(module, ", modules: ").concat(Chunk951288, ", build: ").concat(exports)), Chunk998502.ZP.pauseFrameEvictor(), Chunk998502.ZP.initializeExitHook(), Chunk998502.ZP.initializeWERHandler()
}
if ((0, Chunk473159.O)(window), __OVERLAY__) W(Chunk832037.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) W(Chunk832037.Z.OutdatedClient);
else {
  if (document.addEventListener("scroll", e => e.preventDefault()), Chunk358085.isPlatformEmbedded) {
    window.onbeforeunload = () => Chunk998502.ZP.beforeUnload(), Chunk998502.ZP.on("HELP_OPEN", () => window.open(Chunk63063.Z.getCommunityURL()));
    let e = new Chunk846519.sW(Z, () => Chunk998502.ZP.purgeMemory());
    Chunk998502.ZP.on("MAIN_WINDOW_BLUR", () => {
      module.delay(), Chunk998502.ZP.setFocused(false), (0, Chunk284737.T_)(window, false)
    }), Chunk998502.ZP.on("MAIN_WINDOW_FOCUS", () => {
      module.cancel(), Chunk998502.ZP.setFocused(true), (0, Chunk284737.T_)(window, true)
    }), Chunk998502.ZP.on("MAIN_WINDOW_PATH", Y), Chunk998502.ZP.on("MAIN_WINDOW_HIDDEN", () => {
      (0, Chunk284737.al)(window)
    })
  }
  Chunk395727.Z.initialize(), Chunk749349.Z.initialize(), Chunk464253.Z.init(), Chunk766646.Z.init(), Chunk44163.Z.init(), Chunk485359.Z.initialize(), Chunk240849.Z.initialize(), Chunk513566.Z.initialize(), Chunk471638.j(), (0, Chunk177692.Mn)(), W(Chunk832037.Z.App)
}