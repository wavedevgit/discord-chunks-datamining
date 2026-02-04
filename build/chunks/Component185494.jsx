/** Chunk was on 17869 **/
/** chunk id: 185494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => C
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk475743 = require("./475743.js"),
  Chunk400492 = require("./400492.js"),
  Chunk430452 = require("./430452.js"),
  Chunk504292 = require("./504292.js"),
  Chunk774030 = require("./774030.js"),
  Chunk494783 = require("./494783.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk515316 = require("./515316.js");
let y = e => 1 - Math.pow(1 - e, 4),
  E = {
    mass: 1,
    friction: 64,
    tension: 1e3,
    clamp: true
  },
  v = {
    mass: 1,
    friction: 64,
    tension: 1e3
  },
  O = {
    mass: 1,
    friction: 35,
    tension: 1e3
  };

function C(e) {
  var t;
  let {} = e, {
    activeVoice: n
  } = (0, A.f)(), i = (0, h.A)(n), C = (0, g.e)(n), {
    toggleLoopback: S,
    isLoopbackEnabled: x
  } = function() {
    let {
      activeVoice: e
    } = (0, A.f)(), t = (0, o.bG)([f.A], () => f.A.getVoiceFilterPlaybackEnabled()), n = r.useCallback(() => {
      (0, p.Ak)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, m.KM)(!t)
    }, [t]);
    return r.useEffect(() => (d.A.setLoopback("voice_filter_preview", null != e && t), () => {
      d.A.setLoopback("voice_filter_preview", false)
    }), [t, e]), {
      isLoopbackEnabled: t,
      toggleLoopback: n
    }
  }(), j = x ? u.GOW : u.uik, I = r.useCallback(() => (0, m.OR)(null), []), T = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOWER).hex(), N = (0, u.rdh)(u.LU0.colors.WHITE).hex(), P = r.useRef(0), w = n !== i ? P.current + 1 : P.current;
  r.useEffect(() => {
    P.current = w
  }, [w]);
  let R = null != n,
    D = !R,
    M = R && null != i,
    L = null == n && null != i,
    k = (0, u.zhh)({
      opacity: +!!R,
      height: 72 * !!R,
      pointerEvents: R ? "auto" : "none",
      backgroundColor: null != (t = null == C ? true : C.baseColor) ? t : T,
      config: e => "backgroundColor" === e ? {
        easing: y,
        duration: 200
      } : E,
      delay: 100 * !!M
    }, "respect-motion-settings"),
    U = (0, u.pnh)(null == C ? true : C.id, {
      key: w,
      from: {
        opacity: 0,
        background: null == C ? true : C.splashGradient
      },
      enter: {
        opacity: 1,
        delay: M ? 100 : 50
      },
      leave: {
        opacity: 0,
        delay: M ? 100 : 150
      },
      config: {
        easing: y,
        duration: M ? 250 : 200
      }
    }, "respect-motion-settings"),
    [G] = (0, u.mX6)(2, e => ({
      from: M ? {
        translateY: 0,
        opacity: 1
      } : {
        translateY: 16,
        opacity: 0
      },
      to: null == n ? {
        translateY: 16,
        opacity: 0
      } : M ? null : {
        translateY: 0,
        opacity: 1
      },
      config: e => "opacity" === e ? {
        easing: y,
        duration: 200
      } : v,
      delay: L ? 50 - 50 * e : 200 + 50 * e
    }), "respect-motion-settings", [n]),
    F = (0, u.pnh)(null == C ? true : C.iconURL, {
      key: w,
      from: {
        opacity: 0,
        scale: 80 / 88,
        translateX: M ? false : 0
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        delay: 50
      },
      leave: {
        opacity: 0,
        scale: R ? 80 / 88 : 1,
        translateX: 24 * !!R,
        delay: 150 * !M
      },
      config: e => "opacity" === e ? {
        easing: y,
        duration: 200
      } : R ? E : O
    }, "respect-motion-settings"),
    H = (0, u.pnh)(null == C ? true : C.name, {
      key: w,
      from: {
        opacity: 0,
        scale: M ? .9 : 1,
        translateY: 16 * !M
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        translateY: 0,
        delay: 150,
        config: e => "opacity" === e ? {
          easing: y,
          duration: 200
        } : M ? E : v
      },
      leave: {
        opacity: 0,
        translateX: 24 * (null != n),
        translateY: 16 * (null == n),
        delay: L ? 100 : 50,
        config: e => "opacity" === e ? {
          easing: y,
          duration: 200
        } : M ? E : v
      }
    }, "respect-motion-settings"),
    B = b.intl.string(x ? b.t.esVyo6 : b.t.UQqFCF);
  return (0, l.jsxs)(s.animated.div, {
    className: _.TC,
    "aria-hidden": D,
    style: k,
    children: [(0, l.jsx)("div", {
      className: a()([_.ab, _.k])
    }), U(e => (0, l.jsx)(s.animated.div, {
      className: _.ab,
      style: e
    })), (0, l.jsx)("div", {
      className: _.P0,
      children: F((e, t) => (0, l.jsx)(s.animated.img, {
        className: _.w4,
        style: e,
        alt: "",
        src: t
      }, t))
    }), (0, l.jsx)("div", {
      className: _.Wi,
      children: H((e, t) => (0, l.jsxs)(s.animated.div, {
        className: _.h_,
        style: e,
        children: [(0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          className: _.cf,
          children: b.intl.string(b.t.WW5DAC)
        }), (0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: null != t ? b.intl.string(t) : ""
        })]
      }))
    }), (0, l.jsxs)("div", {
      className: _._o,
      children: [(0, l.jsx)(c.m_, {
        __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.Heading, {
            variant: "heading-sm/normal",
            color: "text-strong",
            className: _.Rg,
            children: B
          }), (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: b.intl.string(x ? b.t.Sg6cfm : b.t.ZKhtw0)
          })]
        }),
        shouldShow: R,
        ariaHidden: true,
        children: (0, l.jsx)(s.animated.div, {
          className: _._o,
          style: G[0],
          children: (0, l.jsx)(u.DUT, {
            className: a()(_.x6, {
              [_.v3]: x
            }),
            "aria-label": B,
            "aria-hidden": D,
            focusProps: {
              enabled: R
            },
            tabIndex: R ? 0 : false,
            onClick: () => S(),
            children: (0, l.jsx)(j, {
              size: "custom",
              width: 20,
              height: 20,
              color: N
            })
          })
        })
      }), (0, l.jsx)(c.m_, {
        shouldShow: R,
        text: b.intl.string(b.t.UvMx7F),
        children: (0, l.jsx)(s.animated.div, {
          className: _._o,
          style: G[1],
          children: (0, l.jsx)(u.DUT, {
            className: _.x6,
            "aria-hidden": D,
            focusProps: {
              enabled: R
            },
            tabIndex: R ? 0 : false,
            onClick: I,
            children: (0, l.jsx)(u.aXh, {
              size: "custom",
              width: 20,
              height: 20,
              color: N
            })
          })
        })
      })]
    })]
  })
}