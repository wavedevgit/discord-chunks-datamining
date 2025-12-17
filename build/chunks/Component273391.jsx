/** Chunk was on 2262 **/
/** chunk id: 273391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk36793 = require("./36793.js"),
  Chunk33309 = require("./33309.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk638730 = require("./638730.js"),
  Chunk710845 = require("./710845.js"),
  Chunk197712 = require("./197712.js"),
  Chunk981713 = require("./981713.js"),
  Chunk598117 = require("./598117.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk595756 = require("./595756.js");

function j(e) {
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
let p = new Chunk710845.Z("ImageEditor"),
  E = {
    width: 288,
    height: 288
  },
  O = Chunk473749.forwardRef(function(e, t) {
    let {
      file: n,
      imageUri: r,
      onUpdate: m,
      onThrottledEdit: O
    } = e, C = i.useRef({
      x: 0,
      y: 0
    }), [_, w] = i.useState({
      x: 0,
      y: 0
    }), M = i.useRef(null), [T, P] = i.useState(1), [k, A] = i.useState(null), [R, Z] = i.useState(false), [D, z] = i.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [G, L] = i.useState(0), [U, B] = i.useState({
      x: 0,
      y: 0
    }), [J, H] = i.useState(false), {
      isGIF: F,
      isWebP: W,
      isCheckingAnimation: Y,
      isEditableAnimatedImage: q
    } = (0, h.T)(n), V = (0, s.v)(n.type) && !F && !W, [K, X] = i.useState(null), Q = (0, d.h)(null != O ? O : f.dG, 500), $ = i.useRef(null), ee = i.useRef(0), et = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
        x: C.current.x,
        y: C.current.y
      };
      if (null == M.current) return;
      let {
        x: t,
        y: n
      } = (0, b.U$)(e.x, e.y, D);
      C.current = {
        x: t,
        y: n
      }, M.current.style.transform = "translate3d(".concat(t, "px, ").concat(n, "px, 0) rotate(").concat(G, "deg) scaleX(").concat(R ? "-1" : "1", ")"), w({
        x: t,
        y: n
      })
    }, [M, G, D, R]);
    i.useEffect(() => {
      null == k || Y || z(S(k, T, q))
    }, [k, T, q, Y]);
    let en = i.useCallback(e => {
        if (null == k) return;
        let t = S(k, e, q);
        P(e), z(t), et(), null == Q || Q()
      }, [k, et, q, Q]),
      el = i.useCallback(() => {
        if (null == M.current || null == k) return;
        let e = (G + 90) % 360,
          t = k.height,
          n = k.width,
          l = S({
            width: t,
            height: n
          }, T, q);
        L(e), A({
          width: t,
          height: n
        }), z(l), et(), null == Q || Q()
      }, [k, G, et, T, q, Q]),
      ei = i.useCallback(() => {
        null != M.current && (Z(e => !e), et(), null == Q || Q())
      }, [M, et, Q]),
      er = i.useCallback(() => {
        if (null == k) return {};
        let {
          height: e,
          width: t
        } = I(y(k, G), T);
        return {
          height: e,
          width: t,
          minHeight: e,
          minWidth: t
        }
      }, [k, G, T]),
      ea = i.useCallback(() => {
        var e;
        null == (e = $.current) || e.moveGrabber(false)
      }, []),
      eo = i.useCallback(() => {
        var e;
        null == (e = $.current) || e.moveGrabber(.025)
      }, []),
      es = i.useCallback(e => {
        B({
          x: e.clientX - C.current.x,
          y: e.clientY - C.current.y
        }), H(true)
      }, []);
    i.useEffect(() => {
      let e = () => H(false);
      return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
    }, []);
    let eu = i.useCallback(e => {
      let {
        x: t,
        y: n
      } = C.current;
      J && (e.clientX !== t || e.clientY !== n) && (et({
        x: t = e.clientX - U.x,
        y: n = e.clientY - U.y
      }), null == Q || Q())
    }, [J, U, et, Q]);
    i.useEffect(() => {
      if (J) return window.addEventListener("mousemove", eu), () => window.removeEventListener("mousemove", eu)
    }, [eu, J]);
    let ec = i.useRef(null),
      ed = i.useCallback(async () => {
        let e;
        if (null == M.current || null == k || Y) return;
        let t = Date.now(),
          l = M.current,
          i = {
            height: g.eT,
            width: g.eT
          },
          a = null;
        if (null != ec.current && (ec.current(), ec.current = null), q) try {
          let t = N({
              file: n,
              image: l,
              cropDimensions: E,
              cropOriginCoordinates: C.current,
              maxDimensions: i,
              imageRotation: G,
              resizeWidth: g.eT,
              resizeHeight: g.eT
            }, k, T),
            {
              result: r,
              cancelFn: a
            } = await (0, b.GU)(t);
          ec.current = a, e = await r
        } catch (e) {
          p.error("Error cropping animated image", e), a = g.ze.ANIMATED_CROPPING
        } finally {
          var s;
          null == (s = ec.current) || s.call(ec), ec.current = null
        } else e = V ? r : (0, o.PT)({
          image: l,
          cropDimensions: E,
          cropOriginCoordinates: C.current,
          maxDimensions: i,
          imageRotation: G
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
      }, [n, G, q, V, Y, m, k, T, r]);
    i.useEffect(() => {
      ed()
    }, [ed, _, G, k, J, T, K, R]);
    let em = i.useCallback(() => {
        if (null == M.current) return;
        let e = M.current.naturalWidth,
          t = M.current.naturalHeight;
        A({
          width: e,
          height: t
        }), L(0), Z(false);
        let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
        P(n), X(n), ee.current += 1, z(S({
          width: e,
          height: t
        }, n, q)), et({
          x: 0,
          y: 0
        })
      }, [M, q, et]),
      eb = i.useCallback(() => {
        em()
      }, [em]);
    return i.useImperativeHandle(t, () => ({
      reset: em
    })), (0, l.jsxs)("div", {
      className: a()(x.imageEditor, {
        [x.isDragging]: J
      }),
      style: {
        "--custom-image-editor-size": "".concat(288, "px")
      },
      children: [(0, l.jsxs)("div", {
        className: x.editingContainer,
        children: [(0, l.jsx)("img", {
          onLoad: eb,
          onError: () => {
            m({
              error: g.ze.IMAGE_LOAD,
              loading: false
            })
          },
          style: j({
            opacity: +(null != k),
            transform: "translate3d(".concat(C.current.x, "px, ").concat(C.current.y, "px, 0) rotate(").concat(G, "deg) scaleX(").concat(R ? "-1" : "1", ")")
          }, er()),
          className: x.image,
          src: r,
          crossOrigin: "anonymous",
          alt: v.intl.string(v.t.EYR1Fa),
          ref: M,
          onMouseDown: es,
          draggable: false
        }), !V && !Y && (0, l.jsx)("div", {
          className: x.overlay,
          style: {
            opacity: +(null != k),
            width: E.width,
            height: E.height
          },
          children: (0, l.jsx)(c.Text, {
            className: x.panHint,
            variant: "text-xs/normal",
            color: "text-strong",
            children: v.intl.string(v.t.oBPhdN)
          })
        })]
      }), V ? (0, l.jsx)("div", {
        className: x.animatedInfoContainer,
        children: (0, l.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: v.intl.string(v.t.AjdEvM)
        })
      }) : (0, l.jsxs)("div", {
        className: x.toolbar,
        children: [(0, l.jsxs)("div", {
          className: x.toolbarGroup,
          children: [(0, l.jsx)(u.u, {
            text: v.intl.string(v.t.FEIIO9),
            "aria-label": v.intl.string(v.t.FEIIO9),
            children: (0, l.jsx)("div", {
              className: x.toolbarButton,
              children: (0, l.jsx)(c.hU, {
                size: "sm",
                variant: "icon-only",
                icon: c.Vk2,
                onClick: el,
                "aria-label": v.intl.string(v.t.FEIIO9)
              })
            })
          }), (0, l.jsx)(u.u, {
            text: v.intl.string(v.t["4LRS2p"]),
            "aria-label": v.intl.string(v.t["4LRS2p"]),
            children: (0, l.jsx)("div", {
              className: x.toolbarButton,
              children: (0, l.jsx)(c.hU, {
                size: "sm",
                variant: "icon-only",
                icon: c.xby,
                onClick: ei,
                "aria-label": v.intl.string(v.t["4LRS2p"])
              })
            })
          })]
        }), (0, l.jsxs)("div", {
          className: a()(x.zoomControls, x.toolbarGroup),
          children: [(0, l.jsx)(u.u, {
            text: v.intl.string(v.t.QlArhK),
            "aria-label": v.intl.string(v.t.QlArhK),
            children: (0, l.jsx)("div", {
              className: x.toolbarButton,
              children: (0, l.jsx)(c.hU, {
                size: "sm",
                variant: "icon-only",
                icon: c.BlJ,
                onClick: ea,
                "aria-label": v.intl.string(v.t.QlArhK)
              })
            })
          }), null != K && (0, l.jsx)(c.iRW, {
            ref: $,
            className: x.slider,
            initialValue: K,
            minValue: 1,
            maxValue: 4,
            keyboardStep: .025,
            asValueChanges: en,
            equidistant: true,
            hideBubble: true,
            "aria-label": v.intl.string(v.t["2hPcVJ"])
          }, ee.current), (0, l.jsx)(u.u, {
            text: v.intl.string(v.t.Ch32tT),
            "aria-label": v.intl.string(v.t.Ch32tT),
            children: (0, l.jsx)("div", {
              className: x.toolbarButton,
              children: (0, l.jsx)(c.hU, {
                size: "sm",
                variant: "icon-only",
                icon: c.OyE,
                onClick: eo,
                "aria-label": v.intl.string(v.t.Ch32tT)
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
  I = (e, t) => {
    let {
      width: n,
      height: l
    } = e, i = 288 * t, r = n / l;
    return n > l ? l = (n = i) / r : n = (l = i) * r, {
      width: n,
      height: l
    }
  };

function S(e, t, n) {
  let {
    width: l,
    height: i
  } = I(e, t), r = Math.abs(288 - l) / 2, a = Math.abs(288 - i) / 2;
  return n && (l < 288 || i < 288) ? {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  } : {
    top: a,
    bottom: -a,
    left: -r,
    right: r
  }
}
let N = (e, t, n) => {
  var l, i;
  let {
    height: r,
    width: a
  } = I(t, n), o = (r = Math.min(r, 288)) / (a = Math.min(a, 288)), s = {
    height: r,
    width: a
  }, u = Math.floor(o < 1 ? g.eT * o : g.eT / o), c = o < 1 ? u : g.eT, d = o > 1 ? u : g.eT;
  return l = j({}, e), i = i = {
    cropDimensions: s,
    resizeHeight: c,
    resizeWidth: d
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
  }), l
}