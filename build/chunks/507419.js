/** Chunk was on 56035 (4067d747b2ccf0be.js) **/
t.d(n, {
  Z: () => m
}), t(47120);
var l = t(200651),
  a = t(192379),
  r = t(481060),
  i = t(22382),
  s = t(747071),
  o = t(586826),
  u = t(174727),
  c = t(990792),
  d = t(388032),
  f = t(830556);
let m = a.memo(function(e) {
  let {
    sound: n,
    volume: t,
    disabled: m
  } = e, [h, g] = a.useState(!1), p = a.useRef(null), {
    file: b,
    audio: v,
    loadAudioFromFile: y
  } = (0, o.p)(), x = a.useMemo(() => (0, i.Z)(n.soundId), [n]);
  return a.useEffect(() => {
    null == p.current && (p.current = (0, u.XG)(x, n.name).then(y))
  }, [x, y, n.name]), (0, l.jsxs)("div", {
    className: f.previewContainer,
    children: [(0, l.jsx)(r.P3F, {
      onClick: m ? void 0 : function() {
        null != v && (v.paused ? (v.volume = (0, s.Z)(t), v.currentTime = 0, v.play(), g(!0), v.addEventListener("ended", () => g(!1), {
          once: !0
        })) : (v.pause(), g(!1)))
      },
      className: f.playButton,
      "aria-label": h ? d.NW.string(d.t.hHBkuL) : d.NW.string(d.t.RscU7O),
      children: h ? (0, l.jsx)(r.wNq, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      }) : (0, l.jsx)(r.o1U, {
        size: "xs",
        color: "currentColor",
        className: f.playIcon
      })
    }), (0, l.jsx)("div", {
      className: f.waveformContainer,
      children: (0, l.jsx)(c.Z, {
        className: f.waveform,
        file: b,
        audio: v
      })
    })]
  })
})