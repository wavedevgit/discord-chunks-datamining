/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => D,
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
let x = !Chunk723702.isPlatformEmbedded && false,
  w = new Chunk626584.A("AppOverlay");

function j(e, t) {
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
async function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (A.isPlatformEmbedded) {
    try {
      await b.Ay.isAlwaysOnTop(t)
    } catch (e) {
      w.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, y.Ue.OutOfProcess)
    }
    for (let a = 0; a < r; a++) try {
      if (!await b.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
      b.Ay.showInactive(t);
      return
    } catch (e) {
      var l;
      if ((null == (l = e.message) ? true : l.includes("IPC")) && a < r - 1) {
        let t = n / 2 * Math.pow(2, a + 1);
        w.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, I.pj)(e, y.Ue.OutOfProcess), e
    }
  }
}

function L() {
  o.A.setFocusedPID(h.DEV_PID, null)
}

function k() {
  o.A.setFocusedPID(null, null)
}
let D = Chunk64700.memo(function(e) {
  let t, {
    withTitleBar: n,
    windowKey: s
  } = e;
  t = (0, a.bG)([u.A], () => u.A.getWindow(s)), (0, i.Ay)(() => {
    if (null != t) return x && (t.document.hasFocus() && o.A.setFocusedPID(h.DEV_PID, null), t.addEventListener("focus", L), t.addEventListener("blur", k)), () => {
      x && (t.removeEventListener("focus", L), t.removeEventListener("blur", k))
    }
  });
  let b = function(e, t) {
      let n, r, c = (0, a.bG)([v.A], () => !A.isPlatformEmbedded || v.A.isWindowHandleInitialized()),
        s = (0, a.bG)([u.A], () => u.A.getWindow(e)),
        d = (0, a.bG)([v.A], () => v.A.getFocusedPID()),
        b = l.useMemo(() => !A.isPlatformEmbedded || null != d && d !== h.UNSET_PID, [d]),
        [I, g] = l.useState(false),
        C = l.useRef(false),
        P = l.useCallback(() => {
          let e = v.A.getTargetPID(),
            n = null != f.A.getVoiceChannelId();
          o.A.track(T.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: v.A.isPinned(T.uss.TEXT),
            overlay_render_method: y.Ue[O.default.getOverlayMethod(e)],
            unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
          }), (0, E.Fd)()
        }, [t]),
        x = l.useRef(false),
        L = l.useRef(null),
        k = l.useCallback(async (e, t) => {
          try {
            if (await j(e, L), x.current) return;
            (0, N.A)("cssLoaded", true)
          } catch (e) {
            w.error("Timed out waiting for CSS to load", e), o.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, N.A)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await S(e, t), x.current) return;
            (0, E.Mq)()
          } catch (e) {
            o.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, N.A)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), x.current || (g(true), P())
        }, [P]),
        D = l.useRef(false);
      return l.useEffect(() => {
        if (!C.current && ((0, N.A)("hasUseEffectFired", true), (0, N.A)("trackedPidFocused", b), c)) {
          if (null == s) return void(0, N.A)("errorMessage", "No targetOverlayWindow");
          if (!b) {
            D.current || (o.A.updateOverlayState(v.A.getTargetPID(), y.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), D.current = true);
            return
          }
          C.current = true, (0, N.A)("reactInitializationStarted", true), k(s, e)
        }
      }, [k, b, e, s, c]), (0, i.l0)(() => {
        clearInterval(L.current), x.current = true
      }), n = (0, a.bG)([p.A], () => p.A.windowSize(null != s ? (0, m.Q2)(s) : true)), r = (0, a.bG)([v.A], () => v.A.getFocusedWindowHandle()), l.useEffect(() => {
        let e, t;
        if (null != s && I && s.innerHeight === n.height && s.innerWidth === n.width) return e = s.requestAnimationFrame(() => {
          e = s.requestAnimationFrame(() => {
            s.clearTimeout(t), o.A.overlayUIFocusedPid(null != d ? d : h.UNSET_PID, r)
          })
        }), t = s.setTimeout(() => {
          s.cancelAnimationFrame(e), o.A.overlayUIFocusedPid(null != d ? d : h.UNSET_PID, r)
        }, 500), () => {
          s.cancelAnimationFrame(e), s.clearTimeout(t)
        }
      }, [I, s, d, r, n]), I
    }(s, P.G),
    I = (0, a.bG)([v.A], () => v.A.getFocusedPID()),
    D = (0, a.bG)([C.A], () => C.A.isInputLocked(I), [I]);
  return b ? (0, r.jsxs)(d.A, {
    themeOverride: T.NJ8.MIDNIGHT,
    withTitleBar: n,
    windowKey: s,
    title: "Discord Overlay",
    hideModals: D,
    children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(c.Al, {})]
  }) : null
})