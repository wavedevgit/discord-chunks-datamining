/** Chunk was on 61344 **/
/** chunk id: 375366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk25911 = require("./25911.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk968432 = require("./968432.js");

function d(e) {
  let {
    className: t
  } = e;
  return (0, l.jsxs)("svg", {
    className: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    children: [(0, l.jsx)("g", {
      filter: "url(#a)",
      children: (0, l.jsx)("path", {
        d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
        fill: "currentColor"
      })
    }), (0, l.jsx)("defs", {
      children: (0, l.jsxs)("filter", {
        id: "a",
        x: "0",
        y: "0",
        width: "48",
        height: "48",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [(0, l.jsx)("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), (0, l.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), (0, l.jsx)("feOffset", {
          dy: "8"
        }), (0, l.jsx)("feGaussianBlur", {
          stdDeviation: "8"
        }), (0, l.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        }), (0, l.jsx)("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_605_72103"
        }), (0, l.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_605_72103",
          result: "shape"
        })]
      })
    })]
  })
}
let h = [{
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
  p = h.length;

function f(e, t, n) {
  let l = e * t;
  return e > .5 ? l - n : e < .5 ? l : l - n / 2
}
let m = Chunk64700.memo(function(e) {
  let {
    wheelWidth: t,
    wheelHeight: n,
    itemWidth: m,
    itemHeight: g,
    showDeadZoneIndicator: A,
    activeItem: b,
    onItemSelect: _,
    onItemAction: y,
    interactive: v = true,
    onClose: E,
    children: O
  } = e, C = r.useRef(null), S = r.useRef([]), x = r.useRef(false), j = r.useRef(null), [I, T] = r.useState(0), [N, P] = r.useState({
    x: 0,
    y: 0
  }), w = Math.abs(N.x) + Math.abs(N.y) > 0, R = r.useMemo(() => a().chunk(O, p), [O]), D = r.useCallback((e, t) => {
    null == S.current[I] ? S.current[I] = [] : S.current[I][t] = e
  }, [I]), M = r.useCallback((e, t) => {
    j.current = t, _(p * e + t)
  }, [_]), L = r.useCallback(() => {
    j.current = null, _(null)
  }, [_]), k = r.useCallback(e => {
    L(), x.current = e
  }, [L]), U = r.useCallback((e, t, n) => {
    let l, r, i;
    if (x.current) return void P({
      x: 0,
      y: 0
    });
    let a = {
        x: e.x - t.x,
        y: e.y - t.y
      },
      s = a.x < 0,
      o = a.y < 0,
      c = (l = Math.abs(a.x), r = 180 / Math.PI * Math.atan2(Math.abs(a.y), l), {
        x: Math.max((i = n / 2 - 28.8) * Math.cos(2 * Math.PI * r / 360), 0),
        y: Math.max(i * Math.sin(2 * Math.PI * r / 360), 0)
      });
    P({
      x: (s ? Math.max(a.x, -c.x) : Math.min(a.x, c.x)) / 2,
      y: (o ? Math.max(a.y, -c.y) : Math.min(a.y, c.y)) / 2
    })
  }, []), G = r.useCallback(e => {
    null != j.current && (e.preventDefault(), e.stopPropagation(), null == y || y(p * I + j.current))
  }, [y, I]), F = r.useMemo(() => (0, i.throttle)(e => {
    if (null == C.current) return;
    let l = C.current.getBoundingClientRect(),
      r = {
        x: l.left + l.width / 2,
        y: l.top + l.height / 2
      },
      i = {
        x: e.clientX,
        y: e.clientY
      };
    if (U(i, r, Math.max(t, n)), x.current) {
      null != b && L();
      return
    }
    let a = (0, o.wf)(r, i, Math.max(t, n));
    for (let e = 0; e < S.current[I].length; e++) {
      let t = S.current[I][e];
      if (null == t) continue;
      let n = t.getBoundingClientRect();
      if ((0, o.lw)(r, a, n)) return void M(I, e)
    }
    L()
  }, 16), [b, U, L, M, I, n, t]), H = r.useCallback(e => {
    if (!v) return;
    let t = I + (e.deltaY > 0 ? 1 : false);
    t >= 0 && t < R.length && (null != j.current && (R[t].length > j.current ? M(t, j.current) : L()), T(t))
  }, [v, I, R, M, L]), B = r.useMemo(() => R[I].map((e, r) => {
    let i = h[r];
    if (null == i) throw Error("Too many items supplied ".concat(O.length, " expected max of ").concat(h.length));
    let a = f(i.x, t, m),
      s = f(i.y, n, g);
    return (0, l.jsx)("div", {
      ref: e => D(e, r),
      className: u.Tj,
      style: {
        left: a,
        top: s,
        width: m,
        height: g
      },
      children: e
    }, r)
  }), [R, I, t, m, n, g, O.length, D]);
  return (0, l.jsx)(s.DUT, {
    className: u.Pw,
    onMouseMove: F,
    onWheel: H,
    onClick: G,
    children: (0, l.jsxs)("div", {
      ref: C,
      className: u._$,
      style: {
        width: t,
        height: n
      },
      children: [(0, l.jsxs)("svg", {
        className: u.cA,
        viewBox: "0 0 288 288",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, l.jsxs)("filter", {
          id: "soundboard-wheel-background-shadow",
          x: "0",
          y: "0",
          width: "288",
          height: "288",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [(0, l.jsx)("feFlood", {
            floodOpacity: "0",
            result: "BackgroundImageFix"
          }), (0, l.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
          }), (0, l.jsx)("feOffset", {
            dy: "8"
          }), (0, l.jsx)("feGaussianBlur", {
            stdDeviation: "8"
          }), (0, l.jsx)("feColorMatrix", {
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          }), (0, l.jsx)("feBlend", {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_489_60382"
          }), (0, l.jsx)("feBlend", {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_489_60382",
            result: "shape"
          })]
        }), (0, l.jsxs)("g", {
          filter: "url(#soundboard-wheel-background-shadow)",
          children: [(0, l.jsx)("circle", {
            className: u.cA,
            cx: "144",
            cy: "144",
            r: "103.68",
            strokeWidth: "40.32"
          }), A && (0, l.jsx)("circle", {
            className: u.u1,
            onMouseEnter: () => k(true),
            onMouseLeave: () => k(false),
            cx: 144,
            cy: 144,
            r: 28.8
          }), w && (0, l.jsx)("circle", {
            className: u.JV,
            cx: 144 + N.x,
            cy: 144 + N.y,
            r: 28.8
          })]
        }), A && (0, l.jsx)("circle", {
          className: u.u1,
          onMouseEnter: () => k(true),
          onMouseLeave: () => k(false),
          cx: 144,
          cy: 144,
          r: 28.8,
          stroke: "none"
        })]
      }), (0, l.jsxs)("div", {
        className: u.gx,
        children: [A && (0, l.jsx)(s.DUT, {
          className: u.$2,
          onClick: E,
          children: (0, l.jsx)(d, {
            className: u.$2
          })
        }), v && R.length > 1 ? (0, l.jsx)("div", {
          className: u.YB,
          children: c.intl.string(c.t["Xy+S02"])
        }) : null]
      }), B]
    })
  })
})