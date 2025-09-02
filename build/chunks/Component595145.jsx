/** Chunk was on 31553 **/
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
    guildId: er,
    channelId: ei,
    messageId: eo,
    roleId: es,
    sessionId: ea,
    initialSection: ec,
    initialSubsection: ed,
    transitionState: eu,
    customStatusPrompt: em,
    openedAt: ep,
    onClose: ef,
    showGuildProfile: eh = true,
    sourceAnalyticsLocations: ej = [],
    disableActionsForPreview: ex = false
  } = e, {
    analyticsLocations: ev
  } = (0, m.ZP)([...ej, u.Z.USER_PROFILE_MODAL_V2]), eg = (0, P.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: ea,
    guildId: er,
    channelId: ei,
    messageId: eo,
    roleId: es,
    showGuildProfile: eh
  }), eb = r.useRef(null), ey = (0, c.Z)(eb), [eO, eI] = r.useState(false), eZ = (0, A.$m)(), eP = (0, s.q_F)({
    opacity: +(null != eZ.interactionType),
    config: {
      duration: 150
    }
  }), eN = r.useMemo(() => null != er ? {
    [er]: [t.id]
  } : {}, [er, t.id]);
  (0, d.$)(eN, "UserProfileModalV2");
  let eT = (0, T.ZP)(t.id, eh ? er : true),
    eE = I.ZP.useName(null == eT ? true : eT.guildId, ei, t),
    {
      relationshipType: eA,
      originApplicationId: eS
    } = (0, o.cj)([b.Z], () => ({
      relationshipType: b.Z.getRelationshipType(t.id),
      originApplicationId: b.Z.getOriginApplicationId(t.id)
    })),
    eC = (0, o.e7)([y.Z], () => y.Z.hidePersonalInformation),
    ew = null == eT ? true : eT.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    e_ = (0, f.p)({
      location: "UserProfileModalV2"
    }),
    eD = r.useMemo(() => null != em ? em : (0, h.Z)(), [em]),
    eR = (0, X.Z)({
      user: t,
      currentUser: el
    }),
    eL = (0, x.Y)({
      userId: t.id
    }),
    eM = (0, j.vh)(t.id),
    eU = (0, E.Z)(t.id),
    ek = (0, p.Dt)(),
    eB = en.intl.format(en.t.KRe1Fh, {
      name: eE
    });
  return r.useEffect(() => {
    let e = () => {
      eI(true), setTimeout(() => {
        eI(false)
      }, 1e3)
    };
    return O.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e), () => {
      O.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, q.L$)(null)
    }
  }, []), (0, l.jsx)(m.Gt, {
    value: ev,
    children: (0, l.jsx)(P.Mt, {
      value: eg,
      openedAt: ep,
      fetchStartedAt: null == eT ? true : eT.fetchStartedAt,
      fetchEndedAt: null == eT ? true : eT.fetchEndedAt,
      isLoaded: null == eT ? true : eT.isLoaded,
      children: (0, l.jsx)(A.NJ, {
        value: eZ,
        children: (0, l.jsx)(s.UkV, {
          isShaking: eO,
          intensity: 1.4,
          children: (0, l.jsxs)(s.Y0X, {
            "data-migration-pending": true,
            hideShadow: true,
            className: et.root,
            transitionState: eu,
            "aria-labelledby": ek,
            parentComponent: "UserProfileModalV2",
            children: [ex ? (0, l.jsxs)("div", {
              className: et.previewBar,
              children: [(0, l.jsxs)(s.X6q, {
                id: ek,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(s.nn4, {
                  children: "".concat(en.intl.string(en.t.apViam), ": ").concat(eB)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: en.intl.string(en.t.apViam)
                })]
              }), (0, l.jsx)(s.zxk, {
                size: "sm",
                variant: "secondary",
                text: en.intl.string(en.t.ojM1xM),
                onClick: ef,
                "aria-label": en.intl.string(en.t.cpT0Cg)
              })]
            }) : (0, l.jsx)(s.nn4, {
              children: (0, l.jsx)(s.H, {
                id: ek,
                children: eB
              })
            }), (0, l.jsx)(s.y5t, {
              children: (0, l.jsxs)(V.Z, {
                className: ex ? et.disabled : true,
                user: t,
                displayProfile: eT,
                themeType: ee.l.MODAL_V2,
                children: [null != ew && (0, l.jsx)("div", {
                  className: et.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(ew, ")")
                  }
                }), null != eZ.interactionType && (0, l.jsx)(i.animated.div, {
                  style: eP,
                  className: et.backdrop
                }), (0, l.jsx)(J.Z, {
                  onAutoHide: () => (0, q.L$)(null),
                  className: et.toast
                }), (0, l.jsxs)("div", {
                  className: et.profile,
                  ref: (null == eT ? true : eT.profileEffect) != null ? eb : true,
                  children: [(0, l.jsxs)("div", {
                    className: et.profileHeader,
                    children: [(0, l.jsx)(w.Z, {
                      user: t,
                      displayProfile: eT,
                      themeType: ee.l.MODAL_V2
                    }), (0, l.jsx)(U.Z, {
                      userId: t.id,
                      onClose: ef,
                      className: et.interactionToast
                    }), (0, l.jsx)(S.Z, {
                      user: t,
                      displayProfile: eT,
                      guildId: er,
                      channelId: ei,
                      themeType: ee.l.MODAL_V2
                    }), (0, l.jsx)(G.Z, {
                      user: t,
                      guildId: er,
                      channelId: ei,
                      themeType: ee.l.MODAL_V2,
                      hasEntered: eu === s.Dvm.ENTERED,
                      prompt: e_ && t.id === el.id ? eD : null,
                      disableToolbar: ex
                    })]
                  }), (0, l.jsxs)(s.Ttm, {
                    fade: true,
                    className: et.profileBody,
                    children: [(0, l.jsx)(F.Z, {
                      user: t,
                      onClose: ef,
                      nickname: I.ZP.useName(null == eT ? true : eT.guildId, ei, t),
                      nicknameIcons: (0, l.jsx)(R.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eT ? true : eT.pronouns,
                      tags: (0, l.jsx)(C.Z, {
                        displayProfile: eT,
                        themeType: ee.l.MODAL_V2,
                        onClose: ef
                      })
                    }), eA === $.OGo.PENDING_INCOMING && (0, l.jsx)(V.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, l.jsx)(M.Z, {
                        user: t,
                        applicationId: eS,
                        guildId: null != (n = null == eT ? true : eT.guildId) ? n : true,
                        channelId: ei,
                        className: et.profileBanner
                      })
                    }), eM.map(e => {
                      var n;
                      let {
                        applicationId: r
                      } = e;
                      return (0, l.jsx)(V.Z.Overlay, {
                        className: et.profileOverlay,
                        children: (0, l.jsx)(M.Z, {
                          user: t,
                          guildId: null != (n = null == eT ? true : eT.guildId) ? n : true,
                          channelId: ei,
                          isGameRelationship: true,
                          applicationId: r,
                          className: et.profileBanner
                        })
                      }, r)
                    }), t.isProvisional && (0, l.jsx)(V.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, l.jsx)(Y.Z, {
                        heading: en.intl.string(en.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, l.jsx)(s.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: et.profileBanner,
                        children: (0, l.jsx)(g.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === el.id && (0, l.jsx)(D.Z, {
                      isPremiumUser: (0, Z.I5)(el),
                      onInteraction: ef
                    }), (0, l.jsx)(B.Z, {
                      user: t,
                      className: et.profileBanner
                    }), (0, l.jsx)("div", {
                      className: et.profileButtons,
                      children: (0, l.jsx)(K.Z, {
                        user: t,
                        currentUser: el,
                        guildId: er,
                        channelId: ei,
                        displayProfile: eT,
                        relationshipType: eA,
                        onClose: ef
                      })
                    }), (null == eT ? true : eT.bio) != null && (null == eT ? true : eT.bio) !== "" && !eC && (0, l.jsx)(_.Z, {
                      userBio: eT.bio,
                      setLineClamp: false
                    }), eL.length > 0 && (0, l.jsx)(Y.Z, {
                      heading: en.intl.string(en.t["Uv/eT0"]),
                      children: (0, l.jsx)(L.Z, {
                        applicationIds: eL
                      })
                    }), (0, l.jsx)(Y.Z, {
                      heading: en.intl.string(en.t.a6XYDw),
                      children: (0, l.jsx)(k.Z, {
                        userId: t.id,
                        guildId: null == eT ? true : eT.guildId,
                        tooltipDelay: Q.vB
                      })
                    }), (null == eT ? true : eT.guildId) != null && (0, l.jsx)(z.Z, {
                      user: t,
                      currentUser: el,
                      guildId: eT.guildId,
                      className: et.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: ed === Q.Tb.ROLES
                    }), eU.length > 0 && (0, l.jsx)(Y.Z, {
                      heading: en.intl.string(en.t["3fe7U1"]),
                      scrollIntoView: ed === Q.Tb.CONNECTIONS,
                      children: (0, l.jsx)(W.Z, {
                        connections: eU,
                        userId: t.id,
                        className: et.profileAppConnections
                      })
                    }), (0, l.jsx)(Y.Z, {
                      heading: en.intl.string(en.t["mQKv+v"]),
                      scrollIntoView: ed === Q.Tb.NOTE,
                      children: (0, l.jsx)(a.Z, {
                        userId: t.id,
                        className: et.profileNote,
                        autoFocus: ed === Q.Tb.NOTE,
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
                        }, eg))
                      })
                    })]
                  }), (null == eT ? true : eT.profileEffect) != null && (0, l.jsx)(v.Z, {
                    profileEffectId: null == eT ? true : eT.profileEffect.id,
                    isHovering: ey
                  })]
                }), (0, l.jsx)(H.Z, {
                  user: t,
                  currentUser: el,
                  displayProfile: eT,
                  guildId: er,
                  channelId: ei,
                  items: eR,
                  initialSection: ec,
                  initialSubsection: ed,
                  onClose: ef
                })]
              })
            })]
          })
        })
      })
    })
  })
}