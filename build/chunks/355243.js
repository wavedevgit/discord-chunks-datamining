/** Chunk was on 32249 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  o = n(192379),
  i = n(120356),
  l = n.n(i),
  a = n(481060),
  s = n(393903),
  c = n(604162),
  u = n(420212),
  d = n(463303);

function m(e, t, n) {
  return n * (Math.max(e - t.left, 0) / t.width)
}

function p(e, t, n) {
  return n.left + e / t * n.width
}

function f(e) {
  let {
    percent: t,
    animate: n,
    interactionEnabled: i,
    backgroundColor: f,
    preloadedBuffers: v,
    duration: g,
    maxSeekableTime: E,
    onClick: b,
    onScrubBack: O,
    onScrubForward: S
  } = e, [h, C] = o.useState(null), [j, y] = o.useState(null), [_, x] = o.useState(null), [D, N] = o.useState(!1), P = o.useRef(null), T = e => {
    P.current = e, C(e)
  };
  o.useEffect(() => {
    null != h && (null == E ? x(null) : x(p(E, g, h)))
  }, [h, E, g]);
  let I = (0, s.y)(() => {
    null != I.current && T(I.current.getBoundingClientRect())
  });
  o.useLayoutEffect(() => {
    null != I.current && T(I.current.getBoundingClientRect())
  }, [I]), o.useEffect(() => {
    let e = () => {
      null != I.current && T(I.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [I]);
  let A = e => {
      y(e.clientX)
    },
    w = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === u.mR.ArrowLeft && null != O ? (e.preventDefault(), e.stopPropagation(), O()) : t === u.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S())
    }, [O, S]),
    k = null != j && null != h ? m(j, h, g) : 0,
    L = (0, c.yv)(k),
    R = null != h ? h.right - p(t / 100 * g, g, h) : null,
    M = null != j && null != h ? h.right - j : null,
    V = null != _ && null != h ? h.right - _ : null;
  return (0, r.jsxs)("div", {
    className: d.cont,
    ref: I,
    children: [(0, r.jsxs)(a.P3F, {
      className: l()(d.hitboxArea, {
        [d.interactionEnabled]: i
      }),
      ignoreKeyPress: !0,
      onClick: e => {
        i && null != b && b(m(e.clientX, e.currentTarget.getBoundingClientRect(), g))
      },
      onMouseEnter: e => {
        i && (null != I.current && T(I.current.getBoundingClientRect()), N(!0), A(e))
      },
      onMouseLeave: e => {
        i && (N(!1), y(null))
      },
      onMouseMove: e => {
        i && D && A(e)
      },
      onKeyDown: w,
      tabIndex: i ? void 0 : -1,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == v ? void 0 : v.map(e => (0, r.jsx)("div", {
        className: l()(d.buffer, {
          [d.bufferHovered]: D
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !i && null != V && V > 0 && (0, r.jsx)("div", {
        className: d.seekableBar,
        style: {
          right: null != V ? "".concat(V, "px") : "auto",
          opacity: +(null != V)
        }
      }), (0, r.jsx)(a.Exd, {
        className: d.progress,
        percent: t,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != f ? f : void 0,
        size: D ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
        animate: n
      }), D && null != L && (0, r.jsx)(a.Text, {
        className: d.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != M ? "".concat(M - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: L
      }), D && i && null != R && (0, r.jsx)("div", {
        className: d.grabber,
        style: {
          right: "".concat(R - 6, "px")
        }
      })]
    }), (0, r.jsx)("div", {
      className: d.progressGlow,
      style: {
        width: "".concat(t, "%")
      }
    })]
  })
}