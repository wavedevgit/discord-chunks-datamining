/** Chunk was on 98920 **/
/** chunk id: 115559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => f,
  u: () => p
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk98650 = require("./98650.js"),
  Chunk579806 = require("./579806.js"),
  Chunk894694 = require("./894694.js"),
  Chunk39604 = require("./39604.js"),
  Chunk259612 = require("./259612.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = Chunk473749.createContext(null);

function p(e) {
  var t, p, f, v, g, b, j, x;
  let {
    children: y,
    clip: C
  } = e, k = C.type === o.NJ.SCREENSHOT, {
    initialDuration: N,
    initialCropStart: E,
    initialCropEnd: w,
    initialCurrentTime: S
  } = function(e) {
    var t, n, l, a;
    let i = e.length / 1e3,
      r = null != (l = null == (t = e.editMetadata) ? true : t.start) ? l : 0,
      s = null != (a = null == (n = e.editMetadata) ? true : n.end) ? a : 0,
      o = 0 !== r || 0 !== s && s !== i;
    return {
      initialDuration: i,
      initialCropStart: r,
      initialCropEnd: s,
      isCropped: o,
      initialCurrentTime: o ? r : i / 2
    }
  }(C), I = a.useMemo(() => null == s.Z.clips.getClipProtocolURLFromPath ? null : s.Z.clips.getClipProtocolURLFromPath(C.filepath), [C.filepath]), [O, T] = a.useState({
    clipName: C.name,
    isTemporary: null != (v = C.isTemporary) && v,
    cropStart: E,
    cropEnd: 0 === w ? N : w,
    voiceAudioEnabled: null == (g = null == (t = C.editMetadata) ? true : t.voiceAudio) || g,
    applicationAudioEnabled: null == (b = null == (p = C.editMetadata) ? true : p.applicationAudio) || b,
    soundboardAudioEnabled: null == (j = null == (f = C.editMetadata) ? true : f.soundboardAudio) || j
  }), {
    clipName: R,
    isTemporary: P,
    cropStart: A,
    cropEnd: L,
    voiceAudioEnabled: M,
    applicationAudioEnabled: D,
    soundboardAudioEnabled: U
  } = O, Z = a.useRef(null), z = a.useRef(S), [B, V] = a.useState(N), [F, _] = a.useState(false), [Y, K] = a.useState(false), W = a.useRef(new Set), H = a.useRef(false), [G, q] = a.useState(null), [J, X] = a.useState(null), [$, Q] = a.useState(null), [ee, et] = a.useState([]), [en, el] = a.useState(false), ea = a.useCallback(() => m(d({}, C), {
    name: R,
    editMetadata: {
      start: A,
      end: L,
      applicationAudio: D,
      voiceAudio: M,
      soundboardAudio: U
    }
  }), [C, R, A, L, D, M, U]), ei = a.useCallback(e => {
    Z.current = e, q(e.videoElement)
  }, []), er = a.useCallback((e, t, n) => {
    X(e), et(t), Q(n)
  }, []), es = a.useCallback(() => {
    el(true)
  }, []);
  x = C.filepath, a.useEffect(() => {
      let e = new Worker(new URL("/assets/" + n.u("36247"), n.b));
      return async function() {
        let t;
        try {
          t = await s.Z.clips.loadClip(x)
        } catch (e) {
          es();
          return
        }
        e.onmessage = e => {
          let {
            videoBuffer: t,
            audioTracks: n,
            audioBuffer: l
          } = e.data, a = URL.createObjectURL(new Blob([t], {
            type: "video/mp4"
          })), i = [];
          for (let e of n) {
            let t = URL.createObjectURL(new Blob([e.buffer], {
              type: "audio/mp4"
            }));
            i.push({
              arrayBuffer: e.buffer,
              url: t,
              trackName: e.trackName
            })
          }
          er(a, i, URL.createObjectURL(new Blob([l], {
            type: "audio/mp4"
          })))
        }, e.postMessage({
          videoBuffer: t.data.buffer
        }, [t.data.buffer])
      }(), () => {
        e.terminate()
      }
    }, [x, er, es]), a.useEffect(() => () => {
      null != J && URL.revokeObjectURL(J)
    }, [J]), a.useEffect(() => () => {
      for (let e of ee) URL.revokeObjectURL(e.url)
    }, [ee]), a.useEffect(() => () => {
      null != $ && URL.revokeObjectURL($)
    }, [$]),
    function(e, t, n, l) {
      let i = a.useRef(l);
      i.current = l, a.useEffect(() => {
        async function l() {
          let l = {},
            a = i.current;
          n || null == t || (l = {
            thumbnail: await (0, c.R)(t, a.editMetadata.start)
          }), (0, u.Tm)(e, d({}, a, l))
        }
        return () => {
          l()
        }
      }, [e, t, n, i])
    }(C.id, I, k, {
      name: R,
      editMetadata: {
        start: A,
        end: L,
        voiceAudio: M,
        applicationAudio: D,
        soundboardAudio: U
      }
    });
  let eo = a.useMemo(() => L - A, [A, L]),
    eu = a.useCallback(e => (W.current.add(e), () => {
      W.current.delete(e)
    }), [W]),
    {
      setCropStart: ec,
      setCropEnd: ed,
      setCrop: em
    } = function(e, t, n, l, r) {
      let s = a.useCallback(e => {
        var n;
        let a = (0, i.clamp)(e, 0, t - 1);
        l(e => m(d({}, e), {
          cropStart: a
        })), null == r || null == (n = r.current) || n.seek(a)
      }, [t, l, r]);
      return {
        setCropStart: s,
        setCropEnd: a.useCallback(t => {
          var a;
          let s = (0, i.clamp)(t, e + 1, n);
          l(e => m(d({}, e), {
            cropEnd: s
          })), null == r || null == (a = r.current) || a.seek(s)
        }, [e, n, l, r]),
        setCrop: a.useCallback((e, t) => {
          l(n => m(d({}, n), {
            cropStart: e,
            cropEnd: t
          }))
        }, [l])
      }
    }(A, L, B, T, Z),
    {
      play: eh,
      pause: ep,
      seek: ef
    } = function(e) {
      let t = a.useCallback(() => {
        var t;
        null == e || null == (t = e.current) || t.play()
      }, [e]);
      return {
        play: t,
        pause: a.useCallback(() => {
          var t;
          null == e || null == (t = e.current) || t.pause()
        }, [e]),
        seek: a.useCallback(t => {
          var n;
          null == e || null == (n = e.current) || n.seek(t)
        }, [e])
      }
    }(Z);
  (0, r.Z)(() => {
    var e;
    let t = null == (e = Z.current) ? true : e.videoElement;
    if (null == t || !H.current) return;
    let n = t.currentTime;
    z.current !== n && (z.current = n, W.current.forEach(e => {
      var t;
      return null == (t = e.onTimeUpdate) ? true : t.call(e, n)
    }))
  }), a.useEffect(() => {
    if (null == G) return;
    let e = () => {
        _(true), W.current.forEach(e => {
          var t;
          return null == (t = e.onPlay) ? true : t.call(e)
        })
      },
      t = () => {
        _(false), W.current.forEach(e => {
          var t;
          return null == (t = e.onPause) ? true : t.call(e)
        })
      },
      n = () => {
        V(G.duration)
      },
      l = () => {
        var e;
        K(true), V(G.duration), null == Z || null == (e = Z.current) || e.seek(S)
      },
      a = () => {
        H.current = true
      };
    if (G.addEventListener("play", e), G.addEventListener("pause", t), G.addEventListener("durationchange", n), G.addEventListener("loadedmetadata", l), G.addEventListener("seeked", a), G.duration > 0 && V(G.duration), G.readyState >= 1) {
      var i;
      K(true), null == Z || null == (i = Z.current) || i.seek(S)
    }
    return _(!G.paused), () => {
      G.removeEventListener("play", e), G.removeEventListener("pause", t), G.removeEventListener("durationchange", n), G.removeEventListener("loadedmetadata", l), G.removeEventListener("seeked", a)
    }
  }, [G, S, Z, W, _, K, V, H]);
  let ev = a.useCallback(e => {
      T(t => m(d({}, t), {
        clipName: e
      }))
    }, []),
    eg = a.useCallback(e => {
      T(t => m(d({}, t), {
        isTemporary: e
      }))
    }, []),
    eb = a.useCallback(e => {
      T(t => m(d({}, t), {
        applicationAudioEnabled: e
      }))
    }, []),
    ej = a.useCallback(e => {
      T(t => m(d({}, t), {
        voiceAudioEnabled: e
      }))
    }, []),
    ex = a.useCallback(e => {
      T(t => m(d({}, t), {
        soundboardAudioEnabled: e
      }))
    }, []),
    ey = a.useMemo(() => function() {
      let [e, t] = a.useState(z.current);
      return a.useEffect(() => {
        let e = {
          onTimeUpdate: e => {
            t(e)
          }
        };
        return W.current.add(e), () => {
          W.current.delete(e)
        }
      }, []), e
    }, [z, W]),
    eC = a.useMemo(() => ({
      useCurrentTime: ey,
      duration: B,
      isPlaying: F,
      isLoaded: Y,
      cropStart: A,
      cropEnd: L,
      cropDuration: eo,
      setCropStart: ec,
      setCropEnd: ed,
      setCrop: em,
      play: eh,
      pause: ep,
      seek: ef,
      subscribe: eu,
      setVideoPlayerRef: ei,
      videoPlayerRef: Z,
      videoURL: J,
      audioTracks: ee,
      hasError: en,
      applicationAudioEnabled: D,
      setApplicationAudioEnabled: eb,
      voiceAudioEnabled: M,
      setVoiceAudioEnabled: ej,
      soundboardAudioEnabled: U,
      setSoundboardAudioEnabled: ex,
      getEditedClip: ea,
      clipName: R,
      setClipName: ev,
      isTemporary: P,
      audioURL: $,
      setIsTemporary: eg
    }), [ey, B, F, Y, A, L, eo, ec, ed, em, eh, ep, ef, $, eu, ei, J, ee, en, D, eb, M, ej, U, ex, ea, R, ev, P, eg]);
  return (0, l.jsx)(h.Provider, {
    value: eC,
    children: y
  })
}

function f() {
  let e = Chunk473749.useContext(h);
  if (null == module) throw Error("useClipContext must be used within a ClipContextProvider");
  return module
}