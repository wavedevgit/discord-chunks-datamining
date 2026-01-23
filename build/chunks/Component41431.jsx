/** Chunk was on web.js **/
/** chunk id: 41431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk57625 = require("./57625.js"),
  Chunk713021 = require("./713021.js"),
  Chunk118019 = require("./118019.jsx"),
  Chunk922667 = require("./922667.jsx"),
  Chunk20504 = require("./20504.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk927813 = require("./927813.js"),
  Chunk824744 = require("./824744.js"),
  Chunk404325 = require("./404325.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk97051 = require("./97051.js");
let A = Chunk64700.lazy(() => n.e("94436").then(n.bind(n, 660207)));

function I(e) {
  let t = (y.CA.indexOf(e) + 1) % y.CA.length,
    n = y.CA[t];
  (0, u.Y)(n, d.k0.VOICE_MESSAGE)
}

function S(e) {
  let {
    played: t,
    duration: n,
    currentTime: i
  } = e, a = null == n ? "--:--" : t ? (0, p.rB)(Math.ceil(n - i)) : (0, p.rB)(Math.ceil(n));
  return (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: v.p0,
    tabularNumbers: true,
    children: a
  })
}

function T(e, t, n) {
  i.useEffect(() => {
    let r;

    function i() {
      let a = e.current;
      null == a || (n(a.currentTime), t && (r = requestAnimationFrame(i)))
    }
    return i(), () => {
      null != r && cancelAnimationFrame(r)
    }
  }, [e, t, n])
}

function C(e, t, n) {
  i.useEffect(() => {
    if (t) return h._.dispatch(b.jej.VOICE_MESSAGE_PLAYBACK_STARTED, {
      src: e
    }), h._.subscribe(b.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r), () => {
      h._.unsubscribe(b.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r)
    };

    function r(t) {
      let {
        src: r
      } = t;
      e !== r && n(false)
    }
  }, [e, t, n])
}
let N = Chunk64700.memo(function(e) {
  let t, {
      src: n,
      volume: a = 1,
      onVolumeChange: p,
      onMute: h,
      waveform: y,
      durationSecs: b,
      onVolumeShow: N,
      onVolumeHide: R,
      onPlay: w,
      onPause: P,
      onError: D,
      playbackCacheKey: x
    } = e,
    L = i.useRef(null),
    j = i.useMemo(() => null != x ? d.Ay.getPlaybackPosition(x) : 0, [x]),
    M = (0, o.bG)([d.Ay], () => d.Ay.getPlaybackRate(d.k0.VOICE_MESSAGE)),
    [k, U] = i.useState(j > 0),
    [G, V] = i.useState(j),
    [F, B] = i.useState(b),
    [H, Y] = i.useState(false),
    [W, K] = i.useState(false),
    [z, q] = i.useState(false),
    [X, Z] = i.useState(false),
    [Q, $] = i.useState("none"),
    [J, ee] = i.useState(() => "function" == typeof a ? a() : a),
    et = i.useRef(true),
    en = i.useCallback(() => {
      K(e => !e), Z(true)
    }, []),
    er = i.useCallback(() => {
      $("metadata")
    }, []),
    ei = i.useCallback(e => {
      let t = e.currentTarget.duration;
      isNaN(t) || B(t)
    }, []),
    ea = i.useCallback(e => {
      null != b && null != x && (0, u.d)(x, e, b)
    }, [x, b]),
    es = i.useCallback(() => {
      K(false), null == et.current && (et.current = setTimeout(() => {
        U(false), Z(false), et.current = true
      }, 500))
    }, []),
    eo = i.useCallback(() => {
      z || (ea(0), es())
    }, [es, z, ea]),
    el = i.useCallback(e => {
      let t = L.current;
      null != t && (V(e), t.currentTime = e, U(true))
    }, []),
    ec = i.useCallback(() => {
      let e = L.current;
      if (null == e) return;
      let t = e.error;
      null == D || D(t)
    }, [D]),
    eu = i.useCallback(e => {
      let t = (0, g.w)(e, 1);
      Y(0 === t), ee(t), null == p || p(t)
    }, [p]),
    ed = i.useCallback(() => {
      Y(!H), null == h || h(!H)
    }, [H, h]),
    ef = i.useCallback(() => {
      q(true)
    }, []),
    ep = i.useCallback(() => {
      q(false), G === F && es(), ea(G)
    }, [G, F, es, ea]),
    e_ = i.useCallback(e => {
      let t = L.current;
      null == F || null == t || (el(e * F), clearTimeout(et.current), et.current = true)
    }, [F, el]);
  i.useEffect(() => {
    !k && W && U(true)
  }, [W, k]);
  let eh = i.useRef(null),
    em = {
      played: X,
      currentTime: G,
      onPause: P,
      onPlay: w
    },
    eg = i.useRef(em);
  i.useEffect(() => {
    eg.current = em
  }), i.useEffect(() => {
    j > 0 && el(j)
  }, [j, el]), i.useEffect(() => {
    let e;
    return W && !z && (e = setInterval(() => {
      var e, t;
      ea(null != (e = null == (t = L.current) ? true : t.currentTime) ? e : 0)
    }, m.A.Millis.SECOND)), () => {
      null != e && clearInterval(e)
    }
  }, [W, z, ea]), i.useEffect(() => {
    let {
      played: e,
      currentTime: t,
      onPause: n,
      onPlay: r
    } = eg.current;
    if (e || W)
      if (W) {
        var i, a;
        eh.current = performance.now(), null == r || r(false, t, (null != (i = null == (a = L.current) ? true : a.duration) ? i : 0) * m.A.Millis.SECOND)
      } else {
        let e = performance.now(),
          r = eh.current,
          i = null != r ? (e - r) / 1e3 : 0;
        null == n || n(t, i), ea(t), eh.current = null
      }
  }, [W, n, F, ea]), T(L, W, V), C(n, W, K);
  let eE = W ? l.E$n : l.udU,
    ey = W ? O.intl.string(O.t.ZcgDJX) : O.intl.string(O.t.RscU7I),
    eb = O.intl.formatToPlainString(O.t.LgCPMt, {
      playbackRate: M
    }),
    eO = "".concat(M.toString().replace(/^0/, ""), "X");
  t = "Safari" === platform.name ? (0, r.jsx)(i.Suspense, {
    children: (0, r.jsx)(A, {
      ref: L,
      className: v.Zn,
      src: n,
      preload: Q,
      playing: W && !z,
      onEnded: eo,
      onLoadedMetadata: ei,
      onError: ec,
      muted: H,
      volume: J,
      playbackRate: M
    })
  }) : (0, r.jsx)(f.A, {
    ref: L,
    className: v.Zn,
    controls: false,
    preload: Q,
    onEnded: eo,
    onLoadedMetadata: ei,
    onError: ec,
    muted: H,
    volume: J,
    playbackRate: M,
    playing: W && !z,
    children: (0, r.jsx)("source", {
      src: n
    })
  });
  let ev = (0, o.bG)([c.A], () => c.A.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: s()(v.kL, {
      [v.he]: W
    }),
    onMouseEnter: er,
    children: [(0, r.jsx)("div", {
      className: v.Kl,
      children: (0, r.jsx)("div", {
        className: s()(v.fq, {
          [v.VN]: ev
        })
      })
    }), (0, r.jsx)(l.DUT, {
      className: v.k0,
      onClick: en,
      "aria-label": ey,
      children: (0, r.jsx)(eE, {
        className: v.uZ,
        color: "currentColor",
        size: "sm"
      })
    }), (0, r.jsx)(E.A, {
      className: v.ou,
      waveform: y,
      currentTime: G,
      duration: null != F ? F : 1,
      playing: W,
      played: k,
      onDrag: e_,
      onDragStart: ef,
      onDragEnd: ep
    }), (0, r.jsx)(S, {
      played: k,
      currentTime: G,
      duration: F
    }), (0, r.jsx)(l.DUT, {
      className: v.LJ,
      onClick: () => I(M),
      "aria-label": eb,
      children: (0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        className: v.Sn,
        children: eO
      })
    }), (0, r.jsx)(_.A, {
      className: v.bk,
      iconClassName: v._j,
      iconColor: "currentColor",
      sliderWrapperClassName: v.MQ,
      muted: H,
      value: (0, g.M)(J, 1),
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