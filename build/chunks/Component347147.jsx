/** Chunk was on 11010 **/
/** chunk id: 347147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk81239 = require("./81239.js"),
  Chunk846519 = require("./846519.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk493773 = require("./493773.js"),
  Chunk569545 = require("./569545.js"),
  Chunk687516 = require("./687516.js"),
  Chunk937995 = require("./937995.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823789 = require("./823789.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542133 = require("./542133.js"),
  Chunk116724 = require("./116724.js");

function x(e) {
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

function I(e, t) {
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
  T = (0, Chunk392711.debounce)((e, t, n) => {
    let r = null,
      i = null;
    if (null != n && (0, g.DB)(n)) {
      var l, a;
      let e = (0, g.my)(n),
        t = (0, m.L2)(e, h.Z);
      r = null != (l = null == t ? true : t.name) ? l : null, i = null != (a = null == t ? true : t.id) ? a : null
    }
    v.default.track(_.rMx.VIDEO_STREAM_ZOOM_CHANGED, {
      zoom_level: e,
      method: t,
      share_application_name: r,
      share_application_id: i
    })
  }, 2e3);

function j(e, t, n) {
  return Math.min(Math.max(t, e), n)
}
let P = Chunk473749.memo(function(e) {
  var {
    enableZoom: t = false,
    minZoom: n = 1,
    maxZoom: l = 5,
    controlsBottom: o = 8,
    idle: g = false
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["enableZoom", "minZoom", "maxZoom", "controlsBottom", "idle"]);
  let {
    streamId: h,
    streamKey: v,
    onResize: _,
    wrapperClassName: P,
    videoComponent: w,
    mirror: Z,
    paused: A
  } = m, {
    onActive: R,
    onPreventIdle: D,
    onAllowIdle: M
  } = i.useContext(b.nM), [k, L] = i.useState(false), [U, F] = i.useState(null), [V, W] = i.useState(null), [B, G] = i.useState(0), [H, z] = i.useState(N), [Y, K] = i.useState(null), [q, Q] = i.useState(null), [X, J] = i.useState(false), [$, ee] = i.useState(n), [et, en] = i.useState(false), [er, ei] = i.useState(false), [el, ea] = i.useState(16 / 9), [eo, ec] = i.useState(false), [es, eu] = i.useState(false), ed = i.useRef(new s.V7), ef = i.useRef(new s.V7), ep = i.useRef(new s.V7), eg = i.useRef(new s.V7), em = i.useRef(null), eb = i.useRef(null), eh = i.useRef(null), ev = (0, d.q_F)({
    value: o,
    config: I(x({}, c.config.stiff), {
      clamp: true
    })
  }, "animate-always"), eE = $ > n, ey = i.useCallback(e => {
    e.width > 0 && e.height > 0 && ea(e.width / e.height), null == _ || _(e)
  }, [_]), e_ = i.useCallback(e => {
    if (null == em.current) return N;
    let t = em.current.getBoundingClientRect();
    return {
      x: e.clientX - t.left - t.width / 2,
      y: e.clientY - t.top - t.height / 2
    }
  }, []), eO = i.useCallback((e, t) => {
    if (null == em.current) return N;
    let n = null != t ? t : $,
      r = em.current.clientWidth,
      i = em.current.clientHeight,
      l = r * (n - 1) / 2,
      a = i * (n - 1) / 2;
    return {
      x: j(e.x, -l, l),
      y: j(e.y, -a, a)
    }
  }, [$]), eC = i.useCallback((e, t, r) => {
    let i = j(e, n, l);
    if (null == em.current || null == t || i === $) return;
    eu(true);
    let a = i / $;
    z(e => eO({
      x: (e.x - t.x) * a + t.x,
      y: (e.y - t.y) * a + t.y
    }, i)), ee(i), T(i, r, v), eg.current.start(2e3, () => {
      eu(false)
    })
  }, [eO, l, n, v, $]), eS = i.useCallback(e => {
    if (!eE) return;
    e.preventDefault(), e.stopPropagation();
    let t = e_(e);
    L(true), W(t), F(t), G(Date.now()), Q(t), K(H)
  }, [e_, eE, H]), ex = i.useCallback(e => {
    if ((t || eE) && R(), !k || !eE || null == q || null == Y) return;
    e.preventDefault(), e.stopPropagation();
    let n = e_(e),
      r = n.x - q.x,
      i = n.y - q.y;
    z(eO({
      x: Y.x + r,
      y: Y.y + i
    })), F(n)
  }, [eO, q, Y, t, e_, k, eE, R]), eI = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), L(false), Q(null), K(null)
  }, []), eN = i.useCallback(e => {
    if (eE && null != V && null != U) {
      let {
        x: t,
        y: n
      } = V, {
        x: r,
        y: i
      } = U;
      (Math.sqrt((r - t) ** 2 + (i - n) ** 2) > .01 || Date.now() - B >= 500) && (e.preventDefault(), e.stopPropagation())
    }
  }, [eE, V, B, U]), eT = i.useCallback(() => {
    L(false), Q(null), K(null)
  }, []), ej = i.useCallback(e => {
    t && (en(true), eC($ - e.deltaY / 100, e_(e), "wheel"), R(), ed.current.start(100, () => {
      en(false)
    }))
  }, [t, eC, $, e_, R]), eP = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), eC($ + .25, N, "button")
  }, [eC, $]), ew = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), eC($ - .25, N, "button")
  }, [eC, $]), eZ = i.useCallback(e => {
    ei(true), eC(e, N, "slider"), R(), ef.current.start(100, () => {
      ei(false)
    })
  }, [eC, R]), eA = i.useCallback(() => {
    D("interact")
  }, [D]), eR = i.useCallback(() => {
    J(false), M("interact")
  }, [M]), eD = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []), eM = i.useCallback(e => {
    if (null == eb.current || null == em.current) return;
    let t = eb.current.getBoundingClientRect(),
      n = em.current.clientWidth,
      r = em.current.clientHeight,
      i = e.x - t.left,
      l = e.y - t.top,
      a = i / t.width;
    z(eO({
      x: (.5 - a) * n * $,
      y: (.5 - l / t.height) * r * $
    }))
  }, [eO, $]), ek = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), J(true), eM({
      x: e.clientX,
      y: e.clientY
    })
  }, [eM]), eL = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), X && eM({
      x: e.clientX,
      y: e.clientY
    })
  }, [X, eM]), eU = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), J(false)
  }, []), eF = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []);
  (0, f.PM)(em, i.useCallback(e => {
    let {
      width: t,
      height: n
    } = e;
    if (!eE || null == t || null == n) return;
    let r = eh.current;
    if (null == r) {
      eh.current = {
        width: t,
        height: n
      };
      return
    }
    let {
      width: i,
      height: l
    } = r;
    1 > Math.abs(t - i) && 1 > Math.abs(n - l) || (ec(true), z(e => {
      let r = i * ($ - 1) / 2,
        a = l * ($ - 1) / 2,
        o = t * ($ - 1) / 2,
        c = n * ($ - 1) / 2,
        s = 0 !== r ? e.x / r : 0;
      return eO({
        x: s * o,
        y: (0 !== a ? e.y / a : 0) * c
      })
    }), eh.current = {
      width: t,
      height: n
    }, ep.current.start(100, () => {
      ec(false)
    }))
  }, [eO, eE, $]), [eE, $]), (0, p.zq)(() => {
    ed.current.stop(), ef.current.stop(), ep.current.stop(), eg.current.stop()
  }), i.useEffect(() => {
    null != h && (0, E.$)(h, true, t && eE ? $ : 1)
  }, [t, eE, h, $]);
  let eV = i.useMemo(() => {
      let e = eO(H);
      return {
        "--custom-zoom-scale": $,
        "--custom-pan-x": "".concat(e.x, "px"),
        "--custom-pan-y": "".concat(e.y, "px"),
        "--custom-zoom-transition": k || eo || et || er ? "none" : "transform 0.15s ease-out"
      }
    }, [eO, k, eo, et, er, H, $]),
    eW = i.useMemo(() => {
      let e = 120 * Math.min(el, 32 / 9);
      return {
        "--custom-zoom-minimap-width": "".concat(e, "px"),
        "--custom-zoom-minimap-height": "".concat(120, "px")
      }
    }, [el]),
    eB = i.useMemo(() => {
      let e = null != em.current ? em.current.clientWidth : 1,
        t = null != em.current ? em.current.clientHeight : 1,
        n = 1 / $,
        r = 1 / $,
        i = .5 - H.x / (e * $),
        l = .5 - H.y / (t * $);
      return {
        "--custom-zoom-indicator-left": "".concat(100 * j(i - n / 2, 0, 1 - n), "%"),
        "--custom-zoom-indicator-top": "".concat(100 * j(l - r / 2, 0, 1 - r), "%"),
        "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
        "--custom-zoom-indicator-height": "".concat(100 * r, "%"),
        "--custom-zoom-indicator-transition": k || X || et || er ? "none" : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out"
      }
    }, [k, X, et, er, H, $]);
  return (0, r.jsxs)("div", {
    ref: em,
    className: a()(S.wrapper, P, {
      [S.zoomEnabled]: t && eE,
      [S.zoomDragging]: k
    }),
    onMouseDown: eS,
    onMouseMove: ex,
    onMouseUp: eI,
    onMouseLeave: eT,
    onWheel: ej,
    children: [(0, r.jsx)(d.P3F, {
      onClick: eN,
      children: null != h && (0, r.jsx)("div", {
        className: a()(S.videoContainer, S.zoomed),
        style: eV,
        children: (0, r.jsx)(y.Z, I(x({}, m), {
          onResize: ey,
          wrapperClassName: true
        }))
      })
    }), t && null != h && (0, r.jsx)(c.animated.div, {
      className: a()(S.zoomControlsContainer, {
        [S.idle]: g
      }),
      style: {
        bottom: ev.value
      },
      children: (0, r.jsxs)("div", {
        className: a()(S.zoomControls, {
          [S.zoomControlsWithChildren]: es || eE
        }),
        onMouseEnter: eA,
        onMouseLeave: eR,
        onClick: eD,
        children: [(es || eE) && (0, r.jsx)(d.P3F, {
          onClick: eF,
          onMouseEnter: eA,
          onMouseLeave: eR,
          children: (0, r.jsxs)("div", {
            ref: eb,
            className: S.minimap,
            style: eW,
            onMouseDown: ek,
            onMouseMove: eL,
            onMouseUp: eU,
            children: [(0, r.jsx)(w, {
              className: a()(S.minimapVideo, {
                [C.mirror]: Z
              }),
              streamId: h,
              paused: A,
              reportContainerResized: false
            }), (0, r.jsx)("div", {
              className: S.minimapIndicator,
              style: eB
            })]
          })
        }), (0, r.jsxs)("div", {
          className: S.zoomControlsRow,
          children: [(es || eE) && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.u, {
              text: O.intl.string(O.t.M6Cmwy),
              position: "top",
              children: (0, r.jsx)(d.hU, {
                icon: d.BlJ,
                onClick: ew,
                disabled: $ <= n,
                variant: "overlay-secondary",
                size: "sm",
                "aria-label": O.intl.string(O.t.M6Cmwy)
              })
            }), (0, r.jsx)(d.iRW, {
              minValue: n,
              maxValue: l,
              initialValue: $,
              value: $,
              asValueChanges: eZ,
              onValueRender: e => "".concat(Math.round(100 * e), "%"),
              "aria-label": O.intl.string(O.t.grzPmr)
            })]
          }), (0, r.jsx)(u.u, {
            text: O.intl.string(O.t["9hMafy"]),
            position: "top",
            children: (0, r.jsx)(d.hU, {
              icon: d.OyE,
              onClick: eP,
              disabled: $ >= l,
              variant: "overlay-secondary",
              size: "sm",
              "aria-label": O.intl.string(O.t["9hMafy"])
            })
          })]
        })]
      })
    })]
  })
})