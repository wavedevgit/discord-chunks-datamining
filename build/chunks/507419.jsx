/** Chunk was on 56035 **/
/** chunk id: 507419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk586826 = require("./586826.js"),
  Chunk174727 = require("./174727.js"),
  Chunk990792 = require("./990792.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk534844 = require("./534844.js");
let m = Chunk73800.memo(function(e) {
  let {
    sound: t,
    volume: n,
    disabled: m
  } = e, [h, g] = a.useState(false), p = a.useRef(null), {
    file: y,
    audio: b,
    loadAudioFromFile: v
  } = (0, o.p)(), x = a.useMemo(() => (0, r.Z)(t.soundId), [t]);
  return a.useEffect(() => {
    null == p.current && (p.current = (0, u.XG)(x, t.name).then(v))
  }, [x, v, t.name]), <div className={f.previewContainer}>{<i.P3F onClick={m ? true : function() {
        null != b && (b.paused ? (b.volume = (0, s.Z)(n), b.currentTime = 0, b.play(), g(true), b.addEventListener("ended", () => g(false), {
          once: true
        })) : (b.pause(), g(false)))
      }} className={f.playButton} aria-label={h ? d.intl.string(d.t.hHBkuL) : d.intl.string(d.t.RscU7O)}>{h ? (0, l.jsx)(i.wNq, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      }) : (0, l.jsx)(i.o1U, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      })}</i.P3F>}{<div className={f.waveformContainer}><c.Z className={f.waveform} file={y} audio={b} /></div>}</div>
})