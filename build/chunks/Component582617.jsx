/** Chunk was on 76443 **/
/** chunk id: 582617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk830917 = require("./830917.js"),
  Chunk662518 = require("./662518.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk59520 = require("./59520.js"),
  Chunk626584 = require("./626584.js"),
  Chunk424632 = require("./424632.js"),
  Chunk726785 = require("./726785.js"),
  Chunk80569 = require("./80569.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk583905 = require("./583905.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let O = new Chunk626584.A("ImageEditor"),
  E = {
    width: 288,
    height: 288
  },
  p = Chunk64700.forwardRef(function(e, t) {
    let {
      file: n,
      imageUri: i,
      onUpdate: m,
      onThrottledEdit: p
    } = e, A = r.useRef({
      x: 0,
      y: 0
    }), [N, w] = r.useState({
      x: 0,
      y: 0
    }), C = r.useRef(null), [M, T] = r.useState(1), [R, k] = r.useState(null), [D, P] = r.useState(false), [L, G] = r.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [F, U] = r.useState(0), [H, W] = r.useState({
      x: 0,
      y: 0
    }), [z, J] = r.useState(false), {
      isGIF: K,
      isWebP: B,
      isCheckingAnimation: Y,
      isEditableAnimatedImage: q
    } = (0, g._)(n), Q = (0, u.q)(n.type) && !K && !B, [V, X] = r.useState(null), $ = (0, d.I)(null != p ? p : b.tE, 500), Z = r.useRef(null), ee = r.useRef(0), et = r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
        x: A.current.x,
        y: A.current.y
      };
      if (null == C.current) return;
      let {
        x: t,
        y: n
      } = (0, h.F3)(e.x, e.y, L);
      A.current = {
        x: t,
        y: n
      }, C.current.style.transform = "translate3d(".concat(t, "px, ").concat(n, "px, 0) rotate(").concat(F, "deg) scaleX(").concat(D ? "-1" : "1", ")"), w({
        x: t,
        y: n
      })
    }, [C, F, L, D]);
    r.useEffect(() => {
      null == R || Y || G(I(R, M, q))
    }, [R, M, q, Y]);
    let en = r.useCallback(e => {
        if (null == R) return;
        let t = I(R, e, q);
        T(e), G(t), et(), null == $ || $()
      }, [R, et, q, $]),
      el = r.useCallback(() => {
        if (null == C.current || null == R) return;
        let e = (F + 90) % 360,
          t = R.height,
          n = R.width,
          l = I({
            width: t,
            height: n
          }, M, q);
        U(e), k({
          width: t,
          height: n
        }), G(l), et(), null == $ || $()
      }, [R, F, et, M, q, $]),
      er = r.useCallback(() => {
        null != C.current && (P(e => !e), et(), null == $ || $())
      }, [C, et, $]),
      ei = r.useCallback(() => {
        if (null == R) return {};
        let {
          height: e,
          width: t
        } = S(y(R, F), M);
        return {
          height: e,
          width: t,
          minHeight: e,
          minWidth: t
        }
      }, [R, F, M]),
      ea = r.useCallback(() => {
        var e;
        null == (e = Z.current) || e.moveGrabber(false)
      }, []),
      es = r.useCallback(() => {
        var e;
        null == (e = Z.current) || e.moveGrabber(.025)
      }, []),
      eu = r.useCallback(e => {
        W({
          x: e.clientX - A.current.x,
          y: e.clientY - A.current.y
        }), J(true)
      }, []);
    r.useEffect(() => {
      let e = () => J(false);
      return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
    }, []);
    let eo = r.useCallback(e => {
      let {
        x: t,
        y: n
      } = A.current;
      z && (e.clientX !== t || e.clientY !== n) && (et({
        x: t = e.clientX - H.x,
        y: n = e.clientY - H.y
      }), null == $ || $())
    }, [z, H, et, $]);
    r.useEffect(() => {
      if (z) return window.addEventListener("mousemove", eo), () => window.removeEventListener("mousemove", eo)
    }, [eo, z]);
    let ec = r.useRef(null),
      ed = r.useCallback(async () => {
        let e;
        if (null == C.current || null == R || Y) return;
        let t = Date.now(),
          l = C.current,
          r = {
            height: 128,
            width: 128
          },
          a = null;
        if (null != ec.current && (ec.current(), ec.current = null), q) try {
          let t = _({
              file: n,
              image: l,
              cropDimensions: E,
              cropOriginCoordinates: A.current,
              maxDimensions: r,
              imageRotation: F,
              resizeWidth: 128,
              resizeHeight: 128
            }, R, M),
            {
              result: i,
              cancelFn: a
            } = await (0, h.ny)(t);
          ec.current = a, e = await i
        } catch (e) {
          O.error("Error cropping animated image", e), a = f.j.ANIMATED_CROPPING
        } finally {
          var u;
          null == (u = ec.current) || u.call(ec), ec.current = null
        } else e = Q ? i : (0, s.iL)({
          image: l,
          cropDimensions: E,
          cropOriginCoordinates: A.current,
          maxDimensions: r,
          imageRotation: F
        });
        return m({
          imageData: e,
          imageDataTimestamp: t,
          error: a,
          loading: false
        }), () => {
          var e;
          null == (e = ec.current) || e.call(ec), ec.current = null
        }
      }, [n, F, q, Q, Y, m, R, M, i]);
    r.useEffect(() => {
      ed()
    }, [ed, N, F, R, z, M, V, D]);
    let em = r.useCallback(() => {
        if (null == C.current) return;
        let e = C.current.naturalWidth,
          t = C.current.naturalHeight;
        k({
          width: e,
          height: t
        }), U(0), P(false);
        let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
        T(n), X(n), ee.current += 1, G(I({
          width: e,
          height: t
        }, n, q)), et({
          x: 0,
          y: 0
        })
      }, [C, q, et]),
      eh = r.useCallback(() => {
        em()
      }, [em]);
    return r.useImperativeHandle(t, () => ({
      reset: em
    })), (0, l.jsxs)("div", {
      className: a()(x.j0, {
        [x.Id]: z
      }),
      style: {
        "--custom-image-editor-size": "".concat(288, "px")
      },
      children: [(0, l.jsxs)("div", {
        className: x.oW,
        children: [(0, l.jsx)("img", {
          onLoad: eh,
          onError: () => {
            m({
              error: f.j.IMAGE_LOAD,
              loading: false
            })
          },
          style: v({
            opacity: +(null != R),
            transform: "translate3d(".concat(A.current.x, "px, ").concat(A.current.y, "px, 0) rotate(").concat(F, "deg) scaleX(").concat(D ? "-1" : "1", ")")
          }, ei()),
          className: x.Sl,
          src: i,
          crossOrigin: "anonymous",
          alt: j.intl.string(j.t.EYR1Fa),
          ref: C,
          onMouseDown: eu,
          draggable: false
        }), !Q && !Y && (0, l.jsx)("div", {
          className: x.Lw,
          style: {
            opacity: +(null != R),
            width: E.width,
            height: E.height
          },
          children: (0, l.jsx)(c.Text, {
            className: x.TB,
            variant: "text-xs/normal",
            color: "text-strong",
            children: j.intl.string(j.t.oBPhdN)
          })
        })]
      }), Q ? (0, l.jsx)("div", {
        className: x.Nf,
        children: (0, l.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: j.intl.string(j.t.AjdEvM)
        })
      }) : (0, l.jsxs)("div", {
        className: x.KE,
        children: [(0, l.jsxs)("div", {
          className: x.R5,
          children: [(0, l.jsx)(o.m, {
            text: j.intl.string(j.t.FEIIO9),
            "aria-label": j.intl.string(j.t.FEIIO9),
            children: (0, l.jsx)("div", {
              className: x.Q$,
              children: (0, l.jsx)(c.K0, {
                size: "sm",
                variant: "icon-only",
                icon: c.H_z,
                onClick: el,
                "aria-label": j.intl.string(j.t.FEIIO9)
              })
            })
          }), (0, l.jsx)(o.m, {
            text: j.intl.string(j.t["4LRS2p"]),
            "aria-label": j.intl.string(j.t["4LRS2p"]),
            children: (0, l.jsx)("div", {
              className: x.Q$,
              children: (0, l.jsx)(c.K0, {
                size: "sm",
                variant: "icon-only",
                icon: c.vOF,
                onClick: er,
                "aria-label": j.intl.string(j.t["4LRS2p"])
              })
            })
          })]
        }), (0, l.jsxs)("div", {
          className: a()(x.mu, x.R5),
          children: [(0, l.jsx)(o.m, {
            text: j.intl.string(j.t.QlArhK),
            "aria-label": j.intl.string(j.t.QlArhK),
            children: (0, l.jsx)("div", {
              className: x.Q$,
              children: (0, l.jsx)(c.K0, {
                size: "sm",
                variant: "icon-only",
                icon: c.V0_,
                onClick: ea,
                "aria-label": j.intl.string(j.t.QlArhK)
              })
            })
          }), null != V && (0, l.jsx)(c.Apm, {
            ref: Z,
            className: x.aw,
            initialValue: V,
            minValue: 1,
            maxValue: 4,
            keyboardStep: .025,
            asValueChanges: en,
            equidistant: true,
            hideBubble: true,
            "aria-label": j.intl.string(j.t["2hPcVJ"])
          }, ee.current), (0, l.jsx)(o.m, {
            text: j.intl.string(j.t.Ch32tT),
            "aria-label": j.intl.string(j.t.Ch32tT),
            children: (0, l.jsx)("div", {
              className: x.Q$,
              children: (0, l.jsx)(c.K0, {
                size: "sm",
                variant: "icon-only",
                icon: c.r1u,
                onClick: es,
                "aria-label": j.intl.string(j.t.Ch32tT)
              })
            })
          })]
        })]
      })]
    })
  }),
  y = (e, t) => {
    let {
      width: n,
      height: l
    } = e;
    return t % 180 != 0 ? {
      width: l,
      height: n
    } : {
      width: n,
      height: l
    }
  },
  S = (e, t) => {
    let {
      width: n,
      height: l
    } = e, r = 288 * t, i = n / l;
    return n > l ? l = (n = r) / i : n = (l = r) * i, {
      width: n,
      height: l
    }
  };

function I(e, t, n) {
  let {
    width: l,
    height: r
  } = S(e, t), i = Math.abs(288 - l) / 2, a = Math.abs(288 - r) / 2;
  return n && (l < 288 || r < 288) ? {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  } : {
    top: a,
    bottom: -a,
    left: -i,
    right: i
  }
}
let _ = (e, t, n) => {
  var l, r;
  let {
    height: i,
    width: a
  } = S(t, n), s = (i = Math.min(i, 288)) / (a = Math.min(a, 288)), u = {
    height: i,
    width: a
  }, o = Math.floor(s < 1 ? 128 * s : 128 / s);
  return l = v({}, e), r = r = {
    cropDimensions: u,
    resizeHeight: s < 1 ? o : 128,
    resizeWidth: s > 1 ? o : 128
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
  }), l
}