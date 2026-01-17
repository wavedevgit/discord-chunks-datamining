/** Chunk was on 69813 **/
/** chunk id: 964398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
let b = Chunk473749.memo(function(e) {
  let {
    wheelWidth: t,
    wheelHeight: n,
    itemWidth: b,
    itemHeight: m,
    showDeadZoneIndicator: h,
    activeItem: E,
    onItemSelect: v,
    onItemAction: _,
    interactive: y = true,
    onClose: O,
    children: S
  } = e, C = l.useRef(null), I = l.useRef([]), N = l.useRef(false), T = l.useRef(null), [x, P] = l.useState(0), [Z, j] = l.useState({
    x: 0,
    y: 0
  }), w = Math.abs(Z.x) + Math.abs(Z.y) > 0, A = l.useMemo(() => a().chunk(S, p), [S]), R = l.useCallback((e, t) => {
    null == I.current[x] ? I.current[x] = [] : I.current[x][t] = e
  }, [x]), D = l.useCallback((e, t) => {
    T.current = t, v(p * e + t)
  }, [v]), M = l.useCallback(() => {
    T.current = null, v(null)
  }, [v]), k = l.useCallback(e => {
    M(), N.current = e
  }, [M]), L = l.useCallback((e, t, n) => {
    if (N.current) return void j({
      x: 0,
      y: 0
    });
    let r = {
        x: e.x - t.x,
        y: e.y - t.y
      },
      l = r.x < 0,
      i = r.y < 0,
      a = ((e, t) => {
        let n = Math.abs(t.x),
          r = 180 / Math.PI * Math.atan2(Math.abs(t.y), n),
          l = e / 2 - 28.8;
        return {
          x: Math.max(l * Math.cos(2 * Math.PI * r / 360), 0),
          y: Math.max(l * Math.sin(2 * Math.PI * r / 360), 0)
        }
      })(n, r);
    j({
      x: (l ? Math.max(r.x, -a.x) : Math.min(r.x, a.x)) / 2,
      y: (i ? Math.max(r.y, -a.y) : Math.min(r.y, a.y)) / 2
    })
  }, []), U = l.useCallback(e => {
    null != T.current && (e.preventDefault(), e.stopPropagation(), null == _ || _(p * x + T.current))
  }, [_, x]), F = l.useMemo(() => (0, i.throttle)(e => {
    if (null == C.current) return;
    let r = C.current.getBoundingClientRect(),
      l = {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2
      },
      i = {
        x: e.clientX,
        y: e.clientY
      };
    if (L(i, l, Math.max(t, n)), N.current) {
      null != E && M();
      return
    }
    let a = (0, c.ld)(l, i, Math.max(t, n));
    for (let e = 0; e < I.current[x].length; e++) {
      let t = I.current[x][e];
      if (null == t) continue;
      let n = t.getBoundingClientRect();
      if ((0, c.Vr)(l, a, n)) return void D(x, e)
    }
    M()
  }, 16), [E, L, M, D, x, n, t]), V = l.useCallback(e => {
    if (!y) return;
    let t = x + (e.deltaY > 0 ? 1 : false);
    t >= 0 && t < A.length && (null != T.current && (A[t].length > T.current ? D(t, T.current) : M()), P(t))
  }, [y, x, A, D, M]), W = l.useMemo(() => A[x].map((e, l) => {
    let i = f[l];
    if (null == i) throw Error("Too many items supplied ".concat(S.length, " expected max of ").concat(f.length));
    let a = g(i.x, t, b),
      o = g(i.y, n, m);
    return (0, r.jsx)("div", {
      ref: e => R(e, l),
      className: u.chatWheelItem,
      style: {
        left: a,
        top: o,
        width: b,
        height: m
      },
      children: e
    }, l)
  }), [A, x, t, b, n, m, S.length, R]);
  return (0, r.jsx)(o.P3F, {
    className: u.chatWheelMouseInput,
    onMouseMove: F,
    onWheel: V,
    onClick: U,
    children: (0, r.jsxs)("div", {
      ref: C,
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
          }), w && (0, r.jsx)("circle", {
            className: u.chatWheelCenter,
            cx: 144 + Z.x,
            cy: 144 + Z.y,
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
        }), y && A.length > 1 ? (0, r.jsx)("div", {
          className: u.paginationHint,
          children: s.intl.string(s.t["Xy+S02"])
        }) : null]
      }), W]
    })
  })
})