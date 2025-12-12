/** Chunk was on 59732 **/
/** chunk id: 712451, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./415506.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
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
  Chunk511004 = require("./511004.js"),
  Chunk486324 = require("./486324.js"),
  Chunk981631 = require("./981631.js"),
  Chunk678916 = require("./678916.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201313 = require("./201313.js");

function I(e) {
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

function b(e, t) {
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
let N = {
  x: 0,
  y: 0
};

function v(e) {
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
        height: w.dGM, width: w.dGM
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
      return (0, A.vE)(e)
  }
}

function G(e) {
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
  imageTransformCoordinates: N,
  imageRotation: 0,
  zoomRatio: 1,
  startingCoordinates: {
    x: 0,
    y: 0
  },
  isDragging: false,
  hasImageEdits: false
};

function M(e, t) {
  var r, n, i, a, o, s;
  switch (t.type) {
    case "SET_DIMENSIONS":
      return b(I({}, e), {
        imageDimensions: t.imageDimensions,
        cropDimensions: t.cropDimensions,
        dragBoundaries: t.dragBoundaries
      });
    case "START_DRAGGING_IMAGE":
      return b(I({}, e), {
        startingCoordinates: t.startingCoordinates,
        isDragging: true
      });
    case "STOP_DRAGGING_IMAGE":
      return b(I({}, e), {
        isDragging: false,
        hasImageEdits: G({
          zoomRatio: e.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "ROTATE_IMAGE":
      return b(I({}, e), {
        imageRotation: t.imageRotation,
        imageTransformCoordinates: t.imageTransformCoordinates,
        imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
        cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
        dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
        hasImageEdits: G({
          zoomRatio: e.zoomRatio,
          imageRotation: t.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "SET_IMAGE_ZOOM_RATIO":
      return b(I({}, e), {
        imageTransformCoordinates: t.imageTransformCoordinates,
        zoomRatio: t.zoomRatio,
        dragBoundaries: t.dragBoundaries,
        hasImageEdits: G({
          zoomRatio: t.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "RESET":
      return b(I({}, e), {
        zoomRatio: 1,
        imageRotation: 0,
        imageDimensions: null != (a = t.imageDimensions) ? a : e.imageDimensions,
        cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
        dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
        hasImageEdits: false
      });
    default:
      return (0, A.vE)(t)
  }
}

function S(e) {
  let {
    file: t,
    imageUri: r,
    originalAsset: a,
    transitionState: A,
    onCrop: y,
    onClose: b,
    uploadType: G = O.pC.AVATAR,
    showUpsellHeader: S = false,
    analyticsPage: B
  } = e, j = i.useRef(N), k = i.useRef(null), L = i.useRef(null), [P, V] = i.useReducer(M, x), {
    cropDimensions: U,
    dragBoundaries: H,
    imageDimensions: z,
    imageRotation: F,
    zoomRatio: X,
    startingCoordinates: Z,
    isDragging: K,
    hasImageEdits: Y
  } = P, [W, J] = i.useState(false), [q, $] = i.useState(false), [Q, ee] = i.useState(0), {
    analyticsLocations: et,
    newestAnalyticsLocation: er
  } = (0, g.ZP)(m.Z.IMAGE_CROPPING_MODAL), en = "image/gif" === t.type, ei = "image/webp" === t.type, ea = q || W;
  i.useEffect(() => {
    (0, D.Z)()
  }, []), i.useEffect(() => {
    en && S && f.default.track(w.rMx.OPEN_MODAL, {
      type: w.jXE.CROP_GIF_MODAL,
      location: {
        page: B
      },
      location_stack: et,
      upload_type: G
    })
  }, [S, B, en, et, G]);
  let eo = i.useCallback((e, t, r, n) => {
      j.current = (0, R.U$)(e, t, r), null != k.current && (k.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0) rotate(").concat(n, "deg)"))
    }, [k]),
    es = i.useCallback(() => {
      if (null == k.current || X > 1) return;
      let {
        width: e,
        height: t
      } = k.current.getBoundingClientRect(), {
        width: r,
        height: n
      } = (0, R.Es)(G, e, t), i = (0, R.AK)(G, r, n, t), a = (0, R.kH)(r, n, i);
      V({
        type: "SET_DIMENSIONS",
        imageDimensions: {
          width: r,
          height: n
        },
        cropDimensions: i,
        dragBoundaries: a
      })
    }, [G, X]),
    el = i.useCallback(e => {
      V({
        type: "START_DRAGGING_IMAGE",
        startingCoordinates: {
          x: e.clientX - j.current.x,
          y: e.clientY - j.current.y
        }
      })
    }, []),
    ec = i.useCallback(e => {
      let {
        x: t,
        y: r
      } = j.current;
      if (K && (e.clientX !== t || e.clientY !== r)) eo(e.clientX - Z.x, e.clientY - Z.y, H, F)
    }, [H, F, K, Z.x, Z.y, eo]),
    eu = i.useCallback(() => {
      V({
        type: "STOP_DRAGGING_IMAGE",
        imageTransformCoordinates: j.current
      })
    }, []),
    ed = i.useCallback(e => {
      if (null == z) return;
      let {
        width: t,
        height: r
      } = z, n = (0, R.kH)(t * e, r * e, U), {
        x: i,
        y: a
      } = j.current;
      (0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom) || eo(i, a, n, F), V({
        type: "SET_IMAGE_ZOOM_RATIO",
        zoomRatio: e,
        dragBoundaries: n,
        imageTransformCoordinates: j.current
      })
    }, [U, z, F, eo]),
    em = i.useCallback((e, t) => {
      let {
        width: r,
        height: n
      } = e, {
        width: i,
        height: a
      } = (0, R.Es)(G, n, r), o = (0, R.AK)(G, i, a, r), s = (0, R.kH)(i * t, a * t, o);
      return {
        newImageDimensions: {
          width: i,
          height: a
        },
        newCropDimensions: o,
        newDragBoundaries: s
      }
    }, [G]),
    eg = i.useCallback(() => {
      var e;
      if (null == k.current || null == z) return;
      let t = (F + 90) % 360,
        {
          x: r,
          y: n
        } = (e = j.current.x, {
          x: -j.current.y,
          y: e
        });
      if (z.width !== z.height) {
        let {
          newImageDimensions: e,
          newCropDimensions: i,
          newDragBoundaries: a
        } = em(z, X);
        eo(r, n, a, t), V({
          type: "ROTATE_IMAGE",
          imageTransformCoordinates: j.current,
          imageRotation: t,
          imageDimensions: e,
          cropDimensions: i,
          dragBoundaries: a
        })
      } else eo(r, n, H, t), V({
        type: "ROTATE_IMAGE",
        imageTransformCoordinates: j.current,
        imageRotation: t
      })
    }, [H, em, z, F, eo, X]),
    eh = i.useCallback(() => {
      if (null != k.current && null != z) {
        if (z.width !== z.height && (F - 0) % 180 != 0) {
          let {
            newImageDimensions: e,
            newCropDimensions: t,
            newDragBoundaries: r
          } = em(z, 1);
          V({
            type: "RESET",
            imageDimensions: e,
            cropDimensions: t,
            dragBoundaries: r
          }), eo(0, 0, r, 0)
        } else {
          let e = (0, R.kH)(+z.width, +z.height, U);
          V({
            type: "RESET",
            dragBoundaries: e
          }), eo(0, 0, e, 0)
        }
        ee(e => e + 1)
      }
    }, [U, em, z, F, eo]),
    ep = i.useCallback(() => {
      let e = v(G);
      return e.width !== e.height
    }, [G]),
    eE = i.useCallback(() => {
      if (null == z) return {};
      let e = z.width / z.height,
        t = ep() && e > O.MY ? U.height / z.height : 1,
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
    }, [U.height, z, F, ep, X]),
    eC = i.useCallback(async () => {
      let e;
      if (null == k.current) return;
      $(true);
      let r = k.current,
        n = v(G);
      if (en) try {
        let {
          result: i,
          cancelFn: a
        } = await (0, R.$p)({
          file: t,
          image: r,
          cropDimensions: U,
          cropOriginCoordinates: j.current,
          maxDimensions: n,
          imageRotation: F
        });
        L.current = a, e = await i, L.current = null
      } catch (e) {
        var i;
        throw null == (i = L.current) || i.call(L), L.current = null, Error("Error cropping GIF: ".concat(e instanceof Error ? e.toString() : String(e)))
      } else if (ei) {
        let r = btoa(String.fromCharCode(...new Uint8Array(await t.arrayBuffer())));
        e = "data:".concat(t.type, ";base64,").concat(r)
      } else e = (0, l.PT)({
        image: r,
        cropDimensions: U,
        cropOriginCoordinates: j.current,
        maxDimensions: n,
        imageRotation: F
      });
      await y({
        assetOrigin: function(e) {
          let {
            hasImageEdits: t,
            hasOriginalAsset: r
          } = e;
          return r ? t ? C.q.EDITED_ARCHIVED_ASSET : C.q.ARCHIVED_ASSET : C.q.NEW_ASSET
        }({
          hasImageEdits: Y,
          hasOriginalAsset: null != a
        }),
        imageUri: e,
        file: t,
        originalAsset: a
      }), $(false), await b()
    }, [U, t, Y, F, en, ei, b, y, a, G]),
    ef = i.useCallback(async () => {
      if (null != L.current) {
        L.current(), L.current = null, $(false);
        return
      }
      await b()
    }, [b]);
  i.useEffect(() => (window.addEventListener("mouseup", eu), window.addEventListener("resize", es), () => {
    window.removeEventListener("mouseup", eu), window.removeEventListener("resize", es)
  }), [es, eu]), i.useEffect(() => {
    if (K) return window.addEventListener("mousemove", ec), () => window.removeEventListener("mousemove", ec)
  }, [ec, K]), i.useEffect(() => {
    if (null != L.current) return () => {
      var e;
      return null == (e = L.current) ? true : e.call(L)
    }
  }, []);
  let eA = G === O.pC.AVATAR || G === O.pC.BANNER,
    eR = (0, p.M)(!eA);
  return (0, n.jsx)(g.Gt, {
    value: et,
    children: (0, n.jsxs)(c.Modal, {
      title: T.intl.string(T.t.DxAYCF),
      size: "md",
      actionBarInput: (0, n.jsx)(d.Avr, {
        text: T.intl.string(T.t.yBZMsQ),
        textVariant: "text-md/medium",
        onClick: eh,
        disabled: !Y
      }),
      actions: [{
        text: T.intl.string(T.t["9TG40l"]),
        onClick: ef,
        variant: "secondary"
      }, {
        text: T.intl.string(T.t.ZSHmKD),
        onClick: eC,
        variant: "primary",
        loading: q,
        disabled: ea
      }],
      transitionState: A,
      onClose: b,
      children: [S && !eR && (0, n.jsx)(h.Z, {
        type: G,
        analyticsPage: B,
        analyticsSection: w.jXE.CROP_GIF_MODAL,
        isGIF: en,
        banner: r
      }), (0, n.jsxs)("div", {
        className: _.modalContent,
        children: [(0, n.jsx)("div", {
          className: _.editingContainer,
          children: W ? (0, n.jsxs)("div", {
            className: _.errorContainer,
            children: [(0, n.jsx)(d.Mgn, {
              size: "sm",
              color: d.TVs.colors.TEXT_FEEDBACK_CRITICAL
            }), (0, n.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-feedback-critical",
              children: T.intl.string(T.t["+ITMYX"])
            })]
          }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              onLoad: es,
              onError: () => J(true),
              style: I({
                opacity: +(null != z),
                transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0) rotate(").concat(F, "deg)")
              }, eE()),
              className: o()(q ? _.imageDisabled : _.imageEnabled, _.rotationSupported),
              src: r,
              crossOrigin: "anonymous",
              alt: "avatar",
              ref: k,
              onMouseDown: el,
              draggable: false
            }), (0, n.jsx)("div", {
              className: function(e) {
                switch (e) {
                  case O.pC.GUILD_ICON:
                    return _.overlayGuildIcon;
                  case O.pC.BANNER:
                  case O.pC.GUILD_BANNER:
                  case O.pC.VIDEO_BACKGROUND:
                  case O.pC.SCHEDULED_EVENT_IMAGE:
                  case O.pC.HOME_HEADER:
                    return _.overlayBanner;
                  case O.pC.AVATAR:
                  case O.pC.AVATAR_DECORATION:
                    return _.overlayAvatar
                }
              }(G),
              style: {
                opacity: +(null != z),
                width: U.width,
                height: U.height
              }
            })]
          })
        }), (0, n.jsxs)("div", {
          className: _.toolsContainer,
          children: [(0, n.jsxs)("div", {
            className: _.zoomControls,
            children: [(0, n.jsx)(d.XBm, {
              size: "xxs",
              color: "currentColor",
              className: _.zoomIcon
            }), (0, n.jsx)(d.iRW, {
              className: _.slider,
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: ed,
              disabled: ea,
              equidistant: true,
              hideBubble: true,
              "aria-label": T.intl.string(T.t.dnvZSg)
            }, Q), (0, n.jsx)(d.XBm, {
              size: "md",
              color: "currentColor",
              className: _.zoomIcon
            })]
          }), (0, n.jsx)(u.u, {
            text: T.intl.string(T.t.E36Wd4),
            ariaHidden: true,
            children: (0, n.jsx)(d.P3F, {
              className: o()(_.rotateButton, {
                [_.disabled]: ea
              }),
              onClick: ea ? true : eg,
              "aria-label": T.intl.string(T.t.LzFiKG),
              "aria-disabled": ea,
              children: (0, n.jsx)(d.Vk2, {
                size: "md",
                color: "currentColor"
              })
            })
          })]
        }), S && eR && (0, n.jsx)(E.Z, {
          uploadType: G,
          analyticsSource: er,
          showUpsell: true,
          position: "inline",
          className: _.premiumUpsell,
          showShadow: false
        })]
      })]
    })
  })
}