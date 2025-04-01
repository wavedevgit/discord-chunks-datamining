/** Chunk was on 31649 **/
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  a = n.n(l),
  o = n(442837),
  s = n(481060),
  u = n(596454),
  c = n(493773),
  d = n(100527),
  p = n(318766),
  m = n(907040),
  h = n(594174),
  f = n(626135),
  b = n(368326),
  j = n(720449),
  v = n(684269),
  x = n(429467),
  S = n(676035),
  g = n(926563),
  O = n(875425),
  y = n(981631),
  _ = n(185923),
  N = n(388032),
  C = n(667333);

function w(e) {
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

function I(e, t) {
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
let P = [O.HO.ADD_STATUS, O.HO.WHATS_ON_YOUR_MIND];

function k(e) {
  var t, n;
  let {
    transitionState: l,
    onClose: k,
    sourceAnalyticsContext: E,
    sourceAnalyticsLocations: T,
    prompt: D = null
  } = e, B = (0, b.p)({
    location: "CustomStatusModalWithPreview"
  }), Z = (0, o.e7)([h.default], () => {
    var e;
    return null !== (e = h.default.getCurrentUser()) && void 0 !== e ? e : null
  }), A = (0, S.a)(), [z, M] = i.useState(null !== (t = null == A ? void 0 : A.state) && void 0 !== t ? t : ""), [W, R] = i.useState(null !== (n = null == A ? void 0 : A.emoji) && void 0 !== n ? n : null), [L, U] = i.useState((0, v.Z)()), H = i.useRef(null), F = i.useRef(null), [Y, K] = i.useState(null != D ? D : null), q = z.length > 0 || null != W, G = B && null != Y ? Y.label() : N.NW.string(N.t["xod36+"]);
  i.useEffect(() => {
    f.default.track(y.rMx.OPEN_MODAL, {
      type: d.Z.CUSTOM_STATUS_MODAL,
      location_stack: T
    })
  }, [T]), (0, c.ZP)(() => {
    var e, t;
    null === (e = H.current) || void 0 === e || e.focus(), null === (t = H.current) || void 0 === t || t.setSelection(z.length, z.length)
  });
  let V = e => {
      null != e && R(null != e.id ? {
        id: e.id,
        name: e.name,
        animated: e.animated
      } : {
        id: null,
        name: e.optionallyDiverseSequence,
        animated: !1
      })
    },
    X = () => {
      (0, j.Z)({
        text: z,
        emojiInfo: W,
        clearAfter: L,
        analyticsContext: E,
        prompt: Y
      }), k()
    },
    $ = () => null == W ? null : () => (0, r.jsx)(u.Z, {
      className: C.emoji,
      emojiId: W.id,
      emojiName: W.name,
      animated: !!W.animated
    }),
    Q = B ? N.NW.string(N.t.rp0aho) : N.NW.string(N.t.UcdRn5),
    J = "custom-status-placeholder-text";
  return (0, r.jsxs)(s.Y0X, {
    transitionState: l,
    children: [(0, r.jsxs)(s.xBx, {
      separator: !1,
      className: C.header,
      children: [(0, r.jsx)("div", {
        className: C.headerTitle,
        children: (0, r.jsx)(s.X6q, {
          variant: "heading-xl/semibold",
          children: N.NW.string(N.t.Zx4jzM)
        })
      }), (0, r.jsx)("div", {
        className: C.headerCloseButton,
        children: (0, r.jsx)(s.olH, {
          onClick: k
        })
      })]
    }), (0, r.jsxs)(s.hzk, {
      children: [null != Z && (0, r.jsx)("div", {
        className: C.profilePreview,
        children: (0, r.jsx)(g.Z, {
          user: Z,
          previewText: z,
          previewEmoji: W,
          placeHolderText: G,
          transitionState: l
        })
      }), (0, r.jsxs)(s.hjN, {
        className: C.formGroup,
        titleClassName: C.customStatusInputTitle,
        title: Q,
        children: [(0, r.jsxs)("div", {
          className: C.inputContainer,
          children: [(0, r.jsx)("div", {
            className: C.emojiButtonContainer,
            children: (0, r.jsx)(s.yRy, {
              targetElementRef: F,
              renderPopout: e => {
                let {
                  closePopout: t
                } = e;
                return (0, r.jsx)(m.Z, {
                  closePopout: t,
                  onSelectEmoji: (e, n) => {
                    V(e), n && t()
                  },
                  pickerIntention: _.Hz.STATUS,
                  onNavigateAway: k
                })
              },
              position: "left",
              animation: s.yRy.Animation.NONE,
              align: "top",
              children: (e, t) => {
                let {
                  isShown: n
                } = t;
                return (0, r.jsx)(p.Z, I(w({}, e), {
                  ref: F,
                  active: n,
                  className: C.emojiButton,
                  tabIndex: 0,
                  renderButtonContents: $()
                }))
              }
            })
          }), (0, r.jsx)(s.Kx8, {
            autosize: !0,
            "aria-describedby": J,
            value: z,
            maxLength: O.s0,
            rows: 1,
            showRemainingCharacterCount: !1,
            placeholder: null != G ? G : void 0,
            onChange: e => {
              M(e)
            },
            onKeyDown: e => {
              "Enter" === e.key && X()
            },
            className: C.input,
            inputRef: H
          }), (0, r.jsx)(s.nn4, {
            id: J,
            children: "".concat(N.NW.string(N.t.EVV6ub), ": ").concat(G)
          }), (z.length > 0 || null != W) && (0, r.jsx)("div", {
            className: C.clearButtonWrapper,
            children: (0, r.jsx)(s.zxk, {
              focusProps: {
                offset: {
                  top: 8,
                  bottom: 8,
                  left: -2,
                  right: -2
                }
              },
              className: C.clearButton,
              onClick: () => {
                M(""), R(null)
              },
              look: s.zxk.Looks.BLANK,
              size: s.zxk.Sizes.NONE,
              children: (0, r.jsx)(s.k$p, {
                size: "md",
                color: "currentColor",
                className: C.clearIcon
              })
            })
          })]
        }), B && (0, r.jsxs)(s.P3F, {
          ignoreKeyPress: q,
          "aria-disabled": q,
          className: a()(C.needInspiration, q && C.needInspirationDisabled),
          onClick: q ? void 0 : () => {
            let e = (0, x.Z)((null == Y ? void 0 : Y.value) != null ? new Set([Y.value, ...P]) : void 0);
            f.default.track(y.rMx.CUSTOM_STATUS_RANDOMIZER_CLICKED, {
              previous_prompt_type: null == Y ? void 0 : Y.value,
              new_prompt_type: null == e ? void 0 : e.value,
              location_stack: T
            }), M(""), K(e), null != e && s.uvj.announce(e.label())
          },
          children: [(0, r.jsx)(s.$2U, {
            size: "xs"
          }), (0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            children: N.NW.string(N.t.UH6ieX)
          })]
        })]
      })]
    }), (0, r.jsx)(s.mzw, {
      children: (0, r.jsxs)("div", {
        className: C.footer,
        children: [(0, r.jsx)("div", {
          className: C.clearAfterSelectContainer,
          children: (0, r.jsx)(s.q4e, {
            maxVisibleItems: O.Q9.length,
            value: L,
            options: O.Q9.map(e => I(w({}, e), {
              key: e.value,
              value: e.value,
              label: e.label()
            })),
            onChange: U,
            look: s.qQH.CUSTOM,
            popoutWidth: 200,
            popoutPosition: "right"
          })
        }), (0, r.jsx)(s.zxk, {
          type: "submit",
          size: s.zxk.Sizes.MEDIUM,
          color: s.zxk.Colors.BRAND,
          onClick: X,
          children: N.NW.string(N.t.R3BPHx)
        })]
      })
    })]
  })
}