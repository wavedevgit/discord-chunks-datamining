/** Chunk was on 50433 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    case _.cd.DESKTOP:
      n = (0, r.jsx)(l.pzj, {}), t = j.intl.string(j.t["QXc01+"]);
      break;
    case _.cd.CONSOLE:
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
    case _.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: v.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.pzj, {}), j.intl.string(j.t.g6Dr44)]
      });
    case _.cd.CONSOLE:
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
    rowIndex: A,
    sourceQuestContent: R
  } = e, B = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), k = (0, b.g2)({
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
  } = (0, o.cj)([g.Z], () => ({
    isClaiming: g.Z.isClaimingReward(T.id) || g.Z.isFetchingRewardCode(T.id),
    isEnrolling: g.Z.isEnrolling(T.id),
    isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil
  })), Z = (null == (t = T.userStatus) ? true : t.enrolledAt) != null, W = (null == (n = T.userStatus) ? true : n.completedAt) != null, U = W && (null == (O = T.userStatus) ? true : O.claimedAt) == null, H = (0, p.iQ)(T), F = !(0, p.zi)(T), z = (0, m._Q)(T), G = (0, p.Xv)(T.config), K = (0, p.PB)(T), X = (0, p.HJ)(T), Y = (0, p.Vl)(T), J = (0, m.Rf)(T), [$, ee, et] = (0, m.me)(T, J), en = F && z === m.OH.ACCEPTED, er = en && $ === f.LI.SELECT, es = en && !er && ee.length > 1, eo = s.useCallback(e => {
    et(e), e === _.cd.DESKTOP && P([])
  }, [et, P]), {
    text: ea,
    onClick: ei
  } = (0, b.Ks)({
    progressState: z,
    quest: T,
    questContent: w,
    isCollectibleQuest: G,
    questContentPosition: N,
    questContentRowIndex: A,
    inGiftInventory: true,
    isVideoQuest: K,
    inGameQuest: Y,
    sourceQuestContent: R
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
        questContentRowIndex: A,
        sourceQuestContent: R
      })
    },
    afterRequest: e => {
      k.stopAnimation(), P(e)
    }
  }), ed = s.useMemo(() => T.config.features.includes(_.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [T.config.features]), eu = (null == (S = T.userStatus) ? true : S.claimedAt) != null, {
    launchInGameActivity: ep
  } = (0, m.zB)(T), em = (0, h.CR)({
    quest: T,
    shortText: true
  }), eg = null;
  return (H && U ? eg = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : W ? eg = K ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      icon: l.Oe7,
      text: j.intl.string(j.t.YsCuyF),
      onClick: () => {
        (0, x.openVideoQuestModal)({
          quest: T,
          questContent: w,
          sourceQuestContent: R,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea
    })]
  }) : (0, p.Rt)(T) ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      icon: T.config.features.includes(_.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
      text: em,
      onClick: () => {
        ep()
      }
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : F ? F && U ? eg = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : X ? eg = ed ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
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
    select: eo,
    serialize: e => {
      switch (e) {
        case _.cd.DESKTOP:
          return j.intl.string(j.t["QXc01+"]);
        case _.cd.CONSOLE:
          return j.intl.string(j.t["8lAfuB"]);
        default:
          return (0, d.vE)(e)
      }
    },
    size: "sm"
  }) : (0, p.$J)(T) && !q && $ !== f.LI.DESKTOP ? D ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      onClick: null != ei ? ei : true,
      text: ea,
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
  }) : K ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : (0, p.Rt)(T) ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      icon: (0, x.getPrimaryCtaIcon)(T),
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t["9KoPyB"]),
      fullWidth: true
    })
  }) : F && !Z && (eg = M ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t.V293qn)
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(T, w, R),
      text: j.intl.string(j.t.vY9GgG)
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      loading: V,
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea,
      icon: (0, x.getPrimaryCtaIcon)(T),
      fullWidth: true
    })
  })) : eg = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
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
              return e === _.cd.DESKTOP;
            case f.LI.CONSOLE:
              return e === _.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: C,
        placeholder: j.intl.string(j.t.drVw4T),
        renderOptionLabel: y,
        renderOptionValue: E,
        select: eo,
        serialize: e => {
          switch (e) {
            case _.cd.DESKTOP:
              return j.intl.string(j.t["QXc01+"]);
            case _.cd.CONSOLE:
              return j.intl.string(j.t["8lAfuB"])
          }
        },
        size: "sm"
      })
    })]
  })
}