/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => I
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(607070),
  u = n(62170),
  d = n(640108),
  f = n(793148),
  _ = n(585483),
  p = n(70956),
  h = n(36703),
  g = n(347312),
  m = n(981631),
  E = n(388032),
  v = n(667259);
let b = i.lazy(() => n.e("89792").then(n.bind(n, 711635)));

function y(e) {
  let {
    played: t,
    duration: n,
    currentTime: i
  } = e, o = null == n ? "--:--" : t ? (0, d.yv)(Math.ceil(n - i)) : (0, d.yv)(Math.ceil(n));
  return (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: v.duration,
    tabularNumbers: !0,
    children: o
  })
}

function O(e, t, n) {
  i.useEffect(() => {
    let r;

    function i() {
      let o = e.current;
      if (null != o) n(o.currentTime), t && (r = requestAnimationFrame(i))
    }
    return i(), () => {
      null != r && cancelAnimationFrame(r)
    }
  }, [e, t, n])
}

function S(e, t, n) {
  i.useEffect(() => {
    if (t) return _.S.dispatch(m.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, {
      src: e
    }), _.S.subscribe(m.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r), () => {
      _.S.unsubscribe(m.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r)
    };

    function r(t) {
      let {
        src: r
      } = t;
      e !== r && n(!1)
    }
  }, [e, t, n])
}
let I = i.memo(function(e) {
  let t, {
      src: n,
      volume: o = 1,
      onVolumeChange: d,
      onMute: _,
      waveform: m,
      durationSecs: I,
      onVolumeShow: T,
      onVolumeHide: N,
      onPlay: A,
      onPause: C,
      onError: R
    } = e,
    P = i.useRef(null),
    [D, w] = i.useState(0),
    [L, x] = i.useState(I),
    [M, k] = i.useState(!1),
    [j, U] = i.useState(!1),
    [G, B] = i.useState(!1),
    [V, F] = i.useState(!1),
    [Z, H] = i.useState("none"),
    [W, Y] = i.useState(() => "function" == typeof o ? o() : o),
    K = i.useRef(void 0),
    z = i.useCallback(() => {
      U(e => !e)
    }, []),
    q = i.useCallback(() => {
      H("metadata")
    }, []),
    Q = i.useCallback(e => {
      let t = e.currentTarget.duration;
      !isNaN(t) && x(t)
    }, []),
    X = i.useCallback(() => {
      U(!1), null == K.current && (K.current = setTimeout(() => {
        F(!1), K.current = void 0
      }, 500))
    }, []),
    J = i.useCallback(() => {
      !G && X()
    }, [X, G]),
    $ = i.useCallback(() => {
      let e = P.current;
      if (null == e) return;
      let t = e.error;
      null == R || R(t)
    }, [R]),
    ee = i.useCallback(e => {
      let t = (0, h.A)(e, 1);
      k(0 === t), Y(t), null == d || d(t)
    }, [d]),
    et = i.useCallback(() => {
      k(!M), null == _ || _(!M)
    }, [M, _]),
    en = i.useCallback(() => {
      B(!0)
    }, []),
    er = i.useCallback(() => {
      B(!1), D === L && X()
    }, [D, L, X]),
    ei = i.useCallback(e => {
      let t = P.current;
      if (null == L || null == t) return;
      let n = e * L;
      w(n), t.currentTime = n, F(!0), clearTimeout(K.current), K.current = void 0
    }, [L]);
  i.useEffect(() => {
    !V && j && F(!0)
  }, [j, V]);
  let eo = i.useRef(null),
    ea = {
      played: V,
      currentTime: D,
      onPause: C,
      onPlay: A
    },
    es = i.useRef(ea);
  i.useEffect(() => {
    es.current = ea
  }), i.useEffect(() => {
    let {
      played: e,
      currentTime: t,
      onPause: n,
      onPlay: r
    } = es.current;
    if (e || j) {
      if (j) {
        var i, o;
        eo.current = performance.now(), null == r || r(!1, t, (null !== (o = null === (i = P.current) || void 0 === i ? void 0 : i.duration) && void 0 !== o ? o : 0) * p.Z.Millis.SECOND)
      } else {
        let e = performance.now(),
          r = eo.current,
          i = null != r ? (e - r) / 1e3 : 0;
        null == n || n(t, i), eo.current = null
      }
    }
  }, [j]), O(P, j, w), S(n, j, U);
  let el = j ? l.fpf : l.o1U,
    ec = j ? E.NW.string(E.t.ZcgDJS) : E.NW.string(E.t.RscU7O);
  "Safari" === platform.name ? t = (0, r.jsx)(i.Suspense, {
    children: (0, r.jsx)(b, {
      ref: P,
      className: v.audioElement,
      src: n,
      preload: Z,
      playing: j && !G,
      onEnded: J,
      onLoadedMetadata: Q,
      onError: $,
      muted: M,
      volume: W
    })
  }) : t = (0, r.jsx)(u.Z, {
    ref: P,
    className: v.audioElement,
    controls: !1,
    preload: Z,
    onEnded: J,
    onLoadedMetadata: Q,
    onError: $,
    muted: M,
    volume: W,
    playing: j && !G,
    children: (0, r.jsx)("source", {
      src: n
    })
  });
  let eu = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
    {
      enabled: ed
    } = (0, l.bWb)();
  return (0, r.jsxs)("div", {
    className: a()(v.container, {
      [v.playing]: j
    }),
    onMouseEnter: q,
    children: [(0, r.jsx)("div", {
      className: v.rippleContainer,
      children: (0, r.jsx)("div", {
        className: a()(v.ripple, {
          [v.reducedMotion]: eu
        })
      })
    }), (0, r.jsx)(l.P3F, {
      className: v.playButtonContainer,
      onClick: z,
      "aria-label": ec,
      children: (0, r.jsx)(el, {
        className: a()(v.playIcon, {
          [v.oldPlayIconSpacing]: !ed && !j
        }),
        size: "custom",
        color: "currentColor",
        width: 18,
        height: 18
      })
    }), (0, r.jsx)(g.Z, {
      className: v.waveform,
      waveform: m,
      currentTime: D,
      duration: null != L ? L : 1,
      playing: j,
      played: V,
      onDrag: ei,
      onDragStart: en,
      onDragEnd: er
    }), (0, r.jsx)(y, {
      played: V,
      currentTime: D,
      duration: L
    }), (0, r.jsx)(f.Z, {
      className: v.volumeButton,
      iconClassName: v.volumeButtonIcon,
      iconColor: "currentColor",
      sliderWrapperClassName: v.volumeSlider,
      muted: M,
      value: (0, h.P)(W, 1),
      minValue: 0,
      maxValue: 1,
      currentWindow: window,
      onValueChange: ee,
      onToggleMute: et,
      onVolumeShow: T,
      onVolumeHide: N
    }), t]
  })
})