/** Chunk was on 32249 **/
/** chunk id: 355243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk604162 = require("./604162.js"),
  Chunk420212 = require("./420212.js"),
  Chunk412331 = require("./412331.js");

function p(e, t, n) {
  return n * (Math.max(e - t.left, 0) / t.width)
}

function m(e, t, n) {
  return n.left + e / t * n.width
}

function v(e) {
  let {
    percent: t,
    animate: n,
    interactionEnabled: a,
    backgroundColor: v,
    preloadedBuffers: C,
    duration: g,
    maxSeekableTime: _,
    onClick: E,
    onScrubBack: S,
    onScrubForward: O
  } = e, [b, h] = o.useState(null), [y, j] = o.useState(null), [x, T] = o.useState(null), [P, D] = o.useState(false), R = o.useRef(null), I = e => {
    R.current = e, h(e)
  };
  o.useEffect(() => {
    null != b && (null == _ ? T(null) : T(m(_, g, b)))
  }, [b, _, g]);
  let k = (0, c.Z)(e => {
      I(e.contentRect)
    }),
    N = (0, s.y)(k);
  o.useLayoutEffect(() => {
    null != N.current && I(N.current.getBoundingClientRect())
  }, [N]), o.useEffect(() => {
    let e = () => {
      null != N.current && I(N.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [N]);
  let w = e => {
      j(e.clientX)
    },
    A = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === d.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === d.mR.ArrowRight && null != O && (e.preventDefault(), e.stopPropagation(), O())
    }, [S, O]),
    L = null != y && null != b ? p(y, b, g) : 0,
    M = (0, u.yv)(L),
    B = null != b ? b.right - m(t / 100 * g, g, b) : null,
    V = null != y && null != b ? b.right - y : null,
    F = null != x && null != b ? b.right - x : null;
  return (0, r.jsxs)("div", {
    className: f.cont,
    ref: N,
    children: [(0, r.jsxs)(i.P3F, {
      className: l()(f.hitboxArea, {
        [f.interactionEnabled]: a
      }),
      ignoreKeyPress: true,
      onClick: e => {
        a && null != E && E(p(e.clientX, e.currentTarget.getBoundingClientRect(), g))
      },
      onMouseEnter: e => {
        a && (null != N.current && I(N.current.getBoundingClientRect()), D(true), w(e))
      },
      onMouseLeave: e => {
        a && (D(false), j(null))
      },
      onMouseMove: e => {
        a && P && w(e)
      },
      onKeyDown: A,
      tabIndex: a ? true : false,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == C ? true : C.map(e => (0, r.jsx)("div", {
        className: l()(f.buffer, {
          [f.bufferHovered]: P
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !a && null != F && F > 0 && (0, r.jsx)("div", {
        className: f.seekableBar,
        style: {
          right: null != F ? "".concat(F, "px") : "auto",
          opacity: +(null != F)
        }
      }), (0, r.jsx)(i.Exd, {
        className: f.progress,
        percent: t,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != v ? v : true,
        size: P ? i.Exd.Sizes.XSMALL : i.Exd.Sizes.XXSMALL,
        animate: n
      }), P && null != M && (0, r.jsx)(i.Text, {
        className: f.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != V ? "".concat(V - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: M
      }), P && a && null != B && (0, r.jsx)("div", {
        className: f.grabber,
        style: {
          right: "".concat(B - 6, "px")
        }
      })]
    }), (0, r.jsx)("div", {
      className: f.progressGlow,
      style: {
        width: "".concat(t, "%")
      }
    })]
  })
}