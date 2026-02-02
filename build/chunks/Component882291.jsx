/** Chunk was on 23628 **/
/** chunk id: 882291, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk261331 = require("./261331.js"),
  Chunk894307 = require("./894307.js"),
  Chunk650583 = require("./650583.js"),
  Chunk790191 = require("./790191.js");

function m(e) {
  let {
    isFullyVisible: t,
    percent: n,
    animate: o,
    interactionEnabled: m,
    backgroundColor: v,
    playerState: b,
    preloadedBuffers: E,
    duration: g,
    maxSeekableTime: h,
    onClick: y,
    onScrubBack: O,
    onScrubForward: S,
    "data-testid": _
  } = e, [C, x] = l.useState(null), [A, j] = l.useState(null), [T, D] = l.useState(null), [w, N] = l.useState(false), P = l.useRef(null), I = e => {
    P.current = e, x(e)
  };
  l.useEffect(() => {
    null != C && (null == h ? D(null) : D((0, d.DX)(h, g, C)))
  }, [C, h, g]);
  let L = (0, c.A)(e => {
      I(e.contentRect)
    }),
    R = (0, a.w)(L);
  l.useLayoutEffect(() => {
    null != R.current && I(R.current.getBoundingClientRect())
  }, [R]), l.useEffect(() => {
    let e = () => {
      null != R.current && I(R.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [R]);
  let k = e => {
      j(e.clientX)
    },
    M = l.useCallback(e => {
      let {
        key: t
      } = e;
      t === p.N$.ArrowLeft && null != O ? (e.preventDefault(), e.stopPropagation(), O()) : t === p.N$.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S())
    }, [O, S]),
    V = null != A && null != C ? (0, d.hc)(A, C, g) : 0,
    Q = (0, d.rB)(V),
    U = null != C ? C.right - (0, d.DX)(n / 100 * g, g, C) : null,
    F = null != A && null != C ? C.right - A : null,
    B = null != T && null != C ? C.right - T : null;
  return (0, r.jsxs)("div", {
    className: f.jD,
    ref: R,
    "data-testid": _,
    children: [(0, r.jsxs)(s.DUT, {
      className: i()(f.KF, {
        [f.uc]: m
      }),
      ignoreKeyPress: true,
      onClick: e => {
        m && null != y && y((0, d.hc)(e.clientX, e.currentTarget.getBoundingClientRect(), g))
      },
      onMouseEnter: e => {
        m && (null != R.current && I(R.current.getBoundingClientRect()), N(true), k(e))
      },
      onMouseLeave: e => {
        m && (N(false), j(null))
      },
      onMouseMove: e => {
        m && w && k(e)
      },
      onKeyDown: M,
      tabIndex: m ? true : false,
      focusProps: {
        offset: {
          top: 12,
          bottom: 12
        }
      },
      children: [null == E ? true : E.map(e => (0, r.jsx)("div", {
        className: i()(f.r, f.Wf, {
          [f.yz]: w
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !m && null != B && B > 0 && (0, r.jsx)("div", {
        className: i()(f.YK, f.Wf),
        style: {
          right: null != B ? "".concat(B, "px") : "auto",
          opacity: +(null != B)
        }
      }), (0, r.jsx)(s.iCB, {
        className: i()(f.qB, f.Wf),
        percent: n,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != v ? v : true,
        size: w ? s.iCB.Sizes.XSMALL : s.iCB.Sizes.XXSMALL,
        animate: o
      }), w && null != Q && t && (0, r.jsx)(s.Text, {
        className: f.Ey,
        variant: "text-xs/normal",
        style: {
          right: null != F ? "".concat(F - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: Q
      }), w && m && null != U && (0, r.jsx)("div", {
        className: f.Ub,
        style: {
          right: "".concat(U - 6, "px")
        }
      })]
    }), b !== u.Q6.ENDED && (0, r.jsx)("div", {
      className: f.pN,
      style: {
        width: "".concat(n, "%")
      }
    })]
  })
}