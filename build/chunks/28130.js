/** Chunk was on 55849 **/
n.d(t, {
  Z: () => R
}), n(47120);
var r = n(200651),
  a = n(192379),
  l = n(442837),
  i = n(481060),
  o = n(100527),
  s = n(906732),
  c = n(807582),
  u = n(813197),
  d = n(222062),
  p = n(530329),
  f = n(430824),
  m = n(914010),
  g = n(594174),
  j = n(451478),
  b = n(626135),
  x = n(74538),
  h = n(621961),
  y = n(884858),
  O = n(981631),
  v = n(486324),
  N = n(869783),
  A = n(388032),
  C = n(69270);

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let P = [{
  gif: n(495682),
  png: n(458060)
}, {
  gif: n(842786),
  png: n(460790)
}, {
  gif: n(578831),
  png: n(642193)
}, {
  gif: n(145908),
  png: n(690695)
}];

function S(e) {
  let {
    shouldAnimate: t = !0
  } = e, [n, l] = a.useState(!1);
  return (0, r.jsx)("div", {
    className: C.gifGrid,
    onMouseMove: () => l(!0),
    onMouseLeave: () => l(!1),
    children: P.map(e => (0, r.jsx)("div", {
      className: C.gif,
      style: {
        backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function w(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  return null == t || null == n ? null : (0, r.jsx)("div", {
    className: C.pillWrapper,
    children: (0, r.jsx)(c.Z, {
      guildFeature: t,
      guild: n,
      hideTooltip: !0
    })
  })
}

function T(e) {
  let {
    uploadType: t,
    guild: n
  } = e;
  return (0, r.jsxs)("div", {
    className: C.optionBoxText,
    children: [(0, r.jsx)(w, {
      guild: n,
      guildFeature: (0, h.C6)(t, {
        isGIF: !0
      })
    }), (0, r.jsxs)("div", {
      className: C.optionBoxDescription,
      children: [(0, h.Kq)(t) && (0, r.jsx)(i.DY3, {
        className: C.nitroWheelFlairContainer,
        text: A.NW.string(A.t["5AFxuL"]),
        children: (0, r.jsx)(i.SrA, {
          size: "md",
          color: "currentColor",
          className: C.nitroWheelFlair
        })
      }), A.NW.string(A.t["xsC+//"])]
    })]
  })
}

function F(e) {
  let {
    title: t,
    uploadType: n,
    guild: a
  } = e;
  return (0, r.jsxs)("div", {
    className: C.optionBoxText,
    children: [(0, r.jsx)(w, {
      guildFeature: (0, h.C6)(n, {
        isGIF: !1
      }),
      guild: a
    }), (0, r.jsxs)("div", {
      className: C.optionBoxDescription,
      children: [n === v.pC.BANNER && (0, r.jsx)(i.DY3, {
        className: C.nitroWheelFlairContainer,
        text: A.NW.string(A.t["5AFxuL"]),
        children: (0, r.jsx)(i.SrA, {
          size: "md",
          color: "currentColor",
          className: C.nitroWheelFlair
        })
      }), t]
    })]
  })
}

function R(e) {
  let {
    transitionState: t,
    onClose: c,
    onComplete: h,
    uploadType: P,
    maxFileSizeBytes: w,
    showUpsellHeader: R,
    filters: _,
    analyticsLocation: Z,
    analyticsLocations: L = [],
    modalSubTitle: D,
    imageSpecifications: I,
    modalTitle: k = A.NW.string(A.t.DToW4e),
    uploadOptionTitle: U = A.NW.string(A.t["MsUY/f"])
  } = e, W = (0, l.e7)([j.Z], () => j.Z.isFocused()), M = (0, l.e7)([g.default], () => g.default.getCurrentUser()), B = (0, l.e7)([m.Z], () => m.Z.getGuildId()), H = (0, l.e7)([f.Z], () => f.Z.getGuild(B)), {
    reducedMotion: z
  } = a.useContext(i.Sfi), G = (0, i.vRw)(), V = !x.ZP.canUseAnimatedAvatar(M) && P === v.pC.AVATAR, {
    analyticsLocations: X
  } = (0, s.ZP)(L, o.Z.SELECT_IMAGE_MODAL);

  function q(e) {
    let {
      imageUri: t,
      file: n,
      isFromTenor: r = !1
    } = e;
    c(), h({
      imageUri: t,
      file: n,
      isFromTenor: r
    })
  }
  a.useEffect(() => {
    V && b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
      type: O.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: X
    }), b.default.track(O.rMx.OPEN_MODAL, {
      type: O.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: Z
    })
  }, [V, Z, X]);
  let Y = P === v.pC.AVATAR || P === v.pC.BANNER,
    J = (0, d.M)(!Y);
  return (0, r.jsxs)(i.Y0X, {
    transitionState: t,
    size: i.CgR.SMALL,
    children: [(0, r.jsxs)(i.xBx, {
      className: C.modalHeader,
      separator: !1,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(i.vwX, {
          tag: i.RB0.H1,
          className: C.modalTitle,
          children: k
        }), null != D ? (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: D
        }) : null]
      }), (0, r.jsx)(i.olH, {
        onClick: c,
        className: C.modalCloseButton
      })]
    }), (0, r.jsxs)(i.hzk, {
      className: C.modalContent,
      children: [(0, r.jsxs)("div", {
        className: C.imagePickerContainer,
        children: [(0, r.jsxs)(i.P3F, {
          className: C.optionBox,
          children: [(0, r.jsx)("div", {
            className: C.contentCircle,
            children: (0, r.jsx)(i.FmF, {
              size: "md",
              color: "currentColor",
              className: C.uploadIcon
            })
          }), (0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(F, {
              title: U,
              uploadType: P,
              guild: H
            })
          }), (0, r.jsx)(u.ZP, {
            onChange: function(e, t) {
              if (t.type === N.m.MP4) return q({
                imageUri: e,
                file: t
              });
              (0, i.ZDy)(async () => {
                let {
                  default: a
                } = await n.e("48017").then(n.bind(n, 850085));
                return n => (0, r.jsx)(a, E({
                  imageUri: e,
                  file: t,
                  onCrop: q,
                  uploadType: P,
                  showUpsellHeader: R,
                  allowSkip: !0,
                  analyticsPage: null == Z ? void 0 : Z.page
                }, n))
              }, {
                contextKey: G
              })
            },
            maxFileSizeBytes: w,
            onFileSizeError: function() {
              c(), (0, y.Z)(w)
            },
            filters: _
          })]
        }), (0, r.jsxs)(i.P3F, {
          className: C.optionBox,
          onClick: function() {
            (0, i.ZDy)(async () => {
              let {
                default: e
              } = await n.e("72891").then(n.bind(n, 195297));
              return t => (0, r.jsx)(e, E({
                uploadType: P,
                onComplete: e => {
                  let {
                    imageUri: t,
                    file: n
                  } = e;
                  return q({
                    imageUri: t,
                    file: n,
                    isFromTenor: !0
                  })
                },
                showUpsellHeader: R,
                analyticsPage: null == Z ? void 0 : Z.page
              }, t))
            }, {
              contextKey: G
            })
          },
          children: [(0, r.jsxs)("div", {
            className: C.contentCircle,
            children: [(0, r.jsx)(S, {
              shouldAnimate: W && !z.enabled
            }), (0, r.jsx)("div", {
              className: C.gifIconContainer,
              children: (0, r.jsx)(i.OUq, {
                size: "custom",
                width: 29,
                height: 29,
                color: "currentColor",
                className: C.gifIcon
              })
            })]
          }), (0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(T, {
              uploadType: P,
              guild: H
            })
          })]
        })]
      }), null != I ? (0, r.jsx)(i.Text, {
        className: C.imageSpecifications,
        variant: "text-sm/normal",
        children: I
      }) : null, R && J && (0, r.jsx)(p.Z, {
        uploadType: P,
        showUpsell: !0,
        position: "inline",
        showShadow: !1,
        className: C.nitroUpsell
      })]
    })]
  })
}