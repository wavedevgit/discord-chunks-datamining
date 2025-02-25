/** Chunk was on 61195 **/
n.d(t, {
  Z: () => g
}), n(47120), n(411104);
var i = n(200651),
  o = n(192379),
  r = n(392711),
  a = n.n(r),
  l = n(481060),
  c = n(65205),
  s = n(388032),
  u = n(870571);

function d(e) {
  let {
    className: t
  } = e;
  return (0, i.jsxs)("svg", {
    className: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    children: [(0, i.jsx)("g", {
      filter: "url(#a)",
      children: (0, i.jsx)("path", {
        d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
        fill: "currentColor"
      })
    }), (0, i.jsx)("defs", {
      children: (0, i.jsxs)("filter", {
        id: "a",
        x: "0",
        y: "0",
        width: "48",
        height: "48",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [(0, i.jsx)("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), (0, i.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), (0, i.jsx)("feOffset", {
          dy: "8"
        }), (0, i.jsx)("feGaussianBlur", {
          stdDeviation: "8"
        }), (0, i.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        }), (0, i.jsx)("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_605_72103"
        }), (0, i.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_605_72103",
          result: "shape"
        })]
      })
    })]
  })
}
let _ = [{
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
  h = _.length;

function f(e, t, n) {
  let i = e * t;
  return e > .5 ? i - n : e < .5 ? i : i - n / 2
}
let p = (e, t) => {
    let n = Math.abs(t.x),
      i = 180 / Math.PI * Math.atan2(Math.abs(t.y), n),
      o = e / 2 - 28.8;
    return {
      x: Math.max(o * Math.cos(2 * Math.PI * i / 360), 0),
      y: Math.max(o * Math.sin(2 * Math.PI * i / 360), 0)
    }
  },
  g = o.memo(function(e) {
    let {
      wheelWidth: t,
      wheelHeight: n,
      itemWidth: g,
      itemHeight: v,
      showDeadZoneIndicator: b,
      activeItem: y,
      onItemSelect: m,
      onItemAction: I,
      interactive: O = !0,
      children: N
    } = e, C = o.useRef(null), S = o.useRef([]), x = o.useRef(!1), w = o.useRef(null), [T, P] = o.useState(0), [E, j] = o.useState({
      x: 0,
      y: 0
    }), Z = Math.abs(E.x) + Math.abs(E.y) > 0, A = o.useMemo(() => a().chunk(N, h), [N]), W = o.useCallback((e, t) => {
      null == S.current[T] ? S.current[T] = [] : S.current[T][t] = e
    }, [T]), k = o.useCallback((e, t) => {
      w.current = t, m(h * e + t)
    }, [m]), R = o.useCallback(() => {
      w.current = null, m(null)
    }, [m]), D = o.useCallback(e => {
      R(), x.current = e
    }, [R]), B = o.useCallback((e, t, n) => {
      if (x.current) {
        j({
          x: 0,
          y: 0
        });
        return
      }
      let i = {
          x: e.x - t.x,
          y: e.y - t.y
        },
        o = i.x < 0,
        r = i.y < 0,
        a = p(n, i);
      j({
        x: (o ? Math.max(i.x, -a.x) : Math.min(i.x, a.x)) / 2,
        y: (r ? Math.max(i.y, -a.y) : Math.min(i.y, a.y)) / 2
      })
    }, []), F = o.useCallback(e => {
      null != w.current && (e.preventDefault(), e.stopPropagation(), null == I || I(h * T + w.current))
    }, [I, T]), M = o.useMemo(() => (0, r.throttle)(e => {
      if (null == C.current) return;
      let i = C.current.getBoundingClientRect(),
        o = {
          x: i.left + i.width / 2,
          y: i.top + i.height / 2
        },
        r = {
          x: e.clientX,
          y: e.clientY
        };
      if (B(r, o, Math.max(t, n)), x.current) {
        null != y && R();
        return
      }
      let a = (0, c.ld)(o, r, Math.max(t, n));
      for (let e = 0; e < S.current[T].length; e++) {
        let t = S.current[T][e];
        if (null == t) continue;
        let n = t.getBoundingClientRect();
        if ((0, c.Vr)(o, a, n)) {
          k(T, e);
          return
        }
      }
      R()
    }, 16), [y, B, R, k, T, n, t]), L = o.useCallback(e => {
      if (!O) return;
      let t = T + (e.deltaY > 0 ? 1 : -1);
      t >= 0 && t < A.length && (null != w.current && (A[t].length > w.current ? k(t, w.current) : R()), P(t))
    }, [O, T, A, k, R]), U = o.useMemo(() => A[T].map((e, o) => {
      let r = _[o];
      if (null == r) throw Error("Too many items supplied ".concat(N.length, " expected max of ").concat(_.length));
      let a = f(r.x, t, g),
        l = f(r.y, n, v);
      return (0, i.jsx)("div", {
        ref: e => W(e, o),
        className: u.chatWheelItem,
        style: {
          left: a,
          top: l,
          width: g,
          height: v
        },
        children: e
      }, o)
    }), [A, T, t, g, n, v, N.length, W]);
    return (0, i.jsx)(l.P3F, {
      className: u.chatWheelMouseInput,
      onMouseMove: M,
      onWheel: L,
      onClick: F,
      children: (0, i.jsxs)("div", {
        ref: C,
        className: u.chatWheel,
        style: {
          width: t,
          height: n
        },
        children: [(0, i.jsxs)("svg", {
          className: u.chatWheelBackground,
          viewBox: "0 0 288 288",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, i.jsxs)("filter", {
            id: "soundboard-wheel-background-shadow",
            x: "0",
            y: "0",
            width: "288",
            height: "288",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [(0, i.jsx)("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }), (0, i.jsx)("feColorMatrix", {
              in: "SourceAlpha",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
              result: "hardAlpha"
            }), (0, i.jsx)("feOffset", {
              dy: "8"
            }), (0, i.jsx)("feGaussianBlur", {
              stdDeviation: "8"
            }), (0, i.jsx)("feColorMatrix", {
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
            }), (0, i.jsx)("feBlend", {
              in2: "BackgroundImageFix",
              result: "effect1_dropShadow_489_60382"
            }), (0, i.jsx)("feBlend", {
              in: "SourceGraphic",
              in2: "effect1_dropShadow_489_60382",
              result: "shape"
            })]
          }), (0, i.jsxs)("g", {
            filter: "url(#soundboard-wheel-background-shadow)",
            children: [(0, i.jsx)("circle", {
              className: u.chatWheelBackground,
              cx: "144",
              cy: "144",
              r: "103.68",
              strokeWidth: "40.32"
            }), b && (0, i.jsx)("circle", {
              className: u.chatWheelDeadZone,
              onMouseEnter: () => D(!0),
              onMouseLeave: () => D(!1),
              cx: 144,
              cy: 144,
              r: 28.8
            }), Z && (0, i.jsx)("circle", {
              className: u.chatWheelCenter,
              cx: 144 + E.x,
              cy: 144 + E.y,
              r: 28.8
            })]
          }), b && (0, i.jsx)("circle", {
            className: u.chatWheelDeadZone,
            onMouseEnter: () => D(!0),
            onMouseLeave: () => D(!1),
            cx: 144,
            cy: 144,
            r: 28.8,
            stroke: "none"
          })]
        }), (0, i.jsxs)("div", {
          className: u.innerContent,
          children: [b && (0, i.jsx)(d, {
            className: u.chatWheelDeadZoneIcon
          }), O && A.length > 1 ? (0, i.jsx)("div", {
            className: u.paginationHint,
            children: s.NW.string(s.t["Xy+S09"])
          }) : null]
        }), U]
      })
    })
  })