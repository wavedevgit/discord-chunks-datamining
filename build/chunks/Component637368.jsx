/** Chunk was on 40556 **/
/** chunk id: 637368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk102597 = require("./102597.js"),
  Chunk904054 = require("./904054.js"),
  Chunk236972 = require("./236972.js"),
  Chunk667920 = require("./667920.js"),
  Chunk997098 = require("./997098.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk214606 = require("./214606.js");
let m = Chunk64700.memo(function(e) {
  let {
    sound: t,
    volume: n,
    disabled: m
  } = e, [g, h] = i.useState(false), v = i.useRef(null), {
    file: b,
    audio: x,
    loadAudioFromFile: p
  } = (0, u.L)(), j = i.useMemo(() => (0, r.A)(t.soundId), [t]);
  return i.useEffect(() => {
    null == v.current && (v.current = (0, o.a)(j, t.name).then(p))
  }, [j, p, t.name]), (0, l.jsxs)("div", {
    className: f.i1,
    children: [(0, l.jsx)(a.DUT, {
      onClick: m ? true : function() {
        null != x && (x.paused ? (x.volume = (0, s.A)(n), x.currentTime = 0, x.play(), h(true), x.addEventListener("ended", () => h(false), {
          once: true
        })) : (x.pause(), h(false)))
      },
      className: f.Rr,
      "aria-label": g ? d.intl.string(d.t.hHBkuG) : d.intl.string(d.t.RscU7I),
      children: g ? (0, l.jsx)(a.wFz, {
        size: "xs",
        color: "currentColor",
        className: f.uZ
      }) : (0, l.jsx)(a.udU, {
        size: "xs",
        color: "currentColor",
        className: f.uZ
      })
    }), (0, l.jsx)("div", {
      className: f.FU,
      children: (0, l.jsx)(c.A, {
        className: f.ou,
        file: b,
        audio: x
      })
    })]
  })
})