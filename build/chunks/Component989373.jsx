/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => P
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
let S = new Chunk710845.Z("AppOverlay");
async function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1e3,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 3;
  if (p.isPlatformEmbedded) {
    try {
      await b.ZP.isAlwaysOnTop(t)
    } catch (e) {
      S.error("Window does not exist while trying to show inactive", e), (0, v.D1)(e, m.gl.OutOfProcess)
    }
    for (let o = 0; o < r; o++) try {
      if (!await b.ZP.waitForIPCReady(n, e)) throw Error("IPC not ready");
      b.ZP.showInactive(t);
      return
    } catch (e) {
      var i;
      if ((null == (i = e.message) ? true : i.includes("IPC")) && o < r - 1) {
        let t = n / 2 * Math.pow(2, o + 1);
        S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
      } else throw (0, v.D1)(e, m.gl.OutOfProcess), e
    }
  }
}
let P = Chunk73800.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, c = function(e, t) {
    let n = (0, o.e7)([u.Z], () => u.Z.getWindow(e)),
      r = i.useRef(null),
      c = i.useRef(null),
      s = i.useRef(null),
      b = (0, o.e7)([_.default], () => {
        let e = _.default.getFocusedPID();
        return !p.isPlatformEmbedded || null != e && e !== h.UNSET_PID
      }),
      [v, g] = i.useState(b),
      [O, S] = i.useState(false),
      P = i.useCallback(() => {
        let e = (0, h.getPID)(),
          n = null != f.Z.getVoiceChannelId();
        l.Z.track(E.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: I.ZP.isPinned(E.Odu.TEXT),
          overlay_render_method: m.gl[y.default.getOverlayMethod(e)],
          unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t)
        }), l.Z.successfullyShown(e)
      }, [t]);
    (0, a.Ng)(() => {
      let e = e => {
        let t = null != n ? n : window;
        e.data === I.Il && t.requestAnimationFrame(() => {
          t.requestAnimationFrame(() => {
            window.parent.postMessage(I.A8, "*")
          })
        })
      };
      return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
      }
    });
    let A = i.useCallback((e, t) => {
      null == r.current && (s.current = () => {
        null != r.current && e.cancelAnimationFrame(r.current), null != c.current && e.clearTimeout(c.current)
      }, r.current = e.requestAnimationFrame(async () => {
        try {
          await C(e, t)
        } catch (e) {
          l.Z.setOverlayCrashed((0, h.getPID)(), e);
          return
        }
        c.current = e.setTimeout(() => {
          g(true), S(true), P(), s.current = null
        }, 100)
      }))
    }, [P]);
    return i.useEffect(() => {
      (!v || null == n) && b && b && null != n && A(n, e)
    }, [A, v, b, e, n]), (0, a.Ng)(() => {
      v && null != n && A(n, e)
    }), (0, a.zq)(() => {
      null != s.current && s.current()
    }), O
  }(n, O.$S), b = (0, h.getPID)(), v = (0, o.e7)([_.default], () => _.default.isInputLocked(b), [b]);
  return c ? (0, r.jsx)(s.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: v,
    children: (0, r.jsx)(g.Z, {})
  }) : null
})