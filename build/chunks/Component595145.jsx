/** Chunk was on 75283 **/
/** chunk id: 595145, original params: e,t,n (module,exports,require) **/
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
  var t;
  let {
    user: n,
    currentUser: er,
    guildId: eo,
    channelId: ei,
    messageId: el,
    roleId: ea,
    sessionId: ec,
    initialSection: es,
    initialSubsection: ed,
    transitionState: eu,
    customStatusPrompt: ef,
    openedAt: ep,
    onClose: em,
    showGuildProfile: eb = true,
    sourceAnalyticsLocations: eg = [],
    disableActionsForPreview: eh = false
  } = e, {
    analyticsLocations: ex
  } = (0, f.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]), e_ = (0, Z.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    sourceSessionId: ec,
    guildId: eo,
    channelId: ei,
    messageId: el,
    roleId: ea,
    showGuildProfile: eb
  }), ej = o.useRef(null), ev = (0, s.Z)(ej), [ey, eI] = o.useState(false), eO = (0, A.$m)(), eZ = (0, a.q_F)({
    opacity: +(null != eO.interactionType),
    config: {
      duration: 150
    }
  }), eP = o.useMemo(() => null != eo ? {
    [eo]: [n.id]
  } : {}, [eo, n.id]);
  (0, d.$)(eP);
  let eT = (0, T.ZP)(n.id, eb ? eo : true),
    eC = I.ZP.useName(null == eT ? true : eT.guildId, ei, n),
    {
      relationshipType: eA,
      originApplicationId: eN
    } = (0, l.cj)([j.Z], () => ({
      relationshipType: j.Z.getRelationshipType(n.id),
      originApplicationId: j.Z.getOriginApplicationId(n.id)
    })),
    eE = (0, l.e7)([v.Z], () => v.Z.hidePersonalInformation),
    eS = null == eT ? true : eT.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    ew = (0, m.p)({
      location: "UserProfileModalV2"
    }),
    eB = o.useMemo(() => null != ef ? ef : (0, b.Z)(), [ef]),
    eL = (0, q.Z)({
      user: n,
      currentUser: er
    }),
    eD = (0, h.Y)({
      userId: n.id
    }),
    eM = (0, g.vh)(n.id),
    eU = (0, C.Z)(n.id),
    eR = (0, p.Dt)(),
    ek = et.intl.format(et.t.KRe1Fh, {
      name: eC
    });
  return o.useEffect(() => {
    let e = () => {
      eI(true), setTimeout(() => {
        eI(false)
      }, 1e3)
    };
    return y.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e), () => {
      y.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, J.L$)(null)
    }
  }, []), (0, r.jsx)(f.Gt, {
    value: ex,
    children: (0, r.jsx)(Z.Mt, {
      value: e_,
      openedAt: ep,
      fetchStartedAt: null == eT ? true : eT.fetchStartedAt,
      fetchEndedAt: null == eT ? true : eT.fetchEndedAt,
      isLoaded: null == eT ? true : eT.isLoaded,
      children: (0, r.jsx)(A.NJ, {
        value: eO,
        children: (0, r.jsx)(a.UkV, {
          isShaking: ey,
          intensity: 1.4,
          children: (0, r.jsxs)(a.Y0X, {
            "data-migration-pending": true,
            hideShadow: true,
            className: en.root,
            transitionState: eu,
            "aria-labelledby": eR,
            parentComponent: "UserProfileModalV2",
            children: [eh ? (0, r.jsxs)("div", {
              className: en.previewBar,
              children: [(0, r.jsxs)(a.X6q, {
                id: eR,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, r.jsx)(a.nn4, {
                  children: "".concat(et.intl.string(et.t.apViam), ": ").concat(ek)
                }), (0, r.jsx)("span", {
                  "aria-hidden": true,
                  children: et.intl.string(et.t.apViam)
                })]
              }), (0, r.jsx)(a.zxk, {
                size: "sm",
                variant: "secondary",
                text: et.intl.string(et.t.ojM1xM),
                onClick: em,
                "aria-label": et.intl.string(et.t.cpT0Cg)
              })]
            }) : (0, r.jsx)(a.nn4, {
              children: (0, r.jsx)(a.H, {
                id: eR,
                children: ek
              })
            }), (0, r.jsx)(a.y5t, {
              children: (0, r.jsxs)(G.Z, {
                className: eh ? en.disabled : true,
                user: n,
                displayProfile: eT,
                themeType: ee.l.MODAL_V2,
                children: [null != eS && (0, r.jsx)("div", {
                  className: en.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eS, ")")
                  }
                }), null != eO.interactionType && (0, r.jsx)(i.animated.div, {
                  style: eZ,
                  className: en.backdrop
                }), (0, r.jsx)(X.Z, {
                  onAutoHide: () => (0, J.L$)(null),
                  className: en.toast
                }), (0, r.jsxs)("div", {
                  className: en.profile,
                  ref: (null == eT ? true : eT.profileEffectId) != null ? ej : true,
                  children: [(0, r.jsxs)("div", {
                    className: en.profileHeader,
                    children: [(0, r.jsx)(S.Z, {
                      user: n,
                      displayProfile: eT,
                      themeType: ee.l.MODAL_V2
                    }), (0, r.jsx)(U.Z, {
                      userId: n.id,
                      onClose: em,
                      className: en.interactionToast
                    }), (0, r.jsx)(N.Z, {
                      location: "UserProfileModalV2",
                      user: n,
                      displayProfile: eT,
                      guildId: eo,
                      channelId: ei,
                      themeType: ee.l.MODAL_V2
                    }), (0, r.jsx)(F.Z, {
                      location: "UserProfileModalV2",
                      user: n,
                      guildId: eo,
                      channelId: ei,
                      themeType: ee.l.MODAL_V2,
                      hasEntered: eu === a.Dvm.ENTERED,
                      prompt: ew && n.id === er.id ? eB : null,
                      disableToolbar: eh
                    })]
                  }), (0, r.jsxs)(a.Ttm, {
                    fade: true,
                    className: en.profileBody,
                    children: [(0, r.jsx)(V.Z, {
                      user: n,
                      onClose: em,
                      nickname: I.ZP.useName(null == eT ? true : eT.guildId, ei, n),
                      nicknameIcons: (0, r.jsx)(L.Z, {
                        size: "sm",
                        userId: n.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eT ? true : eT.pronouns,
                      tags: (0, r.jsx)(E.Z, {
                        displayProfile: eT,
                        themeType: ee.l.MODAL_V2,
                        onClose: em
                      })
                    }), eA === $.OGo.PENDING_INCOMING && (0, r.jsx)(G.Z.Overlay, {
                      className: en.profileOverlay,
                      children: (0, r.jsx)(M.Z, {
                        user: n,
                        applicationId: eN,
                        guildId: null != (t = null == eT ? true : eT.guildId) ? t : true,
                        channelId: ei,
                        className: en.profileBanner
                      })
                    }), eM.map(e => {
                      var t;
                      let {
                        applicationId: o
                      } = e;
                      return (0, r.jsx)(G.Z.Overlay, {
                        className: en.profileOverlay,
                        children: (0, r.jsx)(M.Z, {
                          user: n,
                          guildId: null != (t = null == eT ? true : eT.guildId) ? t : true,
                          channelId: ei,
                          isGameRelationship: true,
                          applicationId: o,
                          className: en.profileBanner
                        })
                      }, o)
                    }), n.isProvisional && (0, r.jsx)(G.Z.Overlay, {
                      className: en.profileOverlay,
                      children: (0, r.jsx)(H.Z, {
                        heading: et.intl.string(et.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, r.jsx)(a.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: en.profileBanner,
                        children: (0, r.jsx)(_.n, {
                          userId: n.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), n.id === er.id && (0, r.jsx)(B.Z, {
                      isPremiumUser: (0, O.I5)(er),
                      onInteraction: em
                    }), (0, r.jsx)(k.Z, {
                      user: n,
                      className: en.profileBanner
                    }), (0, r.jsx)("div", {
                      className: en.profileButtons,
                      children: (0, r.jsx)(W.Z, {
                        user: n,
                        currentUser: er,
                        guildId: eo,
                        channelId: ei,
                        displayProfile: eT,
                        relationshipType: eA,
                        onClose: em
                      })
                    }), (null == eT ? true : eT.bio) != null && (null == eT ? true : eT.bio) !== "" && !eE && (0, r.jsx)(w.Z, {
                      userBio: eT.bio,
                      setLineClamp: false
                    }), eD.length > 0 && (0, r.jsx)(H.Z, {
                      heading: et.intl.string(et.t["Uv/eT0"]),
                      children: (0, r.jsx)(D.Z, {
                        applicationIds: eD
                      })
                    }), (0, r.jsx)(H.Z, {
                      heading: et.intl.string(et.t.a6XYDw),
                      children: (0, r.jsx)(R.Z, {
                        userId: n.id,
                        guildId: null == eT ? true : eT.guildId,
                        tooltipDelay: Q.vB
                      })
                    }), (null == eT ? true : eT.guildId) != null && (0, r.jsx)(Y.Z, {
                      user: n,
                      currentUser: er,
                      guildId: eT.guildId,
                      className: en.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: ed === Q.Tb.ROLES
                    }), eU.length > 0 && (0, r.jsx)(H.Z, {
                      heading: et.intl.string(et.t["3fe7U1"]),
                      scrollIntoView: ed === Q.Tb.CONNECTIONS,
                      children: (0, r.jsx)(z.Z, {
                        connections: eU,
                        userId: n.id,
                        className: en.profileAppConnections
                      })
                    }), (0, r.jsx)(H.Z, {
                      heading: et.intl.string(et.t["mQKv+v"]),
                      scrollIntoView: ed === Q.Tb.NOTE,
                      children: (0, r.jsx)(c.Z, {
                        userId: n.id,
                        className: en.profileNote,
                        autoFocus: ed === Q.Tb.NOTE,
                        onUpdate: () => (0, P.pQ)(function(e) {
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
                        }, e_))
                      })
                    })]
                  }), (null == eT ? true : eT.profileEffectId) != null && (0, r.jsx)(x.Z, {
                    profileEffectId: null == eT ? true : eT.profileEffectId,
                    isHovering: ev
                  })]
                }), (0, r.jsx)(K.Z, {
                  user: n,
                  currentUser: er,
                  displayProfile: eT,
                  guildId: eo,
                  channelId: ei,
                  items: eL,
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