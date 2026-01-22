/** Chunk was on 22477 **/
/** chunk id: 449630, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ei
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
  Chunk115660 = require("./115660.jsx"),
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

function el(e) {
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

function ei(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: ei,
    highlightBadge: er,
    openedAt: es,
    guildId: eo,
    guildProfileEnabled: ec
  } = e, ed = __OVERLAY__, eu = (0, A.Ay)(t.id, eo), {
    analyticsLocations: em
  } = (0, m.Ay)(u.A.USER_PROFILE_ACCOUNT_POPOUT), ep = (0, _.pb)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: eo
  }), {
    ref: eh,
    height: ef
  } = (0, d.Ay)(), {
    isHoveringOrFocusing: ex,
    isHovering: eb
  } = (0, h.A)(eh);
  l.useEffect(() => {
    null == ei || ei(eh.current)
  }, [eh, ei]), l.useEffect(() => (H.A.setState({
    isOpen: true
  }), () => H.A.setState({
    isOpen: false
  })), []);
  let eg = (0, s.bG)([U.A], () => U.A.getStatus(t.id)),
    ev = L.CY.useSetting(),
    ej = (0, J.Q)(ev),
    ey = (0, s.bG)([B.A], () => B.A.hidePersonalInformation),
    e_ = (0, g.kB)(),
    eA = L.Q_.useSetting(),
    eC = (0, J.T)(eg),
    eS = (0, K.j)(n),
    eO = (0, j.A)({
      analyticsLocations: em
    }),
    eE = (0, V.TW)(t),
    eN = (0, f.h)({
      location: "UserProfileAccountPopout"
    }),
    eT = l.useRef(null),
    eI = l.useRef(null),
    ew = l.useRef((0, H.A)(e => e.shouldRenderTenureLevelUp)),
    ek = l.useMemo(() => (0, x.A)(), []),
    [eP, eR] = l.useState(true);
  l.useEffect(() => {
    setTimeout(() => {
      eR(false)
    }, 500)
  }, []);
  let eD = e => {
      null == n || n(), (0, C.openUserProfileModal)(el({
        customStatusPrompt: ek,
        sourceAnalyticsLocations: em
      }, ep, e))
    },
    eM = (null == eu ? true : eu.widgets) != null && eu.widgets.length > 0,
    eL = eM ? [] : [o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eU, eB] = (0, b.kn)(eL),
    eG = eU === o.M.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eF = l.useCallback(() => {
      eB(Z.i.USER_DISMISS), n()
    }, [eB, n]),
    eV = l.useCallback(() => {
      ec && null != eo || (eO(), eF())
    }, [eO, eF, ec, eo]),
    eH = ec && null != eo,
    eW = (0, W.g)(eo, em, eG, n, eF),
    eK = (0, p.JY)({
      location: "UserProfileAccountPopout"
    }),
    ez = (0, p.on)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.f5, {
    value: em,
    children: (0, a.jsx)(_.of, {
      value: ep,
      openedAt: es,
      fetchStartedAt: null == eu ? true : eu.fetchStartedAt,
      fetchEndedAt: null == eu ? true : eu.fetchEndedAt,
      isLoaded: null == eu ? true : eu.isLoaded,
      children: (0, a.jsxs)(c.lGe, {
        ref: eh,
        "aria-label": t.username,
        className: en.jC,
        "data-layer": "base",
        children: [(0, a.jsx)(Y.A, {
          displayProfile: eu,
          handleOpenUserProfileModal: eD,
          height: ef
        }), (0, a.jsxs)(k.A, {
          className: en.BK,
          user: t,
          displayProfile: eu,
          themeType: ee.d.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: ea.wx,
            children: [(0, a.jsx)(E.A, {
              user: t,
              displayProfile: eu,
              themeType: ee.d.POPOUT
            }), (0, a.jsx)(S.A, {
              user: t,
              displayProfile: eu,
              themeType: ee.d.POPOUT,
              onOpenProfile: ed ? true : eD
            }), (0, a.jsx)(D.A, {
              ref: eT,
              user: t,
              themeType: ee.d.POPOUT,
              onCloseProfile: n,
              prompt: eN ? ek : null
            })]
          }), (0, a.jsxs)(c.HOs, {
            className: en.rf,
            style: {
              pointerEvents: eP ? "none" : true
            },
            children: [(0, a.jsx)(T.A, {
              userId: t.id
            }), (0, a.jsx)(P.A, {
              user: t,
              className: en.Xh,
              nickname: F.Ay.getName(eo, null, t),
              onOpenProfile: ed ? true : eD,
              pronouns: null == eu ? true : eu.pronouns,
              tags: (0, a.jsx)(O.A, {
                displayProfile: eu,
                themeType: ee.d.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != er ? e => e === er : true,
                shouldGlowTenureBadge: ew.current
              }),
              nicknameIcons: (0, a.jsx)(R.A, {
                user: t,
                isVisible: ex
              })
            }), (0, a.jsx)(M.A, {
              user: t,
              bio: null == eu ? true : eu.bio,
              hidePersonalInformation: ey,
              onClose: n
            }), eM && (0, a.jsx)(w.A, {
              user: t,
              widgets: null == eu ? true : eu.widgets,
              onOpenUserProfileModal: eD
            }), (0, a.jsx)(N.A, {
              isPremiumUser: eE,
              onInteraction: n
            }), (0, a.jsx)(I.A, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eD,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: en.T_,
              children: [(0, a.jsx)(k.A.Overlay, {
                className: en.g0,
                children: (0, a.jsxs)(q.Gs, {
                  children: [(0, a.jsx)(q.N3, {
                    action: "EDIT_PROFILE",
                    label: ec ? et.intl.string(et.t.Ip9nBS) : et.intl.string(et.t.s5vZlQ),
                    icon: c.R2l,
                    onClick: eV,
                    renderSubmenu: eH ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.eE, {
                        navId: "edit-profile-submenu",
                        "aria-label": et.intl.string(et.t.szTA8E),
                        onClose: t,
                        children: eW
                      })
                    } : true,
                    trailing: eG ? (0, a.jsx)(c.LpS, {
                      text: et.intl.string(et.t.y2b7CA)
                    }) : true,
                    ref: eI
                  }), (0, a.jsx)(q.N3, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(Q.A, {}),
                    sublabel: null != ej && ej,
                    icon: () => (0, a.jsx)(c.nW6, {
                      status: eg,
                      size: 12
                    }),
                    trailing: (e_ || eg === $.clD.DND) && (0, a.jsx)(c.a_I, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.Fr ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.eE, {
                        navId: "set-status-submenu",
                        className: en.hQ,
                        "aria-label": et.intl.string(et.t.E13trI),
                        onClose: t,
                        children: eC
                      })
                    },
                    onClick: i.Fr ? () => {
                      n(), (0, c.mMO)(() => new Promise(e => e(e => {
                        var t, n;
                        let {
                          onClose: l
                        } = e, i = function(e, t) {
                          if (null == e) return {};
                          var n, a, l, i = {};
                          if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
                            return i
                          }
                          if (i = function(e, t) {
                              if (null == e) return {};
                              var n, a, l = {},
                                i = Object.getOwnPropertyNames(e);
                              for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                              return l
                            }(e, t), Object.getOwnPropertySymbols)
                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
                          return i
                        }(e, ["onClose"]);
                        return (0, a.jsx)(r.dWK, (t = el({
                          onClose: l
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": et.intl.string(et.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.W1t, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": et.intl.string(et.t.E13trI),
                            className: en.YS,
                            hideScroller: true,
                            onClose: l,
                            onSelect: true,
                            children: eC
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
                className: en.g0,
                children: (0, a.jsxs)(q.Gs, {
                  children: [(0, a.jsx)(q.N3, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.rMq,
                    label: et.intl.string(et.t.oMNyYN),
                    onClick: () => {
                      n(), (0, X.A)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.eE, {
                        navId: "switch-accounts-submenu",
                        "aria-label": et.intl.string(et.t.wFhVqL),
                        onClose: t,
                        children: eS
                      })
                    }
                  }), !__OVERLAY__ && G.p5 && eA && (0, a.jsx)(q.N3, {
                    action: "COPY_USER_ID",
                    icon: c.L9S,
                    label: et.intl.string(et.t["/AXYnE"]),
                    onClick: () => {
                      (0, G.C)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == eu ? true : eu.profileEffect) != null && !ew.current && (0, a.jsx)(y.A, {
            skuId: eu.profileEffect.skuId,
            isHovering: eb
          })]
        }), !eH && eK && ez ? (0, a.jsx)(z.A, {
          targetElementRef: eI,
          onClose: n
        }) : null, (0, a.jsx)(v.A, {})]
      })
    })
  })
}