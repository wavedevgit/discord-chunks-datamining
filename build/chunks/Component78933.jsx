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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54482 = require("./54482.js"),
  Chunk116649 = require("./116649.js");

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
  } = e, ed = __OVERLAY__, ef = (0, S.ZP)(t.id), {
    analyticsLocations: e_
  } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT), ep = (0, I.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: eh
  } = (0, u.ZP)(), em = (0, d.Z)(eh);
  i.useEffect(() => {
    null == ea || ea(eh.current)
  }, [eh, ea]), i.useEffect(() => (z.Z.setState({
    isOpen: true
  }), () => z.Z.setState({
    isOpen: false
  })), []);
  let eg = (0, o.e7)([F.Z], () => F.Z.getStatus(t.id)),
    eE = Z.Cr.useSetting(),
    eb = (0, J.F)(eE),
    {
      expiringStatusProfileFeedback: ey
    } = b.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eO = (0, o.e7)([H.Z], () => H.Z.hidePersonalInformation),
    ev = (0, y.p)(),
    eI = Z.Sb.useSetting(),
    eT = (0, J.I)(eg),
    eS = (0, q.g)(n),
    eA = (0, O.Z)({
      analyticsLocations: e_
    }),
    eC = (0, K.I5)(t),
    eN = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eR = (0, T.b)({
      location: "UserProfileAccountPopout"
    }),
    eP = (0, p.Z)({
      location: "UserProfileAccountPopout"
    }),
    ew = i.useRef(null),
    [eD, ex] = i.useState(String(Date.now()));
  (0, V.fu)({
    targetElementRef: ew,
    onGetElementDimensionsAndBoundingRect: e => {
      let {
        hasElementPositionChanged: t
      } = e;
      t && ex(String(Date.now()))
    }
  });
  let [eL, ej] = (0, E.US)(eP ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []), eM = eL === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK, ek = i.useRef((0, z.Z)(e => e.shouldRenderTenureLevelUp)), eU = i.useMemo(() => (0, m.Z)(), []), [eG, eB] = i.useState(true);
  i.useEffect(() => {
    setTimeout(() => {
      eB(false)
    }, 500)
  }, []);
  let eZ = e => {
      null == n || n(), (0, A.openUserProfileModal)(eo({
        customStatusPrompt: eU,
        sourceAnalyticsLocations: e_
      }, ep, e))
    },
    eV = (null == ef ? true : ef.profileEffectId) != null && !ek.current;
  return (0, r.jsx)(_.Gt, {
    value: e_,
    children: (0, r.jsx)(I.Mt, {
      value: ep,
      openedAt: eu,
      fetchStartedAt: null == ef ? true : ef.fetchStartedAt,
      fetchEndedAt: null == ef ? true : ef.fetchEndedAt,
      isLoaded: null == ef ? true : ef.isLoaded,
      children: (0, r.jsxs)(c.VqE, {
        ref: eh,
        "aria-label": t.username,
        children: [(0, r.jsxs)(j.Z, {
          className: er.themeContainer,
          user: t,
          displayProfile: ef,
          themeType: et.l.POPOUT,
          children: [(0, r.jsxs)("div", {
            className: ei.header,
            children: [(0, r.jsx)(R.Z, {
              user: t,
              displayProfile: ef,
              themeType: et.l.POPOUT
            }), (0, r.jsx)(C.Z, {
              user: t,
              displayProfile: ef,
              themeType: et.l.POPOUT,
              onOpenProfile: ed ? true : eZ
            }), eM ? (0, r.jsx)(g.Z, {
              positionKey: eD,
              onTryFeature: n,
              targetElementRef: ew,
              markAsDismissed: ej,
              children: () => (0, r.jsx)(U.Z, {
                ref: ew,
                location: "UserProfileAccountPopout",
                user: t,
                themeType: et.l.POPOUT,
                onCloseProfile: n,
                prompt: eU
              })
            }) : (0, r.jsx)(U.Z, {
              location: "UserProfileAccountPopout",
              user: t,
              themeType: et.l.POPOUT,
              onCloseProfile: n,
              prompt: eN ? eU : null
            })]
          }), (0, r.jsxs)(c.Ttm, {
            className: er.body,
            style: {
              pointerEvents: eG ? "none" : true
            },
            children: [(0, r.jsx)(M.Z, {
              user: t,
              className: er.username,
              nickname: W.ZP.getName(null, null, t),
              onOpenProfile: ed ? true : eZ,
              pronouns: null == ef ? true : ef.pronouns,
              tags: (0, r.jsx)(N.Z, {
                displayProfile: ef,
                themeType: et.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != es ? e => e === es : true,
                shouldGlowTenureBadge: ek.current
              }),
              nicknameIcons: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(x.Z, {
                  userId: t.id
                }), (0, r.jsx)(k.Z, {
                  user: t,
                  isHovering: em
                })]
              })
            }), (0, r.jsx)(G.Z, {
              user: t,
              bio: null == ef ? true : ef.bio,
              hidePersonalInformation: eO,
              onClose: n
            }), (0, r.jsx)(P.Z, {
              isPremiumUser: eC,
              onInteraction: n
            }), eR ? (0, r.jsx)(L.Z, {
              user: t,
              currentUser: t,
              displayProfile: ef,
              onOpenUserProfileModal: eZ,
              onClose: n
            }) : (0, r.jsx)(D.Z, {
              user: t,
              currentUser: t,
              displayProfile: ef,
              onClose: n
            }), (0, r.jsxs)("div", {
              className: er.menus,
              children: [(0, r.jsx)(j.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, r.jsxs)(X.XE, {
                  id: "profile-".concat(t.id),
                  children: [(0, r.jsx)(X.V4, {
                    id: "edit-profile",
                    action: "EDIT_PROFILE",
                    label: en.intl.string(en.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: () => {
                      eA(), n()
                    }
                  }), (0, r.jsx)(w.Z, {
                    className: er.menuDivider
                  }), (0, r.jsx)(X.V4, {
                    id: "set-status",
                    action: "PRESS_SET_STATUS",
                    label: (0, r.jsx)(Q.Z, {}),
                    sublabel: ey && null != eb && (0, r.jsx)(c.Text, {
                      color: "currentColor",
                      variant: "text-xs/medium",
                      children: eb
                    }),
                    icon: () => (0, r.jsx)(c.qbd, {
                      status: eg,
                      size: 12
                    }),
                    hint: (ev || eg === ee.Skl.DND) && (0, r.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: a.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(X.gp, {
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
                        return (0, r.jsx)(l.I, el(eo({
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
              }), (0, r.jsx)(j.Z.Overlay, {
                className: er.menuOverlay,
                children: (0, r.jsxs)(X.XE, {
                  id: "account-".concat(t.id),
                  children: [(0, r.jsx)(X.V4, {
                    id: "switch-accounts",
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: c.lMe,
                    label: en.intl.string(en.t.oMNyYG),
                    onClick: () => {
                      n(), (0, $.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(X.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": en.intl.string(en.t.wFhVqK),
                        onClose: t,
                        children: eS
                      })
                    }
                  }), !__OVERLAY__ && Y.wS && eI && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(w.Z, {
                      className: er.menuDivider
                    }), (0, r.jsx)(X.V4, {
                      id: "copy-user-id",
                      action: "COPY_USER_ID",
                      icon: c.VuL,
                      label: en.intl.string(en.t["/AXYnJ"]),
                      onClick: () => {
                        (0, Y.JG)(t.id), n()
                      }
                    })]
                  })]
                })
              })]
            })]
          }), eV && (0, r.jsx)(v.Z, {
            profileEffectId: null == ef ? true : ef.profileEffectId,
            isHovering: em
          })]
        }), (0, r.jsx)(B.Z, {})]
      })
    })
  })
}