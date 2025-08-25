/** Chunk was on web.js **/
/** chunk id: 78933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => e_
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
  Chunk359588 = require("./359588.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk526031 = require("./526031.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk440051 = require("./440051.js"),
  Chunk734934 = require("./734934.js"),
  Chunk300284 = require("./300284.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk209698 = require("./209698.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk483517 = require("./483517.jsx"),
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
  Chunk622562 = require("./622562.jsx"),
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

function es(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      es(e, t, n[t])
    })
  }
  return e
}

function ec(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eu(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ec(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ed(e, t) {
  if (null == e) return {};
  var n, r, i = ef(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ef(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function e_(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: es,
    highlightBadge: ec,
    openedAt: ef
  } = e, e_ = __OVERLAY__, ep = (0, S.ZP)(t.id), {
    analyticsLocations: eh
  } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT), em = (0, I.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: eg
  } = (0, u.ZP)(), eE = (0, d.Z)(eg);
  i.useEffect(() => {
    null == es || es(eg.current)
  }, [eg, es]), i.useEffect(() => (q.Z.setState({
    isOpen: true
  }), () => q.Z.setState({
    isOpen: false
  })), []);
  let eb = (0, o.e7)([H.Z], () => H.Z.getStatus(t.id)),
    ey = F.Cr.useSetting(),
    eO = (0, $.F)(ey),
    {
      expiringStatusProfileFeedback: ev
    } = b.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eI = (0, o.e7)([Y.Z], () => Y.Z.hidePersonalInformation),
    eT = (0, y.p)(),
    eS = F.Sb.useSetting(),
    eA = (0, $.I)(eb),
    eC = (0, X.g)(n),
    eN = (0, O.Z)({
      analyticsLocations: eh
    }),
    eR = (0, z.I5)(t),
    eP = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    ew = (0, T.b)({
      location: "UserProfileAccountPopout"
    }),
    eD = (0, p.Z)({
      location: "UserProfileAccountPopout"
    }),
    ex = i.useRef(null),
    [eL, ej] = i.useState(String(Date.now()));
  (0, V.fu)({
    targetElementRef: ex,
    onGetElementDimensionsAndBoundingRect: e => {
      let {
        hasElementPositionChanged: t
      } = e;
      t && ej(String(Date.now()))
    }
  });
  let [ek, eM] = (0, E.US)(eD ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []), eU = ek === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK, eG = i.useRef((0, q.Z)(e => e.shouldRenderTenureLevelUp)), eB = i.useMemo(() => (0, m.Z)(), []), [eZ, eF] = i.useState(true);
  i.useEffect(() => {
    setTimeout(() => {
      eF(false)
    }, 500)
  }, []);
  let eV = e => {
      null == n || n(), (0, A.openUserProfileModal)(el({
        customStatusPrompt: eB,
        sourceAnalyticsLocations: eh
      }, em, e))
    },
    eH = (null == ep ? true : ep.widgets) != null && ep.widgets.length > 0;
  return (0, r.jsx)(_.Gt, {
    value: eh,
    children: (0, r.jsx)(I.Mt, {
      value: em,
      openedAt: ef,
      fetchStartedAt: null == ep ? true : ep.fetchStartedAt,
      fetchEndedAt: null == ep ? true : ep.fetchEndedAt,
      isLoaded: null == ep ? true : ep.isLoaded,
      children: (0, r.jsxs)(c.VqE, {
        ref: eg,
        "aria-label": t.username,
        children: [(0, r.jsxs)(j.Z, {
          className: ea.themeContainer,
          user: t,
          displayProfile: ep,
          themeType: er.l.POPOUT,
          children: [(0, r.jsxs)("div", {
            className: eo.header,
            children: [(0, r.jsx)(R.Z, {
              user: t,
              displayProfile: ep,
              themeType: er.l.POPOUT
            }), (0, r.jsx)(C.Z, {
              user: t,
              displayProfile: ep,
              themeType: er.l.POPOUT,
              onOpenProfile: e_ ? true : eV
            }), eU ? (0, r.jsx)(g.Z, {
              positionKey: eL,
              onTryFeature: n,
              targetElementRef: ex,
              markAsDismissed: eM,
              children: () => (0, r.jsx)(U.Z, {
                ref: ex,
                user: t,
                themeType: er.l.POPOUT,
                onCloseProfile: n,
                prompt: eB
              })
            }) : (0, r.jsx)(U.Z, {
              user: t,
              themeType: er.l.POPOUT,
              onCloseProfile: n,
              prompt: eP ? eB : null
            })]
          }), (0, r.jsxs)(c.Ttm, {
            className: ea.body,
            style: {
              pointerEvents: eZ ? "none" : true
            },
            children: [(0, r.jsx)(k.Z, {
              user: t,
              className: ea.username,
              nickname: K.ZP.getName(null, null, t),
              onOpenProfile: e_ ? true : eV,
              pronouns: null == ep ? true : ep.pronouns,
              tags: (0, r.jsx)(N.Z, {
                displayProfile: ep,
                themeType: er.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != ec ? e => e === ec : true,
                shouldGlowTenureBadge: eG.current
              }),
              nicknameIcons: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(x.Z, {
                  userId: t.id
                }), (0, r.jsx)(M.Z, {
                  user: t,
                  isHovering: eE
                })]
              })
            }), (0, r.jsx)(B.Z, {
              user: t,
              bio: null == ep ? true : ep.bio,
              hidePersonalInformation: eI,
              onClose: n
            }), eH && (0, r.jsx)(G.Z, {
              widgets: ep.widgets,
              onClick: () => {
                n(), eV({
                  section: en.oh.WIDGETS
                })
              }
            }), (0, r.jsx)(P.Z, {
              isPremiumUser: eR,
              onInteraction: n
            }), ew ? (0, r.jsx)(L.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eV,
              onClose: n
            }) : (0, r.jsx)(D.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, r.jsxs)("div", {
              className: ea.menus,
              children: [(0, r.jsx)(j.Z.Overlay, {
                className: ea.menuOverlay,
                children: (0, r.jsxs)(Q.XE, {
                  id: "profile-".concat(t.id),
                  children: [(0, r.jsx)(Q.V4, {
                    id: "edit-profile",
                    action: "EDIT_PROFILE",
                    label: ei.intl.string(ei.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: () => {
                      eN(), n()
                    }
                  }), (0, r.jsx)(w.Z, {
                    className: ea.menuDivider
                  }), (0, r.jsx)(Q.V4, {
                    id: "set-status",
                    action: "PRESS_SET_STATUS",
                    label: (0, r.jsx)(J.Z, {}),
                    sublabel: ev && null != eO && (0, r.jsx)(c.Text, {
                      color: "currentColor",
                      variant: "text-xs/medium",
                      children: eO
                    }),
                    icon: () => (0, r.jsx)(c.qbd, {
                      status: eb,
                      size: 12
                    }),
                    hint: (eT || eb === et.Skl.DND) && (0, r.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: a.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(Q.gp, {
                        navId: "set-status-submenu",
                        className: ea.statusPickerModalMenu,
                        "aria-label": ei.intl.string(ei.t.E13trK),
                        onClose: t,
                        children: eA
                      })
                    },
                    onClick: a.tq ? () => {
                      n(), (0, c.ZDy)(() => new Promise(e => e(e => {
                        var {
                          onClose: t
                        } = e, n = ed(e, ["onClose"]);
                        return (0, r.jsx)(l.I, eu(el({
                          onClose: t
                        }, n), {
                          size: "sm",
                          "aria-label": ei.intl.string(ei.t["3Uj+2t"]),
                          children: (0, r.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ei.intl.string(ei.t.E13trK),
                            className: ea.statusPickerModal,
                            hideScroller: true,
                            onClose: t,
                            onSelect: true,
                            children: eA
                          })
                        }))
                      })))
                    } : true
                  })]
                })
              }), (0, r.jsx)(j.Z.Overlay, {
                className: ea.menuOverlay,
                children: (0, r.jsxs)(Q.XE, {
                  id: "account-".concat(t.id),
                  children: [(0, r.jsx)(Q.V4, {
                    id: "switch-accounts",
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
                      return (0, r.jsx)(Q.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ei.intl.string(ei.t.wFhVqK),
                        onClose: t,
                        children: eC
                      })
                    }
                  }), !__OVERLAY__ && W.wS && eS && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(w.Z, {
                      className: ea.menuDivider
                    }), (0, r.jsx)(Q.V4, {
                      id: "copy-user-id",
                      action: "COPY_USER_ID",
                      icon: c.VuL,
                      label: ei.intl.string(ei.t["/AXYnJ"]),
                      onClick: () => {
                        (0, W.JG)(t.id), n()
                      }
                    })]
                  })]
                })
              })]
            })]
          }), (null == ep ? true : ep.profileEffect) != null && !eG.current && (0, r.jsx)(v.Z, {
            profileEffectId: ep.profileEffect.id,
            isHovering: eE
          })]
        }), (0, r.jsx)(Z.Z, {})]
      })
    })
  })
}