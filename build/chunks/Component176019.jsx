/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => G,
  waitForCSSLoad: () => T
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk684013 = require("./684013.js"),
  Chunk964486 = require("./964486.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk87001 = require("./87001.js"),
  Chunk923917 = require("./923917.jsx"),
  Chunk555528 = require("./555528.js"),
  Chunk309010 = require("./309010.js"),
  Chunk531685 = require("./531685.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk9302 = require("./9302.js"),
  Chunk365971 = require("./365971.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk200042 = require("./200042.jsx"),
  Chunk833551 = require("./833551.js"),
  Chunk395011 = require("./395011.js"),
  Chunk682763 = require("./682763.js"),
  Chunk222506 = require("./222506.js"),
  Chunk203322 = require("./203322.js"),
  Chunk644434 = require("./644434.js"),
  Chunk652215 = require("./652215.js");
require("./703552.js"), require("./921955.js");
let w = !Chunk723702.isPlatformEmbedded && false,
  S = new Chunk626584.A("AppOverlay");

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
async function j(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (b.isPlatformEmbedded) {
    try {
      await h.Ay.isAlwaysOnTop(t)
    } catch (e) {
      S.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, y.Ue.OutOfProcess)
    }
    for (let l = 0; l < r; l++) try {
      if (!await h.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
      h.Ay.showInactive(t);
      return
    } catch (e) {
      var a;
      if ((null == (a = e.message) ? true : a.includes("IPC")) && l < r - 1) {
        let t = n / 2 * Math.pow(2, l + 1);
        S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, I.pj)(e, y.Ue.OutOfProcess), e
    }
  }
}

function L() {
  i.A.setFocusedPID(A.DEV_PID, null)
}

function D() {
  i.A.setFocusedPID(null, null)
}
let G = Chunk64700.memo(function(e) {
  let t, {
    withTitleBar: n,
    windowKey: s
  } = e;
  t = (0, l.bG)([d.A], () => d.A.getWindow(s)), (0, o.Ay)(() => {
    if (null != t) return w && (t.document.hasFocus() && i.A.setFocusedPID(A.DEV_PID, null), t.addEventListener("focus", L), t.addEventListener("blur", D)), () => {
      w && (t.removeEventListener("focus", L), t.removeEventListener("blur", D))
    }
  });
  let h = function(e, t) {
      let n, r, c = (0, l.bG)([O.A], () => !b.isPlatformEmbedded || O.A.isWindowHandleInitialized()),
        s = (0, l.bG)([d.A], () => d.A.getWindow(e)),
        u = (0, l.bG)([O.A], () => O.A.getFocusedPID()),
        h = a.useMemo(() => !b.isPlatformEmbedded || null != u && u !== A.UNSET_PID, [u]),
        [I, g] = a.useState(false),
        C = a.useRef(false),
        N = a.useCallback(() => {
          let e = O.A.getTargetPID(),
            n = null != p.A.getVoiceChannelId();
          i.A.track(x.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: O.A.isPinned(x.uss.TEXT),
            overlay_render_method: y.Ue[v.default.getOverlayMethod(e)],
            unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
          }), (0, E.Fd)()
        }, [t]),
        w = a.useRef(false),
        L = a.useRef(null),
        D = a.useCallback(async (e, t) => {
          try {
            if (await T(e, L), w.current) return;
            (0, P.A)("cssLoaded", true)
          } catch (e) {
            S.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(O.A.getTargetPID(), e), (0, P.A)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await j(e, t), w.current) return;
            (0, E.Mq)()
          } catch (e) {
            i.A.setOverlayCrashed(O.A.getTargetPID(), e), (0, P.A)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), w.current || (g(true), N())
        }, [N]),
        G = a.useRef(false);
      return a.useEffect(() => {
        if (!C.current && ((0, P.A)("hasUseEffectFired", true), (0, P.A)("trackedPidFocused", h), c)) {
          if (null == s) return void(0, P.A)("errorMessage", "No targetOverlayWindow");
          if (!h) {
            G.current || (i.A.updateOverlayState(O.A.getTargetPID(), y.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), G.current = true);
            return
          }
          C.current = true, (0, P.A)("reactInitializationStarted", true), D(s, e)
        }
      }, [D, h, e, s, c]), (0, o.l0)(() => {
        clearInterval(L.current), w.current = true
      }), n = (0, l.bG)([f.A], () => f.A.windowSize(null != s ? (0, m.Q2)(s) : true)), r = (0, l.bG)([O.A], () => O.A.getFocusedWindowHandle()), a.useEffect(() => {
        let e, t;
        if (null != s && I && s.innerHeight === n.height && s.innerWidth === n.width) return e = s.requestAnimationFrame(() => {
          e = s.requestAnimationFrame(() => {
            s.clearTimeout(t), i.A.overlayUIFocusedPid(null != u ? u : A.UNSET_PID, r)
          })
        }), t = s.setTimeout(() => {
          s.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(null != u ? u : A.UNSET_PID, r)
        }, 500), () => {
          s.cancelAnimationFrame(e), s.clearTimeout(t)
        }
      }, [I, s, u, r, n]), I
    }(s, N.G),
    I = (0, l.bG)([O.A], () => O.A.getFocusedPID()),
    G = (0, l.bG)([C.A], () => C.A.isInputLocked(I), [I]);
  return h ? (0, r.jsxs)(u.A, {
    themeOverride: x.NJ8.MIDNIGHT,
    withTitleBar: n,
    windowKey: s,
    title: "Discord Overlay",
    hideModals: G,
    children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(c.Al, {})]
  }) : null
})