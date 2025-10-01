/** Chunk was on 31553 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => ea
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk137317 = require("./137317.js"),
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
  Chunk7938 = require("./7938.js");

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
    initialSubsection: eh,
    transitionState: ej,
    customStatusPrompt: ex,
    openedAt: ev,
    onClose: eg,
    showGuildProfile: eb = true,
    sourceAnalyticsLocations: ey = [],
    disableActionsForPreview: eO = false
  } = e, {
    analyticsLocations: eI
  } = (0, m.ZP)([...ey, u.Z.USER_PROFILE_MODAL_V2]), eZ = (0, N.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: ep,
    guildId: ec,
    channelId: ed,
    messageId: eu,
    roleId: em,
    showGuildProfile: eb
  }), eP = i.useRef(null), eN = (0, c.Z)(eP), [eT, eA] = i.useState(false), {
    defaultWishlistId: eE
  } = (0, o.cj)([A.Z], () => ({
    defaultWishlistId: A.Z.getFirstWishlistId(t.id)
  }));
  (0, b.k)(eE);
  let eS = (0, w.$m)(),
    eC = (0, s.q_F)({
      opacity: +(null != eS.interactionType),
      config: {
        duration: 150
      }
    }),
    ew = i.useMemo(() => null != ec ? {
      [ec]: [t.id]
    } : {}, [ec, t.id]);
  (0, d.$)(ew, "UserProfileModalV2");
  let e_ = (0, E.ZP)(t.id, eb ? ec : true),
    eD = Z.ZP.useName(null == e_ ? true : e_.guildId, ed, t),
    {
      relationshipType: eR,
      originApplicationId: eL
    } = (0, o.cj)([y.Z], () => ({
      relationshipType: y.Z.getRelationshipType(t.id),
      originApplicationId: y.Z.getOriginApplicationId(t.id)
    })),
    eM = (0, o.e7)([O.Z], () => O.Z.hidePersonalInformation),
    eU = null == e_ ? true : e_.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    ek = (0, f.p)({
      location: "UserProfileModalV2"
    }),
    eB = i.useMemo(() => null != ex ? ex : (0, h.Z)(), [ex]),
    eF = (0, et.Z)({
      user: t,
      currentUser: ea
    }),
    eV = (0, x.Y)({
      userId: t.id
    }),
    eG = (0, j.vh)(t.id),
    ez = (0, C.Z)(t.id),
    eK = (0, S.Z)(t.id),
    eW = (0, p.Dt)(),
    eY = eo.intl.format(eo.t.KRe1Fh, {
      name: eD
    });
  return i.useEffect(() => {
    let e = () => {
      eA(true), setTimeout(() => {
        eA(false)
      }, 1e3)
    };
    return I.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), () => {
      I.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null)
    }
  }, []), (0, l.jsx)(m.Gt, {
    value: eI,
    children: (0, l.jsx)(N.Mt, {
      value: eZ,
      openedAt: ev,
      fetchStartedAt: null == e_ ? true : e_.fetchStartedAt,
      fetchEndedAt: null == e_ ? true : e_.fetchEndedAt,
      isLoaded: null == e_ ? true : e_.isLoaded,
      children: (0, l.jsx)(w.NJ, {
        value: eS,
        children: (0, l.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          hideShadow: true,
          className: es.root,
          transitionState: ej,
          "aria-labelledby": eW,
          parentComponent: "UserProfileModalV2",
          children: [(0, l.jsxs)(s.UkV, {
            isShaking: eT,
            intensity: 1.4,
            children: [eO ? (0, l.jsxs)("div", {
              className: es.previewBar,
              children: [(0, l.jsxs)(s.X6q, {
                id: eW,
                variant: "heading-sm/normal",
                color: "text-primary",
                children: [(0, l.jsx)(s.nn4, {
                  children: "".concat(eo.intl.string(eo.t.apViam), ": ").concat(eY)
                }), (0, l.jsx)("span", {
                  "aria-hidden": true,
                  children: eo.intl.string(eo.t.apViam)
                })]
              }), (0, l.jsx)(s.zxk, {
                size: "sm",
                variant: "secondary",
                text: eo.intl.string(eo.t.ojM1xM),
                onClick: eg,
                "aria-label": eo.intl.string(eo.t.cpT0Cg)
              })]
            }) : (0, l.jsx)(s.nn4, {
              children: (0, l.jsx)(s.H, {
                id: eW,
                children: eY
              })
            }), (0, l.jsx)(s.y5t, {
              children: (0, l.jsxs)(z.Z, {
                className: eO ? es.disabled : true,
                user: t,
                displayProfile: e_,
                themeType: er.l.MODAL_V2,
                children: [null != eU && (0, l.jsx)("div", {
                  className: es.backgroundImage,
                  style: {
                    backgroundImage: "url(".concat(eU, ")")
                  }
                }), null != eS.interactionType && (0, l.jsx)(r.animated.div, {
                  style: eC,
                  className: es.backdrop
                }), (0, l.jsx)(ee.Z, {
                  onAutoHide: () => (0, en.L$)(null),
                  className: es.toast
                }), (0, l.jsxs)("div", {
                  className: es.profile,
                  ref: (null == e_ ? true : e_.profileEffect) != null ? eP : true,
                  children: [(0, l.jsxs)("div", {
                    className: es.profileHeader,
                    children: [(0, l.jsx)(R.Z, {
                      user: t,
                      displayProfile: e_,
                      themeType: er.l.MODAL_V2
                    }), (0, l.jsx)(F.Z, {
                      userId: t.id,
                      onClose: eg,
                      className: es.interactionToast
                    }), (0, l.jsx)(_.Z, {
                      user: t,
                      displayProfile: e_,
                      guildId: ec,
                      channelId: ed,
                      themeType: er.l.MODAL_V2
                    }), (0, l.jsx)(W.Z, {
                      user: t,
                      guildId: ec,
                      channelId: ed,
                      themeType: er.l.MODAL_V2,
                      hasEntered: ej === s.Dvm.ENTERED,
                      prompt: ek && t.id === ea.id ? eB : null,
                      disableToolbar: eO
                    })]
                  }), (0, l.jsxs)(s.Ttm, {
                    fade: true,
                    className: es.profileBody,
                    children: [(0, l.jsx)(K.Z, {
                      user: t,
                      onClose: eg,
                      nickname: Z.ZP.useName(null == e_ ? true : e_.guildId, ed, t),
                      nicknameIcons: (0, l.jsx)(U.Z, {
                        size: "sm",
                        userId: t.id
                      }),
                      nicknameVariant: "heading-xl/semibold",
                      pronouns: null == e_ ? true : e_.pronouns,
                      tags: (0, l.jsx)(D.Z, {
                        displayProfile: e_,
                        themeType: er.l.MODAL_V2,
                        onClose: eg
                      })
                    }), eR === ei.OGo.PENDING_INCOMING && (0, l.jsx)(z.Z.Overlay, {
                      className: es.profileOverlay,
                      children: (0, l.jsx)(B.Z, {
                        user: t,
                        applicationId: eL,
                        guildId: null != (n = null == e_ ? true : e_.guildId) ? n : true,
                        channelId: ed,
                        className: es.profileBanner
                      })
                    }), eG.map(e => {
                      var n;
                      let {
                        applicationId: i
                      } = e;
                      return (0, l.jsx)(z.Z.Overlay, {
                        className: es.profileOverlay,
                        children: (0, l.jsx)(B.Z, {
                          user: t,
                          guildId: null != (n = null == e_ ? true : e_.guildId) ? n : true,
                          channelId: ed,
                          isGameRelationship: true,
                          applicationId: i,
                          className: es.profileBanner
                        })
                      }, i)
                    }), t.isProvisional && (0, l.jsx)(z.Z.Overlay, {
                      className: es.profileOverlay,
                      children: (0, l.jsx)(Q.Z, {
                        heading: eo.intl.string(eo.t.Iyka0d),
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
                      isPremiumUser: (0, P.I5)(ea),
                      onInteraction: eg
                    }), (0, l.jsx)(G.Z, {
                      user: t,
                      className: es.profileBanner
                    }), (0, l.jsx)("div", {
                      className: es.profileButtons,
                      children: (0, l.jsx)(J.Z, {
                        user: t,
                        currentUser: ea,
                        guildId: ec,
                        channelId: ed,
                        displayProfile: e_,
                        relationshipType: eR,
                        onClose: eg
                      })
                    }), (null == e_ ? true : e_.bio) != null && (null == e_ ? true : e_.bio) !== "" && !eM && (0, l.jsx)(L.Z, {
                      userBio: e_.bio,
                      setLineClamp: false
                    }), eV.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: eo.intl.string(eo.t["Uv/eT0"]),
                      children: (0, l.jsx)(k.Z, {
                        applicationIds: eV
                      })
                    }), (0, l.jsx)(Q.Z, {
                      heading: eo.intl.string(eo.t.a6XYDw),
                      children: (0, l.jsx)(V.Z, {
                        userId: t.id,
                        guildId: null == e_ ? true : e_.guildId,
                        tooltipDelay: el.vB
                      })
                    }), (null == e_ ? true : e_.guildId) != null && (0, l.jsx)(Y.Z, {
                      user: t,
                      currentUser: ea,
                      guildId: e_.guildId,
                      className: es.profileRolesSection,
                      headingVariant: "text-xs/medium",
                      headingColor: "currentColor",
                      scrollIntoView: eh === el.Tb.ROLES
                    }), ez.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: eo.intl.string(eo.t["3fe7U1"]),
                      scrollIntoView: eh === el.Tb.CONNECTIONS,
                      children: (0, l.jsx)(q.Z, {
                        connections: ez,
                        userId: t.id,
                        className: es.profileAppConnections
                      })
                    }), eK.length > 0 && (0, l.jsx)(Q.Z, {
                      heading: eo.intl.string(eo.t.PHjkRE),
                      scrollIntoView: eh === el.Tb.APPS,
                      children: (0, l.jsx)(H.Z, {
                        applicationRoleConnections: eK,
                        onClose: eg,
                        className: es.profileAppConnections
                      })
                    }), (0, l.jsx)(Q.Z, {
                      heading: eo.intl.string(eo.t["mQKv+v"]),
                      scrollIntoView: eh === el.Tb.NOTE,
                      children: (0, l.jsx)(a.Z, {
                        userId: t.id,
                        className: es.profileNote,
                        autoFocus: eh === el.Tb.NOTE,
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
                        }, eZ))
                      })
                    })]
                  }), (null == e_ ? true : e_.profileEffect) != null && (0, l.jsx)(v.Z, {
                    skuId: null == e_ ? true : e_.profileEffect.skuId,
                    isHovering: eN
                  })]
                }), (0, l.jsx)($.Z, {
                  user: t,
                  currentUser: ea,
                  displayProfile: e_,
                  guildId: ec,
                  channelId: ed,
                  items: eF,
                  initialSection: ef,
                  initialSubsection: eh,
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