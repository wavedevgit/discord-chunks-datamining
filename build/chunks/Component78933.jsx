/** Chunk was on 84249 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
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
  Chunk612600 = require("./612600.js"),
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

function ei(e) {
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
    highlightBadge: es,
    openedAt: eo,
    guildId: ec,
    guildProfileEnabled: ed
  } = e, eu = __OVERLAY__, em = (0, _.ZP)(t.id, ec), {
    analyticsLocations: ep
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), eh = (0, C.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: ec
  }), {
    ref: ef,
    height: ex
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: eb,
    isHovering: eg
  } = (0, h.Z)(ef);
  r.useEffect(() => {
    null == el || el(ef.current)
  }, [ef, el]), r.useEffect(() => (z.Z.setState({
    isOpen: true
  }), () => z.Z.setState({
    isOpen: false
  })), []);
  let ev = (0, s.e7)([U.Z], () => U.Z.getStatus(t.id)),
    ej = M.Cr.useSetting(),
    ey = (0, X.F)(ej),
    eC = (0, s.e7)([B.Z], () => B.Z.hidePersonalInformation),
    e_ = (0, g.p)(),
    eS = M.Sb.useSetting(),
    eE = (0, X.I)(ev),
    eT = (0, W.g)(n),
    eO = (0, j.Z)({
      analyticsLocations: ep
    }),
    eN = (0, V.I5)(t),
    eP = (0, f.p)({
      location: "UserProfileAccountPopout"
    }),
    ew = r.useRef(null),
    eI = r.useRef(null),
    ek = r.useRef((0, z.Z)(e => e.shouldRenderTenureLevelUp)),
    eR = r.useMemo(() => (0, x.Z)(), []),
    [eA, eZ] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eZ(false)
    }, 500)
  }, []);
  let eD = e => {
      null == n || n(), (0, E.openUserProfileModal)(ei({
        customStatusPrompt: eR,
        sourceAnalyticsLocations: ep
      }, eh, e))
    },
    eL = (0, S.Z)({
      location: "UserProfileAccountPopout"
    }),
    eM = (null == em ? true : em.widgets) != null && em.widgets.length > 0,
    eU = eM ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eB, eF] = (0, b.US)(eU),
    eG = eB === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eV = r.useCallback(() => {
      eF(ee.L.USER_DISMISS), n()
    }, [eF, n]),
    ez = r.useCallback(() => {
      ed && null != ec || (eO(), eV())
    }, [eO, eV, ed, ec]),
    eH = ed && null != ec,
    eW = (0, H.K)(ec, ep, eG, n, eV),
    eK = (0, p.q5)({
      location: "UserProfileAccountPopout"
    }),
    eq = (0, p.hX)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: ep,
    children: (0, a.jsx)(C.Mt, {
      value: eh,
      openedAt: eo,
      fetchStartedAt: null == em ? true : em.fetchStartedAt,
      fetchEndedAt: null == em ? true : em.fetchEndedAt,
      isLoaded: null == em ? true : em.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: ef,
        "aria-label": t.username,
        className: ea.popoutContainer,
        "data-layer": "base",
        children: [(0, a.jsx)(Q.Z, {
          displayProfile: em,
          handleOpenUserProfileModal: eD,
          height: ex
        }), (0, a.jsxs)(R.Z, {
          className: ea.themeContainer,
          user: t,
          displayProfile: em,
          themeType: et.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: er.header,
            children: [(0, a.jsx)(N.Z, {
              user: t,
              displayProfile: em,
              themeType: et.l.POPOUT
            }), (0, a.jsx)(T.Z, {
              user: t,
              displayProfile: em,
              themeType: et.l.POPOUT,
              onOpenProfile: eu ? true : eD
            }), (0, a.jsx)(D.Z, {
              ref: ew,
              user: t,
              themeType: et.l.POPOUT,
              onCloseProfile: n,
              prompt: eP ? eR : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: ea.body,
            style: {
              pointerEvents: eA ? "none" : true
            },
            children: [(0, a.jsx)(w.Z, {
              userId: t.id
            }), (0, a.jsx)(A.Z, {
              user: t,
              className: ea.username,
              nickname: G.ZP.getName(ec, null, t),
              onOpenProfile: eu ? true : eD,
              pronouns: null == em ? true : em.pronouns,
              tags: (0, a.jsx)(O.Z, {
                displayProfile: em,
                themeType: et.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != es ? e => e === es : true,
                shouldGlowTenureBadge: ek.current
              }),
              nicknameIcons: (0, a.jsx)(Z.Z, {
                user: t,
                isVisible: eb
              })
            }), (0, a.jsx)(L.Z, {
              user: t,
              bio: null == em ? true : em.bio,
              hidePersonalInformation: eC,
              onClose: n
            }), eL && eM && (0, a.jsx)(k.Z, {
              user: t,
              widgets: null == em ? true : em.widgets,
              onOpenUserProfileModal: eD
            }), (0, a.jsx)(P.Z, {
              isPremiumUser: eN,
              onInteraction: n
            }), (0, a.jsx)(I.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eD,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: ea.menus,
              children: [(0, a.jsx)(R.Z.Overlay, {
                className: ea.menuOverlay,
                children: (0, a.jsxs)(q.XE, {
                  children: [(0, a.jsx)(q.V4, {
                    action: "EDIT_PROFILE",
                    label: ed ? en.intl.string(en.t.Ip9nBS) : en.intl.string(en.t.s5vZlQ),
                    icon: c.vdY,
                    onClick: ez,
                    renderSubmenu: eH ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": en.intl.string(en.t.szTA8E),
                        onClose: t,
                        children: eW
                      })
                    } : true,
                    trailing: eG ? (0, a.jsx)(c.IGR, {
                      text: en.intl.string(en.t.y2b7CA)
                    }) : true,
                    ref: eI
                  }), (0, a.jsx)(q.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(Y.Z, {}),
                    sublabel: null != ey && ey,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: ev,
                      size: 12
                    }),
                    trailing: (e_ || ev === $.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.gp, {
                        navId: "set-status-submenu",
                        className: ea.statusPickerModalMenu,
                        "aria-label": en.intl.string(en.t.E13trI),
                        onClose: t,
                        children: eE
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
                        return (0, a.jsx)(l.IX, (t = ei({
                          onClose: r
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": en.intl.string(en.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": en.intl.string(en.t.E13trI),
                            className: ea.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
                            onSelect: true,
                            children: eE
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
              }), (0, a.jsx)(R.Z.Overlay, {
                className: ea.menuOverlay,
                children: (0, a.jsxs)(q.XE, {
                  children: [(0, a.jsx)(q.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: en.intl.string(en.t.oMNyYN),
                    onClick: () => {
                      n(), (0, J.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(q.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": en.intl.string(en.t.wFhVqL),
                        onClose: t,
                        children: eT
                      })
                    }
                  }), !__OVERLAY__ && F.wS && eS && (0, a.jsx)(q.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: en.intl.string(en.t["/AXYnE"]),
                    onClick: () => {
                      (0, F.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == em ? true : em.profileEffect) != null && !ek.current && (0, a.jsx)(y.Z, {
            skuId: em.profileEffect.skuId,
            isHovering: eg
          })]
        }), !eH && eK && eq ? (0, a.jsx)(K.Z, {
          targetElementRef: eI,
          onClose: n
        }) : null, (0, a.jsx)(v.Z, {})]
      })
    })
  })
}