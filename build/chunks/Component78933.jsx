/** Chunk was on 28855 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk440051 = require("./440051.js"),
  Chunk734934 = require("./734934.js"),
  Chunk480173 = require("./480173.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk880421 = require("./880421.js"),
  Chunk209698 = require("./209698.js"),
  Chunk687158 = require("./687158.js"),
  Chunk612600 = require("./612600.js"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk483424 = require("./483424.jsx"),
  Chunk681837 = require("./681837.jsx"),
  Chunk638970 = require("./638970.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk309494 = require("./309494.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk350207 = require("./350207.jsx"),
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
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54482 = require("./54482.js"),
  Chunk116649 = require("./116649.js");

function ec(e) {
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

function ed(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: ed,
    highlightBadge: eu,
    openedAt: em,
    guildId: ep,
    guildProfileEnabled: eh
  } = e, ex = __OVERLAY__, ef = (0, E.ZP)(t.id, ep), {
    analyticsLocations: eg
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), eb = (0, y.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: ep
  }), {
    ref: ev,
    height: ej
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: e_,
    isHovering: ey
  } = (0, p.Z)(ev);
  r.useEffect(() => {
    null == ed || ed(ev.current)
  }, [ev, ed]), r.useEffect(() => (K.Z.setState({
    isOpen: true
  }), () => K.Z.setState({
    isOpen: false
  })), []);
  let eC = (0, o.e7)([G.Z], () => G.Z.getStatus(t.id)),
    eS = B.Cr.useSetting(),
    eE = (0, ee.F)(eS),
    {
      expiringStatusProfileFeedback: eO
    } = g.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eT = (0, o.e7)([z.Z], () => z.Z.hidePersonalInformation),
    eN = (0, b.p)(),
    eP = B.Sb.useSetting(),
    eI = (0, ee.I)(eC),
    ew = (0, Y.g)(n),
    ek = (0, j.Z)({
      analyticsLocations: eg
    }),
    eR = (0, W.I5)(t),
    eA = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eD = (0, S.b)({
      location: "UserProfileAccountPopout"
    }),
    eZ = r.useRef(null),
    eM = r.useRef(null),
    eL = r.useRef((0, K.Z)(e => e.shouldRenderTenureLevelUp)),
    eU = r.useMemo(() => (0, x.Z)(), []),
    [eF, eB] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eB(false)
    }, 500)
  }, []);
  let eG = e => {
      null == n || n(), (0, T.openUserProfileModal)(ec({
        customStatusPrompt: eU,
        sourceAnalyticsLocations: eg
      }, eb, e))
    },
    ez = (0, O.Z)({
      location: "UserProfileAccountPopout"
    }),
    eH = (null == ef ? true : ef.widgets) != null && ef.widgets.length > 0,
    eV = eH ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eW, eK] = (0, f.US)(eV),
    eq = eW === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eY = r.useCallback(() => {
      eK(ea.L.USER_DISMISS), n()
    }, [eK, n]),
    eJ = r.useCallback(() => {
      eh && null != ep || (ek(), eY())
    }, [ek, eY, eh, ep]),
    eX = eh && null != ep,
    eQ = (0, q.K)(ep, eg, eq, n, eY),
    e$ = (0, C.k)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: eg,
    children: (0, a.jsx)(y.Mt, {
      value: eb,
      openedAt: em,
      fetchStartedAt: null == ef ? true : ef.fetchStartedAt,
      fetchEndedAt: null == ef ? true : ef.fetchEndedAt,
      isLoaded: null == ef ? true : ef.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: ev,
        "aria-label": t.username,
        className: eo.popoutContainer,
        "data-layer": "base",
        children: [(0, a.jsx)($.Z, {
          displayProfile: ef,
          handleOpenUserProfileModal: eG,
          height: ej
        }), (0, a.jsxs)(D.Z, {
          className: eo.themeContainer,
          user: t,
          displayProfile: ef,
          themeType: el.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: es.header,
            children: [(0, a.jsx)(I.Z, {
              user: t,
              displayProfile: ef,
              themeType: el.l.POPOUT
            }), (0, a.jsx)(N.Z, {
              user: t,
              displayProfile: ef,
              themeType: el.l.POPOUT,
              onOpenProfile: ex ? true : eG
            }), (0, a.jsx)(L.Z, {
              ref: eZ,
              user: t,
              themeType: el.l.POPOUT,
              onCloseProfile: n,
              prompt: eA ? eU : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: eo.body,
            style: {
              pointerEvents: eF ? "none" : true
            },
            children: [(0, a.jsx)(Z.Z, {
              user: t,
              className: eo.username,
              nickname: V.ZP.getName(ep, null, t),
              onOpenProfile: ex ? true : eG,
              pronouns: null == ef ? true : ef.pronouns,
              tags: (0, a.jsx)(P.Z, {
                displayProfile: ef,
                themeType: el.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != eu ? e => e === eu : true,
                shouldGlowTenureBadge: eL.current
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(R.Z, {
                  userId: t.id
                }), (0, a.jsx)(M.Z, {
                  user: t,
                  isVisible: e_
                })]
              })
            }), (0, a.jsx)(F.Z, {
              user: t,
              bio: null == ef ? true : ef.bio,
              hidePersonalInformation: eT,
              onClose: n
            }), ez && eH && (0, a.jsx)(U.Z, {
              widgets: ef.widgets,
              onClick: () => {
                n(), eG({
                  section: er.oh.WIDGETS
                })
              }
            }), (0, a.jsx)(w.Z, {
              isPremiumUser: eR,
              onInteraction: n
            }), eD ? (0, a.jsx)(A.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eG,
              onClose: n
            }) : (0, a.jsx)(k.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: eo.menus,
              children: [(0, a.jsx)(D.Z.Overlay, {
                className: eo.menuOverlay,
                children: (0, a.jsxs)(X.XE, {
                  children: [(0, a.jsx)(X.V4, {
                    action: "EDIT_PROFILE",
                    label: eh ? ei.intl.string(ei.t.Ip9nBS) : ei.intl.string(ei.t.s5vZlQ),
                    icon: c.vdY,
                    onClick: eJ,
                    renderSubmenu: eX ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(X.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": ei.intl.string(ei.t.szTA8E),
                        onClose: t,
                        children: eQ
                      })
                    } : true,
                    trailing: eq ? (0, a.jsx)(c.IGR, {
                      text: ei.intl.string(ei.t.y2b7CA)
                    }) : true,
                    ref: eM
                  }), (0, a.jsx)(X.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(Q.Z, {}),
                    sublabel: eO && null != eE && eE,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: eC,
                      size: 12
                    }),
                    trailing: (eN || eC === en.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: l.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(X.gp, {
                        navId: "set-status-submenu",
                        className: eo.statusPickerModalMenu,
                        "aria-label": ei.intl.string(ei.t.E13trI),
                        onClose: t,
                        children: eI
                      })
                    },
                    onClick: l.tq ? () => {
                      n(), (0, c.ZDy)(() => new Promise(e => e(e => {
                        var t, n, {
                            onClose: r
                          } = e,
                          l = function(e, t) {
                            if (null == e) return {};
                            var n, a, r = function(e, t) {
                              if (null == e) return {};
                              var n, a, r = {},
                                l = Object.keys(e);
                              for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                              return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                            }
                            return r
                          }(e, ["onClose"]);
                        return (0, a.jsx)(i.IX, (t = ec({
                          onClose: r
                        }, l), n = n = {
                          size: "sm",
                          "aria-label": ei.intl.string(ei.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ei.intl.string(ei.t.E13trI),
                            className: eo.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
                            onSelect: true,
                            children: eI
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
              }), (0, a.jsx)(D.Z.Overlay, {
                className: eo.menuOverlay,
                children: (0, a.jsxs)(X.XE, {
                  children: [(0, a.jsx)(X.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: ei.intl.string(ei.t.oMNyYN),
                    onClick: () => {
                      n(), (0, et.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(X.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ei.intl.string(ei.t.wFhVqL),
                        onClose: t,
                        children: ew
                      })
                    }
                  }), !__OVERLAY__ && H.wS && eP && (0, a.jsx)(X.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: ei.intl.string(ei.t["/AXYnE"]),
                    onClick: () => {
                      (0, H.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ef ? true : ef.profileEffect) != null && !eL.current && (0, a.jsx)(_.Z, {
            skuId: ef.profileEffect.skuId,
            isHovering: ey
          }), !eX && e$ ? (0, a.jsx)(J.Z, {
            targetElementRef: eM,
            onClose: n
          }) : null]
        }), (0, a.jsx)(v.Z, {})]
      })
    })
  })
}