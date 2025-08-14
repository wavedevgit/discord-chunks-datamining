/** Chunk was on 76708 **/
/** chunk id: 595145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666520 = require("./666520.jsx"),
  Chunk727637 = require("./727637.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk320582 = require("./320582.js"),
  Chunk246016 = require("./246016.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk189156 = require("./189156.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5192 = require("./5192.js"),
  Chunk111361 = require("./111361.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk771362 = require("./771362.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk113557 = require("./113557.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk681837 = require("./681837.jsx"),
  Chunk78806 = require("./78806.jsx"),
  Chunk91433 = require("./91433.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk900927 = require("./900927.jsx"),
  Chunk944043 = require("./944043.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk179828 = require("./179828.jsx"),
  Chunk993160 = require("./993160.jsx"),
  Chunk574887 = require("./574887.jsx"),
  Chunk693408 = require("./693408.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk76076 = require("./76076.jsx"),
  Chunk872269 = require("./872269.js"),
  Chunk768111 = require("./768111.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk293496 = require("./293496.js");

function en(e) {
  var t;
  let {
    user: n,
    currentUser: en,
    guildId: er,
    channelId: el,
    messageId: ei,
    roleId: eo,
    sessionId: ea,
    initialSection: ec,
    initialSubsection: es,
    transitionState: ed,
    customStatusPrompt: eu,
    openedAt: ef,
    onClose: ep,
    showGuildProfile: em = true,
    sourceAnalyticsLocations: eg = [],
    disableActionsForPreview: eb = false
  } = e, {
    analyticsLocations: ej
  } = (0, f.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]), ey = (0, P.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    sourceSessionId: ea,
    guildId: er,
    channelId: el,
    messageId: ei,
    roleId: eo,
    showGuildProfile: em
  }), ex = l.useRef(null), eO = (0, s.Z)(ex), [eh, ev] = l.useState(false), e_ = (0, N.$m)(), eI = (0, a.q_F)({
    opacity: +(null != e_.interactionType),
    config: {
      duration: 150
    }
  }), eP = l.useMemo(() => null != er ? {
    [er]: [n.id]
  } : {}, [er, n.id]);
  (0, d.$)(eP);
  let eE = (0, T.ZP)(n.id, em ? er : true),
    eT = _.ZP.useName(null == eE ? true : eE.guildId, el, n),
    {
      relationshipType: eZ,
      originApplicationId: eN
    } = (0, o.cj)([O.Z], () => ({
      relationshipType: O.Z.getRelationshipType(n.id),
      originApplicationId: O.Z.getOriginApplicationId(n.id)
    })),
    eS = (0, o.e7)([h.Z], () => h.Z.hidePersonalInformation),
    ew = null == eE ? true : eE.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eA = (0, m.p)({
      location: "UserProfileModalV2"
    }),
    eC = l.useMemo(() => null != eu ? eu : (0, g.Z)(), [eu]),
    eD = (0, q.Z)({
      user: n,
      currentUser: en
    }),
    eL = (0, j.Y)({
      userId: n.id
    }),
    eR = (0, b.vh)(n.id),
    eG = (0, Z.Z)(n.id),
    ek = (0, p.Dt)(),
    eB = ee.intl.format(ee.t.KRe1Fh, {
      name: eT
    });
  return l.useEffect(() => {
    let e = () => {
      ev(true), setTimeout(() => {
        ev(false)
      }, 1e3)
    };
    return v.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e), () => {
      v.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, J.L$)(null)
    }
  }, []), (0, r.jsx)(f.Gt, {
    value: ej,
    children: (0, r.jsx)(P.Mt, {
      value: ey,
      openedAt: ef,
      fetchStartedAt: null == eE ? true : eE.fetchStartedAt,
      fetchEndedAt: null == eE ? true : eE.fetchEndedAt,
      isLoaded: null == eE ? true : eE.isLoaded,
      children: (0, r.jsx)(N.NJ, {
        value: e_,
        children: (0, r.jsx)(a.UkV, {
          isShaking: eh,
          intensity: 1.4,
          children: (0, r.jsxs)(a.Y0X, {
            "data-migration-pending": true,
            hideShadow: true,
            className: et.root,
            transitionState: ed,
            "aria-labelledby": ek,
            parentComponent: "UserProfileModalV2",
            children: [eb ? (0, r.jsxs)("div", {
              className: et.previewBar,
              children: [(0, r.jsxs)(a.X6q, {
                id: ek,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, r.jsx)(a.nn4, {
                  children: "".concat(ee.intl.string(ee.t.apViam), ": ").concat(eB)
                }), (0, r.jsx)("span", {
                  "aria-hidden": true,
                  children: ee.intl.string(ee.t.apViam)
                })]
              }), (0, r.jsx)(a.zxk, {
                size: "sm",
                variant: "secondary",
                text: ee.intl.string(ee.t.ojM1xM),
                onClick: ep,
                "aria-label": ee.intl.string(ee.t.cpT0Cg)
              })]
            }) : (0, r.jsx)(a.nn4, {
              children: (0, r.jsx)(a.H, {
                id: ek,
                children: eB
              })
            }), (0, r.jsx)(a.y5t, {
              children: (0, r.jsxs)(U.Z, {
                className: eb ? et.disabled : true,
                user: n,
                displayProfile: eE,
                themeType: Q.lY.MODAL_V2,
                children: [null != ew && (0, r.jsx)("div", {
                  className: et.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(ew, ")")
                  }
                }), null != e_.interactionType && (0, r.jsx)(i.animated.div, {
                  style: eI,
                  className: et.backdrop
                }), (0, r.jsx)(X.Z, {
                  onAutoHide: () => (0, J.L$)(null),
                  className: et.toast
                }), (0, r.jsxs)("div", {
                  className: et.profile,
                  ref: (null == eE ? true : eE.profileEffectId) != null ? ex : true,
                  children: [(0, r.jsxs)("div", {
                    className: et.profileHeader,
                    children: [(0, r.jsx)(A.Z, {
                      user: n,
                      displayProfile: eE,
                      themeType: Q.lY.MODAL_V2
                    }), (0, r.jsx)(k.Z, {
                      userId: n.id,
                      onClose: ep,
                      className: et.interactionToast
                    }), (0, r.jsx)(S.Z, {
                      location: "UserProfileModalV2",
                      user: n,
                      displayProfile: eE,
                      guildId: er,
                      channelId: el,
                      themeType: Q.lY.MODAL_V2
                    }), (0, r.jsx)(V.Z, {
                      location: "UserProfileModalV2",
                      user: n,
                      guildId: er,
                      channelId: el,
                      themeType: Q.lY.MODAL_V2,
                      hasEntered: ed === a.Dvm.ENTERED,
                      prompt: eA && n.id === en.id ? eC : null,
                      disableToolbar: eb
                    })]
                  }), (0, r.jsxs)(a.Ttm, {
                    fade: true,
                    className: et.profileBody,
                    children: [(0, r.jsx)(F.Z, {
                      user: n,
                      onClose: ep,
                      nickname: _.ZP.useName(null == eE ? true : eE.guildId, el, n),
                      nicknameIcons: (0, r.jsx)(L.Z, {
                        size: "sm",
                        userId: n.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eE ? true : eE.pronouns,
                      tags: (0, r.jsx)(w.Z, {
                        displayProfile: eE,
                        themeType: Q.lY.MODAL_V2,
                        onClose: ep
                      })
                    }), eZ === $.OGo.PENDING_INCOMING && (0, r.jsx)(U.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, r.jsx)(G.Z, {
                        user: n,
                        applicationId: eN,
                        guildId: null != (t = null == eE ? true : eE.guildId) ? t : true,
                        channelId: el,
                        className: et.profileBanner
                      })
                    }), eR.map(e => {
                      var t;
                      let {
                        applicationId: l
                      } = e;
                      return (0, r.jsx)(U.Z.Overlay, {
                        className: et.profileOverlay,
                        children: (0, r.jsx)(G.Z, {
                          user: n,
                          guildId: null != (t = null == eE ? true : eE.guildId) ? t : true,
                          channelId: el,
                          isGameRelationship: true,
                          applicationId: l,
                          className: et.profileBanner
                        })
                      }, l)
                    }), n.isProvisional && (0, r.jsx)(U.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, r.jsx)(z.Z, {
                        heading: ee.intl.string(ee.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, r.jsx)(a.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: et.profileBanner,
                        children: (0, r.jsx)(x.n, {
                          userId: n.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), n.id === en.id && (0, r.jsx)(D.Z, {
                      isPremiumUser: (0, I.I5)(en),
                      onInteraction: ep
                    }), (0, r.jsx)(M.Z, {
                      user: n,
                      className: et.profileBanner
                    }), (0, r.jsx)("div", {
                      className: et.profileButtons,
                      children: (0, r.jsx)(W.Z, {
                        user: n,
                        currentUser: en,
                        guildId: er,
                        channelId: el,
                        displayProfile: eE,
                        relationshipType: eZ,
                        onClose: ep
                      })
                    }), (null == eE ? true : eE.bio) != null && (null == eE ? true : eE.bio) !== "" && !eS && (0, r.jsx)(C.Z, {
                      userBio: eE.bio,
                      setLineClamp: false
                    }), eL.length > 0 && (0, r.jsx)(z.Z, {
                      heading: ee.intl.string(ee.t["Uv/eT0"]),
                      children: (0, r.jsx)(R.Z, {
                        applicationIds: eL
                      })
                    }), (0, r.jsx)(z.Z, {
                      heading: ee.intl.string(ee.t.a6XYDw),
                      children: (0, r.jsx)(B.Z, {
                        userId: n.id,
                        guildId: null == eE ? true : eE.guildId,
                        tooltipDelay: Q.vB
                      })
                    }), (null == eE ? true : eE.guildId) != null && (0, r.jsx)(Y.Z, {
                      user: n,
                      currentUser: en,
                      guildId: eE.guildId,
                      className: et.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: es === Q.Tb.ROLES
                    }), eG.length > 0 && (0, r.jsx)(z.Z, {
                      heading: ee.intl.string(ee.t["3fe7U1"]),
                      scrollIntoView: es === Q.Tb.CONNECTIONS,
                      children: (0, r.jsx)(H.Z, {
                        connections: eG,
                        userId: n.id,
                        className: et.profileAppConnections
                      })
                    }), (0, r.jsx)(z.Z, {
                      heading: ee.intl.string(ee.t["mQKv+v"]),
                      scrollIntoView: es === Q.Tb.NOTE,
                      children: (0, r.jsx)(c.Z, {
                        userId: n.id,
                        className: et.profileNote,
                        autoFocus: es === Q.Tb.NOTE,
                        onUpdate: () => (0, E.pQ)(function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                              var r;
                              r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: true,
                                configurable: true,
                                writable: true
                              }) : e[t] = r
                            })
                          }
                          return e
                        }({
                          action: "SET_NOTE"
                        }, ey))
                      })
                    })]
                  }), (null == eE ? true : eE.profileEffectId) != null && (0, r.jsx)(y.Z, {
                    profileEffectId: null == eE ? true : eE.profileEffectId,
                    isHovering: eO
                  })]
                }), (0, r.jsx)(K.Z, {
                  user: n,
                  currentUser: en,
                  displayProfile: eE,
                  guildId: er,
                  channelId: el,
                  items: eD,
                  initialSection: ec,
                  initialSubsection: es,
                  onClose: ep
                })]
              })
            })]
          })
        })
      })
    })
  })
}