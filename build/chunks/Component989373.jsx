/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => W
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
async function T(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (h.isPlatformEmbedded) {
    try {
      await b.ZP.isAlwaysOnTop(t)
    } catch (e) {
      B.error("Window does not exist while trying to show inactive", e), (0, v.D1)(e, g.gl.OutOfProcess)
    }
    for (let r = 0; r < a; r++) try {
      if (!await b.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      b.ZP.showInactive(t);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && r < a - 1) {
        let t = n / 2 * Math.pow(2, r + 1);
        B.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, v.D1)(e, g.gl.OutOfProcess), e
    }
  }
}
let W = Chunk647438.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, l = function(e, t) {
    let n = (0, r.e7)([y.ZP], () => !h.isPlatformEmbedded || y.ZP.isWindowHandleInitialized()),
      a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
      _ = o.useRef(null),
      l = o.useRef(null),
      u = o.useRef(null),
      b = (0, r.e7)([p.default], () => {
        let e = p.default.getFocusedPID();
        return !h.isPlatformEmbedded || null != e && e !== m.UNSET_PID
      }),
      [v, I] = o.useState(false),
      w = o.useRef(false),
      B = o.useCallback(() => {
        let e = (0, m.getPID)(),
          n = null != f.Z.getVoiceChannelId();
        i.Z.track(x.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: y.ZP.isPinned(x.Odu.TEXT),
          overlay_render_method: g.gl[C.default.getOverlayMethod(e)],
          unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
        }), i.Z.oopUiInitialized()
      }, [t]);
    (0, c.ZP)(() => {
      let e = e => {
        let t = null != a ? a : window;
        e.data === y.Il && t.requestAnimationFrame(() => {
          t.requestAnimationFrame(() => {
            window.parent.postMessage(y.A8, "*")
          })
        })
      };
      return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
      }
    });
    let W = o.useCallback((e, t) => {
        null == _.current && (u.current = () => {
          null != _.current && e.cancelAnimationFrame(_.current), null != l.current && e.clearTimeout(l.current)
        }, _.current = e.requestAnimationFrame(async () => {
          try {
            await T(e, t), i.Z.oopUiShowInactiveSuccess()
          } catch (e) {
            i.Z.setOverlayCrashed((0, m.getPID)(), e);
            return
          }
          l.current = e.setTimeout(() => {
            I(true), B(), u.current = null
          }, 100)
        }))
      }, [B]),
      S = o.useRef(false);
    return o.useEffect(() => {
      if (!w.current && null != a && n) {
        if (!b) {
          S.current || (i.Z.updateOverlayState((0, m.getPID)(), g.mM.WAITING_FOR_PID_FOCUS), S.current = true);
          return
        }
        w.current = true, W(a, e)
      }
    }, [W, b, e, a, n]), (0, c.zq)(() => {
      var e;
      null == (e = u.current) || e.call(u)
    }), v
  }(n, w.$S), b = (0, m.getPID)(), v = (0, r.e7)([p.default], () => p.default.isInputLocked(b), [b]);
  return l ? (0, a.jsxs)(u.Z, {
    themeOverride: x.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: v,
    children: [(0, a.jsx)(I.Z, {}), (0, a.jsx)(_.Co, {})]
  }) : null
})