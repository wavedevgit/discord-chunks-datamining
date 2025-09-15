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
    preloadedBuffers: g,
    duration: _,
    maxSeekableTime: C,
    onClick: E,
    onScrubBack: S,
    onScrubForward: b
  } = e, [O, h] = o.useState(null), [y, j] = o.useState(null), [x, T] = o.useState(null), [D, P] = o.useState(false), I = o.useRef(null), R = e => {
    I.current = e, h(e)
  };
  o.useEffect(() => {
    null != O && (null == C ? T(null) : T(m(C, _, O)))
  }, [O, C, _]);
  let k = (0, c.Z)(e => {
      R(e.contentRect)
    }),
    N = (0, s.y)(k);
  o.useLayoutEffect(() => {
    null != N.current && R(N.current.getBoundingClientRect())
  }, [N]), o.useEffect(() => {
    let e = () => {
      null != N.current && R(N.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [N]);
  let A = e => {
      j(e.clientX)
    },
    w = o.useCallback(e => {
      let {
        key: t
      } = e;
      t === d.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === d.mR.ArrowRight && null != b && (e.preventDefault(), e.stopPropagation(), b())
    }, [S, b]),
    L = null != y && null != O ? p(y, O, _) : 0,
    M = (0, u.yv)(L),
    B = null != O ? O.right - m(t / 100 * _, _, O) : null,
    V = null != y && null != O ? O.right - y : null,
    F = null != x && null != O ? O.right - x : null;
  return (0, r.jsxs)("div", {
    className: f.cont,
    ref: N,
    children: [(0, r.jsxs)(i.P3F, {
      className: l()(f.hitboxArea, {
        [f.interactionEnabled]: a
      }),
      ignoreKeyPress: true,
      onClick: e => {
        a && null != E && E(p(e.clientX, e.currentTarget.getBoundingClientRect(), _))
      },
      onMouseEnter: e => {
        a && (null != N.current && R(N.current.getBoundingClientRect()), P(true), A(e))
      },
      onMouseLeave: e => {
        a && (P(false), j(null))
      },
      onMouseMove: e => {
        a && D && A(e)
      },
      onKeyDown: w,
      tabIndex: a ? true : false,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == g ? true : g.map(e => (0, r.jsx)("div", {
        className: l()(f.buffer, {
          [f.bufferHovered]: D
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
        size: D ? i.Exd.Sizes.XSMALL : i.Exd.Sizes.XXSMALL,
        animate: n
      }), D && null != M && (0, r.jsx)(i.Text, {
        className: f.timeDisplay,
        variant: "text-xs/normal",
        style: {
          right: null != V ? "".concat(V - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: M
      }), D && a && null != B && (0, r.jsx)("div", {
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