/** Chunk was on web.js **/
"use strict";
n(610138), n(216116), n(78328), n(815648), n(47120), n(177593);
var r, i, o, a, s, l, c, u = n(200651);
n(92138), n(192379);
var d = n(616254),
  f = n(512722),
  _ = n.n(f),
  p = n(832037),
  h = n(749349),
  g = n(464253),
  m = n(485359),
  E = n(395727),
  v = n(471638),
  b = n(585275),
  y = n(960048),
  O = n(63063),
  S = n(240849),
  I = n(998502),
  T = n(513566),
  N = n(534713),
  A = n(358085),
  C = n(703656),
  R = n(284737),
  P = n(473159),
  D = n(846519),
  w = n(579806),
  L = n(896361),
  x = n(746106);
n(475439);
var M = n(857192),
  k = n(807725),
  j = n(471902),
  U = n(44163),
  G = n(710845),
  B = n(70956);
M.default.cssDebuggingEnabled && n.e("73541").then(n.bind(n, 250830)), (0, k.Z)();
let V = 5 * B.Z.Millis.MINUTE,
  F = document.getElementById("app-mount");
_()(null != F, "Could not find app-mount"), F.className = __OVERLAY__ ? "" : j.appMount;
let Z = (0, d.createRoot)(F),
  H = {
    "/oauth2/authorize": N.Z
  };

function W(e, t, n) {
  var r;
  let i = null != n ? new URLSearchParams(n) : null;
  (null === (r = H[t]) || void 0 === r || !r.call(H, i)) && (0, C.uL)(t)
}
let Y = e => Z.render((0, u.jsx)(x.w, {
  children: (0, u.jsx)(L.Z, {
    children: (0, u.jsx)(e, {})
  })
}));
if (null != w.Z) {
  null === (r = w.Z.setUncaughtExceptionHandler) || void 0 === r || r.call(w.Z, (e, t) => {
    setImmediate(() => {
      throw y.Z.captureCrash(e), e
    })
  }), I.ZP.appLoaded();
  let e = null === (i = (o = w.Z.remoteApp).getVersion) || void 0 === i ? void 0 : i.call(o),
    t = null === (a = (s = w.Z.remoteApp).getBuildNumber) || void 0 === a ? void 0 : a.call(s),
    n = {};
  null != w.Z.remoteApp.getModuleVersions && (n = w.Z.remoteApp.getModuleVersions()), y.Z.setExtra({
    hostVersion: e,
    moduleVersions: n
  }), y.Z.setTags({
    nativeBuildNumber: null == t ? void 0 : t.toString()
  });
  let u = Object.keys(n).filter(e => null != n[e]).map(e => "".concat(e, ": ").concat(n[e])).join(", ");
  new G.Z().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(u, ", build: ").concat(t));
  let d = null === (l = (c = w.Z.remoteApp).getReleaseChannel) || void 0 === l ? void 0 : l.call(c);
  ("canary" === d || "development" === d) && I.ZP.pauseFrameEvictor(), I.ZP.initializeExitHook(), I.ZP.initializeWERHandler()
}
if ((0, P.O)(window), __OVERLAY__) Y(p.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) Y(p.Z.OutdatedClient);
else {
  if (document.addEventListener("scroll", e => e.preventDefault()), A.isPlatformEmbedded) {
    window.onbeforeunload = () => I.ZP.beforeUnload(), I.ZP.on("HELP_OPEN", () => window.open(O.Z.getCommunityURL()));
    let e = new D.sW(V, () => I.ZP.purgeMemory());
    I.ZP.on("MAIN_WINDOW_BLUR", () => {
      e.delay(), I.ZP.setFocused(!1), (0, R.T_)(window, !1)
    }), I.ZP.on("MAIN_WINDOW_FOCUS", () => {
      e.cancel(), I.ZP.setFocused(!0), (0, R.T_)(window, !0)
    }), I.ZP.on("MAIN_WINDOW_PATH", W), I.ZP.on("MAIN_WINDOW_HIDDEN", () => {
      (0, R.al)(window)
    })
  }
  E.Z.initialize(), h.Z.initialize(), g.Z.init(), b.Z.init(), U.Z.init(), m.Z.initialize(), S.Z.initialize(), T.Z.initialize(), v.j(), Y(p.Z.App)
}