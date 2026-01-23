/** Chunk was on 22477 **/
/** chunk id: 449630, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => el
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk395332 = require("./395332.js"),
  Chunk713517 = require("./713517.js"),
  Chunk576241 = require("./576241.js"),
  Chunk645507 = require("./645507.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk970931 = require("./970931.js"),
  Chunk258836 = require("./258836.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk657331 = require("./657331.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk223330 = require("./223330.jsx"),
  Chunk559506 = require("./559506.jsx"),
  Chunk646986 = require("./646986.jsx"),
  Chunk379654 = require("./379654.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk376285 = require("./376285.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk442228 = require("./442228.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk290863 = require("./290863.js"),
  Chunk351906 = require("./351906.js"),
  Chunk957565 = require("./957565.js"),
  Chunk562153 = require("./562153.js"),
  Chunk927578 = require("./927578.js"),
  Chunk832248 = require("./832248.js"),
  Chunk962303 = require("./962303.jsx"),
  Chunk163233 = require("./163233.jsx"),
  Chunk95551 = require("./95551.jsx"),
  Chunk471303 = require("./471303.jsx"),
  Chunk740142 = require("./740142.jsx"),
  Chunk33042 = require("./33042.jsx"),
  Chunk347853 = require("./347853.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk423648 = require("./423648.js"),
  Chunk183959 = require("./183959.js");

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function el(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: el,
    highlightBadge: er,
    openedAt: ei
  } = e, es = __OVERLAY__, eo = (0, A.Ay)(t.id, true), {
    analyticsLocations: ec
  } = (0, m.Ay)(u.A.USER_PROFILE_ACCOUNT_POPOUT), ed = (0, y.pb)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: true
  }), {
    ref: eu,
    height: em
  } = (0, d.Ay)(), {
    isHoveringOrFocusing: ep,
    isHovering: eh
  } = (0, h.A)(eu);
  l.useEffect(() => {
    null == el || el(eu.current)
  }, [eu, el]), l.useEffect(() => (W.A.setState({
    isOpen: true
  }), () => W.A.setState({
    isOpen: false
  })), []);
  let ex = (0, s.bG)([U.A], () => U.A.getStatus(t.id)),
    eg = L.CY.useSetting(),
    ef = (0, Y.Q)(eg),
    eb = (0, s.bG)([B.A], () => B.A.hidePersonalInformation),
    ev = (0, b.kB)(),
    ej = L.Q_.useSetting(),
    e_ = (0, Y.T)(ex),
    ey = (0, H.j)(n),
    eA = (0, j.A)({
      analyticsLocations: ec
    }),
    eC = (0, V.TW)(t),
    eS = (0, x.h)({
      location: "UserProfileAccountPopout"
    }),
    eO = l.useRef(null),
    eE = l.useRef(null),
    eT = l.useRef((0, W.A)(e => e.shouldRenderTenureLevelUp)),
    eN = l.useMemo(() => (0, g.A)(), []),
    [ew, eI] = l.useState(true);
  l.useEffect(() => {
    setTimeout(() => {
      eI(false)
    }, 500)
  }, []);
  let ek = e => {
      null == n || n(), (0, C.openUserProfileModal)(ea({
        customStatusPrompt: eN,
        sourceAnalyticsLocations: ec
      }, ed, e))
    },
    eP = (null == eo ? true : eo.widgets) != null && eo.widgets.length > 0,
    eR = eP ? [] : [o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eD, eM] = (0, f.kn)(eR),
    eL = eD === o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eU = l.useCallback(() => {
      eM(Z.i.USER_DISMISS), n()
    }, [eM, n]),
    eB = l.useCallback(() => {
      eA(), eU()
    }, [eA, eU]),
    eG = (0, p.JY)({
      location: "UserProfileAccountPopout"
    }),
    eF = (0, p.on)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.f5, {
    value: ec,
    children: (0, a.jsx)(y.of, {
      value: ed,
      openedAt: ei,
      fetchStartedAt: null == eo ? true : eo.fetchStartedAt,
      fetchEndedAt: null == eo ? true : eo.fetchEndedAt,
      isLoaded: null == eo ? true : eo.isLoaded,
      children: (0, a.jsxs)(c.lGe, {
        ref: eu,
        "aria-label": t.username,
        className: et.jC,
        "data-layer": "base",
        children: [(0, a.jsx)(Q.A, {
          displayProfile: eo,
          handleOpenUserProfileModal: ek,
          height: em
        }), (0, a.jsxs)(k.A, {
          className: et.BK,
          user: t,
          displayProfile: eo,
          themeType: $.d.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: en.wx,
            children: [(0, a.jsx)(E.A, {
              user: t,
              displayProfile: eo,
              themeType: $.d.POPOUT
            }), (0, a.jsx)(S.A, {
              user: t,
              displayProfile: eo,
              themeType: $.d.POPOUT,
              onOpenProfile: es ? true : ek
            }), (0, a.jsx)(D.A, {
              ref: eO,
              user: t,
              themeType: $.d.POPOUT,
              onCloseProfile: n,
              prompt: eS ? eN : null
            })]
          }), (0, a.jsxs)(c.HOs, {
            className: et.rf,
            style: {
              pointerEvents: ew ? "none" : true
            },
            children: [(0, a.jsx)(N.A, {
              userId: t.id
            }), (0, a.jsx)(P.A, {
              user: t,
              className: et.Xh,
              nickname: F.Ay.getName(true, null, t),
              onOpenProfile: es ? true : ek,
              pronouns: null == eo ? true : eo.pronouns,
              tags: (0, a.jsx)(O.A, {
                displayProfile: eo,
                themeType: $.d.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != er ? e => e === er : true,
                shouldGlowTenureBadge: eT.current
              }),
              nicknameIcons: (0, a.jsx)(R.A, {
                user: t,
                isVisible: ep
              })
            }), (0, a.jsx)(M.A, {
              user: t,
              bio: null == eo ? true : eo.bio,
              hidePersonalInformation: eb,
              onClose: n
            }), eP && (0, a.jsx)(I.A, {
              user: t,
              widgets: null == eo ? true : eo.widgets,
              onOpenUserProfileModal: ek
            }), (0, a.jsx)(T.A, {
              isPremiumUser: eC,
              onInteraction: n
            }), (0, a.jsx)(w.A, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: ek,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: et.T_,
              children: [(0, a.jsx)(k.A.Overlay, {
                className: et.g0,
                children: (0, a.jsxs)(z.Gs, {
                  children: [(0, a.jsx)(z.N3, {
                    action: "EDIT_PROFILE",
                    label: ee.intl.string(ee.t.s5vZlQ),
                    icon: c.R2l,
                    onClick: eB,
                    trailing: eL ? (0, a.jsx)(c.LpS, {
                      text: ee.intl.string(ee.t.y2b7CA)
                    }) : true,
                    ref: eE
                  }), (0, a.jsx)(z.N3, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(q.A, {}),
                    sublabel: null != ef && ef,
                    icon: () => (0, a.jsx)(c.nW6, {
                      status: ex,
                      size: 12
                    }),
                    trailing: (ev || ex === X.clD.DND) && (0, a.jsx)(c.a_I, {
                      size: "xxs"
                    }),
                    renderSubmenu: r.Fr ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(z.eE, {
                        navId: "set-status-submenu",
                        className: et.hQ,
                        "aria-label": ee.intl.string(ee.t.E13trI),
                        onClose: t,
                        children: e_
                      })
                    },
                    onClick: r.Fr ? () => {
                      n(), (0, c.mMO)(() => new Promise(e => e(e => {
                        var t, n;
                        let {
                          onClose: l
                        } = e, r = function(e, t) {
                          if (null == e) return {};
                          var n, a, l, r = {};
                          if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
                            return r
                          }
                          if (r = function(e, t) {
                              if (null == e) return {};
                              var n, a, l = {},
                                r = Object.getOwnPropertyNames(e);
                              for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                              return l
                            }(e, t), Object.getOwnPropertySymbols)
                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
                          return r
                        }(e, ["onClose"]);
                        return (0, a.jsx)(i.dWK, (t = ea({
                          onClose: l
                        }, r), n = n = {
                          size: "sm",
                          "aria-label": ee.intl.string(ee.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.W1t, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ee.intl.string(ee.t.E13trI),
                            className: et.YS,
                            hideScroller: true,
                            onClose: l,
                            onSelect: true,
                            children: e_
                          })
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, a)
                          }
                          return n
                        })(Object(n)).forEach(function(e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }), t))
                      })))
                    } : true
                  })]
                })
              }), (0, a.jsx)(k.A.Overlay, {
                className: et.g0,
                children: (0, a.jsxs)(z.Gs, {
                  children: [(0, a.jsx)(z.N3, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.rMq,
                    label: ee.intl.string(ee.t.oMNyYN),
                    onClick: () => {
                      n(), (0, J.A)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(z.eE, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ee.intl.string(ee.t.wFhVqL),
                        onClose: t,
                        children: ey
                      })
                    }
                  }), !__OVERLAY__ && G.p5 && ej && (0, a.jsx)(z.N3, {
                    action: "COPY_USER_ID",
                    icon: c.L9S,
                    label: ee.intl.string(ee.t["/AXYnE"]),
                    onClick: () => {
                      (0, G.C)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == eo ? true : eo.profileEffect) != null && !eT.current && (0, a.jsx)(_.A, {
            skuId: eo.profileEffect.skuId,
            isHovering: eh
          })]
        }), eG && eF ? (0, a.jsx)(K.A, {
          targetElementRef: eE,
          onClose: n
        }) : null, (0, a.jsx)(v.A, {})]
      })
    })
  })
}