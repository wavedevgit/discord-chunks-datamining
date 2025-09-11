/** Chunk was on 2262 **/
/** chunk id: 273391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => O
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
  Chunk862006 = require("./862006.js");

function v(e) {
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
let y = new Chunk710845.Z("ImageEditor"),
  _ = {
    width: 240,
    height: 240
  },
  O = e => {
    let {
      file: t,
      imageUri: n,
      onUpdate: i,
      onThrottledEdit: m
    } = e, O = l.useRef({
      x: 0,
      y: 0
    }), [I, S] = l.useState({
      x: 0,
      y: 0
    }), P = l.useRef(null), [T, A] = l.useState(1), [M, R] = l.useState(null), [D, k] = l.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [z, G] = l.useState(0), [Z, L] = l.useState({
      x: 0,
      y: 0
    }), [U, H] = l.useState(false), F = "image/gif" === t.type, B = (0, s.v)(t.type), V = B && !F, [W, Y] = l.useState(null), J = (0, d.h)(null != m ? m : x.dG, 500);
    l.useEffect(() => {
      (0, g.Z)()
    }, []);
    let K = l.useCallback(e => {
        if (null == P.current) return;
        let {
          x: t,
          y: n
        } = (0, h.U$)(e.x, e.y, D);
        O.current = {
          x: t,
          y: n
        }, P.current.style.transform = "translate3d(".concat(t, "px, ").concat(n, "px, 0) rotate(").concat(z, "deg)"), S({
          x: t,
          y: n
        })
      }, [P, z, D]),
      X = l.useCallback(e => {
        if (null == M) return;
        let t = C(M, e, B),
          {
            x: n,
            y: r
          } = O.current;
        A(e), k(t), K({
          x: n,
          y: r
        }), null == J || J()
      }, [M, K, B, J]),
      q = l.useCallback(() => {
        if (null == P.current || null == M) return;
        let e = (z + 90) % 360,
          t = -O.current.x,
          n = O.current.y,
          r = M.height,
          l = M.width,
          i = C({
            width: r,
            height: l
          }, T, B);
        K({
          x: n,
          y: t
        }), G(e), R({
          width: r,
          height: l
        }), k(i), null == J || J()
      }, [M, z, K, T, B, J]),
      Q = l.useCallback(() => {
        if (null == M) return {};
        let {
          height: e,
          width: t
        } = N(E(M, z), T);
        return {
          height: e,
          width: t,
          minHeight: e,
          minWidth: t
        }
      }, [M, z, T]),
      $ = l.useCallback(e => {
        L({
          x: e.clientX - O.current.x,
          y: e.clientY - O.current.y
        }), H(true)
      }, []);
    l.useEffect(() => {
      let e = () => H(false);
      return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
    }, []);
    let ee = l.useCallback(e => {
      let {
        x: t,
        y: n
      } = O.current;
      U && (e.clientX !== t || e.clientY !== n) && (K({
        x: t = e.clientX - Z.x,
        y: n = e.clientY - Z.y
      }), null == J || J())
    }, [U, Z, K, J]);
    l.useEffect(() => {
      if (U) return window.addEventListener("mousemove", ee), () => window.removeEventListener("mousemove", ee)
    }, [ee, U]);
    let et = l.useRef(null),
      en = l.useCallback(async () => {
        let e;
        if (null == P.current || null == M) return;
        let r = Date.now(),
          l = P.current,
          a = {
            height: f.eT,
            width: f.eT
          },
          s = null;
        if (null != et.current && (et.current(), et.current = null), F) try {
          let n = w({
              file: t,
              image: l,
              cropDimensions: _,
              cropOriginCoordinates: O.current,
              maxDimensions: a,
              imageRotation: z,
              resizeWidth: f.eT,
              resizeHeight: f.eT
            }, M, T),
            {
              result: r,
              cancelFn: i
            } = await (0, h.$p)(n);
          et.current = i, e = await r
        } catch (e) {
          y.error("Error cropping GIF", e), s = f.ze.GIF_CROPPING
        } finally {
          var u;
          null == (u = et.current) || u.call(et), et.current = null
        } else e = V ? n : (0, o.PT)({
          image: l,
          cropDimensions: _,
          cropOriginCoordinates: O.current,
          maxDimensions: a,
          imageRotation: z
        });
        return i({
          imageData: e,
          imageDataTimestamp: r,
          error: s,
          loading: false
        }), () => {
          var e;
          null == (e = et.current) || e.call(et), et.current = null
        }
      }, [t, z, F, V, i, M, T, n]);
    l.useEffect(() => {
      en()
    }, [en, I, z, M, U, T, W]);
    let er = l.useCallback(() => {
      if (null == P.current) return;
      let e = P.current.naturalWidth,
        t = P.current.naturalHeight;
      R({
        width: e,
        height: t
      });
      let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
      Y(n), A(n), k(C({
        width: e,
        height: t
      }, n, B))
    }, [B]);
    return (0, r.jsxs)("div", {
      className: a()(b.imageEditor, {
        [b.isDragging]: U
      }),
      style: {
        "--custom-image-editor-size": "".concat(240, "px")
      },
      children: [(0, r.jsxs)("div", {
        className: b.editingContainer,
        children: [(0, r.jsx)("img", {
          onLoad: er,
          onError: () => {
            i({
              error: f.ze.IMAGE_LOAD,
              loading: false
            })
          },
          style: v({
            opacity: +(null != M),
            transform: "translate3d(".concat(O.current.x, "px, ").concat(O.current.y, "px, 0) rotate(").concat(z, "deg)")
          }, Q()),
          className: b.image,
          src: n,
          crossOrigin: "anonymous",
          alt: p.intl.string(p.t.EYR1FR),
          ref: P,
          onMouseDown: $,
          draggable: false
        }), !V && (0, r.jsx)("div", {
          className: b.overlay,
          style: {
            opacity: +(null != M),
            width: _.width,
            height: _.height
          },
          children: (0, r.jsx)(c.Text, {
            className: b.panHint,
            variant: "text-xs/normal",
            color: "text-primary",
            children: p.intl.string(p.t.oBPhdH)
          })
        })]
      }), V ? (0, r.jsx)("div", {
        className: b.animatedInfoContainer,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: p.intl.string(p.t["5XCxio"])
        })
      }) : (0, r.jsxs)("div", {
        className: b.toolsContainer,
        children: [(0, r.jsx)(c.ua7, {
          text: p.intl.string(p.t["oCs/+P"]),
          "aria-label": p.intl.string(p.t["oCs/+P"]),
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
            return (0, r.jsx)(u.zx, j(v({
              className: b.toolButton,
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
          className: b.zoomControls,
          children: [(0, r.jsx)(c.BlJ, {
            color: c.TVs.colors.ICON_SECONDARY,
            size: "sm"
          }), null != W && (0, r.jsx)(c.iRW, {
            className: b.slider,
            initialValue: W,
            minValue: 1,
            maxValue: 4,
            keyboardStep: .025,
            asValueChanges: X,
            equidistant: true,
            hideBubble: true,
            "aria-label": p.intl.string(p.t["2hPcVF"])
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

function C(e, t, n) {
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
let w = (e, t, n) => {
  let {
    height: r,
    width: l
  } = N(t, n), i = (r = Math.min(r, 240)) / (l = Math.min(l, 240)), a = {
    height: r,
    width: l
  }, o = Math.floor(i < 1 ? f.eT * i : f.eT / i), s = i < 1 ? o : f.eT, u = i > 1 ? o : f.eT;
  return j(v({}, e), {
    cropDimensions: a,
    resizeHeight: s,
    resizeWidth: u
  })
}