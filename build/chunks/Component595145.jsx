/** Chunk was on 31553 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => er
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
    guildId: eo,
    channelId: es,
    messageId: ea,
    roleId: ec,
    sessionId: ed,
    initialSection: eu,
    initialSubsection: em,
    transitionState: ef,
    customStatusPrompt: ep,
    openedAt: eh,
    onClose: ej,
    showGuildProfile: ex = true,
    sourceAnalyticsLocations: ev = [],
    disableActionsForPreview: eg = false
  } = e, {
    analyticsLocations: eb
  } = (0, m.ZP)([...ev, u.Z.USER_PROFILE_MODAL_V2]), ey = (0, N.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: ed,
    guildId: eo,
    channelId: es,
    messageId: ea,
    roleId: ec,
    showGuildProfile: ex
  }), eO = i.useRef(null), eZ = (0, c.Z)(eO), [eI, eP] = i.useState(false);
  (0, b.k)("123");
  let eN = (0, S.$m)(),
    eT = (0, s.q_F)({
      opacity: +(null != eN.interactionType),
      config: {
        duration: 150
      }
    }),
    eE = i.useMemo(() => null != eo ? {
      [eo]: [t.id]
    } : {}, [eo, t.id]);
  (0, d.$)(eE, "UserProfileModalV2");
  let eA = (0, E.ZP)(t.id, ex ? eo : true),
    eS = I.ZP.useName(null == eA ? true : eA.guildId, es, t),
    {
      relationshipType: eC,
      originApplicationId: ew
    } = (0, o.cj)([y.Z], () => ({
      relationshipType: y.Z.getRelationshipType(t.id),
      originApplicationId: y.Z.getOriginApplicationId(t.id)
    })),
    e_ = (0, o.e7)([O.Z], () => O.Z.hidePersonalInformation),
    eD = null == eA ? true : eA.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eR = (0, p.p)({
      location: "UserProfileModalV2"
    }),
    eL = i.useMemo(() => null != ep ? ep : (0, h.Z)(), [ep]),
    eM = (0, $.Z)({
      user: t,
      currentUser: er
    }),
    eU = (0, x.Y)({
      userId: t.id
    }),
    ek = (0, j.vh)(t.id),
    eB = (0, A.Z)(t.id),
    eV = (0, f.Dt)(),
    eF = el.intl.format(el.t.KRe1Fh, {
      name: eS
    });
  return i.useEffect(() => {
    let e = () => {
      eP(true), setTimeout(() => {
        eP(false)
      }, 1e3)
    };
    return Z.S.subscribe(en.CkL.SHAKE_PROFILE_MODAL, e), () => {
      Z.S.unsubscribe(en.CkL.SHAKE_PROFILE_MODAL, e), (0, Q.L$)(null)
    }
  }, []), (0, l.jsx)(m.Gt, {
    value: eb,
    children: (0, l.jsx)(N.Mt, {
      value: ey,
      openedAt: eh,
      fetchStartedAt: null == eA ? true : eA.fetchStartedAt,
      fetchEndedAt: null == eA ? true : eA.fetchEndedAt,
      isLoaded: null == eA ? true : eA.isLoaded,
      children: (0, l.jsx)(S.NJ, {
        value: eN,
        children: (0, l.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          hideShadow: true,
          className: ei.root,
          transitionState: ef,
          "aria-labelledby": eV,
          parentComponent: "UserProfileModalV2",
          children: [(0, l.jsxs)(s.UkV, {
            isShaking: eI,
            intensity: 1.4,
            children: [eg ? (0, l.jsxs)("div", {
              className: ei.previewBar,
              children: [(0, l.jsxs)(s.X6q, {
                id: eV,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(s.nn4, {
                  children: "".concat(el.intl.string(el.t.apViam), ": ").concat(eF)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: el.intl.string(el.t.apViam)
                })]
              }), (0, l.jsx)(s.zxk, {
                size: "sm",
                variant: "secondary",
                text: el.intl.string(el.t.ojM1xM),
                onClick: ej,
                "aria-label": el.intl.string(el.t.cpT0Cg)
              })]
            }) : (0, l.jsx)(s.nn4, {
              children: (0, l.jsx)(s.H, {
                id: eV,
                children: eF
              })
            }), (0, l.jsx)(s.y5t, {
              children: (0, l.jsxs)(F.Z, {
                className: eg ? ei.disabled : true,
                user: t,
                displayProfile: eA,
                themeType: et.l.MODAL_V2,
                children: [null != eD && (0, l.jsx)("div", {
                  className: ei.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eD, ")")
                  }
                }), null != eN.interactionType && (0, l.jsx)(r.animated.div, {
                  style: eT,
                  className: ei.backdrop
                }), (0, l.jsx)(X.Z, {
                  onAutoHide: () => (0, Q.L$)(null),
                  className: ei.toast
                }), (0, l.jsxs)("div", {
                  className: ei.profile,
                  ref: (null == eA ? true : eA.profileEffect) != null ? eO : true,
                  children: [(0, l.jsxs)("div", {
                    className: ei.profileHeader,
                    children: [(0, l.jsx)(_.Z, {
                      user: t,
                      displayProfile: eA,
                      themeType: et.l.MODAL_V2
                    }), (0, l.jsx)(k.Z, {
                      userId: t.id,
                      onClose: ej,
                      className: ei.interactionToast
                    }), (0, l.jsx)(C.Z, {
                      user: t,
                      displayProfile: eA,
                      guildId: eo,
                      channelId: es,
                      themeType: et.l.MODAL_V2
                    }), (0, l.jsx)(z.Z, {
                      user: t,
                      guildId: eo,
                      channelId: es,
                      themeType: et.l.MODAL_V2,
                      hasEntered: ef === s.Dvm.ENTERED,
                      prompt: eR && t.id === er.id ? eL : null,
                      disableToolbar: eg
                    })]
                  }), (0, l.jsxs)(s.Ttm, {
                    fade: true,
                    className: ei.profileBody,
                    children: [(0, l.jsx)(G.Z, {
                      user: t,
                      onClose: ej,
                      nickname: I.ZP.useName(null == eA ? true : eA.guildId, es, t),
                      nicknameIcons: (0, l.jsx)(L.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eA ? true : eA.pronouns,
                      tags: (0, l.jsx)(w.Z, {
                        displayProfile: eA,
                        themeType: et.l.MODAL_V2,
                        onClose: ej
                      })
                    }), eC === en.OGo.PENDING_INCOMING && (0, l.jsx)(F.Z.Overlay, {
                      className: ei.profileOverlay,
                      children: (0, l.jsx)(U.Z, {
                        user: t,
                        applicationId: ew,
                        guildId: null != (n = null == eA ? true : eA.guildId) ? n : true,
                        channelId: es,
                        className: ei.profileBanner
                      })
                    }), ek.map(e => {
                      var n;
                      let {
                        applicationId: i
                      } = e;
                      return (0, l.jsx)(F.Z.Overlay, {
                        className: ei.profileOverlay,
                        children: (0, l.jsx)(U.Z, {
                          user: t,
                          guildId: null != (n = null == eA ? true : eA.guildId) ? n : true,
                          channelId: es,
                          isGameRelationship: true,
                          applicationId: i,
                          className: ei.profileBanner
                        })
                      }, i)
                    }), t.isProvisional && (0, l.jsx)(F.Z.Overlay, {
                      className: ei.profileOverlay,
                      children: (0, l.jsx)(J.Z, {
                        heading: el.intl.string(el.t.Iyka0d),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, l.jsx)(s.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: ei.profileBanner,
                        children: (0, l.jsx)(g.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === er.id && (0, l.jsx)(R.Z, {
                      isPremiumUser: (0, P.I5)(er),
                      onInteraction: ej
                    }), (0, l.jsx)(V.Z, {
                      user: t,
                      className: ei.profileBanner
                    }), (0, l.jsx)("div", {
                      className: ei.profileButtons,
                      children: (0, l.jsx)(W.Z, {
                        user: t,
                        currentUser: er,
                        guildId: eo,
                        channelId: es,
                        displayProfile: eA,
                        relationshipType: eC,
                        onClose: ej
                      })
                    }), (null == eA ? true : eA.bio) != null && (null == eA ? true : eA.bio) !== "" && !e_ && (0, l.jsx)(D.Z, {
                      userBio: eA.bio,
                      setLineClamp: false
                    }), eU.length > 0 && (0, l.jsx)(J.Z, {
                      heading: el.intl.string(el.t["Uv/eT0"]),
                      children: (0, l.jsx)(M.Z, {
                        applicationIds: eU
                      })
                    }), (0, l.jsx)(J.Z, {
                      heading: el.intl.string(el.t.a6XYDw),
                      children: (0, l.jsx)(B.Z, {
                        userId: t.id,
                        guildId: null == eA ? true : eA.guildId,
                        tooltipDelay: ee.vB
                      })
                    }), (null == eA ? true : eA.guildId) != null && (0, l.jsx)(K.Z, {
                      user: t,
                      currentUser: er,
                      guildId: eA.guildId,
                      className: ei.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: em === ee.Tb.ROLES
                    }), eB.length > 0 && (0, l.jsx)(J.Z, {
                      heading: el.intl.string(el.t["3fe7U1"]),
                      scrollIntoView: em === ee.Tb.CONNECTIONS,
                      children: (0, l.jsx)(Y.Z, {
                        connections: eB,
                        userId: t.id,
                        className: ei.profileAppConnections
                      })
                    }), (0, l.jsx)(J.Z, {
                      heading: el.intl.string(el.t["mQKv+v"]),
                      scrollIntoView: em === ee.Tb.NOTE,
                      children: (0, l.jsx)(a.Z, {
                        userId: t.id,
                        className: ei.profileNote,
                        autoFocus: em === ee.Tb.NOTE,
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
                        }, ey))
                      })
                    })]
                  }), (null == eA ? true : eA.profileEffect) != null && (0, l.jsx)(v.Z, {
                    profileEffectId: null == eA ? true : eA.profileEffect.id,
                    isHovering: eZ
                  })]
                }), (0, l.jsx)(q.Z, {
                  user: t,
                  currentUser: er,
                  displayProfile: eA,
                  guildId: eo,
                  channelId: es,
                  items: eM,
                  initialSection: eu,
                  initialSubsection: em,
                  onClose: ej
                })]
              })
            })]
          }), (0, l.jsx)(H.Z, {
            userId: t.id,
            className: ei.editingToolbar
          })]
        })
      })
    })
  })
}