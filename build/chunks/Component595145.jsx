/** Chunk was on 93979 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => ea
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk878342 = require("./878342.js"),
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
  var n, t;
  let {
    user: ea,
    currentUser: ec,
    guildId: ed,
    channelId: eu,
    messageId: em,
    roleId: ep,
    sessionId: ef,
    initialSection: ex,
    initialSubsection: eh,
    transitionState: ev,
    customStatusPrompt: ej,
    openedAt: eg,
    onClose: eb,
    showGuildProfile: eI = true,
    sourceAnalyticsLocations: ey = [],
    disableActionsForPreview: e_ = false
  } = e, {
    analyticsLocations: eZ
  } = (0, u.ZP)([...ey, d.Z.USER_PROFILE_MODAL_V2]), eO = (0, N.ZB)({
    layout: "MODAL_V2",
    userId: ea.id,
    sourceSessionId: ef,
    guildId: ed,
    channelId: eu,
    messageId: em,
    roleId: ep,
    showGuildProfile: eI
  }), eN = i.useRef(null), eA = (0, p.X)(eN), [eT, eP] = i.useState(false), {
    defaultWishlistId: eE
  } = (0, r.cj)([T.Z], () => ({
    defaultWishlistId: T.Z.getFirstWishlistId(ea.id)
  }));
  (0, b.kZ)(eE, ea.id);
  let eC = (0, S.$m)(),
    eS = (0, s.q_F)({
      opacity: +(null != eC.interactionType),
      config: {
        duration: 150
      }
    }),
    ew = i.useMemo(() => null != ed ? {
      [ed]: [ea.id]
    } : {}, [ed, ea.id]);
  (0, c.$)(ew, "UserProfileModalV2");
  let eD = (0, P.ZP)(ea.id, eI ? ed : true),
    eR = Z.ZP.useName(null == eD ? true : eD.guildId, eu, ea),
    {
      relationshipType: eL,
      originApplicationId: eM
    } = (0, r.cj)([I.Z], () => ({
      relationshipType: I.Z.getRelationshipType(ea.id),
      originApplicationId: I.Z.getOriginApplicationId(ea.id)
    })),
    eB = (0, r.e7)([y.Z], () => y.Z.hidePersonalInformation),
    eU = null == eD ? true : eD.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    ek = (0, f.p)({
      location: "UserProfileModalV2"
    }),
    eG = i.useMemo(() => null != ej ? ej : (0, x.Z)(), [ej]),
    eV = (0, et.Z)({
      user: ea,
      currentUser: ec
    }),
    eF = (0, v.Y)({
      userId: ea.id
    }),
    eW = (0, h.vh)(ea.id),
    eH = (0, C.Z)(ea.id),
    ez = (0, E.Z)(ea.id),
    eY = (0, m.Dt)(),
    eK = er.intl.format(er.t.KRe1Fk, {
      name: eR
    });
  return i.useEffect(() => {
    let e = () => {
      eP(true), setTimeout(() => {
        eP(false)
      }, 1e3)
    };
    return _.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), () => {
      _.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null)
    }
  }, []), (0, l.jsx)(u.Gt, {
    value: eZ,
    children: (0, l.jsx)(N.Mt, {
      value: eO,
      openedAt: eg,
      fetchStartedAt: null == eD ? true : eD.fetchStartedAt,
      fetchEndedAt: null == eD ? true : eD.fetchEndedAt,
      isLoaded: null == eD ? true : eD.isLoaded,
      children: (0, l.jsx)(S.NJ, {
        value: eC,
        children: (0, l.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          hideShadow: true,
          className: es.root,
          transitionState: ev,
          "aria-labelledby": eY,
          parentComponent: "UserProfileModalV2",
          children: [(0, l.jsxs)(s.UkV, {
            isShaking: eT,
            intensity: 1.4,
            children: [e_ ? (0, l.jsxs)("div", {
              className: es.previewBar,
              children: [(0, l.jsxs)(s.Heading, {
                id: eY,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(s.nn4, {
                  children: "".concat(er.intl.string(er.t.apVial), ": ").concat(eK)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: er.intl.string(er.t.apVial)
                })]
              }), (0, l.jsx)(s.Button, {
                size: "sm",
                variant: "secondary",
                text: er.intl.string(er.t.ojM1xJ),
                onClick: eb,
                "aria-label": er.intl.string(er.t.cpT0Cq)
              })]
            }) : (0, l.jsx)(s.nn4, {
              children: (0, l.jsx)(s.H, {
                id: eY,
                children: eK
              })
            }), (0, l.jsx)(s.y5t, {
              children: (0, l.jsxs)(W.Z, {
                className: e_ ? es.disabled : true,
                user: ea,
                displayProfile: eD,
                themeType: eo.l.MODAL_V2,
                children: [null != eU && (0, l.jsx)("div", {
                  className: es.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eU, ")")
                  }
                }), null != eC.interactionType && (0, l.jsx)(o.animated.div, {
                  style: eS,
                  className: es.backdrop
                }), (0, l.jsx)(ee.Z, {
                  onAutoHide: () => (0, en.L$)(null),
                  className: es.toast
                }), (0, l.jsxs)("div", {
                  className: es.profile,
                  ref: (null == eD ? true : eD.profileEffect) != null ? eN : true,
                  children: [(0, l.jsxs)("div", {
                    className: es.profileHeader,
                    children: [(0, l.jsx)(R.Z, {
                      user: ea,
                      displayProfile: eD,
                      themeType: eo.l.MODAL_V2
                    }), (0, l.jsx)(G.Z, {
                      userId: ea.id,
                      onClose: eb,
                      className: es.interactionToast
                    }), (0, l.jsx)(w.Z, {
                      user: ea,
                      displayProfile: eD,
                      guildId: ed,
                      channelId: eu,
                      themeType: eo.l.MODAL_V2
                    }), (0, l.jsx)(z.Z, {
                      user: ea,
                      guildId: ed,
                      channelId: eu,
                      themeType: eo.l.MODAL_V2,
                      hasEntered: ev === s.Dvm.ENTERED,
                      prompt: ek && ea.id === ec.id ? eG : null,
                      disableToolbar: e_
                    })]
                  }), (0, l.jsxs)(s.Ttm, {
                    fade: true,
                    className: es.profileBody,
                    children: [(0, l.jsx)(H.Z, {
                      user: ea,
                      guildId: null != (n = null == eD ? true : eD.guildId) ? n : true,
                      onClose: eb,
                      nickname: Z.ZP.useName(null == eD ? true : eD.guildId, eu, ea),
                      nicknameIcons: (0, l.jsx)(B.Z, {
                        size: "sm",
                        userId: ea.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == eD ? true : eD.pronouns,
                      tags: (0, l.jsx)(D.Z, {
                        displayProfile: eD,
                        themeType: eo.l.MODAL_V2,
                        onClose: eb
                      })
                    }), eL === ei.OGo.PENDING_INCOMING && (0, l.jsx)(W.Z.Overlay, {
                      className: es.profileOverlay,
                      children: (0, l.jsx)(k.Z, {
                        user: ea,
                        applicationId: eM,
                        guildId: null != (t = null == eD ? true : eD.guildId) ? t : true,
                        channelId: eu,
                        className: es.profileBanner
                      })
                    }), eW.map(e => {
                      var n;
                      let {
                        applicationId: t
                      } = e;
                      return (0, l.jsx)(W.Z.Overlay, {
                        className: es.profileOverlay,
                        children: (0, l.jsx)(k.Z, {
                          user: ea,
                          guildId: null != (n = null == eD ? true : eD.guildId) ? n : true,
                          channelId: eu,
                          isGameRelationship: true,
                          applicationId: t,
                          className: es.profileBanner
                        })
                      }, t)
                    }), ea.isProvisional && (0, l.jsx)(W.Z.Overlay, {
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
                          userId: ea.id,
                          variant: "text-sm/normal"
                        })
                      })
                    }), ea.id === ec.id && (0, l.jsx)(M.Z, {
                      isPremiumUser: (0, O.I5)(ec),
                      onInteraction: eb
                    }), (0, l.jsx)(F.Z, {
                      user: ea,
                      className: es.profileBanner
                    }), (0, l.jsx)("div", {
                      className: es.profileButtons,
                      children: (0, l.jsx)(J.Z, {
                        user: ea,
                        currentUser: ec,
                        guildId: ed,
                        channelId: eu,
                        displayProfile: eD,
                        relationshipType: eL,
                        onClose: eb
                      })
                    }), (null == eD ? true : eD.bio) != null && (null == eD ? true : eD.bio) !== "" && !eB && (0, l.jsx)(L.Z, {
                      userBio: eD.bio,
                      setLineClamp: false
                    }), eF.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t["Uv/eTx"]),
                      children: (0, l.jsx)(U.Z, {
                        applicationIds: eF
                      })
                    }), (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t.a6XYD9),
                      children: (0, l.jsx)(V.Z, {
                        userId: ea.id,
                        guildId: null == eD ? true : eD.guildId,
                        tooltipDelay: el.vB
                      })
                    }), (null == eD ? true : eD.guildId) != null && (0, l.jsx)(Y.Z, {
                      user: ea,
                      currentUser: ec,
                      guildId: eD.guildId,
                      className: es.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: eh === el.Tb.ROLES
                    }), eH.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t["3fe7U5"]),
                      scrollIntoView: eh === el.Tb.CONNECTIONS,
                      children: (0, l.jsx)(q.Z, {
                        connections: eH,
                        userId: ea.id,
                        className: es.profileAppConnections
                      })
                    }), ez.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t.PHjkRE),
                      scrollIntoView: eh === el.Tb.APPS,
                      children: (0, l.jsx)(K.Z, {
                        applicationRoleConnections: ez,
                        onClose: eb,
                        className: es.profileAppConnections
                      })
                    }), (0, l.jsx)(Q.Z, {
                      heading: er.intl.string(er.t["mQKv+v"]),
                      scrollIntoView: eh === el.Tb.NOTE,
                      children: (0, l.jsx)(a.Z, {
                        userId: ea.id,
                        className: es.profileNote,
                        autoFocus: eh === el.Tb.NOTE,
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
                        }, eO))
                      })
                    })]
                  }), (null == eD ? true : eD.profileEffect) != null && (0, l.jsx)(j.Z, {
                    skuId: null == eD ? true : eD.profileEffect.skuId,
                    isHovering: eA
                  })]
                }), (0, l.jsx)($.Z, {
                  user: ea,
                  currentUser: ec,
                  displayProfile: eD,
                  guildId: ed,
                  channelId: eu,
                  items: eV,
                  initialSection: ex,
                  initialSubsection: eh,
                  onClose: eb
                })]
              })
            })]
          }), (0, l.jsx)(X.Z, {
            userId: ea.id,
            className: es.editingToolbar
          })]
        })
      })
    })
  })
}