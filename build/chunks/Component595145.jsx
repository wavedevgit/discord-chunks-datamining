/** Chunk was on 34712 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => eo
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
  Chunk7938 = require("./7938.js");

function eo(e) {
  var n;
  let {
    user: t,
    currentUser: eo,
    guildId: el,
    channelId: er,
    messageId: ei,
    roleId: ec,
    sessionId: ea,
    initialSection: es,
    initialSubsection: ed,
    transitionState: eu,
    customStatusPrompt: ef,
    openedAt: ep,
    onClose: em,
    showGuildProfile: ex = true,
    sourceAnalyticsLocations: eb = [],
    disableActionsForPreview: eh = false
  } = e, {
    analyticsLocations: ej
  } = (0, f.ZP)([...eb, u.Z.USER_PROFILE_MODAL_V2]), eg = (0, Z.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: ea,
    guildId: el,
    channelId: er,
    messageId: ei,
    roleId: ec,
    showGuildProfile: ex
  }), ev = l.useRef(null), ey = (0, s.Z)(ev), [e_, eI] = l.useState(false), eO = (0, A.$m)(), eZ = (0, c.q_F)({
    opacity: +(null != eO.interactionType),
    config: {
      duration: 150
    }
  }), eP = l.useMemo(() => null != el ? {
    [el]: [t.id]
  } : {}, [el, t.id]);
  (0, d.$)(eP, "UserProfileModalV2");
  let eT = (0, T.ZP)(t.id, ex ? el : true),
    eN = I.ZP.useName(null == eT ? true : eT.guildId, er, t),
    {
      relationshipType: eA,
      originApplicationId: eC
    } = (0, i.cj)([v.Z], () => ({
      relationshipType: v.Z.getRelationshipType(t.id),
      originApplicationId: v.Z.getOriginApplicationId(t.id)
    })),
    eE = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation),
    eS = null == eT ? true : eT.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    ew = (0, m.p)({
      location: "UserProfileModalV2"
    }),
    eD = l.useMemo(() => null != ef ? ef : (0, x.Z)(), [ef]),
    eB = (0, X.Z)({
      user: t,
      currentUser: eo
    }),
    eL = (0, h.Y)({
      userId: t.id
    }),
    eR = (0, b.vh)(t.id),
    eM = (0, N.Z)(t.id),
    eU = (0, p.Dt)(),
    ek = en.intl.format(en.t.KRe1Fh, {
      name: eN
    });
  return l.useEffect(() => {
    let e = () => {
      eI(true), setTimeout(() => {
        eI(false)
      }, 1e3)
    };
    return _.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e), () => {
      _.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, q.L$)(null)
    }
  }, []), (0, o.jsx)(f.Gt, {
    value: ej,
    children: (0, o.jsx)(Z.Mt, {
      value: eg,
      openedAt: ep,
      fetchStartedAt: null == eT ? true : eT.fetchStartedAt,
      fetchEndedAt: null == eT ? true : eT.fetchEndedAt,
      isLoaded: null == eT ? true : eT.isLoaded,
      children: (0, o.jsx)(A.NJ, {
        value: eO,
        children: (0, o.jsx)(c.UkV, {
          isShaking: e_,
          intensity: 1.4,
          children: (0, o.jsxs)(c.Y0X, {
            "data-migration-pending": true,
            hideShadow: true,
            className: et.root,
            transitionState: eu,
            "aria-labelledby": eU,
            parentComponent: "UserProfileModalV2",
            children: [eh ? (0, o.jsxs)("div", {
              className: et.previewBar,
              children: [(0, o.jsxs)(c.X6q, {
                id: eU,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, o.jsx)(c.nn4, {
                  children: "".concat(en.intl.string(en.t.apViam), ": ").concat(ek)
                }), (0, o.jsx)("span", {
                  "aria-hidden": true,
                  children: en.intl.string(en.t.apViam)
                })]
              }), (0, o.jsx)(c.zxk, {
                size: "sm",
                variant: "secondary",
                text: en.intl.string(en.t.ojM1xM),
                onClick: em,
                "aria-label": en.intl.string(en.t.cpT0Cg)
              })]
            }) : (0, o.jsx)(c.nn4, {
              children: (0, o.jsx)(c.H, {
                id: eU,
                children: ek
              })
            }), (0, o.jsx)(c.y5t, {
              children: (0, o.jsxs)(V.Z, {
                className: eh ? et.disabled : true,
                user: t,
                displayProfile: eT,
                themeType: ee.l.MODAL_V2,
                children: [null != eS && (0, o.jsx)("div", {
                  className: et.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eS, ")")
                  }
                }), null != eO.interactionType && (0, o.jsx)(r.animated.div, {
                  style: eZ,
                  className: et.backdrop
                }), (0, o.jsx)(J.Z, {
                  onAutoHide: () => (0, q.L$)(null),
                  className: et.toast
                }), (0, o.jsxs)("div", {
                  className: et.profile,
                  ref: (null == eT ? true : eT.profileEffect) != null ? ev : true,
                  children: [(0, o.jsxs)("div", {
                    className: et.profileHeader,
                    children: [(0, o.jsx)(S.Z, {
                      user: t,
                      displayProfile: eT,
                      themeType: ee.l.MODAL_V2
                    }), (0, o.jsx)(M.Z, {
                      userId: t.id,
                      onClose: em,
                      className: et.interactionToast
                    }), (0, o.jsx)(C.Z, {
                      user: t,
                      displayProfile: eT,
                      guildId: el,
                      channelId: er,
                      themeType: ee.l.MODAL_V2
                    }), (0, o.jsx)(G.Z, {
                      user: t,
                      guildId: el,
                      channelId: er,
                      themeType: ee.l.MODAL_V2,
                      hasEntered: eu === c.Dvm.ENTERED,
                      prompt: ew && t.id === eo.id ? eD : null,
                      disableToolbar: eh
                    })]
                  }), (0, o.jsxs)(c.Ttm, {
                    fade: true,
                    className: et.profileBody,
                    children: [(0, o.jsx)(F.Z, {
                      user: t,
                      onClose: em,
                      nickname: I.ZP.useName(null == eT ? true : eT.guildId, er, t),
                      nicknameIcons: (0, o.jsx)(B.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eT ? true : eT.pronouns,
                      tags: (0, o.jsx)(E.Z, {
                        displayProfile: eT,
                        themeType: ee.l.MODAL_V2,
                        onClose: em
                      })
                    }), eA === $.OGo.PENDING_INCOMING && (0, o.jsx)(V.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, o.jsx)(R.Z, {
                        user: t,
                        applicationId: eC,
                        guildId: null != (n = null == eT ? true : eT.guildId) ? n : true,
                        channelId: er,
                        className: et.profileBanner
                      })
                    }), eR.map(e => {
                      var n;
                      let {
                        applicationId: l
                      } = e;
                      return (0, o.jsx)(V.Z.Overlay, {
                        className: et.profileOverlay,
                        children: (0, o.jsx)(R.Z, {
                          user: t,
                          guildId: null != (n = null == eT ? true : eT.guildId) ? n : true,
                          channelId: er,
                          isGameRelationship: true,
                          applicationId: l,
                          className: et.profileBanner
                        })
                      }, l)
                    }), t.isProvisional && (0, o.jsx)(V.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, o.jsx)(W.Z, {
                        heading: en.intl.string(en.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, o.jsx)(c.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: et.profileBanner,
                        children: (0, o.jsx)(g.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === eo.id && (0, o.jsx)(D.Z, {
                      isPremiumUser: (0, O.I5)(eo),
                      onInteraction: em
                    }), (0, o.jsx)(k.Z, {
                      user: t,
                      className: et.profileBanner
                    }), (0, o.jsx)("div", {
                      className: et.profileButtons,
                      children: (0, o.jsx)(K.Z, {
                        user: t,
                        currentUser: eo,
                        guildId: el,
                        channelId: er,
                        displayProfile: eT,
                        relationshipType: eA,
                        onClose: em
                      })
                    }), (null == eT ? true : eT.bio) != null && (null == eT ? true : eT.bio) !== "" && !eE && (0, o.jsx)(w.Z, {
                      userBio: eT.bio,
                      setLineClamp: false
                    }), eL.length > 0 && (0, o.jsx)(W.Z, {
                      heading: en.intl.string(en.t["Uv/eT0"]),
                      children: (0, o.jsx)(L.Z, {
                        applicationIds: eL
                      })
                    }), (0, o.jsx)(W.Z, {
                      heading: en.intl.string(en.t.a6XYDw),
                      children: (0, o.jsx)(U.Z, {
                        userId: t.id,
                        guildId: null == eT ? true : eT.guildId,
                        tooltipDelay: Q.vB
                      })
                    }), (null == eT ? true : eT.guildId) != null && (0, o.jsx)(z.Z, {
                      user: t,
                      currentUser: eo,
                      guildId: eT.guildId,
                      className: et.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: ed === Q.Tb.ROLES
                    }), eM.length > 0 && (0, o.jsx)(W.Z, {
                      heading: en.intl.string(en.t["3fe7U1"]),
                      scrollIntoView: ed === Q.Tb.CONNECTIONS,
                      children: (0, o.jsx)(H.Z, {
                        connections: eM,
                        userId: t.id,
                        className: et.profileAppConnections
                      })
                    }), (0, o.jsx)(W.Z, {
                      heading: en.intl.string(en.t["mQKv+v"]),
                      scrollIntoView: ed === Q.Tb.NOTE,
                      children: (0, o.jsx)(a.Z, {
                        userId: t.id,
                        className: et.profileNote,
                        autoFocus: ed === Q.Tb.NOTE,
                        onUpdate: () => (0, P.pQ)(function(e) {
                          for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                              o = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), o.forEach(function(n) {
                              var o;
                              o = t[n], n in e ? Object.defineProperty(e, n, {
                                value: o,
                                enumerable: true,
                                configurable: true,
                                writable: true
                              }) : e[n] = o
                            })
                          }
                          return e
                        }({
                          action: "SET_NOTE"
                        }, eg))
                      })
                    })]
                  }), (null == eT ? true : eT.profileEffect) != null && (0, o.jsx)(j.Z, {
                    profileEffectId: null == eT ? true : eT.profileEffect.id,
                    isHovering: ey
                  })]
                }), (0, o.jsx)(Y.Z, {
                  user: t,
                  currentUser: eo,
                  displayProfile: eT,
                  guildId: el,
                  channelId: er,
                  items: eB,
                  initialSection: es,
                  initialSubsection: ed,
                  onClose: em
                })]
              })
            })]
          })
        })
      })
    })
  })
}