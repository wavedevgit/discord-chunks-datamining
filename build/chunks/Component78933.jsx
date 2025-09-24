/** Chunk was on 11222 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk257465 = require("./257465.jsx"),
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
  Chunk300284 = require("./300284.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk461133 = require("./461133.js"),
  Chunk209698 = require("./209698.js"),
  Chunk687158 = require("./687158.js"),
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
  Chunk252748 = require("./252748.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk785184 = require("./785184.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk158776 = require("./158776.js"),
  Chunk246946 = require("./246946.js"),
  Chunk572004 = require("./572004.js"),
  Chunk5192 = require("./5192.js"),
  Chunk74538 = require("./74538.js"),
  Chunk7093 = require("./7093.js"),
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
    openedAt: eo
  } = e, ec = __OVERLAY__, ed = (0, E.ZP)(t.id), {
    analyticsLocations: eu
  } = (0, p.ZP)(m.Z.USER_PROFILE_ACCOUNT_POPOUT), em = (0, _.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: ep
  } = (0, d.ZP)(), eh = (0, u.Z)(ep);
  r.useEffect(() => {
    null == el || el(ep.current)
  }, [ep, el]), r.useEffect(() => (W.Z.setState({
    isOpen: true
  }), () => W.Z.setState({
    isOpen: false
  })), []);
  let ex = (0, l.e7)([B.Z], () => B.Z.getStatus(t.id)),
    ef = F.Cr.useSetting(),
    eb = (0, X.F)(ef),
    {
      expiringStatusProfileFeedback: eg
    } = b.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    ev = (0, l.e7)([G.Z], () => G.Z.hidePersonalInformation),
    ej = (0, g.p)(),
    e_ = F.Sb.useSetting(),
    ey = (0, X.I)(ex),
    eC = (0, q.g)(n),
    eE = (0, v.Z)({
      analyticsLocations: eu
    }),
    eN = (0, H.I5)(t),
    eS = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eT = (0, C.b)({
      location: "UserProfileAccountPopout"
    }),
    eO = r.useRef(null),
    eP = r.useRef((0, W.Z)(e => e.shouldRenderTenureLevelUp)),
    eI = r.useMemo(() => (0, x.Z)(), []),
    [ek, ew] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      ew(false)
    }, 500)
  }, []);
  let eR = e => {
      null == n || n(), (0, N.openUserProfileModal)(ei({
        customStatusPrompt: eI,
        sourceAnalyticsLocations: eu
      }, em, e))
    },
    eA = (0, y.P)({
      location: "UserProfileAccountPopout"
    }),
    eZ = (null == ed ? true : ed.widgets) != null && ed.widgets.length > 0,
    eD = eZ ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eL, eM] = (0, f.US)(eD),
    eU = eL === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE;
  return (0, a.jsx)(p.Gt, {
    value: eu,
    children: (0, a.jsx)(_.Mt, {
      value: em,
      openedAt: eo,
      fetchStartedAt: null == ed ? true : ed.fetchStartedAt,
      fetchEndedAt: null == ed ? true : ed.fetchEndedAt,
      isLoaded: null == ed ? true : ed.isLoaded,
      children: (0, a.jsxs)(c.VqE, {
        ref: ep,
        "aria-label": t.username,
        children: [(0, a.jsxs)(R.Z, {
          className: ea.themeContainer,
          user: t,
          displayProfile: ed,
          themeType: et.l.POPOUT,
          children: [(0, a.jsxs)("div", {
            className: er.header,
            children: [(0, a.jsx)(O.Z, {
              user: t,
              displayProfile: ed,
              themeType: et.l.POPOUT
            }), (0, a.jsx)(S.Z, {
              user: t,
              displayProfile: ed,
              themeType: et.l.POPOUT,
              onOpenProfile: ec ? true : eR
            }), (0, a.jsx)(D.Z, {
              ref: eO,
              user: t,
              themeType: et.l.POPOUT,
              onCloseProfile: n,
              prompt: eS ? eI : null
            })]
          }), (0, a.jsxs)(c.Ttm, {
            className: ea.body,
            style: {
              pointerEvents: ek ? "none" : true
            },
            children: [(0, a.jsx)(A.Z, {
              user: t,
              className: ea.username,
              nickname: V.ZP.getName(null, null, t),
              onOpenProfile: ec ? true : eR,
              pronouns: null == ed ? true : ed.pronouns,
              tags: (0, a.jsx)(T.Z, {
                displayProfile: ed,
                themeType: et.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != es ? e => e === es : true,
                shouldGlowTenureBadge: eP.current
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(k.Z, {
                  userId: t.id
                }), (0, a.jsx)(Z.Z, {
                  user: t,
                  isHovering: eh
                })]
              })
            }), (0, a.jsx)(M.Z, {
              user: t,
              bio: null == ed ? true : ed.bio,
              hidePersonalInformation: ev,
              onClose: n
            }), eA && eZ && (0, a.jsx)(L.Z, {
              widgets: ed.gameWidgets,
              onClick: () => {
                n(), eR({
                  section: ee.oh.WIDGETS
                })
              }
            }), (0, a.jsx)(P.Z, {
              isPremiumUser: eN,
              onInteraction: n
            }), eT ? (0, a.jsx)(w.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eR,
              onClose: n
            }) : (0, a.jsx)(I.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, a.jsxs)("div", {
              className: ea.menus,
              children: [(0, a.jsx)(R.Z.Overlay, {
                className: ea.menuOverlay,
                children: (0, a.jsxs)(K.XE, {
                  children: [(0, a.jsx)(K.V4, {
                    action: "EDIT_PROFILE",
                    label: en.intl.string(en.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: () => {
                      eM(Q.L.USER_DISMISS), eE(), n()
                    },
                    trailing: eU ? (0, a.jsx)(c.IGR, {
                      text: en.intl.string(en.t.y2b7CA)
                    }) : true
                  }), (0, a.jsx)(K.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, a.jsx)(Y.Z, {}),
                    sublabel: eg && null != eb && eb,
                    icon: () => (0, a.jsx)(c.qbd, {
                      status: ex,
                      size: 12
                    }),
                    trailing: (ej || ex === $.Skl.DND) && (0, a.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: i.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(K.gp, {
                        navId: "set-status-submenu",
                        className: ea.statusPickerModalMenu,
                        "aria-label": en.intl.string(en.t.E13trK),
                        onClose: t,
                        children: ey
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
                        return (0, a.jsx)(o.IX, (t = ei({
                          onClose: r
                        }, i), n = n = {
                          size: "sm",
                          "aria-label": en.intl.string(en.t["3Uj+2t"]),
                          children: (0, a.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": en.intl.string(en.t.E13trK),
                            className: ea.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
                            onSelect: true,
                            children: ey
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
                children: (0, a.jsxs)(K.XE, {
                  children: [(0, a.jsx)(K.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: en.intl.string(en.t.oMNyYG),
                    onClick: () => {
                      n(), (0, J.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, a.jsx)(K.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": en.intl.string(en.t.wFhVqK),
                        onClose: t,
                        children: eC
                      })
                    }
                  }), !__OVERLAY__ && z.wS && e_ && (0, a.jsx)(K.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: en.intl.string(en.t["/AXYnJ"]),
                    onClick: () => {
                      (0, z.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ed ? true : ed.profileEffect) != null && !eP.current && (0, a.jsx)(j.Z, {
            profileEffectId: ed.profileEffect.id,
            isHovering: eh
          })]
        }), (0, a.jsx)(U.Z, {})]
      })
    })
  })
}