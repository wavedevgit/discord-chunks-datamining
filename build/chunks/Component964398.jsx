/** Chunk was on 11010 **/
/** chunk id: 964398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk65205 = require("./65205.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222424 = require("./222424.js");

function d(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)("svg", {
    className: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    children: [(0, r.jsx)("g", {
      filter: "url(#a)",
      children: (0, r.jsx)("path", {
        d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
        fill: "currentColor"
      })
    }), (0, r.jsx)("defs", {
      children: (0, r.jsxs)("filter", {
        id: "a",
        x: "0",
        y: "0",
        width: "48",
        height: "48",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [(0, r.jsx)("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), (0, r.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), (0, r.jsx)("feOffset", {
          dy: "8"
        }), (0, r.jsx)("feGaussianBlur", {
          stdDeviation: "8"
        }), (0, r.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        }), (0, r.jsx)("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_605_72103"
        }), (0, r.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_605_72103",
          result: "shape"
        })]
      })
    })]
  })
}
let f = [{
    x: .5,
    y: .05
  }, {
    x: .95,
    y: .2
  }, {
    x: 1,
    y: .5
  }, {
    x: .95,
    y: .8
  }, {
    x: .5,
    y: .95
  }, {
    x: .05,
    y: .8
  }, {
    x: 0,
    y: .5
  }, {
    x: .05,
    y: .2
  }],
  p = f.length;

function g(e, t, n) {
  let r = e * t;
  return e > .5 ? r - n : e < .5 ? r : r - n / 2
}
let m = Chunk473749.memo(function(e) {
  let {
    wheelWidth: t,
    wheelHeight: n,
    itemWidth: m,
    itemHeight: b,
    showDeadZoneIndicator: h,
    activeItem: v,
    onItemSelect: E,
    onItemAction: y,
    interactive: _ = true,
    onClose: O,
    children: C
  } = e, S = i.useRef(null), x = i.useRef([]), I = i.useRef(false), N = i.useRef(null), [T, j] = i.useState(0), [P, w] = i.useState({
    x: 0,
    y: 0
  }), Z = Math.abs(P.x) + Math.abs(P.y) > 0, A = i.useMemo(() => a().chunk(C, p), [C]), R = i.useCallback((e, t) => {
    null == x.current[T] ? x.current[T] = [] : x.current[T][t] = e
  }, [T]), D = i.useCallback((e, t) => {
    N.current = t, E(p * e + t)
  }, [E]), M = i.useCallback(() => {
    N.current = null, E(null)
  }, [E]), k = i.useCallback(e => {
    M(), I.current = e
  }, [M]), L = i.useCallback((e, t, n) => {
    if (I.current) return void w({
      x: 0,
      y: 0
    });
    let r = {
        x: e.x - t.x,
        y: e.y - t.y
      },
      i = r.x < 0,
      l = r.y < 0,
      a = ((e, t) => {
        let n = Math.abs(t.x),
          r = 180 / Math.PI * Math.atan2(Math.abs(t.y), n),
          i = e / 2 - 28.8;
        return {
          x: Math.max(i * Math.cos(2 * Math.PI * r / 360), 0),
          y: Math.max(i * Math.sin(2 * Math.PI * r / 360), 0)
        }
      })(n, r);
    w({
      x: (i ? Math.max(r.x, -a.x) : Math.min(r.x, a.x)) / 2,
      y: (l ? Math.max(r.y, -a.y) : Math.min(r.y, a.y)) / 2
    })
  }, []), U = i.useCallback(e => {
    null != N.current && (e.preventDefault(), e.stopPropagation(), null == y || y(p * T + N.current))
  }, [y, T]), F = i.useMemo(() => (0, l.throttle)(e => {
    if (null == S.current) return;
    let r = S.current.getBoundingClientRect(),
      i = {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2
      },
      l = {
        x: e.clientX,
        y: e.clientY
      };
    if (L(l, i, Math.max(t, n)), I.current) {
      null != v && M();
      return
    }
    let a = (0, c.ld)(i, l, Math.max(t, n));
    for (let e = 0; e < x.current[T].length; e++) {
      let t = x.current[T][e];
      if (null == t) continue;
      let n = t.getBoundingClientRect();
      if ((0, c.Vr)(i, a, n)) return void D(T, e)
    }
    M()
  }, 16), [v, L, M, D, T, n, t]), V = i.useCallback(e => {
    if (!_) return;
    let t = T + (e.deltaY > 0 ? 1 : false);
    t >= 0 && t < A.length && (null != N.current && (A[t].length > N.current ? D(t, N.current) : M()), j(t))
  }, [_, T, A, D, M]), W = i.useMemo(() => A[T].map((e, i) => {
    let l = f[i];
    if (null == l) throw Error("Too many items supplied ".concat(C.length, " expected max of ").concat(f.length));
    let a = g(l.x, t, m),
      o = g(l.y, n, b);
    return (0, r.jsx)("div", {
      ref: e => R(e, i),
      className: u.chatWheelItem,
      style: {
        left: a,
        top: o,
        width: m,
        height: b
      },
      children: e
    }, i)
  }), [A, T, t, m, n, b, C.length, R]);
  return (0, r.jsx)(o.P3F, {
    className: u.chatWheelMouseInput,
    onMouseMove: F,
    onWheel: V,
    onClick: U,
    children: (0, r.jsxs)("div", {
      ref: S,
      className: u.chatWheel,
      style: {
        width: t,
        height: n
      },
      children: [(0, r.jsxs)("svg", {
        className: u.chatWheelBackground,
        viewBox: "0 0 288 288",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsxs)("filter", {
          id: "soundboard-wheel-background-shadow",
          x: "0",
          y: "0",
          width: "288",
          height: "288",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [(0, r.jsx)("feFlood", {
            floodOpacity: "0",
            result: "BackgroundImageFix"
          }), (0, r.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
          }), (0, r.jsx)("feOffset", {
            dy: "8"
          }), (0, r.jsx)("feGaussianBlur", {
            stdDeviation: "8"
          }), (0, r.jsx)("feColorMatrix", {
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          }), (0, r.jsx)("feBlend", {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_489_60382"
          }), (0, r.jsx)("feBlend", {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_489_60382",
            result: "shape"
          })]
        }), (0, r.jsxs)("g", {
          filter: "url(#soundboard-wheel-background-shadow)",
          children: [(0, r.jsx)("circle", {
            className: u.chatWheelBackground,
            cx: "144",
            cy: "144",
            r: "103.68",
            strokeWidth: "40.32"
          }), h && (0, r.jsx)("circle", {
            className: u.chatWheelDeadZone,
            onMouseEnter: () => k(true),
            onMouseLeave: () => k(false),
            cx: 144,
            cy: 144,
            r: 28.8
          }), Z && (0, r.jsx)("circle", {
            className: u.chatWheelCenter,
            cx: 144 + P.x,
            cy: 144 + P.y,
            r: 28.8
          })]
        }), h && (0, r.jsx)("circle", {
          className: u.chatWheelDeadZone,
          onMouseEnter: () => k(true),
          onMouseLeave: () => k(false),
          cx: 144,
          cy: 144,
          r: 28.8,
          stroke: "none"
        })]
      }), (0, r.jsxs)("div", {
        className: u.innerContent,
        children: [h && (0, r.jsx)(o.P3F, {
          className: u.chatWheelDeadZoneIcon,
          onClick: O,
          children: (0, r.jsx)(d, {
            className: u.chatWheelDeadZoneIcon
          })
        }), _ && A.length > 1 ? (0, r.jsx)("div", {
          className: u.paginationHint,
          children: s.intl.string(s.t["Xy+S02"])
        }) : null]
      }), W]
    })
  })
})