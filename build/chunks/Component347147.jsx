/** Chunk was on 82224 **/
/** chunk id: 347147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk980584 = require("./980584.js"),
  Chunk326242 = require("./326242.js");

function O(e, t, n) {
  let r = null,
    i = null;
  if (null != n && (0, f.DB)(n)) {
    var l, a;
    let e = (0, f.my)(n),
      t = (0, p.L2)(e, _.Z);
    r = null != (l = null == t ? true : t.name) ? l : null, i = null != (a = null == t ? true : t.id) ? a : null
  }
  g.default.track(E.rMx.VIDEO_STREAM_ZOOM_CHANGED, {
    zoom_level: e,
    method: t,
    share_application_name: r,
    share_application_id: i
  })
}

function C(e, t, n) {
  return Math.min(Math.max(t, e), n)
}
let I = Chunk473749.memo(function(e) {
  var t, n, {
      enableZoom: l = false,
      initialZoomLevel: f = 1,
      minZoom: p = 1,
      maxZoom: _ = 5,
      idle: g = false
    } = e,
    E = function(e, t) {
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
    }(e, ["enableZoom", "initialZoomLevel", "minZoom", "maxZoom", "idle"]);
  let {
    streamId: I,
    streamKey: w,
    onResize: P,
    wrapperClassName: j,
    videoComponent: x,
    mirror: Z,
    paused: R
  } = E, {
    onActive: T,
    onPreventIdle: A,
    onAllowIdle: N
  } = i.useContext(m.nM), [D, M] = i.useState(false), [k, L] = i.useState(null), [F, V] = i.useState(null), [U, z] = i.useState(0), [W, H] = i.useState({
    x: 0,
    y: 0
  }), [B, Y] = i.useState(null), [q, G] = i.useState(null), [K, Q] = i.useState(false), [X, J] = i.useState(C(f, p, _)), [$, ee] = i.useState(false), [et, en] = i.useState(16 / 9), [er, ei] = i.useState(false), el = i.useRef(new o.V7), ea = i.useRef(new o.V7), eo = i.useRef(null), ec = i.useRef(null), es = i.useRef(null), eu = 1 !== X, ed = i.useCallback(e => {
    e.width > 0 && e.height > 0 && en(e.width / e.height), null == P || P(e)
  }, [P]), ef = i.useCallback(e => {
    if (null == eo.current) return {
      x: 0,
      y: 0
    };
    let t = eo.current.getBoundingClientRect();
    return {
      x: e.clientX - t.left - t.width / 2,
      y: e.clientY - t.top - t.height / 2
    }
  }, []), ep = i.useCallback((e, t, n) => {
    if (null == eo.current) return {
      x: 0,
      y: 0
    };
    let r = null != n ? n : X,
      i = eo.current.clientWidth,
      l = eo.current.clientHeight,
      a = i * (r - 1) / 2,
      o = l * (r - 1) / 2;
    return {
      x: C(e, -a, a),
      y: C(t, -o, o)
    }
  }, [X]), em = i.useCallback((e, t, n) => {
    let r = C(X + e, p, _);
    if (null == eo.current || null == t || r === X) return;
    let i = r / X;
    H(e => ep((e.x - t.x) * i + t.x, (e.y - t.y) * i + t.y, r)), J(r), O(r, n, w)
  }, [ep, _, p, w, X]), e_ = i.useCallback(e => {
    if (!eu) return;
    e.preventDefault(), e.stopPropagation();
    let t = ef(e);
    M(true), V(t), L(t), z(Date.now()), G(t), Y(W)
  }, [ef, eu, W]), eg = i.useCallback(e => {
    if ((l || eu) && T(), !D || !eu || null == q || null == B) return;
    e.preventDefault(), e.stopPropagation();
    let t = ef(e),
      n = t.x - q.x,
      r = t.y - q.y;
    H(ep(B.x + n, B.y + r)), L(t)
  }, [ep, q, B, l, ef, D, eu, T]), ev = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), M(false), G(null), Y(null)
  }, []), eb = i.useCallback(e => {
    if (eu && null != F && null != k) {
      let {
        x: t,
        y: n
      } = F, {
        x: r,
        y: i
      } = k;
      (Math.sqrt((r - t) ** 2 + (i - n) ** 2) > .01 || Date.now() - U >= 500) && (e.preventDefault(), e.stopPropagation())
    }
  }, [eu, F, U, k]), eE = i.useCallback(() => {
    M(false), G(null), Y(null)
  }, []), eh = i.useCallback(e => {
    l && (ee(true), em(-e.deltaY / 100, ef(e), "wheel"), T(), el.current.start(100, () => {
      ee(false)
    }))
  }, [em, l, ef, T]), ey = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), em(.25, {
      x: 0,
      y: 0
    }, "button_zoom_in")
  }, [em]), eS = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), em(false, {
      x: 0,
      y: 0
    }, "button_zoom_out")
  }, [em]), eO = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), J(1), H({
      x: 0,
      y: 0
    }), O(1, "button_reset", w)
  }, [w]), eC = i.useCallback(() => {
    A("interact")
  }, [A]), eI = i.useCallback(() => {
    Q(false), N("interact")
  }, [N]), ew = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []), eP = i.useCallback((e, t) => {
    if (null == ec.current || null == eo.current) return;
    let n = ec.current.getBoundingClientRect(),
      r = eo.current.clientWidth,
      i = eo.current.clientHeight,
      l = e - n.left,
      a = t - n.top,
      o = l / n.width;
    H(ep((.5 - o) * r * X, (.5 - a / n.height) * i * X))
  }, [ep, X]), ej = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), Q(true), eP(e.clientX, e.clientY)
  }, [eP]), ex = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), K && eP(e.clientX, e.clientY)
  }, [K, eP]), eZ = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), Q(false)
  }, []), eR = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []);
  (0, u.PM)(eo, i.useCallback(e => {
    let {
      width: t,
      height: n
    } = e;
    if (!eu || null == t || null == n) return;
    let r = es.current;
    if (null == r) {
      es.current = {
        width: t,
        height: n
      };
      return
    }
    let {
      width: i,
      height: l
    } = r;
    1 > Math.abs(t - i) && 1 > Math.abs(n - l) || (ei(true), H(e => {
      let r = i * (X - 1) / 2,
        a = l * (X - 1) / 2,
        o = t * (X - 1) / 2,
        c = n * (X - 1) / 2,
        s = 0 !== r ? e.x / r : 0;
      return ep(s * o, (0 !== a ? e.y / a : 0) * c)
    }), es.current = {
      width: t,
      height: n
    }, ea.current.start(100, () => {
      ei(false)
    }))
  }, [ep, eu, X]), [eu, X]), (0, d.zq)(() => {
    el.current.stop(), ea.current.stop()
  }), i.useEffect(() => {
    null != I && (0, v.N)(I, l && eu ? X : 1)
  }, [l, eu, I, X]);
  let eT = i.useMemo(() => {
      let e = ep(W.x, W.y);
      return {
        "--custom-zoom-scale": X,
        "--custom-pan-x": "".concat(e.x, "px"),
        "--custom-pan-y": "".concat(e.y, "px"),
        "--custom-zoom-transition": D || er || $ ? "none" : "transform 0.15s ease-out"
      }
    }, [ep, D, er, $, W, X]),
    eA = i.useMemo(() => {
      let e = 120 * Math.min(et, 32 / 9);
      return {
        "--custom-zoom-minimap-width": "".concat(e, "px"),
        "--custom-zoom-minimap-height": "".concat(120, "px")
      }
    }, [et]),
    eN = i.useMemo(() => {
      let e = null != eo.current ? eo.current.clientWidth : 1,
        t = null != eo.current ? eo.current.clientHeight : 1,
        n = 1 / X,
        r = 1 / X,
        i = .5 - W.x / (e * X),
        l = .5 - W.y / (t * X);
      return {
        "--custom-zoom-indicator-left": "".concat(100 * C(i - n / 2, 0, 1 - n), "%"),
        "--custom-zoom-indicator-top": "".concat(100 * C(l - r / 2, 0, 1 - r), "%"),
        "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
        "--custom-zoom-indicator-height": "".concat(100 * r, "%"),
        "--custom-zoom-indicator-transition": D || K || $ ? "none" : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out"
      }
    }, [D, K, $, W, X]);
  return (0, r.jsx)("div", {
    ref: eo,
    className: a()(S.wrapper, j, {
      [S.zoomEnabled]: l && eu,
      [S.zoomDragging]: D
    }),
    onMouseDown: e_,
    onMouseMove: eg,
    onMouseUp: ev,
    onMouseLeave: eE,
    onWheel: eh,
    children: (0, r.jsxs)(s.P3F, {
      onClick: eb,
      children: [null != I && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: a()(S.videoContainer, S.zoomed),
          style: eT,
          children: (0, r.jsx)(b.Z, (t = function(e) {
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
          }({}, E), n = n = {
            onResize: ed,
            wrapperClassName: true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }), l && (0, r.jsx)(s.P3F, {
          onClick: eR,
          onMouseEnter: eC,
          onMouseLeave: eI,
          children: (0, r.jsxs)("div", {
            ref: ec,
            className: a()(S.minimap, {
              [S.fadeOut]: g || !eu
            }),
            style: eA,
            onMouseDown: ej,
            onMouseMove: ex,
            onMouseUp: eZ,
            children: [(0, r.jsx)(x, {
              className: a()(S.minimapVideo, {
                [y.mirror]: Z
              }),
              streamId: I,
              paused: R,
              reportContainerResized: false
            }), (0, r.jsx)("div", {
              className: S.minimapIndicator,
              style: eN
            })]
          })
        })]
      }), l && (0, r.jsxs)("div", {
        className: a()(S.zoomControls, {
          [S.fadeOut]: g
        }),
        onMouseEnter: eC,
        onMouseLeave: eI,
        onClick: ew,
        children: [X > 1 && (0, r.jsxs)("div", {
          className: S.zoomLevelIndicator,
          children: [Math.round(100 * X), "%"]
        }), (0, r.jsx)(c.u, {
          text: h.intl.string(h.t["9hMafy"]),
          position: "top",
          children: (0, r.jsx)(s.hU, {
            icon: s.OyE,
            onClick: ey,
            disabled: X >= _,
            variant: "secondary",
            size: "sm",
            "aria-label": h.intl.string(h.t["9hMafy"])
          })
        }), (0, r.jsx)(c.u, {
          text: h.intl.string(h.t.M6Cmwy),
          position: "top",
          children: (0, r.jsx)(s.hU, {
            icon: s.BlJ,
            onClick: eS,
            disabled: X <= 1,
            variant: "secondary",
            size: "sm",
            "aria-label": h.intl.string(h.t.M6Cmwy)
          })
        }), (0, r.jsx)(c.u, {
          text: h.intl.string(h.t.t9GFrr),
          position: "top",
          children: (0, r.jsx)(s.hU, {
            icon: s.DuK,
            onClick: eO,
            disabled: 1 === X,
            variant: "secondary",
            size: "sm",
            "aria-label": h.intl.string(h.t.t9GFrr)
          })
        })]
      })]
    })
  })
})