/** Chunk was on web.js **/
/** chunk id: 78933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ep
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
  Chunk461133 = require("./461133.js"),
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
  Chunk622562 = require("./622562.js"),
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

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      el(e, t, n[t])
    })
  }
  return e
}

function eu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ed(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eu(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ef(e, t) {
  if (null == e) return {};
  var n, r, i = e_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function e_(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function ep(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: el,
    highlightBadge: eu,
    openedAt: e_
  } = e, ep = __OVERLAY__, eh = (0, A.ZP)(t.id), {
    analyticsLocations: em
  } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT), eg = (0, I.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: eE
  } = (0, u.ZP)(), eb = (0, d.Z)(eE);
  i.useEffect(() => {
    null == el || el(eE.current)
  }, [eE, el]), i.useEffect(() => (X.Z.setState({
    isOpen: true
  }), () => X.Z.setState({
    isOpen: false
  })), []);
  let ey = (0, o.e7)([Y.Z], () => Y.Z.getStatus(t.id)),
    eO = V.Cr.useSetting(),
    ev = (0, ee.F)(eO),
    {
      expiringStatusProfileFeedback: eI
    } = b.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eT = (0, o.e7)([W.Z], () => W.Z.hidePersonalInformation),
    eS = (0, y.p)(),
    eA = V.Sb.useSetting(),
    eC = (0, ee.I)(ey),
    eN = (0, Q.g)(n),
    eR = (0, O.Z)({
      analyticsLocations: em
    }),
    eP = (0, q.I5)(t),
    ew = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eD = (0, S.b)({
      location: "UserProfileAccountPopout"
    }),
    ex = (0, p.Z)({
      location: "UserProfileAccountPopout"
    }),
    eL = i.useRef(null),
    [ej, eM] = i.useState(String(Date.now()));
  (0, H.fu)({
    targetElementRef: eL,
    onGetElementDimensionsAndBoundingRect: e => {
      let {
        hasElementPositionChanged: t
      } = e;
      t && eM(String(Date.now()))
    }
  });
  let [ek, eU] = (0, E.US)(ex ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []), eG = ek === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK, eB = i.useRef((0, X.Z)(e => e.shouldRenderTenureLevelUp)), eZ = i.useMemo(() => (0, m.Z)(), []), [eF, eV] = i.useState(true);
  i.useEffect(() => {
    setTimeout(() => {
      eV(false)
    }, 500)
  }, []);
  let eH = e => {
      null == n || n(), (0, C.openUserProfileModal)(ec({
        customStatusPrompt: eZ,
        sourceAnalyticsLocations: em
      }, eg, e))
    },
    eY = (0, T.P)({
      location: "UserProfileAccountPopout"
    }),
    eW = (null == eh ? true : eh.widgets) != null && eh.widgets.length > 0,
    eK = eY && eW;
  return (0, r.jsx)(_.Gt, {
    value: em,
    children: (0, r.jsx)(I.Mt, {
      value: eg,
      openedAt: e_,
      fetchStartedAt: null == eh ? true : eh.fetchStartedAt,
      fetchEndedAt: null == eh ? true : eh.fetchEndedAt,
      isLoaded: null == eh ? true : eh.isLoaded,
      children: (0, r.jsxs)(c.VqE, {
        ref: eE,
        "aria-label": t.username,
        children: [(0, r.jsxs)(M.Z, {
          className: eo.themeContainer,
          user: t,
          displayProfile: eh,
          themeType: ei.l.POPOUT,
          children: [(0, r.jsxs)("div", {
            className: es.header,
            children: [(0, r.jsx)(P.Z, {
              user: t,
              displayProfile: eh,
              themeType: ei.l.POPOUT
            }), (0, r.jsx)(N.Z, {
              user: t,
              displayProfile: eh,
              themeType: ei.l.POPOUT,
              onOpenProfile: ep ? true : eH
            }), eG ? (0, r.jsx)(g.Z, {
              positionKey: ej,
              onTryFeature: n,
              targetElementRef: eL,
              markAsDismissed: eU,
              children: () => (0, r.jsx)(G.Z, {
                ref: eL,
                user: t,
                themeType: ei.l.POPOUT,
                onCloseProfile: n,
                prompt: eZ
              })
            }) : (0, r.jsx)(G.Z, {
              user: t,
              themeType: ei.l.POPOUT,
              onCloseProfile: n,
              prompt: ew ? eZ : null
            })]
          }), (0, r.jsxs)(c.Ttm, {
            className: eo.body,
            style: {
              pointerEvents: eF ? "none" : true
            },
            children: [(0, r.jsx)(k.Z, {
              user: t,
              className: eo.username,
              nickname: z.ZP.getName(null, null, t),
              onOpenProfile: ep ? true : eH,
              pronouns: null == eh ? true : eh.pronouns,
              tags: (0, r.jsx)(R.Z, {
                displayProfile: eh,
                themeType: ei.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != eu ? e => e === eu : true,
                shouldGlowTenureBadge: eB.current
              }),
              nicknameIcons: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(L.Z, {
                  userId: t.id
                }), (0, r.jsx)(U.Z, {
                  user: t,
                  isHovering: eb
                })]
              })
            }), (0, r.jsx)(Z.Z, {
              user: t,
              bio: null == eh ? true : eh.bio,
              hidePersonalInformation: eT,
              onClose: n
            }), eK && (0, r.jsx)(B.Z, {
              widgets: eh.widgets,
              onClick: () => {
                n(), eH({
                  section: er.oh.WIDGETS
                })
              }
            }), (0, r.jsx)(w.Z, {
              isPremiumUser: eP,
              onInteraction: n
            }), eD ? (0, r.jsx)(j.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: eH,
              onClose: n
            }) : (0, r.jsx)(x.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, r.jsxs)("div", {
              className: eo.menus,
              children: [(0, r.jsx)(M.Z.Overlay, {
                className: eo.menuOverlay,
                children: (0, r.jsxs)(J.XE, {
                  id: "profile-".concat(t.id),
                  children: [(0, r.jsx)(J.V4, {
                    id: "edit-profile",
                    action: "EDIT_PROFILE",
                    label: ea.intl.string(ea.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: () => {
                      eR(), n()
                    }
                  }), (0, r.jsx)(D.Z, {
                    className: eo.menuDivider
                  }), (0, r.jsx)(J.V4, {
                    id: "set-status",
                    action: "PRESS_SET_STATUS",
                    label: (0, r.jsx)($.Z, {}),
                    sublabel: eI && null != ev && (0, r.jsx)(c.Text, {
                      color: "currentColor",
                      variant: "text-xs/medium",
                      children: ev
                    }),
                    icon: () => (0, r.jsx)(c.qbd, {
                      status: ey,
                      size: 12
                    }),
                    hint: (eS || ey === en.Skl.DND) && (0, r.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: a.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(J.gp, {
                        navId: "set-status-submenu",
                        className: eo.statusPickerModalMenu,
                        "aria-label": ea.intl.string(ea.t.E13trK),
                        onClose: t,
                        children: eC
                      })
                    },
                    onClick: a.tq ? () => {
                      n(), (0, c.ZDy)(() => new Promise(e => e(e => {
                        var {
                          onClose: t
                        } = e, n = ef(e, ["onClose"]);
                        return (0, r.jsx)(l.I, ed(ec({
                          onClose: t
                        }, n), {
                          size: "sm",
                          "aria-label": ea.intl.string(ea.t["3Uj+2t"]),
                          children: (0, r.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ea.intl.string(ea.t.E13trK),
                            className: eo.statusPickerModal,
                            hideScroller: true,
                            onClose: t,
                            onSelect: true,
                            children: eC
                          })
                        }))
                      })))
                    } : true
                  })]
                })
              }), (0, r.jsx)(M.Z.Overlay, {
                className: eo.menuOverlay,
                children: (0, r.jsxs)(J.XE, {
                  id: "account-".concat(t.id),
                  children: [(0, r.jsx)(J.V4, {
                    id: "switch-accounts",
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: ea.intl.string(ea.t.oMNyYG),
                    onClick: () => {
                      n(), (0, et.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(J.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ea.intl.string(ea.t.wFhVqK),
                        onClose: t,
                        children: eN
                      })
                    }
                  }), !__OVERLAY__ && K.wS && eA && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(D.Z, {
                      className: eo.menuDivider
                    }), (0, r.jsx)(J.V4, {
                      id: "copy-user-id",
                      action: "COPY_USER_ID",
                      icon: c.VuL,
                      label: ea.intl.string(ea.t["/AXYnJ"]),
                      onClick: () => {
                        (0, K.JG)(t.id), n()
                      }
                    })]
                  })]
                })
              })]
            })]
          }), (null == eh ? true : eh.profileEffect) != null && !eB.current && (0, r.jsx)(v.Z, {
            profileEffectId: eh.profileEffect.id,
            isHovering: eb
          })]
        }), (0, r.jsx)(F.Z, {})]
      })
    })
  })
}