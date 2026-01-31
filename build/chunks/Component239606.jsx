/** Chunk was on 63974 **/
/** chunk id: 239606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ea
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
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

function ea(e) {
  var t, n;
  let {
    user: ea,
    currentUser: ed,
    guildId: ec,
    channelId: eu,
    messageId: ep,
    roleId: ef,
    sessionId: em,
    initialTabSection: eA,
    initialScrollTarget: ex,
    transitionState: eg,
    customStatusPrompt: ej,
    openedAt: eh,
    onClose: eb,
    showGuildProfile: ev = true,
    sourceAnalyticsLocations: eI = [],
    disableActionsForPreview: ey = false
  } = e, {
    analyticsLocations: e_
  } = (0, c.Ay)([...eI, d.A.USER_PROFILE_MODAL_V2]), eO = (0, O.pb)({
    layout: "MODAL_V2",
    userId: ea.id,
    sourceSessionId: em,
    guildId: ec,
    channelId: eu,
    messageId: ep,
    roleId: ef,
    showGuildProfile: ev
  }), eN = i.useRef(null), eE = (0, p.M)(eN), [eP, eT] = i.useState(false), {
    defaultWishlistId: eC
  } = (0, s.cf)([N.A], () => ({
    defaultWishlistId: N.A.getFirstWishlistId(ea.id)
  }));
  (0, h.fw)({
    wishlistId: eC,
    userId: ea.id
  });
  let eS = (0, S.fC)(),
    eL = (0, o.zhh)({
      opacity: +(null != eS.interactionType),
      config: {
        duration: 150
      }
    }),
    eR = i.useMemo(() => null != ec ? {
      [ec]: [ea.id]
    } : {}, [ec, ea.id]);
  (0, a.E)(eR, "UserProfileModalV2");
  let eD = (0, E.Ay)(ea.id, ev ? ec : true),
    ew = y.Ay.useName(null == eD ? true : eD.guildId, eu, ea),
    {
      relationshipType: eM,
      originApplicationId: eG
    } = (0, s.cf)([b.A], () => ({
      relationshipType: b.A.getRelationshipType(ea.id),
      originApplicationId: b.A.getOriginApplicationId(ea.id)
    })),
    eU = (0, s.bG)([v.A], () => v.A.hidePersonalInformation),
    ek = null == eD ? true : eD.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eF = (0, f.h)({
      location: "UserProfileModalV2"
    }),
    eV = i.useMemo(() => null != ej ? ej : (0, m.A)(), [ej]),
    eB = (0, en.A)({
      user: ea,
      currentUser: ed
    }),
    eW = (0, x.q)({
      userId: ea.id
    }),
    eK = (0, A.fi)(ea.id),
    ez = (0, T.A)(ea.id),
    eH = (0, P.A)(ea.id),
    eY = (0, u.GV)(),
    eJ = es.intl.format(es.t.KRe1Fk, {
      name: ew
    });
  return i.useEffect(() => {
    let e = () => {
      eT(true), setTimeout(() => {
        eT(false)
      }, 1e3)
    };
    return I._.subscribe(ei.jej.SHAKE_PROFILE_MODAL, e), () => {
      I._.unsubscribe(ei.jej.SHAKE_PROFILE_MODAL, e), (0, et.XA)(null)
    }
  }, []), (0, l.jsx)(c.f5, {
    value: e_,
    children: (0, l.jsx)(O.of, {
      value: eO,
      openedAt: eh,
      fetchStartedAt: null == eD ? true : eD.fetchStartedAt,
      fetchEndedAt: null == eD ? true : eD.fetchEndedAt,
      isLoaded: null == eD ? true : eD.isLoaded,
      children: (0, l.jsx)(S.Hl, {
        value: eS,
        children: (0, l.jsx)(C.N, {
          value: ex,
          children: (0, l.jsxs)(o.EOs, {
            "data-migration-pending": true,
            hideShadow: true,
            className: eo.zr,
            transitionState: eg,
            "aria-labelledby": eY,
            parentComponent: "UserProfileModalV2",
            children: [(0, l.jsxs)(o.bfh, {
              isShaking: eP,
              intensity: 1.4,
              children: [ey ? (0, l.jsxs)("div", {
                className: eo.sr,
                children: [(0, l.jsxs)(o.Heading, {
                  id: eY,
                  variant: "heading-sm/normal",
                  color: "text-strong",
                  children: [(0, l.jsx)(o.AC4, {
                    children: "".concat(es.intl.string(es.t.apVial), ": ").concat(eJ)
                  }), (0, l.jsx)("span", {
                    "aria-hidden": true,
                    children: es.intl.string(es.t.apVial)
                  })]
                }), (0, l.jsx)(o.Button, {
                  size: "sm",
                  variant: "secondary",
                  text: es.intl.string(es.t.ojM1xJ),
                  onClick: eb,
                  "aria-label": es.intl.string(es.t.cpT0Cq)
                })]
              }) : (0, l.jsx)(o.AC4, {
                children: (0, l.jsx)(o.H, {
                  id: eY,
                  children: eJ
                })
              }), (0, l.jsx)(o.Fmo, {
                children: (0, l.jsxs)(W.A, {
                  className: ey ? eo.r9 : true,
                  user: ea,
                  displayProfile: eD,
                  themeType: er.d.MODAL_V2,
                  children: [null != ek && (0, l.jsx)("div", {
                    className: eo.iL,
                    style: {
                      backgroundImage: "url(".concat(ek, ")")
                    }
                  }), null != eS.interactionType && (0, l.jsx)(r.animated.div, {
                    style: eL,
                    className: eo.tB
                  }), (0, l.jsx)(ee.A, {
                    onAutoHide: () => (0, et.XA)(null),
                    className: eo.oR
                  }), (0, l.jsxs)("div", {
                    className: eo.ME,
                    ref: (null == eD ? true : eD.profileEffect) != null ? eN : true,
                    children: [(0, l.jsxs)("div", {
                      className: eo.Nr,
                      children: [(0, l.jsx)(D.A, {
                        user: ea,
                        displayProfile: eD,
                        themeType: er.d.MODAL_V2
                      }), (0, l.jsx)(F.A, {
                        userId: ea.id,
                        onClose: eb,
                        className: eo.aX
                      }), (0, l.jsx)(L.A, {
                        user: ea,
                        displayProfile: eD,
                        guildId: ec,
                        channelId: eu,
                        themeType: er.d.MODAL_V2
                      }), (0, l.jsx)(z.A, {
                        user: ea,
                        guildId: ec,
                        channelId: eu,
                        themeType: er.d.MODAL_V2,
                        hasEntered: eg === o.ip4.ENTERED,
                        prompt: eF && ea.id === ed.id ? eV : null,
                        disableToolbar: ey
                      })]
                    }), (0, l.jsxs)(o.HOs, {
                      fade: true,
                      className: eo.kI,
                      children: [(0, l.jsx)(G.A, {
                        userId: ea.id
                      }), (0, l.jsx)(K.A, {
                        user: ea,
                        guildId: null != (t = null == eD ? true : eD.guildId) ? t : true,
                        onClose: eb,
                        nickname: y.Ay.useName(null == eD ? true : eD.guildId, eu, ea),
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: null == eD ? true : eD.pronouns,
                        tags: (0, l.jsx)(R.A, {
                          displayProfile: eD,
                          themeType: er.d.MODAL_V2,
                          onClose: eb
                        })
                      }), eM === ei.eA$.PENDING_INCOMING && (0, l.jsx)(W.A.Overlay, {
                        className: eo.uD,
                        children: (0, l.jsx)(k.A, {
                          user: ea,
                          applicationId: eG,
                          guildId: null != (n = null == eD ? true : eD.guildId) ? n : true,
                          channelId: eu,
                          className: eo.CK
                        })
                      }), eK.map(e => {
                        var t;
                        let {
                          applicationId: n
                        } = e;
                        return (0, l.jsx)(W.A.Overlay, {
                          className: eo.uD,
                          children: (0, l.jsx)(k.A, {
                            user: ea,
                            guildId: null != (t = null == eD ? true : eD.guildId) ? t : true,
                            channelId: eu,
                            isGameRelationship: true,
                            applicationId: n,
                            className: eo.CK
                          })
                        }, n)
                      }), ea.isProvisional && (0, l.jsx)(W.A.Overlay, {
                        className: eo.uD,
                        children: (0, l.jsx)(Z.A, {
                          heading: es.intl.string(es.t.Iyka0U),
                          headingVariant: "text-md/semibold",
                          headingIcon: (0, l.jsx)(o.EpV, {
                            size: "xs",
                            color: "currentColor"
                          }),
                          className: eo.CK,
                          children: (0, l.jsx)(j.T, {
                            userId: ea.id,
                            variant: "text-sm/normal"
                          })
                        })
                      }), ea.id === ed.id && (0, l.jsx)(M.A, {
                        isPremiumUser: (0, _.ki)(ed),
                        onInteraction: eb
                      }), (0, l.jsx)(B.A, {
                        user: ea,
                        className: eo.CK
                      }), (0, l.jsx)("div", {
                        className: eo.De,
                        children: (0, l.jsx)(J.A, {
                          user: ea,
                          currentUser: ed,
                          guildId: ec,
                          channelId: eu,
                          displayProfile: eD,
                          relationshipType: eM,
                          onClose: eb
                        })
                      }), (null == eD ? true : eD.bio) != null && (null == eD ? true : eD.bio) !== "" && !eU && (0, l.jsx)(w.A, {
                        userBio: eD.bio,
                        setLineClamp: false
                      }), eW.length > 0 && (0, l.jsx)(Z.A, {
                        heading: es.intl.string(es.t["Uv/eTx"]),
                        children: (0, l.jsx)(U.A, {
                          applicationIds: eW
                        })
                      }), (0, l.jsx)(Z.A, {
                        heading: es.intl.string(es.t.a6XYD9),
                        children: (0, l.jsx)(V.A, {
                          userId: ea.id,
                          guildId: null == eD ? true : eD.guildId,
                          tooltipDelay: el.In
                        })
                      }), (null == eD ? true : eD.guildId) != null && (0, l.jsx)(H.A, {
                        userId: ea.id,
                        guildId: eD.guildId,
                        className: eo.UO,
                        headingVariant: "text-xs/medium",
                        headingColor: "currentColor"
                      }), ez.length > 0 && (0, l.jsx)(Z.A, {
                        heading: es.intl.string(es.t["3fe7U5"]),
                        scrollTargetId: el.bk.CONNECTIONS,
                        children: (0, l.jsx)(X.A, {
                          connections: ez,
                          userId: ea.id,
                          className: eo.kG
                        })
                      }), eH.length > 0 && (0, l.jsx)(Z.A, {
                        heading: es.intl.string(es.t.PHjkRE),
                        scrollTargetId: el.bk.APPS,
                        children: (0, l.jsx)(Y.A, {
                          applicationRoleConnections: eH,
                          onClose: eb,
                          className: eo.kG
                        })
                      }), (0, l.jsx)($.A, {
                        userId: ea.id
                      })]
                    }), (null == eD ? true : eD.profileEffect) != null && (0, l.jsx)(g.A, {
                      skuId: null == eD ? true : eD.profileEffect.skuId,
                      isHovering: eE
                    })]
                  }), (0, l.jsx)(q.A, {
                    user: ea,
                    currentUser: ed,
                    displayProfile: eD,
                    guildId: ec,
                    channelId: eu,
                    items: eB,
                    initialSection: eA,
                    onClose: eb
                  })]
                })
              })]
            }), (0, l.jsx)(Q.A, {
              userId: ea.id,
              className: eo.Q0
            })]
          })
        })
      })
    })
  })
}