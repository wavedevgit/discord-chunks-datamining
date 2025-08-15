/** Chunk was on 37447 **/
/** chunk id: 372113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk340100 = require("./340100.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk128535 = require("./128535.jsx"),
  Chunk87894 = require("./87894.js"),
  Chunk2660 = require("./2660.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997267 = require("./997267.js");

function _(e) {
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

function I(e, t) {
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
    containerSize: t,
    onClick: n,
    children: s,
    tabIndex: o
  } = e;
  return "xs" === t ? (0, r.jsx)(c.P3F, {
    tabIndex: o,
    className: R.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: s
    })
  }) : (0, r.jsx)(l.zx, {
    tabIndex: o,
    wrapperClassName: R.ctaButtonWrapper,
    color: l.Tt.PRIMARY,
    onClick: n,
    children: s
  })
}

function D(e) {
  let {
    quest: t,
    progressState: n,
    isCollectibleQuest: s,
    questContent: o,
    questContentPosition: i,
    inGiftInventory: d,
    sourceQuestContent: m
  } = e, p = n >= x.OH.COMPLETED, g = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), C = (0, a.e7)([j.Z], () => j.Z.isEnrolling(t.id)), f = (0, h.q8)(t), b = (0, h.Vl)(t), v = (0, N.Ks)({
    progressState: n,
    quest: t,
    questContent: o,
    isCollectibleQuest: s,
    questContentPosition: i,
    inGiftInventory: d,
    isVideoQuest: f,
    inGameQuest: b,
    sourceQuestContent: m
  }), y = p && !g ? c.gtL : l.zx;
  return (0, r.jsx)(c.ua7, {
    text: v.tooltipText,
    tooltipContentClassName: R.ctaTooltipText,
    children: e => {
      var t;
      return (0, r.jsx)(y, I(_({}, e), {
        wrapperClassName: R.ctaButtonWrapper,
        color: l.Tt.BRAND,
        disabled: null == v.onClick,
        submitting: C,
        onClick: null != (t = v.onClick) ? t : () => {},
        children: (0, r.jsx)("div", {
          className: R.ctaButtonInner,
          children: v.text
        })
      }))
    }
  }, v.tooltipText)
}
let A = e => {
  var t;
  let {
    quest: n,
    location: o,
    size: u,
    isFocused: N,
    isQuestExpired: A,
    isExpanded: Q,
    isAnimating: Z,
    contentPosition: L,
    sourceQuestContent: B
  } = e, k = (0, x._Q)(n), U = (0, x.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), G = k >= x.OH.ACCEPTED, W = k >= x.OH.COMPLETED, F = k >= x.OH.CLAIMED, z = (0, h.Xv)(n.config), X = (0, T.uq)(o), H = o === C.jn.QUESTS_EMBED, Y = Q || Z, V = G && !F && X, J = (0, x.t5)(n, S.dr.QUESTS_CARD, o, B), {
    xboxAndPlaystationAccounts: K
  } = (0, x.z6)(), $ = (0, g.O5)(), ee = s.useMemo(() => b.r.build(n.config), [n.config]), et = (0, x.Rf)(n), en = (0, f.DD)({
    quest: n,
    taskDetails: et,
    location: S.dr.QUESTS_CARD,
    questContent: C.jn.QUESTS_EMBED,
    sourceQuestContent: B
  }), er = (0, a.e7)([j.Z], () => null != j.Z.questEnrollmentBlockedUntil, []), es = (0, a.e7)([d.default], () => d.default.locale), eo = (0, x.z)(n), ei = X && z, ea = A && !W, el = K.length > 0 && X && (0, h.$J)(n) && G && !W && !eo, ec = (0, r.jsx)(y.Z, {
    autoplay: N,
    className: i()(R.gridImg, {
      [R.questRewardGiftInventory]: X && "lg" === u,
      [R.questRewardEmbed]: H && "lg" === u,
      [R.questRewardEmbedSm]: "sm" === u,
      [R.questRewardEmbedXs]: "xs" === u
    }),
    learnMoreStyle: X ? null : "text",
    location: S.dr.QUESTS_CARD,
    quest: n,
    questContent: o,
    questContentPosition: L,
    sourceQuestContent: B
  });
  return (0, r.jsxs)("div", {
    className: R.root,
    children: [(0, r.jsxs)("div", {
      className: i()(R.outerContainer, {
        [R.outerContainerSm]: "sm" === u,
        [R.outerContainerXs]: "xs" === u,
        [R.outerContainerNoProgress]: !V
      }),
      style: {
        visibility: Y ? "inherit" : "hidden"
      },
      "aria-hidden": !Y,
      children: [(0, r.jsx)(c.ua7, {
        text: ea ? w.intl.string(w.t["04MTGR"]) : null,
        tooltipContentClassName: R.rewardTileExpirationTooltip,
        shouldShow: ea,
        children: e => (0, r.jsxs)("div", I(_({
          className: R.rewardTileWrapper
        }, e), {
          children: [A && (0, r.jsx)("div", {
            className: R.rewardTileExpired,
            children: (0, r.jsx)(c.Mgn, {
              color: c.TVs.colors.WHITE
            })
          }), ei ? (0, r.jsx)(q.Z, {
            questConfig: n.config,
            fallback: ec,
            isFocused: N
          }) : ec]
        }))
      }), (0, r.jsxs)("div", {
        className: i()(R.gridText, R.taskDetails),
        children: [(0, r.jsx)(c.Text, {
          variant: (0, T.uq)(o) && !G && "lg" === u ? "text-lg/medium" : "lg" === u ? "text-md/medium" : "sm" === u ? "text-sm/medium" : "text-xs/medium",
          className: R.taskInstructions,
          children: A ? w.intl.formatToPlainString(w.t["ge+AJi"], {
            questName: n.config.messages.questName
          }) : J
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: function(e) {
            var t, n, r, s, o;
            let {
              quest: i,
              locale: a,
              isQuestExpired: l,
              sharedQuestFields: c,
              collectibleQuestRewardDescription: u,
              formattedCompletionDate: d
            } = e, g = (null == (t = i.userStatus) ? true : t.completedAt) != null, x = g && (null == (n = i.userStatus) ? true : n.claimedAt) != null, j = (0, h.oo)({
              quest: i
            }), C = c.defaultRewardNameWithArticle;
            if (x) {
              let e = j ? (0, h.o9)({
                  quest: i,
                  idx: null == (r = i.userStatus) ? true : r.claimedTier
                }) : null,
                t = null != (s = null == e ? true : e.messages.nameWithArticle) ? s : null;
              return null != t ? w.intl.formatToPlainString(w.t.RrxtPT, {
                reward: t,
                date: d
              }) : w.intl.formatToPlainString(w.t.zNoqRU, {
                reward: C,
                date: d
              })
            }
            if (g) return j ? w.intl.formatToPlainString(w.t.l1jCMz, {
              date: d
            }) : w.intl.formatToPlainString(w.t.zNoqRU, {
              reward: C,
              date: d
            });
            let f = j ? (0, h.o9)({
              quest: i,
              idx: 0
            }) : null;
            return l ? w.intl.formatToPlainString(w.t.DT3aub, {
              reward: null != (o = null == f ? true : f.messages.nameWithArticle) ? o : C
            }) : null != f && null != f.approximateCount ? w.intl.format(w.t["4bMK19"], {
              maxReward: f.messages.nameWithArticle,
              maxRewardCount: (0, p.Bs)(f.approximateCount, a),
              helpCenterLink: m.Z.getArticleURL(P.BhN.QUESTS_LEARN_MORE)
            }) : u
          }({
            quest: n,
            locale: es,
            isQuestExpired: A,
            sharedQuestFields: ee,
            collectibleQuestRewardDescription: en,
            formattedCompletionDate: U
          })
        })]
      }), er ? (0, r.jsxs)("div", {
        className: i()(R.ctaButtonContainer, R.gridCtaButtons),
        children: [(0, r.jsx)(l.zx, {
          color: l.Tt.PRIMARY,
          disabled: true,
          className: R.questEnrollmentBlockedButton,
          children: w.intl.string(w.t.V293qq)
        }), (0, r.jsx)(l.zx, {
          color: l.Tt.BRAND,
          onClick: () => (0, O.openQuestMinorEnrollmentBlockModal)(n, o, B),
          className: R.questEnrollmentBlockedButton,
          children: w.intl.string(w.t.vY9GgI)
        })]
      }) : (0, r.jsxs)("div", {
        className: i()(R.ctaButtonContainer, R.gridCtaButtons),
        children: [!X && (0, r.jsx)(M, {
          containerSize: u,
          onClick: () => {
            (0, O.navigateToQuestHome)({
              fromContent: o,
              questId: n.id
            }), $({
              questId: n.id,
              questContent: o,
              questContentPosition: L,
              questContentCTA: g.jZ.LEARN_MORE,
              sourceQuestContent: B
            })
          },
          children: w.intl.string(w.t.LLLLPD)
        }), A && !W ? null : (0, r.jsx)(D, {
          quest: n,
          progressState: k,
          isCollectibleQuest: z,
          questContent: o,
          inGiftInventory: X,
          sourceQuestContent: B
        })]
      }), V && (0, r.jsx)(v.Z, {
        className: R.gridProgressBar,
        color: W ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE : c.TVs.colors.BG_BRAND,
        quest: n,
        isInventory: X
      })]
    }), el && (0, r.jsxs)("div", {
      className: R.microphoneContainer,
      children: [(0, r.jsx)("div", {
        className: R.separator
      }), (0, r.jsx)(E.Z, {
        quest: n,
        location: o,
        sourceQuestContent: B
      })]
    })]
  })
}