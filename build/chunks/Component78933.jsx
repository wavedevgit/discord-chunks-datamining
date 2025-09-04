/** Chunk was on web.js **/
/** chunk id: 78933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ec
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

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      er(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eo(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function es(e, t) {
  if (null == e) return {};
  var n, r, i = el(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function el(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function ec(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: er,
    highlightBadge: ea,
    openedAt: el
  } = e, ec = __OVERLAY__, eu = (0, v.ZP)(t.id), {
    analyticsLocations: ed
  } = (0, f.ZP)(d.Z.USER_PROFILE_ACCOUNT_POPOUT), ef = (0, b.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: e_
  } = (0, c.ZP)(), ep = (0, u.Z)(e_);
  i.useEffect(() => {
    null == er || er(e_.current)
  }, [e_, er]), i.useEffect(() => (Y.Z.setState({
    isOpen: true
  }), () => Y.Z.setState({
    isOpen: false
  })), []);
  let eh = (0, o.e7)([B.Z], () => B.Z.getStatus(t.id)),
    em = G.Cr.useSetting(),
    eg = (0, q.F)(em),
    {
      expiringStatusProfileFeedback: eE
    } = h.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    eb = (0, o.e7)([Z.Z], () => Z.Z.hidePersonalInformation),
    ey = (0, m.p)(),
    eO = G.Sb.useSetting(),
    ev = (0, q.I)(eh),
    eI = (0, W.g)(n),
    eT = (0, g.Z)({
      analyticsLocations: ed
    }),
    eS = (0, H.I5)(t),
    eA = (0, _.p)({
      location: "UserProfileAccountPopout"
    }),
    eC = (0, O.b)({
      location: "UserProfileAccountPopout"
    }),
    eN = i.useRef(null),
    eR = i.useRef((0, Y.Z)(e => e.shouldRenderTenureLevelUp)),
    eP = i.useMemo(() => (0, p.Z)(), []),
    [ew, eD] = i.useState(true);
  i.useEffect(() => {
    setTimeout(() => {
      eD(false)
    }, 500)
  }, []);
  let ex = e => {
      null == n || n(), (0, I.openUserProfileModal)(ei({
        customStatusPrompt: eP,
        sourceAnalyticsLocations: ed
      }, ef, e))
    },
    eL = (0, y.P)({
      location: "UserProfileAccountPopout"
    }),
    ej = (null == eu ? true : eu.widgets) != null && eu.widgets.length > 0,
    eM = eL && ej;
  return (0, r.jsx)(f.Gt, {
    value: ed,
    children: (0, r.jsx)(b.Mt, {
      value: ef,
      openedAt: el,
      fetchStartedAt: null == eu ? true : eu.fetchStartedAt,
      fetchEndedAt: null == eu ? true : eu.fetchEndedAt,
      isLoaded: null == eu ? true : eu.isLoaded,
      children: (0, r.jsxs)(l.VqE, {
        ref: e_,
        "aria-label": t.username,
        children: [(0, r.jsxs)(D.Z, {
          className: et.themeContainer,
          user: t,
          displayProfile: eu,
          themeType: $.l.POPOUT,
          children: [(0, r.jsxs)("div", {
            className: en.header,
            children: [(0, r.jsx)(A.Z, {
              user: t,
              displayProfile: eu,
              themeType: $.l.POPOUT
            }), (0, r.jsx)(T.Z, {
              user: t,
              displayProfile: eu,
              themeType: $.l.POPOUT,
              onOpenProfile: ec ? true : ex
            }), (0, r.jsx)(j.Z, {
              ref: eN,
              user: t,
              themeType: $.l.POPOUT,
              onCloseProfile: n,
              prompt: eA ? eP : null
            })]
          }), (0, r.jsxs)(l.Ttm, {
            className: et.body,
            style: {
              pointerEvents: ew ? "none" : true
            },
            children: [(0, r.jsx)(x.Z, {
              user: t,
              className: et.username,
              nickname: V.ZP.getName(null, null, t),
              onOpenProfile: ec ? true : ex,
              pronouns: null == eu ? true : eu.pronouns,
              tags: (0, r.jsx)(S.Z, {
                displayProfile: eu,
                themeType: $.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != ea ? e => e === ea : true,
                shouldGlowTenureBadge: eR.current
              }),
              nicknameIcons: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(P.Z, {
                  userId: t.id
                }), (0, r.jsx)(L.Z, {
                  user: t,
                  isHovering: ep
                })]
              })
            }), (0, r.jsx)(k.Z, {
              user: t,
              bio: null == eu ? true : eu.bio,
              hidePersonalInformation: eb,
              onClose: n
            }), eM && (0, r.jsx)(M.Z, {
              widgets: eu.widgets,
              onClick: () => {
                n(), ex({
                  section: J.oh.WIDGETS
                })
              }
            }), (0, r.jsx)(C.Z, {
              isPremiumUser: eS,
              onInteraction: n
            }), eC ? (0, r.jsx)(w.Z, {
              user: t,
              currentUser: t,
              onOpenUserProfileModal: ex,
              onClose: n
            }) : (0, r.jsx)(R.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }), (0, r.jsxs)("div", {
              className: et.menus,
              children: [(0, r.jsx)(D.Z.Overlay, {
                className: et.menuOverlay,
                children: (0, r.jsxs)(K.XE, {
                  id: "profile-".concat(t.id),
                  children: [(0, r.jsx)(K.V4, {
                    id: "edit-profile",
                    action: "EDIT_PROFILE",
                    label: ee.intl.string(ee.t.s5vZlZ),
                    icon: l.vdY,
                    onClick: () => {
                      eT(), n()
                    }
                  }), (0, r.jsx)(N.Z, {
                    className: et.menuDivider
                  }), (0, r.jsx)(K.V4, {
                    id: "set-status",
                    action: "PRESS_SET_STATUS",
                    label: (0, r.jsx)(z.Z, {}),
                    sublabel: eE && null != eg && (0, r.jsx)(l.Text, {
                      color: "currentColor",
                      variant: "text-xs/medium",
                      children: eg
                    }),
                    icon: () => (0, r.jsx)(l.qbd, {
                      status: eh,
                      size: 12
                    }),
                    hint: (ey || eh === Q.Skl.DND) && (0, r.jsx)(l.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: a.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(K.gp, {
                        navId: "set-status-submenu",
                        className: et.statusPickerModalMenu,
                        "aria-label": ee.intl.string(ee.t.E13trK),
                        onClose: t,
                        children: ev
                      })
                    },
                    onClick: a.tq ? () => {
                      n(), (0, l.ZDy)(() => new Promise(e => e(e => {
                        var {
                          onClose: t
                        } = e, n = es(e, ["onClose"]);
                        return (0, r.jsx)(s.I, eo(ei({
                          onClose: t
                        }, n), {
                          size: "sm",
                          "aria-label": ee.intl.string(ee.t["3Uj+2t"]),
                          children: (0, r.jsx)(l.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": ee.intl.string(ee.t.E13trK),
                            className: et.statusPickerModal,
                            hideScroller: true,
                            onClose: t,
                            onSelect: true,
                            children: ev
                          })
                        }))
                      })))
                    } : true
                  })]
                })
              }), (0, r.jsx)(D.Z.Overlay, {
                className: et.menuOverlay,
                children: (0, r.jsxs)(K.XE, {
                  id: "account-".concat(t.id),
                  children: [(0, r.jsx)(K.V4, {
                    id: "switch-accounts",
                    action: "PRESS_SWITCH_ACCOUNTS",
                    icon: l.lMe,
                    label: ee.intl.string(ee.t.oMNyYG),
                    onClick: () => {
                      n(), (0, X.Z)()
                    },
                    renderSubmenu: e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, r.jsx)(K.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": ee.intl.string(ee.t.wFhVqK),
                        onClose: t,
                        children: eI
                      })
                    }
                  }), !__OVERLAY__ && F.wS && eO && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(N.Z, {
                      className: et.menuDivider
                    }), (0, r.jsx)(K.V4, {
                      id: "copy-user-id",
                      action: "COPY_USER_ID",
                      icon: l.VuL,
                      label: ee.intl.string(ee.t["/AXYnJ"]),
                      onClick: () => {
                        (0, F.JG)(t.id), n()
                      }
                    })]
                  })]
                })
              })]
            })]
          }), (null == eu ? true : eu.profileEffect) != null && !eR.current && (0, r.jsx)(E.Z, {
            profileEffectId: eu.profileEffect.id,
            isHovering: ep
          })]
        }), (0, r.jsx)(U.Z, {})]
      })
    })
  })
}