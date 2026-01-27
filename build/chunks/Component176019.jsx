/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => M,
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
let P = !Chunk723702.isPlatformEmbedded && false,
  w = new Chunk626584.A("AppOverlay");

function S(e, t) {
  return new Promise((n, r) => {
    let l = Date.now();
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
      Date.now() - l > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
    }, 200)
  })
}
async function j(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (m.isPlatformEmbedded) {
    try {
      await A.Ay.isAlwaysOnTop(t)
    } catch (e) {
      w.error("Window does not exist while trying to show inactive", e), (0, g.pj)(e, y.Ue.OutOfProcess)
    }
    for (let a = 0; a < r; a++) try {
      if (!await A.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
      A.Ay.showInactive(t);
      return
    } catch (e) {
      var l;
      if ((null == (l = e.message) ? true : l.includes("IPC")) && a < r - 1) {
        let t = n / 2 * Math.pow(2, a + 1);
        w.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, g.pj)(e, y.Ue.OutOfProcess), e
    }
  }
}

function R() {
  i.A.setFocusedPID(b.DEV_PID, null)
}

function k() {
  i.A.setFocusedPID(null, null)
}
let M = Chunk64700.memo(function(e) {
  let t, {
    withTitleBar: n,
    windowKey: c
  } = e;
  t = (0, a.bG)([u.A], () => u.A.getWindow(c)), (0, o.Ay)(() => {
    if (null != t) return P && (t.document.hasFocus() && i.A.setFocusedPID(b.DEV_PID, null), t.addEventListener("focus", R), t.addEventListener("blur", k)), () => {
      P && (t.removeEventListener("focus", R), t.removeEventListener("blur", k))
    }
  });
  let A = function(e, t) {
      let n, r, s = (0, a.bG)([C.A], () => !m.isPlatformEmbedded || C.A.isWindowHandleInitialized()),
        c = (0, a.bG)([u.A], () => u.A.getWindow(e)),
        d = (0, a.bG)([C.A], () => C.A.getFocusedPID()),
        A = l.useMemo(() => !m.isPlatformEmbedded || null != d && d !== b.UNSET_PID, [d]),
        [g, v] = l.useState(false),
        O = l.useRef(false),
        N = l.useCallback(() => {
          let e = C.A.getTargetPID(),
            n = null != f.A.getVoiceChannelId();
          i.A.track(x.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: C.A.isPinned(x.uss.TEXT),
            overlay_render_method: y.Ue[I.default.getOverlayMethod(e)],
            unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
          }), (0, E.Fd)()
        }, [t]),
        P = l.useRef(false),
        R = l.useRef(null),
        k = l.useCallback(async (e, t) => {
          try {
            if (await S(e, R), P.current) return;
            (0, T.A)("cssLoaded", true)
          } catch (e) {
            w.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(C.A.getTargetPID(), e), (0, T.A)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await j(e, t), P.current) return;
            (0, E.Mq)()
          } catch (e) {
            i.A.setOverlayCrashed(C.A.getTargetPID(), e), (0, T.A)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), P.current || (v(true), N())
        }, [N]),
        M = l.useRef(false);
      return l.useEffect(() => {
        if (!O.current && ((0, T.A)("hasUseEffectFired", true), (0, T.A)("trackedPidFocused", A), s)) {
          if (null == c) return void(0, T.A)("errorMessage", "No targetOverlayWindow");
          if (!A) {
            M.current || (i.A.updateOverlayState(C.A.getTargetPID(), y.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), M.current = true);
            return
          }
          O.current = true, (0, T.A)("reactInitializationStarted", true), k(c, e)
        }
      }, [k, A, e, c, s]), (0, o.l0)(() => {
        clearInterval(R.current), P.current = true
      }), n = (0, a.bG)([p.A], () => p.A.windowSize(null != c ? (0, h.Q2)(c) : true)), r = (0, a.bG)([C.A], () => C.A.getFocusedWindowHandle()), l.useEffect(() => {
        let e, t;
        if (null != c && g && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
          e = c.requestAnimationFrame(() => {
            c.clearTimeout(t), i.A.overlayUIFocusedPid(null != d ? d : b.UNSET_PID, r)
          })
        }), t = c.setTimeout(() => {
          c.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(null != d ? d : b.UNSET_PID, r)
        }, 500), () => {
          c.cancelAnimationFrame(e), c.clearTimeout(t)
        }
      }, [g, c, d, r, n]), g
    }(c, N.G),
    g = (0, a.bG)([C.A], () => C.A.getFocusedPID()),
    M = (0, a.bG)([O.A], () => O.A.isInputLocked(g), [g]);
  return A ? (0, r.jsxs)(d.A, {
    themeOverride: x.NJ8.MIDNIGHT,
    withTitleBar: n,
    windowKey: c,
    title: "Discord Overlay",
    hideModals: M,
    children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(s.Al, {})]
  }) : null
})