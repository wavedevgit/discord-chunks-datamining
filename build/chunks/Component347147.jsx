/** Chunk was on 86642 **/
/** chunk id: 347147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk493773 = require("./493773.js"),
  Chunk677601 = require("./677601.jsx"),
  Chunk823789 = require("./823789.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412418 = require("./412418.js"),
  Chunk174260 = require("./174260.js");

function y(e, t, n) {
  return Math.min(Math.max(t, e), n)
}
let C = Chunk647438.memo(function(e) {
  var t, n, {
      enableZoom: l = false,
      initialZoomLevel: C = 1,
      minZoom: _ = 1,
      maxZoom: v = 5
    } = e,
    x = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.keys(e);
        for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["enableZoom", "initialZoomLevel", "minZoom", "maxZoom"]);
  let {
    streamId: O,
    onResize: E,
    wrapperClassName: j,
    videoComponent: S,
    mirror: P,
    paused: I
  } = x, [Z, T] = r.useState(false), [N, A] = r.useState(null), [w, M] = r.useState(null), [R, D] = r.useState(0), [L, k] = r.useState({
    x: 0,
    y: 0
  }), [U, F] = r.useState(null), [V, B] = r.useState(null), [H, G] = r.useState(false), [W, z] = r.useState(y(C, _, v)), [q, Y] = r.useState(false), [K, X] = r.useState(16 / 9), [J, Q] = r.useState(false), [$, ee] = r.useState(false), et = r.useRef(new o.V7), en = r.useRef(new o.V7), ei = r.useRef(new o.V7), er = r.useRef(null), el = r.useRef(null), ea = r.useRef(null), eo = 1 !== W, es = r.useCallback(e => {
    e.width > 0 && e.height > 0 && X(e.width / e.height), null == E || E(e)
  }, [E]), ec = r.useCallback(e => {
    if (null == er.current) return {
      x: 0,
      y: 0
    };
    let t = er.current.getBoundingClientRect();
    return {
      x: e.clientX - t.left - t.width / 2,
      y: e.clientY - t.top - t.height / 2
    }
  }, []), eu = r.useCallback((e, t, n) => {
    if (null == er.current) return {
      x: 0,
      y: 0
    };
    let i = null != n ? n : W,
      r = er.current.clientWidth,
      l = er.current.clientHeight,
      a = r * (i - 1) / 2,
      o = l * (i - 1) / 2;
    return {
      x: y(e, -a, a),
      y: y(t, -o, o)
    }
  }, [W]), ed = r.useCallback((e, t) => {
    let n = y(W + e, _, v);
    if (null == er.current || null == t || n === W) return;
    let i = n / W;
    k(e => eu((e.x - t.x) * i + t.x, (e.y - t.y) * i + t.y, n)), z(n)
  }, [eu, v, _, W]), ep = r.useCallback(() => {
    et.current.stop(), Q(true)
  }, []), ef = r.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.T;
    ep(), et.current.start(e, () => Q(false))
  }, [ep]), eh = r.useCallback(e => {
    if (!eo) return;
    e.preventDefault(), e.stopPropagation();
    let t = ec(e);
    T(true), M(t), A(t), D(Date.now()), B(t), F(L)
  }, [ec, eo, L]), em = r.useCallback(e => {
    if ((l || eo) && ef(), !Z || !eo || null == V || null == U) return;
    e.preventDefault(), e.stopPropagation();
    let t = ec(e),
      n = t.x - V.x,
      i = t.y - V.y;
    k(eu(U.x + n, U.y + i)), A(t)
  }, [eu, V, U, l, ec, Z, eo, ef]), eg = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), T(false), B(null), F(null)
  }, []), eb = r.useCallback(e => {
    if (eo && null != w && null != N) {
      let {
        x: t,
        y: n
      } = w, {
        x: i,
        y: r
      } = N;
      (Math.sqrt((i - t) ** 2 + (r - n) ** 2) > .01 || Date.now() - R >= 500) && (e.preventDefault(), e.stopPropagation())
    }
  }, [eo, w, R, N]), ey = r.useCallback(() => {
    T(false), B(null), F(null)
  }, []), eC = r.useCallback(e => {
    l && (Y(true), ed(-e.deltaY / 100, ec(e)), ef(), en.current.start(100, () => {
      Y(false)
    }))
  }, [ed, l, ec, ef]), e_ = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), ed(.25, {
      x: 0,
      y: 0
    })
  }, [ed]), ev = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), ed(false, {
      x: 0,
      y: 0
    })
  }, [ed]), ex = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), z(1), k({
      x: 0,
      y: 0
    })
  }, []), eO = r.useCallback(() => {
    ep()
  }, [ep]), eE = r.useCallback(() => {
    G(false), ef()
  }, [ef]), ej = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []), eS = r.useCallback((e, t) => {
    if (null == el.current || null == er.current) return;
    let n = el.current.getBoundingClientRect(),
      i = er.current.clientWidth,
      r = er.current.clientHeight,
      l = e - n.left,
      a = t - n.top,
      o = l / n.width;
    k(eu((.5 - o) * i * W, (.5 - a / n.height) * r * W))
  }, [eu, W]), eP = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), G(true), eS(e.clientX, e.clientY)
  }, [eS]), eI = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), H && eS(e.clientX, e.clientY)
  }, [H, eS]), eZ = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), G(false)
  }, []), eT = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation()
  }, []);
  (0, u.PM)(er, r.useCallback(e => {
    let {
      width: t,
      height: n
    } = e;
    if (!eo || null == t || null == n) return;
    let i = ea.current;
    if (null == i) {
      ea.current = {
        width: t,
        height: n
      };
      return
    }
    let {
      width: r,
      height: l
    } = i;
    1 > Math.abs(t - r) && 1 > Math.abs(n - l) || (ee(true), k(e => {
      let i = r * (W - 1) / 2,
        a = l * (W - 1) / 2,
        o = t * (W - 1) / 2,
        s = n * (W - 1) / 2,
        c = 0 !== i ? e.x / i : 0;
      return eu(c * o, (0 !== a ? e.y / a : 0) * s)
    }), ea.current = {
      width: t,
      height: n
    }, ei.current.start(100, () => {
      ee(false)
    }))
  }, [eu, eo, W]), [eo, W]), (0, d.zq)(() => {
    et.current.stop(), en.current.stop(), ei.current.stop()
  }), r.useEffect(() => {
    null != O && (0, f.N)(O, l && eo ? W : 1)
  }, [l, eo, O, W]);
  let eN = r.useMemo(() => {
      let e = eu(L.x, L.y);
      return {
        "--custom-zoom-scale": W,
        "--custom-pan-x": "".concat(e.x, "px"),
        "--custom-pan-y": "".concat(e.y, "px"),
        "--custom-zoom-transition": Z || $ || q ? "none" : "transform 0.15s ease-out"
      }
    }, [eu, Z, $, q, L, W]),
    eA = r.useMemo(() => {
      let e = 120 * Math.min(K, 32 / 9);
      return {
        "--custom-zoom-minimap-width": "".concat(e, "px"),
        "--custom-zoom-minimap-height": "".concat(120, "px")
      }
    }, [K]),
    ew = r.useMemo(() => {
      let e = null != er.current ? er.current.clientWidth : 1,
        t = null != er.current ? er.current.clientHeight : 1,
        n = 1 / W,
        i = 1 / W,
        r = .5 - L.x / (e * W),
        l = .5 - L.y / (t * W);
      return {
        "--custom-zoom-indicator-left": "".concat(100 * y(r - n / 2, 0, 1 - n), "%"),
        "--custom-zoom-indicator-top": "".concat(100 * y(l - i / 2, 0, 1 - i), "%"),
        "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
        "--custom-zoom-indicator-height": "".concat(100 * i, "%"),
        "--custom-zoom-indicator-transition": Z || H || q ? "none" : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out"
      }
    }, [Z, H, q, L, W]);
  return (0, i.jsx)("div", {
    ref: er,
    className: a()(b.wrapper, j, {
      [b.zoomEnabled]: l && eo,
      [b.zoomDragging]: Z
    }),
    onMouseDown: eh,
    onMouseMove: em,
    onMouseUp: eg,
    onMouseLeave: ey,
    onWheel: eC,
    children: (0, i.jsxs)(c.P3F, {
      onClick: eb,
      children: [null != O && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: a()(b.videoContainer, b.zoomed),
          style: eN,
          children: (0, i.jsx)(h.Z, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, x), n = n = {
            onResize: es,
            wrapperClassName: true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }), l && (0, i.jsx)(c.P3F, {
          onClick: eT,
          onMouseEnter: eO,
          onMouseLeave: eE,
          children: (0, i.jsxs)("div", {
            ref: el,
            className: a()(b.minimap, {
              [b.fadeOut]: !J || !eo
            }),
            style: eA,
            onMouseDown: eP,
            onMouseMove: eI,
            onMouseUp: eZ,
            children: [(0, i.jsx)(S, {
              className: a()(b.minimapVideo, {
                [g.mirror]: P
              }),
              streamId: O,
              paused: I,
              reportContainerResized: false
            }), (0, i.jsx)("div", {
              className: b.minimapIndicator,
              style: ew
            })]
          })
        })]
      }), l && (0, i.jsxs)("div", {
        className: a()(b.zoomControls, {
          [b.fadeOut]: !J
        }),
        onMouseEnter: eO,
        onMouseLeave: eE,
        onClick: ej,
        children: [W > 1 && (0, i.jsxs)("div", {
          className: b.zoomLevelIndicator,
          children: [Math.round(100 * W), "%"]
        }), (0, i.jsx)(s.u, {
          text: m.intl.string(m.t["9hMafy"]),
          position: "top",
          children: (0, i.jsx)(c.hU, {
            icon: c.OyE,
            onClick: e_,
            disabled: W >= v,
            variant: "secondary",
            size: "sm",
            "aria-label": m.intl.string(m.t["9hMafy"])
          })
        }), (0, i.jsx)(s.u, {
          text: m.intl.string(m.t.M6Cmwy),
          position: "top",
          children: (0, i.jsx)(c.hU, {
            icon: c.BlJ,
            onClick: ev,
            disabled: W <= 1,
            variant: "secondary",
            size: "sm",
            "aria-label": m.intl.string(m.t.M6Cmwy)
          })
        }), (0, i.jsx)(s.u, {
          text: m.intl.string(m.t.t9GFrr),
          position: "top",
          children: (0, i.jsx)(c.hU, {
            icon: c.DuK,
            onClick: ex,
            disabled: 1 === W,
            variant: "secondary",
            size: "sm",
            "aria-label": m.intl.string(m.t.t9GFrr)
          })
        })]
      })]
    })
  })
})