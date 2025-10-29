/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => D
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
async function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (p.isPlatformEmbedded) {
    try {
      await g.ZP.isAlwaysOnTop(t)
    } catch (e) {
      W.error("Window does not exist while trying to show inactive", e), (0, I.D1)(e, v.gl.OutOfProcess)
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
      } else throw (0, I.D1)(e, v.gl.OutOfProcess), e
    }
  }
}
let D = Chunk647438.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, _ = function(e, t) {
    let n = (0, r.e7)([k.Z], () => !p.isPlatformEmbedded || k.Z.isWindowHandleInitialized()),
      a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
      l = (0, r.e7)([h.default], () => h.default.getFocusedPID()),
      _ = o.useMemo(() => !p.isPlatformEmbedded || null != l && l !== C.UNSET_PID, [l]),
      [s, g] = o.useState(false),
      I = o.useRef(false),
      y = o.useCallback(() => {
        let e = (0, C.getPID)(),
          n = null != f.Z.getVoiceChannelId();
        i.Z.track(S.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: k.Z.isPinned(S.Odu.TEXT),
          overlay_render_method: v.gl[T.default.getOverlayMethod(e)],
          unpinned_widget_types: u.Z.getAllUnpinnedPinnedWidgets(t)
        }), (0, w.ry)()
      }, [t]),
      B = o.useRef(false),
      D = o.useRef(null),
      O = o.useCallback(async (e, t) => {
        try {
          if (await new Promise((t, n) => {
              let a = Date.now();
              D.current = setInterval(() => {
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
                  t(), clearInterval(D.current);
                  return
                }
                Date.now() - a > 12e4 && (n(Error("Timed out waiting for CSS to load")), clearInterval(D.current))
              }, 200)
            }), B.current) return;
          (0, x.Z)("cssLoaded", true)
        } catch (e) {
          W.error("Timed out waiting for CSS to load", e), i.Z.setOverlayCrashed((0, C.getPID)(), e), (0, x.Z)("errorMessage", "CSS failed load");
          return
        }
        try {
          if (await P(e, t), B.current) return;
          (0, w.Dv)()
        } catch (e) {
          i.Z.setOverlayCrashed((0, C.getPID)(), e), (0, x.Z)("errorMessage", "showInactive failed");
          return
        }
        await new Promise(t => {
          e.setTimeout(() => t(), 100)
        }), B.current || (g(true), y())
      }, [y]),
      N = o.useRef(false);
    o.useEffect(() => {
      if (!I.current && ((0, x.Z)("hasUseEffectFired", true), (0, x.Z)("trackedPidFocused", _), n)) {
        if (null == a) return void(0, x.Z)("errorMessage", "No targetOverlayWindow");
        if (!_) {
          N.current || (i.Z.updateOverlayState((0, C.getPID)(), v.mM.WAITING_FOR_PID_FOCUS), N.current = true);
          return
        }
        I.current = true, (0, x.Z)("reactInitializationStarted", true), O(a, e)
      }
    }, [O, _, e, a, n]), (0, c.zq)(() => {
      clearInterval(D.current), B.current = true
    });
    let A = (0, r.e7)([b.Z], () => b.Z.windowSize(null != a ? (0, m.ZY)(a) : true)),
      L = (0, r.e7)([k.Z], () => k.Z.getFocusedWindowHandle());
    return o.useEffect(() => {
      if (null == a || !s || a.innerHeight !== A.height || a.innerWidth !== A.width) return;
      let e = a.requestAnimationFrame(() => {
        e = a.requestAnimationFrame(() => {
          i.Z.overlayUIFocusedPid(null != l ? l : C.UNSET_PID, L)
        })
      });
      return () => {
        a.cancelAnimationFrame(e)
      }
    }, [s, a, l, L, A]), s
  }(n, B.$S), g = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
  return _ ? (0, a.jsxs)(s.Z, {
    themeOverride: S.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: g,
    children: [(0, a.jsx)(y.Z, {}), (0, a.jsx)(l.Co, {})]
  }) : null
})