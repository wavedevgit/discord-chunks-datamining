/** Chunk was on 37447 **/
/** chunk id: 372113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
      s = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), s.forEach(function(t) {
      var s;
      s = n[t], t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = s
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      n.push.apply(n, s)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  let {
    containerSize: t,
    onClick: n,
    children: o,
    tabIndex: r
  } = e;
  return "xs" === t ? (0, s.jsx)(u.P3F, {
    tabIndex: r,
    className: S.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: o
    })
  }) : (0, s.jsx)(l.zx, {
    tabIndex: r,
    wrapperClassName: S.ctaButtonWrapper,
    color: l.Tt.PRIMARY,
    onClick: n,
    children: o
  })
}

function M(e) {
  let {
    quest: t,
    progressState: n,
    isCollectibleQuest: o,
    questContent: r,
    questContentPosition: i,
    sourceQuestContent: d
  } = e, m = n >= x.OH.COMPLETED, p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), h = (0, a.e7)([C.Z], () => C.Z.isEnrolling(t.id)), j = (0, g.q8)(t), f = (0, g.Vl)(t), b = (0, N.Ks)({
    progressState: n,
    quest: t,
    questContent: r,
    isCollectibleQuest: o,
    questContentPosition: i,
    inGiftInventory: false,
    isVideoQuest: j,
    inGameQuest: f,
    sourceQuestContent: d
  }), y = m && !p ? u.gtL : l.zx;
  return (0, s.jsx)(u.ua7, {
    text: b.tooltipText,
    tooltipContentClassName: S.ctaTooltipText,
    children: e => {
      var t;
      return (0, s.jsx)(y, w(P({}, e), {
        wrapperClassName: S.ctaButtonWrapper,
        color: l.Tt.BRAND,
        disabled: null == b.onClick,
        submitting: h,
        onClick: null != (t = b.onClick) ? t : () => {},
        children: (0, s.jsx)("div", {
          className: S.ctaButtonInner,
          children: b.text
        })
      }))
    }
  }, b.tooltipText)
}
let _ = e => {
  var t;
  let {
    quest: n,
    location: r,
    size: c,
    isFocused: N,
    isQuestExpired: _,
    isExpanded: D,
    isAnimating: Q,
    contentPosition: A,
    sourceQuestContent: L
  } = e, B = (0, x._Q)(n), k = (0, x.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), I = B >= x.OH.ACCEPTED, Z = B >= x.OH.COMPLETED, U = (0, g.Xv)(n.config), W = D || Q, G = (0, x.t5)(n, q.dr.QUESTS_CARD, r, L), F = (0, h.O5)(), H = o.useMemo(() => b.r.build(n.config), [n.config]), X = (0, x.Rf)(n), Y = (0, f.DD)({
    quest: n,
    taskDetails: X,
    location: q.dr.QUESTS_CARD,
    questContent: j.jn.QUESTS_EMBED,
    sourceQuestContent: L
  }), z = (0, a.e7)([C.Z], () => null != C.Z.questEnrollmentBlockedUntil, []), V = (0, a.e7)([d.default], () => d.default.locale), J = _ && !Z;
  return (0, s.jsx)("div", {
    className: S.root,
    children: (0, s.jsxs)("div", {
      className: i()(S.outerContainer, {
        [S.outerContainerSm]: "sm" === c,
        [S.outerContainerXs]: "xs" === c
      }),
      style: {
        visibility: W ? "inherit" : "hidden"
      },
      "aria-hidden": !W,
      children: [(0, s.jsx)(u.ua7, {
        text: J ? T.intl.string(T.t["04MTGR"]) : null,
        tooltipContentClassName: S.rewardTileExpirationTooltip,
        shouldShow: J,
        children: e => (0, s.jsxs)("div", w(P({
          className: S.rewardTileWrapper
        }, e), {
          children: [_ && (0, s.jsx)("div", {
            className: S.rewardTileExpired,
            children: (0, s.jsx)(u.Mgn, {
              color: u.TVs.colors.WHITE
            })
          }), (0, s.jsx)(y.Z, {
            autoplay: N,
            className: i()(S.gridImg, {
              [S.questRewardEmbed]: "lg" === c,
              [S.questRewardEmbedSm]: "sm" === c,
              [S.questRewardEmbedXs]: "xs" === c
            }),
            learnMoreStyle: "text",
            location: q.dr.QUESTS_CARD,
            quest: n,
            questContent: r,
            questContentPosition: A,
            sourceQuestContent: L
          })]
        }))
      }), (0, s.jsxs)("div", {
        className: i()(S.gridText, S.taskDetails),
        children: [(0, s.jsx)(u.Text, {
          variant: (0, O.uq)(r) && !I && "lg" === c ? "text-lg/medium" : "lg" === c ? "text-md/medium" : "sm" === c ? "text-sm/medium" : "text-xs/medium",
          className: S.taskInstructions,
          children: _ ? T.intl.formatToPlainString(T.t["ge+AJi"], {
            questName: n.config.messages.questName
          }) : G
        }), (0, s.jsx)(u.Text, {
          variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: function(e) {
            var t, n, s, o, r;
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
                  idx: null == (s = i.userStatus) ? true : s.claimedTier
                }) : null,
                t = null != (o = null == e ? true : e.messages.nameWithArticle) ? o : null;
              return null != t ? T.intl.formatToPlainString(T.t.RrxtPT, {
                reward: t,
                date: d
              }) : T.intl.formatToPlainString(T.t.zNoqRU, {
                reward: j,
                date: d
              })
            }
            if (h) return C ? T.intl.formatToPlainString(T.t.l1jCMz, {
              date: d
            }) : T.intl.formatToPlainString(T.t.zNoqRU, {
              reward: j,
              date: d
            });
            let f = C ? (0, g.o9)({
              quest: i,
              idx: 0
            }) : null;
            return l ? T.intl.formatToPlainString(T.t.DT3aub, {
              reward: null != (r = null == f ? true : f.messages.nameWithArticle) ? r : j
            }) : null != f && null != f.approximateCount ? T.intl.format(T.t["4bMK19"], {
              maxReward: f.messages.nameWithArticle,
              maxRewardCount: (0, p.Bs)(f.approximateCount, a),
              helpCenterLink: m.Z.getArticleURL(E.BhN.QUESTS_LEARN_MORE)
            }) : c
          }({
            quest: n,
            locale: V,
            isQuestExpired: _,
            sharedQuestFields: H,
            collectibleQuestRewardDescription: Y,
            formattedCompletionDate: k
          })
        })]
      }), z ? (0, s.jsxs)("div", {
        className: i()(S.ctaButtonContainer, S.gridCtaButtons),
        children: [(0, s.jsx)(l.zx, {
          color: l.Tt.PRIMARY,
          disabled: true,
          className: S.questEnrollmentBlockedButton,
          children: T.intl.string(T.t.V293qq)
        }), (0, s.jsx)(l.zx, {
          color: l.Tt.BRAND,
          onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(n, r, L),
          className: S.questEnrollmentBlockedButton,
          children: T.intl.string(T.t.vY9GgI)
        })]
      }) : (0, s.jsxs)("div", {
        className: i()(S.ctaButtonContainer, S.gridCtaButtons),
        children: [(0, s.jsx)(R, {
          containerSize: c,
          onClick: () => {
            (0, v.navigateToQuestHome)({
              fromContent: r,
              questId: n.id
            }), F({
              questId: n.id,
              questContent: r,
              questContentPosition: A,
              questContentCTA: h.jZ.LEARN_MORE,
              sourceQuestContent: L
            })
          },
          children: T.intl.string(T.t.LLLLPD)
        }), _ && !Z ? null : (0, s.jsx)(M, {
          quest: n,
          progressState: B,
          isCollectibleQuest: U,
          questContent: r,
          sourceQuestContent: L
        })]
      })]
    })
  })
}