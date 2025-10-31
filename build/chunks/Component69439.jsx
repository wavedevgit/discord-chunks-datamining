/** Chunk was on 34297 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk823379 = require("./823379.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk373370 = require("./373370.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk924304 = require("./924304.js");
let C = [{
  value: Chunk46140.cd.DESKTOP,
  get label() {
    return Chunk388032.intl.string(Chunk388032.t["QXc01+"])
  }
}, {
  value: Chunk46140.cd.CONSOLE,
  get label() {
    return Chunk388032.intl.string(Chunk388032.t["8lAfuB"])
  }
}];

function y(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case b.cd.DESKTOP:
      n = (0, r.jsx)(l.pzj, {}), t = j.intl.string(j.t["QXc01+"]);
      break;
    case b.cd.CONSOLE:
      n = (0, r.jsx)(l.iWm, {}), t = j.intl.string(j.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, r.jsxs)("div", {
    className: v.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function E(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case b.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: v.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.pzj, {}), j.intl.string(j.t.g6Dr44)]
      });
    case b.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: v.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.iWm, {}), j.intl.string(j.t.iyNbj5)]
      });
    default:
      return (0, d.vE)(e[0].value)
  }
}

function O(e) {
  var t, n, O, S;
  let {
    quest: T,
    questContent: w,
    onReceiveErrorHints: P,
    contentPosition: N,
    rowIndex: R,
    sourceQuestContent: A
  } = e, B = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), k = (0, _.g2)({
    useReducedMotion: B
  }), I = (0, u.O5)(), D = (0, m._s)({
    quest: T
  }), q = (0, m.z)(T), L = (0, m.B6)(T.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: Q,
    isEnrolling: V,
    isQuestEnrollmentBlocked: M
  } = (0, a.cj)([g.Z], () => ({
    isClaiming: g.Z.isClaimingReward(T.id) || g.Z.isFetchingRewardCode(T.id),
    isEnrolling: g.Z.isEnrolling(T.id),
    isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil
  })), Z = (null == (t = T.userStatus) ? true : t.enrolledAt) != null, W = (null == (n = T.userStatus) ? true : n.completedAt) != null, H = W && (null == (O = T.userStatus) ? true : O.claimedAt) == null, U = (0, p.iQ)(T), F = !(0, p.zi)(T), z = (0, m._Q)(T), K = (0, p.Xv)(T.config), G = (0, p.PB)(T), X = (0, p.HJ)(T), Y = (0, p.Vl)(T), J = (0, m.Rf)(T), [$, ee, et] = (0, m.me)(T, J), en = F && z === m.OH.ACCEPTED, er = en && $ === f.LI.SELECT, es = en && !er && ee.length > 1, ea = s.useCallback(e => {
    et(e), e === b.cd.DESKTOP && P([])
  }, [et, P]), {
    text: eo,
    onClick: ei
  } = (0, _.Ks)({
    progressState: z,
    quest: T,
    questContent: w,
    isCollectibleQuest: K,
    questContentPosition: N,
    questContentRowIndex: R,
    inGiftInventory: true,
    isVideoQuest: G,
    inGameQuest: Y,
    sourceQuestContent: A
  }), {
    startingConsoleQuest: el,
    startConsoleQuest: ec
  } = (0, m.GI)({
    questId: T.id,
    beforeRequest: () => {
      k.startAnimation(), I({
        questId: T.id,
        questContent: w,
        questContentCTA: u.jZ.DEFIBRILLATOR,
        questContentPosition: N,
        questContentRowIndex: R,
        sourceQuestContent: A
      })
    },
    afterRequest: e => {
      k.stopAnimation(), P(e)
    }
  }), ed = s.useMemo(() => T.config.features.includes(b.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [T.config.features]), eu = (null == (S = T.userStatus) ? true : S.claimedAt) != null, {
    launchInGameActivity: ep
  } = (0, m.zB)(T), em = (0, h.CR)({
    quest: T,
    shortText: true
  }), eg = null;
  return (U && H ? eg = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != ei ? ei : true,
      text: eo,
      fullWidth: true
    })
  }) : W ? eg = G ? (0, r.jsxs)(o.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.zxk, {
      variant: "secondary",
      icon: l.Oe7,
      text: j.intl.string(j.t.YsCuyF),
      onClick: () => {
        (0, x.openVideoQuestModal)({
          quest: T,
          questContent: w,
          sourceQuestContent: A,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: eo
    })]
  }) : (0, p.Rt)(T) ? (0, r.jsxs)(o.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.zxk, {
      variant: "secondary",
      icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
      text: em,
      onClick: () => {
        ep()
      }
    }), (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: eo
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: eo,
      fullWidth: true
    })
  }) : F ? F && H ? eg = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != ei ? ei : true,
      text: eo,
      fullWidth: true
    })
  }) : X ? eg = ed ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != ei ? ei : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t.BkZhUI),
      fullWidth: true
    })
  }) : F && Z && !eu ? eg = er ? (0, r.jsx)(l.PhF, {
    className: v.platformSelectorPrimary,
    isSelected: () => false,
    options: C,
    placeholder: j.intl.string(j.t.drVw4T),
    renderOptionLabel: y,
    renderOptionValue: E,
    select: ea,
    serialize: e => {
      switch (e) {
        case b.cd.DESKTOP:
          return j.intl.string(j.t["QXc01+"]);
        case b.cd.CONSOLE:
          return j.intl.string(j.t["8lAfuB"]);
        default:
          return (0, d.vE)(e)
      }
    },
    size: "sm"
  }) : (0, p.$J)(T) && !q && $ !== f.LI.DESKTOP ? D ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      onClick: null != ei ? ei : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, r.jsx)(i.zx, {
    "data-migration-pending": true,
    color: i.Tt.PRIMARY,
    onClick: ec,
    disabled: el,
    className: v.button,
    children: (0, r.jsxs)("div", {
      className: v.ctaInner,
      children: [k.render(), j.intl.string(j.t.nPThNb)]
    })
  }) : G ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, p.Rt)(T) ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      icon: (0, x.getPrimaryCtaIcon)(T),
      onClick: null != ei ? ei : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t["9KoPyB"]),
      fullWidth: true
    })
  }) : F && !Z && (eg = M ? (0, r.jsxs)(o.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t.V293qn)
    }), (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(T, w, A),
      text: j.intl.string(j.t.vY9GgG)
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      loading: V,
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: eo,
      icon: (0, x.getPrimaryCtaIcon)(T),
      fullWidth: true
    })
  })) : eg = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.format(j.t["14o6QY"], {
        expiryDate: L
      }),
      fullWidth: true
    })
  }), null == eg) ? null : (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)("div", {
      className: v.ctaItem,
      children: eg
    }), es && (0, r.jsx)("div", {
      className: v.ctaItem,
      children: (0, r.jsx)(l.PhF, {
        className: v.platformSelectorSecondary,
        isSelected: e => {
          switch ($) {
            case f.LI.DESKTOP:
              return e === b.cd.DESKTOP;
            case f.LI.CONSOLE:
              return e === b.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: C,
        placeholder: j.intl.string(j.t.drVw4T),
        renderOptionLabel: y,
        renderOptionValue: E,
        select: ea,
        serialize: e => {
          switch (e) {
            case b.cd.DESKTOP:
              return j.intl.string(j.t["QXc01+"]);
            case b.cd.CONSOLE:
              return j.intl.string(j.t["8lAfuB"])
          }
        },
        size: "sm"
      })
    })]
  })
}