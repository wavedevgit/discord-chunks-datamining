/** Chunk was on 61526 **/
/** chunk id: 673462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk98650 = require("./98650.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk121937 = require("./121937.js");

function u(e) {
  let {
    setRef: t,
    audioTrackLabel: n,
    src: l,
    muted: i
  } = e, o = a.useCallback(e => {
    t(e, n)
  }, [t, n]), u = a.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = n === e.label
    })
  }, [n]);
  return (0, r.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(n),
    className: s.hidden,
    ref: o,
    src: l,
    muted: i,
    preload: "auto",
    onLoadedMetadata: u
  })
}
let c = Chunk647438.forwardRef(function(e, t) {
  let {
    src: n,
    audioSrc: c,
    applicationAudioEnabled: d,
    voiceAudioEnabled: m,
    isLoading: p,
    onDoneLoading: f,
    startTime: v = 0,
    endTime: h
  } = e, g = a.useRef({}), [x, b] = a.useState([]), j = a.useRef(false), y = a.useCallback(() => {
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
  let _ = a.useCallback(() => {
      for (let e of (j.current = true, y(), Object.values(g.current))) null != e && e.play()
    }, [y]),
    w = a.useCallback(() => {
      for (let e of Object.values(g.current)) null != e && e.pause()
    }, []),
    C = a.useCallback(e => {
      var t;
      for (let n of ((null == (t = g.current.main) ? true : t.paused) && (j.current = false), Object.values(g.current))) null != n && (n.currentTime = e)
    }, []),
    k = a.useCallback(() => {
      var e;
      (null == (e = g.current.main) ? true : e.paused) ? _(): w()
    }, [_, w]),
    O = a.useCallback(e => {
      g.current.main = e
    }, []),
    P = a.useCallback(e => {
      let t = [];
      for (let n of Object.values(e.currentTarget.audioTracks)) n.label.includes(":application") ? n.enabled = true : n.label.includes(":voice") ? (n.enabled = false, t.includes(n.label) || t.push(n.label)) : n.enabled = false;
      b(t)
    }, []),
    S = a.useCallback((e, t) => {
      g.current[t] = e
    }, []);
  return (a.useImperativeHandle(t, () => ({
    play: _,
    seek: C,
    pause: w,
    videoElement: g.current.main
  })), null == n) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Z, {
      onClick: k,
      className: p ? s.hidden : s.displayVideo,
      ref: O,
      src: n,
      muted: true,
      onLoadedData: f,
      preload: "auto"
    }), (0, r.jsx)("audio", {
      id: "ClipsPlayerAudioTrack:application",
      src: c,
      muted: !d,
      preload: "auto",
      className: s.hidden,
      ref: e => S(e, "application"),
      onLoadedMetadata: P
    }), x.map(e => (0, r.jsx)(u, {
      audioTrackLabel: e,
      setRef: S,
      src: c,
      muted: !m
    }, e))]
  })
})