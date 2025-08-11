/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w
}), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let I = new Chunk710845.Z("AppOverlay");
async function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (b.isPlatformEmbedded) {
    try {
      await h.ZP.isAlwaysOnTop(t)
    } catch (e) {
      I.error("Window does not exist while trying to show inactive", e), (0, g.D1)(e, v.gl.OutOfProcess)
    }
    for (let o = 0; o < r; o++) try {
      if (!await h.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      h.ZP.showInactive(t);
      return
    } catch (e) {
      var a;
      if ((null == (a = e.message) ? true : a.includes("IPC")) && o < r - 1) {
        let t = n / 2 * Math.pow(2, o + 1);
        I.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, g.D1)(e, v.gl.OutOfProcess), e
    }
  }
}
let w = Chunk73800.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, c = function(e, t) {
    let n = (0, o.e7)([u.Z], () => u.Z.getWindow(e)),
      r = a.useRef(null),
      c = a.useRef(null),
      d = a.useRef(null),
      h = (0, o.e7)([_.default], () => {
        let e = _.default.getFocusedPID();
        return !b.isPlatformEmbedded || null != e && e !== p.UNSET_PID
      }),
      [g, m] = a.useState(h),
      [y, I] = a.useState(false),
      w = a.useCallback(() => {
        let e = (0, p.getPID)(),
          n = null != f.Z.getVoiceChannelId();
        l.Z.track(O.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: C.ZP.isPinned(O.Odu.TEXT),
          overlay_render_method: v.gl[E.default.getOverlayMethod(e)],
          unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
        }), l.Z.successfullyShown(e)
      }, [t]);
    (0, i.Ng)(() => {
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
    let P = a.useCallback((e, t) => {
      null == r.current && (d.current = () => {
        null != r.current && e.cancelAnimationFrame(r.current), null != c.current && e.clearTimeout(c.current)
      }, r.current = e.requestAnimationFrame(async () => {
        try {
          await S(e, t)
        } catch (e) {
          l.Z.setOverlayCrashed((0, p.getPID)(), e);
          return
        }
        c.current = e.setTimeout(() => {
          m(true), I(true), w(), d.current = null
        }, 100)
      }))
    }, [w]);
    return a.useEffect(() => {
      (!g || null == n) && h && h && null != n && P(n, e)
    }, [P, g, h, e, n]), (0, i.Ng)(() => {
      g && null != n && P(n, e)
    }), (0, i.zq)(() => {
      null != d.current && d.current()
    }), y
  }(n, y.$S), h = (0, p.getPID)(), g = (0, o.e7)([_.default], () => _.default.isInputLocked(h), [h]);
  return c ? <d.Z withTitleBar={t} windowKey={n} title={"Discord Overlay"} hideModals={g}><m.Z /></d.Z> : null
})