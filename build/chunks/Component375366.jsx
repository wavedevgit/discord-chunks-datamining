/** Chunk was on 31748 **/
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
let m = Chunk64700.memo(function(e) {
  let {
    wheelWidth: t,
    wheelHeight: n,
    itemWidth: m,
    itemHeight: _,
    showDeadZoneIndicator: h,
    activeItem: y,
    onItemSelect: A,
    onItemAction: b,
    interactive: E = true,
    onClose: v,
    children: O
  } = e, x = l.useRef(null), S = l.useRef([]), C = l.useRef(false), N = l.useRef(null), [I, j] = l.useState(0), [T, w] = l.useState({
    x: 0,
    y: 0
  }), P = Math.abs(T.x) + Math.abs(T.y) > 0, R = l.useMemo(() => a().chunk(O, p), [O]), D = l.useCallback((e, t) => {
    null == S.current[I] ? S.current[I] = [] : S.current[I][t] = e
  }, [I]), k = l.useCallback((e, t) => {
    N.current = t, A(p * e + t)
  }, [A]), L = l.useCallback(() => {
    N.current = null, A(null)
  }, [A]), M = l.useCallback(e => {
    L(), C.current = e
  }, [L]), U = l.useCallback((e, t, n) => {
    let r, l, i;
    if (C.current) return void w({
      x: 0,
      y: 0
    });
    let a = {
        x: e.x - t.x,
        y: e.y - t.y
      },
      o = a.x < 0,
      s = a.y < 0,
      c = (r = Math.abs(a.x), l = 180 / Math.PI * Math.atan2(Math.abs(a.y), r), {
        x: Math.max((i = n / 2 - 28.8) * Math.cos(2 * Math.PI * l / 360), 0),
        y: Math.max(i * Math.sin(2 * Math.PI * l / 360), 0)
      });
    w({
      x: (o ? Math.max(a.x, -c.x) : Math.min(a.x, c.x)) / 2,
      y: (s ? Math.max(a.y, -c.y) : Math.min(a.y, c.y)) / 2
    })
  }, []), V = l.useCallback(e => {
    null != N.current && (e.preventDefault(), e.stopPropagation(), null == b || b(p * I + N.current))
  }, [b, I]), F = l.useMemo(() => (0, i.throttle)(e => {
    if (null == x.current) return;
    let r = x.current.getBoundingClientRect(),
      l = {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2
      },
      i = {
        x: e.clientX,
        y: e.clientY
      };
    if (U(i, l, Math.max(t, n)), C.current) {
      null != y && L();
      return
    }
    let a = (0, s.wf)(l, i, Math.max(t, n));
    for (let e = 0; e < S.current[I].length; e++) {
      let t = S.current[I][e];
      if (null == t) continue;
      let n = t.getBoundingClientRect();
      if ((0, s.lw)(l, a, n)) return void k(I, e)
    }
    L()
  }, 16), [y, U, L, k, I, n, t]), G = l.useCallback(e => {
    if (!E) return;
    let t = I + (e.deltaY > 0 ? 1 : false);
    t >= 0 && t < R.length && (null != N.current && (R[t].length > N.current ? k(t, N.current) : L()), j(t))
  }, [E, I, R, k, L]), B = l.useMemo(() => R[I].map((e, l) => {
    let i = f[l];
    if (null == i) throw Error("Too many items supplied ".concat(O.length, " expected max of ").concat(f.length));
    let a = g(i.x, t, m),
      o = g(i.y, n, _);
    return (0, r.jsx)("div", {
      ref: e => D(e, l),
      className: u.Tj,
      style: {
        left: a,
        top: o,
        width: m,
        height: _
      },
      children: e
    }, l)
  }), [R, I, t, m, n, _, O.length, D]);
  return (0, r.jsx)(o.DUT, {
    className: u.Pw,
    onMouseMove: F,
    onWheel: G,
    onClick: V,
    children: (0, r.jsxs)("div", {
      ref: x,
      className: u._$,
      style: {
        width: t,
        height: n
      },
      children: [(0, r.jsxs)("svg", {
        className: u.cA,
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
            className: u.cA,
            cx: "144",
            cy: "144",
            r: "103.68",
            strokeWidth: "40.32"
          }), h && (0, r.jsx)("circle", {
            className: u.u1,
            onMouseEnter: () => M(true),
            onMouseLeave: () => M(false),
            cx: 144,
            cy: 144,
            r: 28.8
          }), P && (0, r.jsx)("circle", {
            className: u.JV,
            cx: 144 + T.x,
            cy: 144 + T.y,
            r: 28.8
          })]
        }), h && (0, r.jsx)("circle", {
          className: u.u1,
          onMouseEnter: () => M(true),
          onMouseLeave: () => M(false),
          cx: 144,
          cy: 144,
          r: 28.8,
          stroke: "none"
        })]
      }), (0, r.jsxs)("div", {
        className: u.gx,
        children: [h && (0, r.jsx)(o.DUT, {
          className: u.$2,
          onClick: v,
          children: (0, r.jsx)(d, {
            className: u.$2
          })
        }), E && R.length > 1 ? (0, r.jsx)("div", {
          className: u.YB,
          children: c.intl.string(c.t["Xy+S02"])
        }) : null]
      }), B]
    })
  })
})