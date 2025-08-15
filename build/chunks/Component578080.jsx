/** Chunk was on 42521 **/
/** chunk id: 578080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk815061 = require("./815061.js"),
  Chunk442837 = require("./442837.js"),
  Chunk950104 = require("./950104.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk358085 = require("./358085.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk865364 = require("./865364.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk340100 = require("./340100.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70858 = require("./70858.js");

function D(e) {
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
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, y.O)({
    location: B.dr.QUESTS_BAR,
    autoTrackExposure: true
  }) ? (0, r.jsx)(d.zx, {
    className: Q.cta,
    style: t,
    color: d.zx.Colors.CUSTOM,
    fullWidth: true,
    onClick: n,
    size: d.zx.Sizes.NONE,
    children: I.intl.string(I.t.lwQdjI)
  }) : null
}
let L = Chunk647438.forwardRef(function(e, t) {
  var n, o;
  let {
    children: y,
    className: L,
    collapsedHeight: W,
    expansionSpring: Z,
    isExpanded: U,
    isExpansionAnimationComplete: H,
    onCtxMenuOpen: F,
    onCtxMenuClose: z,
    onCtxMenuSelect: X,
    quest: K,
    useReducedMotion: Y
  } = e, G = (0, l.e7)([v.Z], () => v.Z.isEnrolling(K.id), [K]), J = (0, h.aM)(), $ = (0, j.B6)(K.config.expiresAt), ee = S.r.build(K.config), et = (0, j.B6)(ee.rewardsExpireAt), en = s.useMemo(() => (0, O.fh)(K, O.eC.HERO), [K]), er = (0, R.tP)(ee.application.id), es = ee.features.has(B.S7.START_QUEST_CTA) ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST, eo = ee.features.has(B.S7.START_QUEST_CTA) ? I.intl.string(I.t.E80Bdn) : I.intl.string(I.t.l7E81t), ea = s.useCallback(() => {
    (0, _.AH)(K.id, {
      questContent: C.jn.QUEST_BAR,
      questContentCTA: es,
      sourceQuestContent: C.jn.QUEST_BAR
    }), ee.features.has(B.S7.START_QUEST_CTA) && (0, g.uL)(k.Z5c.ACTIVITY_DETAILS(q.In), true)
  }, [K, es, ee.features]), ei = (0, R.hf)({
    quest: K,
    questContent: C.jn.QUEST_BAR,
    sourceQuestContent: C.jn.QUEST_BAR
  }), el = s.useCallback(() => {
    (0, b.nc)(K, {
      content: C.jn.QUEST_BAR,
      ctaContent: x.jZ.OPEN_GAME_LINK,
      impressionId: J,
      sourceQuestContent: C.jn.QUEST_BAR
    })
  }, [J, K]), ec = ee.features.has(B.S7.POST_ENROLLMENT_CTA), eu = (0, j.Rf)(K), ed = (0, j.Jf)(K), ep = null != ed ? ed.progress > 0 : eu.progressSeconds > 0, em = (null == (n = K.userStatus) ? true : n.enrolledAt) != null, eg = (null == (o = K.userStatus) ? true : o.completedAt) != null, ef = s.useMemo(() => (0, b.Xv)(K.config), [K.config]), ex = U && H, eh = (0, E.DD)({
    quest: K,
    taskDetails: eu,
    location: B.dr.QUESTS_BAR,
    questContent: C.jn.QUEST_BAR,
    thirdPartyTaskDetails: null != ed ? ed : true,
    sourceQuestContent: C.jn.QUEST_BAR
  }), eb = (0, f.isWeb)(), e_ = s.useMemo(() => {
    let e = (0, u.Qg)(K.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: u.S3.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, c.r5)(e, .3),
      "--custom-cta-color-active": (0, c.r5)(e, .35)
    }
  }, [K.config.colors.primary]);
  return (0, r.jsxs)(i.animated.div, {
    className: a()(L, Q.contentExpanded, {
      [Q.contentInteractable]: ex
    }),
    style: {
      backgroundColor: K.config.colors.secondary,
      transform: eg ? true : (0, i.to)([Z.to({
        range: [0, 1],
        output: [0, false]
      }), Z.to({
        range: [0, 1],
        output: [0, W]
      })], (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"))
    },
    children: [y, (0, r.jsx)("div", {
      "aria-hidden": !ex,
      children: em ? (0, r.jsxs)("div", {
        className: Q.questAcceptedContent,
        ref: t,
        children: [(0, r.jsxs)("div", {
          className: Q.utils,
          children: [(0, r.jsxs)("div", {
            className: Q.questAcceptedContentHeading,
            children: [(0, r.jsx)(P.Z, {
              className: Q.questProgressRewardTile,
              learnMoreStyle: "icon",
              quest: K,
              questContent: C.jn.QUEST_BAR,
              location: B.dr.QUESTS_BAR,
              sourceQuestContent: C.jn.QUEST_BAR
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(p.X6q, {
                color: "always-white",
                variant: "heading-sm/semibold",
                children: (0, b.AV)({
                  quest: K,
                  taskDetails: eu,
                  thirdPartyTaskDetails: null != ed ? ed : true
                })
              }), (0, r.jsx)(p.Text, {
                className: Q.questAcceptedContentCopySubheading,
                color: "always-white",
                variant: "text-xxs/normal",
                children: eg ? I.intl.formatToPlainString(I.t.APddvL, {
                  expirationDate: et
                }) : I.intl.formatToPlainString(I.t["pX+fmp"], {
                  expirationDate: $
                })
              })]
            })]
          }), (0, r.jsx)(N.r, {
            onOpen: F,
            onClose: z,
            onSelect: X,
            questContent: C.jn.QUEST_BAR,
            quest: K,
            shouldShowDisclosure: false,
            showShareLink: true,
            sourceQuestContent: C.jn.QUEST_BAR,
            children: e => (0, r.jsx)(p.P3F, V(D({}, e), {
              className: Q.submenuWrapper,
              "aria-label": I.intl.string(I.t.DEoVWV),
              children: (0, r.jsx)(p.xhG, {
                size: "md",
                color: "currentColor",
                className: Q.submenuIcon
              })
            }))
          })]
        }), eg ? (0, r.jsx)(d.zx, {
          className: a()(Q.cta, Q.ctaClaimReward),
          style: ef ? e_ : true,
          color: d.zx.Colors.CUSTOM,
          fullWidth: true,
          onClick: ei,
          size: d.zx.Sizes.NONE,
          children: I.intl.string(I.t.cfY4PD)
        }) : (0, r.jsx)(p.Text, {
          className: Q.description,
          color: "always-white",
          variant: "text-xs/normal",
          children: eh
        }), (0, r.jsx)(T.Z, {
          quest: K
        }), !eb && !ep && !er && ec && (0, r.jsx)(M, {
          onClick: ex ? el : true
        })]
      }) : (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: Q.questPromoContent,
          ref: t,
          children: [(0, r.jsxs)("div", {
            className: Q.utils,
            children: [(0, r.jsx)(w.Z, {
              color: "always-white"
            }), (0, r.jsx)(N.r, {
              onOpen: F,
              onClose: z,
              onSelect: X,
              questContent: C.jn.QUEST_BAR,
              quest: K,
              shouldShowDisclosure: true,
              showShareLink: true,
              sourceQuestContent: C.jn.QUEST_BAR,
              children: e => (0, r.jsx)(p.P3F, V(D({}, e), {
                className: Q.submenuWrapper,
                "aria-label": I.intl.string(I.t.DEoVWV),
                children: (0, r.jsx)(p.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: Q.submenuIcon
                })
              }))
            })]
          }), (0, r.jsxs)("div", {
            className: Q.details,
            children: [(0, r.jsx)(P.Z, {
              className: Q.rewardTile,
              learnMoreStyle: "text",
              quest: K,
              questContent: C.jn.QUEST_BAR,
              location: B.dr.QUESTS_BAR,
              sourceQuestContent: C.jn.QUEST_BAR
            }), (0, r.jsx)(p.X6q, {
              className: Q.title,
              color: "always-white",
              variant: "heading-md/medium",
              children: I.intl.format(I.t.EQa7oq, {
                questName: K.config.messages.questName
              })
            }), (0, r.jsx)(p.Text, {
              className: Q.description,
              color: "always-white",
              variant: "text-sm/normal",
              children: eh
            })]
          }), (0, r.jsx)(d.zx, {
            className: Q.cta,
            style: "1232852290197655573" !== K.id ? e_ : true,
            color: d.zx.Colors.CUSTOM,
            fullWidth: true,
            onClick: ex ? ea : true,
            size: d.zx.Sizes.NONE,
            submitting: G,
            children: eo
          })]
        }), (0, r.jsx)("div", {
          className: Q.heroAssetWrapper,
          style: {
            color: K.config.colors.secondary
          },
          children: en.isAnimated ? (0, r.jsx)(A.Fl, {
            id: "QuestBarContentExpanded_heroAnimated",
            children: e => {
              var t;
              return (0, r.jsx)(m.Z, {
                ref: e,
                autoPlay: !Y,
                loop: true,
                muted: true,
                playsInline: true,
                className: Q.heroAsset,
                controls: false,
                children: (0, r.jsx)("source", {
                  src: en.url,
                  type: null != (t = en.mimetype) ? t : true
                })
              })
            }
          }) : (0, r.jsx)(A.Fl, {
            id: "QuestBarContentExpanded_heroStatic",
            children: e => (0, r.jsx)("img", {
              ref: e,
              alt: "",
              className: Q.heroAsset,
              src: en.url
            })
          })
        })]
      })
    })]
  })
})