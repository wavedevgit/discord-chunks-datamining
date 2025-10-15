/** Chunk was on 17013 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  Chunk530691 = require("./530691.js"),
  Chunk373370 = require("./373370.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk924304 = require("./924304.js");
let y = [{
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

function E(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case j.cd.DESKTOP:
      n = (0, r.jsx)(l.pzj, {}), t = v.intl.string(v.t["QXc01+"]);
      break;
    case j.cd.CONSOLE:
      n = (0, r.jsx)(l.iWm, {}), t = v.intl.string(v.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, r.jsxs)("div", {
    className: C.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function O(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case j.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: C.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.pzj, {}), v.intl.string(v.t.g6Dr44)]
      });
    case j.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: C.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.iWm, {}), v.intl.string(v.t.iyNbj5)]
      });
    default:
      return (0, d.vE)(e[0].value)
  }
}

function S(e) {
  var t, n, S, T;
  let {
    quest: w,
    questContent: P,
    onReceiveErrorHints: N,
    contentPosition: A,
    rowIndex: R,
    sourceQuestContent: B
  } = e, k = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), I = (0, b.g2)({
    useReducedMotion: k
  }), D = (0, u.O5)(), q = (0, m._s)({
    quest: w
  }), L = (0, m.z)(w), Q = (0, m.B6)(w.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: V,
    isEnrolling: M,
    isQuestEnrollmentBlocked: Z
  } = (0, a.cj)([g.Z], () => ({
    isClaiming: g.Z.isClaimingReward(w.id) || g.Z.isFetchingRewardCode(w.id),
    isEnrolling: g.Z.isEnrolling(w.id),
    isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil
  })), W = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, H = (null == (n = w.userStatus) ? true : n.completedAt) != null, U = H && (null == (S = w.userStatus) ? true : S.claimedAt) == null, F = (0, p.iQ)(w), K = !(0, p.zi)(w), z = (0, m._Q)(w), G = (0, p.Xv)(w.config), X = (0, p.PB)(w), Y = (0, p.HJ)(w), J = (0, p.Vl)(w), $ = (0, m.Rf)(w), [ee, et, en] = (0, m.me)(w, $), er = K && z === m.OH.ACCEPTED, es = er && ee === f.LI.SELECT, ea = er && !es && et.length > 1, eo = s.useCallback(e => {
    en(e), e === j.cd.DESKTOP && N([])
  }, [en, N]), {
    text: ei,
    onClick: el
  } = (0, b.Ks)({
    progressState: z,
    quest: w,
    questContent: P,
    isCollectibleQuest: G,
    questContentPosition: A,
    questContentRowIndex: R,
    inGiftInventory: true,
    isVideoQuest: X,
    inGameQuest: J,
    sourceQuestContent: B
  }), {
    startingConsoleQuest: ec,
    startConsoleQuest: ed
  } = (0, m.GI)({
    questId: w.id,
    beforeRequest: () => {
      I.startAnimation(), D({
        questId: w.id,
        questContent: P,
        questContentCTA: u.jZ.DEFIBRILLATOR,
        questContentPosition: A,
        questContentRowIndex: R,
        sourceQuestContent: B
      })
    },
    afterRequest: e => {
      I.stopAnimation(), N(e)
    }
  }), eu = (0, h.f)({
    location: j.dr.QUEST_HOME_DESKTOP,
    questFeatures: w.config.features
  }), ep = (null == (T = w.userStatus) ? true : T.claimedAt) != null, {
    launchInGameActivity: em
  } = (0, m.zB)(w), eg = (0, x.CR)({
    quest: w,
    shortText: true
  }), ef = null;
  return (F && U ? ef = (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : H ? ef = X ? (0, r.jsxs)(o.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.zxk, {
      variant: "secondary",
      icon: l.Oe7,
      text: v.intl.string(v.t.YsCuyF),
      onClick: () => {
        (0, _.openVideoQuestModal)({
          quest: w,
          questContent: P,
          sourceQuestContent: B,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei
    })]
  }) : (0, p.Rt)(w) ? (0, r.jsxs)(o.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.zxk, {
      variant: "secondary",
      icon: w.config.features.includes(j.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
      text: eg,
      onClick: () => {
        em()
      }
    }), (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei
    })]
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : K ? K && U ? ef = (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : Y ? ef = eu ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      loading: M,
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.string(v.t.BkZhUI),
      fullWidth: true
    })
  }) : K && W && !ep ? ef = es ? (0, r.jsx)(l.PhF, {
    className: C.platformSelectorPrimary,
    isSelected: () => false,
    options: y,
    placeholder: v.intl.string(v.t.drVw4T),
    renderOptionLabel: E,
    renderOptionValue: O,
    select: eo,
    serialize: e => {
      switch (e) {
        case j.cd.DESKTOP:
          return v.intl.string(v.t["QXc01+"]);
        case j.cd.CONSOLE:
          return v.intl.string(v.t["8lAfuB"]);
        default:
          return (0, d.vE)(e)
      }
    },
    size: "sm"
  }) : (0, p.$J)(w) && !L && ee !== f.LI.DESKTOP ? q ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : (0, r.jsx)(i.zx, {
    "data-migration-pending": true,
    color: i.Tt.PRIMARY,
    onClick: ed,
    disabled: ec,
    className: C.button,
    children: (0, r.jsxs)("div", {
      className: C.ctaInner,
      children: [I.render(), v.intl.string(v.t.nPThNb)]
    })
  }) : X ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : (0, p.Rt)(w) ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      icon: (0, b.gF)(w),
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.string(v.t["9KoPyB"]),
      fullWidth: true
    })
  }) : K && !W && (ef = Z ? (0, r.jsxs)(o.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.string(v.t.V293qn)
    }), (0, r.jsx)(o.zxk, {
      variant: "primary",
      onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(w, P, B),
      text: v.intl.string(v.t.vY9GgG)
    })]
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      loading: M,
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei,
      icon: (0, b.gF)(w),
      fullWidth: true
    })
  })) : ef = (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(o.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.format(v.t["14o6QY"], {
        expiryDate: Q
      }),
      fullWidth: true
    })
  }), null == ef) ? null : (0, r.jsxs)("div", {
    className: C.container,
    children: [(0, r.jsx)("div", {
      className: C.ctaItem,
      children: ef
    }), ea && (0, r.jsx)("div", {
      className: C.ctaItem,
      children: (0, r.jsx)(l.PhF, {
        className: C.platformSelectorSecondary,
        isSelected: e => {
          switch (ee) {
            case f.LI.DESKTOP:
              return e === j.cd.DESKTOP;
            case f.LI.CONSOLE:
              return e === j.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: y,
        placeholder: v.intl.string(v.t.drVw4T),
        renderOptionLabel: E,
        renderOptionValue: O,
        select: eo,
        serialize: e => {
          switch (e) {
            case j.cd.DESKTOP:
              return v.intl.string(v.t["QXc01+"]);
            case j.cd.CONSOLE:
              return v.intl.string(v.t["8lAfuB"])
          }
        },
        size: "sm"
      })
    })]
  })
}