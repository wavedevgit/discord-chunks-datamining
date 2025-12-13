/** Chunk was on 93979 **/
/** chunk id: 595145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => ec
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk706619 = require("./706619.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk621853 = require("./621853.js"),
  Chunk687158 = require("./687158.js"),
  Chunk250822 = require("./250822.js"),
  Chunk771362 = require("./771362.js"),
  Chunk104287 = require("./104287.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk407699 = require("./407699.jsx"),
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
  Chunk900011 = require("./900011.jsx"),
  Chunk693408 = require("./693408.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk76076 = require("./76076.jsx"),
  Chunk872269 = require("./872269.js"),
  Chunk768111 = require("./768111.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871893 = require("./871893.js");

function ec(e) {
  var n, t;
  let {
    user: ec,
    currentUser: es,
    guildId: ed,
    channelId: eu,
    messageId: ef,
    roleId: em,
    sessionId: ep,
    initialTabSection: ex,
    initialScrollTarget: eh,
    transitionState: ev,
    customStatusPrompt: eb,
    openedAt: ej,
    onClose: eg,
    showGuildProfile: eI = true,
    sourceAnalyticsLocations: ey = [],
    disableActionsForPreview: eZ = false
  } = e, {
    analyticsLocations: eO
  } = (0, d.ZP)([...ey, s.Z.USER_PROFILE_MODAL_V2]), eT = (0, T.ZB)({
    layout: "MODAL_V2",
    userId: ec.id,
    sourceSessionId: ep,
    guildId: ed,
    channelId: eu,
    messageId: ef,
    roleId: em,
    showGuildProfile: eI
  }), eN = i.useRef(null), eA = (0, f.X)(eN), [eP, eE] = i.useState(false), {
    defaultWishlistId: e_
  } = (0, r.cj)([N.Z], () => ({
    defaultWishlistId: N.Z.getFirstWishlistId(ec.id)
  }));
  (0, j.kZ)({
    wishlistId: e_,
    userId: ec.id
  });
  let eC = (0, C.$m)(),
    eS = (0, a.q_F)({
      opacity: +(null != eC.interactionType),
      config: {
        duration: 150
      }
    }),
    ew = i.useMemo(() => null != ed ? {
      [ed]: [ec.id]
    } : {}, [ed, ec.id]);
  (0, c.$)(ew, "UserProfileModalV2");
  let eD = (0, A.ZP)(ec.id, eI ? ed : true),
    eL = Z.ZP.useName(null == eD ? true : eD.guildId, eu, ec),
    {
      relationshipType: eR,
      originApplicationId: eM
    } = (0, r.cj)([g.Z], () => ({
      relationshipType: g.Z.getRelationshipType(ec.id),
      originApplicationId: g.Z.getOriginApplicationId(ec.id)
    })),
    eB = (0, r.e7)([I.Z], () => I.Z.hidePersonalInformation),
    eU = null == eD ? true : eD.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    ek = (0, m.p)({
      location: "UserProfileModalV2"
    }),
    eG = i.useMemo(() => null != eb ? eb : (0, p.Z)(), [eb]),
    eF = (0, et.Z)({
      user: ec,
      currentUser: es
    }),
    eV = (0, h.Y)({
      userId: ec.id
    }),
    eW = (0, x.vh)(ec.id),
    ez = (0, E.Z)(ec.id),
    eH = (0, P.Z)(ec.id),
    eY = (0, u.Dt)(),
    eK = er.intl.format(er.t.KRe1Fk, {
      name: eL
    });
  return i.useEffect(() => {
    let e = () => {
      eE(true), setTimeout(() => {
        eE(false)
      }, 1e3)
    };
    return y.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), () => {
      y.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null)
    }
  }, []), (0, l.jsx)(d.Gt, {
    value: eO,
    children: (0, l.jsx)(T.Mt, {
      value: eT,
      openedAt: ej,
      fetchStartedAt: null == eD ? true : eD.fetchStartedAt,
      fetchEndedAt: null == eD ? true : eD.fetchEndedAt,
      isLoaded: null == eD ? true : eD.isLoaded,
      children: (0, l.jsx)(C.NJ, {
        value: eC,
        children: (0, l.jsx)(_.n, {
          value: eh,
          children: (0, l.jsxs)(a.Y0X, {
            "data-migration-pending": true,
            hideShadow: true,
            className: ea.root,
            transitionState: ev,
            "aria-labelledby": eY,
            parentComponent: "UserProfileModalV2",
            children: [(0, l.jsxs)(a.UkV, {
              isShaking: eP,
              intensity: 1.4,
              children: [eZ ? (0, l.jsxs)("div", {
                className: ea.previewBar,
                children: [(0, l.jsxs)(a.Heading, {
                  id: eY,
                  variant: "heading-sm/normal",
                  color: "text-strong",
                  children: [(0, l.jsx)(a.nn4, {
                    children: "".concat(er.intl.string(er.t.apVial), ": ").concat(eK)
                  }), (0, l.jsx)("span", {
                    "aria-hidden": true,
                    children: er.intl.string(er.t.apVial)
                  })]
                }), (0, l.jsx)(a.Button, {
                  size: "sm",
                  variant: "secondary",
                  text: er.intl.string(er.t.ojM1xJ),
                  onClick: eg,
                  "aria-label": er.intl.string(er.t.cpT0Cq)
                })]
              }) : (0, l.jsx)(a.nn4, {
                children: (0, l.jsx)(a.H, {
                  id: eY,
                  children: eK
                })
              }), (0, l.jsx)(a.y5t, {
                children: (0, l.jsxs)(V.Z, {
                  className: eZ ? ea.disabled : true,
                  user: ec,
                  displayProfile: eD,
                  themeType: eo.l.MODAL_V2,
                  children: [null != eU && (0, l.jsx)("div", {
                    className: ea.backgroundImage,
                    style: {
                      backgroundImage: "url(".concat(eU, ")")
                    }
                  }), null != eC.interactionType && (0, l.jsx)(o.animated.div, {
                    style: eS,
                    className: ea.backdrop
                  }), (0, l.jsx)(ee.Z, {
                    onAutoHide: () => (0, en.L$)(null),
                    className: ea.toast
                  }), (0, l.jsxs)("div", {
                    className: ea.profile,
                    ref: (null == eD ? true : eD.profileEffect) != null ? eN : true,
                    children: [(0, l.jsxs)("div", {
                      className: ea.profileHeader,
                      children: [(0, l.jsx)(D.Z, {
                        user: ec,
                        displayProfile: eD,
                        themeType: eo.l.MODAL_V2
                      }), (0, l.jsx)(k.Z, {
                        userId: ec.id,
                        onClose: eg,
                        className: ea.interactionToast
                      }), (0, l.jsx)(S.Z, {
                        user: ec,
                        displayProfile: eD,
                        guildId: ed,
                        channelId: eu,
                        themeType: eo.l.MODAL_V2
                      }), (0, l.jsx)(z.Z, {
                        user: ec,
                        guildId: ed,
                        channelId: eu,
                        themeType: eo.l.MODAL_V2,
                        hasEntered: ev === a.Dvm.ENTERED,
                        prompt: ek && ec.id === es.id ? eG : null,
                        disableToolbar: eZ
                      })]
                    }), (0, l.jsxs)(a.Ttm, {
                      fade: true,
                      className: ea.profileBody,
                      children: [(0, l.jsx)(M.Z, {
                        userId: ec.id
                      }), (0, l.jsx)(W.Z, {
                        user: ec,
                        guildId: null != (n = null == eD ? true : eD.guildId) ? n : true,
                        onClose: eg,
                        nickname: Z.ZP.useName(null == eD ? true : eD.guildId, eu, ec),
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: null == eD ? true : eD.pronouns,
                        tags: (0, l.jsx)(w.Z, {
                          displayProfile: eD,
                          themeType: eo.l.MODAL_V2,
                          onClose: eg
                        })
                      }), eR === ei.OGo.PENDING_INCOMING && (0, l.jsx)(V.Z.Overlay, {
                        className: ea.profileOverlay,
                        children: (0, l.jsx)(U.Z, {
                          user: ec,
                          applicationId: eM,
                          guildId: null != (t = null == eD ? true : eD.guildId) ? t : true,
                          channelId: eu,
                          className: ea.profileBanner
                        })
                      }), eW.map(e => {
                        var n;
                        let {
                          applicationId: t
                        } = e;
                        return (0, l.jsx)(V.Z.Overlay, {
                          className: ea.profileOverlay,
                          children: (0, l.jsx)(U.Z, {
                            user: ec,
                            guildId: null != (n = null == eD ? true : eD.guildId) ? n : true,
                            channelId: eu,
                            isGameRelationship: true,
                            applicationId: t,
                            className: ea.profileBanner
                          })
                        }, t)
                      }), ec.isProvisional && (0, l.jsx)(V.Z.Overlay, {
                        className: ea.profileOverlay,
                        children: (0, l.jsx)(Q.Z, {
                          heading: er.intl.string(er.t.Iyka0U),
                          headingVariant: "text-md/semibold",
                          headingIcon: (0, l.jsx)(a.Mgn, {
                            size: "xs",
                            color: "currentColor"
                          }),
                          className: ea.profileBanner,
                          children: (0, l.jsx)(b.n, {
                            userId: ec.id,
                            variant: "text-sm/normal"
                          })
                        })
                      }), ec.id === es.id && (0, l.jsx)(R.Z, {
                        isPremiumUser: (0, O.I5)(es),
                        onInteraction: eg
                      }), (0, l.jsx)(F.Z, {
                        user: ec,
                        className: ea.profileBanner
                      }), (0, l.jsx)("div", {
                        className: ea.profileButtons,
                        children: (0, l.jsx)(K.Z, {
                          user: ec,
                          currentUser: es,
                          guildId: ed,
                          channelId: eu,
                          displayProfile: eD,
                          relationshipType: eR,
                          onClose: eg
                        })
                      }), (null == eD ? true : eD.bio) != null && (null == eD ? true : eD.bio) !== "" && !eB && (0, l.jsx)(L.Z, {
                        userBio: eD.bio,
                        setLineClamp: false
                      }), eV.length > 0 && (0, l.jsx)(Q.Z, {
                        heading: er.intl.string(er.t["Uv/eTx"]),
                        children: (0, l.jsx)(B.Z, {
                          applicationIds: eV
                        })
                      }), (0, l.jsx)(Q.Z, {
                        heading: er.intl.string(er.t.a6XYD9),
                        children: (0, l.jsx)(G.Z, {
                          userId: ec.id,
                          guildId: null == eD ? true : eD.guildId,
                          tooltipDelay: el.vB
                        })
                      }), (null == eD ? true : eD.guildId) != null && (0, l.jsx)(H.Z, {
                        user: ec,
                        currentUser: es,
                        guildId: eD.guildId,
                        className: ea.profileRolesSection,
                        headingVariant: "text-xs/medium",
                        headingColor: "currentColor"
                      }), ez.length > 0 && (0, l.jsx)(Q.Z, {
                        heading: er.intl.string(er.t["3fe7U5"]),
                        scrollTargetId: el.Tb.CONNECTIONS,
                        children: (0, l.jsx)(J.Z, {
                          connections: ez,
                          userId: ec.id,
                          className: ea.profileAppConnections
                        })
                      }), eH.length > 0 && (0, l.jsx)(Q.Z, {
                        heading: er.intl.string(er.t.PHjkRE),
                        scrollTargetId: el.Tb.APPS,
                        children: (0, l.jsx)(Y.Z, {
                          applicationRoleConnections: eH,
                          onClose: eg,
                          className: ea.profileAppConnections
                        })
                      }), (0, l.jsx)(X.Z, {
                        userId: ec.id
                      })]
                    }), (null == eD ? true : eD.profileEffect) != null && (0, l.jsx)(v.Z, {
                      skuId: null == eD ? true : eD.profileEffect.skuId,
                      isHovering: eA
                    })]
                  }), (0, l.jsx)($.Z, {
                    user: ec,
                    currentUser: es,
                    displayProfile: eD,
                    guildId: ed,
                    channelId: eu,
                    items: eF,
                    initialSection: ex,
                    onClose: eg
                  })]
                })
              })]
            }), (0, l.jsx)(q.Z, {
              userId: ec.id,
              className: ea.editingToolbar
            })]
          })
        })
      })
    })
  })
}