/** Chunk was on web.js **/
/** chunk id: 78933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ed
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
  Chunk138005 = require("./138005.js"),
  Chunk593540 = require("./593540.js");

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function el(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ec(e, t) {
  if (null == e) return {};
  var n, r, i = eu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eu(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function ed(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: ea,
    highlightBadge: es,
    openedAt: eu
  } = e, ed = __OVERLAY__, ef = (0, T.ZP)(t.id), {
    analyticsLocations: e_
  } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT), ep = (0, O.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: eh
  } = (0, u.ZP)(), em = (0, d.Z)(eh);
  i.useEffect(() => {
    null == ea || ea(eh.current)
  }, [eh, ea]), i.useEffect(() => (W.Z.setState({
    isOpen: true
  }), () => W.Z.setState({
    isOpen: false
  })), []);
  let eg = (0, o.e7)([Z.Z], () => Z.Z.getStatus(t.id)),
    eE = B.Cr.useSetting(),
    eb = (0, X.F)(eE),
    {
      expiringStatusProfileFeedback: ey
    } = g.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eO = (0, o.e7)([F.Z], () => F.Z.hidePersonalInformation),
    ev = (0, E.p)(),
    eI = B.Sb.useSetting(),
    eT = (0, X.I)(eg),
    eS = (0, K.g)(n),
    eA = (0, b.Z)({
      analyticsLocations: e_
    }),
    eC = (0, Y.I5)(t),
    eN = (0, p.p)({
      location: "UserProfileAccountPopout"
    }),
    eR = (0, I.b)({
      location: "UserProfileAccountPopout"
    }),
    eP = i.useRef(null),
    ew = i.useRef((0, W.Z)(e => e.shouldRenderTenureLevelUp)),
    eD = i.useMemo(() => (0, h.Z)(), []),
    [ex, eL] = i.useState(true);
  i.useEffect(() => {
    setTimeout(() => {
      eL(false)
    }, 500)
  }, []);
  let ej = e => {
      null == n || n(), (0, S.openUserProfileModal)(eo({
        customStatusPrompt: eD,
        sourceAnalyticsLocations: e_
      }, ep, e))
    },
    eM = (0, v.P)({
      location: "UserProfileAccountPopout"
    }),
    ek = (null == ef ? true : ef.widgets) != null && ef.widgets.length > 0,
    eU = eM && ek,
    eG = ek ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
    [eB, eZ] = (0, m.US)(eG),
    eF = eB === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE;
  return (0, r.jsx)(_.Gt, {
    value: e_,
    children: (0, r.jsx)(O.Mt, {
      value: ep,
      openedAt: eu,
      fetchStartedAt: null == ef ? true : ef.fetchStartedAt,
      fetchEndedAt: null == ef ? true : ef.fetchEndedAt,
      isLoaded: null == ef ? true : ef.isLoaded,
      children: (0, r.jsxs)(c.VqE, {
        ref: eh,
        "aria-label": t.username,
        children: [(0, r.jsxs)(x.Z, {
          className: er.themeContainer,
          user: t,
          displayProfile: ef,
          themeType: et.l.POPOUT,
          children: [(0, r.jsxs)("div", {
            className: ei.header,
            children: [(0, r.jsx)(N.Z, {
              user: t,
              displayProfile: ef,
              themeType: et.l.POPOUT
            }), (0, r.jsx)(A.Z, {
              user: t,
              displayProfile: ef,
              themeType: et.l.POPOUT,
              onOpenProfile: ed ? true : ej
            }), (0, r.jsx)(M.Z, {
              ref: eP,
              user: t,
              themeType: et.l.POPOUT,
              onCloseProfile: n,
              prompt: eN ? eD : null
            })]
          }), (0, r.jsxs)(c.Ttm, {
            className: er.body,
            style: {
              pointerEvents: ex ? "none" : true
            },
            children: [(0, r.jsx)(L.Z, {
              user: t,
              className: er.username,
              nickname: H.ZP.getName(null, null, t),
              onOpenProfile: ed ? true : ej,
              pronouns: null == ef ? true : ef.pronouns,
              tags: (0, r.jsx)(C.Z, {
                displayProfile: ef,
                themeType: et.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != es ? e => e === es : true,
                shouldGlowTenureBadge: ew.current
              }),
              nicknameIcons: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(w.Z, {
                  userId: t.id
                }), (0, r.jsx)(j.Z, {
                  user: t,
                  isHovering: em
                })]
              })
            }), (0, r.jsx)(U.Z, {
              user: t,
              bio: null == ef ? true : ef.bio,
              hidePersonalInformation: eO,
              onClose: n
            }), eU && (0, r.jsx)(k.Z, {
              widgets: ef.gameWidgets,
              onClick: () => {
                n(), ej({
                  section: ee.oh.WIDGETS
                })
              }
            }), (0, r.jsx)(R.Z, {
              isPremiumUser: eC,
              onInteraction: n
            }), eR ? (0, r.jsx)(D.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: ej,
              onClose: n
            }) : (0, r.jsx)(P.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, r.jsxs)("div", {
              className: er.menus,
              children: [(0, r.jsx)(x.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, r.jsxs)(z.XE, {
                  children: [(0, r.jsx)(z.V4, {
                    action: "EDIT_PROFILE",
                    label: en.intl.string(en.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: () => {
                      eZ($.L.USER_DISMISS), eA(), n()
                    },
                    trailing: eF ? (0, r.jsx)(c.IGR, {
                      text: en.intl.string(en.t.y2b7CA)
                    }) : true
                  }), (0, r.jsx)(z.V4, {
                    action: "PRESS_SET_STATUS",
                    label: (0, r.jsx)(q.Z, {}),
                    sublabel: ey && null != eb && eb,
                    icon: () => (0, r.jsx)(c.qbd, {
                      status: eg,
                      size: 12
                    }),
                    trailing: (ev || eg === J.Skl.DND) && (0, r.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: a.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(z.gp, {
                        navId: "set-status-submenu",
                        className: er.statusPickerModalMenu,
                        "aria-label": en.intl.string(en.t.E13trK),
                        onClose: t,
                        children: eT
                      })
                    },
                    onClick: a.tq ? () => {
                      n(), (0, c.ZDy)(() => new Promise(e => e(e => {
                        var {
                          onClose: t
                        } = e, n = ec(e, ["onClose"]);
                        return (0, r.jsx)(l.IX, el(eo({
                          onClose: t
                        }, n), {
                          size: "sm",
                          "aria-label": en.intl.string(en.t["3Uj+2t"]),
                          children: (0, r.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": en.intl.string(en.t.E13trK),
                            className: er.statusPickerModal,
                            hideScroller: true,
                            onClose: t,
                            onSelect: true,
                            children: eT
                          })
                        }))
                      })))
                    } : true
                  })]
                })
              }), (0, r.jsx)(x.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, r.jsxs)(z.XE, {
                  children: [(0, r.jsx)(z.V4, {
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: en.intl.string(en.t.oMNyYG),
                    onClick: () => {
                      n(), (0, Q.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(z.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": en.intl.string(en.t.wFhVqK),
                        onClose: t,
                        children: eS
                      })
                    }
                  }), !__OVERLAY__ && V.wS && eI && (0, r.jsx)(z.V4, {
                    action: "COPY_USER_ID",
                    icon: c.VuL,
                    label: en.intl.string(en.t["/AXYnJ"]),
                    onClick: () => {
                      (0, V.JG)(t.id), n()
                    }
                  })]
                })
              })]
            })]
          }), (null == ef ? true : ef.profileEffect) != null && !ew.current && (0, r.jsx)(y.Z, {
            profileEffectId: ef.profileEffect.id,
            isHovering: em
          })]
        }), (0, r.jsx)(G.Z, {})]
      })
    })
  })
}