/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => A,
  waitForCSSLoad: () => T
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
let W = !Chunk358085.isPlatformEmbedded && false,
  k = new Chunk710845.Z("AppOverlay");

function T(e, n) {
  return new Promise((t, a) => {
    let o = Date.now();
    n.current = setInterval(() => {
      if (function() {
          let n = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
            t = e.document.styleSheets,
            a = new Map;
          for (let e of t) null != e.href && a.set(e.href, e);
          for (let e of n) {
            if (null == e.href) continue;
            let n = a.get(e.href);
            if (null == n) returnfalse;
            try {
              if (0 === n.cssRules.length) returnfalse
            } catch (e) {}
          }
          returntrue
        }()) {
        t(), clearInterval(n.current);
        return
      }
      Date.now() - o > 12e4 && (a(Error("Timed out waiting for CSS to load")), clearInterval(n.current))
    }, 200)
  })
}
async function N(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (_.isPlatformEmbedded) {
    try {
      await p.ZP.isAlwaysOnTop(n)
    } catch (e) {
      k.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, I.gl.OutOfProcess)
    }
    for (let c = 0; c < a; c++) try {
      if (!await p.ZP.waitForIPCReady(t, e)) throw Error("IPC not ready");
      p.ZP.showInactive(n);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && c < a - 1) {
        let n = t / 2 * Math.pow(2, c + 1);
        k.error("Failed to show inactive, retrying in ".concat(n, "ms"), e), await new Promise(e => setTimeout(e, n))
      } else throw (0, m.D1)(e, I.gl.OutOfProcess), e
    }
  }
}

function D() {
  r.Z.setFocusedPID(g.DEV_PID, null)
}

function E() {
  r.Z.setFocusedPID(null, null)
}
let A = Chunk473749.memo(function(e) {
  let {
    withTitleBar: n,
    windowKey: t
  } = e, l = (0, c.e7)([f.Z], () => f.Z.getWindow(t));
  (0, i.ZP)(() => {
    if (null != l) return W && (l.document.hasFocus() && r.Z.setFocusedPID(g.DEV_PID, null), l.addEventListener("focus", D), l.addEventListener("blur", E)), () => {
      W && (l.removeEventListener("focus", D), l.removeEventListener("blur", E))
    }
  });
  let p = function(e, n) {
      let t = (0, c.e7)([w.Z], () => !_.isPlatformEmbedded || w.Z.isWindowHandleInitialized()),
        a = (0, c.e7)([f.Z], () => f.Z.getWindow(e)),
        d = (0, c.e7)([w.Z], () => w.Z.getFocusedPID()),
        l = o.useMemo(() => !_.isPlatformEmbedded || null != d && d !== g.UNSET_PID, [d]),
        [b, p] = o.useState(false),
        m = o.useRef(false),
        v = o.useCallback(() => {
          let e = w.Z.getTargetPID(),
            t = null != s.Z.getVoiceChannelId();
          r.Z.track(P.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: w.Z.isPinned(P.Odu.TEXT),
            overlay_render_method: I.gl[y.default.getOverlayMethod(e)],
            unpinned_widget_types: u.Z.getAllUnpinnedPinnedWidgets(n)
          }), (0, x.ry)()
        }, [n]),
        S = o.useRef(false),
        Z = o.useRef(null),
        W = o.useCallback(async (e, n) => {
          try {
            if (await T(e, Z), S.current) return;
            (0, B.Z)("cssLoaded", true)
          } catch (e) {
            k.error("Timed out waiting for CSS to load", e), r.Z.setOverlayCrashed(w.Z.getTargetPID(), e), (0, B.Z)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await N(e, n), S.current) return;
            (0, x.Dv)()
          } catch (e) {
            r.Z.setOverlayCrashed(w.Z.getTargetPID(), e), (0, B.Z)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(n => {
            e.setTimeout(() => n(), 100)
          }), S.current || (p(true), v())
        }, [v]),
        D = o.useRef(false);
      o.useEffect(() => {
        if (!m.current && ((0, B.Z)("hasUseEffectFired", true), (0, B.Z)("trackedPidFocused", l), t)) {
          if (null == a) return void(0, B.Z)("errorMessage", "No targetOverlayWindow");
          if (!l) {
            D.current || (r.Z.updateOverlayState(w.Z.getTargetPID(), I.mM.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), D.current = true);
            return
          }
          m.current = true, (0, B.Z)("reactInitializationStarted", true), W(a, e)
        }
      }, [W, l, e, a, t]), (0, i.zq)(() => {
        clearInterval(Z.current), S.current = true
      });
      let E = (0, c.e7)([h.Z], () => h.Z.windowSize(null != a ? (0, C.ZY)(a) : true)),
        A = (0, c.e7)([w.Z], () => w.Z.getFocusedWindowHandle());
      return o.useEffect(() => {
        let e, n;
        if (null != a && b && a.innerHeight === E.height && a.innerWidth === E.width) return e = a.requestAnimationFrame(() => {
          e = a.requestAnimationFrame(() => {
            a.clearTimeout(n), r.Z.overlayUIFocusedPid(null != d ? d : g.UNSET_PID, A)
          })
        }), n = a.setTimeout(() => {
          a.cancelAnimationFrame(e), r.Z.overlayUIFocusedPid(null != d ? d : g.UNSET_PID, A)
        }, 500), () => {
          a.cancelAnimationFrame(e), a.clearTimeout(n)
        }
      }, [b, a, d, A, E]), b
    }(t, Z.$S),
    m = (0, c.e7)([w.Z], () => w.Z.getFocusedPID()),
    A = (0, c.e7)([S.Z], () => S.Z.isInputLocked(m), [m]);
  return p ? (0, a.jsxs)(b.Z, {
    themeOverride: P.BRd.MIDNIGHT,
    withTitleBar: n,
    windowKey: t,
    title: "Discord Overlay",
    hideModals: A,
    children: [(0, a.jsx)(v.Z, {}), (0, a.jsx)(d.Co, {})]
  }) : null
})