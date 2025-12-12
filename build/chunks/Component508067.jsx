/** Chunk was on 75909 **/
/** chunk id: 508067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk939389 = require("./939389.js"),
  Chunk295907 = require("./295907.js"),
  Chunk238384 = require("./238384.js");

function f(e, t, n) {
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
    preloadedBuffers: E,
    duration: g,
    rounded: O,
    maxSeekableTime: h,
    onClick: b,
    onScrubBack: S,
    onScrubForward: C
  } = e, [_, y] = o.useState(null), [x, j] = o.useState(null), [P, D] = o.useState(null), [T, R] = o.useState(false), I = o.useRef(null), N = e => {
    I.current = e, y(e)
  };
  o.useEffect(() => {
    null != _ && (null == h ? D(null) : D(p(h, g, _)))
  }, [_, h, g]);
  let A = (0, c.Z)(e => {
      N(e.contentRect)
    }),
    w = (0, s.y)(A);
  o.useLayoutEffect(() => {
    null != w.current && N(w.current.getBoundingClientRect())
  }, [w]), o.useEffect(() => {
    let e = () => {
      null != w.current && N(w.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [w]);
  let L = e => {
      j(e.clientX)
    },
    k = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === d.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === d.mR.ArrowRight && null != C && (e.preventDefault(), e.stopPropagation(), C())
    }, [S, C]),
    M = null != x && null != _ ? f(x, _, g) : 0,
    V = (0, u.yv)(M),
    Z = null != _ ? _.right - p(t / 100 * g, g, _) : null,
    F = null != x && null != _ ? _.right - x : null,
    B = null != P && null != _ ? _.right - P : null;
  return (0, r.jsxs)("div", {
    className: m.cont,
    ref: w,
    children: [(0, r.jsxs)(a.P3F, {
      className: i()(m.hitboxArea, {
        [m.interactionEnabled]: l
      }),
      ignoreKeyPress: true,
      onClick: e => {
        l && null != b && b(f(e.clientX, e.currentTarget.getBoundingClientRect(), g))
      },
      onMouseEnter: e => {
        l && (null != w.current && N(w.current.getBoundingClientRect()), R(true), L(e))
      },
      onMouseLeave: e => {
        l && (R(false), j(null))
      },
      onMouseMove: e => {
        l && T && L(e)
      },
      onKeyDown: k,
      tabIndex: l ? true : false,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == E ? true : E.map(e => (0, r.jsx)("div", {
        className: i()(m.buffer, {
          [m.bufferHovered]: T,
          [m.rounded]: O
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !l && null != B && B > 0 && (0, r.jsx)("div", {
        className: i()(m.seekableBar, {
          [m.rounded]: O
        }),
        style: {
          right: null != B ? "".concat(B, "px") : "auto",
          opacity: +(null != B)
        }
      }), (0, r.jsx)(a.Exd, {
        className: i()(m.progress, {
          [m.rounded]: O
        }),
        percent: t,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != v ? v : true,
        size: T ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
        animate: n
      }), T && null != V && (0, r.jsx)(a.Text, {
        className: m.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != F ? "".concat(F - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: V
      }), T && l && null != Z && (0, r.jsx)("div", {
        className: m.grabber,
        style: {
          right: "".concat(Z - 6, "px")
        }
      })]
    }), (0, r.jsx)("div", {
      className: m.progressGlow,
      style: {
        width: "".concat(t, "%")
      }
    })]
  })
}