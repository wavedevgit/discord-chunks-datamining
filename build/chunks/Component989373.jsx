/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => P
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
  Chunk358085 = require("./358085.js");
require("./606206.js");
var Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js");
require("./371467.js");
var Chunk41534 = require("./41534.js"),
  Chunk837268 = require("./837268.js"),
  Chunk554370 = require("./554370.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk253506 = require("./253506.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js");
let S = new Chunk710845.Z("AppOverlay");
async function W(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (p.isPlatformEmbedded) {
    try {
      await b.ZP.isAlwaysOnTop(t)
    } catch (e) {
      S.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, v.gl.OutOfProcess)
    }
    for (let r = 0; r < a; r++) try {
      if (!await b.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      b.ZP.showInactive(t);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && r < a - 1) {
        let t = n / 2 * Math.pow(2, r + 1);
        S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, m.D1)(e, v.gl.OutOfProcess), e
    }
  }
}
let P = Chunk647438.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, l = function(e, t) {
    let n = (0, r.e7)([w.ZP], () => !p.isPlatformEmbedded || w.ZP.isWindowHandleInitialized()),
      a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
      _ = (0, r.e7)([h.default], () => {
        let e = h.default.getFocusedPID();
        return !p.isPlatformEmbedded || null != e && e !== g.UNSET_PID
      }),
      [l, u] = o.useState(false),
      b = o.useRef(false),
      m = o.useCallback(() => {
        let e = (0, g.getPID)(),
          n = null != f.Z.getVoiceChannelId();
        i.Z.track(B.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: w.ZP.isPinned(B.Odu.TEXT),
          overlay_render_method: v.gl[I.default.getOverlayMethod(e)],
          unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
        }), i.Z.oopUiInitialized()
      }, [t]);
    (0, c.ZP)(() => {
      let e = e => {
        let t = null != a ? a : window;
        e.data === w.Il && t.requestAnimationFrame(() => {
          t.requestAnimationFrame(() => {
            window.parent.postMessage(w.A8, "*")
          })
        })
      };
      return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
      }
    });
    let C = o.useRef(false),
      x = o.useRef(null),
      P = o.useCallback(async (e, t) => {
        try {
          if (await new Promise((t, n) => {
              let a = Date.now();
              x.current = setInterval(() => {
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
                  t(), clearInterval(x.current);
                  return
                }
                Date.now() - a > 12e4 && (n(Error("Timed out waiting for CSS to load")), clearInterval(x.current))
              }, 200)
            }), C.current) return;
          (0, y.Z)("cssLoaded", true)
        } catch (e) {
          S.error("Timed out waiting for CSS to load", e), i.Z.setOverlayCrashed((0, g.getPID)(), e), (0, y.Z)("errorMessage", "CSS failed load");
          return
        }
        try {
          if (await W(e, t), C.current) return;
          i.Z.oopUiShowInactiveSuccess()
        } catch (e) {
          i.Z.setOverlayCrashed((0, g.getPID)(), e), (0, y.Z)("errorMessage", "showInactive failed");
          return
        }
        await new Promise(t => {
          e.setTimeout(() => t(), 100)
        }), C.current || (u(true), m())
      }, [m]),
      T = o.useRef(false);
    return o.useEffect(() => {
      if (!b.current && ((0, y.Z)("hasUseEffectFired", true), (0, y.Z)("trackedPidFocused", _), n)) {
        if (null == a) return void(0, y.Z)("errorMessage", "No targetOverlayWindow");
        if (!_) {
          T.current || (i.Z.updateOverlayState((0, g.getPID)(), v.mM.WAITING_FOR_PID_FOCUS), T.current = true);
          return
        }
        b.current = true, (0, y.Z)("reactInitializationStarted", true), P(a, e)
      }
    }, [P, _, e, a, n]), (0, c.zq)(() => {
      clearInterval(x.current), C.current = true
    }), l
  }(n, x.$S), b = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
  return l ? (0, a.jsxs)(u.Z, {
    themeOverride: B.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: b,
    children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(_.Co, {})]
  }) : null
})