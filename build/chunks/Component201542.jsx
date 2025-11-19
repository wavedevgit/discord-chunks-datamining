/** Chunk was on web.js **/
/** chunk id: 201542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk621593 = require("./621593.js"),
  Chunk177751 = require("./177751.js"),
  Chunk62170 = require("./62170.jsx"),
  Chunk640108 = require("./640108.jsx"),
  Chunk793148 = require("./793148.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk36703 = require("./36703.js"),
  Chunk347312 = require("./347312.jsx"),
  Chunk94432 = require("./94432.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk589826 = require("./589826.js");
let I = Chunk473749.lazy(() => require.e("89792").then(require.bind(require, 711635)));

function T(e) {
  let t = (b.TC.indexOf(e) + 1) % b.TC.length,
    n = b.TC[t];
  (0, u.C)(n, d.Ir.VOICE_MESSAGE)
}

function S(e) {
  let {
    played: t,
    duration: n,
    currentTime: i
  } = e, a = null == n ? "--:--" : t ? (0, _.yv)(Math.ceil(n - i)) : (0, _.yv)(Math.ceil(n));
  return (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: v.duration,
    tabularNumbers: true,
    children: a
  })
}

function A(e, t, n) {
  i.useEffect(() => {
    let r;

    function i() {
      let a = e.current;
      null != a && (n(a.currentTime), t && (r = requestAnimationFrame(i)))
    }
    return i(), () => {
      null != r && cancelAnimationFrame(r)
    }
  }, [e, t, n])
}

function C(e, t, n) {
  i.useEffect(() => {
    if (t) return h.S.dispatch(y.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, {
      src: e
    }), h.S.subscribe(y.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r), () => {
      h.S.unsubscribe(y.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r)
    };

    function r(t) {
      let {
        src: r
      } = t;
      e !== r && n(false)
    }
  }, [e, t, n])
}
let N = Chunk473749.memo(function(e) {
  let t, {
      src: n,
      volume: a = 1,
      onVolumeChange: _,
      onMute: h,
      waveform: b,
      durationSecs: y,
      onVolumeShow: N,
      onVolumeHide: R,
      onPlay: P,
      onPause: D,
      onError: w,
      playbackCacheKey: L
    } = e,
    x = i.useRef(null),
    M = i.useMemo(() => null != L ? d.ZP.getPlaybackPosition(L) : 0, [L]),
    j = (0, s.e7)([d.ZP], () => d.ZP.getPlaybackRate(d.Ir.VOICE_MESSAGE)),
    [k, U] = i.useState(M > 0),
    [G, B] = i.useState(M),
    [Z, F] = i.useState(y),
    [V, H] = i.useState(false),
    [Y, W] = i.useState(false),
    [K, z] = i.useState(false),
    [q, X] = i.useState(false),
    [Q, J] = i.useState("none"),
    [$, ee] = i.useState(() => "function" == typeof a ? a() : a),
    et = i.useRef(true),
    en = i.useCallback(() => {
      W(e => !e), X(true)
    }, []),
    er = i.useCallback(() => {
      J("metadata")
    }, []),
    ei = i.useCallback(e => {
      let t = e.currentTarget.duration;
      isNaN(t) || F(t)
    }, []),
    ea = i.useCallback(e => {
      null != y && null != L && (0, u.U)(L, e, y)
    }, [L, y]),
    eo = i.useCallback(() => {
      W(false), null == et.current && (et.current = setTimeout(() => {
        U(false), X(false), et.current = true
      }, 500))
    }, []),
    es = i.useCallback(() => {
      K || (ea(0), eo())
    }, [eo, K, ea]),
    el = i.useCallback(e => {
      let t = x.current;
      null != t && (B(e), t.currentTime = e, U(true))
    }, []),
    ec = i.useCallback(() => {
      let e = x.current;
      if (null == e) return;
      let t = e.error;
      null == w || w(t)
    }, [w]),
    eu = i.useCallback(e => {
      let t = (0, g.A)(e, 1);
      H(0 === t), ee(t), null == _ || _(t)
    }, [_]),
    ed = i.useCallback(() => {
      H(!V), null == h || h(!V)
    }, [V, h]),
    ef = i.useCallback(() => {
      z(true)
    }, []),
    e_ = i.useCallback(() => {
      z(false), G === Z && eo(), ea(G)
    }, [G, Z, eo, ea]),
    ep = i.useCallback(e => {
      let t = x.current;
      null != Z && null != t && (el(e * Z), clearTimeout(et.current), et.current = true)
    }, [Z, el]);
  i.useEffect(() => {
    !k && Y && U(true)
  }, [Y, k]);
  let eh = i.useRef(null),
    em = {
      played: q,
      currentTime: G,
      onPause: D,
      onPlay: P
    },
    eg = i.useRef(em);
  i.useEffect(() => {
    eg.current = em
  }), i.useEffect(() => {
    M > 0 && el(M)
  }, [M, el]), i.useEffect(() => {
    let e;
    return Y && !K && (e = setInterval(() => {
      var e, t;
      ea(null != (t = null == (e = x.current) ? true : e.currentTime) ? t : 0)
    }, m.Z.Millis.SECOND)), () => {
      null != e && clearInterval(e)
    }
  }, [Y, K, ea]), i.useEffect(() => {
    let {
      played: e,
      currentTime: t,
      onPause: n,
      onPlay: r
    } = eg.current;
    if (e || Y)
      if (Y) {
        var i, a;
        eh.current = performance.now(), null == r || r(false, t, (null != (a = null == (i = x.current) ? true : i.duration) ? a : 0) * m.Z.Millis.SECOND)
      } else {
        let e = performance.now(),
          r = eh.current,
          i = null != r ? (e - r) / 1e3 : 0;
        null == n || n(t, i), ea(t), eh.current = null
      }
  }, [Y, n, Z, ea]), A(x, Y, B), C(n, Y, W);
  let eE = Y ? l.fpf : l.o1U,
    eb = Y ? O.intl.string(O.t.ZcgDJX) : O.intl.string(O.t.RscU7I),
    ey = O.intl.formatToPlainString(O.t.LgCPMt, {
      playbackRate: j
    }),
    eO = "".concat(j.toString().replace(/^0/, ""), "X");
  t = "Safari" === platform.name ? (0, r.jsx)(i.Suspense, {
    children: (0, r.jsx)(I, {
      ref: x,
      className: v.audioElement,
      src: n,
      preload: Q,
      playing: Y && !K,
      onEnded: es,
      onLoadedMetadata: ei,
      onError: ec,
      muted: V,
      volume: $,
      playbackRate: j
    })
  }) : (0, r.jsx)(f.Z, {
    ref: x,
    className: v.audioElement,
    controls: false,
    preload: Q,
    onEnded: es,
    onLoadedMetadata: ei,
    onError: ec,
    muted: V,
    volume: $,
    playbackRate: j,
    playing: Y && !K,
    children: (0, r.jsx)("source", {
      src: n
    })
  });
  let ev = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: o()(v.container, {
      [v.playing]: Y
    }),
    onMouseEnter: er,
    children: [(0, r.jsx)("div", {
      className: v.rippleContainer,
      children: (0, r.jsx)("div", {
        className: o()(v.ripple, {
          [v.reducedMotion]: ev
        })
      })
    }), (0, r.jsx)(l.P3F, {
      className: v.playButtonContainer,
      onClick: en,
      "aria-label": eb,
      children: (0, r.jsx)(eE, {
        className: v.playIcon,
        color: "currentColor",
        size: "sm"
      })
    }), (0, r.jsx)(E.Z, {
      className: v.waveform,
      waveform: b,
      currentTime: G,
      duration: null != Z ? Z : 1,
      playing: Y,
      played: k,
      onDrag: ep,
      onDragStart: ef,
      onDragEnd: e_
    }), (0, r.jsx)(S, {
      played: k,
      currentTime: G,
      duration: Z
    }), (0, r.jsx)(l.P3F, {
      className: v.playbackRateContainer,
      onClick: () => T(j),
      "aria-label": ey,
      children: (0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        className: v.playbackRate,
        children: eO
      })
    }), (0, r.jsx)(p.Z, {
      className: v.volumeButton,
      iconClassName: v.volumeButtonIcon,
      iconColor: "currentColor",
      sliderWrapperClassName: v.volumeSlider,
      muted: V,
      value: (0, g.P)($, 1),
      minValue: 0,
      maxValue: 1,
      currentWindow: window,
      onValueChange: eu,
      onToggleMute: ed,
      onVolumeShow: N,
      onVolumeHide: R
    }), t]
  })
})