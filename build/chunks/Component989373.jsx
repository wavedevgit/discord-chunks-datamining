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
let S = new Chunk710845.Z("AppOverlay");
async function x(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (p.isPlatformEmbedded) {
    try {
      await h.ZP.isAlwaysOnTop(t)
    } catch (e) {
      S.error("Window does not exist while trying to show inactive", e), (0, v.D1)(e, b.gl.OutOfProcess)
    }
    for (let r = 0; r < a; r++) try {
      if (!await h.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      h.ZP.showInactive(t);
      return
    } catch (e) {
      var o;
      if ((null == (o = e.message) ? true : o.includes("IPC")) && r < a - 1) {
        let t = n / 2 * Math.pow(2, r + 1);
        S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, v.D1)(e, b.gl.OutOfProcess), e
    }
  }
}
let E = Chunk647438.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, l = function(e, t) {
    let n = (0, r.e7)([_.Z], () => _.Z.getWindow(e)),
      a = o.useRef(null),
      l = o.useRef(null),
      u = o.useRef(null),
      h = (0, r.e7)([s.default], () => {
        let e = s.default.getFocusedPID();
        return !p.isPlatformEmbedded || null != e && e !== m.UNSET_PID
      }),
      [v, g] = o.useState(h),
      [y, S] = o.useState(false),
      E = o.useCallback(() => {
        let e = (0, m.getPID)(),
          n = null != f.Z.getVoiceChannelId();
        i.Z.track(w.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: C.ZP.isPinned(w.Odu.TEXT),
          overlay_render_method: b.gl[I.default.getOverlayMethod(e)],
          unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t)
        }), i.Z.successfullyShown(e, false)
      }, [t]);
    (0, c.Ng)(() => {
      let e = e => {
        let t = null != n ? n : window;
        e.data === C.Il && t.requestAnimationFrame(() => {
          t.requestAnimationFrame(() => {
            window.parent.postMessage(C.A8, "*")
          })
        })
      };
      return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
      }
    });
    let B = o.useCallback((e, t) => {
      null == a.current && (u.current = () => {
        null != a.current && e.cancelAnimationFrame(a.current), null != l.current && e.clearTimeout(l.current)
      }, a.current = e.requestAnimationFrame(async () => {
        try {
          await x(e, t)
        } catch (e) {
          i.Z.setOverlayCrashed((0, m.getPID)(), e);
          return
        }
        l.current = e.setTimeout(() => {
          g(true), S(true), E(), u.current = null
        }, 100)
      }))
    }, [E]);
    return o.useEffect(() => {
      (!v || null == n) && h && h && null != n && B(n, e)
    }, [B, v, h, e, n]), (0, c.Ng)(() => {
      v && null != n && B(n, e)
    }), (0, c.zq)(() => {
      null != u.current && u.current()
    }), y
  }(n, y.$S), h = (0, m.getPID)(), v = (0, r.e7)([s.default], () => s.default.isInputLocked(h), [h]), S = (0, r.e7)([C.ZP], () => C.ZP.isOverlaySuccessfullyShown(h), [h]);
  return l && S ? (0, a.jsx)(u.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: v,
    children: (0, a.jsx)(g.Z, {})
  }) : null
})