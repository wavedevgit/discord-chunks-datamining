/** Chunk was on 19632 **/
/** chunk id: 563076, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk194498 = require("./194498.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk372684 = require("./372684.js"),
  Chunk226421 = require("./226421.jsx"),
  Chunk252449 = require("./252449.jsx"),
  Chunk429364 = require("./429364.jsx"),
  Chunk696016 = require("./696016.js"),
  Chunk327742 = require("./327742.js"),
  Chunk866090 = require("./866090.js");

function v(e, t) {
  let {
    applicationAudioEnabled: l,
    voiceAudioEnabled: n,
    soundboardAudioEnabled: a,
    isVoiceClip: r
  } = t;
  if (!r && l && n && a)
    if (e.includes(m.gC.ALL)) returnfalse;
    else returntrue;
  return e.includes(m.gC.APPLICATION) ? !l : e.includes(m.gC.VOICE) ? !n : !e.includes(m.gC.SOUNDBOARD) || !a
}

function f(e) {
  let {
    setRef: t,
    audioTrackLabel: l,
    src: r,
    muted: i
  } = e, s = a.useCallback(e => {
    t(e, l)
  }, [t, l]), o = a.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = l === e.label
    })
  }, [l]);
  return (0, n.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(l),
    ref: s,
    src: null != r ? r : true,
    muted: i,
    preload: "auto",
    className: p.R,
    onLoadedMetadata: o
  })
}
let b = Chunk64700.forwardRef(function(e, t) {
  let {
    clip: l,
    applicationAudioEnabled: b,
    voiceAudioEnabled: g,
    soundboardAudioEnabled: j
  } = e, {
    cropStart: x,
    cropEnd: y,
    setVideoPlayerRef: C,
    videoURL: k,
    audioURL: N
  } = (0, d.T)(), E = a.useRef({}), S = a.useRef(false), [w, O] = a.useState([]), A = a.useCallback(() => {
    let e = E.current.main;
    if (null == e) return;
    let t = (0, r.round)(e.currentTime, 3),
      l = (0, r.round)(x, 3);
    if (t >= (null != y ? (0, r.round)(y, 3) : (0, r.round)(e.duration, 3)) || t < l) {
      for (let e of Object.values(E.current)) null != e && (e.currentTime = x);
      returntrue
    }
  }, [x, y]), I = a.useCallback(e => {
    let t = [];
    for (let l of Object.values(e.currentTarget.audioTracks)) l.label.includes(m.gC.APPLICATION) ? l.enabled = true : l.label.includes(m.gC.VOICE) || l.label.includes(m.gC.SOUNDBOARD) ? (l.enabled = false, t.includes(l.label) || t.push(l.label)) : l.enabled = false;
    O(t)
  }, []);
  (0, i.A)(() => {
    S.current && A() && T()
  });
  let T = a.useCallback(() => {
      for (let e of (S.current = true, A(), Object.values(E.current))) null != e && e.play()
    }, [A]),
    L = a.useCallback(() => {
      for (let e of Object.values(E.current)) null != e && e.pause()
    }, []),
    R = a.useCallback(e => {
      var t;
      for (let l of ((null == (t = E.current.main) ? true : t.paused) && (S.current = false), Object.values(E.current))) null != l && (l.currentTime = e)
    }, []),
    M = a.useCallback(() => {
      var e;
      (null == (e = E.current.main) ? true : e.paused) ? T(): L()
    }, [T, L]),
    P = a.useCallback(e => {
      E.current.main = e
    }, []),
    U = a.useCallback((e, t) => {
      E.current[t] = e
    }, []);
  a.useImperativeHandle(t, () => {
    let e = {
      play: T,
      seek: R,
      pause: L,
      videoElement: E.current.main
    };
    return C(e), e
  }, [T, R, L, C]);
  let D = a.useCallback(() => {
    R(x)
  }, [R, x]);
  if (null == k) return null;
  let z = l.type === o.nQ.VOICE_CLIP;
  return (0, n.jsxs)("div", {
    className: h.DV,
    children: [z ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("audio", {
        ref: P,
        src: k,
        muted: true,
        preload: "auto"
      }), (0, n.jsx)(u.A, {
        className: h.Ap
      })]
    }) : (0, n.jsx)(s.A, {
      onClick: M,
      className: h.Ap,
      ref: P,
      src: k,
      muted: v(":all", {
        applicationAudioEnabled: b,
        voiceAudioEnabled: g,
        soundboardAudioEnabled: j,
        isVoiceClip: z
      }),
      preload: "auto",
      onLoadedData: D
    }), (0, n.jsx)(c.E, {
      soundboardAudioEnabled: j,
      voiceAudioEnabled: g,
      clip: l
    }), (0, n.jsx)("audio", {
      id: "ClipsPlayerAudioTrack:application",
      src: null != N ? N : true,
      muted: v(":application", {
        applicationAudioEnabled: b,
        voiceAudioEnabled: g,
        soundboardAudioEnabled: j,
        isVoiceClip: z
      }),
      className: p.R,
      preload: "auto",
      ref: e => U(e, "main:application"),
      onLoadedMetadata: I
    }), w.map(e => (0, n.jsx)(f, {
      setRef: U,
      audioTrackLabel: e,
      src: N,
      muted: v(e, {
        applicationAudioEnabled: b,
        voiceAudioEnabled: g,
        soundboardAudioEnabled: j,
        isVoiceClip: z
      })
    }, e))]
  })
})