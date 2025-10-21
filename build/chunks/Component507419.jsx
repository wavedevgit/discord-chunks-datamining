/** Chunk was on 56035 **/
/** chunk id: 507419, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk586826 = require("./586826.js"),
  Chunk174727 = require("./174727.js"),
  Chunk990792 = require("./990792.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk612926 = require("./612926.js");
let m = Chunk647438.memo(function(e) {
  let {
    sound: n,
    volume: t,
    disabled: m
  } = e, [g, h] = l.useState(false), p = l.useRef(null), {
    file: b,
    audio: y,
    loadAudioFromFile: v
  } = (0, s.p)(), x = l.useMemo(() => (0, i.Z)(n.soundId), [n]);
  return l.useEffect(() => {
    null == p.current && (p.current = (0, u.XG)(x, n.name).then(v))
  }, [x, v, n.name]), (0, a.jsxs)("div", {
    className: f.previewContainer,
    children: [(0, a.jsx)(r.P3F, {
      onClick: m ? true : function() {
        null != y && (y.paused ? (y.volume = (0, o.Z)(t), y.currentTime = 0, y.play(), h(true), y.addEventListener("ended", () => h(false), {
          once: true
        })) : (y.pause(), h(false)))
      },
      className: f.playButton,
      "aria-label": g ? d.intl.string(d.t.hHBkuG) : d.intl.string(d.t.RscU7I),
      children: g ? (0, a.jsx)(r.wNq, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      }) : (0, a.jsx)(r.o1U, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      })
    }), (0, a.jsx)("div", {
      className: f.waveformContainer,
      children: (0, a.jsx)(c.Z, {
        className: f.waveform,
        file: b,
        audio: y
      })
    })]
  })
})