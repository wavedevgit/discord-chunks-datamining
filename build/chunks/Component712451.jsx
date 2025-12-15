/** Chunk was on 59732 **/
/** chunk id: 712451, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk36793 = require("./36793.js"),
  Chunk793030 = require("./793030.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk488499 = require("./488499.jsx"),
  Chunk222062 = require("./222062.js"),
  Chunk530329 = require("./530329.jsx"),
  Chunk72703 = require("./72703.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk197712 = require("./197712.js"),
  Chunk76674 = require("./76674.js"),
  Chunk586818 = require("./586818.js"),
  Chunk486324 = require("./486324.js"),
  Chunk981631 = require("./981631.js"),
  Chunk678916 = require("./678916.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201313 = require("./201313.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let M = {
  x: 0,
  y: 0
};

function G(e) {
  switch (e) {
    case b.pC.BANNER:
      return {
        height: b.f, width: b.L0
      };
    case b.pC.VIDEO_BACKGROUND:
      return R.HE;
    case b.pC.AVATAR:
    case b.pC.AVATAR_DECORATION:
    case b.pC.GUILD_ICON:
      return {
        height: D.dGM, width: D.dGM
      };
    case b.pC.GUILD_BANNER:
      return {
        height: b._T, width: b.X_
      };
    case b.pC.SCHEDULED_EVENT_IMAGE:
      return {
        height: b.xT, width: b.d6
      };
    case b.pC.HOME_HEADER:
      return {
        height: b.Uo, width: b.N8
      };
    default:
      return (0, C.vE)(e)
  }
}

function v(e) {
  let {
    zoomRatio: t,
    imageRotation: r,
    imageTransformCoordinates: n
  } = e;
  return 1 !== t || 0 !== r || 0 !== n.x || 0 !== n.y
}
let x = {
  imageDimensions: null,
  cropDimensions: {
    width: 0,
    height: 0
  },
  dragBoundaries: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  imageTransformCoordinates: M,
  imageRotation: 0,
  zoomRatio: 1,
  startingCoordinates: {
    x: 0,
    y: 0
  },
  isDragging: false,
  hasImageEdits: false
};

function S(e, t) {
  var r, n, a, i, o, s;
  switch (t.type) {
    case "SET_DIMENSIONS":
      return N(T({}, e), {
        imageDimensions: t.imageDimensions,
        cropDimensions: t.cropDimensions,
        dragBoundaries: t.dragBoundaries
      });
    case "START_DRAGGING_IMAGE":
      return N(T({}, e), {
        startingCoordinates: t.startingCoordinates,
        isDragging: true
      });
    case "STOP_DRAGGING_IMAGE":
      return N(T({}, e), {
        isDragging: false,
        hasImageEdits: v({
          zoomRatio: e.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "ROTATE_IMAGE":
      return N(T({}, e), {
        imageRotation: t.imageRotation,
        imageTransformCoordinates: t.imageTransformCoordinates,
        imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
        cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
        dragBoundaries: null != (a = t.dragBoundaries) ? a : e.dragBoundaries,
        hasImageEdits: v({
          zoomRatio: e.zoomRatio,
          imageRotation: t.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "SET_IMAGE_ZOOM_RATIO":
      return N(T({}, e), {
        imageTransformCoordinates: t.imageTransformCoordinates,
        zoomRatio: t.zoomRatio,
        dragBoundaries: t.dragBoundaries,
        hasImageEdits: v({
          zoomRatio: t.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "RESET":
      return N(T({}, e), {
        zoomRatio: 1,
        imageRotation: 0,
        imageDimensions: null != (i = t.imageDimensions) ? i : e.imageDimensions,
        cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
        dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
        hasImageEdits: false
      });
    default:
      return (0, C.vE)(t)
  }
}

function P(e) {
  let {
    file: t,
    imageUri: r,
    originalAsset: i,
    transitionState: C,
    onCrop: R,
    onClose: N,
    uploadType: v = b.pC.AVATAR,
    showUpsellHeader: P = false,
    analyticsPage: B
  } = e, U = a.useRef(M), j = a.useRef(null), k = a.useRef(null), [H, L] = a.useReducer(S, x), {
    cropDimensions: V,
    dragBoundaries: W,
    imageDimensions: z,
    imageRotation: F,
    zoomRatio: X,
    startingCoordinates: Z,
    isDragging: K,
    hasImageEdits: Y
  } = H, [J, q] = a.useState(false), [$, Q] = a.useState(false), [ee, et] = a.useState(0), {
    analyticsLocations: er,
    newestAnalyticsLocation: en
  } = (0, g.ZP)(d.Z.IMAGE_CROPPING_MODAL), ea = "image/gif" === t.type, ei = "image/webp" === t.type, [eo, es] = a.useState(false), [el, ec] = a.useState(ei), eu = $ || J || el;
  a.useEffect(() => {
    ea ? (0, y.Z)() : ei && (async () => {
      try {
        let e = await t.arrayBuffer(),
          r = new Uint8Array(e),
          n = await (0, _.b0)(r);
        es(n), n && (0, _.GS)()
      } finally {
        ec(false)
      }
    })()
  }, [t, ea, ei]), a.useEffect(() => {
    ea && P && A.default.track(D.rMx.OPEN_MODAL, {
      type: D.jXE.CROP_GIF_MODAL,
      location: {
        page: B
      },
      location_stack: er,
      upload_type: v
    })
  }, [P, B, ea, er, v]);
  let em = a.useCallback((e, t, r, n) => {
      U.current = (0, w.U$)(e, t, r), null != j.current && (j.current.style.transform = "translate3d(".concat(U.current.x, "px, ").concat(U.current.y, "px, 0) rotate(").concat(n, "deg)"))
    }, [j]),
    ed = a.useCallback(() => {
      if (null == j.current || X > 1) return;
      let {
        width: e,
        height: t
      } = j.current.getBoundingClientRect(), {
        width: r,
        height: n
      } = (0, w.Es)(v, e, t), a = (0, w.AK)(v, r, n, t), i = (0, w.kH)(r, n, a);
      L({
        type: "SET_DIMENSIONS",
        imageDimensions: {
          width: r,
          height: n
        },
        cropDimensions: a,
        dragBoundaries: i
      })
    }, [v, X]),
    eg = a.useCallback(e => {
      L({
        type: "START_DRAGGING_IMAGE",
        startingCoordinates: {
          x: e.clientX - U.current.x,
          y: e.clientY - U.current.y
        }
      })
    }, []),
    eh = a.useCallback(e => {
      let {
        x: t,
        y: r
      } = U.current;
      if (K && (e.clientX !== t || e.clientY !== r)) em(e.clientX - Z.x, e.clientY - Z.y, W, F)
    }, [W, F, K, Z.x, Z.y, em]),
    ef = a.useCallback(() => {
      L({
        type: "STOP_DRAGGING_IMAGE",
        imageTransformCoordinates: U.current
      })
    }, []),
    eE = a.useCallback(e => {
      if (null == z) return;
      let {
        width: t,
        height: r
      } = z, n = (0, w.kH)(t * e, r * e, V), {
        x: a,
        y: i
      } = U.current;
      (0, s.inRange)(a, n.right, n.left) && (0, s.inRange)(i, n.top, n.bottom) || em(a, i, n, F), L({
        type: "SET_IMAGE_ZOOM_RATIO",
        zoomRatio: e,
        dragBoundaries: n,
        imageTransformCoordinates: U.current
      })
    }, [V, z, F, em]),
    ep = a.useCallback((e, t) => {
      let {
        width: r,
        height: n
      } = e, {
        width: a,
        height: i
      } = (0, w.Es)(v, n, r), o = (0, w.AK)(v, a, i, r), s = (0, w.kH)(a * t, i * t, o);
      return {
        newImageDimensions: {
          width: a,
          height: i
        },
        newCropDimensions: o,
        newDragBoundaries: s
      }
    }, [v]),
    eA = a.useCallback(() => {
      var e;
      if (null == j.current || null == z) return;
      let t = (F + 90) % 360,
        {
          x: r,
          y: n
        } = (e = U.current.x, {
          x: -U.current.y,
          y: e
        });
      if (z.width !== z.height) {
        let {
          newImageDimensions: e,
          newCropDimensions: a,
          newDragBoundaries: i
        } = ep(z, X);
        em(r, n, i, t), L({
          type: "ROTATE_IMAGE",
          imageTransformCoordinates: U.current,
          imageRotation: t,
          imageDimensions: e,
          cropDimensions: a,
          dragBoundaries: i
        })
      } else em(r, n, W, t), L({
        type: "ROTATE_IMAGE",
        imageTransformCoordinates: U.current,
        imageRotation: t
      })
    }, [W, ep, z, F, em, X]),
    eC = a.useCallback(() => {
      if (null != j.current && null != z) {
        if (z.width !== z.height && (F - 0) % 180 != 0) {
          let {
            newImageDimensions: e,
            newCropDimensions: t,
            newDragBoundaries: r
          } = ep(z, 1);
          L({
            type: "RESET",
            imageDimensions: e,
            cropDimensions: t,
            dragBoundaries: r
          }), em(0, 0, r, 0)
        } else {
          let e = (0, w.kH)(+z.width, +z.height, V);
          L({
            type: "RESET",
            dragBoundaries: e
          }), em(0, 0, e, 0)
        }
        et(e => e + 1)
      }
    }, [V, ep, z, F, em]),
    ew = a.useCallback(() => {
      let e = G(v);
      return e.width !== e.height
    }, [v]),
    ey = a.useCallback(() => {
      if (null == z) return {};
      let e = z.width / z.height,
        t = ew() && e > b.MY ? V.height / z.height : 1,
        {
          width: r,
          height: n
        } = ((e, t) => {
          let {
            width: r,
            height: n
          } = e;
          return t % 180 != 0 ? {
            width: n,
            height: r
          } : {
            width: r,
            height: n
          }
        })(z, F);
      return {
        width: r * X * t,
        minWidth: r * X * t,
        height: n * X * t,
        minHeight: n * X * t
      }
    }, [V.height, z, F, ew, X]),
    e_ = a.useCallback(async () => {
      let e;
      if (null == j.current) return;
      Q(true);
      let r = j.current,
        n = G(v);
      if (ea || eo) try {
        let {
          result: a,
          cancelFn: i
        } = await (0, w.GU)({
          file: t,
          image: r,
          cropDimensions: V,
          cropOriginCoordinates: U.current,
          maxDimensions: n,
          imageRotation: F
        });
        k.current = i, e = await a, k.current = null
      } catch (e) {
        var a;
        throw null == (a = k.current) || a.call(k), k.current = null, Error("Error cropping animated image: ".concat(e instanceof Error ? e.toString() : String(e)))
      } else e = (0, l.PT)({
        image: r,
        cropDimensions: V,
        cropOriginCoordinates: U.current,
        maxDimensions: n,
        imageRotation: F
      });
      await R({
        assetOrigin: function(e) {
          let {
            hasImageEdits: t,
            hasOriginalAsset: r
          } = e;
          return r ? t ? p.q.EDITED_ARCHIVED_ASSET : p.q.ARCHIVED_ASSET : p.q.NEW_ASSET
        }({
          hasImageEdits: Y,
          hasOriginalAsset: null != i
        }),
        imageUri: e,
        file: t,
        originalAsset: i
      }), Q(false), await N()
    }, [V, t, Y, F, ea, eo, N, R, i, v]),
    eb = a.useCallback(async () => {
      if (null != k.current) {
        k.current(), k.current = null, Q(false);
        return
      }
      await N()
    }, [N]);
  a.useEffect(() => (window.addEventListener("mouseup", ef), window.addEventListener("resize", ed), () => {
    window.removeEventListener("mouseup", ef), window.removeEventListener("resize", ed)
  }), [ed, ef]), a.useEffect(() => {
    if (K) return window.addEventListener("mousemove", eh), () => window.removeEventListener("mousemove", eh)
  }, [eh, K]), a.useEffect(() => {
    if (null != k.current) return () => {
      var e;
      return null == (e = k.current) ? true : e.call(k)
    }
  }, []);
  let eD = v === b.pC.AVATAR || v === b.pC.BANNER,
    eR = (0, f.M)(!eD);
  return (0, n.jsx)(g.Gt, {
    value: er,
    children: (0, n.jsxs)(c.Modal, {
      title: O.intl.string(O.t.DxAYCF),
      size: "md",
      actionBarInput: (0, n.jsx)(m.Avr, {
        text: O.intl.string(O.t.yBZMsQ),
        textVariant: "text-md/medium",
        onClick: eC,
        disabled: !Y
      }),
      actions: [{
        text: O.intl.string(O.t["9TG40l"]),
        onClick: eb,
        variant: "secondary"
      }, {
        text: O.intl.string(O.t.ZSHmKD),
        onClick: e_,
        variant: "primary",
        loading: $,
        disabled: eu
      }],
      transitionState: C,
      onClose: N,
      children: [P && !eR && (0, n.jsx)(h.Z, {
        type: v,
        analyticsPage: B,
        analyticsSection: D.jXE.CROP_GIF_MODAL,
        isGIF: ea,
        banner: r
      }), (0, n.jsxs)("div", {
        className: I.modalContent,
        children: [(0, n.jsx)("div", {
          className: I.editingContainer,
          children: J ? (0, n.jsxs)("div", {
            className: I.errorContainer,
            children: [(0, n.jsx)(m.Mgn, {
              size: "sm",
              color: m.TVs.colors.TEXT_FEEDBACK_CRITICAL
            }), (0, n.jsx)(m.Text, {
              variant: "text-md/normal",
              color: "text-feedback-critical",
              children: O.intl.string(O.t["+ITMYX"])
            })]
          }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              onLoad: ed,
              onError: () => q(true),
              style: T({
                opacity: +(null != z),
                transform: "translate3d(".concat(U.current.x, "px, ").concat(U.current.y, "px, 0) rotate(").concat(F, "deg)")
              }, ey()),
              className: o()($ ? I.imageDisabled : I.imageEnabled, I.rotationSupported),
              src: r,
              crossOrigin: "anonymous",
              alt: "avatar",
              ref: j,
              onMouseDown: eg,
              draggable: false
            }), (0, n.jsx)("div", {
              className: function(e) {
                switch (e) {
                  case b.pC.GUILD_ICON:
                    return I.overlayGuildIcon;
                  case b.pC.BANNER:
                  case b.pC.GUILD_BANNER:
                  case b.pC.VIDEO_BACKGROUND:
                  case b.pC.SCHEDULED_EVENT_IMAGE:
                  case b.pC.HOME_HEADER:
                    return I.overlayBanner;
                  case b.pC.AVATAR:
                  case b.pC.AVATAR_DECORATION:
                    return I.overlayAvatar
                }
              }(v),
              style: {
                opacity: +(null != z),
                width: V.width,
                height: V.height
              }
            })]
          })
        }), (0, n.jsxs)("div", {
          className: I.toolsContainer,
          children: [(0, n.jsxs)("div", {
            className: I.zoomControls,
            children: [(0, n.jsx)(m.XBm, {
              size: "xxs",
              color: "currentColor",
              className: I.zoomIcon
            }), (0, n.jsx)(m.iRW, {
              className: I.slider,
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: eE,
              disabled: eu,
              equidistant: true,
              hideBubble: true,
              "aria-label": O.intl.string(O.t.dnvZSg)
            }, ee), (0, n.jsx)(m.XBm, {
              size: "md",
              color: "currentColor",
              className: I.zoomIcon
            })]
          }), (0, n.jsx)(u.u, {
            text: O.intl.string(O.t.E36Wd4),
            ariaHidden: true,
            children: (0, n.jsx)(m.P3F, {
              className: o()(I.rotateButton, {
                [I.disabled]: eu
              }),
              onClick: eu ? true : eA,
              "aria-label": O.intl.string(O.t.LzFiKG),
              "aria-disabled": eu,
              children: (0, n.jsx)(m.Vk2, {
                size: "md",
                color: "currentColor"
              })
            })
          })]
        }), P && eR && (0, n.jsx)(E.Z, {
          uploadType: v,
          analyticsSource: en,
          showUpsell: true,
          position: "inline",
          className: I.premiumUpsell,
          showShadow: false
        })]
      })]
    })
  })
}