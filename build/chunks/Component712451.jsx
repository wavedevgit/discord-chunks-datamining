/** Chunk was on 59732 **/
/** chunk id: 712451, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk36793 = require("./36793.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk511004 = require("./511004.js"),
  Chunk486324 = require("./486324.js"),
  Chunk981631 = require("./981631.js"),
  Chunk678916 = require("./678916.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk85152 = require("./85152.js");

function N(e) {
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

function T(e, t) {
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
let _ = {
    x: 0,
    y: 0
  },
  x = (e, t) => {
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
  };

function b(e) {
  switch (e) {
    case O.pC.BANNER:
      return {
        height: O.f, width: O.L0
      };
    case O.pC.VIDEO_BACKGROUND:
      return y.HE;
    case O.pC.AVATAR:
    case O.pC.AVATAR_DECORATION:
    case O.pC.GUILD_ICON:
      return {
        height: D.dGM, width: D.dGM
      };
    case O.pC.GUILD_BANNER:
      return {
        height: O._T, width: O.X_
      };
    case O.pC.SCHEDULED_EVENT_IMAGE:
      return {
        height: O.xT, width: O.d6
      };
    case O.pC.HOME_HEADER:
      return {
        height: O.Uo, width: O.N8
      };
    default:
      return (0, f.vE)(e)
  }
}

function M(e) {
  let {
    zoomRatio: t,
    imageRotation: r,
    imageTransformCoordinates: n
  } = e;
  return 1 !== t || 0 !== r || 0 !== n.x || 0 !== n.y
}
let G = {
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
  imageTransformCoordinates: _,
  imageRotation: 0,
  zoomRatio: 1,
  startingCoordinates: {
    x: 0,
    y: 0
  },
  isDragging: false,
  hasImageEdits: false
};

function v(e, t) {
  var r, n, i, a, o, s;
  switch (t.type) {
    case "SET_DIMENSIONS":
      return T(N({}, e), {
        imageDimensions: t.imageDimensions,
        cropDimensions: t.cropDimensions,
        dragBoundaries: t.dragBoundaries
      });
    case "START_DRAGGING_IMAGE":
      return T(N({}, e), {
        startingCoordinates: t.startingCoordinates,
        isDragging: true
      });
    case "STOP_DRAGGING_IMAGE":
      return T(N({}, e), {
        isDragging: false,
        hasImageEdits: M({
          zoomRatio: e.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "ROTATE_IMAGE":
      return T(N({}, e), {
        imageRotation: t.imageRotation,
        imageTransformCoordinates: t.imageTransformCoordinates,
        imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
        cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
        dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
        hasImageEdits: M({
          zoomRatio: e.zoomRatio,
          imageRotation: t.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "SET_IMAGE_ZOOM_RATIO":
      return T(N({}, e), {
        imageTransformCoordinates: t.imageTransformCoordinates,
        zoomRatio: t.zoomRatio,
        dragBoundaries: t.dragBoundaries,
        hasImageEdits: M({
          zoomRatio: t.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "RESET":
      return T(N({}, e), {
        zoomRatio: 1,
        imageRotation: 0,
        imageDimensions: null != (a = t.imageDimensions) ? a : e.imageDimensions,
        cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
        dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
        hasImageEdits: false
      });
    default:
      return (0, f.vE)(t)
  }
}

function S(e) {
  let {
    file: t,
    imageUri: r,
    originalAsset: a,
    transitionState: f,
    onCrop: y,
    onClose: M,
    uploadType: S = O.pC.AVATAR,
    showUpsellHeader: j = false,
    analyticsPage: k
  } = e, B = i.useRef(_), z = i.useRef(null), P = i.useRef(null), [L, U] = i.useReducer(v, G), {
    cropDimensions: V,
    dragBoundaries: H,
    imageDimensions: F,
    imageRotation: X,
    zoomRatio: K,
    startingCoordinates: Y,
    isDragging: Z,
    hasImageEdits: W
  } = L, [q, $] = i.useState(false), [J, Q] = i.useState(false), [ee, et] = i.useState(0), {
    analyticsLocations: er,
    newestAnalyticsLocation: en
  } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL), ei = "image/gif" === t.type;
  i.useEffect(() => {
    (0, R.Z)()
  }, []), i.useEffect(() => {
    ei && j && C.default.track(D.rMx.OPEN_MODAL, {
      type: D.jXE.CROP_GIF_MODAL,
      location: {
        page: k
      },
      location_stack: er,
      upload_type: S
    })
  }, [j, k, ei, er, S]);
  let ea = i.useCallback((e, t, r, n) => {
      B.current = (0, A.U$)(e, t, r), null != z.current && (z.current.style.transform = "translate3d(".concat(B.current.x, "px, ").concat(B.current.y, "px, 0) rotate(").concat(n, "deg)"))
    }, [z]),
    eo = i.useCallback(() => {
      if (null == z.current || K > 1) return;
      let {
        width: e,
        height: t
      } = z.current.getBoundingClientRect(), {
        width: r,
        height: n
      } = (0, A.Es)(S, e, t), i = (0, A.AK)(S, r, n, t), a = (0, A.kH)(r, n, i);
      U({
        type: "SET_DIMENSIONS",
        imageDimensions: {
          width: r,
          height: n
        },
        cropDimensions: i,
        dragBoundaries: a
      })
    }, [S, K]),
    es = i.useCallback(e => {
      U({
        type: "START_DRAGGING_IMAGE",
        startingCoordinates: {
          x: e.clientX - B.current.x,
          y: e.clientY - B.current.y
        }
      })
    }, []),
    el = i.useCallback(e => {
      let {
        x: t,
        y: r
      } = B.current;
      if (Z && (e.clientX !== t || e.clientY !== r)) ea(e.clientX - Y.x, e.clientY - Y.y, H, X)
    }, [H, X, Z, Y.x, Y.y, ea]),
    ec = i.useCallback(() => {
      U({
        type: "STOP_DRAGGING_IMAGE",
        imageTransformCoordinates: B.current
      })
    }, []),
    eu = i.useCallback(e => {
      if (null == F) return;
      let {
        width: t,
        height: r
      } = F, n = (0, A.kH)(t * e, r * e, V), {
        x: i,
        y: a
      } = B.current;
      (0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom) || ea(i, a, n, X), U({
        type: "SET_IMAGE_ZOOM_RATIO",
        zoomRatio: e,
        dragBoundaries: n,
        imageTransformCoordinates: B.current
      })
    }, [V, F, X, ea]),
    ed = i.useCallback((e, t) => {
      let {
        width: r,
        height: n
      } = e, {
        width: i,
        height: a
      } = (0, A.Es)(S, n, r), o = (0, A.AK)(S, i, a, r), s = (0, A.kH)(i * t, a * t, o);
      return {
        newImageDimensions: {
          width: i,
          height: a
        },
        newCropDimensions: o,
        newDragBoundaries: s
      }
    }, [S]),
    em = i.useCallback(() => {
      var e;
      if (null == z.current || null == F) return;
      let t = (X + 90) % 360,
        {
          x: r,
          y: n
        } = (e = B.current.x, {
          x: -B.current.y,
          y: e
        });
      if (F.width !== F.height) {
        let {
          newImageDimensions: e,
          newCropDimensions: i,
          newDragBoundaries: a
        } = ed(F, K);
        ea(r, n, a, t), U({
          type: "ROTATE_IMAGE",
          imageTransformCoordinates: B.current,
          imageRotation: t,
          imageDimensions: e,
          cropDimensions: i,
          dragBoundaries: a
        })
      } else ea(r, n, H, t), U({
        type: "ROTATE_IMAGE",
        imageTransformCoordinates: B.current,
        imageRotation: t
      })
    }, [H, ed, F, X, ea, K]),
    eg = i.useCallback(() => {
      if (null != z.current && null != F) {
        if (F.width !== F.height && (X - 0) % 180 != 0) {
          let {
            newImageDimensions: e,
            newCropDimensions: t,
            newDragBoundaries: r
          } = ed(F, 1);
          U({
            type: "RESET",
            imageDimensions: e,
            cropDimensions: t,
            dragBoundaries: r
          }), ea(0, 0, r, 0)
        } else {
          let e = (0, A.kH)(+F.width, +F.height, V);
          U({
            type: "RESET",
            dragBoundaries: e
          }), ea(0, 0, e, 0)
        }
        et(e => e + 1)
      }
    }, [V, ed, F, X, ea]),
    eh = i.useCallback(() => {
      let e = b(S);
      return e.width !== e.height
    }, [S]),
    ep = i.useCallback(() => {
      if (null == F) return {};
      let e = F.width / F.height,
        t = eh() && e > O.MY ? V.height / F.height : 1,
        {
          width: r,
          height: n
        } = x(F, X);
      return {
        width: r * K * t,
        minWidth: r * K * t,
        height: n * K * t,
        minHeight: n * K * t
      }
    }, [V.height, F, X, eh, K]),
    eE = i.useCallback(async () => {
      let e;
      if (null == z.current) return;
      Q(true);
      let r = z.current,
        n = b(S);
      if (ei) try {
        let {
          result: i,
          cancelFn: a
        } = await (0, A.$p)({
          file: t,
          image: r,
          cropDimensions: V,
          cropOriginCoordinates: B.current,
          maxDimensions: n,
          imageRotation: X
        });
        P.current = a, e = await i, P.current = null
      } catch (e) {
        var i;
        throw null == (i = P.current) || i.call(P), P.current = null, Error("Error cropping GIF: ".concat(e instanceof Error ? e.toString() : String(e)))
      } else e = (0, l.PT)({
        image: r,
        cropDimensions: V,
        cropOriginCoordinates: B.current,
        maxDimensions: n,
        imageRotation: X
      });
      await y({
        assetOrigin: function(e) {
          let {
            hasImageEdits: t,
            hasOriginalAsset: r
          } = e;
          return r ? t ? E.q.EDITED_ARCHIVED_ASSET : E.q.ARCHIVED_ASSET : E.q.NEW_ASSET
        }({
          hasImageEdits: W,
          hasOriginalAsset: null != a
        }),
        imageUri: e,
        file: t,
        originalAsset: a
      }), Q(false), M()
    }, [V, t, W, X, ei, M, y, a, S]),
    eC = i.useCallback(() => {
      if (null != P.current) {
        P.current(), P.current = null, Q(false);
        return
      }
      M()
    }, [M]);
  i.useEffect(() => (window.addEventListener("mouseup", ec), window.addEventListener("resize", eo), () => {
    window.removeEventListener("mouseup", ec), window.removeEventListener("resize", eo)
  }), [eo, ec]), i.useEffect(() => {
    if (Z) return window.addEventListener("mousemove", el), () => window.removeEventListener("mousemove", el)
  }, [el, Z]), i.useEffect(() => {
    if (null != P.current) return () => {
      var e;
      return null == (e = P.current) ? true : e.call(P)
    }
  }, []);
  let ef = S === O.pC.AVATAR || S === O.pC.BANNER,
    eA = (0, h.M)(!ef);
  return (0, n.jsx)(m.Gt, {
    value: er,
    children: (0, n.jsxs)(u.Y0X, {
      transitionState: f,
      size: u.CgR.MEDIUM,
      parentComponent: "ImageEditingModal",
      children: [j && !eA && (0, n.jsx)(g.Z, {
        type: S,
        analyticsPage: k,
        analyticsSection: D.jXE.CROP_GIF_MODAL,
        isGIF: ei,
        banner: r
      }), (0, n.jsxs)(u.xBx, {
        className: w.modalHeader,
        separator: false,
        children: [(0, n.jsx)(u.X6q, {
          variant: "heading-lg/semibold",
          children: I.intl.string(I.t.DxAYCA)
        }), (0, n.jsx)(u.olH, {
          onClick: M,
          className: w.modalCloseButton
        })]
      }), (0, n.jsxs)(u.hzk, {
        className: w.modalContent,
        children: [(0, n.jsx)("div", {
          className: w.editingContainer,
          children: q ? (0, n.jsxs)("div", {
            className: w.errorContainer,
            children: [(0, n.jsx)(u.Mgn, {
              size: "sm",
              color: u.TVs.colors.TEXT_DANGER
            }), (0, n.jsx)(u.Text, {
              variant: "text-md/normal",
              color: "text-danger",
              children: I.intl.string(I.t["+ITMYW"])
            })]
          }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              onLoad: eo,
              onError: () => $(true),
              style: N({
                opacity: +(null != F),
                transform: "translate3d(".concat(B.current.x, "px, ").concat(B.current.y, "px, 0) rotate(").concat(X, "deg)")
              }, ep()),
              className: o()(J ? w.imageDisabled : w.imageEnabled, w.rotationSupported),
              src: r,
              crossOrigin: "anonymous",
              alt: "avatar",
              ref: z,
              onMouseDown: es,
              draggable: false
            }), (0, n.jsx)("div", {
              className: function(e) {
                switch (e) {
                  case O.pC.GUILD_ICON:
                    return w.overlayGuildIcon;
                  case O.pC.BANNER:
                  case O.pC.GUILD_BANNER:
                  case O.pC.VIDEO_BACKGROUND:
                  case O.pC.SCHEDULED_EVENT_IMAGE:
                  case O.pC.HOME_HEADER:
                    return w.overlayBanner;
                  case O.pC.AVATAR:
                  case O.pC.AVATAR_DECORATION:
                    return w.overlayAvatar
                }
              }(S),
              style: {
                opacity: +(null != F),
                width: V.width,
                height: V.height
              }
            })]
          })
        }), (0, n.jsxs)("div", {
          className: w.toolsContainer,
          children: [(0, n.jsxs)("div", {
            className: w.zoomControls,
            children: [(0, n.jsx)(u.XBm, {
              size: "xxs",
              color: "currentColor",
              className: w.zoomIcon
            }), (0, n.jsx)(u.iRW, {
              className: w.slider,
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: eu,
              disabled: J || q,
              equidistant: true,
              hideBubble: true,
              "aria-label": I.intl.string(I.t.dnvZSk)
            }, ee), (0, n.jsx)(u.XBm, {
              size: "md",
              color: "currentColor",
              className: w.zoomIcon
            })]
          }), (0, n.jsx)(u.ua7, {
            text: I.intl.string(I.t.E36Wd3),
            "aria-label": I.intl.string(I.t.LzFiKC),
            children: e => {
              var {
                onClick: t
              } = e, r = function(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                  if (null == e) return {};
                  var r, n, i = {},
                    a = Object.keys(e);
                  for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                  return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
              }(e, ["onClick"]);
              return (0, n.jsx)(c.zx, T(N({
                className: w.rotateButton,
                look: c.zx.Looks.BLANK,
                size: c.Ph.NONE,
                color: c.zx.Colors.TRANSPARENT,
                grow: false
              }, r), {
                onClick: em,
                disabled: J || q,
                children: (0, n.jsx)(u.Vk2, {
                  size: "md",
                  color: "currentColor"
                })
              }))
            }
          })]
        }), j && eA && (0, n.jsx)("div", {
          children: (0, n.jsx)(p.Z, {
            uploadType: S,
            analyticsSource: en,
            showUpsell: true,
            position: "inline",
            className: w.premiumUpsell,
            showShadow: false
          })
        })]
      }), (0, n.jsxs)(u.mzw, {
        className: w.modalFooter,
        children: [(0, n.jsx)(c.zx, {
          className: w.resetButton,
          look: c.zx.Looks.LINK,
          size: c.Ph.MIN,
          color: c.zx.Colors.PRIMARY,
          onClick: eg,
          disabled: !W,
          children: I.intl.string(I.t.yBZMsb)
        }), (0, n.jsx)(c.zx, {
          className: w.linkButton,
          look: c.zx.Looks.LINK,
          size: c.Ph.MIN,
          color: c.zx.Colors.PRIMARY,
          onClick: eC,
          children: I.intl.string(I.t["9TG40t"])
        }), (0, n.jsx)(u.zxk, {
          variant: "primary",
          text: I.intl.string(I.t.ZSHmKC),
          loading: J,
          onClick: eE,
          disabled: J || q
        })]
      })]
    })
  })
}