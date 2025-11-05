/** Chunk was on 69283 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => A,
  waitForCSSLoad: () => T
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk522474 = require("./522474.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk355863 = require("./355863.js"),
  Chunk944486 = require("./944486.js"),
  Chunk808506 = require("./808506.js"),
  Chunk451478 = require("./451478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk830917 = require("./830917.js"),
  Chunk41534 = require("./41534.js"),
  Chunk837268 = require("./837268.js"),
  Chunk554370 = require("./554370.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk932404 = require("./932404.js"),
  Chunk253506 = require("./253506.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js");
require("./371467.js"), require("./606206.js");
let P = new Chunk710845.Z("AppOverlay");

function T(e, t) {
  return new Promise((n, r) => {
    let a = Date.now();
    t.current = setInterval(() => {
      if (function() {
          let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
            n = e.document.styleSheets,
            r = new Map;
          for (let e of n) null != e.href && r.set(e.href, e);
          for (let e of t) {
            if (null == e.href) continue;
            let t = r.get(e.href);
            if (null == t) returnfalse;
            try {
              if (0 === t.cssRules.length) returnfalse
            } catch (e) {}
          }
          returntrue
        }()) {
        n(), clearInterval(t.current);
        return
      }
      Date.now() - a > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
    }, 200)
  })
}
async function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (g.isPlatformEmbedded) {
    try {
      await v.ZP.isAlwaysOnTop(t)
    } catch (e) {
      P.error("Window does not exist while trying to show inactive", e), (0, p.D1)(e, C.gl.OutOfProcess)
    }
    for (let i = 0; i < r; i++) try {
      if (!await v.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      v.ZP.showInactive(t);
      return
    } catch (e) {
      var a;
      if ((null == (a = e.message) ? true : a.includes("IPC")) && i < r - 1) {
        let t = n / 2 * Math.pow(2, i + 1);
        P.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, p.D1)(e, C.gl.OutOfProcess), e
    }
  }
}
let A = Chunk647438.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, u = function(e, t) {
    let n = (0, i.e7)([y.Z], () => !g.isPlatformEmbedded || y.Z.isWindowHandleInitialized()),
      r = (0, i.e7)([s.Z], () => s.Z.getWindow(e)),
      c = (0, i.e7)([f.default], () => f.default.getFocusedPID()),
      u = a.useMemo(() => !g.isPlatformEmbedded || null != c && c !== b.UNSET_PID, [c]),
      [d, v] = a.useState(false),
      p = a.useRef(false),
      x = a.useCallback(() => {
        let e = y.Z.getTargetPID(),
          n = null != m.Z.getVoiceChannelId();
        l.Z.track(k.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: y.Z.isPinned(k.Odu.TEXT),
          overlay_render_method: C.gl[S.default.getOverlayMethod(e)],
          unpinned_widget_types: _.Z.getAllUnpinnedPinnedWidgets(t)
        }), (0, w.ry)()
      }, [t]),
      Z = a.useRef(false),
      A = a.useRef(null),
      B = a.useCallback(async (e, t) => {
        try {
          if (await T(e, A), Z.current) return;
          (0, N.Z)("cssLoaded", true)
        } catch (e) {
          P.error("Timed out waiting for CSS to load", e), l.Z.setOverlayCrashed(y.Z.getTargetPID(), e), (0, N.Z)("errorMessage", "CSS failed load");
          return
        }
        try {
          if (await E(e, t), Z.current) return;
          (0, w.Dv)()
        } catch (e) {
          l.Z.setOverlayCrashed(y.Z.getTargetPID(), e), (0, N.Z)("errorMessage", "showInactive failed");
          return
        }
        await new Promise(t => {
          e.setTimeout(() => t(), 100)
        }), Z.current || (v(true), x())
      }, [x]),
      M = a.useRef(false);
    a.useEffect(() => {
      if (!p.current && ((0, N.Z)("hasUseEffectFired", true), (0, N.Z)("trackedPidFocused", u), n)) {
        if (null == r) return void(0, N.Z)("errorMessage", "No targetOverlayWindow");
        if (!u) {
          M.current || (l.Z.updateOverlayState(y.Z.getTargetPID(), C.mM.WAITING_FOR_PID_FOCUS), M.current = true);
          return
        }
        p.current = true, (0, N.Z)("reactInitializationStarted", true), B(r, e)
      }
    }, [B, u, e, r, n]), (0, o.zq)(() => {
      clearInterval(A.current), Z.current = true
    });
    let O = (0, i.e7)([h.Z], () => h.Z.windowSize(null != r ? (0, I.ZY)(r) : true)),
      j = (0, i.e7)([y.Z], () => y.Z.getFocusedWindowHandle());
    return a.useEffect(() => {
      if (null == r || !d || r.innerHeight !== O.height || r.innerWidth !== O.width) return;
      let e = r.requestAnimationFrame(() => {
        e = r.requestAnimationFrame(() => {
          l.Z.overlayUIFocusedPid(null != c ? c : b.UNSET_PID, j)
        })
      });
      return () => {
        r.cancelAnimationFrame(e)
      }
    }, [d, r, c, j, O]), d
  }(n, Z.$S), v = (0, i.e7)([f.default], () => f.default.isFocusedPidInputLocked());
  return u ? (0, r.jsxs)(d.Z, {
    themeOverride: k.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: v,
    children: [(0, r.jsx)(x.Z, {}), (0, r.jsx)(c.Co, {})]
  }) : null
})