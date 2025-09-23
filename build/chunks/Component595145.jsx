/** Chunk was on 31553 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => ei
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk401393 = require("./401393.js"),
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
  Chunk996921 = require("./996921.jsx"),
  Chunk693408 = require("./693408.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk76076 = require("./76076.jsx"),
  Chunk872269 = require("./872269.js"),
  Chunk768111 = require("./768111.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7938 = require("./7938.js");

function ei(e) {
  var n;
  let {
    user: t,
    currentUser: ei,
    guildId: er,
    channelId: eo,
    messageId: es,
    roleId: ea,
    sessionId: ec,
    initialSection: ed,
    initialSubsection: eu,
    transitionState: ef,
    customStatusPrompt: em,
    openedAt: ep,
    onClose: eh,
    showGuildProfile: ej = true,
    sourceAnalyticsLocations: ex = [],
    disableActionsForPreview: ev = false
  } = e, {
    analyticsLocations: eg
  } = (0, f.ZP)([...ex, u.Z.USER_PROFILE_MODAL_V2]), eb = (0, P.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: ec,
    guildId: er,
    channelId: eo,
    messageId: es,
    roleId: ea,
    showGuildProfile: ej
  }), ey = i.useRef(null), eO = (0, c.Z)(ey), [eZ, eI] = i.useState(false), eP = (0, A.$m)(), eN = (0, s.q_F)({
    opacity: +(null != eP.interactionType),
    config: {
      duration: 150
    }
  }), eT = i.useMemo(() => null != er ? {
    [er]: [t.id]
  } : {}, [er, t.id]);
  (0, d.$)(eT, "UserProfileModalV2");
  let eE = (0, T.ZP)(t.id, ej ? er : true),
    eA = Z.ZP.useName(null == eE ? true : eE.guildId, eo, t),
    {
      relationshipType: eS,
      originApplicationId: eC
    } = (0, o.cj)([b.Z], () => ({
      relationshipType: b.Z.getRelationshipType(t.id),
      originApplicationId: b.Z.getOriginApplicationId(t.id)
    })),
    ew = (0, o.e7)([y.Z], () => y.Z.hidePersonalInformation),
    e_ = null == eE ? true : eE.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eD = (0, p.p)({
      location: "UserProfileModalV2"
    }),
    eR = i.useMemo(() => null != em ? em : (0, h.Z)(), [em]),
    eL = (0, Q.Z)({
      user: t,
      currentUser: ei
    }),
    eM = (0, x.Y)({
      userId: t.id
    }),
    eU = (0, j.vh)(t.id),
    ek = (0, E.Z)(t.id),
    eB = (0, m.Dt)(),
    eV = et.intl.format(et.t.KRe1Fh, {
      name: eA
    });
  return i.useEffect(() => {
    let e = () => {
      eI(true), setTimeout(() => {
        eI(false)
      }, 1e3)
    };
    return O.S.subscribe(ee.CkL.SHAKE_PROFILE_MODAL, e), () => {
      O.S.unsubscribe(ee.CkL.SHAKE_PROFILE_MODAL, e), (0, X.L$)(null)
    }
  }, []), (0, l.jsx)(f.Gt, {
    value: eg,
    children: (0, l.jsx)(P.Mt, {
      value: eb,
      openedAt: ep,
      fetchStartedAt: null == eE ? true : eE.fetchStartedAt,
      fetchEndedAt: null == eE ? true : eE.fetchEndedAt,
      isLoaded: null == eE ? true : eE.isLoaded,
      children: (0, l.jsx)(A.NJ, {
        value: eP,
        children: (0, l.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          hideShadow: true,
          className: el.root,
          transitionState: ef,
          "aria-labelledby": eB,
          parentComponent: "UserProfileModalV2",
          children: [(0, l.jsxs)(s.UkV, {
            isShaking: eZ,
            intensity: 1.4,
            children: [ev ? (0, l.jsxs)("div", {
              className: el.previewBar,
              children: [(0, l.jsxs)(s.X6q, {
                id: eB,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(s.nn4, {
                  children: "".concat(et.intl.string(et.t.apViam), ": ").concat(eV)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: et.intl.string(et.t.apViam)
                })]
              }), (0, l.jsx)(s.zxk, {
                size: "sm",
                variant: "secondary",
                text: et.intl.string(et.t.ojM1xM),
                onClick: eh,
                "aria-label": et.intl.string(et.t.cpT0Cg)
              })]
            }) : (0, l.jsx)(s.nn4, {
              children: (0, l.jsx)(s.H, {
                id: eB,
                children: eV
              })
            }), (0, l.jsx)(s.y5t, {
              children: (0, l.jsxs)(V.Z, {
                className: ev ? el.disabled : true,
                user: t,
                displayProfile: eE,
                themeType: en.l.MODAL_V2,
                children: [null != e_ && (0, l.jsx)("div", {
                  className: el.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(e_, ")")
                  }
                }), null != eP.interactionType && (0, l.jsx)(r.animated.div, {
                  style: eN,
                  className: el.backdrop
                }), (0, l.jsx)(q.Z, {
                  onAutoHide: () => (0, X.L$)(null),
                  className: el.toast
                }), (0, l.jsxs)("div", {
                  className: el.profile,
                  ref: (null == eE ? true : eE.profileEffect) != null ? ey : true,
                  children: [(0, l.jsxs)("div", {
                    className: el.profileHeader,
                    children: [(0, l.jsx)(w.Z, {
                      user: t,
                      displayProfile: eE,
                      themeType: en.l.MODAL_V2
                    }), (0, l.jsx)(U.Z, {
                      userId: t.id,
                      onClose: eh,
                      className: el.interactionToast
                    }), (0, l.jsx)(S.Z, {
                      user: t,
                      displayProfile: eE,
                      guildId: er,
                      channelId: eo,
                      themeType: en.l.MODAL_V2
                    }), (0, l.jsx)(G.Z, {
                      user: t,
                      guildId: er,
                      channelId: eo,
                      themeType: en.l.MODAL_V2,
                      hasEntered: ef === s.Dvm.ENTERED,
                      prompt: eD && t.id === ei.id ? eR : null,
                      disableToolbar: ev
                    })]
                  }), (0, l.jsxs)(s.Ttm, {
                    fade: true,
                    className: el.profileBody,
                    children: [(0, l.jsx)(F.Z, {
                      user: t,
                      onClose: eh,
                      nickname: Z.ZP.useName(null == eE ? true : eE.guildId, eo, t),
                      nicknameIcons: (0, l.jsx)(R.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eE ? true : eE.pronouns,
                      tags: (0, l.jsx)(C.Z, {
                        displayProfile: eE,
                        themeType: en.l.MODAL_V2,
                        onClose: eh
                      })
                    }), eS === ee.OGo.PENDING_INCOMING && (0, l.jsx)(V.Z.Overlay, {
                      className: el.profileOverlay,
                      children: (0, l.jsx)(M.Z, {
                        user: t,
                        applicationId: eC,
                        guildId: null != (n = null == eE ? true : eE.guildId) ? n : true,
                        channelId: eo,
                        className: el.profileBanner
                      })
                    }), eU.map(e => {
                      var n;
                      let {
                        applicationId: i
                      } = e;
                      return (0, l.jsx)(V.Z.Overlay, {
                        className: el.profileOverlay,
                        children: (0, l.jsx)(M.Z, {
                          user: t,
                          guildId: null != (n = null == eE ? true : eE.guildId) ? n : true,
                          channelId: eo,
                          isGameRelationship: true,
                          applicationId: i,
                          className: el.profileBanner
                        })
                      }, i)
                    }), t.isProvisional && (0, l.jsx)(V.Z.Overlay, {
                      className: el.profileOverlay,
                      children: (0, l.jsx)(H.Z, {
                        heading: et.intl.string(et.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, l.jsx)(s.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: el.profileBanner,
                        children: (0, l.jsx)(g.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === ei.id && (0, l.jsx)(D.Z, {
                      isPremiumUser: (0, I.I5)(ei),
                      onInteraction: eh
                    }), (0, l.jsx)(B.Z, {
                      user: t,
                      className: el.profileBanner
                    }), (0, l.jsx)("div", {
                      className: el.profileButtons,
                      children: (0, l.jsx)(K.Z, {
                        user: t,
                        currentUser: ei,
                        guildId: er,
                        channelId: eo,
                        displayProfile: eE,
                        relationshipType: eS,
                        onClose: eh
                      })
                    }), (null == eE ? true : eE.bio) != null && (null == eE ? true : eE.bio) !== "" && !ew && (0, l.jsx)(_.Z, {
                      userBio: eE.bio,
                      setLineClamp: false
                    }), eM.length > 0 && (0, l.jsx)(H.Z, {
                      heading: et.intl.string(et.t["Uv/eT0"]),
                      children: (0, l.jsx)(L.Z, {
                        applicationIds: eM
                      })
                    }), (0, l.jsx)(H.Z, {
                      heading: et.intl.string(et.t.a6XYDw),
                      children: (0, l.jsx)(k.Z, {
                        userId: t.id,
                        guildId: null == eE ? true : eE.guildId,
                        tooltipDelay: $.vB
                      })
                    }), (null == eE ? true : eE.guildId) != null && (0, l.jsx)(z.Z, {
                      user: t,
                      currentUser: ei,
                      guildId: eE.guildId,
                      className: el.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: eu === $.Tb.ROLES
                    }), ek.length > 0 && (0, l.jsx)(H.Z, {
                      heading: et.intl.string(et.t["3fe7U1"]),
                      scrollIntoView: eu === $.Tb.CONNECTIONS,
                      children: (0, l.jsx)(W.Z, {
                        connections: ek,
                        userId: t.id,
                        className: el.profileAppConnections
                      })
                    }), (0, l.jsx)(H.Z, {
                      heading: et.intl.string(et.t["mQKv+v"]),
                      scrollIntoView: eu === $.Tb.NOTE,
                      children: (0, l.jsx)(a.Z, {
                        userId: t.id,
                        className: el.profileNote,
                        autoFocus: eu === $.Tb.NOTE,
                        onUpdate: () => (0, N.pQ)(function(e) {
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
                        }, eb))
                      })
                    })]
                  }), (null == eE ? true : eE.profileEffect) != null && (0, l.jsx)(v.Z, {
                    profileEffectId: null == eE ? true : eE.profileEffect.id,
                    isHovering: eO
                  })]
                }), (0, l.jsx)(J.Z, {
                  user: t,
                  currentUser: ei,
                  displayProfile: eE,
                  guildId: er,
                  channelId: eo,
                  items: eL,
                  initialSection: ed,
                  initialSubsection: eu,
                  onClose: eh
                })]
              })
            })]
          }), (0, l.jsx)(Y.Z, {
            userId: t.id,
            className: el.editingToolbar
          })]
        })
      })
    })
  })
}