/** Chunk was on 32249 **/
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651),
  o = n(192379),
  l = n(120356),
  i = n.n(l),
  s = n(481060),
  a = n(393903),
  c = n(604162),
  u = n(420212),
  d = n(898997);

function m(e, t, n) {
  return n * (Math.max(e - t.left, 0) / t.width)
}

function p(e, t, n) {
  return n.left + e / t * n.width
}

function v(e) {
  let {
    percent: t,
    animate: n,
    interactionEnabled: l,
    backgroundColor: v,
    preloadedBuffers: f,
    duration: E,
    maxSeekableTime: g,
    onClick: b,
    onScrubBack: O,
    onScrubForward: S
  } = e, [C, j] = o.useState(null), [h, y] = o.useState(null), [x, _] = o.useState(null), [D, N] = o.useState(!1), P = o.useRef(null), T = e => {
    P.current = e, j(e)
  };
  o.useEffect(() => {
    null != C && (null == g ? _(null) : _(p(g, E, C)))
  }, [C, g, E]);
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
  let A = e => {
      y(e.clientX)
    },
    w = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === u.mR.ArrowLeft && null != O ? (e.preventDefault(), e.stopPropagation(), O()) : t === u.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S())
    }, [O, S]),
    L = null != h && null != C ? m(h, C, E) : 0,
    k = (0, c.yv)(L),
    R = null != C ? C.right - p(t / 100 * E, E, C) : null,
    M = null != h && null != C ? C.right - h : null,
    q = null != x && null != C ? C.right - x : null;
  return (0, r.jsxs)("div", {
    className: d.cont,
    ref: I,
    children: [(0, r.jsxs)(s.P3F, {
      className: i()(d.hitboxArea, {
        [d.interactionEnabled]: l
      }),
      ignoreKeyPress: !0,
      onClick: e => {
        l && null != b && b(m(e.clientX, e.currentTarget.getBoundingClientRect(), E))
      },
      onMouseEnter: e => {
        l && (null != I.current && T(I.current.getBoundingClientRect()), N(!0), A(e))
      },
      onMouseLeave: e => {
        l && (N(!1), y(null))
      },
      onMouseMove: e => {
        l && D && A(e)
      },
      onKeyDown: w,
      tabIndex: l ? void 0 : -1,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == f ? void 0 : f.map(e => (0, r.jsx)("div", {
        className: i()(d.buffer, {
          [d.bufferHovered]: D
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !l && null != q && q > 0 && (0, r.jsx)("div", {
        className: d.seekableBar,
        style: {
          right: null != q ? "".concat(q, "px") : "auto",
          opacity: +(null != q)
        }
      }), (0, r.jsx)(s.Exd, {
        className: d.progress,
        percent: t,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != v ? v : void 0,
        size: D ? s.Exd.Sizes.XSMALL : s.Exd.Sizes.XXSMALL,
        animate: n
      }), D && null != k && (0, r.jsx)(s.Text, {
        className: d.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != M ? "".concat(M - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: k
      }), D && l && null != R && (0, r.jsx)("div", {
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