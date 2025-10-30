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
  } = e, [g, h] = a.useState(false), v = a.useRef(null), {
    file: p,
    audio: b,
    loadAudioFromFile: y
  } = (0, o.p)(), j = a.useMemo(() => (0, r.Z)(n.soundId), [n]);
  return a.useEffect(() => {
    null == v.current && (v.current = (0, u.XG)(j, n.name).then(y))
  }, [j, y, n.name]), (0, l.jsxs)("div", {
    className: f.previewContainer,
    children: [(0, l.jsx)(i.P3F, {
      onClick: m ? true : function() {
        null != b && (b.paused ? (b.volume = (0, s.Z)(t), b.currentTime = 0, b.play(), h(true), b.addEventListener("ended", () => h(false), {
          once: true
        })) : (b.pause(), h(false)))
      },
      className: f.playButton,
      "aria-label": g ? d.intl.string(d.t.hHBkuG) : d.intl.string(d.t.RscU7I),
      children: g ? (0, l.jsx)(i.wNq, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      }) : (0, l.jsx)(i.o1U, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      })
    }), (0, l.jsx)("div", {
      className: f.waveformContainer,
      children: (0, l.jsx)(c.Z, {
        className: f.waveform,
        file: p,
        audio: b
      })
    })]
  })
})