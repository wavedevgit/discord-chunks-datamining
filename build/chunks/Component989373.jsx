/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => D,
  waitForCSSLoad: () => E
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
let S = !Chunk358085.isPlatformEmbedded && false,
  P = new Chunk710845.Z("AppOverlay");

function E(e, t) {
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
async function k(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (h.isPlatformEmbedded) {
    try {
      await m.ZP.isAlwaysOnTop(t)
    } catch (e) {
      P.error("Window does not exist while trying to show inactive", e), (0, v.D1)(e, _.gl.OutOfProcess)
    }
    for (let i = 0; i < a; i++) try {
      if (!await m.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      m.ZP.showInactive(t);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && i < a - 1) {
        let t = n / 2 * Math.pow(2, i + 1);
        P.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, v.D1)(e, _.gl.OutOfProcess), e
    }
  }
}

function A() {
  r.Z.setFocusedPID(g.DEV_PID, null)
}

function j() {
  r.Z.setFocusedPID(null, null)
}
let D = Chunk473749.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, d = (0, i.e7)([s.Z], () => s.Z.getWindow(n));
  (0, c.ZP)(() => {
    if (null != d) return S && (d.document.hasFocus() && r.Z.setFocusedPID(g.DEV_PID, null), d.addEventListener("focus", A), d.addEventListener("blur", j)), () => {
      S && (d.removeEventListener("focus", A), d.removeEventListener("blur", j))
    }
  });
  let m = function(e, t) {
      let n = (0, i.e7)([Z.Z], () => !h.isPlatformEmbedded || Z.Z.isWindowHandleInitialized()),
        a = (0, i.e7)([s.Z], () => s.Z.getWindow(e)),
        l = (0, i.e7)([Z.Z], () => Z.Z.getFocusedPID()),
        d = o.useMemo(() => !h.isPlatformEmbedded || null != l && l !== g.UNSET_PID, [l]),
        [u, m] = o.useState(false),
        v = o.useRef(false),
        C = o.useCallback(() => {
          let e = Z.Z.getTargetPID(),
            n = null != b.Z.getVoiceChannelId();
          r.Z.track(O.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: Z.Z.isPinned(O.Odu.TEXT),
            overlay_render_method: _.gl[y.default.getOverlayMethod(e)],
            unpinned_widget_types: f.Z.getAllUnpinnedPinnedWidgets(t)
          }), (0, x.ry)()
        }, [t]),
        w = o.useRef(false),
        N = o.useRef(null),
        S = o.useCallback(async (e, t) => {
          try {
            if (await E(e, N), w.current) return;
            (0, T.Z)("cssLoaded", true)
          } catch (e) {
            P.error("Timed out waiting for CSS to load", e), r.Z.setOverlayCrashed(Z.Z.getTargetPID(), e), (0, T.Z)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await k(e, t), w.current) return;
            (0, x.Dv)()
          } catch (e) {
            r.Z.setOverlayCrashed(Z.Z.getTargetPID(), e), (0, T.Z)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), w.current || (m(true), C())
        }, [C]),
        A = o.useRef(false);
      o.useEffect(() => {
        if (!v.current && ((0, T.Z)("hasUseEffectFired", true), (0, T.Z)("trackedPidFocused", d), n)) {
          if (null == a) return void(0, T.Z)("errorMessage", "No targetOverlayWindow");
          if (!d) {
            A.current || (r.Z.updateOverlayState(Z.Z.getTargetPID(), _.mM.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), A.current = true);
            return
          }
          v.current = true, (0, T.Z)("reactInitializationStarted", true), S(a, e)
        }
      }, [S, d, e, a, n]), (0, c.zq)(() => {
        clearInterval(N.current), w.current = true
      });
      let j = (0, i.e7)([p.Z], () => p.Z.windowSize(null != a ? (0, I.ZY)(a) : true)),
        D = (0, i.e7)([Z.Z], () => Z.Z.getFocusedWindowHandle());
      return o.useEffect(() => {
        let e, t;
        if (null != a && u && a.innerHeight === j.height && a.innerWidth === j.width) return e = a.requestAnimationFrame(() => {
          e = a.requestAnimationFrame(() => {
            a.clearTimeout(t), r.Z.overlayUIFocusedPid(null != l ? l : g.UNSET_PID, D)
          })
        }), t = a.setTimeout(() => {
          a.cancelAnimationFrame(e), r.Z.overlayUIFocusedPid(null != l ? l : g.UNSET_PID, D)
        }, 500), () => {
          a.cancelAnimationFrame(e), a.clearTimeout(t)
        }
      }, [u, a, l, D, j]), u
    }(n, N.$S),
    v = (0, i.e7)([Z.Z], () => Z.Z.getFocusedPID()),
    D = (0, i.e7)([w.Z], () => w.Z.isInputLocked(v), [v]);
  return m ? (0, a.jsxs)(u.Z, {
    themeOverride: O.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: D,
    children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(l.Co, {})]
  }) : null
})