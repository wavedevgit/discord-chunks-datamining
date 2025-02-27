/** Chunk was on 55849 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(442837),
  i = n(481060),
  o = n(100527),
  s = n(906732),
  c = n(807582),
  u = n(813197),
  d = n(222062),
  f = n(530329),
  p = n(430824),
  m = n(914010),
  g = n(594174),
  b = n(451478),
  j = n(626135),
  x = n(74538),
  h = n(621961),
  y = n(884858),
  O = n(981631),
  v = n(486324),
  C = n(869783),
  A = n(388032),
  N = n(768076);

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
let S = [{
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

function P(e) {
  let {
    shouldAnimate: t = !0
  } = e, [n, a] = l.useState(!1);
  return (0, r.jsx)("div", {
    className: N.gifGrid,
    onMouseMove: () => a(!0),
    onMouseLeave: () => a(!1),
    children: S.map(e => (0, r.jsx)("div", {
      className: N.gif,
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
    className: N.pillWrapper,
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
    className: N.optionBoxText,
    children: [(0, r.jsx)(w, {
      guild: n,
      guildFeature: (0, h.C6)(t, {
        isGIF: !0
      })
    }), (0, r.jsxs)("div", {
      className: N.optionBoxDescription,
      children: [(0, h.Kq)(t) && (0, r.jsx)(i.DY3, {
        className: N.nitroWheelFlairContainer,
        text: A.NW.string(A.t["5AFxuL"]),
        children: (0, r.jsx)(i.SrA, {
          size: "md",
          color: "currentColor",
          className: N.nitroWheelFlair
        })
      }), A.NW.string(A.t["xsC+//"])]
    })]
  })
}

function F(e) {
  let {
    title: t,
    uploadType: n,
    guild: l
  } = e;
  return (0, r.jsxs)("div", {
    className: N.optionBoxText,
    children: [(0, r.jsx)(w, {
      guildFeature: (0, h.C6)(n, {
        isGIF: !1
      }),
      guild: l
    }), (0, r.jsxs)("div", {
      className: N.optionBoxDescription,
      children: [n === v.pC.BANNER && (0, r.jsx)(i.DY3, {
        className: N.nitroWheelFlairContainer,
        text: A.NW.string(A.t["5AFxuL"]),
        children: (0, r.jsx)(i.SrA, {
          size: "md",
          color: "currentColor",
          className: N.nitroWheelFlair
        })
      }), t]
    })]
  })
}

function _(e) {
  let {
    transitionState: t,
    onClose: c,
    onComplete: h,
    uploadType: S,
    maxFileSizeBytes: w,
    showUpsellHeader: _,
    filters: R,
    analyticsLocation: Z,
    analyticsLocations: L = [],
    modalSubTitle: k,
    imageSpecifications: I,
    modalTitle: U = A.NW.string(A.t.DToW4e),
    uploadOptionTitle: D = A.NW.string(A.t["MsUY/f"])
  } = e, M = (0, a.e7)([b.Z], () => b.Z.isFocused()), W = (0, a.e7)([g.default], () => g.default.getCurrentUser()), B = (0, a.e7)([m.Z], () => m.Z.getGuildId()), H = (0, a.e7)([p.Z], () => p.Z.getGuild(B)), {
    reducedMotion: z
  } = l.useContext(i.Sfi), G = (0, i.vRw)(), V = !x.ZP.canUseAnimatedAvatar(W) && S === v.pC.AVATAR, {
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
  l.useEffect(() => {
    V && j.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
      type: O.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: X
    }), j.default.track(O.rMx.OPEN_MODAL, {
      type: O.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: Z
    })
  }, [V, Z, X]);
  let Y = S === v.pC.AVATAR || S === v.pC.BANNER,
    J = (0, d.M)(!Y);
  return (0, r.jsxs)(i.Y0X, {
    transitionState: t,
    size: i.CgR.SMALL,
    children: [(0, r.jsxs)(i.xBx, {
      className: N.modalHeader,
      separator: !1,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(i.vwX, {
          tag: i.RB0.H1,
          className: N.modalTitle,
          children: U
        }), null != k ? (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: k
        }) : null]
      }), (0, r.jsx)(i.olH, {
        onClick: c,
        className: N.modalCloseButton
      })]
    }), (0, r.jsxs)(i.hzk, {
      className: N.modalContent,
      children: [(0, r.jsxs)("div", {
        className: N.imagePickerContainer,
        children: [(0, r.jsxs)(i.P3F, {
          className: N.optionBox,
          children: [(0, r.jsx)("div", {
            className: N.contentCircle,
            children: (0, r.jsx)(i.FmF, {
              size: "md",
              color: "currentColor",
              className: N.uploadIcon
            })
          }), (0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(F, {
              title: D,
              uploadType: S,
              guild: H
            })
          }), (0, r.jsx)(u.ZP, {
            onChange: function(e, t) {
              if (t.type === C.m.MP4) return q({
                imageUri: e,
                file: t
              });
              (0, i.ZDy)(async () => {
                let {
                  default: l
                } = await n.e("48017").then(n.bind(n, 850085));
                return n => (0, r.jsx)(l, E({
                  imageUri: e,
                  file: t,
                  onCrop: q,
                  uploadType: S,
                  showUpsellHeader: _,
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
            filters: R
          })]
        }), (0, r.jsxs)(i.P3F, {
          className: N.optionBox,
          onClick: function() {
            (0, i.ZDy)(async () => {
              let {
                default: e
              } = await n.e("72891").then(n.bind(n, 195297));
              return t => (0, r.jsx)(e, E({
                uploadType: S,
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
                showUpsellHeader: _,
                analyticsPage: null == Z ? void 0 : Z.page
              }, t))
            }, {
              contextKey: G
            })
          },
          children: [(0, r.jsxs)("div", {
            className: N.contentCircle,
            children: [(0, r.jsx)(P, {
              shouldAnimate: M && !z.enabled
            }), (0, r.jsx)("div", {
              className: N.gifIconContainer,
              children: (0, r.jsx)(i.OUq, {
                size: "custom",
                width: 29,
                height: 29,
                color: "currentColor",
                className: N.gifIcon
              })
            })]
          }), (0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(T, {
              uploadType: S,
              guild: H
            })
          })]
        })]
      }), null != I ? (0, r.jsx)(i.Text, {
        className: N.imageSpecifications,
        variant: "text-sm/normal",
        children: I
      }) : null, _ && J && (0, r.jsx)(f.Z, {
        uploadType: S,
        showUpsell: !0,
        position: "inline",
        showShadow: !1,
        className: N.nitroUpsell
      })]
    })]
  })
}