/** Chunk was on 65347 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ec
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
  Chunk104505 = require("./104505.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk243778 = require("./243778.jsx"),
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
  Chunk138005 = require("./138005.js"),
  Chunk593540 = require("./593540.js");

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
    analyticsLocations: eg
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), ef = (0, _.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: em
  }), {
    ref: eb,
    height: ev
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: ej,
    isHovering: e_
  } = (0, p.Z)(eb);
  l.useEffect(() => {
    null == ec || ec(eb.current)
  }, [eb, ec]), l.useEffect(() => (W.Z.setState({
    isOpen: true
  }), () => W.Z.setState({
    isOpen: false
  })), []);
  let ey = (0, s.e7)([F.Z], () => F.Z.getStatus(t.id)),
    eC = B.Cr.useSetting(),
    eS = (0, $.F)(eC),
    eE = (0, s.e7)([G.Z], () => G.Z.hidePersonalInformation),
    eN = (0, f.p)(),
    eT = B.Sb.useSetting(),
    eO = (0, $.I)(ey),
    eP = (0, q.g)(n),
    eI = (0, v.Z)({
      analyticsLocations: eg
    }),
    ew = (0, V.I5)(t),
    ek = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eA = (0, C.b)({
      location: "UserProfileAccountPopout"
    }),
    eR = l.useRef(null),
    eZ = l.useRef(null),
    eD = l.useRef((0, W.Z)(e => e.shouldRenderTenureLevelUp)),
    eL = l.useMemo(() => (0, x.Z)(), []),
    [eM, eU] = l.useState(true);
  l.useEffect(() => {
    setTimeout(() => {
      eU(false)
    }, 500)
  }, []);
  let eB = e => {
      null == n || n(), (0, N.openUserProfileModal)(eo({
        customStatusPrompt: eL,
        sourceAnalyticsLocations: eg
      }, ef, e))
    },
    eF = (0, E.Z)({
      location: "UserProfileAccountPopout"
    }),
    eG = (null == ex ? true : ex.widgets) != null && ex.widgets.length > 0,
    ez = eG ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eH, eV] = (0, g.US)(ez),
    eW = eH === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eK = l.useCallback(() => {
      eV(en.L.USER_DISMISS), n()
    }, [eV, n]),
    eq = l.useCallback(() => {
      ep && null != em || (eI(), eK())
    }, [eI, eK, ep, em]),
    eY = ep && null != em,
    eJ = (0, K.K)(em, eg, eW, n, eK),
    eX = (0, y.k)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: eg,
    children: (0, a.jsx)(_.Mt, {
      value: ef,
      openedAt: eu,
      fetchStartedAt: null == ex ? true : ex.fetchStartedAt,
      fetchEndedAt: null == ex ? true : ex.fetchEndedAt,
      isLoaded: null == ex ? true : ex.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: eb,
        "aria-label": t.username,
        className: er.popoutContainer,
        "data-layer": "base",
        children: [(0, a.jsx)(Q.Z, {
          displayProfile: ex,
          handleOpenUserProfileModal: eB,
          height: ev
        }), (0, a.jsxs)(R.Z, {
          className: er.themeContainer,
          user: t,
          displayProfile: ex,
          themeType: el.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: es.header,
            children: [(0, a.jsx)(P.Z, {
              user: t,
              displayProfile: ex,
              themeType: el.l.POPOUT
            }), (0, a.jsx)(T.Z, {
              user: t,
              displayProfile: ex,
              themeType: el.l.POPOUT,
              onOpenProfile: eh ? true : eB
            }), (0, a.jsx)(L.Z, {
              ref: eR,
              user: t,
              themeType: el.l.POPOUT,
              onCloseProfile: n,
              prompt: ek ? eL : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: er.body,
            style: {
              pointerEvents: eM ? "none" : true
            },
            children: [(0, a.jsx)(Z.Z, {
              user: t,
              className: er.username,
              nickname: H.ZP.getName(em, null, t),
              onOpenProfile: eh ? true : eB,
              pronouns: null == ex ? true : ex.pronouns,
              tags: (0, a.jsx)(O.Z, {
                displayProfile: ex,
                themeType: el.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != ed ? e => e === ed : true,
                shouldGlowTenureBadge: eD.current
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(k.Z, {
                  userId: t.id
                }), (0, a.jsx)(D.Z, {
                  user: t,
                  isVisible: ej
                })]
              })
            }), (0, a.jsx)(U.Z, {
              user: t,
              bio: null == ex ? true : ex.bio,
              hidePersonalInformation: eE,
              onClose: n
            }), eF && eG && (0, a.jsx)(M.Z, {
              widgets: ex.widgets,
              onClick: () => {
                n(), eB({
                  section: ea.oh.WIDGETS
                })
              }
            }), (0, a.jsx)(I.Z, {
              isPremiumUser: ew,
              onInteraction: n
            }), eA ? (0, a.jsx)(A.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eB,
              onClose: n
            }) : (0, a.jsx)(w.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: er.menus,
              children: [(0, a.jsx)(R.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, a.jsxs)(J.XE, {
                  children: [(0, a.jsx)(J.V4, {
                    action: "EDIT_PROFILE",
                    label: ep ? ei.intl.string(ei.t.Ip9nBS) : ei.intl.string(ei.t.s5vZlQ),
                    icon: c.vdY,
                    onClick: eq,
                    renderSubmenu: eY ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(J.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": ei.intl.string(ei.t.szTA8E),
                        onClose: t,
                        children: eJ
                      })
                    } : true,
                    trailing: eW ? (0, a.jsx)(c.IGR, {
                      text: ei.intl.string(ei.t.y2b7CA)
                    }) : true,
                    ref: eZ
                  }), (0, a.jsx)(J.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(X.Z, {}),
                    sublabel: null != eS && eS,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: ey,
                      size: 12
                    }),
                    trailing: (eN || ey === et.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(J.gp, {
                        navId: "set-status-submenu",
                        className: er.statusPickerModalMenu,
                        "aria-label": ei.intl.string(ei.t.E13trI),
                        onClose: t,
                        children: eO
                      })
                    },
                    onClick: i.tq ? () => {
                      n(), (0, c.ZDy)(() => new Promise(e => e(e => {
                        var t, n, {
                            onClose: l
                          } = e,
                          i = function(e, t) {
                            if (null == e) return {};
                            var n, a, l = function(e, t) {
                              if (null == e) return {};
                              var n, a, l = {},
                                i = Object.keys(e);
                              for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
                              return l
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
                            }
                            return l
                          }(e, ["onClose"]);
                        return (0, a.jsx)(r.IX, (t = eo({
                          onClose: l
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": ei.intl.string(ei.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ei.intl.string(ei.t.E13trI),
                            className: er.statusPickerModal,
                            hideScroller: true,
                            onClose: l,
                            onSelect: true,
                            children: eO
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
                className: er.menuOverlay,
                children: (0, a.jsxs)(J.XE, {
                  children: [(0, a.jsx)(J.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: ei.intl.string(ei.t.oMNyYN),
                    onClick: () => {
                      n(), (0, ee.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(J.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ei.intl.string(ei.t.wFhVqL),
                        onClose: t,
                        children: eP
                      })
                    }
                  }), !__OVERLAY__ && z.wS && eT && (0, a.jsx)(J.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: ei.intl.string(ei.t["/AXYnE"]),
                    onClick: () => {
                      (0, z.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ex ? true : ex.profileEffect) != null && !eD.current && (0, a.jsx)(j.Z, {
            skuId: ex.profileEffect.skuId,
            isHovering: e_
          })]
        }), !eY && eX ? (0, a.jsx)(Y.Z, {
          targetElementRef: eZ,
          onClose: n
        }) : null, (0, a.jsx)(b.Z, {})]
      })
    })
  })
}