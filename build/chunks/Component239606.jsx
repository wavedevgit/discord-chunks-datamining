/** Chunk was on 64228 **/
/** chunk id: 239606, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => eo
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80682 = require("./80682.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk713517 = require("./713517.js"),
  Chunk576241 = require("./576241.js"),
  Chunk645507 = require("./645507.js"),
  Chunk922590 = require("./922590.js"),
  Chunk821269 = require("./821269.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk437774 = require("./437774.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk994500 = require("./994500.js"),
  Chunk351906 = require("./351906.js"),
  Chunk203982 = require("./203982.js"),
  Chunk562153 = require("./562153.js"),
  Chunk474090 = require("./474090.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk950191 = require("./950191.js"),
  Chunk346713 = require("./346713.js"),
  Chunk484509 = require("./484509.js"),
  Chunk716804 = require("./716804.js"),
  Chunk679492 = require("./679492.jsx"),
  Chunk718019 = require("./718019.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk389996 = require("./389996.jsx"),
  Chunk223330 = require("./223330.jsx"),
  Chunk559506 = require("./559506.jsx"),
  Chunk361311 = require("./361311.jsx"),
  Chunk886891 = require("./886891.jsx"),
  Chunk439053 = require("./439053.jsx"),
  Chunk743987 = require("./743987.jsx"),
  Chunk383448 = require("./383448.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk280645 = require("./280645.jsx"),
  Chunk291335 = require("./291335.jsx"),
  Chunk807651 = require("./807651.jsx"),
  Chunk510059 = require("./510059.jsx"),
  Chunk982599 = require("./982599.jsx"),
  Chunk399122 = require("./399122.jsx"),
  Chunk83013 = require("./83013.jsx"),
  Chunk515054 = require("./515054.jsx"),
  Chunk513265 = require("./513265.jsx"),
  Chunk384377 = require("./384377.js"),
  Chunk160983 = require("./160983.js"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk661388 = require("./661388.js");

function eo(e) {
  var l, t;
  let {
    user: eo,
    currentUser: ed,
    guildId: ec,
    channelId: eu,
    messageId: ef,
    roleId: ep,
    sessionId: em,
    initialTabSection: ex,
    initialScrollTarget: eA,
    transitionState: ej,
    customStatusPrompt: eh,
    openedAt: eg,
    onClose: ev,
    showGuildProfile: eb = true,
    sourceAnalyticsLocations: eI = [],
    disableActionsForPreview: ey = false
  } = e, {
    analyticsLocations: eO
  } = (0, c.Ay)([...eI, d.A.USER_PROFILE_MODAL_V2]), eN = (0, N.pb)({
    layout: "MODAL_V2",
    userId: eo.id,
    sourceSessionId: em,
    guildId: ec,
    channelId: eu,
    messageId: ef,
    roleId: ep,
    showGuildProfile: eb
  }), eE = i.useRef(null), e_ = (0, f.M)(eE), [eT, eP] = i.useState(false), {
    defaultWishlistId: eS
  } = (0, s.cf)([E.A], () => ({
    defaultWishlistId: E.A.getFirstWishlistId(eo.id)
  }));
  (0, g.fw)({
    wishlistId: eS,
    userId: eo.id
  });
  let eC = (0, C.fC)(),
    eL = (0, a.zhh)({
      opacity: +(null != eC.interactionType),
      config: {
        duration: 150
      }
    }),
    eD = i.useMemo(() => null != ec ? {
      [ec]: [eo.id]
    } : {}, [ec, eo.id]);
  (0, o.E)(eD, "UserProfileModalV2");
  let eR = (0, _.Ay)(eo.id, eb ? ec : true),
    ew = y.Ay.useName(null == eR ? true : eR.guildId, eu, eo),
    {
      relationshipType: eG,
      originApplicationId: eM
    } = (0, s.cf)([v.A], () => ({
      relationshipType: v.A.getRelationshipType(eo.id),
      originApplicationId: v.A.getOriginApplicationId(eo.id)
    })),
    eU = (0, s.bG)([b.A], () => b.A.hidePersonalInformation),
    ek = null == eR ? true : eR.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eF = (0, p.h)({
      location: "UserProfileModalV2"
    }),
    eV = i.useMemo(() => null != eh ? eh : (0, m.A)(), [eh]),
    eB = (0, et.A)({
      user: eo,
      currentUser: ed
    }),
    eW = (0, A.q)({
      userId: eo.id
    }),
    eK = (0, x.fi)(eo.id),
    ez = (0, P.A)(eo.id),
    eH = (0, T.A)(eo.id),
    eY = (0, u.GV)(),
    eJ = es.intl.format(es.t.KRe1Fk, {
      name: ew
    });
  return i.useEffect(() => {
    let e = () => {
      eP(true), setTimeout(() => {
        eP(false)
      }, 1e3)
    };
    return I._.subscribe(ei.jej.SHAKE_PROFILE_MODAL, e), () => {
      I._.unsubscribe(ei.jej.SHAKE_PROFILE_MODAL, e), (0, el.XA)(null)
    }
  }, []), (0, n.jsx)(c.f5, {
    value: eO,
    children: (0, n.jsx)(N.of, {
      value: eN,
      openedAt: eg,
      fetchStartedAt: null == eR ? true : eR.fetchStartedAt,
      fetchEndedAt: null == eR ? true : eR.fetchEndedAt,
      isLoaded: null == eR ? true : eR.isLoaded,
      children: (0, n.jsx)(C.Hl, {
        value: eC,
        children: (0, n.jsx)(S.N, {
          value: eA,
          children: (0, n.jsxs)(a.EOs, {
            "data-migration-pending": true,
            hideShadow: true,
            className: ea.zr,
            transitionState: ej,
            "aria-labelledby": eY,
            parentComponent: "UserProfileModalV2",
            children: [(0, n.jsxs)(a.bfh, {
              isShaking: eT,
              intensity: 1.4,
              children: [ey ? (0, n.jsxs)("div", {
                className: ea.sr,
                children: [(0, n.jsxs)(a.Heading, {
                  id: eY,
                  variant: "heading-sm/normal",
                  color: "text-strong",
                  children: [(0, n.jsx)(a.AC4, {
                    children: "".concat(es.intl.string(es.t.apVial), ": ").concat(eJ)
                  }), (0, n.jsx)("span", {
                    "aria-hidden": true,
                    children: es.intl.string(es.t.apVial)
                  })]
                }), (0, n.jsx)(a.Button, {
                  size: "sm",
                  variant: "secondary",
                  text: es.intl.string(es.t.ojM1xJ),
                  onClick: ev,
                  "aria-label": es.intl.string(es.t.cpT0Cq)
                })]
              }) : (0, n.jsx)(a.AC4, {
                children: (0, n.jsx)(a.H, {
                  id: eY,
                  children: eJ
                })
              }), (0, n.jsx)(a.Fmo, {
                children: (0, n.jsxs)(W.A, {
                  className: ey ? ea.r9 : true,
                  user: eo,
                  displayProfile: eR,
                  themeType: er.d.MODAL_V2,
                  children: [null != ek && (0, n.jsx)("div", {
                    className: ea.iL,
                    style: {
                      backgroundImage: "url(".concat(ek, ")")
                    }
                  }), null != eC.interactionType && (0, n.jsx)(r.animated.div, {
                    style: eL,
                    className: ea.tB
                  }), (0, n.jsx)(ee.A, {
                    onAutoHide: () => (0, el.XA)(null),
                    className: ea.oR
                  }), (0, n.jsxs)("div", {
                    className: ea.ME,
                    ref: (null == eR ? true : eR.profileEffect) != null ? eE : true,
                    children: [(0, n.jsxs)("div", {
                      className: ea.Nr,
                      children: [(0, n.jsx)(R.A, {
                        user: eo,
                        displayProfile: eR,
                        themeType: er.d.MODAL_V2
                      }), (0, n.jsx)(F.A, {
                        userId: eo.id,
                        onClose: ev,
                        className: ea.aX
                      }), (0, n.jsx)(L.A, {
                        user: eo,
                        displayProfile: eR,
                        guildId: ec,
                        channelId: eu,
                        themeType: er.d.MODAL_V2
                      }), (0, n.jsx)(z.A, {
                        user: eo,
                        guildId: ec,
                        channelId: eu,
                        themeType: er.d.MODAL_V2,
                        hasEntered: ej === a.ip4.ENTERED,
                        prompt: eF && eo.id === ed.id ? eV : null,
                        disableToolbar: ey
                      })]
                    }), (0, n.jsxs)(a.HOs, {
                      fade: true,
                      className: ea.kI,
                      children: [(0, n.jsx)(M.A, {
                        userId: eo.id
                      }), (0, n.jsx)(K.A, {
                        user: eo,
                        guildId: null != (l = null == eR ? true : eR.guildId) ? l : true,
                        onClose: ev,
                        nickname: y.Ay.useName(null == eR ? true : eR.guildId, eu, eo),
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: null == eR ? true : eR.pronouns,
                        tags: (0, n.jsx)(D.A, {
                          displayProfile: eR,
                          themeType: er.d.MODAL_V2,
                          onClose: ev
                        })
                      }), eG === ei.eA$.PENDING_INCOMING && (0, n.jsx)(W.A.Overlay, {
                        className: ea.uD,
                        children: (0, n.jsx)(k.A, {
                          user: eo,
                          applicationId: eM,
                          guildId: null != (t = null == eR ? true : eR.guildId) ? t : true,
                          channelId: eu,
                          className: ea.CK
                        })
                      }), eK.map(e => {
                        var l;
                        let {
                          applicationId: t
                        } = e;
                        return (0, n.jsx)(W.A.Overlay, {
                          className: ea.uD,
                          children: (0, n.jsx)(k.A, {
                            user: eo,
                            guildId: null != (l = null == eR ? true : eR.guildId) ? l : true,
                            channelId: eu,
                            isGameRelationship: true,
                            applicationId: t,
                            className: ea.CK
                          })
                        }, t)
                      }), eo.isProvisional && (0, n.jsx)(W.A.Overlay, {
                        className: ea.uD,
                        children: (0, n.jsx)($.A, {
                          heading: es.intl.string(es.t.Iyka0U),
                          headingVariant: "text-md/semibold",
                          headingIcon: (0, n.jsx)(a.EpV, {
                            size: "xs",
                            color: "currentColor"
                          }),
                          className: ea.CK,
                          children: (0, n.jsx)(h.T, {
                            userId: eo.id,
                            variant: "text-sm/normal"
                          })
                        })
                      }), eo.id === ed.id && (0, n.jsx)(G.A, {
                        isPremiumUser: (0, O.ki)(ed),
                        onInteraction: ev
                      }), (0, n.jsx)(B.A, {
                        user: eo,
                        className: ea.CK
                      }), (0, n.jsx)("div", {
                        className: ea.De,
                        children: (0, n.jsx)(J.A, {
                          user: eo,
                          currentUser: ed,
                          guildId: ec,
                          channelId: eu,
                          displayProfile: eR,
                          relationshipType: eG,
                          onClose: ev
                        })
                      }), (null == eR ? true : eR.bio) != null && (null == eR ? true : eR.bio) !== "" && !eU && (0, n.jsx)(w.A, {
                        userBio: eR.bio,
                        setLineClamp: false
                      }), eW.length > 0 && (0, n.jsx)($.A, {
                        heading: es.intl.string(es.t["Uv/eTx"]),
                        children: (0, n.jsx)(U.A, {
                          applicationIds: eW
                        })
                      }), (0, n.jsx)($.A, {
                        heading: es.intl.string(es.t.a6XYD9),
                        children: (0, n.jsx)(V.A, {
                          userId: eo.id,
                          guildId: null == eR ? true : eR.guildId,
                          tooltipDelay: en.In
                        })
                      }), (null == eR ? true : eR.guildId) != null && (0, n.jsx)(H.A, {
                        userId: eo.id,
                        guildId: eR.guildId,
                        className: ea.UO,
                        headingVariant: "text-xs/medium",
                        headingColor: "currentColor"
                      }), ez.length > 0 && (0, n.jsx)($.A, {
                        heading: es.intl.string(es.t["3fe7U5"]),
                        scrollTargetId: en.bk.CONNECTIONS,
                        children: (0, n.jsx)(X.A, {
                          connections: ez,
                          userId: eo.id,
                          className: ea.kG
                        })
                      }), eH.length > 0 && (0, n.jsx)($.A, {
                        heading: es.intl.string(es.t.PHjkRE),
                        scrollTargetId: en.bk.APPS,
                        children: (0, n.jsx)(Y.A, {
                          applicationRoleConnections: eH,
                          onClose: ev,
                          className: ea.kG
                        })
                      }), (0, n.jsx)(Q.A, {
                        userId: eo.id
                      })]
                    }), (null == eR ? true : eR.profileEffect) != null && (0, n.jsx)(j.A, {
                      skuId: null == eR ? true : eR.profileEffect.skuId,
                      isHovering: e_
                    })]
                  }), (0, n.jsx)(q.A, {
                    user: eo,
                    currentUser: ed,
                    displayProfile: eR,
                    guildId: ec,
                    channelId: eu,
                    items: eB,
                    initialSection: ex,
                    onClose: ev
                  })]
                })
              })]
            }), (0, n.jsx)(Z.A, {
              userId: eo.id,
              className: ea.Q0
            })]
          })
        })
      })
    })
  })
}