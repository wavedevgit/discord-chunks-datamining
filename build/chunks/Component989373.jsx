/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => S
}), require("./415506.js"), require("./388685.js");
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
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js");
let B = new Chunk710845.Z("AppOverlay");
async function W(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (b.isPlatformEmbedded) {
    try {
      await p.ZP.isAlwaysOnTop(n)
    } catch (e) {
      B.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, v.gl.OutOfProcess)
    }
    for (let r = 0; r < a; r++) try {
      if (!await p.ZP.waitForIPCReady(t, e)) throw Error("IPC not ready");
      p.ZP.showInactive(n);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && r < a - 1) {
        let n = t / 2 * Math.pow(2, r + 1);
        B.error("Failed to show inactive, retrying in ".concat(n, "ms"), e), await new Promise(e => setTimeout(e, n))
      } else throw (0, m.D1)(e, v.gl.OutOfProcess), e
    }
  }
}
let S = Chunk647438.memo(function(e) {
  let {
    withTitleBar: n,
    windowKey: t
  } = e, l = function(e, n) {
    let t = (0, r.e7)([w.ZP], () => !b.isPlatformEmbedded || w.ZP.isWindowHandleInitialized()),
      a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
      _ = o.useRef(null),
      l = o.useRef(null),
      u = o.useRef(null),
      p = (0, r.e7)([h.default], () => {
        let e = h.default.getFocusedPID();
        return !b.isPlatformEmbedded || null != e && e !== g.UNSET_PID
      }),
      [m, C] = o.useState(false),
      y = o.useRef(false),
      B = o.useCallback(() => {
        let e = (0, g.getPID)(),
          t = null != f.Z.getVoiceChannelId();
        i.Z.track(x.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: t,
          text_widget_connected: w.ZP.isPinned(x.Odu.TEXT),
          overlay_render_method: v.gl[I.default.getOverlayMethod(e)],
          unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(n)
        }), i.Z.oopUiInitialized()
      }, [n]);
    (0, c.ZP)(() => {
      let e = e => {
        let n = null != a ? a : window;
        e.data === w.Il && n.requestAnimationFrame(() => {
          n.requestAnimationFrame(() => {
            window.parent.postMessage(w.A8, "*")
          })
        })
      };
      return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
      }
    });
    let S = o.useCallback((e, n) => {
        null == _.current && (u.current = () => {
          null != _.current && e.cancelAnimationFrame(_.current), null != l.current && e.clearTimeout(l.current)
        }, _.current = e.requestAnimationFrame(async () => {
          try {
            await W(e, n), i.Z.oopUiShowInactiveSuccess()
          } catch (e) {
            i.Z.setOverlayCrashed((0, g.getPID)(), e);
            return
          }
          l.current = e.setTimeout(() => {
            C(true), B(), u.current = null
          }, 100)
        }))
      }, [B]),
      T = o.useRef(false);
    return o.useEffect(() => {
      if (!y.current && null != a && t) {
        if (!p) {
          T.current || (i.Z.updateOverlayState((0, g.getPID)(), v.mM.WAITING_FOR_PID_FOCUS), T.current = true);
          return
        }
        y.current = true, S(a, e)
      }
    }, [S, p, e, a, t]), (0, c.zq)(() => {
      var e;
      null == (e = u.current) || e.call(u)
    }), m
  }(t, y.$S), p = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
  return l ? (0, a.jsxs)(u.Z, {
    themeOverride: x.BRd.MIDNIGHT,
    withTitleBar: n,
    windowKey: t,
    title: "Discord Overlay",
    hideModals: p,
    children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(_.Co, {})]
  }) : null
})