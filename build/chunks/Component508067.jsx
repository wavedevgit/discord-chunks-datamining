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
    isFullyVisible: t,
    percent: n,
    animate: l,
    interactionEnabled: v,
    backgroundColor: E,
    preloadedBuffers: g,
    duration: h,
    maxSeekableTime: C,
    onClick: S,
    onScrubBack: b,
    onScrubForward: O
  } = e, [_, x] = o.useState(null), [y, j] = o.useState(null), [P, D] = o.useState(null), [T, R] = o.useState(false), N = o.useRef(null), I = e => {
    N.current = e, x(e)
  };
  o.useEffect(() => {
    null != _ && (null == C ? D(null) : D(p(C, h, _)))
  }, [_, C, h]);
  let A = (0, c.Z)(e => {
      I(e.contentRect)
    }),
    w = (0, s.y)(A);
  o.useLayoutEffect(() => {
    null != w.current && I(w.current.getBoundingClientRect())
  }, [w]), o.useEffect(() => {
    let e = () => {
      null != w.current && I(w.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [w]);
  let k = e => {
      j(e.clientX)
    },
    L = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === d.mR.ArrowLeft && null != b ? (e.preventDefault(), e.stopPropagation(), b()) : t === d.mR.ArrowRight && null != O && (e.preventDefault(), e.stopPropagation(), O())
    }, [b, O]),
    M = null != y && null != _ ? f(y, _, h) : 0,
    V = (0, u.yv)(M),
    Z = null != _ ? _.right - p(n / 100 * h, h, _) : null,
    F = null != y && null != _ ? _.right - y : null,
    B = null != P && null != _ ? _.right - P : null;
  return (0, r.jsxs)("div", {
    className: m.cont,
    ref: w,
    children: [(0, r.jsxs)(a.P3F, {
      className: i()(m.hitboxArea, {
        [m.interactionEnabled]: v
      }),
      ignoreKeyPress: true,
      onClick: e => {
        v && null != S && S(f(e.clientX, e.currentTarget.getBoundingClientRect(), h))
      },
      onMouseEnter: e => {
        v && (null != w.current && I(w.current.getBoundingClientRect()), R(true), k(e))
      },
      onMouseLeave: e => {
        v && (R(false), j(null))
      },
      onMouseMove: e => {
        v && T && k(e)
      },
      onKeyDown: L,
      tabIndex: v ? true : false,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == g ? true : g.map(e => (0, r.jsx)("div", {
        className: i()(m.buffer, m.rounded, {
          [m.bufferHovered]: T
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !v && null != B && B > 0 && (0, r.jsx)("div", {
        className: i()(m.seekableBar, m.rounded),
        style: {
          right: null != B ? "".concat(B, "px") : "auto",
          opacity: +(null != B)
        }
      }), (0, r.jsx)(a.Exd, {
        className: i()(m.progress, m.rounded),
        percent: n,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != E ? E : true,
        size: T ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
        animate: l
      }), T && null != V && t && (0, r.jsx)(a.Text, {
        className: m.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != F ? "".concat(F - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: V
      }), T && v && null != Z && (0, r.jsx)("div", {
        className: m.grabber,
        style: {
          right: "".concat(Z - 6, "px")
        }
      })]
    }), (0, r.jsx)("div", {
      className: m.progressGlow,
      style: {
        width: "".concat(n, "%")
      }
    })]
  })
}