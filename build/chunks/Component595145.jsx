/** Chunk was on 72164 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => er
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
  Chunk293496 = require("./293496.js");

function er(e) {
  var n;
  let {
    user: t,
    currentUser: er,
    guildId: el,
    channelId: ei,
    messageId: ec,
    roleId: ea,
    sessionId: es,
    initialSection: ed,
    initialSubsection: eu,
    transitionState: ef,
    customStatusPrompt: ep,
    openedAt: em,
    onClose: ex,
    showGuildProfile: eb = true,
    sourceAnalyticsLocations: eh = [],
    disableActionsForPreview: eg = false
  } = e, {
    analyticsLocations: ej
  } = (0, f.ZP)([...eh, u.Z.USER_PROFILE_MODAL_V2]), ev = (0, Z.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: es,
    guildId: el,
    channelId: ei,
    messageId: ec,
    roleId: ea,
    showGuildProfile: eb
  }), ey = r.useRef(null), e_ = (0, s.Z)(ey), [eI, eO] = r.useState(false), eZ = (0, A.$m)(), eP = (0, c.q_F)({
    opacity: +(null != eZ.interactionType),
    config: {
      duration: 150
    }
  }), eT = r.useMemo(() => null != el ? {
    [el]: [t.id]
  } : {}, [el, t.id]);
  (0, d.$)(eT, "UserProfileModalV2");
  let eN = (0, T.ZP)(t.id, eb ? el : true),
    eA = I.ZP.useName(null == eN ? true : eN.guildId, ei, t),
    {
      relationshipType: eC,
      originApplicationId: eE
    } = (0, i.cj)([v.Z], () => ({
      relationshipType: v.Z.getRelationshipType(t.id),
      originApplicationId: v.Z.getOriginApplicationId(t.id)
    })),
    eS = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation),
    ew = null == eN ? true : eN.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eD = (0, m.p)({
      location: "UserProfileModalV2"
    }),
    eB = r.useMemo(() => null != ep ? ep : (0, x.Z)(), [ep]),
    eL = (0, Q.Z)({
      user: t,
      currentUser: er
    }),
    eR = (0, h.Y)({
      userId: t.id
    }),
    eM = (0, b.vh)(t.id),
    eU = (0, N.Z)(t.id),
    ek = (0, p.Dt)(),
    eV = et.intl.format(et.t.KRe1Fh, {
      name: eA
    });
  return r.useEffect(() => {
    let e = () => {
      eO(true), setTimeout(() => {
        eO(false)
      }, 1e3)
    };
    return _.S.subscribe(ee.CkL.SHAKE_PROFILE_MODAL, e), () => {
      _.S.unsubscribe(ee.CkL.SHAKE_PROFILE_MODAL, e), (0, X.L$)(null)
    }
  }, []), (0, o.jsx)(f.Gt, {
    value: ej,
    children: (0, o.jsx)(Z.Mt, {
      value: ev,
      openedAt: em,
      fetchStartedAt: null == eN ? true : eN.fetchStartedAt,
      fetchEndedAt: null == eN ? true : eN.fetchEndedAt,
      isLoaded: null == eN ? true : eN.isLoaded,
      children: (0, o.jsx)(A.NJ, {
        value: eZ,
        children: (0, o.jsxs)(c.Y0X, {
          "data-migration-pending": true,
          hideShadow: true,
          className: eo.root,
          transitionState: ef,
          "aria-labelledby": ek,
          parentComponent: "UserProfileModalV2",
          children: [(0, o.jsxs)(c.UkV, {
            isShaking: eI,
            intensity: 1.4,
            children: [eg ? (0, o.jsxs)("div", {
              className: eo.previewBar,
              children: [(0, o.jsxs)(c.X6q, {
                id: ek,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, o.jsx)(c.nn4, {
                  children: "".concat(et.intl.string(et.t.apViam), ": ").concat(eV)
                }), (0, o.jsx)("span", {
                  "aria-hidden": true,
                  children: et.intl.string(et.t.apViam)
                })]
              }), (0, o.jsx)(c.zxk, {
                size: "sm",
                variant: "secondary",
                text: et.intl.string(et.t.ojM1xM),
                onClick: ex,
                "aria-label": et.intl.string(et.t.cpT0Cg)
              })]
            }) : (0, o.jsx)(c.nn4, {
              children: (0, o.jsx)(c.H, {
                id: ek,
                children: eV
              })
            }), (0, o.jsx)(c.y5t, {
              children: (0, o.jsxs)(V.Z, {
                className: eg ? eo.disabled : true,
                user: t,
                displayProfile: eN,
                themeType: en.l.MODAL_V2,
                children: [null != ew && (0, o.jsx)("div", {
                  className: eo.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(ew, ")")
                  }
                }), null != eZ.interactionType && (0, o.jsx)(l.animated.div, {
                  style: eP,
                  className: eo.backdrop
                }), (0, o.jsx)(q.Z, {
                  onAutoHide: () => (0, X.L$)(null),
                  className: eo.toast
                }), (0, o.jsxs)("div", {
                  className: eo.profile,
                  ref: (null == eN ? true : eN.profileEffect) != null ? ey : true,
                  children: [(0, o.jsxs)("div", {
                    className: eo.profileHeader,
                    children: [(0, o.jsx)(S.Z, {
                      user: t,
                      displayProfile: eN,
                      themeType: en.l.MODAL_V2
                    }), (0, o.jsx)(M.Z, {
                      userId: t.id,
                      onClose: ex,
                      className: eo.interactionToast
                    }), (0, o.jsx)(C.Z, {
                      user: t,
                      displayProfile: eN,
                      guildId: el,
                      channelId: ei,
                      themeType: en.l.MODAL_V2
                    }), (0, o.jsx)(G.Z, {
                      user: t,
                      guildId: el,
                      channelId: ei,
                      themeType: en.l.MODAL_V2,
                      hasEntered: ef === c.Dvm.ENTERED,
                      prompt: eD && t.id === er.id ? eB : null,
                      disableToolbar: eg
                    })]
                  }), (0, o.jsxs)(c.Ttm, {
                    fade: true,
                    className: eo.profileBody,
                    children: [(0, o.jsx)(F.Z, {
                      user: t,
                      onClose: ex,
                      nickname: I.ZP.useName(null == eN ? true : eN.guildId, ei, t),
                      nicknameIcons: (0, o.jsx)(B.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eN ? true : eN.pronouns,
                      tags: (0, o.jsx)(E.Z, {
                        displayProfile: eN,
                        themeType: en.l.MODAL_V2,
                        onClose: ex
                      })
                    }), eC === ee.OGo.PENDING_INCOMING && (0, o.jsx)(V.Z.Overlay, {
                      className: eo.profileOverlay,
                      children: (0, o.jsx)(R.Z, {
                        user: t,
                        applicationId: eE,
                        guildId: null != (n = null == eN ? true : eN.guildId) ? n : true,
                        channelId: ei,
                        className: eo.profileBanner
                      })
                    }), eM.map(e => {
                      var n;
                      let {
                        applicationId: r
                      } = e;
                      return (0, o.jsx)(V.Z.Overlay, {
                        className: eo.profileOverlay,
                        children: (0, o.jsx)(R.Z, {
                          user: t,
                          guildId: null != (n = null == eN ? true : eN.guildId) ? n : true,
                          channelId: ei,
                          isGameRelationship: true,
                          applicationId: r,
                          className: eo.profileBanner
                        })
                      }, r)
                    }), t.isProvisional && (0, o.jsx)(V.Z.Overlay, {
                      className: eo.profileOverlay,
                      children: (0, o.jsx)(Y.Z, {
                        heading: et.intl.string(et.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, o.jsx)(c.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: eo.profileBanner,
                        children: (0, o.jsx)(j.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === er.id && (0, o.jsx)(D.Z, {
                      isPremiumUser: (0, O.I5)(er),
                      onInteraction: ex
                    }), (0, o.jsx)(k.Z, {
                      user: t,
                      className: eo.profileBanner
                    }), (0, o.jsx)("div", {
                      className: eo.profileButtons,
                      children: (0, o.jsx)(H.Z, {
                        user: t,
                        currentUser: er,
                        guildId: el,
                        channelId: ei,
                        displayProfile: eN,
                        relationshipType: eC,
                        onClose: ex
                      })
                    }), (null == eN ? true : eN.bio) != null && (null == eN ? true : eN.bio) !== "" && !eS && (0, o.jsx)(w.Z, {
                      userBio: eN.bio,
                      setLineClamp: false
                    }), eR.length > 0 && (0, o.jsx)(Y.Z, {
                      heading: et.intl.string(et.t["Uv/eT0"]),
                      children: (0, o.jsx)(L.Z, {
                        applicationIds: eR
                      })
                    }), (0, o.jsx)(Y.Z, {
                      heading: et.intl.string(et.t.a6XYDw),
                      children: (0, o.jsx)(U.Z, {
                        userId: t.id,
                        guildId: null == eN ? true : eN.guildId,
                        tooltipDelay: $.vB
                      })
                    }), (null == eN ? true : eN.guildId) != null && (0, o.jsx)(z.Z, {
                      user: t,
                      currentUser: er,
                      guildId: eN.guildId,
                      className: eo.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: eu === $.Tb.ROLES
                    }), eU.length > 0 && (0, o.jsx)(Y.Z, {
                      heading: et.intl.string(et.t["3fe7U1"]),
                      scrollIntoView: eu === $.Tb.CONNECTIONS,
                      children: (0, o.jsx)(K.Z, {
                        connections: eU,
                        userId: t.id,
                        className: eo.profileAppConnections
                      })
                    }), (0, o.jsx)(Y.Z, {
                      heading: et.intl.string(et.t["mQKv+v"]),
                      scrollIntoView: eu === $.Tb.NOTE,
                      children: (0, o.jsx)(a.Z, {
                        userId: t.id,
                        className: eo.profileNote,
                        autoFocus: eu === $.Tb.NOTE,
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
                        }, ev))
                      })
                    })]
                  }), (null == eN ? true : eN.profileEffect) != null && (0, o.jsx)(g.Z, {
                    profileEffectId: null == eN ? true : eN.profileEffect.id,
                    isHovering: e_
                  })]
                }), (0, o.jsx)(J.Z, {
                  user: t,
                  currentUser: er,
                  displayProfile: eN,
                  guildId: el,
                  channelId: ei,
                  items: eL,
                  initialSection: ed,
                  initialSubsection: eu,
                  onClose: ex
                })]
              })
            })]
          }), (0, o.jsx)(W.Z, {
            userId: t.id,
            className: eo.editingToolbar
          })]
        })
      })
    })
  })
}