/** Chunk was on 6043 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => es
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
  Chunk659158 = require("./659158.js"),
  Chunk880421 = require("./880421.js"),
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
  } = e, em = __OVERLAY__, ep = (0, S.ZP)(t.id, ed), {
    analyticsLocations: eh
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), ef = (0, y.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: ed
  }), {
    ref: ex,
    height: eb
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: eg,
    isHovering: ev
  } = (0, p.Z)(ex);
  r.useEffect(() => {
    null == es || es(ex.current)
  }, [ex, es]), r.useEffect(() => (z.Z.setState({
    isOpen: true
  }), () => z.Z.setState({
    isOpen: false
  })), []);
  let ej = (0, s.e7)([B.Z], () => B.Z.getStatus(t.id)),
    ey = U.Cr.useSetting(),
    eC = (0, J.F)(ey),
    e_ = (0, s.e7)([F.Z], () => F.Z.hidePersonalInformation),
    eS = (0, b.p)(),
    eE = U.Sb.useSetting(),
    eT = (0, J.I)(ej),
    eO = (0, K.g)(n),
    eN = (0, v.Z)({
      analyticsLocations: eh
    }),
    eP = (0, H.I5)(t),
    ew = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eI = r.useRef(null),
    ek = r.useRef(null),
    eR = r.useRef((0, z.Z)(e => e.shouldRenderTenureLevelUp)),
    eA = r.useMemo(() => (0, f.Z)(), []),
    [eZ, eD] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eD(false)
    }, 500)
  }, []);
  let eL = e => {
      null == n || n(), (0, T.openUserProfileModal)(el({
        customStatusPrompt: eA,
        sourceAnalyticsLocations: eh
      }, ef, e))
    },
    eM = (0, E.Z)({
      location: "UserProfileAccountPopout"
    }),
    eU = (null == ep ? true : ep.widgets) != null && ep.widgets.length > 0,
    eB = eU ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eF, eG] = (0, x.US)(eB),
    eV = eF === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eH = r.useCallback(() => {
      eG(et.L.USER_DISMISS), n()
    }, [eG, n]),
    ez = r.useCallback(() => {
      eu && null != ed || (eN(), eH())
    }, [eN, eH, eu, ed]),
    eW = eu && null != ed,
    eK = (0, W.K)(ed, eh, eV, n, eH),
    eq = (0, _.k)({
      location: "UserProfileAccountPopout"
    }),
    eY = (0, C.S)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: eh,
    children: (0, a.jsx)(y.Mt, {
      value: ef,
      openedAt: ec,
      fetchStartedAt: null == ep ? true : ep.fetchStartedAt,
      fetchEndedAt: null == ep ? true : ep.fetchEndedAt,
      isLoaded: null == ep ? true : ep.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: ex,
        "aria-label": t.username,
        className: er.popoutContainer,
        "data-layer": "base",
        children: [(0, a.jsx)(X.Z, {
          displayProfile: ep,
          handleOpenUserProfileModal: eL,
          height: eb
        }), (0, a.jsxs)(A.Z, {
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
            }), (0, a.jsx)(O.Z, {
              user: t,
              displayProfile: ep,
              themeType: en.l.POPOUT,
              onOpenProfile: em ? true : eL
            }), (0, a.jsx)(L.Z, {
              ref: eI,
              user: t,
              themeType: en.l.POPOUT,
              onCloseProfile: n,
              prompt: ew ? eA : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: er.body,
            style: {
              pointerEvents: eZ ? "none" : true
            },
            children: [(0, a.jsx)(I.Z, {
              userId: t.id
            }), (0, a.jsx)(Z.Z, {
              user: t,
              className: er.username,
              nickname: V.ZP.getName(ed, null, t),
              onOpenProfile: em ? true : eL,
              pronouns: null == ep ? true : ep.pronouns,
              tags: (0, a.jsx)(N.Z, {
                displayProfile: ep,
                themeType: en.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != eo ? e => e === eo : true,
                shouldGlowTenureBadge: eR.current
              }),
              nicknameIcons: (0, a.jsx)(D.Z, {
                user: t,
                isVisible: eg
              })
            }), (0, a.jsx)(M.Z, {
              user: t,
              bio: null == ep ? true : ep.bio,
              hidePersonalInformation: e_,
              onClose: n
            }), eM && eU && (0, a.jsx)(R.Z, {
              user: t,
              widgets: null == ep ? true : ep.widgets,
              onOpenUserProfileModal: eL
            }), (0, a.jsx)(w.Z, {
              isPremiumUser: eP,
              onInteraction: n
            }), (0, a.jsx)(k.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eL,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: er.menus,
              children: [(0, a.jsx)(A.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, a.jsxs)(Y.XE, {
                  children: [(0, a.jsx)(Y.V4, {
                    action: "EDIT_PROFILE",
                    label: eu ? ea.intl.string(ea.t.Ip9nBS) : ea.intl.string(ea.t.s5vZlQ),
                    icon: c.vdY,
                    onClick: ez,
                    renderSubmenu: eW ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": ea.intl.string(ea.t.szTA8E),
                        onClose: t,
                        children: eK
                      })
                    } : true,
                    trailing: eV ? (0, a.jsx)(c.IGR, {
                      text: ea.intl.string(ea.t.y2b7CA)
                    }) : true,
                    ref: ek
                  }), (0, a.jsx)(Y.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(Q.Z, {}),
                    sublabel: null != eC && eC,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: ej,
                      size: 12
                    }),
                    trailing: (eS || ej === ee.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "set-status-submenu",
                        className: er.statusPickerModalMenu,
                        "aria-label": ea.intl.string(ea.t.E13trI),
                        onClose: t,
                        children: eT
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
                          "aria-label": ea.intl.string(ea.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ea.intl.string(ea.t.E13trI),
                            className: er.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
                            onSelect: true,
                            children: eT
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
                    label: ea.intl.string(ea.t.oMNyYN),
                    onClick: () => {
                      n(), (0, $.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(Y.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ea.intl.string(ea.t.wFhVqL),
                        onClose: t,
                        children: eO
                      })
                    }
                  }), !__OVERLAY__ && G.wS && eE && (0, a.jsx)(Y.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: ea.intl.string(ea.t["/AXYnE"]),
                    onClick: () => {
                      (0, G.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ep ? true : ep.profileEffect) != null && !eR.current && (0, a.jsx)(j.Z, {
            skuId: ep.profileEffect.skuId,
            isHovering: ev
          })]
        }), !eW && eq && eY ? (0, a.jsx)(q.Z, {
          targetElementRef: ek,
          onClose: n
        }) : null, (0, a.jsx)(g.Z, {})]
      })
    })
  })
}