/** Chunk was on 66181 **/
/** chunk id: 78933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ea
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

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function ea(e) {
  let {
    currentUser: t,
    onClose: n,
    setPopoutRef: ea,
    highlightBadge: el,
    openedAt: eo
  } = e, ec = __OVERLAY__, ed = (0, S.ZP)(t.id), {
    analyticsLocations: eu
  } = (0, p.ZP)(m.Z.USER_PROFILE_ACCOUNT_POPOUT), em = (0, O.ZB)({
    layout: "ACCOUNT_POPOUT",
    userId: t.id
  }), {
    ref: ep
  } = (0, d.ZP)(), eg = (0, u.Z)(ep);
  r.useEffect(() => {
    null == ea || ea(ep.current)
  }, [ep, ea]), r.useEffect(() => (K.Z.setState({
    isOpen: true
  }), () => K.Z.setState({
    isOpen: false
  })), []);
  let eh = (0, a.e7)([F.Z], () => F.Z.getStatus(t.id)),
    ef = V.Cr.useSetting(),
    eb = (0, Q.F)(ef),
    {
      expiringStatusProfileFeedback: ex
    } = _.Y.useExperiment({
      location: "UserProfileAccountPopout"
    }, {
      autoTrackExposure: false
    }),
    e_ = (0, a.e7)([H.Z], () => H.Z.hidePersonalInformation),
    ej = (0, j.p)(),
    eE = V.Sb.useSetting(),
    eC = (0, Q.I)(eh),
    eO = (0, q.g)(n),
    ev = (0, E.Z)({
      analyticsLocations: eu
    }),
    eS = (0, Y.I5)(t),
    eT = (0, h.p)({
      location: "UserProfileAccountPopout"
    }),
    eN = (0, v.b)({
      location: "UserProfileAccountPopout"
    }),
    eI = (0, g.Z)({
      location: "UserProfileAccountPopout"
    }),
    ey = r.useRef(null),
    [eA, eP] = r.useState(String(Date.now()));
  (0, G.fu)({
    targetElementRef: ey,
    onGetElementDimensionsAndBoundingRect: e => {
      let {
        hasElementPositionChanged: t
      } = e;
      t && eP(String(Date.now()))
    }
  });
  let [eR, eD] = (0, x.US)(eI ? [l.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []), eZ = eR === l.z.CUSTOM_STATUS_PROMPTS_COACHMARK, ew = r.useRef((0, K.Z)(e => e.shouldRenderTenureLevelUp)), ek = r.useMemo(() => (0, f.Z)(), []), [eL, eB] = r.useState(true);
  r.useEffect(() => {
    setTimeout(() => {
      eB(false)
    }, 500)
  }, []);
  let eM = e => {
      null == n || n(), (0, T.openUserProfileModal)(es({
        customStatusPrompt: ek,
        sourceAnalyticsLocations: eu
      }, em, e))
    },
    eU = (null == ed ? true : ed.profileEffectId) != null && !ew.current;
  return (0, i.jsx)(p.Gt, {
    value: eu,
    children: (0, i.jsx)(O.Mt, {
      value: em,
      openedAt: eo,
      fetchStartedAt: null == ed ? true : ed.fetchStartedAt,
      fetchEndedAt: null == ed ? true : ed.fetchEndedAt,
      isLoaded: null == ed ? true : ed.isLoaded,
      children: (0, i.jsxs)(c.VqE, {
        ref: ep,
        "aria-label": t.username,
        children: [(0, i.jsxs)(w.Z, {
          className: ei.themeContainer,
          user: t,
          displayProfile: ed,
          themeType: et.l.POPOUT,
          children: [(0, i.jsxs)("div", {
            className: er.header,
            children: [(0, i.jsx)(y.Z, {
              user: t,
              displayProfile: ed,
              themeType: et.l.POPOUT
            }), (0, i.jsx)(N.Z, {
              user: t,
              displayProfile: ed,
              themeType: et.l.POPOUT,
              onOpenProfile: ec ? true : eM
            }), eZ ? (0, i.jsx)(b.Z, {
              positionKey: eA,
              onTryFeature: n,
              targetElementRef: ey,
              markAsDismissed: eD,
              children: () => (0, i.jsx)(B.Z, {
                ref: ey,
                location: "UserProfileAccountPopout",
                user: t,
                themeType: et.l.POPOUT,
                onCloseProfile: n,
                prompt: ek
              })
            }) : (0, i.jsx)(B.Z, {
              location: "UserProfileAccountPopout",
              user: t,
              themeType: et.l.POPOUT,
              onCloseProfile: n,
              prompt: eT ? ek : null
            })]
          }), (0, i.jsxs)(c.Ttm, {
            className: ei.body,
            style: {
              pointerEvents: eL ? "none" : true
            },
            children: [(0, i.jsx)(k.Z, {
              user: t,
              className: ei.username,
              nickname: W.ZP.getName(null, null, t),
              onOpenProfile: ec ? true : eM,
              pronouns: null == ed ? true : ed.pronouns,
              tags: (0, i.jsx)(I.Z, {
                displayProfile: ed,
                themeType: et.l.POPOUT,
                onClose: n,
                shouldOpenBadgeTooltip: null != el ? e => e === el : true,
                shouldGlowTenureBadge: ew.current
              }),
              nicknameIcons: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(D.Z, {
                  userId: t.id
                }), (0, i.jsx)(L.Z, {
                  user: t,
                  isHovering: eg
                })]
              })
            }), (0, i.jsx)(M.Z, {
              user: t,
              bio: null == ed ? true : ed.bio,
              hidePersonalInformation: e_,
              onClose: n
            }), (0, i.jsx)(A.Z, {
              isPremiumUser: eS,
              onInteraction: n
            }), eN ? (0, i.jsx)(Z.Z, {
              user: t,
              currentUser: t,
              displayProfile: ed,
              onOpenUserProfileModal: eM,
              onClose: n
            }) : (0, i.jsx)(R.Z, {
              user: t,
              currentUser: t,
              displayProfile: ed,
              onClose: n
            }), (0, i.jsxs)("div", {
              className: ei.menus,
              children: [(0, i.jsx)(w.Z.Overlay, {
                className: ei.menuOverlay,
                children: (0, i.jsxs)(X.XE, {
                  id: "profile-".concat(t.id),
                  children: [(0, i.jsx)(X.V4, {
                    id: "edit-profile",
                    action: "EDIT_PROFILE",
                    label: en.intl.string(en.t.s5vZlZ),
                    icon: c.vdY,
                    onClick: () => {
                      ev(), n()
                    }
                  }), (0, i.jsx)(P.Z, {
                    className: ei.menuDivider
                  }), (0, i.jsx)(X.V4, {
                    id: "set-status",
                    action: "PRESS_SET_STATUS",
                    label: (0, i.jsx)(J.Z, {}),
                    sublabel: ex && null != eb && (0, i.jsx)(c.Text, {
                      color: "currentColor",
                      variant: "text-xs/medium",
                      children: eb
                    }),
                    icon: () => (0, i.jsx)(c.qbd, {
                      status: eh,
                      size: 12
                    }),
                    hint: (ej || eh === ee.Skl.DND) && (0, i.jsx)(c.owu, {
                      size: "xxs"
                    }),
                    renderSubmenu: s.tq ? true : e => {
                      let {
                        closePopout: t
                      } = e;
                      return (0, i.jsx)(X.gp, {
                        navId: "set-status-submenu",
                        className: ei.statusPickerModalMenu,
                        "aria-label": en.intl.string(en.t.E13trK),
                        onClose: t,
                        children: eC
                      })
                    },
                    onClick: s.tq ? () => {
                      n(), (0, c.ZDy)(() => new Promise(e => e(e => {
                        var t, n, {
                            onClose: r
                          } = e,
                          s = function(e, t) {
                            if (null == e) return {};
                            var n, i, r = function(e, t) {
                              if (null == e) return {};
                              var n, i, r = {},
                                s = Object.keys(e);
                              for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                              return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                              var s = Object.getOwnPropertySymbols(e);
                              for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                            }
                            return r
                          }(e, ["onClose"]);
                        return (0, i.jsx)(o.I, (t = es({
                          onClose: r
                        }, s), n = n = {
                          size: "sm",
                          "aria-label": en.intl.string(en.t["3Uj+2t"]),
                          children: (0, i.jsx)(c.v2r, {
                            navId: "set-status-submenu-mobile-web",
                            variant: "fixed",
                            "aria-label": en.intl.string(en.t.E13trK),
                            className: ei.statusPickerModal,
                            hideScroller: true,
                            onClose: r,
                            onSelect: true,
                            children: eC
                          })
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i)
                          }
                          return n
                        })(Object(n)).forEach(function(e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }), t))
                      })))
                    } : true
                  })]
                })
              }), (0, i.jsx)(w.Z.Overlay, {
                className: ei.menuOverlay,
                children: (0, i.jsxs)(X.XE, {
                  id: "account-".concat(t.id),
                  children: [(0, i.jsx)(X.V4, {
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
                      return (0, i.jsx)(X.gp, {
                        navId: "switch-accounts-submenu",
                        "aria-label": en.intl.string(en.t.wFhVqK),
                        onClose: t,
                        children: eO
                      })
                    }
                  }), !__OVERLAY__ && z.wS && eE && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(P.Z, {
                      className: ei.menuDivider
                    }), (0, i.jsx)(X.V4, {
                      id: "copy-user-id",
                      action: "COPY_USER_ID",
                      icon: c.VuL,
                      label: en.intl.string(en.t["/AXYnJ"]),
                      onClick: () => {
                        (0, z.JG)(t.id), n()
                      }
                    })]
                  })]
                })
              })]
            })]
          }), eU && (0, i.jsx)(C.Z, {
            profileEffectId: null == ed ? true : ed.profileEffectId,
            isHovering: eg
          })]
        }), (0, i.jsx)(U.Z, {})]
      })
    })
  })
}