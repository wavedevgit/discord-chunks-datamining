/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => F,
  waitForCSSLoad: () => x
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk522474 = require("./522474.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk355863 = require("./355863.js"),
  Chunk944486 = require("./944486.js"),
  Chunk451478 = require("./451478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk830917 = require("./830917.js"),
  Chunk338388 = require("./338388.js"),
  Chunk837268 = require("./837268.js"),
  Chunk554370 = require("./554370.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk932404 = require("./932404.js"),
  Chunk322155 = require("./322155.js"),
  Chunk253506 = require("./253506.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js");
require("./371467.js"), require("./606206.js");
let D = !Chunk358085.isPlatformEmbedded && false,
  W = new Chunk710845.Z("AppOverlay");

function x(e, t) {
  return new Promise((n, a) => {
    let o = Date.now();
    t.current = setInterval(() => {
      if (function() {
          let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
            n = e.document.styleSheets,
            a = new Map;
          for (let e of n) null != e.href && a.set(e.href, e);
          for (let e of t) {
            if (null == e.href) continue;
            let t = a.get(e.href);
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
      Date.now() - o > 12e4 && (a(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
    }, 200)
  })
}
async function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (p.isPlatformEmbedded) {
    try {
      await g.ZP.isAlwaysOnTop(t)
    } catch (e) {
      W.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, _.gl.OutOfProcess)
    }
    for (let c = 0; c < a; c++) try {
      if (!await g.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      g.ZP.showInactive(t);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && c < a - 1) {
        let t = n / 2 * Math.pow(2, c + 1);
        W.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, m.D1)(e, _.gl.OutOfProcess), e
    }
  }
}

function k() {
  Chunk13245.Z.setFocusedPID(Chunk145597.DEV_PID, null)
}

function O() {
  Chunk13245.Z.setFocusedPID(null, null)
}
let F = Chunk473749.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, d = (0, c.e7)([f.Z], () => f.Z.getWindow(n));
  (0, i.ZP)(() => {
    if (null != d) return D && (d.document.hasFocus() && r.Z.setFocusedPID(I.DEV_PID, null), d.addEventListener("focus", k), d.addEventListener("blur", O)), () => {
      D && (d.removeEventListener("focus", k), d.removeEventListener("blur", O))
    }
  });
  let g = function(e, t) {
      let n = (0, c.e7)([w.Z], () => !p.isPlatformEmbedded || w.Z.isWindowHandleInitialized()),
        a = (0, c.e7)([f.Z], () => f.Z.getWindow(e)),
        l = (0, c.e7)([w.Z], () => w.Z.getFocusedPID()),
        d = o.useMemo(() => !p.isPlatformEmbedded || null != l && l !== I.UNSET_PID, [l]),
        [u, g] = o.useState(false),
        m = o.useRef(false),
        v = o.useCallback(() => {
          let e = w.Z.getTargetPID(),
            n = null != b.Z.getVoiceChannelId();
          r.Z.track(B.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: w.Z.isPinned(B.Odu.TEXT),
            overlay_render_method: _.gl[Z.default.getOverlayMethod(e)],
            unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
          }), (0, y.ry)()
        }, [t]),
        S = o.useRef(false),
        T = o.useRef(null),
        D = o.useCallback(async (e, t) => {
          try {
            if (await x(e, T), S.current) return;
            (0, P.Z)("cssLoaded", true)
          } catch (e) {
            W.error("Timed out waiting for CSS to load", e), r.Z.setOverlayCrashed(w.Z.getTargetPID(), e), (0, P.Z)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await E(e, t), S.current) return;
            (0, y.Dv)()
          } catch (e) {
            r.Z.setOverlayCrashed(w.Z.getTargetPID(), e), (0, P.Z)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), S.current || (g(true), v())
        }, [v]),
        k = o.useRef(false);
      o.useEffect(() => {
        if (!m.current && ((0, P.Z)("hasUseEffectFired", true), (0, P.Z)("trackedPidFocused", d), n)) {
          if (null == a) return void(0, P.Z)("errorMessage", "No targetOverlayWindow");
          if (!d) {
            k.current || (r.Z.updateOverlayState(w.Z.getTargetPID(), _.mM.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), k.current = true);
            return
          }
          m.current = true, (0, P.Z)("reactInitializationStarted", true), D(a, e)
        }
      }, [D, d, e, a, n]), (0, i.zq)(() => {
        clearInterval(T.current), S.current = true
      });
      let O = (0, c.e7)([h.Z], () => h.Z.windowSize(null != a ? (0, C.ZY)(a) : true)),
        F = (0, c.e7)([w.Z], () => w.Z.getFocusedWindowHandle());
      return o.useEffect(() => {
        let e, t;
        if (null != a && u && a.innerHeight === O.height && a.innerWidth === O.width) return e = a.requestAnimationFrame(() => {
          e = a.requestAnimationFrame(() => {
            a.clearTimeout(t), r.Z.overlayUIFocusedPid(null != l ? l : I.UNSET_PID, F)
          })
        }), t = a.setTimeout(() => {
          a.cancelAnimationFrame(e), r.Z.overlayUIFocusedPid(null != l ? l : I.UNSET_PID, F)
        }, 500), () => {
          a.cancelAnimationFrame(e), a.clearTimeout(t)
        }
      }, [u, a, l, F, O]), u
    }(n, T.$S),
    m = (0, c.e7)([w.Z], () => w.Z.getFocusedPID()),
    F = (0, c.e7)([S.Z], () => S.Z.isInputLocked(m), [m]);
  return g ? (0, a.jsxs)(u.Z, {
    themeOverride: B.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: F,
    children: [(0, a.jsx)(v.Z, {}), (0, a.jsx)(l.Co, {})]
  }) : null
})