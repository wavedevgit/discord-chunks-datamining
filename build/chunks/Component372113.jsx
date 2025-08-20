/** Chunk was on 37447 **/
/** chunk id: 372113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk706454 = require("./706454.js"),
  Chunk63063 = require("./63063.js"),
  Chunk930153 = require("./930153.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk373370 = require("./373370.js"),
  Chunk566078 = require("./566078.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk87894 = require("./87894.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997267 = require("./997267.js");

function P(e) {
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

function w(e, t) {
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

function _(e) {
  let {
    containerSize: t,
    onClick: n,
    text: o,
    tabIndex: s
  } = e;
  return "xs" === t ? (0, r.jsx)(u.P3F, {
    tabIndex: s,
    className: T.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: o
    })
  }) : (0, r.jsx)(u.zxk, {
    fullWidth: true,
    tabIndex: s,
    variant: "secondary",
    onClick: n,
    text: o
  })
}

function M(e) {
  let {
    quest: t,
    progressState: n,
    isCollectibleQuest: o,
    questContent: s,
    questContentPosition: i,
    sourceQuestContent: d
  } = e, m = n >= x.OH.COMPLETED, p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), h = (0, a.e7)([C.Z], () => C.Z.isEnrolling(t.id)), j = (0, g.q8)(t), f = (0, g.Vl)(t), b = (0, O.Ks)({
    progressState: n,
    quest: t,
    questContent: s,
    isCollectibleQuest: o,
    questContentPosition: i,
    inGiftInventory: false,
    isVideoQuest: j,
    inGameQuest: f,
    sourceQuestContent: d
  });
  return (0, r.jsx)(u.ua7, {
    text: b.tooltipText,
    tooltipContentClassName: T.ctaTooltipText,
    children: e => {
      var t, n;
      return m && !p ? (0, r.jsx)(u.gtL, w(P({}, e), {
        wrapperClassName: T.ctaButtonWrapper,
        color: l.Tt.BRAND,
        disabled: null == b.onClick,
        onClick: null != (t = b.onClick) ? t : true,
        children: b.text
      })) : (0, r.jsx)(u.zxk, w(P({}, e), {
        fullWidth: true,
        variant: "primary",
        disabled: null == b.onClick,
        loading: h,
        onClick: null != (n = b.onClick) ? n : true,
        text: b.text
      }))
    }
  }, b.tooltipText)
}
let R = e => {
  var t;
  let {
    quest: n,
    location: s,
    size: l,
    isFocused: c,
    isQuestExpired: O,
    isExpanded: R,
    isAnimating: k,
    contentPosition: D,
    sourceQuestContent: Q
  } = e, L = (0, x._Q)(n), A = (0, x.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), I = L >= x.OH.ACCEPTED, Z = L >= x.OH.COMPLETED, U = (0, g.Xv)(n.config), B = R || k, W = (0, x.t5)(n, q.dr.QUESTS_CARD, s, Q), G = (0, h.O5)(), F = o.useMemo(() => b.r.build(n.config), [n.config]), H = (0, x.Rf)(n), z = (0, f.DD)({
    quest: n,
    taskDetails: H,
    location: q.dr.QUESTS_CARD,
    questContent: j.jn.QUESTS_EMBED,
    sourceQuestContent: Q
  }), X = (0, a.e7)([C.Z], () => null != C.Z.questEnrollmentBlockedUntil, []), V = (0, a.e7)([d.default], () => d.default.locale), Y = O && !Z;
  return (0, r.jsx)("div", {
    className: T.root,
    children: (0, r.jsxs)("div", {
      className: i()(T.outerContainer, {
        [T.outerContainerSm]: "sm" === l,
        [T.outerContainerXs]: "xs" === l
      }),
      style: {
        visibility: B ? "inherit" : "hidden"
      },
      "aria-hidden": !B,
      children: [(0, r.jsx)(u.ua7, {
        text: Y ? S.intl.string(S.t["04MTGR"]) : null,
        tooltipContentClassName: T.rewardTileExpirationTooltip,
        shouldShow: Y,
        children: e => (0, r.jsxs)("div", w(P({
          className: T.rewardTileWrapper
        }, e), {
          children: [O && (0, r.jsx)("div", {
            className: T.rewardTileExpired,
            children: (0, r.jsx)(u.Mgn, {
              color: u.TVs.colors.WHITE
            })
          }), (0, r.jsx)(y.Z, {
            autoplay: c,
            className: i()({
              [T.questRewardEmbed]: "lg" === l,
              [T.questRewardEmbedSm]: "sm" === l,
              [T.questRewardEmbedXs]: "xs" === l
            }),
            learnMoreStyle: "text",
            location: q.dr.QUESTS_CARD,
            quest: n,
            questContent: s,
            questContentPosition: D,
            sourceQuestContent: Q
          })]
        }))
      }), (0, r.jsxs)("div", {
        className: T.taskDetails,
        children: [(0, r.jsx)(u.Text, {
          variant: (0, E.uq)(s) && !I && "lg" === l ? "text-lg/medium" : "lg" === l ? "text-md/medium" : "sm" === l ? "text-sm/medium" : "text-xs/medium",
          className: T.taskInstructions,
          children: O ? S.intl.formatToPlainString(S.t["ge+AJi"], {
            questName: n.config.messages.questName
          }) : W
        }), (0, r.jsx)(u.Text, {
          variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: function(e) {
            var t, n, r, o, s;
            let {
              quest: i,
              locale: a,
              isQuestExpired: l,
              sharedQuestFields: u,
              collectibleQuestRewardDescription: c,
              formattedCompletionDate: d
            } = e, h = (null == (t = i.userStatus) ? true : t.completedAt) != null, x = h && (null == (n = i.userStatus) ? true : n.claimedAt) != null, C = (0, g.oo)({
              quest: i
            }), j = u.defaultRewardNameWithArticle;
            if (x) {
              let e = C ? (0, g.o9)({
                  quest: i,
                  idx: null == (r = i.userStatus) ? true : r.claimedTier
                }) : null,
                t = null != (o = null == e ? true : e.messages.nameWithArticle) ? o : null;
              return null != t ? S.intl.formatToPlainString(S.t.RrxtPT, {
                reward: t,
                date: d
              }) : S.intl.formatToPlainString(S.t.zNoqRU, {
                reward: j,
                date: d
              })
            }
            if (h) return C ? S.intl.formatToPlainString(S.t.l1jCMz, {
              date: d
            }) : S.intl.formatToPlainString(S.t.zNoqRU, {
              reward: j,
              date: d
            });
            let f = C ? (0, g.o9)({
              quest: i,
              idx: 0
            }) : null;
            return l ? S.intl.formatToPlainString(S.t.DT3aub, {
              reward: null != (s = null == f ? true : f.messages.nameWithArticle) ? s : j
            }) : null != f && null != f.approximateCount ? S.intl.format(S.t["4bMK19"], {
              maxReward: f.messages.nameWithArticle,
              maxRewardCount: (0, p.Bs)(f.approximateCount, a),
              helpCenterLink: m.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE)
            }) : c
          }({
            quest: n,
            locale: V,
            isQuestExpired: O,
            sharedQuestFields: F,
            collectibleQuestRewardDescription: z,
            formattedCompletionDate: A
          })
        })]
      }), X ? (0, r.jsxs)(u.hE2, {
        direction: "horizontal",
        align: "center",
        fullWidth: true,
        className: i()({
          [T.removeStackWidth]: "lg" === l
        }),
        children: [(0, r.jsx)(u.zxk, {
          variant: "secondary",
          disabled: true,
          text: S.intl.string(S.t.V293qq)
        }), (0, r.jsx)(u.zxk, {
          variant: "primary",
          onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(n, s, Q),
          text: S.intl.string(S.t.vY9GgI)
        })]
      }) : (0, r.jsxs)(u.hE2, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: true,
        className: i()({
          [T.removeStackWidth]: "lg" === l
        }),
        children: [(0, r.jsx)(_, {
          containerSize: l,
          onClick: () => {
            (0, v.navigateToQuestHome)({
              fromContent: s,
              questId: n.id
            }), G({
              questId: n.id,
              questContent: s,
              questContentPosition: D,
              questContentCTA: h.jZ.LEARN_MORE,
              sourceQuestContent: Q
            })
          },
          text: S.intl.string(S.t.LLLLPD)
        }), !Y && (0, r.jsx)(M, {
          quest: n,
          progressState: L,
          isCollectibleQuest: U,
          questContent: s,
          sourceQuestContent: Q
        })]
      })]
    })
  })
}