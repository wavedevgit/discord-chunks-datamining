/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => Q
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(642128),
  a = n(442837),
  l = n(215569),
  o = n(481060),
  A = n(224706),
  c = n(425493),
  d = n(852860),
  u = n(493544),
  g = n(585483),
  f = n(931240),
  m = n(970606),
  p = n(389134),
  h = n(35313),
  C = n(94963),
  b = n(745628),
  v = n(950279),
  x = n(796918),
  N = n(513532),
  j = n(741595),
  E = n(974842),
  I = n(359380),
  O = n(308083),
  y = n(981631),
  w = n(231338),
  P = n(388032),
  B = n(73441);

function D(e) {
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

function T(e, t) {
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
let S = e => [{
    section: u.ID.HEADER,
    label: P.NW.string(P.t["7r0U+/"])
  }, {
    section: O.Wy.GAMES,
    label: P.NW.string(P.t["6umL+/"]),
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    section: O.Wy.PLAYSTYLE,
    label: P.NW.string(P.t.SWXqQE),
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    section: u.ID.DIVIDER
  }, {
    section: u.ID.HEADER,
    label: P.NW.string(P.t["eNC+OT"])
  }, {
    section: O.Wy.UTILITY_TRAITS,
    label: P.NW.string(P.t.oBixMj)
  }, {
    section: O.Wy.INTERESTS,
    label: P.NW.string(P.t.WqEH5O),
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    section: O.Wy.DESCRIPTION,
    label: P.NW.string(P.t.SnIjAQ),
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    section: u.ID.DIVIDER
  }, {
    section: u.ID.HEADER,
    label: P.NW.string(P.t.qEgjwM)
  }, {
    section: O.Wy.CUSTOMIZE_TAG_BADGE,
    label: P.NW.string(P.t.MuFv4e),
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    section: O.Wy.CUSTOMIZE_BANNER,
    label: P.NW.string(P.t["/A+uVF"]),
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    section: u.ID.DIVIDER
  }, {
    section: O.Wy.MEMBER_APPLICATION,
    label: P.NW.string(P.t.aOQWKi),
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }, {
    section: u.ID.DIVIDER
  }, {
    section: u.ID.CUSTOM,
    label: P.NW.string(P.t.vc5h39),
    element: L
  }],
  L = e => {
    let {
      guildId: t,
      onClose: s,
      dirty: a
    } = e, [l, A] = i.useState(!1), c = async () => {
      A(!0);
      try {
        await (0, f.nr)(t), s()
      } catch (e) {
        throw A(!1), e
      }
    };
    return (0, r.jsxs)(o.njP.Item, {
      selectedItem: !1,
      className: B.deleteItem,
      "aria-label": P.NW.string(P.t.vc5h39),
      onClick: () => {
        if (a) {
          g.S.dispatch(y.CkL.EMPHASIZE_NOTICE);
          return
        }(0, o.ZDy)(async () => {
          let {
            ConfirmModal: e
          } = await Promise.resolve().then(n.bind(n, 481060));
          return t => (0, r.jsx)(e, T(D({}, t), {
            header: P.NW.string(P.t.EXskgI),
            confirmText: P.NW.string(P.t["cY+Ooa"]),
            cancelText: P.NW.string(P.t["ETE/oK"]),
            loading: l,
            onConfirm: c,
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: P.NW.string(P.t.OsRkMz)
            })
          }))
        })
      },
      children: [(0, r.jsx)(o.XHJ, {
        size: "xs",
        color: "currentColor",
        className: B.statusDanger
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: P.NW.string(P.t.vc5h39)
      })]
    })
  },
  R = e => {
    let {
      isErrorVisible: t
    } = e, n = (0, o.dQu)(o.TVs.colors.HEADER_PRIMARY, w.BR.DARK), i = (0, o.dQu)(o.TVs.colors.TEXT_MUTED, w.BR.DARK);
    return t ? (0, r.jsxs)("div", {
      className: B.tooltipContents,
      children: [(0, r.jsx)(o.aNP, {
        size: "xs",
        color: "currentColor",
        className: B.errorIconTooltip
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          style: {
            color: n.hex()
          },
          children: P.NW.string(P.t.M6w76e)
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          style: {
            color: i.hex()
          },
          children: P.NW.string(P.t.pNtCgo)
        })]
      })]
    }) : null
  },
  Q = e => {
    let {
      guildId: t,
      onClose: n
    } = e, [w, L] = i.useState(O.Wy.GAMES), {
      initialSettings: Q,
      settings: W,
      errors: Z,
      submitting: k,
      dirty: M
    } = (0, a.cj)([p.Z], () => {
      var e;
      let t = p.Z.getState();
      return {
        initialSettings: t.initialSettings,
        settings: t.settings,
        errors: null !== (e = t.errors) && void 0 !== e ? e : {},
        submitting: t.submitting,
        dirty: t.dirty
      }
    }), _ = i.useCallback(e => {
      M ? g.S.dispatch(y.CkL.EMPHASIZE_NOTICE) : L(e)
    }, [M]), G = (0, h.f)(), F = i.useCallback(e => {
      "Escape" === e.key && (e.stopPropagation(), n())
    }, [n]);
    i.useEffect(() => {
      (0, m.GO)(t, (0, m.Qh)(w))
    }, [t, w]), i.useEffect(() => (window.addEventListener("keydown", F), () => {
      window.removeEventListener("keydown", F)
    }), [F]), i.useEffect(() => {
      A.Z.getDetectableGames()
    }, []), i.useEffect(() => {
      (0, f.aH)(t)
    }, [t]);
    let U = i.useCallback(e => (0, f.mf)(t, {
        gameApplicationIds: e
      }), [t]),
      H = i.useCallback(e => (0, f.mf)(t, {
        playstyle: e
      }), [t]),
      z = i.useCallback(e => (0, f.mf)(t, {
        interests: e
      }), [t]),
      X = i.useCallback(e => (0, f.mf)(t, e), [t]),
      Y = i.useCallback(() => {
        M ? g.S.dispatch(y.CkL.EMPHASIZE_NOTICE) : n()
      }, [M, n]),
      K = async () => {
        await (0, f.Ii)(t, W), (0, m.Af)(t)
      }, V = i.useMemo(() => null != Z && Object.values(Z).some(e => null != e), [Z]);
    if (null == W) return null;
    let J = S(Z);
    return (0, r.jsxs)(s.animated.div, {
      style: G,
      className: B.modal,
      children: [(0, r.jsx)(o.ua7, {
        color: o.ua7.Colors.GREY,
        tooltipClassName: B.tooltip,
        text: (0, r.jsx)(R, {
          isErrorVisible: V
        }),
        position: "left",
        "aria-label": null != V ? P.NW.string(P.t.M6w76e) : void 0,
        shouldShow: V,
        forceOpen: V,
        children: e => (0, r.jsx)(c.Z, T(D({}, e), {
          className: B.closeButton,
          closeAction: Y,
          keybind: "ESC"
        }))
      }), (0, r.jsxs)("div", {
        className: B.modalContents,
        children: [(0, r.jsx)("div", {
          className: B.sidebarWrapper,
          children: (0, r.jsx)(o.njP, {
            className: B.sidebar,
            selectedItem: w,
            onItemSelect: _,
            orientation: "vertical",
            children: J.map((e, i) => {
              switch (e.section) {
                case u.ID.HEADER:
                  return (0, r.jsx)(o.njP.Header, {
                    children: e.label
                  }, "header-".concat(i));
                case u.ID.DIVIDER:
                  return (0, r.jsx)(o.njP.Separator, {}, "divider-".concat(i));
                case u.ID.CUSTOM:
                  let s = e.element;
                  return (0, r.jsx)(s, {
                    dirty: M,
                    guildId: t,
                    onClose: n
                  }, e.label);
                default:
                  return (0, r.jsx)(o.njP.Item, {
                    className: B.settingsTab,
                    "aria-label": e.label,
                    id: e.section,
                    children: (0, r.jsxs)(r.Fragment, {
                      children: [e.label, e.hasError && (0, r.jsx)(o.ua7, {
                        color: o.ua7.Colors.GREY,
                        position: "right",
                        text: P.NW.string(P.t.M6w76e),
                        children: e => (0, r.jsx)(o.aNP, T(D({
                          size: "xs",
                          color: "currentColor"
                        }, e), {
                          className: B.errorIcon
                        }))
                      })]
                    })
                  }, e.section)
              }
            })
          })
        }), (0, r.jsxs)("div", {
          className: B.mainContent,
          children: [(0, r.jsx)(o.zJl, {
            children: (() => {
              switch (w) {
                case O.Wy.GAMES:
                  var e;
                  return (0, r.jsx)(v.Z, {
                    title: P.NW.string(P.t.t6Mbq6),
                    description: P.NW.string(P.t.E7Ymwc),
                    onUpdateGames: U,
                    gameApplicationIds: null !== (e = W.gameApplicationIds) && void 0 !== e ? e : new Set,
                    error: Z.gameApplicationIds,
                    guildId: t,
                    includeSuggestedGames: !0
                  });
                case O.Wy.PLAYSTYLE:
                  return (0, r.jsx)(j.Z, {
                    title: P.NW.string(P.t.W0h7pa),
                    description: P.NW.string(P.t.JHYekZ),
                    onUpdatePlaystyle: H,
                    playstyle: W.playstyle,
                    error: Z.playstyle
                  });
                case O.Wy.UTILITY_TRAITS:
                  return (0, r.jsx)(I.Z, {
                    guildId: t,
                    title: P.NW.string(P.t.G4tP09),
                    description: P.NW.string(P.t["6Eos19"]),
                    onUpdateTraits: z,
                    progress: W
                  });
                case O.Wy.INTERESTS:
                  return (0, r.jsx)(x.Z, {
                    guildId: t,
                    handleUpdate: X,
                    progress: W,
                    error: Z.interests
                  });
                case O.Wy.DESCRIPTION:
                  return (0, r.jsx)(b.Z, {
                    guildId: t,
                    handleUpdate: X,
                    progress: W,
                    errors: Z
                  });
                case O.Wy.CUSTOMIZE_TAG_BADGE:
                  return (0, r.jsx)(E.Z, {
                    handleUpdate: X,
                    tag: W.tag,
                    error: Z.tag,
                    badge: W.badgeKind,
                    primaryColor: W.badgePrimaryColor,
                    secondaryColor: W.badgeSecondaryColor,
                    furthestStep: O.Wy.CUSTOMIZE_TAG_BADGE,
                    inSettings: !0
                  });
                case O.Wy.MEMBER_APPLICATION:
                  return (0, r.jsx)(N.Z, {
                    guildId: t,
                    inSettings: !0,
                    error: Z.verificationForm
                  });
                case O.Wy.CUSTOMIZE_BANNER:
                  return (0, r.jsx)(C.Z, {
                    guildId: t,
                    handleUpdate: X,
                    progress: W
                  });
                default:
                  return null
              }
            })()
          }), (0, r.jsx)(l.W, {
            component: "div",
            children: M && (0, r.jsx)(o.oXn, {
              className: B.noticeRegion,
              children: (0, r.jsx)(d.Z, {
                onSave: K,
                submitting: k,
                onReset: () => {
                  (0, f.mf)(t, Q)
                },
                errorMessage: Object.values(Z).find(e => null != e)
              })
            })
          })]
        })]
      })]
    })
  }