/** Chunk was on 23736 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eo
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

function es(e) {
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

function eo(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: eo,
    highlightBadge: ec,
    openedAt: ed,
    guildId: eu,
    guildProfileEnabled: em
  } = e, ep = __OVERLAY__, eh = (0, S.ZP)(t.id, eu), {
    analyticsLocations: ef
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), ex = (0, y.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: eu
  }), {
    ref: eb,
    height: eg
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: ev,
    isHovering: ej
  } = (0, p.Z)(eb);
  r.useEffect(() => {
    null == eo || eo(eb.current)
  }, [eb, eo]), r.useEffect(() => (z.Z.setState({
    isOpen: true
  }), () => z.Z.setState({
    isOpen: false
  })), []);
  let ey = (0, s.e7)([F.Z], () => F.Z.getStatus(t.id)),
    eC = B.Cr.useSetting(),
    e_ = (0, $.F)(eC),
    eS = (0, s.e7)([G.Z], () => G.Z.hidePersonalInformation),
    eE = (0, b.p)(),
    eT = B.Sb.useSetting(),
    eO = (0, $.I)(ey),
    eN = (0, K.g)(n),
    eP = (0, v.Z)({
      analyticsLocations: ef
    }),
    ew = (0, W.I5)(t),
    eI = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    ek = (0, _.b)({
      location: "UserProfileAccountPopout"
    }),
    eR = r.useRef(null),
    eA = r.useRef(null),
    eD = r.useRef((0, z.Z)(e => e.shouldRenderTenureLevelUp)),
    eZ = r.useMemo(() => (0, f.Z)(), []),
    [eL, eM] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eM(false)
    }, 500)
  }, []);
  let eU = e => {
      null == n || n(), (0, T.openUserProfileModal)(es({
        customStatusPrompt: eZ,
        sourceAnalyticsLocations: ef
      }, ex, e))
    },
    eB = (0, E.Z)({
      location: "UserProfileAccountPopout"
    }),
    eF = (null == eh ? true : eh.widgets) != null && eh.widgets.length > 0,
    eG = eF ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eV, eH] = (0, x.US)(eG),
    eW = eV === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    ez = r.useCallback(() => {
      eH(en.L.USER_DISMISS), n()
    }, [eH, n]),
    eq = r.useCallback(() => {
      em && null != eu || (eP(), ez())
    }, [eP, ez, em, eu]),
    eK = em && null != eu,
    eQ = (0, q.K)(eu, ef, eW, n, ez),
    eY = (0, C.k)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: ef,
    children: (0, a.jsx)(y.Mt, {
      value: ex,
      openedAt: ed,
      fetchStartedAt: null == eh ? true : eh.fetchStartedAt,
      fetchEndedAt: null == eh ? true : eh.fetchEndedAt,
      isLoaded: null == eh ? true : eh.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: eb,
        "aria-label": t.username,
        className: ei.popoutContainer,
        "data-layer": "base",
        children: [(0, a.jsx)(J.Z, {
          displayProfile: eh,
          handleOpenUserProfileModal: eU,
          height: eg
        }), (0, a.jsxs)(D.Z, {
          className: ei.themeContainer,
          user: t,
          displayProfile: eh,
          themeType: ea.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: el.header,
            children: [(0, a.jsx)(P.Z, {
              user: t,
              displayProfile: eh,
              themeType: ea.l.POPOUT
            }), (0, a.jsx)(O.Z, {
              user: t,
              displayProfile: eh,
              themeType: ea.l.POPOUT,
              onOpenProfile: ep ? true : eU
            }), (0, a.jsx)(M.Z, {
              ref: eR,
              user: t,
              themeType: ea.l.POPOUT,
              onCloseProfile: n,
              prompt: eI ? eZ : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: ei.body,
            style: {
              pointerEvents: eL ? "none" : true
            },
            children: [(0, a.jsx)(k.Z, {
              userId: t.id
            }), (0, a.jsx)(Z.Z, {
              user: t,
              className: ei.username,
              nickname: H.ZP.getName(eu, null, t),
              onOpenProfile: ep ? true : eU,
              pronouns: null == eh ? true : eh.pronouns,
              tags: (0, a.jsx)(N.Z, {
                displayProfile: eh,
                themeType: ea.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != ec ? e => e === ec : true,
                shouldGlowTenureBadge: eD.current
              }),
              nicknameIcons: (0, a.jsx)(L.Z, {
                user: t,
                isVisible: ev
              })
            }), (0, a.jsx)(U.Z, {
              user: t,
              bio: null == eh ? true : eh.bio,
              hidePersonalInformation: eS,
              onClose: n
            }), eB && eF && (0, a.jsx)(A.Z, {
              user: t,
              widgets: null == eh ? true : eh.widgets,
              onOpenUserProfileModal: eU
            }), (0, a.jsx)(w.Z, {
              isPremiumUser: ew,
              onInteraction: n
            }), ek ? (0, a.jsx)(R.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eU,
              onClose: n
            }) : (0, a.jsx)(I.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: ei.menus,
              children: [(0, a.jsx)(D.Z.Overlay, {
                className: ei.menuOverlay,
                children: (0, a.jsxs)(Y.XE, {
                  children: [(0, a.jsx)(Y.V4, {
                    action: "EDIT_PROFILE",
                    label: em ? er.intl.string(er.t.Ip9nBS) : er.intl.string(er.t.s5vZlQ),
                    icon: c.vdY,
                    onClick: eq,
                    renderSubmenu: eK ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": er.intl.string(er.t.szTA8E),
                        onClose: t,
                        children: eQ
                      })
                    } : true,
                    trailing: eW ? (0, a.jsx)(c.IGR, {
                      text: er.intl.string(er.t.y2b7CA)
                    }) : true,
                    ref: eA
                  }), (0, a.jsx)(Y.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(X.Z, {}),
                    sublabel: null != e_ && e_,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: ey,
                      size: 12
                    }),
                    trailing: (eE || ey === et.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "set-status-submenu",
                        className: ei.statusPickerModalMenu,
                        "aria-label": er.intl.string(er.t.E13trI),
                        onClose: t,
                        children: eO
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
                        return (0, a.jsx)(l.IX, (t = es({
                          onClose: r
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": er.intl.string(er.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": er.intl.string(er.t.E13trI),
                            className: ei.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
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
              }), (0, a.jsx)(D.Z.Overlay, {
                className: ei.menuOverlay,
                children: (0, a.jsxs)(Y.XE, {
                  children: [(0, a.jsx)(Y.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: er.intl.string(er.t.oMNyYN),
                    onClick: () => {
                      n(), (0, ee.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": er.intl.string(er.t.wFhVqL),
                        onClose: t,
                        children: eN
                      })
                    }
                  }), !__OVERLAY__ && V.wS && eT && (0, a.jsx)(Y.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: er.intl.string(er.t["/AXYnE"]),
                    onClick: () => {
                      (0, V.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == eh ? true : eh.profileEffect) != null && !eD.current && (0, a.jsx)(j.Z, {
            skuId: eh.profileEffect.skuId,
            isHovering: ej
          })]
        }), !eK && eY ? (0, a.jsx)(Q.Z, {
          targetElementRef: eA,
          onClose: n
        }) : null, (0, a.jsx)(g.Z, {})]
      })
    })
  })
}