/** Chunk was on 58173 **/
n.d(t, {
  Z: () => y
}), n(47120), n(411104);
var r = n(200651),
  l = n(192379),
  o = n(392711),
  i = n.n(o),
  s = n(481060),
  a = n(65205),
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
  y = l.memo(function(e) {
    let {
      wheelWidth: t,
      wheelHeight: n,
      itemWidth: y,
      itemHeight: v,
      showDeadZoneIndicator: O,
      activeItem: N,
      onItemSelect: b,
      onItemAction: m,
      interactive: x = !0,
      children: C
    } = e, j = l.useRef(null), E = l.useRef([]), I = l.useRef(!1), P = l.useRef(null), [S, w] = l.useState(0), [T, Z] = l.useState({
      x: 0,
      y: 0
    }), _ = Math.abs(T.x) + Math.abs(T.y) > 0, R = l.useMemo(() => i().chunk(C, f), [C]), A = l.useCallback((e, t) => {
      null == E.current[S] ? E.current[S] = [] : E.current[S][t] = e
    }, [S]), D = l.useCallback((e, t) => {
      P.current = t, b(f * e + t)
    }, [b]), W = l.useCallback(() => {
      P.current = null, b(null)
    }, [b]), k = l.useCallback(e => {
      W(), I.current = e
    }, [W]), M = l.useCallback((e, t, n) => {
      if (I.current) {
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
        o = r.y < 0,
        i = g(n, r);
      Z({
        x: (l ? Math.max(r.x, -i.x) : Math.min(r.x, i.x)) / 2,
        y: (o ? Math.max(r.y, -i.y) : Math.min(r.y, i.y)) / 2
      })
    }, []), B = l.useCallback(e => {
      null != P.current && (e.preventDefault(), e.stopPropagation(), null == m || m(f * S + P.current))
    }, [m, S]), U = l.useMemo(() => (0, o.throttle)(e => {
      if (null == j.current) return;
      let r = j.current.getBoundingClientRect(),
        l = {
          x: r.left + r.width / 2,
          y: r.top + r.height / 2
        },
        o = {
          x: e.clientX,
          y: e.clientY
        };
      if (M(o, l, Math.max(t, n)), I.current) {
        null != N && W();
        return
      }
      let i = (0, a.ld)(l, o, Math.max(t, n));
      for (let e = 0; e < E.current[S].length; e++) {
        let t = E.current[S][e];
        if (null == t) continue;
        let n = t.getBoundingClientRect();
        if ((0, a.Vr)(l, i, n)) {
          D(S, e);
          return
        }
      }
      W()
    }, 16), [N, M, W, D, S, n, t]), L = l.useCallback(e => {
      if (!x) return;
      let t = S + (e.deltaY > 0 ? 1 : -1);
      t >= 0 && t < R.length && (null != P.current && (R[t].length > P.current ? D(t, P.current) : W()), w(t))
    }, [x, S, R, D, W]), G = l.useMemo(() => R[S].map((e, l) => {
      let o = h[l];
      if (null == o) throw Error("Too many items supplied ".concat(C.length, " expected max of ").concat(h.length));
      let i = p(o.x, t, y),
        s = p(o.y, n, v);
      return (0, r.jsx)("div", {
        ref: e => A(e, l),
        className: u.chatWheelItem,
        style: {
          left: i,
          top: s,
          width: y,
          height: v
        },
        children: e
      }, l)
    }), [R, S, t, y, n, v, C.length, A]);
    return (0, r.jsx)(s.P3F, {
      className: u.chatWheelMouseInput,
      onMouseMove: U,
      onWheel: L,
      onClick: B,
      children: (0, r.jsxs)("div", {
        ref: j,
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
              onMouseEnter: () => k(!0),
              onMouseLeave: () => k(!1),
              cx: 144,
              cy: 144,
              r: 28.8
            }), _ && (0, r.jsx)("circle", {
              className: u.chatWheelCenter,
              cx: 144 + T.x,
              cy: 144 + T.y,
              r: 28.8
            })]
          }), O && (0, r.jsx)("circle", {
            className: u.chatWheelDeadZone,
            onMouseEnter: () => k(!0),
            onMouseLeave: () => k(!1),
            cx: 144,
            cy: 144,
            r: 28.8,
            stroke: "none"
          })]
        }), (0, r.jsxs)("div", {
          className: u.innerContent,
          children: [O && (0, r.jsx)(d, {
            className: u.chatWheelDeadZoneIcon
          }), x && R.length > 1 ? (0, r.jsx)("div", {
            className: u.paginationHint,
            children: c.NW.string(c.t["Xy+S09"])
          }) : null]
        }), G]
      })
    })
  })