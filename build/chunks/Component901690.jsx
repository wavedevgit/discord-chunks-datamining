/** Chunk was on 31748 **/
/** chunk id: 901690, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk970984 = require("./970984.js"),
  Chunk451988 = require("./451988.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk964486 = require("./964486.js"),
  Chunk652896 = require("./652896.js"),
  Chunk834757 = require("./834757.js"),
  Chunk461782 = require("./461782.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk954571 = require("./954571.js"),
  Chunk426179 = require("./426179.js"),
  Chunk401901 = require("./401901.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk463689 = require("./463689.js"),
  Chunk139208 = require("./139208.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = {
    x: 0,
    y: 0
  },
  I = (0, Chunk735438.debounce)((e, t, n) => {
    let r = null,
      l = null;
    if (null != n && (0, g.wL)(n)) {
      var i, a;
      let e = (0, g.Iy)(n),
        t = (0, m.Ee)(e, h.A);
      r = null != (i = null == t ? true : t.name) ? i : null, l = null != (a = null == t ? true : t.id) ? a : null
    }
    y.default.track(E.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
      zoom_level: e,
      method: t,
      share_application_name: r,
      share_application_id: l
    })
  }, 2e3);

function j(e, t, n) {
  return Math.min(Math.max(t, e), n)
}
let T = Chunk64700.memo(function(e) {
  let {
    enableZoom: t = false,
    minZoom: n = 1,
    maxZoom: i = 5,
    controlsBottom: o = 8,
    idle: g = false
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["enableZoom", "minZoom", "maxZoom", "controlsBottom", "idle"]), {
    streamId: h,
    streamKey: y,
    onResize: E,
    wrapperClassName: T,
    videoComponent: w,
    mirror: P,
    paused: R
  } = m, {
    onActive: D,
    onPreventIdle: k,
    onAllowIdle: L
  } = l.useContext(_.k3), [M, U] = l.useState(false), [V, F] = l.useState(null), [G, B] = l.useState(null), [H, W] = l.useState(0), [z, Y] = l.useState(N), [K, Z] = l.useState(null), [q, X] = l.useState(null), [J, Q] = l.useState(false), [$, ee] = l.useState(n), [et, en] = l.useState(false), [er, el] = l.useState(false), [ei, ea] = l.useState(16 / 9), [eo, es] = l.useState(false), [ec, eu] = l.useState(false), ed = l.useRef(new c.Ep), ef = l.useRef(new c.Ep), ep = l.useRef(new c.Ep), eg = l.useRef(new c.Ep), em = l.useRef(null), e_ = l.useRef(null), eh = l.useRef(null), ey = (0, d.zhh)({
    value: o,
    config: C(S({}, s.config.stiff), {
      clamp: true
    })
  }, "animate-always"), eA = $ > n, eb = l.useCallback(e => {
    e.width > 0 && e.height > 0 && ea(e.width / e.height), null == E || E(e)
  }, [E]), eE = l.useCallback(e => {
    if (null == em.current) return N;
    let t = em.current.getBoundingClientRect();
    return {
      x: e.clientX - t.left - t.width / 2,
      y: e.clientY - t.top - t.height / 2
    }
  }, []), ev = l.useCallback((e, t) => {
    if (null == em.current) return N;
    let n = null != t ? t : $,
      r = em.current.clientWidth,
      l = em.current.clientHeight,
      i = r * (n - 1) / 2,
      a = l * (n - 1) / 2;
    return {
      x: j(e.x, -i, i),
      y: j(e.y, -a, a)
    }
  }, [$]), eO = l.useCallback((e, t, r) => {
    let l = j(e, n, i);
    if (null == em.current || null == t || l === $) return;
    eu(true);
    let a = l / $;
    Y(e => ev({
      x: (e.x - t.x) * a + t.x,
      y: (e.y - t.y) * a + t.y
    }, l)), ee(l), I(l, r, y), eg.current.start(2e3, () => {
      eu(false)
    })
  }, [ev, i, n, y, $]), ex = l.useCallback(e => {
    if (!eA) return;
    e.preventDefault(), e.stopPropagation();
    let t = eE(e);
    U(true), B(t), F(t), W(Date.now()), X(t), Z(z)
  }, [eE, eA, z]), eS = l.useCallback(e => {
    if ((t || eA) && D(), !M || !eA || null == q || null == K) return;
    e.preventDefault(), e.stopPropagation();
    let n = eE(e),
      r = n.x - q.x,
      l = n.y - q.y;
    Y(ev({
      x: K.x + r,
      y: K.y + l
    })), F(n)
  }, [ev, q, K, t, eE, M, eA, D]), eC = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), U(false), X(null), Z(null)
  }, []), eN = l.useCallback(e => {
    if (eA && null != G && null != V) {
      let {
        x: t,
        y: n
      } = G, {
        x: r,
        y: l
      } = V;
      (Math.sqrt((r - t) ** 2 + (l - n) ** 2) > .01 || Date.now() - H >= 500) && (e.preventDefault(), e.stopPropagation())
    }
  }, [eA, G, H, V]), eI = l.useCallback(() => {
    U(false), X(null), Z(null)
  }, []), ej = l.useCallback(e => {
    t && (en(true), eO($ - e.deltaY / 100, eE(e), "wheel"), D(), ed.current.start(100, () => {
      en(false)
    }))
  }, [t, eO, $, eE, D]), eT = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), eO($ + .25, N, "button")
  }, [eO, $]), ew = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), eO($ - .25, N, "button")
  }, [eO, $]), eP = l.useCallback(e => {
    el(true), eO(e, N, "slider"), D(), ef.current.start(100, () => {
      el(false)
    })
  }, [eO, D]), eR = l.useCallback(() => {
    k("interact")
  }, [k]), eD = l.useCallback(() => {
    Q(false), L("interact")
  }, [L]), ek = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []), eL = l.useCallback(e => {
    if (null == e_.current || null == em.current) return;
    let t = e_.current.getBoundingClientRect(),
      n = em.current.clientWidth,
      r = em.current.clientHeight,
      l = e.x - t.left,
      i = e.y - t.top;
    Y(ev({
      x: (.5 - l / t.width) * n * $,
      y: (.5 - i / t.height) * r * $
    }))
  }, [ev, $]), eM = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), Q(true), eL({
      x: e.clientX,
      y: e.clientY
    })
  }, [eL]), eU = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), J && eL({
      x: e.clientX,
      y: e.clientY
    })
  }, [J, eL]), eV = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), Q(false)
  }, []), eF = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []);
  (0, f.i4)(em, l.useCallback(e => {
    let {
      width: t,
      height: n
    } = e;
    if (!eA || null == t || null == n) return;
    let r = eh.current;
    if (null == r) {
      eh.current = {
        width: t,
        height: n
      };
      return
    }
    let {
      width: l,
      height: i
    } = r;
    1 > Math.abs(t - l) && 1 > Math.abs(n - i) || (es(true), Y(e => {
      let r = l * ($ - 1) / 2,
        a = i * ($ - 1) / 2,
        o = t * ($ - 1) / 2,
        s = n * ($ - 1) / 2;
      return ev({
        x: (0 !== r ? e.x / r : 0) * o,
        y: (0 !== a ? e.y / a : 0) * s
      })
    }), eh.current = {
      width: t,
      height: n
    }, ep.current.start(100, () => {
      es(false)
    }))
  }, [ev, eA, $]), [eA, $]), (0, p.l0)(() => {
    ed.current.stop(), ef.current.stop(), ep.current.stop(), eg.current.stop()
  }), l.useEffect(() => {
    null != h && (0, A.c)(h, true, t && eA ? $ : 1)
  }, [t, eA, h, $]);
  let eG = l.useMemo(() => {
      let e = ev(z);
      return {
        "--custom-zoom-scale": $,
        "--custom-pan-x": "".concat(e.x, "px"),
        "--custom-pan-y": "".concat(e.y, "px"),
        "--custom-zoom-transition": M || eo || et || er ? "none" : "transform 0.15s ease-out"
      }
    }, [ev, M, eo, et, er, z, $]),
    eB = l.useMemo(() => {
      let e = 120 * Math.min(ei, 32 / 9);
      return {
        "--custom-zoom-minimap-width": "".concat(e, "px"),
        "--custom-zoom-minimap-height": "".concat(120, "px")
      }
    }, [ei]),
    eH = l.useMemo(() => {
      let e = null != em.current ? em.current.clientWidth : 1,
        t = null != em.current ? em.current.clientHeight : 1,
        n = 1 / $,
        r = 1 / $,
        l = .5 - z.x / (e * $),
        i = .5 - z.y / (t * $);
      return {
        "--custom-zoom-indicator-left": "".concat(100 * j(l - n / 2, 0, 1 - n), "%"),
        "--custom-zoom-indicator-top": "".concat(100 * j(i - r / 2, 0, 1 - r), "%"),
        "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
        "--custom-zoom-indicator-height": "".concat(100 * r, "%"),
        "--custom-zoom-indicator-transition": M || J || et || er ? "none" : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out"
      }
    }, [M, J, et, er, z, $]);
  return (0, r.jsxs)("div", {
    ref: em,
    className: a()(x.iE, T, {
      [x.rc]: t && eA,
      [x.d$]: M
    }),
    onMouseDown: ex,
    onMouseMove: eS,
    onMouseUp: eC,
    onMouseLeave: eI,
    onWheel: ej,
    children: [(0, r.jsx)(d.DUT, {
      onClick: eN,
      children: null != h && (0, r.jsx)("div", {
        className: a()(x.j, x.L2),
        style: eG,
        children: (0, r.jsx)(b.A, C(S({}, m), {
          onResize: eb,
          wrapperClassName: true
        }))
      })
    }), t && null != h && (0, r.jsx)(s.animated.div, {
      className: a()(x.Vp, {
        [x.N7]: g
      }),
      style: {
        bottom: ey.value
      },
      children: (0, r.jsxs)("div", {
        className: a()(x.mu, {
          [x.He]: ec || eA
        }),
        onMouseEnter: eR,
        onMouseLeave: eD,
        onClick: ek,
        children: [(ec || eA) && (0, r.jsx)(d.DUT, {
          onClick: eF,
          onMouseEnter: eR,
          onMouseLeave: eD,
          children: (0, r.jsxs)("div", {
            ref: e_,
            className: x.Wc,
            style: eB,
            onMouseDown: eM,
            onMouseMove: eU,
            onMouseUp: eV,
            children: [(0, r.jsx)(w, {
              className: a()(x.BZ, {
                [O.mirror]: P
              }),
              streamId: h,
              paused: R,
              reportContainerResized: false
            }), (0, r.jsx)("div", {
              className: x.xq,
              style: eH
            })]
          })
        }), (0, r.jsxs)("div", {
          className: x.GK,
          children: [(ec || eA) && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.m_, {
              text: v.intl.string(v.t.M6Cmwy),
              position: "top",
              children: (0, r.jsx)(d.K0, {
                icon: d.V0_,
                onClick: ew,
                disabled: $ <= n,
                variant: "overlay-secondary",
                size: "sm",
                "aria-label": v.intl.string(v.t.M6Cmwy)
              })
            }), (0, r.jsx)(d.Apm, {
              minValue: n,
              maxValue: i,
              initialValue: $,
              value: $,
              asValueChanges: eP,
              onValueRender: e => "".concat(Math.round(100 * e), "%"),
              "aria-label": v.intl.string(v.t.grzPmr)
            })]
          }), (0, r.jsx)(u.m_, {
            text: v.intl.string(v.t["9hMafy"]),
            position: "top",
            children: (0, r.jsx)(d.K0, {
              icon: d.r1u,
              onClick: eT,
              disabled: $ >= i,
              variant: "overlay-secondary",
              size: "sm",
              "aria-label": v.intl.string(v.t["9hMafy"])
            })
          })]
        })]
      })
    })]
  })
})