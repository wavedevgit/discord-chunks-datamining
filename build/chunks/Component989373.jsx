/** Chunk was on 13368 **/
/** chunk id: 989373, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk522474 = require("./522474.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk355863 = require("./355863.js"),
  Chunk944486 = require("./944486.js"),
  Chunk808506 = require("./808506.js"),
  Chunk358085 = require("./358085.js");
require("./606206.js");
var Chunk145597 = require("./145597.js");
require("./371467.js");
var Chunk837268 = require("./837268.js"),
  Chunk554370 = require("./554370.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js");
let I = Chunk647438.memo(function(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e, I = function(e, t) {
    let n = (0, o.e7)([c.Z], () => c.Z.getWindow(e)),
      r = i.useRef(null),
      u = i.useRef(null),
      h = i.useRef(null),
      g = (0, o.e7)([f.default], () => {
        let e = f.default.getFocusedPID();
        return !_.isPlatformEmbedded || null != e && e !== p.UNSET_PID
      }),
      [I, O] = i.useState(g),
      [E, S] = i.useState(false),
      C = i.useCallback(() => {
        let e = (0, p.getPID)(),
          n = null != d.Z.getVoiceChannelId();
        l.Z.track(y.rMx.OVERLAY_INITIALIZED, {
          voice_widget_connected: n,
          text_widget_connected: m.ZP.isPinned(y.Odu.TEXT),
          overlay_render_method: b.gl[v.default.getOverlayMethod(e)],
          unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
        }), l.Z.successfullyShown(e)
      }, [t]);
    (0, a.Ng)(() => {
      let e = e => {
        let t = null != n ? n : window;
        e.data === m.Il && t.requestAnimationFrame(() => {
          t.requestAnimationFrame(() => {
            window.parent.postMessage(m.A8, "*")
          })
        })
      };
      return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
      }
    });
    let P = i.useCallback(e => {
      null == r.current && (h.current = () => {
        null != r.current && e.cancelAnimationFrame(r.current), null != u.current && e.clearTimeout(u.current)
      }, r.current = e.requestAnimationFrame(() => {
        u.current = e.setTimeout(() => {
          O(true), S(true), C(), h.current = null
        }, 100)
      }))
    }, [C]);
    return i.useEffect(() => {
      (!I || null == n) && g && g && null != n && P(n)
    }, [P, I, g, n]), (0, a.Ng)(() => {
      I && null != n && P(n)
    }), (0, a.zq)(() => {
      null != h.current && h.current()
    }), E
  }(n, g.$S), O = (0, p.getPID)(), E = (0, o.e7)([f.default], () => f.default.isInputLocked(O), [O]);
  return I ? (0, r.jsx)(u.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    hideModals: E,
    children: (0, r.jsx)(h.Z, {})
  }) : null
})