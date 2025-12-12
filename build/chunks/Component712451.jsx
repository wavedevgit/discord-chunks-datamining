/** Chunk was on 59732 **/
/** chunk id: 712451, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./388685.js"), require("./415506.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk36793 = require("./36793.js"),
  Chunk793030 = require("./793030.js"),
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

function _(e, t) {
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
let I = {
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

function N(e) {
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
  imageTransformCoordinates: I,
  imageRotation: 0,
  zoomRatio: 1,
  startingCoordinates: {
    x: 0,
    y: 0
  },
  isDragging: false,
  hasImageEdits: false
};

function G(e, t) {
  var r, n, i, a, o, s;
  switch (t.type) {
    case "SET_DIMENSIONS":
      return _(T({}, e), {
        imageDimensions: t.imageDimensions,
        cropDimensions: t.cropDimensions,
        dragBoundaries: t.dragBoundaries
      });
    case "START_DRAGGING_IMAGE":
      return _(T({}, e), {
        startingCoordinates: t.startingCoordinates,
        isDragging: true
      });
    case "STOP_DRAGGING_IMAGE":
      return _(T({}, e), {
        isDragging: false,
        hasImageEdits: N({
          zoomRatio: e.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "ROTATE_IMAGE":
      return _(T({}, e), {
        imageRotation: t.imageRotation,
        imageTransformCoordinates: t.imageTransformCoordinates,
        imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
        cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
        dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
        hasImageEdits: N({
          zoomRatio: e.zoomRatio,
          imageRotation: t.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "SET_IMAGE_ZOOM_RATIO":
      return _(T({}, e), {
        imageTransformCoordinates: t.imageTransformCoordinates,
        zoomRatio: t.zoomRatio,
        dragBoundaries: t.dragBoundaries,
        hasImageEdits: N({
          zoomRatio: t.zoomRatio,
          imageRotation: e.imageRotation,
          imageTransformCoordinates: t.imageTransformCoordinates
        })
      });
    case "RESET":
      return _(T({}, e), {
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

function M(e) {
  let {
    file: t,
    imageUri: r,
    originalAsset: a,
    transitionState: f,
    onCrop: y,
    onClose: N,
    uploadType: M = O.pC.AVATAR,
    showUpsellHeader: S = false,
    analyticsPage: j
  } = e, B = i.useRef(I), k = i.useRef(null), P = i.useRef(null), [L, V] = i.useReducer(G, x), {
    cropDimensions: U,
    dragBoundaries: z,
    imageDimensions: H,
    imageRotation: F,
    zoomRatio: X,
    startingCoordinates: Z,
    isDragging: K,
    hasImageEdits: Y
  } = L, [W, J] = i.useState(false), [q, $] = i.useState(false), [Q, ee] = i.useState(0), {
    analyticsLocations: et,
    newestAnalyticsLocation: er
  } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL), en = "image/gif" === t.type, ei = "image/webp" === t.type, ea = q || W;
  i.useEffect(() => {
    (0, R.Z)()
  }, []), i.useEffect(() => {
    en && S && C.default.track(D.rMx.OPEN_MODAL, {
      type: D.jXE.CROP_GIF_MODAL,
      location: {
        page: j
      },
      location_stack: et,
      upload_type: M
    })
  }, [S, j, en, et, M]);
  let eo = i.useCallback((e, t, r, n) => {
      B.current = (0, A.U$)(e, t, r), null != k.current && (k.current.style.transform = "translate3d(".concat(B.current.x, "px, ").concat(B.current.y, "px, 0) rotate(").concat(n, "deg)"))
    }, [k]),
    es = i.useCallback(() => {
      if (null == k.current || X > 1) return;
      let {
        width: e,
        height: t
      } = k.current.getBoundingClientRect(), {
        width: r,
        height: n
      } = (0, A.Es)(M, e, t), i = (0, A.AK)(M, r, n, t), a = (0, A.kH)(r, n, i);
      V({
        type: "SET_DIMENSIONS",
        imageDimensions: {
          width: r,
          height: n
        },
        cropDimensions: i,
        dragBoundaries: a
      })
    }, [M, X]),
    el = i.useCallback(e => {
      V({
        type: "START_DRAGGING_IMAGE",
        startingCoordinates: {
          x: e.clientX - B.current.x,
          y: e.clientY - B.current.y
        }
      })
    }, []),
    ec = i.useCallback(e => {
      let {
        x: t,
        y: r
      } = B.current;
      if (K && (e.clientX !== t || e.clientY !== r)) eo(e.clientX - Z.x, e.clientY - Z.y, z, F)
    }, [z, F, K, Z.x, Z.y, eo]),
    eu = i.useCallback(() => {
      V({
        type: "STOP_DRAGGING_IMAGE",
        imageTransformCoordinates: B.current
      })
    }, []),
    ed = i.useCallback(e => {
      if (null == H) return;
      let {
        width: t,
        height: r
      } = H, n = (0, A.kH)(t * e, r * e, U), {
        x: i,
        y: a
      } = B.current;
      (0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom) || eo(i, a, n, F), V({
        type: "SET_IMAGE_ZOOM_RATIO",
        zoomRatio: e,
        dragBoundaries: n,
        imageTransformCoordinates: B.current
      })
    }, [U, H, F, eo]),
    em = i.useCallback((e, t) => {
      let {
        width: r,
        height: n
      } = e, {
        width: i,
        height: a
      } = (0, A.Es)(M, n, r), o = (0, A.AK)(M, i, a, r), s = (0, A.kH)(i * t, a * t, o);
      return {
        newImageDimensions: {
          width: i,
          height: a
        },
        newCropDimensions: o,
        newDragBoundaries: s
      }
    }, [M]),
    eg = i.useCallback(() => {
      var e;
      if (null == k.current || null == H) return;
      let t = (F + 90) % 360,
        {
          x: r,
          y: n
        } = (e = B.current.x, {
          x: -B.current.y,
          y: e
        });
      if (H.width !== H.height) {
        let {
          newImageDimensions: e,
          newCropDimensions: i,
          newDragBoundaries: a
        } = em(H, X);
        eo(r, n, a, t), V({
          type: "ROTATE_IMAGE",
          imageTransformCoordinates: B.current,
          imageRotation: t,
          imageDimensions: e,
          cropDimensions: i,
          dragBoundaries: a
        })
      } else eo(r, n, z, t), V({
        type: "ROTATE_IMAGE",
        imageTransformCoordinates: B.current,
        imageRotation: t
      })
    }, [z, em, H, F, eo, X]),
    eh = i.useCallback(() => {
      if (null != k.current && null != H) {
        if (H.width !== H.height && (F - 0) % 180 != 0) {
          let {
            newImageDimensions: e,
            newCropDimensions: t,
            newDragBoundaries: r
          } = em(H, 1);
          V({
            type: "RESET",
            imageDimensions: e,
            cropDimensions: t,
            dragBoundaries: r
          }), eo(0, 0, r, 0)
        } else {
          let e = (0, A.kH)(+H.width, +H.height, U);
          V({
            type: "RESET",
            dragBoundaries: e
          }), eo(0, 0, e, 0)
        }
        ee(e => e + 1)
      }
    }, [U, em, H, F, eo]),
    ep = i.useCallback(() => {
      let e = v(M);
      return e.width !== e.height
    }, [M]),
    eE = i.useCallback(() => {
      if (null == H) return {};
      let e = H.width / H.height,
        t = ep() && e > O.MY ? U.height / H.height : 1,
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
        })(H, F);
      return {
        width: r * X * t,
        minWidth: r * X * t,
        height: n * X * t,
        minHeight: n * X * t
      }
    }, [U.height, H, F, ep, X]),
    eC = i.useCallback(async () => {
      let e;
      if (null == k.current) return;
      $(true);
      let r = k.current,
        n = v(M);
      if (en) try {
        let {
          result: i,
          cancelFn: a
        } = await (0, A.$p)({
          file: t,
          image: r,
          cropDimensions: U,
          cropOriginCoordinates: B.current,
          maxDimensions: n,
          imageRotation: F
        });
        P.current = a, e = await i, P.current = null
      } catch (e) {
        var i;
        throw null == (i = P.current) || i.call(P), P.current = null, Error("Error cropping GIF: ".concat(e instanceof Error ? e.toString() : String(e)))
      } else if (ei) {
        let r = btoa(String.fromCharCode(...new Uint8Array(await t.arrayBuffer())));
        e = "data:".concat(t.type, ";base64,").concat(r)
      } else e = (0, l.PT)({
        image: r,
        cropDimensions: U,
        cropOriginCoordinates: B.current,
        maxDimensions: n,
        imageRotation: F
      });
      await y({
        assetOrigin: function(e) {
          let {
            hasImageEdits: t,
            hasOriginalAsset: r
          } = e;
          return r ? t ? E.q.EDITED_ARCHIVED_ASSET : E.q.ARCHIVED_ASSET : E.q.NEW_ASSET
        }({
          hasImageEdits: Y,
          hasOriginalAsset: null != a
        }),
        imageUri: e,
        file: t,
        originalAsset: a
      }), $(false), await N()
    }, [U, t, Y, F, en, ei, N, y, a, M]),
    ef = i.useCallback(async () => {
      if (null != P.current) {
        P.current(), P.current = null, $(false);
        return
      }
      await N()
    }, [N]);
  i.useEffect(() => (window.addEventListener("mouseup", eu), window.addEventListener("resize", es), () => {
    window.removeEventListener("mouseup", eu), window.removeEventListener("resize", es)
  }), [es, eu]), i.useEffect(() => {
    if (K) return window.addEventListener("mousemove", ec), () => window.removeEventListener("mousemove", ec)
  }, [ec, K]), i.useEffect(() => {
    if (null != P.current) return () => {
      var e;
      return null == (e = P.current) ? true : e.call(P)
    }
  }, []);
  let eA = M === O.pC.AVATAR || M === O.pC.BANNER,
    eR = (0, h.M)(!eA);
  return (0, n.jsx)(m.Gt, {
    value: et,
    children: (0, n.jsxs)(c.Modal, {
      title: w.intl.string(w.t.DxAYCF),
      size: "md",
      actionBarInput: (0, n.jsx)(u.Avr, {
        text: w.intl.string(w.t.yBZMsQ),
        textVariant: "text-md/medium",
        onClick: eh,
        disabled: !Y
      }),
      actions: [{
        text: w.intl.string(w.t["9TG40l"]),
        onClick: ef,
        variant: "secondary"
      }, {
        text: w.intl.string(w.t.ZSHmKD),
        onClick: eC,
        variant: "primary",
        loading: q,
        disabled: ea
      }],
      transitionState: f,
      onClose: N,
      children: [S && !eR && (0, n.jsx)(g.Z, {
        type: M,
        analyticsPage: j,
        analyticsSection: D.jXE.CROP_GIF_MODAL,
        isGIF: en,
        banner: r
      }), (0, n.jsxs)("div", {
        className: b.modalContent,
        children: [(0, n.jsx)("div", {
          className: b.editingContainer,
          children: W ? (0, n.jsxs)("div", {
            className: b.errorContainer,
            children: [(0, n.jsx)(u.Mgn, {
              size: "sm",
              color: u.TVs.colors.TEXT_FEEDBACK_CRITICAL
            }), (0, n.jsx)(u.Text, {
              variant: "text-md/normal",
              color: "text-feedback-critical",
              children: w.intl.string(w.t["+ITMYX"])
            })]
          }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              onLoad: es,
              onError: () => J(true),
              style: T({
                opacity: +(null != H),
                transform: "translate3d(".concat(B.current.x, "px, ").concat(B.current.y, "px, 0) rotate(").concat(F, "deg)")
              }, eE()),
              className: o()(q ? b.imageDisabled : b.imageEnabled, b.rotationSupported),
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
                    return b.overlayGuildIcon;
                  case O.pC.BANNER:
                  case O.pC.GUILD_BANNER:
                  case O.pC.VIDEO_BACKGROUND:
                  case O.pC.SCHEDULED_EVENT_IMAGE:
                  case O.pC.HOME_HEADER:
                    return b.overlayBanner;
                  case O.pC.AVATAR:
                  case O.pC.AVATAR_DECORATION:
                    return b.overlayAvatar
                }
              }(M),
              style: {
                opacity: +(null != H),
                width: U.width,
                height: U.height
              }
            })]
          })
        }), (0, n.jsxs)("div", {
          className: b.toolsContainer,
          children: [(0, n.jsxs)("div", {
            className: b.zoomControls,
            children: [(0, n.jsx)(u.XBm, {
              size: "xxs",
              color: "currentColor",
              className: b.zoomIcon
            }), (0, n.jsx)(u.iRW, {
              className: b.slider,
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: ed,
              disabled: ea,
              equidistant: true,
              hideBubble: true,
              "aria-label": w.intl.string(w.t.dnvZSg)
            }, Q), (0, n.jsx)(u.XBm, {
              size: "md",
              color: "currentColor",
              className: b.zoomIcon
            })]
          }), (0, n.jsx)(u.aML, {
            "data-migration-pending": true,
            text: w.intl.string(w.t.E36Wd4),
            "aria-label": w.intl.string(w.t.LzFiKG),
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
              return (0, n.jsx)(u.P3F, _(T({
                className: o()(b.rotateButton, {
                  [b.disabled]: ea
                })
              }, r), {
                onClick: ea ? true : eg,
                "aria-disabled": ea,
                children: (0, n.jsx)(u.Vk2, {
                  size: "md",
                  color: "currentColor"
                })
              }))
            }
          })]
        }), S && eR && (0, n.jsx)(p.Z, {
          uploadType: M,
          analyticsSource: er,
          showUpsell: true,
          position: "inline",
          className: b.premiumUpsell,
          showShadow: false
        })]
      })]
    })
  })
}