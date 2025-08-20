/** Chunk was on 32249 **/
/** chunk id: 355243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk604162 = require("./604162.js"),
  Chunk420212 = require("./420212.js"),
  Chunk412331 = require("./412331.js");

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
    preloadedBuffers: C,
    duration: E,
    maxSeekableTime: _,
    onClick: g,
    onScrubBack: S,
    onScrubForward: O
  } = e, [b, h] = o.useState(null), [y, j] = o.useState(null), [x, T] = o.useState(null), [P, D] = o.useState(false), R = o.useRef(null), I = e => {
    R.current = e, h(e)
  };
  o.useEffect(() => {
    null != b && (null == _ ? T(null) : T(p(_, E, b)))
  }, [b, _, E]);
  let N = (0, c.Z)(e => {
      I(e.contentRect)
    }),
    k = (0, s.y)(N);
  o.useLayoutEffect(() => {
    null != k.current && I(k.current.getBoundingClientRect())
  }, [k]), o.useEffect(() => {
    let e = () => {
      null != k.current && I(k.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [k]);
  let A = e => {
      j(e.clientX)
    },
    L = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === d.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === d.mR.ArrowRight && null != O && (e.preventDefault(), e.stopPropagation(), O())
    }, [S, O]),
    w = null != y && null != b ? m(y, b, E) : 0,
    M = (0, u.yv)(w),
    B = null != b ? b.right - p(t / 100 * E, E, b) : null,
    V = null != y && null != b ? b.right - y : null,
    F = null != x && null != b ? b.right - x : null;
  return (0, r.jsxs)("div", {
    className: f.cont,
    ref: k,
    children: [(0, r.jsxs)(i.P3F, {
      className: a()(f.hitboxArea, {
        [f.interactionEnabled]: l
      }),
      ignoreKeyPress: true,
      onClick: e => {
        l && null != g && g(m(e.clientX, e.currentTarget.getBoundingClientRect(), E))
      },
      onMouseEnter: e => {
        l && (null != k.current && I(k.current.getBoundingClientRect()), D(true), A(e))
      },
      onMouseLeave: e => {
        l && (D(false), j(null))
      },
      onMouseMove: e => {
        l && P && A(e)
      },
      onKeyDown: L,
      tabIndex: l ? true : false,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == C ? true : C.map(e => (0, r.jsx)("div", {
        className: a()(f.buffer, {
          [f.bufferHovered]: P
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !l && null != F && F > 0 && (0, r.jsx)("div", {
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
      }), P && l && null != B && (0, r.jsx)("div", {
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