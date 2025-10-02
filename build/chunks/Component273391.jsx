/** Chunk was on 2262 **/
/** chunk id: 273391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk36793 = require("./36793.js"),
  Chunk33309 = require("./33309.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk638730 = require("./638730.js"),
  Chunk710845 = require("./710845.js"),
  Chunk197712 = require("./197712.js"),
  Chunk511004 = require("./511004.js"),
  Chunk598117 = require("./598117.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk645765 = require("./645765.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = new Chunk710845.Z("ImageEditor"),
  _ = {
    width: 240,
    height: 240
  },
  y = e => {
    let {
      file: t,
      imageUri: n,
      onUpdate: l,
      onThrottledEdit: h
    } = e, y = i.useRef({
      x: 0,
      y: 0
    }), [C, I] = i.useState({
      x: 0,
      y: 0
    }), S = i.useRef(null), [T, P] = i.useState(1), [A, M] = i.useState(null), [R, k] = i.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [Z, L] = i.useState(0), [z, G] = i.useState({
      x: 0,
      y: 0
    }), [U, F] = i.useState(false), W = "image/gif" === t.type, B = (0, o.v)(t.type), H = B && !W, [V, J] = i.useState(null), Y = (0, d.h)(null != h ? h : f.dG, 500);
    i.useEffect(() => {
      (0, g.Z)()
    }, []);
    let K = i.useCallback(e => {
        if (null == S.current) return;
        let {
          x: t,
          y: n
        } = (0, m.U$)(e.x, e.y, R);
        y.current = {
          x: t,
          y: n
        }, S.current.style.transform = "translate3d(".concat(t, "px, ").concat(n, "px, 0) rotate(").concat(Z, "deg)"), I({
          x: t,
          y: n
        })
      }, [S, Z, R]),
      X = i.useCallback(e => {
        if (null == A) return;
        let t = w(A, e, B),
          {
            x: n,
            y: r
          } = y.current;
        P(e), k(t), K({
          x: n,
          y: r
        }), null == Y || Y()
      }, [A, K, B, Y]),
      q = i.useCallback(() => {
        if (null == S.current || null == A) return;
        let e = (Z + 90) % 360,
          t = -y.current.x,
          n = y.current.y,
          r = A.height,
          i = A.width,
          l = w({
            width: r,
            height: i
          }, T, B);
        K({
          x: n,
          y: t
        }), L(e), M({
          width: r,
          height: i
        }), k(l), null == Y || Y()
      }, [A, Z, K, T, B, Y]),
      $ = i.useCallback(() => {
        if (null == A) return {};
        let {
          height: e,
          width: t
        } = N(E(A, Z), T);
        return {
          height: e,
          width: t,
          minHeight: e,
          minWidth: t
        }
      }, [A, Z, T]),
      Q = i.useCallback(e => {
        G({
          x: e.clientX - y.current.x,
          y: e.clientY - y.current.y
        }), F(true)
      }, []);
    i.useEffect(() => {
      let e = () => F(false);
      return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
    }, []);
    let ee = i.useCallback(e => {
      let {
        x: t,
        y: n
      } = y.current;
      U && (e.clientX !== t || e.clientY !== n) && (K({
        x: t = e.clientX - z.x,
        y: n = e.clientY - z.y
      }), null == Y || Y())
    }, [U, z, K, Y]);
    i.useEffect(() => {
      if (U) return window.addEventListener("mousemove", ee), () => window.removeEventListener("mousemove", ee)
    }, [ee, U]);
    let et = i.useRef(null),
      en = i.useCallback(async () => {
        let e;
        if (null == S.current || null == A) return;
        let r = Date.now(),
          i = S.current,
          a = {
            height: p.eT,
            width: p.eT
          },
          o = null;
        if (null != et.current && (et.current(), et.current = null), W) try {
          let n = D({
              file: t,
              image: i,
              cropDimensions: _,
              cropOriginCoordinates: y.current,
              maxDimensions: a,
              imageRotation: Z,
              resizeWidth: p.eT,
              resizeHeight: p.eT
            }, A, T),
            {
              result: r,
              cancelFn: l
            } = await (0, m.$p)(n);
          et.current = l, e = await r
        } catch (e) {
          O.error("Error cropping GIF", e), o = p.ze.GIF_CROPPING
        } finally {
          var u;
          null == (u = et.current) || u.call(et), et.current = null
        } else e = H ? n : (0, s.PT)({
          image: i,
          cropDimensions: _,
          cropOriginCoordinates: y.current,
          maxDimensions: a,
          imageRotation: Z
        });
        return l({
          imageData: e,
          imageDataTimestamp: r,
          error: o,
          loading: false
        }), () => {
          var e;
          null == (e = et.current) || e.call(et), et.current = null
        }
      }, [t, Z, W, H, l, A, T, n]);
    i.useEffect(() => {
      en()
    }, [en, C, Z, A, U, T, V]);
    let er = i.useCallback(() => {
      if (null == S.current) return;
      let e = S.current.naturalWidth,
        t = S.current.naturalHeight;
      M({
        width: e,
        height: t
      });
      let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
      J(n), P(n), k(w({
        width: e,
        height: t
      }, n, B))
    }, [B]);
    return (0, r.jsxs)("div", {
      className: a()(x.imageEditor, {
        [x.isDragging]: U
      }),
      style: {
        "--custom-image-editor-size": "".concat(240, "px")
      },
      children: [(0, r.jsxs)("div", {
        className: x.editingContainer,
        children: [(0, r.jsx)("img", {
          onLoad: er,
          onError: () => {
            l({
              error: p.ze.IMAGE_LOAD,
              loading: false
            })
          },
          style: b({
            opacity: +(null != A),
            transform: "translate3d(".concat(y.current.x, "px, ").concat(y.current.y, "px, 0) rotate(").concat(Z, "deg)")
          }, $()),
          className: x.image,
          src: n,
          crossOrigin: "anonymous",
          alt: v.intl.string(v.t.EYR1FR),
          ref: S,
          onMouseDown: Q,
          draggable: false
        }), !H && (0, r.jsx)("div", {
          className: x.overlay,
          style: {
            opacity: +(null != A),
            width: _.width,
            height: _.height
          },
          children: (0, r.jsx)(c.Text, {
            className: x.panHint,
            variant: "text-xs/normal",
            color: "text-primary",
            children: v.intl.string(v.t.oBPhdH)
          })
        })]
      }), H ? (0, r.jsx)("div", {
        className: x.animatedInfoContainer,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: v.intl.string(v.t["5XCxio"])
        })
      }) : (0, r.jsxs)("div", {
        className: x.toolsContainer,
        children: [(0, r.jsx)(c.ua7, {
          text: v.intl.string(v.t["oCs/+P"]),
          "aria-label": v.intl.string(v.t["oCs/+P"]),
          children: e => {
            var {
              onClick: t
            } = e, n = function(e, t) {
              if (null == e) return {};
              var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  l = Object.keys(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
              }
              return i
            }(e, ["onClick"]);
            return (0, r.jsx)(u.zx, j(b({
              className: x.toolButton,
              look: u.zx.Looks.BLANK,
              size: u.Ph.NONE,
              color: u.zx.Colors.TRANSPARENT,
              grow: false
            }, n), {
              onClick: q,
              children: (0, r.jsx)(c.Vk2, {
                size: "sm",
                color: "currentColor"
              })
            }))
          }
        }), (0, r.jsxs)("div", {
          className: x.zoomControls,
          children: [(0, r.jsx)(c.BlJ, {
            color: c.TVs.colors.ICON_SECONDARY,
            size: "sm"
          }), null != V && (0, r.jsx)(c.iRW, {
            className: x.slider,
            initialValue: V,
            minValue: 1,
            maxValue: 4,
            keyboardStep: .025,
            asValueChanges: X,
            equidistant: true,
            hideBubble: true,
            "aria-label": v.intl.string(v.t["2hPcVF"])
          }), (0, r.jsx)(c.OyE, {
            color: c.TVs.colors.ICON_SECONDARY,
            size: "sm"
          })]
        })]
      })]
    })
  },
  E = (e, t) => {
    let {
      width: n,
      height: r
    } = e;
    return t % 180 != 0 ? {
      width: r,
      height: n
    } : {
      width: n,
      height: r
    }
  },
  N = (e, t) => {
    let {
      width: n,
      height: r
    } = e, i = 240 * t, l = n / r;
    return n > r ? r = (n = i) / l : n = (r = i) * l, {
      width: n,
      height: r
    }
  };

function w(e, t, n) {
  let {
    width: r,
    height: i
  } = N(e, t), l = Math.abs(240 - r) / 2, a = Math.abs(240 - i) / 2;
  return n && (r < 240 || i < 240) ? {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  } : {
    top: a,
    bottom: -a,
    left: -l,
    right: l
  }
}
let D = (e, t, n) => {
  let {
    height: r,
    width: i
  } = N(t, n), l = (r = Math.min(r, 240)) / (i = Math.min(i, 240)), a = {
    height: r,
    width: i
  }, s = Math.floor(l < 1 ? p.eT * l : p.eT / l), o = l < 1 ? s : p.eT, u = l > 1 ? s : p.eT;
  return j(b({}, e), {
    cropDimensions: a,
    resizeHeight: o,
    resizeWidth: u
  })
}