/** Chunk was on 61526 **/
/** chunk id: 673462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk98650 = require("./98650.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk138339 = require("./138339.js");

function u(e) {
  let {
    setRef: t,
    audioTrackLabel: n,
    src: l,
    muted: i
  } = e, o = r.useCallback(e => {
    t(e, n)
  }, [t, n]), u = r.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = n === e.label
    })
  }, [n]);
  return (0, a.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(n),
    className: s.hidden,
    ref: o,
    src: l,
    muted: i,
    preload: "auto",
    onLoadedMetadata: u
  })
}
let c = Chunk73800.forwardRef(function(e, t) {
  let {
    src: n,
    audioSrc: c,
    applicationAudioEnabled: d,
    voiceAudioEnabled: m,
    isLoading: p,
    onDoneLoading: f,
    startTime: v = 0,
    endTime: h
  } = e, g = r.useRef({}), [x, b] = r.useState([]), j = r.useRef(false), y = r.useCallback(() => {
    let e = g.current.main;
    if (null == e) return;
    let t = (0, l.round)(e.currentTime, 3),
      n = (0, l.round)(v, 3);
    if (t >= (null != h ? (0, l.round)(h, 3) : (0, l.round)(e.duration, 3)) || t < n) {
      for (let e of Object.values(g.current)) null != e && (e.currentTime = v);
      returntrue
    }
  }, [v, h]);
  (0, i.Z)(() => {
    j.current && y() && _()
  });
  let _ = r.useCallback(() => {
      for (let e of (j.current = true, y(), Object.values(g.current))) null != e && e.play()
    }, [y]),
    w = r.useCallback(() => {
      for (let e of Object.values(g.current)) null != e && e.pause()
    }, []),
    C = r.useCallback(e => {
      var t;
      for (let n of ((null == (t = g.current.main) ? true : t.paused) && (j.current = false), Object.values(g.current))) null != n && (n.currentTime = e)
    }, []),
    P = r.useCallback(() => {
      var e;
      (null == (e = g.current.main) ? true : e.paused) ? _(): w()
    }, [_, w]),
    k = r.useCallback(e => {
      g.current.main = e
    }, []),
    O = r.useCallback(e => {
      let t = [];
      for (let n of Object.values(e.currentTarget.audioTracks)) n.label.includes(":application") ? n.enabled = true : n.label.includes(":voice") ? (n.enabled = false, t.includes(n.label) || t.push(n.label)) : n.enabled = false;
      b(t)
    }, []),
    S = r.useCallback((e, t) => {
      g.current[t] = e
    }, []);
  return (r.useImperativeHandle(t, () => ({
    play: _,
    seek: C,
    pause: w,
    videoElement: g.current.main
  })), null == n) ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Z, {
      onClick: P,
      className: p ? s.hidden : s.displayVideo,
      ref: k,
      src: n,
      muted: true,
      onLoadedData: f,
      preload: "auto"
    }), (0, a.jsx)("audio", {
      id: "ClipsPlayerAudioTrack:application",
      src: c,
      muted: !d,
      preload: "auto",
      className: s.hidden,
      ref: e => S(e, "application"),
      onLoadedMetadata: O
    }), x.map(e => (0, a.jsx)(u, {
      audioTrackLabel: e,
      setRef: S,
      src: c,
      muted: !m
    }, e))]
  })
})