/** Chunk was on 32249 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  o = n(192379),
  l = n(120356),
  i = n.n(l),
  s = n(481060),
  a = n(393903),
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
    interactionEnabled: l,
    backgroundColor: f,
    preloadedBuffers: v,
    duration: g,
    maxSeekableTime: E,
    onClick: b,
    onScrubBack: O,
    onScrubForward: h
  } = e, [S, C] = o.useState(null), [j, y] = o.useState(null), [x, _] = o.useState(null), [N, D] = o.useState(!1), P = o.useRef(null), T = e => {
    P.current = e, C(e)
  };
  o.useEffect(() => {
    null != S && (null == E ? _(null) : _(p(E, g, S)))
  }, [S, E, g]);
  let I = (0, a.y)(() => {
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
  let w = e => {
      y(e.clientX)
    },
    k = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === u.mR.ArrowLeft && null != O ? (e.preventDefault(), e.stopPropagation(), O()) : t === u.mR.ArrowRight && null != h && (e.preventDefault(), e.stopPropagation(), h())
    }, [O, h]),
    A = null != j && null != S ? m(j, S, g) : 0,
    L = (0, c.yv)(A),
    R = null != S ? S.right - p(t / 100 * g, g, S) : null,
    M = null != j && null != S ? S.right - j : null,
    V = null != x && null != S ? S.right - x : null;
  return (0, r.jsxs)("div", {
    className: d.cont,
    ref: I,
    children: [(0, r.jsxs)(s.P3F, {
      className: i()(d.hitboxArea, {
        [d.interactionEnabled]: l
      }),
      ignoreKeyPress: !0,
      onClick: e => {
        l && null != b && b(m(e.clientX, e.currentTarget.getBoundingClientRect(), g))
      },
      onMouseEnter: e => {
        l && (null != I.current && T(I.current.getBoundingClientRect()), D(!0), w(e))
      },
      onMouseLeave: e => {
        l && (D(!1), y(null))
      },
      onMouseMove: e => {
        l && N && w(e)
      },
      onKeyDown: k,
      tabIndex: l ? void 0 : -1,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == v ? void 0 : v.map(e => (0, r.jsx)("div", {
        className: i()(d.buffer, {
          [d.bufferHovered]: N
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !l && null != V && V > 0 && (0, r.jsx)("div", {
        className: d.seekableBar,
        style: {
          right: null != V ? "".concat(V, "px") : "auto",
          opacity: +(null != V)
        }
      }), (0, r.jsx)(s.Exd, {
        className: d.progress,
        percent: t,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != f ? f : void 0,
        size: N ? s.Exd.Sizes.XSMALL : s.Exd.Sizes.XXSMALL,
        animate: n
      }), N && null != L && (0, r.jsx)(s.Text, {
        className: d.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != M ? "".concat(M - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: L
      }), N && l && null != R && (0, r.jsx)("div", {
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