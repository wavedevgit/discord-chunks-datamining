/** Chunk was on 16811 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk803948 = require("./803948.js"),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk293496 = require("./293496.js");

function er(e) {
  var n;
  let {
    user: t,
    currentUser: er,
    guildId: eo,
    channelId: el,
    messageId: ei,
    roleId: ec,
    sessionId: ea,
    initialSection: es,
    initialSubsection: ed,
    transitionState: eu,
    customStatusPrompt: ef,
    openedAt: em,
    onClose: ep,
    showGuildProfile: eb = true,
    sourceAnalyticsLocations: eg = [],
    disableActionsForPreview: ex = false
  } = e, {
    analyticsLocations: eh
  } = (0, f.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]), ej = (0, P.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: ea,
    guildId: eo,
    channelId: el,
    messageId: ei,
    roleId: ec,
    showGuildProfile: eb
  }), ev = o.useRef(null), e_ = (0, s.Z)(ev), [ey, eI] = o.useState(false), eO = (0, N.$m)(), eP = (0, c.q_F)({
    opacity: +(null != eO.interactionType),
    config: {
      duration: 150
    }
  }), eZ = o.useMemo(() => null != eo ? {
    [eo]: [t.id]
  } : {}, [eo, t.id]);
  (0, d.$)(eZ);
  let eT = (0, T.ZP)(t.id, eb ? eo : true),
    eA = I.ZP.useName(null == eT ? true : eT.guildId, el, t),
    {
      relationshipType: eN,
      originApplicationId: eC
    } = (0, i.cj)([v.Z], () => ({
      relationshipType: v.Z.getRelationshipType(t.id),
      originApplicationId: v.Z.getOriginApplicationId(t.id)
    })),
    eE = (0, i.e7)([_.Z], () => _.Z.hidePersonalInformation),
    eS = null == eT ? true : eT.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    ew = (0, p.p)({
      location: "UserProfileModalV2"
    }),
    eB = o.useMemo(() => null != ef ? ef : (0, b.Z)(), [ef]),
    eD = (0, q.Z)({
      user: t,
      currentUser: er
    }),
    eL = (0, x.Y)({
      userId: t.id
    }),
    eR = (0, g.vh)(t.id),
    eU = (0, A.Z)(t.id),
    eM = (0, m.Dt)(),
    ek = en.intl.format(en.t.KRe1Fh, {
      name: eA
    });
  return o.useEffect(() => {
    let e = () => {
      eI(true), setTimeout(() => {
        eI(false)
      }, 1e3)
    };
    return y.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e), () => {
      y.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, X.L$)(null)
    }
  }, []), (0, r.jsx)(f.Gt, {
    value: eh,
    children: (0, r.jsx)(P.Mt, {
      value: ej,
      openedAt: em,
      fetchStartedAt: null == eT ? true : eT.fetchStartedAt,
      fetchEndedAt: null == eT ? true : eT.fetchEndedAt,
      isLoaded: null == eT ? true : eT.isLoaded,
      children: (0, r.jsx)(N.NJ, {
        value: eO,
        children: (0, r.jsx)(c.UkV, {
          isShaking: ey,
          intensity: 1.4,
          children: (0, r.jsxs)(c.Y0X, {
            "data-migration-pending": true,
            hideShadow: true,
            className: et.root,
            transitionState: eu,
            "aria-labelledby": eM,
            parentComponent: "UserProfileModalV2",
            children: [ex ? (0, r.jsxs)("div", {
              className: et.previewBar,
              children: [(0, r.jsxs)(c.X6q, {
                id: eM,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, r.jsx)(c.nn4, {
                  children: "".concat(en.intl.string(en.t.apViam), ": ").concat(ek)
                }), (0, r.jsx)("span", {
                  "aria-hidden": true,
                  children: en.intl.string(en.t.apViam)
                })]
              }), (0, r.jsx)(c.zxk, {
                size: "sm",
                variant: "secondary",
                text: en.intl.string(en.t.ojM1xM),
                onClick: ep,
                "aria-label": en.intl.string(en.t.cpT0Cg)
              })]
            }) : (0, r.jsx)(c.nn4, {
              children: (0, r.jsx)(c.H, {
                id: eM,
                children: ek
              })
            }), (0, r.jsx)(c.y5t, {
              children: (0, r.jsxs)(G.Z, {
                className: ex ? et.disabled : true,
                user: t,
                displayProfile: eT,
                themeType: ee.l.MODAL_V2,
                children: [null != eS && (0, r.jsx)("div", {
                  className: et.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eS, ")")
                  }
                }), null != eO.interactionType && (0, r.jsx)(l.animated.div, {
                  style: eP,
                  className: et.backdrop
                }), (0, r.jsx)(J.Z, {
                  onAutoHide: () => (0, X.L$)(null),
                  className: et.toast
                }), (0, r.jsxs)("div", {
                  className: et.profile,
                  ref: (null == eT ? true : eT.profileEffectId) != null ? ev : true,
                  children: [(0, r.jsxs)("div", {
                    className: et.profileHeader,
                    children: [(0, r.jsx)(S.Z, {
                      user: t,
                      displayProfile: eT,
                      themeType: ee.l.MODAL_V2
                    }), (0, r.jsx)(U.Z, {
                      userId: t.id,
                      onClose: ep,
                      className: et.interactionToast
                    }), (0, r.jsx)(C.Z, {
                      location: "UserProfileModalV2",
                      user: t,
                      displayProfile: eT,
                      guildId: eo,
                      channelId: el,
                      themeType: ee.l.MODAL_V2
                    }), (0, r.jsx)(F.Z, {
                      location: "UserProfileModalV2",
                      user: t,
                      guildId: eo,
                      channelId: el,
                      themeType: ee.l.MODAL_V2,
                      hasEntered: eu === c.Dvm.ENTERED,
                      prompt: ew && t.id === er.id ? eB : null,
                      disableToolbar: ex
                    })]
                  }), (0, r.jsxs)(c.Ttm, {
                    fade: true,
                    className: et.profileBody,
                    children: [(0, r.jsx)(V.Z, {
                      user: t,
                      onClose: ep,
                      nickname: I.ZP.useName(null == eT ? true : eT.guildId, el, t),
                      nicknameIcons: (0, r.jsx)(D.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eT ? true : eT.pronouns,
                      tags: (0, r.jsx)(E.Z, {
                        displayProfile: eT,
                        themeType: ee.l.MODAL_V2,
                        onClose: ep
                      })
                    }), eN === $.OGo.PENDING_INCOMING && (0, r.jsx)(G.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, r.jsx)(R.Z, {
                        user: t,
                        applicationId: eC,
                        guildId: null != (n = null == eT ? true : eT.guildId) ? n : true,
                        channelId: el,
                        className: et.profileBanner
                      })
                    }), eR.map(e => {
                      var n;
                      let {
                        applicationId: o
                      } = e;
                      return (0, r.jsx)(G.Z.Overlay, {
                        className: et.profileOverlay,
                        children: (0, r.jsx)(R.Z, {
                          user: t,
                          guildId: null != (n = null == eT ? true : eT.guildId) ? n : true,
                          channelId: el,
                          isGameRelationship: true,
                          applicationId: o,
                          className: et.profileBanner
                        })
                      }, o)
                    }), t.isProvisional && (0, r.jsx)(G.Z.Overlay, {
                      className: et.profileOverlay,
                      children: (0, r.jsx)(K.Z, {
                        heading: en.intl.string(en.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, r.jsx)(c.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: et.profileBanner,
                        children: (0, r.jsx)(j.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === er.id && (0, r.jsx)(B.Z, {
                      isPremiumUser: (0, O.I5)(er),
                      onInteraction: ep
                    }), (0, r.jsx)(k.Z, {
                      user: t,
                      className: et.profileBanner
                    }), (0, r.jsx)("div", {
                      className: et.profileButtons,
                      children: (0, r.jsx)(W.Z, {
                        user: t,
                        currentUser: er,
                        guildId: eo,
                        channelId: el,
                        displayProfile: eT,
                        relationshipType: eN,
                        onClose: ep
                      })
                    }), (null == eT ? true : eT.bio) != null && (null == eT ? true : eT.bio) !== "" && !eE && (0, r.jsx)(w.Z, {
                      userBio: eT.bio,
                      setLineClamp: false
                    }), eL.length > 0 && (0, r.jsx)(K.Z, {
                      heading: en.intl.string(en.t["Uv/eT0"]),
                      children: (0, r.jsx)(L.Z, {
                        applicationIds: eL
                      })
                    }), (0, r.jsx)(K.Z, {
                      heading: en.intl.string(en.t.a6XYDw),
                      children: (0, r.jsx)(M.Z, {
                        userId: t.id,
                        guildId: null == eT ? true : eT.guildId,
                        tooltipDelay: Q.vB
                      })
                    }), (null == eT ? true : eT.guildId) != null && (0, r.jsx)(Y.Z, {
                      user: t,
                      currentUser: er,
                      guildId: eT.guildId,
                      className: et.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: ed === Q.Tb.ROLES
                    }), eU.length > 0 && (0, r.jsx)(K.Z, {
                      heading: en.intl.string(en.t["3fe7U1"]),
                      scrollIntoView: ed === Q.Tb.CONNECTIONS,
                      children: (0, r.jsx)(z.Z, {
                        connections: eU,
                        userId: t.id,
                        className: et.profileAppConnections
                      })
                    }), (0, r.jsx)(K.Z, {
                      heading: en.intl.string(en.t["mQKv+v"]),
                      scrollIntoView: ed === Q.Tb.NOTE,
                      children: (0, r.jsx)(a.Z, {
                        userId: t.id,
                        className: et.profileNote,
                        autoFocus: ed === Q.Tb.NOTE,
                        onUpdate: () => (0, Z.pQ)(function(e) {
                          for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                              r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), r.forEach(function(n) {
                              var r;
                              r = t[n], n in e ? Object.defineProperty(e, n, {
                                value: r,
                                enumerable: true,
                                configurable: true,
                                writable: true
                              }) : e[n] = r
                            })
                          }
                          return e
                        }({
                          action: "SET_NOTE"
                        }, ej))
                      })
                    })]
                  }), (null == eT ? true : eT.profileEffectId) != null && (0, r.jsx)(h.Z, {
                    profileEffectId: null == eT ? true : eT.profileEffectId,
                    isHovering: e_
                  })]
                }), (0, r.jsx)(H.Z, {
                  user: t,
                  currentUser: er,
                  displayProfile: eT,
                  guildId: eo,
                  channelId: el,
                  items: eD,
                  initialSection: es,
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