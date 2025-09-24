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
      onUpdate: i,
      onThrottledEdit: h
    } = e, y = l.useRef({
      x: 0,
      y: 0
    }), [C, I] = l.useState({
      x: 0,
      y: 0
    }), S = l.useRef(null), [T, A] = l.useState(1), [M, P] = l.useState(null), [R, k] = l.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [Z, L] = l.useState(0), [z, G] = l.useState({
      x: 0,
      y: 0
    }), [U, F] = l.useState(false), W = "image/gif" === t.type, H = (0, o.v)(t.type), B = H && !W, [V, J] = l.useState(null), Y = (0, d.h)(null != h ? h : f.dG, 500);
    l.useEffect(() => {
      (0, g.Z)()
    }, []);
    let K = l.useCallback(e => {
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
      X = l.useCallback(e => {
        if (null == M) return;
        let t = w(M, e, H),
          {
            x: n,
            y: r
          } = y.current;
        A(e), k(t), K({
          x: n,
          y: r
        }), null == Y || Y()
      }, [M, K, H, Y]),
      q = l.useCallback(() => {
        if (null == S.current || null == M) return;
        let e = (Z + 90) % 360,
          t = -y.current.x,
          n = y.current.y,
          r = M.height,
          l = M.width,
          i = w({
            width: r,
            height: l
          }, T, H);
        K({
          x: n,
          y: t
        }), L(e), P({
          width: r,
          height: l
        }), k(i), null == Y || Y()
      }, [M, Z, K, T, H, Y]),
      $ = l.useCallback(() => {
        if (null == M) return {};
        let {
          height: e,
          width: t
        } = N(E(M, Z), T);
        return {
          height: e,
          width: t,
          minHeight: e,
          minWidth: t
        }
      }, [M, Z, T]),
      Q = l.useCallback(e => {
        G({
          x: e.clientX - y.current.x,
          y: e.clientY - y.current.y
        }), F(true)
      }, []);
    l.useEffect(() => {
      let e = () => F(false);
      return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
    }, []);
    let ee = l.useCallback(e => {
      let {
        x: t,
        y: n
      } = y.current;
      U && (e.clientX !== t || e.clientY !== n) && (K({
        x: t = e.clientX - z.x,
        y: n = e.clientY - z.y
      }), null == Y || Y())
    }, [U, z, K, Y]);
    l.useEffect(() => {
      if (U) return window.addEventListener("mousemove", ee), () => window.removeEventListener("mousemove", ee)
    }, [ee, U]);
    let et = l.useRef(null),
      en = l.useCallback(async () => {
        let e;
        if (null == S.current || null == M) return;
        let r = Date.now(),
          l = S.current,
          a = {
            height: p.eT,
            width: p.eT
          },
          o = null;
        if (null != et.current && (et.current(), et.current = null), W) try {
          let n = D({
              file: t,
              image: l,
              cropDimensions: _,
              cropOriginCoordinates: y.current,
              maxDimensions: a,
              imageRotation: Z,
              resizeWidth: p.eT,
              resizeHeight: p.eT
            }, M, T),
            {
              result: r,
              cancelFn: i
            } = await (0, m.$p)(n);
          et.current = i, e = await r
        } catch (e) {
          O.error("Error cropping GIF", e), o = p.ze.GIF_CROPPING
        } finally {
          var u;
          null == (u = et.current) || u.call(et), et.current = null
        } else e = B ? n : (0, s.PT)({
          image: l,
          cropDimensions: _,
          cropOriginCoordinates: y.current,
          maxDimensions: a,
          imageRotation: Z
        });
        return i({
          imageData: e,
          imageDataTimestamp: r,
          error: o,
          loading: false
        }), () => {
          var e;
          null == (e = et.current) || e.call(et), et.current = null
        }
      }, [t, Z, W, B, i, M, T, n]);
    l.useEffect(() => {
      en()
    }, [en, C, Z, M, U, T, V]);
    let er = l.useCallback(() => {
      if (null == S.current) return;
      let e = S.current.naturalWidth,
        t = S.current.naturalHeight;
      P({
        width: e,
        height: t
      });
      let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
      J(n), A(n), k(w({
        width: e,
        height: t
      }, n, H))
    }, [H]);
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
            i({
              error: p.ze.IMAGE_LOAD,
              loading: false
            })
          },
          style: b({
            opacity: +(null != M),
            transform: "translate3d(".concat(y.current.x, "px, ").concat(y.current.y, "px, 0) rotate(").concat(Z, "deg)")
          }, $()),
          className: x.image,
          src: n,
          crossOrigin: "anonymous",
          alt: v.intl.string(v.t.EYR1FR),
          ref: S,
          onMouseDown: Q,
          draggable: false
        }), !B && (0, r.jsx)("div", {
          className: x.overlay,
          style: {
            opacity: +(null != M),
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
      }), B ? (0, r.jsx)("div", {
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
              var n, r, l = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
                return l
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
              }
              return l
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
    } = e, l = 240 * t, i = n / r;
    return n > r ? r = (n = l) / i : n = (r = l) * i, {
      width: n,
      height: r
    }
  };

function w(e, t, n) {
  let {
    width: r,
    height: l
  } = N(e, t), i = Math.abs(240 - r) / 2, a = Math.abs(240 - l) / 2;
  return n && (r < 240 || l < 240) ? {
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
let D = (e, t, n) => {
  let {
    height: r,
    width: l
  } = N(t, n), i = (r = Math.min(r, 240)) / (l = Math.min(l, 240)), a = {
    height: r,
    width: l
  }, s = Math.floor(i < 1 ? p.eT * i : p.eT / i), o = i < 1 ? s : p.eT, u = i > 1 ? s : p.eT;
  return j(b({}, e), {
    cropDimensions: a,
    resizeHeight: o,
    resizeWidth: u
  })
}