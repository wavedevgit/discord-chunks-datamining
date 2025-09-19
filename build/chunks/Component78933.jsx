/** Chunk was on web.js **/
/** chunk id: 78933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
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
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54482 = require("./54482.js"),
  Chunk116649 = require("./116649.js");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function ei(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ea(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ei(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eo(e, t) {
  if (null == e) return {};
  var n, r, i = es(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function es(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function el(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: en,
    highlightBadge: ei,
    openedAt: es
  } = e, el = __OVERLAY__, ec = (0, v.ZP)(t.id), {
    analyticsLocations: eu
  } = (0, f.ZP)(d.Z.USER_PROFILE_ACCOUNT_POPOUT), ed = (0, b.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: ef
  } = (0, c.ZP)(), e_ = (0, u.Z)(ef);
  i.useEffect(() => {
    null == en || en(ef.current)
  }, [ef, en]), i.useEffect(() => (H.Z.setState({
    isOpen: true
  }), () => H.Z.setState({
    isOpen: false
  })), []);
  let ep = (0, o.e7)([G.Z], () => G.Z.getStatus(t.id)),
    eh = U.Cr.useSetting(),
    em = (0, z.F)(eh),
    {
      expiringStatusProfileFeedback: eg
    } = h.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eE = (0, o.e7)([B.Z], () => B.Z.hidePersonalInformation),
    eb = (0, m.p)(),
    ey = U.Sb.useSetting(),
    eO = (0, z.I)(ep),
    ev = (0, Y.g)(n),
    eI = (0, g.Z)({
      analyticsLocations: eu
    }),
    eT = (0, V.I5)(t),
    eS = (0, _.p)({
      location: "UserProfileAccountPopout"
    }),
    eA = (0, O.b)({
      location: "UserProfileAccountPopout"
    }),
    eC = i.useRef(null),
    eN = i.useRef((0, H.Z)(e => e.shouldRenderTenureLevelUp)),
    eR = i.useMemo(() => (0, p.Z)(), []),
    [eP, ew] = i.useState(true);
  i.useEffect(() => {
    setTimeout(() => {
      ew(false)
    }, 500)
  }, []);
  let eD = e => {
      null == n || n(), (0, I.openUserProfileModal)(er({
        customStatusPrompt: eR,
        sourceAnalyticsLocations: eu
      }, ed, e))
    },
    ex = (0, y.P)({
      location: "UserProfileAccountPopout"
    }),
    eL = (null == ec ? true : ec.widgets) != null && ec.widgets.length > 0,
    ej = ex && eL;
  return (0, r.jsx)(f.Gt, {
    value: eu,
    children: (0, r.jsx)(b.Mt, {
      value: ed,
      openedAt: es,
      fetchStartedAt: null == ec ? true : ec.fetchStartedAt,
      fetchEndedAt: null == ec ? true : ec.fetchEndedAt,
      isLoaded: null == ec ? true : ec.isLoaded,
      children: (0, r.jsxs)(l.VqE, {
        ref: ef,
        "aria-label": t.username,
        children: [(0, r.jsxs)(w.Z, {
          className: ee.themeContainer,
          user: t,
          displayProfile: ec,
          themeType: J.l.POPOUT,
          children: [(0, r.jsxs)("div", {
            className: et.header,
            children: [(0, r.jsx)(A.Z, {
              user: t,
              displayProfile: ec,
              themeType: J.l.POPOUT
            }), (0, r.jsx)(T.Z, {
              user: t,
              displayProfile: ec,
              themeType: J.l.POPOUT,
              onOpenProfile: el ? true : eD
            }), (0, r.jsx)(L.Z, {
              ref: eC,
              user: t,
              themeType: J.l.POPOUT,
              onCloseProfile: n,
              prompt: eS ? eR : null
            })]
          }), (0, r.jsxs)(l.Ttm, {
            className: ee.body,
            style: {
              pointerEvents: eP ? "none" : true
            },
            children: [(0, r.jsx)(D.Z, {
              user: t,
              className: ee.username,
              nickname: F.ZP.getName(null, null, t),
              onOpenProfile: el ? true : eD,
              pronouns: null == ec ? true : ec.pronouns,
              tags: (0, r.jsx)(S.Z, {
                displayProfile: ec,
                themeType: J.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != ei ? e => e === ei : true,
                shouldGlowTenureBadge: eN.current
              }),
              nicknameIcons: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(R.Z, {
                  userId: t.id
                }), (0, r.jsx)(x.Z, {
                  user: t,
                  isHovering: e_
                })]
              })
            }), (0, r.jsx)(M.Z, {
              user: t,
              bio: null == ec ? true : ec.bio,
              hidePersonalInformation: eE,
              onClose: n
            }), ej && (0, r.jsx)(j.Z, {
              widgets: ec.gameWidgets,
              onClick: () => {
                n(), eD({
                  section: Q.oh.WIDGETS
                })
              }
            }), (0, r.jsx)(C.Z, {
              isPremiumUser: eT,
              onInteraction: n
            }), eA ? (0, r.jsx)(P.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eD,
              onClose: n
            }) : (0, r.jsx)(N.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, r.jsxs)("div", {
              className: ee.menus,
              children: [(0, r.jsx)(w.Z.Overlay, {
                className: ee.menuOverlay,
                children: (0, r.jsxs)(W.XE, {
                  children: [(0, r.jsx)(W.V4, {
                    action: "EDIT_PROFILE",
                    label: $.intl.string($.t.s5vZlZ),
                    icon: l.vdY,
                    onClick: () => {
                      eI(), n()
                    }
                  }), (0, r.jsx)(W.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, r.jsx)(K.Z, {}),
                    sublabel: eg && null != em && em,
                    icon: () => (0, r.jsx)(l.qbd, {
                      status: ep,
                      size: 12
                    }),
                    trailing: (eb || ep === X.Skl.DND) && (0, r.jsx)(l.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: a.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(W.gp, {
                        navId: "set-status-submenu",
                        className: ee.statusPickerModalMenu,
                        "aria-label": $.intl.string($.t.E13trK),
                        onClose: t,
                        children: eO
                      })
                    },
                    onClick: a.tq ? () => {
                      n(), (0, l.ZDy)(() => new Promise(e => e(e => {
                        var {
                          onClose: t
                        } = e, n = eo(e, ["onClose"]);
                        return (0, r.jsx)(s.I, ea(er({
                          onClose: t
                        }, n), {
                          size: "sm",
                          "aria-label": $.intl.string($.t["3Uj+2t"]),
                          children: (0, r.jsx)(l.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": $.intl.string($.t.E13trK),
                            className: ee.statusPickerModal,
                            hideScroller: true,
                            onClose: t,
                            onSelect: true,
                            children: eO
                          })
                        }))
                      })))
                    } : true
                  })]
                })
              }), (0, r.jsx)(w.Z.Overlay, {
                className: ee.menuOverlay,
                children: (0, r.jsxs)(W.XE, {
                  children: [(0, r.jsx)(W.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: l.lMe,
                    label: $.intl.string($.t.oMNyYG),
                    onClick: () => {
                      n(), (0, q.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(W.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": $.intl.string($.t.wFhVqK),
                        onClose: t,
                        children: ev
                      })
                    }
                  }), !__OVERLAY__ && Z.wS && ey && (0, r.jsx)(W.V4, {
                    action: "COPY_USER_ID",
                    icon: l.VuL,
                    label: $.intl.string($.t["/AXYnJ"]),
                    onClick: () => {
                      (0, Z.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ec ? true : ec.profileEffect) != null && !eN.current && (0, r.jsx)(E.Z, {
            profileEffectId: ec.profileEffect.id,
            isHovering: e_
          })]
        }), (0, r.jsx)(k.Z, {})]
      })
    })
  })
}