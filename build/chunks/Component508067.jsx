/** Chunk was on 75909 **/
/** chunk id: 508067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk325916 = require("./325916.js"),
  Chunk939389 = require("./939389.js"),
  Chunk295907 = require("./295907.js"),
  Chunk238384 = require("./238384.js");

function p(e, t, n) {
  return n * (Math.max(e - t.left, 0) / t.width)
}

function v(e, t, n) {
  return n.left + e / t * n.width
}

function g(e) {
  let {
    isFullyVisible: t,
    percent: n,
    animate: l,
    interactionEnabled: g,
    backgroundColor: E,
    playerState: h,
    preloadedBuffers: C,
    duration: b,
    maxSeekableTime: S,
    onClick: O,
    onScrubBack: _,
    onScrubForward: x
  } = e, [y, j] = o.useState(null), [P, D] = o.useState(null), [T, I] = o.useState(null), [N, w] = o.useState(false), k = o.useRef(null), A = e => {
    k.current = e, j(e)
  };
  o.useEffect(() => {
    null != y && (null == S ? I(null) : I(v(S, b, y)))
  }, [y, S, b]);
  let M = (0, c.Z)(e => {
      A(e.contentRect)
    }),
    R = (0, s.y)(M);
  o.useLayoutEffect(() => {
    null != R.current && A(R.current.getBoundingClientRect())
  }, [R]), o.useEffect(() => {
    let e = () => {
      null != R.current && A(R.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [R]);
  let L = e => {
      D(e.clientX)
    },
    V = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === m.mR.ArrowLeft && null != _ ? (e.preventDefault(), e.stopPropagation(), _()) : t === m.mR.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x())
    }, [_, x]),
    Z = null != P && null != y ? p(P, y, b) : 0,
    F = (0, d.yv)(Z),
    B = null != y ? y.right - v(n / 100 * b, b, y) : null,
    q = null != P && null != y ? y.right - P : null,
    U = null != T && null != y ? y.right - T : null;
  return (0, r.jsxs)("div", {
    className: f.cont,
    ref: R,
    children: [(0, r.jsxs)(a.P3F, {
      className: i()(f.hitboxArea, {
        [f.interactionEnabled]: g
      }),
      ignoreKeyPress: true,
      onClick: e => {
        g && null != O && O(p(e.clientX, e.currentTarget.getBoundingClientRect(), b))
      },
      onMouseEnter: e => {
        g && (null != R.current && A(R.current.getBoundingClientRect()), w(true), L(e))
      },
      onMouseLeave: e => {
        g && (w(false), D(null))
      },
      onMouseMove: e => {
        g && N && L(e)
      },
      onKeyDown: V,
      tabIndex: g ? true : false,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == C ? true : C.map(e => (0, r.jsx)("div", {
        className: i()(f.buffer, f.rounded, {
          [f.bufferHovered]: N
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !g && null != U && U > 0 && (0, r.jsx)("div", {
        className: i()(f.seekableBar, f.rounded),
        style: {
          right: null != U ? "".concat(U, "px") : "auto",
          opacity: +(null != U)
        }
      }), (0, r.jsx)(a.Exd, {
        className: i()(f.progress, f.rounded),
        percent: n,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != E ? E : true,
        size: N ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
        animate: l
      }), N && null != F && t && (0, r.jsx)(a.Text, {
        className: f.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != q ? "".concat(q - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: F
      }), N && g && null != B && (0, r.jsx)("div", {
        className: f.grabber,
        style: {
          right: "".concat(B - 6, "px")
        }
      })]
    }), h !== u.rq.ENDED && (0, r.jsx)("div", {
      className: f.progressGlow,
      style: {
        width: "".concat(n, "%")
      }
    })]
  })
}