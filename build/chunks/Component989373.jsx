/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => O,
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
  Chunk808506 = require("./808506.js"),
  Chunk451478 = require("./451478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk830917 = require("./830917.js"),
  Chunk41534 = require("./41534.js"),
  Chunk837268 = require("./837268.js"),
  Chunk554370 = require("./554370.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk932404 = require("./932404.js"),
  Chunk253506 = require("./253506.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js");
require("./371467.js"), require("./606206.js");
let W = new Chunk710845.Z("AppOverlay");

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
async function D(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (p.isPlatformEmbedded) {
    try {
      await g.ZP.isAlwaysOnTop(t)
    } catch (e) {
      W.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, v.gl.OutOfProcess)
    }
    for (let r = 0; r < a; r++) try {
      if (!await g.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      g.ZP.showInactive(t);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && r < a - 1) {
        let t = n / 2 * Math.pow(2, r + 1);
        W.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, m.D1)(e, v.gl.OutOfProcess), e
    }
  }
}
let O = Chunk473749.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, d = function(e, t) {
    let n = (0, r.e7)([S.Z], () => !p.isPlatformEmbedded || S.Z.isWindowHandleInitialized()),
      a = (0, r.e7)([u.Z], () => u.Z.getWindow(e)),
      l = (0, r.e7)([h.default], () => h.default.getFocusedPID()),
      d = o.useMemo(() => !p.isPlatformEmbedded || null != l && l !== I.UNSET_PID, [l]),
      [_, g] = o.useState(false),
      m = o.useRef(false),
      w = o.useCallback(() => {
        let e = S.Z.getTargetPID(),
          n = null != f.Z.getVoiceChannelId();
        i.Z.track(B.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: S.Z.isPinned(B.Odu.TEXT),
          overlay_render_method: v.gl[y.default.getOverlayMethod(e)],
          unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
        }), (0, Z.ry)()
      }, [t]),
      P = o.useRef(false),
      O = o.useRef(null),
      A = o.useCallback(async (e, t) => {
        try {
          if (await x(e, O), P.current) return;
          (0, T.Z)("cssLoaded", true)
        } catch (e) {
          W.error("Timed out waiting for CSS to load", e), i.Z.setOverlayCrashed(S.Z.getTargetPID(), e), (0, T.Z)("errorMessage", "CSS failed load");
          return
        }
        try {
          if (await D(e, t), P.current) return;
          (0, Z.Dv)()
        } catch (e) {
          i.Z.setOverlayCrashed(S.Z.getTargetPID(), e), (0, T.Z)("errorMessage", "showInactive failed");
          return
        }
        await new Promise(t => {
          e.setTimeout(() => t(), 100)
        }), P.current || (g(true), w())
      }, [w]),
      k = o.useRef(false);
    o.useEffect(() => {
      if (!m.current && ((0, T.Z)("hasUseEffectFired", true), (0, T.Z)("trackedPidFocused", d), n)) {
        if (null == a) return void(0, T.Z)("errorMessage", "No targetOverlayWindow");
        if (!d) {
          k.current || (i.Z.updateOverlayState(S.Z.getTargetPID(), v.mM.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), k.current = true);
          return
        }
        m.current = true, (0, T.Z)("reactInitializationStarted", true), A(a, e)
      }
    }, [A, d, e, a, n]), (0, c.zq)(() => {
      clearInterval(O.current), P.current = true
    });
    let E = (0, r.e7)([b.Z], () => b.Z.windowSize(null != a ? (0, C.ZY)(a) : true)),
      L = (0, r.e7)([S.Z], () => S.Z.getFocusedWindowHandle());
    return o.useEffect(() => {
      if (null == a || !_ || a.innerHeight !== E.height || a.innerWidth !== E.width) return;
      let e = a.requestAnimationFrame(() => {
        e = a.requestAnimationFrame(() => {
          i.Z.overlayUIFocusedPid(null != l ? l : I.UNSET_PID, L)
        })
      });
      return () => {
        a.cancelAnimationFrame(e)
      }
    }, [_, a, l, L, E]), _
  }(n, P.$S), g = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
  return d ? (0, a.jsxs)(_.Z, {
    themeOverride: B.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: g,
    children: [(0, a.jsx)(w.Z, {}), (0, a.jsx)(l.Co, {})]
  }) : null
})