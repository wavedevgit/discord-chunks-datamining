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
    return Chunk388032.intl.string(Chunk388032.t.QXc019)
  }
}, {
  value: Chunk46140.cd.CONSOLE,
  get label() {
    return Chunk388032.intl.string(Chunk388032.t["8lAfuL"])
  }
}];

function E(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case v.cd.DESKTOP:
      n = (0, r.jsx)(l.pzj, {}), t = j.intl.string(j.t.QXc019);
      break;
    case v.cd.CONSOLE:
      n = (0, r.jsx)(l.iWm, {}), t = j.intl.string(j.t["8lAfuL"]);
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
    case v.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: C.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.pzj, {}), j.intl.string(j.t["g6Dr4+"])]
      });
    case v.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: C.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.iWm, {}), j.intl.string(j.t.iyNbj4)]
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
  } = e, k = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), I = (0, b.g2)({
    useReducedMotion: k
  }), q = (0, u.O5)(), D = (0, m._s)({
    quest: w
  }), L = (0, m.z)(w), V = (0, m.B6)(w.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: Q,
    isEnrolling: M,
    isQuestEnrollmentBlocked: W
  } = (0, o.cj)([g.Z], () => ({
    isClaiming: g.Z.isClaimingReward(w.id) || g.Z.isFetchingRewardCode(w.id),
    isEnrolling: g.Z.isEnrolling(w.id),
    isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil
  })), Z = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, U = (null == (n = w.userStatus) ? true : n.completedAt) != null, H = U && (null == (S = w.userStatus) ? true : S.claimedAt) == null, F = (0, p.iQ)(w), z = !(0, p.zi)(w), X = (0, m._Q)(w), G = (0, p.Xv)(w.config), K = (0, p.PB)(w), Y = (0, p.HJ)(w), J = (0, p.Vl)(w), $ = (0, m.Rf)(w), [ee, et, en] = (0, m.me)(w, $), er = z && X === m.OH.ACCEPTED, es = er && ee === f.LI.SELECT, eo = er && !es && et.length > 1, ea = s.useCallback(e => {
    en(e), e === v.cd.DESKTOP && N([])
  }, [en, N]), {
    text: ei,
    onClick: el
  } = (0, b.Ks)({
    progressState: X,
    quest: w,
    questContent: P,
    isCollectibleQuest: G,
    questContentPosition: A,
    questContentRowIndex: R,
    inGiftInventory: true,
    isVideoQuest: K,
    inGameQuest: J,
    sourceQuestContent: B
  }), {
    startingConsoleQuest: ec,
    startConsoleQuest: ed
  } = (0, m.GI)({
    questId: w.id,
    beforeRequest: () => {
      I.startAnimation(), q({
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
    location: v.dr.QUEST_HOME_DESKTOP,
    questFeatures: w.config.features
  }), ep = (null == (T = w.userStatus) ? true : T.claimedAt) != null, {
    launchInGameActivity: em
  } = (0, m.zB)(w), eg = (0, x.CR)({
    quest: w,
    shortText: true
  }), ef = null;
  return (F && H ? ef = (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : U ? ef = K ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      icon: l.Oe7,
      text: j.intl.string(j.t.YsCuyM),
      onClick: () => {
        (0, _.openVideoQuestModal)({
          quest: w,
          questContent: P,
          sourceQuestContent: B,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei
    })]
  }) : (0, p.Rt)(w) ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      icon: w.config.features.includes(v.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
      text: eg,
      onClick: () => {
        em()
      }
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei
    })]
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : z ? z && H ? ef = (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : Y ? ef = eu ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: M,
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t.BkZhUF),
      fullWidth: true
    })
  }) : z && Z && !ep ? ef = es ? (0, r.jsx)(l.PhF, {
    className: C.platformSelectorPrimary,
    isSelected: () => false,
    options: y,
    placeholder: j.intl.string(j.t.drVw4e),
    renderOptionLabel: E,
    renderOptionValue: O,
    select: ea,
    serialize: e => {
      switch (e) {
        case v.cd.DESKTOP:
          return j.intl.string(j.t.QXc019);
        case v.cd.CONSOLE:
          return j.intl.string(j.t["8lAfuL"]);
        default:
          return (0, d.vE)(e)
      }
    },
    size: "sm"
  }) : (0, p.$J)(w) && !L && ee !== f.LI.DESKTOP ? D ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
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
      children: [I.render(), j.intl.string(j.t.nPThNT)]
    })
  }) : K ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : (0, p.Rt)(w) ? (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      icon: w.config.features.includes(v.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : true,
      onClick: null != el ? el : true,
      text: ei,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t["9KoPyM"]),
      fullWidth: true
    })
  }) : z && !Z && (ef = W ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t.V293qq)
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(w, P, B),
      text: j.intl.string(j.t.vY9GgI)
    })]
  }) : (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      loading: M,
      variant: "primary",
      onClick: null != el ? el : true,
      text: ei,
      icon: w.config.features.includes(v.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : true,
      fullWidth: true
    })
  })) : ef = (0, r.jsx)("div", {
    className: C.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.format(j.t["14o6QU"], {
        expiryDate: V
      }),
      fullWidth: true
    })
  }), null == ef) ? null : (0, r.jsxs)("div", {
    className: C.container,
    children: [(0, r.jsx)("div", {
      className: C.ctaItem,
      children: ef
    }), eo && (0, r.jsx)("div", {
      className: C.ctaItem,
      children: (0, r.jsx)(l.PhF, {
        className: C.platformSelectorSecondary,
        isSelected: e => {
          switch (ee) {
            case f.LI.DESKTOP:
              return e === v.cd.DESKTOP;
            case f.LI.CONSOLE:
              return e === v.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: y,
        placeholder: j.intl.string(j.t.drVw4e),
        renderOptionLabel: E,
        renderOptionValue: O,
        select: ea,
        serialize: e => {
          switch (e) {
            case v.cd.DESKTOP:
              return j.intl.string(j.t.QXc019);
            case v.cd.CONSOLE:
              return j.intl.string(j.t["8lAfuL"])
          }
        },
        size: "sm"
      })
    })]
  })
}