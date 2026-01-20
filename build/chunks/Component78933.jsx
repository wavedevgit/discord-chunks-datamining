/** Chunk was on 22979 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ei
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk873546 = require("./873546.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk251296 = require("./251296.js"),
  Chunk104505 = require("./104505.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk734934 = require("./734934.js"),
  Chunk480173 = require("./480173.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk407699 = require("./407699.jsx"),
  Chunk638970 = require("./638970.jsx"),
  Chunk675893 = require("./675893.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk309494 = require("./309494.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk158776 = require("./158776.js"),
  Chunk246946 = require("./246946.js"),
  Chunk572004 = require("./572004.js"),
  Chunk5192 = require("./5192.js"),
  Chunk74538 = require("./74538.js"),
  Chunk7093 = require("./7093.js"),
  Chunk175015 = require("./175015.jsx"),
  Chunk474376 = require("./474376.jsx"),
  Chunk905953 = require("./905953.jsx"),
  Chunk431282 = require("./431282.jsx"),
  Chunk213928 = require("./213928.jsx"),
  Chunk480898 = require("./480898.jsx"),
  Chunk587243 = require("./587243.jsx"),
  Chunk383832 = require("./383832.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787224 = require("./787224.js"),
  Chunk155493 = require("./155493.js");

function er(e) {
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
    highlightBadge: el,
    openedAt: es,
    guildId: eo,
    guildProfileEnabled: ec
  } = e, ed = __OVERLAY__, eu = (0, _.ZP)(t.id, eo), {
    analyticsLocations: em
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), ep = (0, C.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: eo
  }), {
    ref: eh,
    height: ef
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: ex,
    isHovering: eb
  } = (0, h.Z)(eh);
  r.useEffect(() => {
    null == ei || ei(eh.current)
  }, [eh, ei]), r.useEffect(() => (V.Z.setState({
    isOpen: true
  }), () => V.Z.setState({
    isOpen: false
  })), []);
  let eg = (0, s.e7)([M.Z], () => M.Z.getStatus(t.id)),
    ev = L.Cr.useSetting(),
    ej = (0, Y.F)(ev),
    ey = (0, s.e7)([U.Z], () => U.Z.hidePersonalInformation),
    eC = (0, g.p)(),
    e_ = L.Sb.useSetting(),
    eS = (0, Y.I)(eg),
    eE = (0, W.g)(n),
    eT = (0, j.Z)({
      analyticsLocations: em
    }),
    eO = (0, G.I5)(t),
    eN = (0, f.p)({
      location: "UserProfileAccountPopout"
    }),
    eP = r.useRef(null),
    ew = r.useRef(null),
    eI = r.useRef((0, V.Z)(e => e.shouldRenderTenureLevelUp)),
    ek = r.useMemo(() => (0, x.Z)(), []),
    [eR, eA] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eA(false)
    }, 500)
  }, []);
  let eZ = e => {
      null == n || n(), (0, S.openUserProfileModal)(er({
        customStatusPrompt: ek,
        sourceAnalyticsLocations: em
      }, ep, e))
    },
    eD = (null == eu ? true : eu.widgets) != null && eu.widgets.length > 0,
    eL = eD ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eM, eU] = (0, b.US)(eL),
    eB = eM === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eF = r.useCallback(() => {
      eU($.L.USER_DISMISS), n()
    }, [eU, n]),
    eG = r.useCallback(() => {
      ec && null != eo || (eT(), eF())
    }, [eT, eF, ec, eo]),
    eV = ec && null != eo,
    ez = (0, z.K)(eo, em, eB, n, eF),
    eW = (0, p.q5)({
      location: "UserProfileAccountPopout"
    }),
    eH = (0, p.hX)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: em,
    children: (0, a.jsx)(C.Mt, {
      value: ep,
      openedAt: es,
      fetchStartedAt: null == eu ? true : eu.fetchStartedAt,
      fetchEndedAt: null == eu ? true : eu.fetchEndedAt,
      isLoaded: null == eu ? true : eu.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: eh,
        "aria-label": t.username,
        className: en.popoutContainer,
        "data-layer": "base",
        children: [(0, a.jsx)(Q.Z, {
          displayProfile: eu,
          handleOpenUserProfileModal: eZ,
          height: ef
        }), (0, a.jsxs)(k.Z, {
          className: en.themeContainer,
          user: t,
          displayProfile: eu,
          themeType: ee.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: ea.header,
            children: [(0, a.jsx)(O.Z, {
              user: t,
              displayProfile: eu,
              themeType: ee.l.POPOUT
            }), (0, a.jsx)(E.Z, {
              user: t,
              displayProfile: eu,
              themeType: ee.l.POPOUT,
              onOpenProfile: ed ? true : eZ
            }), (0, a.jsx)(Z.Z, {
              ref: eP,
              user: t,
              themeType: ee.l.POPOUT,
              onCloseProfile: n,
              prompt: eN ? ek : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: en.body,
            style: {
              pointerEvents: eR ? "none" : true
            },
            children: [(0, a.jsx)(P.Z, {
              userId: t.id
            }), (0, a.jsx)(R.Z, {
              user: t,
              className: en.username,
              nickname: F.ZP.getName(eo, null, t),
              onOpenProfile: ed ? true : eZ,
              pronouns: null == eu ? true : eu.pronouns,
              tags: (0, a.jsx)(T.Z, {
                displayProfile: eu,
                themeType: ee.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != el ? e => e === el : true,
                shouldGlowTenureBadge: eI.current
              }),
              nicknameIcons: (0, a.jsx)(A.Z, {
                user: t,
                isVisible: ex
              })
            }), (0, a.jsx)(D.Z, {
              user: t,
              bio: null == eu ? true : eu.bio,
              hidePersonalInformation: ey,
              onClose: n
            }), eD && (0, a.jsx)(I.Z, {
              user: t,
              widgets: null == eu ? true : eu.widgets,
              onOpenUserProfileModal: eZ
            }), (0, a.jsx)(N.Z, {
              isPremiumUser: eO,
              onInteraction: n
            }), (0, a.jsx)(w.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eZ,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: en.menus,
              children: [(0, a.jsx)(k.Z.Overlay, {
                className: en.menuOverlay,
                children: (0, a.jsxs)(q.XE, {
                  children: [(0, a.jsx)(q.V4, {
                    action: "EDIT_PROFILE",
                    label: ec ? et.intl.string(et.t.Ip9nBS) : et.intl.string(et.t.s5vZlQ),
                    icon: c.vdY,
                    onClick: eG,
                    renderSubmenu: eV ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": et.intl.string(et.t.szTA8E),
                        onClose: t,
                        children: ez
                      })
                    } : true,
                    trailing: eB ? (0, a.jsx)(c.IGR, {
                      text: et.intl.string(et.t.y2b7CA)
                    }) : true,
                    ref: ew
                  }), (0, a.jsx)(q.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(K.Z, {}),
                    sublabel: null != ej && ej,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: eg,
                      size: 12
                    }),
                    trailing: (eC || eg === J.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.gp, {
                        navId: "set-status-submenu",
                        className: en.statusPickerModalMenu,
                        "aria-label": et.intl.string(et.t.E13trI),
                        onClose: t,
                        children: eS
                      })
                    },
                    onClick: i.tq ? () => {
                      n(), (0, c.ZDy)(() => new Promise(e => e(e => {
                        var t, n, {
                            onClose: r
                          } = e,
                          i = function(e, t) {
                            if (null == e) return {};
                            var n, a, r = function(e, t) {
                              if (null == e) return {};
                              var n, a, r = {},
                                i = Object.keys(e);
                              for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                              return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                            }
                            return r
                          }(e, ["onClose"]);
                        return (0, a.jsx)(l.IX, (t = er({
                          onClose: r
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": et.intl.string(et.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": et.intl.string(et.t.E13trI),
                            className: en.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
                            onSelect: true,
                            children: eS
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
              }), (0, a.jsx)(k.Z.Overlay, {
                className: en.menuOverlay,
                children: (0, a.jsxs)(q.XE, {
                  children: [(0, a.jsx)(q.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: et.intl.string(et.t.oMNyYN),
                    onClick: () => {
                      n(), (0, X.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": et.intl.string(et.t.wFhVqL),
                        onClose: t,
                        children: eE
                      })
                    }
                  }), !__OVERLAY__ && B.wS && e_ && (0, a.jsx)(q.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: et.intl.string(et.t["/AXYnE"]),
                    onClick: () => {
                      (0, B.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == eu ? true : eu.profileEffect) != null && !eI.current && (0, a.jsx)(y.Z, {
            skuId: eu.profileEffect.skuId,
            isHovering: eb
          })]
        }), !eV && eW && eH ? (0, a.jsx)(H.Z, {
          targetElementRef: ew,
          onClose: n
        }) : null, (0, a.jsx)(v.Z, {})]
      })
    })
  })
}