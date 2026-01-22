/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,a,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k,
  waitForCSSLoad: () => j
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
let S = !Chunk723702.isPlatformEmbedded && false,
  P = new Chunk626584.A("AppOverlay");

function j(e, a) {
  return new Promise((t, d) => {
    let c = Date.now();
    a.current = setInterval(() => {
      if (function() {
          let a = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
            t = e.document.styleSheets,
            d = new Map;
          for (let e of t) null != e.href && d.set(e.href, e);
          for (let e of a) {
            if (null == e.href) continue;
            let a = d.get(e.href);
            if (null == a) returnfalse;
            try {
              if (0 === a.cssRules.length) returnfalse
            } catch (e) {}
          }
          returntrue
        }()) {
        t(), clearInterval(a.current);
        return
      }
      Date.now() - c > 12e4 && (d(Error("Timed out waiting for CSS to load")), clearInterval(a.current))
    }, 200)
  })
}
async function C(e, a) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    d = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (_.isPlatformEmbedded) {
    try {
      await A.Ay.isAlwaysOnTop(a)
    } catch (e) {
      P.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, v.Ue.OutOfProcess)
    }
    for (let l = 0; l < d; l++) try {
      if (!await A.Ay.waitForIPCReady(t, e)) throw Error("IPC not ready");
      A.Ay.showInactive(a);
      return
    } catch (e) {
      var c;
      if ((null == (c = e.message) ? true : c.includes("IPC")) && l < d - 1) {
        let a = t / 2 * Math.pow(2, l + 1);
        P.error("Failed to show inactive, retrying in ".concat(a, "ms"), e), await new Promise(e => setTimeout(e, a))
      } else throw (0, I.pj)(e, v.Ue.OutOfProcess), e
    }
  }
}

function D() {
  n.A.setFocusedPID(m.DEV_PID, null)
}

function V() {
  n.A.setFocusedPID(null, null)
}
let k = Chunk64700.memo(function(e) {
  let a, {
    withTitleBar: t,
    windowKey: s
  } = e;
  a = (0, l.bG)([f.A], () => f.A.getWindow(s)), (0, r.Ay)(() => {
    if (null != a) return S && (a.document.hasFocus() && n.A.setFocusedPID(m.DEV_PID, null), a.addEventListener("focus", D), a.addEventListener("blur", V)), () => {
      S && (a.removeEventListener("focus", D), a.removeEventListener("blur", V))
    }
  });
  let A = function(e, a) {
      let t, d, i = (0, l.bG)([x.A], () => !_.isPlatformEmbedded || x.A.isWindowHandleInitialized()),
        s = (0, l.bG)([f.A], () => f.A.getWindow(e)),
        o = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
        A = c.useMemo(() => !_.isPlatformEmbedded || null != o && o !== m.UNSET_PID, [o]),
        [I, g] = c.useState(false),
        E = c.useRef(false),
        w = c.useCallback(() => {
          let e = x.A.getTargetPID(),
            t = null != b.A.getVoiceChannelId();
          n.A.track(N.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: x.A.isPinned(N.uss.TEXT),
            overlay_render_method: v.Ue[y.default.getOverlayMethod(e)],
            unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(a)
          }), (0, T.Fd)()
        }, [a]),
        S = c.useRef(false),
        D = c.useRef(null),
        V = c.useCallback(async (e, a) => {
          try {
            if (await j(e, D), S.current) return;
            (0, O.A)("cssLoaded", true)
          } catch (e) {
            P.error("Timed out waiting for CSS to load", e), n.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, O.A)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await C(e, a), S.current) return;
            (0, T.Mq)()
          } catch (e) {
            n.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, O.A)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(a => {
            e.setTimeout(() => a(), 100)
          }), S.current || (g(true), w())
        }, [w]),
        k = c.useRef(false);
      return c.useEffect(() => {
        if (!E.current && ((0, O.A)("hasUseEffectFired", true), (0, O.A)("trackedPidFocused", A), i)) {
          if (null == s) return void(0, O.A)("errorMessage", "No targetOverlayWindow");
          if (!A) {
            k.current || (n.A.updateOverlayState(x.A.getTargetPID(), v.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), k.current = true);
            return
          }
          E.current = true, (0, O.A)("reactInitializationStarted", true), V(s, e)
        }
      }, [V, A, e, s, i]), (0, r.l0)(() => {
        clearInterval(D.current), S.current = true
      }), t = (0, l.bG)([p.A], () => p.A.windowSize(null != s ? (0, h.Q2)(s) : true)), d = (0, l.bG)([x.A], () => x.A.getFocusedWindowHandle()), c.useEffect(() => {
        let e, a;
        if (null != s && I && s.innerHeight === t.height && s.innerWidth === t.width) return e = s.requestAnimationFrame(() => {
          e = s.requestAnimationFrame(() => {
            s.clearTimeout(a), n.A.overlayUIFocusedPid(null != o ? o : m.UNSET_PID, d)
          })
        }), a = s.setTimeout(() => {
          s.cancelAnimationFrame(e), n.A.overlayUIFocusedPid(null != o ? o : m.UNSET_PID, d)
        }, 500), () => {
          s.cancelAnimationFrame(e), s.clearTimeout(a)
        }
      }, [I, s, o, d, t]), I
    }(s, w.G),
    I = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
    k = (0, l.bG)([E.A], () => E.A.isInputLocked(I), [I]);
  return A ? (0, d.jsxs)(o.A, {
    themeOverride: N.NJ8.MIDNIGHT,
    withTitleBar: t,
    windowKey: s,
    title: "Discord Overlay",
    hideModals: k,
    children: [(0, d.jsx)(g.A, {}), (0, d.jsx)(i.Al, {})]
  }) : null
})