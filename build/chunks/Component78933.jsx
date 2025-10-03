/** Chunk was on 61222 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => es
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk440051 = require("./440051.js"),
  Chunk734934 = require("./734934.js"),
  Chunk480173 = require("./480173.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
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

function es(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: es,
    highlightBadge: eo,
    openedAt: ec,
    guildId: ed,
    guildProfileEnabled: eu
  } = e, em = __OVERLAY__, ep = (0, E.ZP)(t.id, ed), {
    analyticsLocations: eh
  } = (0, p.ZP)(m.Z.USER_PROFILE_ACCOUNT_POPOUT), ex = (0, y.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: ed
  }), {
    ref: ef
  } = (0, d.ZP)(), eb = (0, u.Z)(ef);
  r.useEffect(() => {
    null == es || es(ef.current)
  }, [ef, es]), r.useEffect(() => (W.Z.setState({
    isOpen: true
  }), () => W.Z.setState({
    isOpen: false
  })), []);
  let eg = (0, s.e7)([G.Z], () => G.Z.getStatus(t.id)),
    ev = F.Cr.useSetting(),
    ej = (0, J.F)(ev),
    {
      expiringStatusProfileFeedback: e_
    } = b.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    ey = (0, s.e7)([B.Z], () => B.Z.hidePersonalInformation),
    eC = (0, g.p)(),
    eE = F.Sb.useSetting(),
    eN = (0, J.I)(eg),
    eS = (0, q.g)(n),
    eT = (0, j.Z)({
      analyticsLocations: eh
    }),
    eO = (0, H.I5)(t),
    eP = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    ek = (0, C.b)({
      location: "UserProfileAccountPopout"
    }),
    eI = r.useRef(null),
    ew = r.useRef((0, W.Z)(e => e.shouldRenderTenureLevelUp)),
    eR = r.useMemo(() => (0, x.Z)(), []),
    [eA, eZ] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eZ(false)
    }, 500)
  }, []);
  let eD = e => {
      null == n || n(), (0, S.openUserProfileModal)(el({
        customStatusPrompt: eR,
        sourceAnalyticsLocations: eh
      }, ex, e))
    },
    eL = (0, N.Z)({
      location: "UserProfileAccountPopout"
    }),
    eM = (null == ep ? true : ep.widgets) != null && ep.widgets.length > 0,
    eU = eM ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eF, eG] = (0, f.US)(eU),
    eB = eF === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    ez = r.useCallback(() => {
      eG(ee.L.USER_DISMISS), n()
    }, [eG, n]),
    eV = r.useCallback(() => {
      eu && null != ed || (eT(), ez())
    }, [eT, ez, eu, ed]),
    eH = eu && null != ed,
    eW = (0, K.K)(ed, eh, eB, n, ez);
  return (0, a.jsx)(p.Gt, {
    value: eh,
    children: (0, a.jsx)(y.Mt, {
      value: ex,
      openedAt: ec,
      fetchStartedAt: null == ep ? true : ep.fetchStartedAt,
      fetchEndedAt: null == ep ? true : ep.fetchEndedAt,
      isLoaded: null == ep ? true : ep.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: ef,
        "aria-label": t.username,
        children: [(0, a.jsxs)(A.Z, {
          className: er.themeContainer,
          user: t,
          displayProfile: ep,
          themeType: en.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: ei.header,
            children: [(0, a.jsx)(P.Z, {
              user: t,
              displayProfile: ep,
              themeType: en.l.POPOUT
            }), (0, a.jsx)(T.Z, {
              user: t,
              displayProfile: ep,
              themeType: en.l.POPOUT,
              onOpenProfile: em ? true : eD
            }), (0, a.jsx)(L.Z, {
              ref: eI,
              user: t,
              themeType: en.l.POPOUT,
              onCloseProfile: n,
              prompt: eP ? eR : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: er.body,
            style: {
              pointerEvents: eA ? "none" : true
            },
            children: [(0, a.jsx)(Z.Z, {
              user: t,
              className: er.username,
              nickname: V.ZP.getName(ed, null, t),
              onOpenProfile: em ? true : eD,
              pronouns: null == ep ? true : ep.pronouns,
              tags: (0, a.jsx)(O.Z, {
                displayProfile: ep,
                themeType: en.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != eo ? e => e === eo : true,
                shouldGlowTenureBadge: ew.current
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(w.Z, {
                  userId: t.id
                }), (0, a.jsx)(D.Z, {
                  user: t,
                  isHovering: eb
                })]
              })
            }), (0, a.jsx)(U.Z, {
              user: t,
              bio: null == ep ? true : ep.bio,
              hidePersonalInformation: ey,
              onClose: n
            }), eL && eM && (0, a.jsx)(M.Z, {
              widgets: ep.widgets,
              onClick: () => {
                n(), eD({
                  section: et.oh.WIDGETS
                })
              }
            }), (0, a.jsx)(k.Z, {
              isPremiumUser: eO,
              onInteraction: n
            }), ek ? (0, a.jsx)(R.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eD,
              onClose: n
            }) : (0, a.jsx)(I.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: er.menus,
              children: [(0, a.jsx)(A.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, a.jsxs)(Y.XE, {
                  children: [(0, a.jsx)(Y.V4, {
                    action: "EDIT_PROFILE",
                    label: eu ? ea.intl.string(ea.t.Ip9nBQ) : ea.intl.string(ea.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: eV,
                    renderSubmenu: eH ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": ea.intl.string(ea.t.szTA8P),
                        onClose: t,
                        children: eW
                      })
                    } : true,
                    trailing: eB ? (0, a.jsx)(c.IGR, {
                      text: ea.intl.string(ea.t.y2b7CA)
                    }) : true
                  }), (0, a.jsx)(Y.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(X.Z, {}),
                    sublabel: e_ && null != ej && ej,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: eg,
                      size: 12
                    }),
                    trailing: (eC || eg === $.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "set-status-submenu",
                        className: er.statusPickerModalMenu,
                        "aria-label": ea.intl.string(ea.t.E13trK),
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
                        return (0, a.jsx)(l.IX, (t = el({
                          onClose: r
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": ea.intl.string(ea.t["3Uj+2t"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ea.intl.string(ea.t.E13trK),
                            className: er.statusPickerModal,
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
              }), (0, a.jsx)(A.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, a.jsxs)(Y.XE, {
                  children: [(0, a.jsx)(Y.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: ea.intl.string(ea.t.oMNyYG),
                    onClick: () => {
                      n(), (0, Q.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ea.intl.string(ea.t.wFhVqK),
                        onClose: t,
                        children: eS
                      })
                    }
                  }), !__OVERLAY__ && z.wS && eE && (0, a.jsx)(Y.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: ea.intl.string(ea.t["/AXYnJ"]),
                    onClick: () => {
                      (0, z.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ep ? true : ep.profileEffect) != null && !ew.current && (0, a.jsx)(_.Z, {
            skuId: ep.profileEffect.skuId,
            isHovering: eb
          })]
        }), (0, a.jsx)(v.Z, {})]
      })
    })
  })
}