/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => k,
  waitForCSSLoad: () => S
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
  P = new Chunk626584.A("AppOverlay");

function S(e, t) {
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
async function N(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (_.isPlatformEmbedded) {
    try {
      await g.Ay.isAlwaysOnTop(t)
    } catch (e) {
      P.error("Window does not exist while trying to show inactive", e), (0, A.pj)(e, y.Ue.OutOfProcess)
    }
    for (let i = 0; i < r; i++) try {
      if (!await g.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
      g.Ay.showInactive(t);
      return
    } catch (e) {
      var a;
      if ((null == (a = e.message) ? true : a.includes("IPC")) && i < r - 1) {
        let t = n / 2 * Math.pow(2, i + 1);
        P.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, A.pj)(e, y.Ue.OutOfProcess), e
    }
  }
}

function D() {
  l.A.setFocusedPID(m.DEV_PID, null)
}

function G() {
  l.A.setFocusedPID(null, null)
}
let k = Chunk64700.memo(function(e) {
  let t, {
    withTitleBar: n,
    windowKey: c
  } = e;
  t = (0, i.bG)([u.A], () => u.A.getWindow(c)), (0, s.Ay)(() => {
    if (null != t) return w && (t.document.hasFocus() && l.A.setFocusedPID(m.DEV_PID, null), t.addEventListener("focus", D), t.addEventListener("blur", G)), () => {
      w && (t.removeEventListener("focus", D), t.removeEventListener("blur", G))
    }
  });
  let g = function(e, t) {
      let n, r, o = (0, i.bG)([I.A], () => !_.isPlatformEmbedded || I.A.isWindowHandleInitialized()),
        c = (0, i.bG)([u.A], () => u.A.getWindow(e)),
        d = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
        g = a.useMemo(() => !_.isPlatformEmbedded || null != d && d !== m.UNSET_PID, [d]),
        [A, v] = a.useState(false),
        j = a.useRef(false),
        E = a.useCallback(() => {
          let e = I.A.getTargetPID(),
            n = null != f.A.getVoiceChannelId();
          l.A.track(C.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: I.A.isPinned(C.uss.TEXT),
            overlay_render_method: y.Ue[x.default.getOverlayMethod(e)],
            unpinned_widget_types: p.A.getAllUnpinnedPinnedWidgets(t)
          }), (0, O.Fd)()
        }, [t]),
        w = a.useRef(false),
        D = a.useRef(null),
        G = a.useCallback(async (e, t) => {
          try {
            if (await S(e, D), w.current) return;
            (0, T.A)("cssLoaded", true)
          } catch (e) {
            P.error("Timed out waiting for CSS to load", e), l.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, T.A)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await N(e, t), w.current) return;
            (0, O.Mq)()
          } catch (e) {
            l.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, T.A)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), w.current || (v(true), E())
        }, [E]),
        k = a.useRef(false);
      return a.useEffect(() => {
        if (!j.current && ((0, T.A)("hasUseEffectFired", true), (0, T.A)("trackedPidFocused", g), o)) {
          if (null == c) return void(0, T.A)("errorMessage", "No targetOverlayWindow");
          if (!g) {
            k.current || (l.A.updateOverlayState(I.A.getTargetPID(), y.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), k.current = true);
            return
          }
          j.current = true, (0, T.A)("reactInitializationStarted", true), G(c, e)
        }
      }, [G, g, e, c, o]), (0, s.l0)(() => {
        clearInterval(D.current), w.current = true
      }), n = (0, i.bG)([b.A], () => b.A.windowSize(null != c ? (0, h.Q2)(c) : true)), r = (0, i.bG)([I.A], () => I.A.getFocusedWindowHandle()), a.useEffect(() => {
        let e, t;
        if (null != c && A && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
          e = c.requestAnimationFrame(() => {
            c.clearTimeout(t), l.A.overlayUIFocusedPid(null != d ? d : m.UNSET_PID, r)
          })
        }), t = c.setTimeout(() => {
          c.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(null != d ? d : m.UNSET_PID, r)
        }, 500), () => {
          c.cancelAnimationFrame(e), c.clearTimeout(t)
        }
      }, [A, c, d, r, n]), A
    }(c, E.G),
    A = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
    k = (0, i.bG)([j.A], () => j.A.isInputLocked(A), [A]);
  return g ? (0, r.jsxs)(d.A, {
    themeOverride: C.NJ8.MIDNIGHT,
    appContext: C.BRT.OVERLAY,
    withTitleBar: n,
    windowKey: c,
    title: "Discord Overlay",
    hideModals: k,
    children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(o.Al, {})]
  }) : null
})