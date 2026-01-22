/** Chunk was on 23628 **/
/** chunk id: 882291, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk261331 = require("./261331.js"),
  Chunk457775 = require("./457775.js"),
  Chunk650583 = require("./650583.js"),
  Chunk790191 = require("./790191.js");

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
    animate: o,
    interactionEnabled: E,
    backgroundColor: g,
    playerState: h,
    preloadedBuffers: b,
    duration: y,
    maxSeekableTime: O,
    onClick: S,
    onScrubBack: _,
    onScrubForward: C
  } = e, [x, A] = l.useState(null), [j, T] = l.useState(null), [D, w] = l.useState(null), [N, P] = l.useState(false), I = l.useRef(null), L = e => {
    I.current = e, A(e)
  };
  l.useEffect(() => {
    null != x && (null == O ? w(null) : w(v(O, y, x)))
  }, [x, O, y]);
  let R = (0, c.A)(e => {
      L(e.contentRect)
    }),
    k = (0, a.w)(R);
  l.useLayoutEffect(() => {
    null != k.current && L(k.current.getBoundingClientRect())
  }, [k]), l.useEffect(() => {
    let e = () => {
      null != k.current && L(k.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [k]);
  let M = e => {
      T(e.clientX)
    },
    V = l.useCallback(e => {
      let {
        key: t
      } = e;
      t === f.N$.ArrowLeft && null != _ ? (e.preventDefault(), e.stopPropagation(), _()) : t === f.N$.ArrowRight && null != C && (e.preventDefault(), e.stopPropagation(), C())
    }, [_, C]),
    Q = null != j && null != x ? p(j, x, y) : 0,
    U = (0, d.rB)(Q),
    F = null != x ? x.right - v(n / 100 * y, y, x) : null,
    B = null != j && null != x ? x.right - j : null,
    K = null != D && null != x ? x.right - D : null;
  return (0, r.jsxs)("div", {
    className: m.jD,
    ref: k,
    children: [(0, r.jsxs)(s.DUT, {
      className: i()(m.KF, {
        [m.uc]: E
      }),
      ignoreKeyPress: true,
      onClick: e => {
        E && null != S && S(p(e.clientX, e.currentTarget.getBoundingClientRect(), y))
      },
      onMouseEnter: e => {
        E && (null != k.current && L(k.current.getBoundingClientRect()), P(true), M(e))
      },
      onMouseLeave: e => {
        E && (P(false), T(null))
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
      children: [null == b ? true : b.map(e => (0, r.jsx)("div", {
        className: i()(m.r, m.Wf, {
          [m.yz]: N
        }),
        style: {
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }
      }, "".concat(e.start, ":").concat(e.size))), !E && null != K && K > 0 && (0, r.jsx)("div", {
        className: i()(m.YK, m.Wf),
        style: {
          right: null != K ? "".concat(K, "px") : "auto",
          opacity: +(null != K)
        }
      }), (0, r.jsx)(s.kej, {
        className: i()(m.qB, m.Wf),
        percent: n,
        foregroundColor: "#FFFFFF",
        backgroundColor: null != g ? g : true,
        size: N ? s.kej.Sizes.XSMALL : s.kej.Sizes.XXSMALL,
        animate: o
      }), N && null != U && t && (0, r.jsx)(s.Text, {
        className: m.Ey,
        variant: "text-xs/normal",
        style: {
          right: null != B ? "".concat(B - 10, "px") : "auto",
          color: "#FFFFFF"
        },
        children: U
      }), N && E && null != F && (0, r.jsx)("div", {
        className: m.Ub,
        style: {
          right: "".concat(F - 6, "px")
        }
      })]
    }), h !== u.Q6.ENDED && (0, r.jsx)("div", {
      className: m.pN,
      style: {
        width: "".concat(n, "%")
      }
    })]
  })
}