/** Chunk was on 89792 **/
/** chunk id: 711635, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399882 = require("./399882.js");
let s = Chunk473749.forwardRef(function(e, t) {
  let {
    className: r,
    src: s,
    playing: a,
    preload: l = "",
    onEnded: f,
    onLoadedMetadata: i,
    onError: o,
    muted: c,
    volume: v,
    playbackRate: E
  } = e, p = n.useRef(null), [m] = n.useState(() => {
    let e = new d.Z.OGVPlayer;
    return e.preload = l, e.controls = false, e
  });
  return n.useImperativeHandle(t, () => m, [m]), n.useEffect(() => {
    let e = p.current;
    if (null != m && null != e) return e.appendChild(m), () => {
      e.removeChild(m)
    }
  }, [m]), n.useEffect(() => {
    m.src = s
  }, [m, s]), n.useEffect(() => {
    m.preload = l
  }, [m, l]), n.useEffect(() => {
    true !== a && (a ? setTimeout(() => {
      m.play()
    }, 0) : setTimeout(() => {
      m.pause()
    }, 0))
  }, [s, m, a]), n.useEffect(() => {
    true !== c && (m.muted = c)
  }, [m, c]), n.useEffect(() => {
    true !== v && (m.volume = v)
  }, [m, v]), n.useEffect(() => {
    null != E && (m.playbackRate = E)
  }, [m, E]), n.useEffect(() => {
    if (null != f) return m.addEventListener("ended", f), () => {
      m.removeEventListener("ended", f)
    }
  }, [m, f]), n.useEffect(() => {
    if (null != i) return m.addEventListener("loadedmetadata", i), () => {
      m.removeEventListener("loadedmetadata", i)
    }
  }, [m, i]), n.useEffect(() => {
    if (null != o) return m.addEventListener("error", o), () => {
      m.removeEventListener("error", o)
    }
  }, [m, o]), (0, u.jsx)("div", {
    ref: p,
    className: r
  })
})