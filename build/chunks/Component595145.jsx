/** Chunk was on 93979 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => ea
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk508312 = require("./508312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666520 = require("./666520.jsx"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
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
  Chunk250822 = require("./250822.js"),
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
  Chunk769321 = require("./769321.jsx"),
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

function ea(e) {
  var n;
  let {
    user: t,
    currentUser: ea,
    guildId: ec,
    channelId: ed,
    messageId: eu,
    roleId: em,
    sessionId: ep,
    initialSection: ef,
    initialSubsection: ex,
    transitionState: eh,
    customStatusPrompt: ev,
    openedAt: ej,
    onClose: eg,
    showGuildProfile: eb = true,
    sourceAnalyticsLocations: eI = [],
    disableActionsForPreview: ey = false
  } = e, {
    analyticsLocations: e_
  } = (0, u.ZP)([...eI, d.Z.USER_PROFILE_MODAL_V2]), eZ = (0, N.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: ep,
    guildId: ec,
    channelId: ed,
    messageId: eu,
    roleId: em,
    showGuildProfile: eb
  }), eO = i.useRef(null), eN = (0, p.X)(eO), [eA, eT] = i.useState(false), {
    defaultWishlistId: eP
  } = (0, r.cj)([T.Z], () => ({
    defaultWishlistId: T.Z.getFirstWishlistId(t.id)
  }));
  (0, b.kZ)(eP, t.id);
  let eE = (0, S.$m)(),
    eC = (0, s.q_F)({
      opacity: +(null != eE.interactionType),
      config: {
        duration: 150
      }
    }),
    eS = i.useMemo(() => null != ec ? {
      [ec]: [t.id]
    } : {}, [ec, t.id]);
  (0, c.$)(eS, "UserProfileModalV2");
  let ew = (0, P.ZP)(t.id, eb ? ec : true),
    eD = Z.ZP.useName(null == ew ? true : ew.guildId, ed, t),
    {
      relationshipType: eR,
      originApplicationId: eL
    } = (0, r.cj)([I.Z], () => ({
      relationshipType: I.Z.getRelationshipType(t.id),
      originApplicationId: I.Z.getOriginApplicationId(t.id)
    })),
    eM = (0, r.e7)([y.Z], () => y.Z.hidePersonalInformation),
    eB = null == ew ? true : ew.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eU = (0, f.p)({
      location: "UserProfileModalV2"
    }),
    ek = i.useMemo(() => null != ev ? ev : (0, x.Z)(), [ev]),
    eG = (0, et.Z)({
      user: t,
      currentUser: ea
    }),
    eV = (0, v.Y)({
      userId: t.id
    }),
    eF = (0, h.vh)(t.id),
    eW = (0, C.Z)(t.id),
    eH = (0, E.Z)(t.id),
    ez = (0, m.Dt)(),
    eY = er.intl.format(er.t.KRe1Fk, {
      name: eD
    });
  return i.useEffect(() => {
    let e = () => {
      eT(true), setTimeout(() => {
        eT(false)
      }, 1e3)
    };
    return _.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), () => {
      _.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null)
    }
  }, []), (0, l.jsx)(u.Gt, {
    value: e_,
    children: (0, l.jsx)(N.Mt, {
      value: eZ,
      openedAt: ej,
      fetchStartedAt: null == ew ? true : ew.fetchStartedAt,
      fetchEndedAt: null == ew ? true : ew.fetchEndedAt,
      isLoaded: null == ew ? true : ew.isLoaded,
      children: (0, l.jsx)(S.NJ, {
        value: eE,
        children: (0, l.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          hideShadow: true,
          className: es.root,
          transitionState: eh,
          "aria-labelledby": ez,
          parentComponent: "UserProfileModalV2",
          children: [(0, l.jsxs)(s.UkV, {
            isShaking: eA,
            intensity: 1.4,
            children: [ey ? (0, l.jsxs)("div", {
              className: es.previewBar,
              children: [(0, l.jsxs)(s.Heading, {
                id: ez,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(s.nn4, {
                  children: "".concat(er.intl.string(er.t.apVial), ": ").concat(eY)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: er.intl.string(er.t.apVial)
                })]
              }), (0, l.jsx)(s.Button, {
                size: "sm",
                variant: "secondary",
                text: er.intl.string(er.t.ojM1xJ),
                onClick: eg,
                "aria-label": er.intl.string(er.t.cpT0Cq)
              })]
            }) : (0, l.jsx)(s.nn4, {
              children: (0, l.jsx)(s.H, {
                id: ez,
                children: eY
              })
            }), (0, l.jsx)(s.y5t, {
              children: (0, l.jsxs)(W.Z, {
                className: ey ? es.disabled : true,
                user: t,
                displayProfile: ew,
                themeType: eo.l.MODAL_V2,
                children: [null != eB && (0, l.jsx)("div", {
                  className: es.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eB, ")")
                  }
                }), null != eE.interactionType && (0, l.jsx)(o.animated.div, {
                  style: eC,
                  className: es.backdrop
                }), (0, l.jsx)(ee.Z, {
                  onAutoHide: () => (0, en.L$)(null),
                  className: es.toast
                }), (0, l.jsxs)("div", {
                  className: es.profile,
                  ref: (null == ew ? true : ew.profileEffect) != null ? eO : true,
                  children: [(0, l.jsxs)("div", {
                    className: es.profileHeader,
                    children: [(0, l.jsx)(R.Z, {
                      user: t,
                      displayProfile: ew,
                      themeType: eo.l.MODAL_V2
                    }), (0, l.jsx)(G.Z, {
                      userId: t.id,
                      onClose: eg,
                      className: es.interactionToast
                    }), (0, l.jsx)(w.Z, {
                      user: t,
                      displayProfile: ew,
                      guildId: ec,
                      channelId: ed,
                      themeType: eo.l.MODAL_V2
                    }), (0, l.jsx)(z.Z, {
                      user: t,
                      guildId: ec,
                      channelId: ed,
                      themeType: eo.l.MODAL_V2,
                      hasEntered: eh === s.Dvm.ENTERED,
                      prompt: eU && t.id === ea.id ? ek : null,
                      disableToolbar: ey
                    })]
                  }), (0, l.jsxs)(s.Ttm, {
                    fade: true,
                    className: es.profileBody,
                    children: [(0, l.jsx)(H.Z, {
                      user: t,
                      guildId: ec,
                      onClose: eg,
                      nickname: Z.ZP.useName(null == ew ? true : ew.guildId, ed, t),
                      nicknameIcons: (0, l.jsx)(B.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == ew ? true : ew.pronouns,
                      tags: (0, l.jsx)(D.Z, {
                        displayProfile: ew,
                        themeType: eo.l.MODAL_V2,
                        onClose: eg
                      })
                    }), eR === ei.OGo.PENDING_INCOMING && (0, l.jsx)(W.Z.Overlay, {
                      className: es.profileOverlay,
                      children: (0, l.jsx)(k.Z, {
                        user: t,
                        applicationId: eL,
                        guildId: null != (n = null == ew ? true : ew.guildId) ? n : true,
                        channelId: ed,
                        className: es.profileBanner
                      })
                    }), eF.map(e => {
                      var n;
                      let {
                        applicationId: i
                      } = e;
                      return (0, l.jsx)(W.Z.Overlay, {
                        className: es.profileOverlay,
                        children: (0, l.jsx)(k.Z, {
                          user: t,
                          guildId: null != (n = null == ew ? true : ew.guildId) ? n : true,
                          channelId: ed,
                          isGameRelationship: true,
                          applicationId: i,
                          className: es.profileBanner
                        })
                      }, i)
                    }), t.isProvisional && (0, l.jsx)(W.Z.Overlay, {
                      className: es.profileOverlay,
                      children: (0, l.jsx)(Q.Z, {
                        heading: er.intl.string(er.t.Iyka0U),
                        headingVariant: "text-md/semibold",
                        headingIcon: (0, l.jsx)(s.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        }),
                        className: es.profileBanner,
                        children: (0, l.jsx)(g.n, {
                          userId: t.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), t.id === ea.id && (0, l.jsx)(M.Z, {
                      isPremiumUser: (0, O.I5)(ea),
                      onInteraction: eg
                    }), (0, l.jsx)(F.Z, {
                      user: t,
                      className: es.profileBanner
                    }), (0, l.jsx)("div", {
                      className: es.profileButtons,
                      children: (0, l.jsx)(J.Z, {
                        user: t,
                        currentUser: ea,
                        guildId: ec,
                        channelId: ed,
                        displayProfile: ew,
                        relationshipType: eR,
                        onClose: eg
                      })
                    }), (null == ew ? true : ew.bio) != null && (null == ew ? true : ew.bio) !== "" && !eM && (0, l.jsx)(L.Z, {
                      userBio: ew.bio,
                      setLineClamp: false
                    }), eV.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t["Uv/eTx"]),
                      children: (0, l.jsx)(U.Z, {
                        applicationIds: eV
                      })
                    }), (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t.a6XYD9),
                      children: (0, l.jsx)(V.Z, {
                        userId: t.id,
                        guildId: null == ew ? true : ew.guildId,
                        tooltipDelay: el.vB
                      })
                    }), (null == ew ? true : ew.guildId) != null && (0, l.jsx)(Y.Z, {
                      user: t,
                      currentUser: ea,
                      guildId: ew.guildId,
                      className: es.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: ex === el.Tb.ROLES
                    }), eW.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t["3fe7U5"]),
                      scrollIntoView: ex === el.Tb.CONNECTIONS,
                      children: (0, l.jsx)(q.Z, {
                        connections: eW,
                        userId: t.id,
                        className: es.profileAppConnections
                      })
                    }), eH.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t.PHjkRE),
                      scrollIntoView: ex === el.Tb.APPS,
                      children: (0, l.jsx)(K.Z, {
                        applicationRoleConnections: eH,
                        onClose: eg,
                        className: es.profileAppConnections
                      })
                    }), (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t["mQKv+v"]),
                      scrollIntoView: ex === el.Tb.NOTE,
                      children: (0, l.jsx)(a.Z, {
                        userId: t.id,
                        className: es.profileNote,
                        autoFocus: ex === el.Tb.NOTE,
                        onUpdate: () => (0, A.pQ)(function(e) {
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
                        }, eZ))
                      })
                    })]
                  }), (null == ew ? true : ew.profileEffect) != null && (0, l.jsx)(j.Z, {
                    skuId: null == ew ? true : ew.profileEffect.skuId,
                    isHovering: eN
                  })]
                }), (0, l.jsx)($.Z, {
                  user: t,
                  currentUser: ea,
                  displayProfile: ew,
                  guildId: ec,
                  channelId: ed,
                  items: eG,
                  initialSection: ef,
                  initialSubsection: ex,
                  onClose: eg
                })]
              })
            })]
          }), (0, l.jsx)(X.Z, {
            userId: t.id,
            className: es.editingToolbar
          })]
        })
      })
    })
  })
}