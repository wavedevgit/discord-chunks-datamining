/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
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
let x = new Chunk710845.Z("AppOverlay");
async function B(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (m.isPlatformEmbedded) {
    try {
      await h.ZP.isAlwaysOnTop(t)
    } catch (e) {
      x.error("Window does not exist while trying to show inactive", e), (0, b.D1)(e, g.gl.OutOfProcess)
    }
    for (let r = 0; r < a; r++) try {
      if (!await h.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      h.ZP.showInactive(t);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && r < a - 1) {
        let t = n / 2 * Math.pow(2, r + 1);
        x.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, b.D1)(e, g.gl.OutOfProcess), e
    }
  }
}
let E = Chunk647438.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, _ = function(e, t) {
    let n = (0, r.e7)([u.Z], () => u.Z.getWindow(e)),
      a = o.useRef(null),
      l = o.useRef(null),
      _ = o.useRef(null),
      d = (0, r.e7)([p.default], () => {
        let e = p.default.getFocusedPID();
        return !m.isPlatformEmbedded || null != e && e !== v.UNSET_PID
      }),
      [h, b] = o.useState(false),
      I = o.useRef(false),
      w = o.useCallback(() => {
        let e = (0, v.getPID)(),
          n = null != s.Z.getVoiceChannelId();
        i.Z.track(S.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: y.ZP.isPinned(S.Odu.TEXT),
          overlay_render_method: g.gl[C.default.getOverlayMethod(e)],
          unpinned_widget_types: f.Z.getAllUnpinnedPinnedWidgets(t)
        }), i.Z.successfullyShown(e)
      }, [t]);
    (0, c.Ng)(() => {
      let e = e => {
        let t = null != n ? n : window;
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
    let x = o.useCallback((e, t) => {
      null == a.current && (_.current = () => {
        null != a.current && e.cancelAnimationFrame(a.current), null != l.current && e.clearTimeout(l.current)
      }, a.current = e.requestAnimationFrame(async () => {
        try {
          await B(e, t)
        } catch (e) {
          i.Z.setOverlayCrashed((0, v.getPID)(), e);
          return
        }
        l.current = e.setTimeout(() => {
          b(true), w(), _.current = null
        }, 100)
      }))
    }, [w]);
    return o.useEffect(() => {
      d && null != n && (I.current || (I.current = true, x(n, e)))
    }, [x, d, e, n]), (0, c.zq)(() => {
      null != _.current && _.current()
    }), h
  }(n, w.$S), h = (0, v.getPID)(), b = (0, r.e7)([p.default], () => p.default.isInputLocked(h), [h]);
  return _ ? (0, a.jsxs)(d.Z, {
    themeOverride: S.BRd.MIDNIGHT,
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: b,
    children: [(0, a.jsx)(I.Z, {}), (0, a.jsx)(l.Co, {})]
  }) : null
})