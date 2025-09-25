/** Chunk was on 31553 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk6383 = require("./6383.js"),
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
  Chunk602733 = require("./602733.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5192 = require("./5192.js"),
  Chunk111361 = require("./111361.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk621853 = require("./621853.js"),
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

function eo(e) {
  var n;
  let {
    user: t,
    currentUser: eo,
    guildId: es,
    channelId: ea,
    messageId: ec,
    roleId: ed,
    sessionId: eu,
    initialSection: em,
    initialSubsection: ef,
    transitionState: ep,
    customStatusPrompt: eh,
    openedAt: ej,
    onClose: ex,
    showGuildProfile: ev = true,
    sourceAnalyticsLocations: eg = [],
    disableActionsForPreview: eb = false
  } = e, {
    analyticsLocations: ey
  } = (0, m.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]), eO = (0, N.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: eu,
    guildId: es,
    channelId: ea,
    messageId: ec,
    roleId: ed,
    showGuildProfile: ev
  }), eZ = i.useRef(null), eI = (0, c.Z)(eZ), [eP, eN] = i.useState(false), {
    defaultWishlistId: eT
  } = (0, o.cj)([E.Z], () => ({
    defaultWishlistId: E.Z.getFirstWishlistId(t.id)
  }));
  (0, b.k)(eT);
  let eE = (0, C.$m)(),
    eA = (0, s.q_F)({
      opacity: +(null != eE.interactionType),
      config: {
        duration: 150
      }
    }),
    eS = i.useMemo(() => null != es ? {
      [es]: [t.id]
    } : {}, [es, t.id]);
  (0, d.$)(eS, "UserProfileModalV2");
  let eC = (0, A.ZP)(t.id, ev ? es : true),
    ew = I.ZP.useName(null == eC ? true : eC.guildId, ea, t),
    {
      relationshipType: e_,
      originApplicationId: eD
    } = (0, o.cj)([y.Z], () => ({
      relationshipType: y.Z.getRelationshipType(t.id),
      originApplicationId: y.Z.getOriginApplicationId(t.id)
    })),
    eR = (0, o.e7)([O.Z], () => O.Z.hidePersonalInformation),
    eL = null == eC ? true : eC.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eM = (0, p.p)({
      location: "UserProfileModalV2"
    }),
    eU = i.useMemo(() => null != eh ? eh : (0, h.Z)(), [eh]),
    ek = (0, ee.Z)({
      user: t,
      currentUser: eo
    }),
    eB = (0, x.Y)({
      userId: t.id
    }),
    eV = (0, j.vh)(t.id),
    eF = (0, S.Z)(t.id),
    eG = (0, f.Dt)(),
    ez = ei.intl.format(ei.t.KRe1Fh, {
      name: ew
    });
  return i.useEffect(() => {
    let e = () => {
      eN(true), setTimeout(() => {
        eN(false)
      }, 1e3)
    };
    return Z.S.subscribe(et.CkL.SHAKE_PROFILE_MODAL, e), () => {
      Z.S.unsubscribe(et.CkL.SHAKE_PROFILE_MODAL, e), (0, $.L$)(null)
    }
  }, []), (0, l.jsx)(m.Gt, {
    value: ey,
    children: (0, l.jsx)(N.Mt, {
      value: eO,
      openedAt: ej,
      fetchStartedAt: null == eC ? true : eC.fetchStartedAt,
      fetchEndedAt: null == eC ? true : eC.fetchEndedAt,
      isLoaded: null == eC ? true : eC.isLoaded,
      children: (0, l.jsx)(C.NJ, {
        value: eE,
        children: (0, l.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          hideShadow: true,
          className: er.root,
          transitionState: ep,
          "aria-labelledby": eG,
          parentComponent: "UserProfileModalV2",
          children: [(0, l.jsxs)(s.UkV, {
            isShaking: eP,
            intensity: 1.4,
            children: [eb ? (0, l.jsxs)("div", {
              className: er.previewBar,
              children: [(0, l.jsxs)(s.X6q, {
                id: eG,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(s.nn4, {
                  children: "".concat(ei.intl.string(ei.t.apViam), ": ").concat(ez)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: ei.intl.string(ei.t.apViam)
                })]
              }), (0, l.jsx)(s.zxk, {
                size: "sm",
                variant: "secondary",
                text: ei.intl.string(ei.t.ojM1xM),
                onClick: ex,
                "aria-label": ei.intl.string(ei.t.cpT0Cg)
              })]
            }) : (0, l.jsx)(s.nn4, {
              children: (0, l.jsx)(s.H, {
                id: eG,
                children: ez
              })
            }), (0, l.jsx)(s.y5t, {
              children: (0, l.jsxs)(G.Z, {
                className: eb ? er.disabled : true,
                user: t,
                displayProfile: eC,
                themeType: el.l.MODAL_V2,
                children: [null != eL && (0, l.jsx)("div", {
                  className: er.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eL, ")")
                  }
                }), null != eE.interactionType && (0, l.jsx)(r.animated.div, {
                  style: eA,
                  className: er.backdrop
                }), (0, l.jsx)(Q.Z, {
                  onAutoHide: () => (0, $.L$)(null),
                  className: er.toast
                }), (0, l.jsxs)("div", {
                  className: er.profile,
                  ref: (null == eC ? true : eC.profileEffect) != null ? eZ : true,
                  children: [(0, l.jsxs)("div", {
                    className: er.profileHeader,
                    children: [(0, l.jsx)(D.Z, {
                      user: t,
                      displayProfile: eC,
                      themeType: el.l.MODAL_V2
                    }), (0, l.jsx)(B.Z, {
                      userId: t.id,
                      onClose: ex,
                      className: er.interactionToast
                    }), (0, l.jsx)(w.Z, {
                      user: t,
                      displayProfile: eC,
                      guildId: es,
                      channelId: ea,
                      themeType: el.l.MODAL_V2
                    }), (0, l.jsx)(K.Z, {
                      user: t,
                      guildId: es,
                      channelId: ea,
                      themeType: el.l.MODAL_V2,
                      hasEntered: ep === s.Dvm.ENTERED,
                      prompt: eM && t.id === eo.id ? eU : null,
                      disableToolbar: eb
                    })]
                  }), (0, l.jsxs)(s.Ttm, {
                    fade: true,
                    className: er.profileBody,
                    children: [(0, l.jsx)(z.Z, {
                      user: t,
                      onClose: ex,
                      nickname: I.ZP.useName(null == eC ? true : eC.guildId, ea, t),
                      nicknameIcons: (0, l.jsx)(M.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eC ? true : eC.pronouns,
                      tags: (0, l.jsx)(_.Z, {
                        displayProfile: eC,
                        themeType: el.l.MODAL_V2,
                        onClose: ex
                      })
                    }), e_ === et.OGo.PENDING_INCOMING && (0, l.jsx)(G.Z.Overlay, {
                      className: er.profileOverlay,
                      children: (0, l.jsx)(k.Z, {
                        user: t,
                        applicationId: eD,
                        guildId: null != (n = null == eC ? true : eC.guildId) ? n : true,
                        channelId: ea,
                        className: er.profileBanner
                      })
                    }), eV.map(e => {
                      var n;
                      let {
                        applicationId: i
                      } = e;
                      return (0, l.jsx)(G.Z.Overlay, {
                        className: er.profileOverlay,
                        children: (0, l.jsx)(k.Z, {
                          user: t,
                          guildId: null != (n = null == eC ? true : eC.guildId) ? n : true,
                          channelId: ea,
                          isGameRelationship: true,
                          applicationId: i,
                          className: er.profileBanner
                        })
                      }, i)
                    }), t.isProvisional && (0, l.jsx)(G.Z.Overlay, {
                      className: er.profileOverlay,
                      children: (0, l.jsx)(q.Z, {
                        heading: ei.intl.string(ei.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, l.jsx)(s.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: er.profileBanner,
                        children: (0, l.jsx)(g.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === eo.id && (0, l.jsx)(L.Z, {
                      isPremiumUser: (0, P.I5)(eo),
                      onInteraction: ex
                    }), (0, l.jsx)(F.Z, {
                      user: t,
                      className: er.profileBanner
                    }), (0, l.jsx)("div", {
                      className: er.profileButtons,
                      children: (0, l.jsx)(Y.Z, {
                        user: t,
                        currentUser: eo,
                        guildId: es,
                        channelId: ea,
                        displayProfile: eC,
                        relationshipType: e_,
                        onClose: ex
                      })
                    }), (null == eC ? true : eC.bio) != null && (null == eC ? true : eC.bio) !== "" && !eR && (0, l.jsx)(R.Z, {
                      userBio: eC.bio,
                      setLineClamp: false
                    }), eB.length > 0 && (0, l.jsx)(q.Z, {
                      heading: ei.intl.string(ei.t["Uv/eT0"]),
                      children: (0, l.jsx)(U.Z, {
                        applicationIds: eB
                      })
                    }), (0, l.jsx)(q.Z, {
                      heading: ei.intl.string(ei.t.a6XYDw),
                      children: (0, l.jsx)(V.Z, {
                        userId: t.id,
                        guildId: null == eC ? true : eC.guildId,
                        tooltipDelay: en.vB
                      })
                    }), (null == eC ? true : eC.guildId) != null && (0, l.jsx)(W.Z, {
                      user: t,
                      currentUser: eo,
                      guildId: eC.guildId,
                      className: er.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: ef === en.Tb.ROLES
                    }), eF.length > 0 && (0, l.jsx)(q.Z, {
                      heading: ei.intl.string(ei.t["3fe7U1"]),
                      scrollIntoView: ef === en.Tb.CONNECTIONS,
                      children: (0, l.jsx)(H.Z, {
                        connections: eF,
                        userId: t.id,
                        className: er.profileAppConnections
                      })
                    }), (0, l.jsx)(q.Z, {
                      heading: ei.intl.string(ei.t["mQKv+v"]),
                      scrollIntoView: ef === en.Tb.NOTE,
                      children: (0, l.jsx)(a.Z, {
                        userId: t.id,
                        className: er.profileNote,
                        autoFocus: ef === en.Tb.NOTE,
                        onUpdate: () => (0, T.pQ)(function(e) {
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
                        }, eO))
                      })
                    })]
                  }), (null == eC ? true : eC.profileEffect) != null && (0, l.jsx)(v.Z, {
                    profileEffectId: null == eC ? true : eC.profileEffect.id,
                    isHovering: eI
                  })]
                }), (0, l.jsx)(X.Z, {
                  user: t,
                  currentUser: eo,
                  displayProfile: eC,
                  guildId: es,
                  channelId: ea,
                  items: ek,
                  initialSection: em,
                  initialSubsection: ef,
                  onClose: ex
                })]
              })
            })]
          }), (0, l.jsx)(J.Z, {
            userId: t.id,
            className: er.editingToolbar
          })]
        })
      })
    })
  })
}