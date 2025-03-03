/** Chunk was on 7755 **/
n.d(t, {
  Z: () => v
}), n(47120), n(411104);
var r = n(200651),
  l = n(192379),
  i = n(392711),
  o = n.n(i),
  a = n(481060),
  s = n(65205),
  c = n(388032),
  u = n(635292);

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
  f = h.length;

function p(e, t, n) {
  let r = e * t;
  return e > .5 ? r - n : e < .5 ? r : r - n / 2
}
let g = (e, t) => {
    let n = Math.abs(t.x),
      r = 180 / Math.PI * Math.atan2(Math.abs(t.y), n),
      l = e / 2 - 28.8;
    return {
      x: Math.max(l * Math.cos(2 * Math.PI * r / 360), 0),
      y: Math.max(l * Math.sin(2 * Math.PI * r / 360), 0)
    }
  },
  v = l.memo(function(e) {
    let {
      wheelWidth: t,
      wheelHeight: n,
      itemWidth: v,
      itemHeight: N,
      showDeadZoneIndicator: O,
      activeItem: y,
      onItemSelect: b,
      onItemAction: m,
      interactive: x = !0,
      children: I
    } = e, C = l.useRef(null), E = l.useRef([]), j = l.useRef(!1), w = l.useRef(null), [T, P] = l.useState(0), [S, Z] = l.useState({
      x: 0,
      y: 0
    }), _ = Math.abs(S.x) + Math.abs(S.y) > 0, A = l.useMemo(() => o().chunk(I, f), [I]), R = l.useCallback((e, t) => {
      null == E.current[T] ? E.current[T] = [] : E.current[T][t] = e
    }, [T]), k = l.useCallback((e, t) => {
      w.current = t, b(f * e + t)
    }, [b]), D = l.useCallback(() => {
      w.current = null, b(null)
    }, [b]), W = l.useCallback(e => {
      D(), j.current = e
    }, [D]), M = l.useCallback((e, t, n) => {
      if (j.current) {
        Z({
          x: 0,
          y: 0
        });
        return
      }
      let r = {
          x: e.x - t.x,
          y: e.y - t.y
        },
        l = r.x < 0,
        i = r.y < 0,
        o = g(n, r);
      Z({
        x: (l ? Math.max(r.x, -o.x) : Math.min(r.x, o.x)) / 2,
        y: (i ? Math.max(r.y, -o.y) : Math.min(r.y, o.y)) / 2
      })
    }, []), F = l.useCallback(e => {
      null != w.current && (e.preventDefault(), e.stopPropagation(), null == m || m(f * T + w.current))
    }, [m, T]), U = l.useMemo(() => (0, i.throttle)(e => {
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
      if (M(i, l, Math.max(t, n)), j.current) {
        null != y && D();
        return
      }
      let o = (0, s.ld)(l, i, Math.max(t, n));
      for (let e = 0; e < E.current[T].length; e++) {
        let t = E.current[T][e];
        if (null == t) continue;
        let n = t.getBoundingClientRect();
        if ((0, s.Vr)(l, o, n)) {
          k(T, e);
          return
        }
      }
      D()
    }, 16), [y, M, D, k, T, n, t]), B = l.useCallback(e => {
      if (!x) return;
      let t = T + (e.deltaY > 0 ? 1 : -1);
      t >= 0 && t < A.length && (null != w.current && (A[t].length > w.current ? k(t, w.current) : D()), P(t))
    }, [x, T, A, k, D]), L = l.useMemo(() => A[T].map((e, l) => {
      let i = h[l];
      if (null == i) throw Error("Too many items supplied ".concat(I.length, " expected max of ").concat(h.length));
      let o = p(i.x, t, v),
        a = p(i.y, n, N);
      return (0, r.jsx)("div", {
        ref: e => R(e, l),
        className: u.chatWheelItem,
        style: {
          left: o,
          top: a,
          width: v,
          height: N
        },
        children: e
      }, l)
    }), [A, T, t, v, n, N, I.length, R]);
    return (0, r.jsx)(a.P3F, {
      className: u.chatWheelMouseInput,
      onMouseMove: U,
      onWheel: B,
      onClick: F,
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
            }), O && (0, r.jsx)("circle", {
              className: u.chatWheelDeadZone,
              onMouseEnter: () => W(!0),
              onMouseLeave: () => W(!1),
              cx: 144,
              cy: 144,
              r: 28.8
            }), _ && (0, r.jsx)("circle", {
              className: u.chatWheelCenter,
              cx: 144 + S.x,
              cy: 144 + S.y,
              r: 28.8
            })]
          }), O && (0, r.jsx)("circle", {
            className: u.chatWheelDeadZone,
            onMouseEnter: () => W(!0),
            onMouseLeave: () => W(!1),
            cx: 144,
            cy: 144,
            r: 28.8,
            stroke: "none"
          })]
        }), (0, r.jsxs)("div", {
          className: u.innerContent,
          children: [O && (0, r.jsx)(d, {
            className: u.chatWheelDeadZoneIcon
          }), x && A.length > 1 ? (0, r.jsx)("div", {
            className: u.paginationHint,
            children: c.NW.string(c.t["Xy+S09"])
          }) : null]
        }), L]
      })
    })
  })