/** Chunk was on 22981 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ec
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
  Chunk587243 = require("./587243.jsx"),
  Chunk383832 = require("./383832.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54482 = require("./54482.js"),
  Chunk116649 = require("./116649.js");

function eo(e) {
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

function ec(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: ec,
    highlightBadge: ed,
    openedAt: eu,
    guildId: em,
    guildProfileEnabled: ep
  } = e, eh = __OVERLAY__, ex = (0, S.ZP)(t.id, em), {
    analyticsLocations: ef
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), eb = (0, y.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: em
  }), {
    ref: eg
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: ev,
    isHovering: ej
  } = (0, p.Z)(eg);
  r.useEffect(() => {
    null == ec || ec(eg.current)
  }, [eg, ec]), r.useEffect(() => (K.Z.setState({
    isOpen: true
  }), () => K.Z.setState({
    isOpen: false
  })), []);
  let e_ = (0, s.e7)([z.Z], () => z.Z.getStatus(t.id)),
    ey = G.Cr.useSetting(),
    eC = (0, $.F)(ey),
    {
      expiringStatusProfileFeedback: eE
    } = b.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eS = (0, s.e7)([B.Z], () => B.Z.hidePersonalInformation),
    eT = (0, g.p)(),
    eO = G.Sb.useSetting(),
    eN = (0, $.I)(e_),
    eP = (0, Y.g)(n),
    eI = (0, j.Z)({
      analyticsLocations: ef
    }),
    ek = (0, H.I5)(t),
    ew = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eR = (0, E.b)({
      location: "UserProfileAccountPopout"
    }),
    eA = r.useRef(null),
    eZ = r.useRef(null),
    eD = r.useRef((0, K.Z)(e => e.shouldRenderTenureLevelUp)),
    eL = r.useMemo(() => (0, x.Z)(), []),
    [eM, eU] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eU(false)
    }, 500)
  }, []);
  let eF = e => {
      null == n || n(), (0, O.openUserProfileModal)(eo({
        customStatusPrompt: eL,
        sourceAnalyticsLocations: ef
      }, eb, e))
    },
    eG = (0, T.Z)({
      location: "UserProfileAccountPopout"
    }),
    ez = (null == ex ? true : ex.widgets) != null && ex.widgets.length > 0,
    eB = ez ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eV, eW] = (0, f.US)(eB),
    eH = eV === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eK = r.useCallback(() => {
      eW(en.L.USER_DISMISS), n()
    }, [eW, n]),
    eq = r.useCallback(() => {
      ep && null != em || (eI(), eK())
    }, [eI, eK, ep, em]),
    eY = ep && null != em,
    eX = (0, q.K)(em, ef, eH, n, eK),
    eJ = (0, C.k)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: ef,
    children: (0, a.jsx)(y.Mt, {
      value: eb,
      openedAt: eu,
      fetchStartedAt: null == ex ? true : ex.fetchStartedAt,
      fetchEndedAt: null == ex ? true : ex.fetchEndedAt,
      isLoaded: null == ex ? true : ex.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: eg,
        "aria-label": t.username,
        "data-layer": "base",
        children: [(0, a.jsxs)(Z.Z, {
          className: el.themeContainer,
          user: t,
          displayProfile: ex,
          themeType: er.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: es.header,
            children: [(0, a.jsx)(I.Z, {
              user: t,
              displayProfile: ex,
              themeType: er.l.POPOUT
            }), (0, a.jsx)(N.Z, {
              user: t,
              displayProfile: ex,
              themeType: er.l.POPOUT,
              onOpenProfile: eh ? true : eF
            }), (0, a.jsx)(M.Z, {
              ref: eA,
              user: t,
              themeType: er.l.POPOUT,
              onCloseProfile: n,
              prompt: ew ? eL : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: el.body,
            style: {
              pointerEvents: eM ? "none" : true
            },
            children: [(0, a.jsx)(D.Z, {
              user: t,
              className: el.username,
              nickname: W.ZP.getName(em, null, t),
              onOpenProfile: eh ? true : eF,
              pronouns: null == ex ? true : ex.pronouns,
              tags: (0, a.jsx)(P.Z, {
                displayProfile: ex,
                themeType: er.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != ed ? e => e === ed : true,
                shouldGlowTenureBadge: eD.current
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(R.Z, {
                  userId: t.id
                }), (0, a.jsx)(L.Z, {
                  user: t,
                  isVisible: ev
                })]
              })
            }), (0, a.jsx)(F.Z, {
              user: t,
              bio: null == ex ? true : ex.bio,
              hidePersonalInformation: eS,
              onClose: n
            }), eG && ez && (0, a.jsx)(U.Z, {
              widgets: ex.widgets,
              onClick: () => {
                n(), eF({
                  section: ea.oh.WIDGETS
                })
              }
            }), (0, a.jsx)(k.Z, {
              isPremiumUser: ek,
              onInteraction: n
            }), eR ? (0, a.jsx)(A.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eF,
              onClose: n
            }) : (0, a.jsx)(w.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: el.menus,
              children: [(0, a.jsx)(Z.Z.Overlay, {
                className: el.menuOverlay,
                children: (0, a.jsxs)(J.XE, {
                  children: [(0, a.jsx)(J.V4, {
                    action: "EDIT_PROFILE",
                    label: ep ? ei.intl.string(ei.t.Ip9nBQ) : ei.intl.string(ei.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: eq,
                    renderSubmenu: eY ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(J.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": ei.intl.string(ei.t.szTA8P),
                        onClose: t,
                        children: eX
                      })
                    } : true,
                    trailing: eH ? (0, a.jsx)(c.IGR, {
                      text: ei.intl.string(ei.t.y2b7CA)
                    }) : true,
                    ref: eZ
                  }), (0, a.jsx)(J.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(Q.Z, {}),
                    sublabel: eE && null != eC && eC,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: e_,
                      size: 12
                    }),
                    trailing: (eT || e_ === et.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(J.gp, {
                        navId: "set-status-submenu",
                        className: el.statusPickerModalMenu,
                        "aria-label": ei.intl.string(ei.t.E13trK),
                        onClose: t,
                        children: eN
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
                        return (0, a.jsx)(l.IX, (t = eo({
                          onClose: r
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": ei.intl.string(ei.t["3Uj+2t"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ei.intl.string(ei.t.E13trK),
                            className: el.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
                            onSelect: true,
                            children: eN
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
              }), (0, a.jsx)(Z.Z.Overlay, {
                className: el.menuOverlay,
                children: (0, a.jsxs)(J.XE, {
                  children: [(0, a.jsx)(J.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: ei.intl.string(ei.t.oMNyYG),
                    onClick: () => {
                      n(), (0, ee.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(J.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ei.intl.string(ei.t.wFhVqK),
                        onClose: t,
                        children: eP
                      })
                    }
                  }), !__OVERLAY__ && V.wS && eO && (0, a.jsx)(J.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: ei.intl.string(ei.t["/AXYnJ"]),
                    onClick: () => {
                      (0, V.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ex ? true : ex.profileEffect) != null && !eD.current && (0, a.jsx)(_.Z, {
            skuId: ex.profileEffect.skuId,
            isHovering: ej
          }), !eY && eJ ? (0, a.jsx)(X.Z, {
            targetElementRef: eZ,
            onClose: n
          }) : null]
        }), (0, a.jsx)(v.Z, {})]
      })
    })
  })
}