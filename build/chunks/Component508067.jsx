/** Chunk was on 75909 **/
/** chunk id: 508067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function E(e) {
  let {
    isFullyVisible: t,
    percent: n,
    animate: l,
    interactionEnabled: E,
    backgroundColor: g,
    playerState: h,
    preloadedBuffers: C,
    duration: S,
    maxSeekableTime: b,
    onClick: O,
    onScrubBack: _,
    onScrubForward: x
  } = e, [y, j] = o.useState(null), [P, D] = o.useState(null), [T, R] = o.useState(null), [N, I] = o.useState(false), A = o.useRef(null), w = e => {
    A.current = e, j(e)
  };
  o.useEffect(() => {
    null != y && (null == b ? R(null) : R(v(b, S, y)))
  }, [y, b, S]);
  let L = (0, c.Z)(e => {
      w(e.contentRect)
    }),
    k = (0, s.y)(L);
  o.useLayoutEffect(() => {
    null != k.current && w(k.current.getBoundingClientRect())
  }, [k]), o.useEffect(() => {
    let e = () => {
      null != k.current && w(k.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [k]);
  let M = e => {
      D(e.clientX)
    },
    V = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === m.mR.ArrowLeft && null != _ ? (e.preventDefault(), e.stopPropagation(), _()) : t === m.mR.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x())
    }, [_, x]),
    Z = null != P && null != y ? p(P, y, S) : 0,
    F = (0, d.yv)(Z),
    B = null != y ? y.right - v(n / 100 * S, S, y) : null,
    U = null != P && null != y ? y.right - P : null,
    q = null != T && null != y ? y.right - T : null;
  return (0, r.jsxs)("div", {
    className: f.cont,
    ref: k,
    children: [(0, r.jsxs)(a.P3F, {
      className: i()(f.hitboxArea, {
        [f.interactionEnabled]: E
      }),
      ignoreKeyPress: true,
      onClick: e => {
        E && null != O && O(p(e.clientX, e.currentTarget.getBoundingClientRect(), S))
      },
      onMouseEnter: e => {
        E && (null != k.current && w(k.current.getBoundingClientRect()), I(true), M(e))
      },
      onMouseLeave: e => {
        E && (I(false), D(null))
      },
      onMouseMove: e => {
        E && N && M(e)
      },
      onKeyDown: V,
      tabIndex: E ? true : false,
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
      }, "".concat(e.start, ":").concat(e.size))), !E && null != q && q > 0 && (0, r.jsx)("div", {
        className: i()(f.seekableBar, f.rounded),
        style: {
          right: null != q ? "".concat(q, "px") : "auto",
          opacity: +(null != q)
        }
      }), (0, r.jsx)(a.Exd, {
        className: i()(f.progress, f.rounded),
        percent: n,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != g ? g : true,
        size: N ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
        animate: l
      }), N && null != F && t && (0, r.jsx)(a.Text, {
        className: f.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != U ? "".concat(U - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: F
      }), N && E && null != B && (0, r.jsx)("div", {
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