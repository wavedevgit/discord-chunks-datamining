/** Chunk was on 98920 **/
/** chunk id: 673462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk98650 = require("./98650.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk894694 = require("./894694.js"),
  Chunk367825 = require("./367825.jsx"),
  Chunk129697 = require("./129697.jsx"),
  Chunk115559 = require("./115559.jsx"),
  Chunk356659 = require("./356659.js"),
  Chunk121937 = require("./121937.js"),
  Chunk394897 = require("./394897.js");

function f(e, t) {
  let {
    applicationAudioEnabled: n,
    voiceAudioEnabled: l,
    soundboardAudioEnabled: a,
    isVoiceClip: i
  } = t;
  if (!i && n && l && a)
    if (e.includes(m.zh.ALL)) returnfalse;
    else returntrue;
  return e.includes(m.zh.APPLICATION) ? !n : e.includes(m.zh.VOICE) ? !l : !e.includes(m.zh.SOUNDBOARD) || !a
}

function v(e) {
  let {
    setRef: t,
    audioTrackLabel: n,
    src: i,
    muted: r
  } = e, s = a.useCallback(e => {
    t(e, n)
  }, [t, n]), o = a.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = n === e.label
    })
  }, [n]);
  return (0, l.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(n),
    ref: s,
    src: null != i ? i : true,
    muted: r,
    preload: "auto",
    className: p.hidden,
    onLoadedMetadata: o
  })
}
let g = Chunk473749.forwardRef(function(e, t) {
  let {
    clip: n,
    applicationAudioEnabled: g,
    voiceAudioEnabled: b,
    soundboardAudioEnabled: j
  } = e, {
    cropStart: x,
    cropEnd: y,
    setVideoPlayerRef: C,
    videoURL: k,
    audioURL: N
  } = (0, d.D)(), E = a.useRef({}), w = a.useRef(false), [S, I] = a.useState([]), O = a.useCallback(() => {
    let e = E.current.main;
    if (null == e) return;
    let t = (0, i.round)(e.currentTime, 3),
      n = (0, i.round)(x, 3);
    if (t >= (null != y ? (0, i.round)(y, 3) : (0, i.round)(e.duration, 3)) || t < n) {
      for (let e of Object.values(E.current)) null != e && (e.currentTime = x);
      returntrue
    }
  }, [x, y]), T = a.useCallback(e => {
    let t = [];
    for (let n of Object.values(e.currentTarget.audioTracks)) n.label.includes(m.zh.APPLICATION) ? n.enabled = true : n.label.includes(m.zh.VOICE) || n.label.includes(m.zh.SOUNDBOARD) ? (n.enabled = false, t.includes(n.label) || t.push(n.label)) : n.enabled = false;
    I(t)
  }, []);
  (0, r.Z)(() => {
    w.current && O() && R()
  });
  let R = a.useCallback(() => {
      for (let e of (w.current = true, O(), Object.values(E.current))) null != e && e.play()
    }, [O]),
    P = a.useCallback(() => {
      for (let e of Object.values(E.current)) null != e && e.pause()
    }, []),
    A = a.useCallback(e => {
      var t;
      for (let n of ((null == (t = E.current.main) ? true : t.paused) && (w.current = false), Object.values(E.current))) null != n && (n.currentTime = e)
    }, []),
    L = a.useCallback(() => {
      var e;
      (null == (e = E.current.main) ? true : e.paused) ? R(): P()
    }, [R, P]),
    M = a.useCallback(e => {
      E.current.main = e
    }, []),
    D = a.useCallback((e, t) => {
      E.current[t] = e
    }, []);
  a.useImperativeHandle(t, () => {
    let e = {
      play: R,
      seek: A,
      pause: P,
      videoElement: E.current.main
    };
    return C(e), e
  }, [R, A, P, C]);
  let U = a.useCallback(() => {
    A(x)
  }, [A, x]);
  if (null == k) return null;
  let Z = n.type === o.NJ.VOICE_CLIP;
  return (0, l.jsxs)("div", {
    className: h.clipsPlayer,
    children: [Z ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("audio", {
        ref: M,
        src: k,
        muted: true,
        preload: "auto"
      }), (0, l.jsx)(u.Z, {
        className: h.displayVideo
      })]
    }) : (0, l.jsx)(s.Z, {
      onClick: L,
      className: h.displayVideo,
      ref: M,
      src: k,
      muted: f(":all", {
        applicationAudioEnabled: g,
        voiceAudioEnabled: b,
        soundboardAudioEnabled: j,
        isVoiceClip: Z
      }),
      preload: "auto",
      onLoadedData: U
    }), (0, l.jsx)(c.i, {
      soundboardAudioEnabled: j,
      voiceAudioEnabled: b,
      clip: n
    }), (0, l.jsx)("audio", {
      id: "ClipsPlayerAudioTrack:application",
      src: null != N ? N : true,
      muted: f(":application", {
        applicationAudioEnabled: g,
        voiceAudioEnabled: b,
        soundboardAudioEnabled: j,
        isVoiceClip: Z
      }),
      className: p.hidden,
      preload: "auto",
      ref: e => D(e, "main:application"),
      onLoadedMetadata: T
    }), S.map(e => (0, l.jsx)(v, {
      setRef: D,
      audioTrackLabel: e,
      src: N,
      muted: f(e, {
        applicationAudioEnabled: g,
        voiceAudioEnabled: b,
        soundboardAudioEnabled: j,
        isVoiceClip: Z
      })
    }, e))]
  })
})