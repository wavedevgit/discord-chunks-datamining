/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => D,
  waitForCSSLoad: () => N
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
let E = !Chunk723702.isPlatformEmbedded && false,
  S = new Chunk626584.A("AppOverlay");

function N(e, t) {
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
async function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (b.isPlatformEmbedded) {
    try {
      await m.Ay.isAlwaysOnTop(t)
    } catch (e) {
      S.error("Window does not exist while trying to show inactive", e), (0, A.pj)(e, x.Ue.OutOfProcess)
    }
    for (let i = 0; i < r; i++) try {
      if (!await m.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
      m.Ay.showInactive(t);
      return
    } catch (e) {
      var a;
      if ((null == (a = e.message) ? true : a.includes("IPC")) && i < r - 1) {
        let t = n / 2 * Math.pow(2, i + 1);
        S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, A.pj)(e, x.Ue.OutOfProcess), e
    }
  }
}

function G() {
  s.A.setFocusedPID(g.DEV_PID, null)
}

function k() {
  s.A.setFocusedPID(null, null)
}
let D = Chunk64700.memo(function(e) {
  let t, {
    withTitleBar: n,
    windowKey: c
  } = e;
  t = (0, i.bG)([d.A], () => d.A.getWindow(c)), (0, l.Ay)(() => {
    if (null != t) return E && (t.document.hasFocus() && s.A.setFocusedPID(g.DEV_PID, null), t.addEventListener("focus", G), t.addEventListener("blur", k)), () => {
      E && (t.removeEventListener("focus", G), t.removeEventListener("blur", k))
    }
  });
  let m = function(e, t) {
      let n, r, o = (0, i.bG)([I.A], () => !b.isPlatformEmbedded || I.A.isWindowHandleInitialized()),
        c = (0, i.bG)([d.A], () => d.A.getWindow(e)),
        u = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
        m = a.useMemo(() => !b.isPlatformEmbedded || null != u && u !== g.UNSET_PID, [u]),
        [A, v] = a.useState(false),
        T = a.useRef(false),
        O = a.useCallback(() => {
          let e = I.A.getTargetPID(),
            n = null != p.A.getVoiceChannelId();
          s.A.track(j.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: I.A.isPinned(j.uss.TEXT),
            overlay_render_method: x.Ue[y.default.getOverlayMethod(e)],
            unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
          }), (0, C.Fd)()
        }, [t]),
        E = a.useRef(false),
        G = a.useRef(null),
        k = a.useCallback(async (e, t) => {
          try {
            if (await N(e, G), E.current) return;
            (0, w.A)("cssLoaded", true)
          } catch (e) {
            S.error("Timed out waiting for CSS to load", e), s.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, w.A)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await P(e, t), E.current) return;
            (0, C.Mq)()
          } catch (e) {
            s.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, w.A)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), E.current || (v(true), O())
        }, [O]),
        D = a.useRef(false);
      return a.useEffect(() => {
        if (!T.current && ((0, w.A)("hasUseEffectFired", true), (0, w.A)("trackedPidFocused", m), o)) {
          if (null == c) return void(0, w.A)("errorMessage", "No targetOverlayWindow");
          if (!m) {
            D.current || (s.A.updateOverlayState(I.A.getTargetPID(), x.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), D.current = true);
            return
          }
          T.current = true, (0, w.A)("reactInitializationStarted", true), k(c, e)
        }
      }, [k, m, e, c, o]), (0, l.l0)(() => {
        clearInterval(G.current), E.current = true
      }), n = (0, i.bG)([f.A], () => f.A.windowSize(null != c ? (0, h.Q2)(c) : true)), r = (0, i.bG)([I.A], () => I.A.getFocusedWindowHandle()), a.useEffect(() => {
        let e, t;
        if (null != c && A && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
          e = c.requestAnimationFrame(() => {
            c.clearTimeout(t), s.A.overlayUIFocusedPid(null != u ? u : g.UNSET_PID, r)
          })
        }), t = c.setTimeout(() => {
          c.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(null != u ? u : g.UNSET_PID, r)
        }, 500), () => {
          c.cancelAnimationFrame(e), c.clearTimeout(t)
        }
      }, [A, c, u, r, n]), A
    }(c, O.G),
    A = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
    D = (0, i.bG)([T.A], () => T.A.isInputLocked(A), [A]);
  return m ? (0, r.jsxs)(u.A, {
    themeOverride: j.NJ8.MIDNIGHT,
    appContext: j.BRT.OVERLAY,
    withTitleBar: n,
    windowKey: c,
    title: "Discord Overlay",
    hideModals: D,
    children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(o.Al, {})]
  }) : null
})