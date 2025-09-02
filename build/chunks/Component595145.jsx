/** Chunk was on 93979 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk261616 = require("./261616.js"),
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
  Chunk899007 = require("./899007.jsx"),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk293496 = require("./293496.js");

function el(e) {
  var n;
  let {
    user: t,
    currentUser: el,
    guildId: eo,
    channelId: er,
    messageId: ei,
    roleId: ec,
    sessionId: es,
    initialSection: ea,
    initialSubsection: ed,
    transitionState: eu,
    customStatusPrompt: em,
    openedAt: ef,
    onClose: ep,
    showGuildProfile: ex = true,
    sourceAnalyticsLocations: eh = [],
    disableActionsForPreview: eb = false
  } = e, {
    analyticsLocations: ej
  } = (0, m.ZP)([...eh, u.Z.USER_PROFILE_MODAL_V2]), ev = (0, _.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: es,
    guildId: eo,
    channelId: er,
    messageId: ei,
    roleId: ec,
    showGuildProfile: ex
  }), eg = o.useRef(null), ey = (0, a.Z)(eg), [eO, eI] = o.useState(false), eZ = (0, A.$m)(), e_ = (0, c.q_F)({
    opacity: +(null != eZ.interactionType),
    config: {
      duration: 150
    }
  }), eP = o.useMemo(() => null != eo ? {
    [eo]: [t.id]
  } : {}, [eo, t.id]);
  (0, d.$)(eP, "UserProfileModalV2");
  let eN = (0, N.ZP)(t.id, ex ? eo : true),
    eT = I.ZP.useName(null == eN ? true : eN.guildId, er, t),
    {
      relationshipType: eA,
      originApplicationId: eE
    } = (0, i.cj)([g.Z], () => ({
      relationshipType: g.Z.getRelationshipType(t.id),
      originApplicationId: g.Z.getOriginApplicationId(t.id)
    })),
    eC = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation),
    eS = null == eN ? true : eN.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    ew = (0, p.p)({
      location: "UserProfileModalV2"
    }),
    eD = o.useMemo(() => null != em ? em : (0, x.Z)(), [em]),
    eL = (0, X.Z)({
      user: t,
      currentUser: el
    }),
    eM = (0, b.Y)({
      userId: t.id
    }),
    eR = (0, h.vh)(t.id),
    eB = (0, T.Z)(t.id),
    eU = (0, f.Dt)(),
    ek = en.intl.format(en.t.KRe1Fh, {
      name: eT
    });
  return o.useEffect(() => {
    let e = () => {
      eI(true), setTimeout(() => {
        eI(false)
      }, 1e3)
    };
    return O.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e), () => {
      O.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, q.L$)(null)
    }
  }, []), (0, l.jsx)(m.Gt, {
    value: ej,
    children: (0, l.jsx)(_.Mt, {
      value: ev,
      openedAt: ef,
      fetchStartedAt: null == eN ? true : eN.fetchStartedAt,
      fetchEndedAt: null == eN ? true : eN.fetchEndedAt,
      isLoaded: null == eN ? true : eN.isLoaded,
      children: (0, l.jsx)(A.NJ, {
        value: eZ,
        children: (0, l.jsx)(c.UkV, {
          isShaking: eO,
          intensity: 1.4,
          children: (0, l.jsxs)(c.Y0X, {
            "data-migration-pending": true,
            hideShadow: true,
            className: et.root,
            transitionState: eu,
            "aria-labelledby": eU,
            parentComponent: "UserProfileModalV2",
            children: [eb ? (0, l.jsxs)("div", {
              className: et.previewBar,
              children: [(0, l.jsxs)(c.X6q, {
                id: eU,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(c.nn4, {
                  children: "".concat(en.intl.string(en.t.apViam), ": ").concat(ek)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: en.intl.string(en.t.apViam)
                })]
              }), (0, l.jsx)(c.zxk, {
                size: "sm",
                variant: "secondary",
                text: en.intl.string(en.t.ojM1xM),
                onClick: ep,
                "aria-label": en.intl.string(en.t.cpT0Cg)
              })]
            }) : (0, l.jsx)(c.nn4, {
              children: (0, l.jsx)(c.H, {
                id: eU,
                children: ek
              })
            }), (0, l.jsx)(c.y5t, {
              children: (0, l.jsxs)(G.Z, {
                className: eb ? et.disabled : true,
                user: t,
                displayProfile: eN,
                themeType: ee.l.MODAL_V2,
                children: [null != eS && (0, l.jsx)("div", {
                  className: et.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eS, ")")
                  }
                }), null != eZ.interactionType && (0, l.jsx)(r.animated.div, {
                  style: e_,
                  className: et.backdrop
                }), (0, l.jsx)(J.Z, {
                  onAutoHide: () => (0, q.L$)(null),
                  className: et.toast
                }), (0, l.jsxs)("div", {
                  className: et.profile,
                  ref: (null == eN ? true : eN.profileEffect) != null ? eg : true,
                  children: [(0, l.jsxs)("div", {
                    className: et.profileHeader,
                    children: [(0, l.jsx)(S.Z, {
                      user: t,
                      displayProfile: eN,
                      themeType: ee.l.MODAL_V2
                    }), (0, l.jsx)(B.Z, {
                      userId: t.id,
                      onClose: ep,
                      className: et.interactionToast
                    }), (0, l.jsx)(E.Z, {
                      user: t,
                      displayProfile: eN,
                      guildId: eo,
                      channelId: er,
                      themeType: ee.l.MODAL_V2
                    }), (0, l.jsx)(V.Z, {
                      user: t,
                      guildId: eo,
                      channelId: er,
                      themeType: ee.l.MODAL_V2,
                      hasEntered: eu === c.Dvm.ENTERED,
                      prompt: ew && t.id === el.id ? eD : null,
                      disableToolbar: eb
                    })]
                  }), (0, l.jsxs)(c.Ttm, {
                    fade: true,
                    className: et.profileBody,
                    children: [(0, l.jsx)(F.Z, {
                      user: t,
                      onClose: ep,
                      nickname: I.ZP.useName(null == eN ? true : eN.guildId, er, t),
                      nicknameIcons: (0, l.jsx)(L.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eN ? true : eN.pronouns,
                      tags: (0, l.jsx)(C.Z, {
                        displayProfile: eN,
                        themeType: ee.l.MODAL_V2,
                        onClose: ep
                      })
                    }), eA === $.OGo.PENDING_INCOMING && (0, l.jsx)(G.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, l.jsx)(R.Z, {
                        user: t,
                        applicationId: eE,
                        guildId: null != (n = null == eN ? true : eN.guildId) ? n : true,
                        channelId: er,
                        className: et.profileBanner
                      })
                    }), eR.map(e => {
                      var n;
                      let {
                        applicationId: o
                      } = e;
                      return (0, l.jsx)(G.Z.Overlay, {
                        className: et.profileOverlay,
                        children: (0, l.jsx)(R.Z, {
                          user: t,
                          guildId: null != (n = null == eN ? true : eN.guildId) ? n : true,
                          channelId: er,
                          isGameRelationship: true,
                          applicationId: o,
                          className: et.profileBanner
                        })
                      }, o)
                    }), t.isProvisional && (0, l.jsx)(G.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, l.jsx)(K.Z, {
                        heading: en.intl.string(en.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, l.jsx)(c.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: et.profileBanner,
                        children: (0, l.jsx)(v.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === el.id && (0, l.jsx)(D.Z, {
                      isPremiumUser: (0, Z.I5)(el),
                      onInteraction: ep
                    }), (0, l.jsx)(k.Z, {
                      user: t,
                      className: et.profileBanner
                    }), (0, l.jsx)("div", {
                      className: et.profileButtons,
                      children: (0, l.jsx)(W.Z, {
                        user: t,
                        currentUser: el,
                        guildId: eo,
                        channelId: er,
                        displayProfile: eN,
                        relationshipType: eA,
                        onClose: ep
                      })
                    }), (null == eN ? true : eN.bio) != null && (null == eN ? true : eN.bio) !== "" && !eC && (0, l.jsx)(w.Z, {
                      userBio: eN.bio,
                      setLineClamp: false
                    }), eM.length > 0 && (0, l.jsx)(K.Z, {
                      heading: en.intl.string(en.t["Uv/eT0"]),
                      children: (0, l.jsx)(M.Z, {
                        applicationIds: eM
                      })
                    }), (0, l.jsx)(K.Z, {
                      heading: en.intl.string(en.t.a6XYDw),
                      children: (0, l.jsx)(U.Z, {
                        userId: t.id,
                        guildId: null == eN ? true : eN.guildId,
                        tooltipDelay: Q.vB
                      })
                    }), (null == eN ? true : eN.guildId) != null && (0, l.jsx)(z.Z, {
                      user: t,
                      currentUser: el,
                      guildId: eN.guildId,
                      className: et.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: ed === Q.Tb.ROLES
                    }), eB.length > 0 && (0, l.jsx)(K.Z, {
                      heading: en.intl.string(en.t["3fe7U1"]),
                      scrollIntoView: ed === Q.Tb.CONNECTIONS,
                      children: (0, l.jsx)(Y.Z, {
                        connections: eB,
                        userId: t.id,
                        className: et.profileAppConnections
                      })
                    }), (0, l.jsx)(K.Z, {
                      heading: en.intl.string(en.t["mQKv+v"]),
                      scrollIntoView: ed === Q.Tb.NOTE,
                      children: (0, l.jsx)(s.Z, {
                        userId: t.id,
                        className: et.profileNote,
                        autoFocus: ed === Q.Tb.NOTE,
                        onUpdate: () => (0, P.pQ)(function(e) {
                          for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                              l = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), l.forEach(function(n) {
                              var l;
                              l = t[n], n in e ? Object.defineProperty(e, n, {
                                value: l,
                                enumerable: true,
                                configurable: true,
                                writable: true
                              }) : e[n] = l
                            })
                          }
                          return e
                        }({
                          action: "SET_NOTE"
                        }, ev))
                      })
                    })]
                  }), (null == eN ? true : eN.profileEffect) != null && (0, l.jsx)(j.Z, {
                    profileEffectId: null == eN ? true : eN.profileEffect.id,
                    isHovering: ey
                  })]
                }), (0, l.jsx)(H.Z, {
                  user: t,
                  currentUser: el,
                  displayProfile: eN,
                  guildId: eo,
                  channelId: er,
                  items: eL,
                  initialSection: ea,
                  initialSubsection: ed,
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