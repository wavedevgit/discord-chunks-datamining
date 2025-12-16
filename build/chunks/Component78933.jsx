/** Chunk was on 29725 **/
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
  Chunk659158 = require("./659158.js"),
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
  } = e, eh = __OVERLAY__, ef = (0, E.ZP)(t.id, em), {
    analyticsLocations: ex
  } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT), eb = (0, y.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id,
    guildId: em
  }), {
    ref: eg,
    height: ev
  } = (0, d.ZP)(), {
    isHoveringOrFocusing: ej,
    isHovering: ey
  } = (0, p.Z)(eg);
  r.useEffect(() => {
    null == ec || ec(eg.current)
  }, [eg, ec]), r.useEffect(() => (K.Z.setState({
    isOpen: true
  }), () => K.Z.setState({
    isOpen: false
  })), []);
  let eC = (0, s.e7)([G.Z], () => G.Z.getStatus(t.id)),
    e_ = F.Cr.useSetting(),
    eS = (0, ee.F)(e_),
    eE = (0, s.e7)([V.Z], () => V.Z.hidePersonalInformation),
    eT = (0, b.p)(),
    eO = F.Sb.useSetting(),
    eN = (0, ee.I)(eC),
    ew = (0, Y.g)(n),
    eP = (0, v.Z)({
      analyticsLocations: ex
    }),
    eI = (0, W.I5)(t),
    ek = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eR = (0, S.b)({
      location: "UserProfileAccountPopout"
    }),
    eA = r.useRef(null),
    eZ = r.useRef(null),
    eD = r.useRef((0, K.Z)(e => e.shouldRenderTenureLevelUp)),
    eL = r.useMemo(() => (0, f.Z)(), []),
    [eM, eU] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eU(false)
    }, 500)
  }, []);
  let eB = e => {
      null == n || n(), (0, O.openUserProfileModal)(eo({
        customStatusPrompt: eL,
        sourceAnalyticsLocations: ex
      }, eb, e))
    },
    eF = (0, T.Z)({
      location: "UserProfileAccountPopout"
    }),
    eG = (null == ef ? true : ef.widgets) != null && ef.widgets.length > 0,
    eV = eG ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eH, ez] = (0, x.US)(eV),
    eW = eH === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
    eK = r.useCallback(() => {
      ez(ea.L.USER_DISMISS), n()
    }, [ez, n]),
    eq = r.useCallback(() => {
      ep && null != em || (eP(), eK())
    }, [eP, eK, ep, em]),
    eY = ep && null != em,
    eQ = (0, q.K)(em, ex, eW, n, eK),
    eX = (0, _.k)({
      location: "UserProfileAccountPopout"
    }),
    eJ = (0, C.S)({
      location: "UserProfileAccountPopout"
    });
  return (0, a.jsx)(m.Gt, {
    value: ex,
    children: (0, a.jsx)(y.Mt, {
      value: eb,
      openedAt: eu,
      fetchStartedAt: null == ef ? true : ef.fetchStartedAt,
      fetchEndedAt: null == ef ? true : ef.fetchEndedAt,
      isLoaded: null == ef ? true : ef.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: eg,
        "aria-label": t.username,
        className: ei.popoutContainer,
        "data-layer": "base",
        children: [(0, a.jsx)($.Z, {
          displayProfile: ef,
          handleOpenUserProfileModal: eB,
          height: ev
        }), (0, a.jsxs)(D.Z, {
          className: ei.themeContainer,
          user: t,
          displayProfile: ef,
          themeType: er.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: es.header,
            children: [(0, a.jsx)(P.Z, {
              user: t,
              displayProfile: ef,
              themeType: er.l.POPOUT
            }), (0, a.jsx)(N.Z, {
              user: t,
              displayProfile: ef,
              themeType: er.l.POPOUT,
              onOpenProfile: eh ? true : eB
            }), (0, a.jsx)(U.Z, {
              ref: eA,
              user: t,
              themeType: er.l.POPOUT,
              onCloseProfile: n,
              prompt: ek ? eL : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: ei.body,
            style: {
              pointerEvents: eM ? "none" : true
            },
            children: [(0, a.jsx)(R.Z, {
              userId: t.id
            }), (0, a.jsx)(L.Z, {
              user: t,
              className: ei.username,
              nickname: z.ZP.getName(em, null, t),
              onOpenProfile: eh ? true : eB,
              pronouns: null == ef ? true : ef.pronouns,
              tags: (0, a.jsx)(w.Z, {
                displayProfile: ef,
                themeType: er.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != ed ? e => e === ed : true,
                shouldGlowTenureBadge: eD.current
              }),
              nicknameIcons: (0, a.jsx)(M.Z, {
                user: t,
                isVisible: ej
              })
            }), (0, a.jsx)(B.Z, {
              user: t,
              bio: null == ef ? true : ef.bio,
              hidePersonalInformation: eE,
              onClose: n
            }), eF && eG && (0, a.jsx)(Z.Z, {
              user: t,
              widgets: null == ef ? true : ef.widgets,
              onOpenUserProfileModal: eB
            }), (0, a.jsx)(I.Z, {
              isPremiumUser: eI,
              onInteraction: n
            }), eR ? (0, a.jsx)(A.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eB,
              onClose: n
            }) : (0, a.jsx)(k.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: ei.menus,
              children: [(0, a.jsx)(D.Z.Overlay, {
                className: ei.menuOverlay,
                children: (0, a.jsxs)(X.XE, {
                  children: [(0, a.jsx)(X.V4, {
                    action: "EDIT_PROFILE",
                    label: ep ? el.intl.string(el.t.Ip9nBS) : el.intl.string(el.t.s5vZlQ),
                    icon: c.vdY,
                    onClick: eq,
                    renderSubmenu: eY ? e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(X.gp, {
                        navId: "edit-profile-submenu",
                        "aria-label": el.intl.string(el.t.szTA8E),
                        onClose: t,
                        children: eQ
                      })
                    } : true,
                    trailing: eW ? (0, a.jsx)(c.IGR, {
                      text: el.intl.string(el.t.y2b7CA)
                    }) : true,
                    ref: eZ
                  }), (0, a.jsx)(X.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(J.Z, {}),
                    sublabel: null != eS && eS,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: eC,
                      size: 12
                    }),
                    trailing: (eT || eC === en.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: l.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(X.gp, {
                        navId: "set-status-submenu",
                        className: ei.statusPickerModalMenu,
                        "aria-label": el.intl.string(el.t.E13trI),
                        onClose: t,
                        children: eN
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
                        return (0, a.jsx)(i.IX, (t = eo({
                          onClose: r
                        }, l), n = n = {
                          size: "sm",
                          "aria-label": el.intl.string(el.t["3Uj+2p"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": el.intl.string(el.t.E13trI),
                            className: ei.statusPickerModal,
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
              }), (0, a.jsx)(D.Z.Overlay, {
                className: ei.menuOverlay,
                children: (0, a.jsxs)(X.XE, {
                  children: [(0, a.jsx)(X.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: el.intl.string(el.t.oMNyYN),
                    onClick: () => {
                      n(), (0, et.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(X.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": el.intl.string(el.t.wFhVqL),
                        onClose: t,
                        children: ew
                      })
                    }
                  }), !__OVERLAY__ && H.wS && eO && (0, a.jsx)(X.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: el.intl.string(el.t["/AXYnE"]),
                    onClick: () => {
                      (0, H.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ef ? true : ef.profileEffect) != null && !eD.current && (0, a.jsx)(j.Z, {
            skuId: ef.profileEffect.skuId,
            isHovering: ey
          })]
        }), !eY && eX && eJ ? (0, a.jsx)(Q.Z, {
          targetElementRef: eZ,
          onClose: n
        }) : null, (0, a.jsx)(g.Z, {})]
      })
    })
  })
}