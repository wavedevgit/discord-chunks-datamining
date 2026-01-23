/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => G,
  waitForCSSLoad: () => P
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
  O = new Chunk626584.A("AppOverlay");

function P(e, t) {
  return new Promise((n, a) => {
    let r = Date.now();
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
      Date.now() - r > 12e4 && (a(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
    }, 200)
  })
}
async function k(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (b.isPlatformEmbedded) {
    try {
      await h.Ay.isAlwaysOnTop(t)
    } catch (e) {
      O.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, g.Ue.OutOfProcess)
    }
    for (let l = 0; l < a; l++) try {
      if (!await h.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
      h.Ay.showInactive(t);
      return
    } catch (e) {
      var r;
      if ((null == (r = e.message) ? true : r.includes("IPC")) && l < a - 1) {
        let t = n / 2 * Math.pow(2, l + 1);
        O.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, I.pj)(e, g.Ue.OutOfProcess), e
    }
  }
}

function j() {
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
    if (null != t) return S && (t.document.hasFocus() && i.A.setFocusedPID(A.DEV_PID, null), t.addEventListener("focus", j), t.addEventListener("blur", D)), () => {
      S && (t.removeEventListener("focus", j), t.removeEventListener("blur", D))
    }
  });
  let h = function(e, t) {
      let n, a, c = (0, l.bG)([x.A], () => !b.isPlatformEmbedded || x.A.isWindowHandleInitialized()),
        s = (0, l.bG)([d.A], () => d.A.getWindow(e)),
        _ = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
        h = r.useMemo(() => !b.isPlatformEmbedded || null != _ && _ !== A.UNSET_PID, [_]),
        [I, v] = r.useState(false),
        T = r.useRef(false),
        N = r.useCallback(() => {
          let e = x.A.getTargetPID(),
            n = null != p.A.getVoiceChannelId();
          i.A.track(E.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: n,
            text_widget_connected: x.A.isPinned(E.uss.TEXT),
            overlay_render_method: g.Ue[y.default.getOverlayMethod(e)],
            unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t)
          }), (0, C.Fd)()
        }, [t]),
        S = r.useRef(false),
        j = r.useRef(null),
        D = r.useCallback(async (e, t) => {
          try {
            if (await P(e, j), S.current) return;
            (0, w.A)("cssLoaded", true)
          } catch (e) {
            O.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, w.A)("errorMessage", "CSS failed load");
            return
          }
          try {
            if (await k(e, t), S.current) return;
            (0, C.Mq)()
          } catch (e) {
            i.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, w.A)("errorMessage", "showInactive failed");
            return
          }
          await new Promise(t => {
            e.setTimeout(() => t(), 100)
          }), S.current || (v(true), N())
        }, [N]),
        G = r.useRef(false);
      return r.useEffect(() => {
        if (!T.current && ((0, w.A)("hasUseEffectFired", true), (0, w.A)("trackedPidFocused", h), c)) {
          if (null == s) return void(0, w.A)("errorMessage", "No targetOverlayWindow");
          if (!h) {
            G.current || (i.A.updateOverlayState(x.A.getTargetPID(), g.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), G.current = true);
            return
          }
          T.current = true, (0, w.A)("reactInitializationStarted", true), D(s, e)
        }
      }, [D, h, e, s, c]), (0, o.l0)(() => {
        clearInterval(j.current), S.current = true
      }), n = (0, l.bG)([f.A], () => f.A.windowSize(null != s ? (0, m.Q2)(s) : true)), a = (0, l.bG)([x.A], () => x.A.getFocusedWindowHandle()), r.useEffect(() => {
        let e, t;
        if (null != s && I && s.innerHeight === n.height && s.innerWidth === n.width) return e = s.requestAnimationFrame(() => {
          e = s.requestAnimationFrame(() => {
            s.clearTimeout(t), i.A.overlayUIFocusedPid(null != _ ? _ : A.UNSET_PID, a)
          })
        }), t = s.setTimeout(() => {
          s.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(null != _ ? _ : A.UNSET_PID, a)
        }, 500), () => {
          s.cancelAnimationFrame(e), s.clearTimeout(t)
        }
      }, [I, s, _, a, n]), I
    }(s, N.G),
    I = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
    G = (0, l.bG)([T.A], () => T.A.isInputLocked(I), [I]);
  return h ? (0, a.jsxs)(_.A, {
    themeOverride: E.NJ8.MIDNIGHT,
    withTitleBar: n,
    windowKey: s,
    title: "Discord Overlay",
    hideModals: G,
    children: [(0, a.jsx)(v.A, {}), (0, a.jsx)(c.Al, {})]
  }) : null
})