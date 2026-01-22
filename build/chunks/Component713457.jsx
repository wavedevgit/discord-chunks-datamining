/** Chunk was on 22477 **/
/** chunk id: 713457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk403362 = require("./403362.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk421193 = require("./421193.js");
let E = [{
  value: Chunk654487.fO.DESKTOP,
  get label() {
    return S.intl.string(S.t["QXc01+"])
  }
}, {
  value: Chunk654487.fO.CONSOLE,
  get label() {
    return S.intl.string(S.t["8lAfuB"])
  }
}];

function N(e) {
  let t, n, {
    value: l
  } = e;
  switch (l) {
    case C.fO.DESKTOP:
      n = (0, a.jsx)(c.kN9, {}), t = S.intl.string(S.t["QXc01+"]);
      break;
    case C.fO.CONSOLE:
      n = (0, a.jsx)(c._xR, {}), t = S.intl.string(S.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, a.jsxs)("div", {
    className: O.FL,
    children: [n, t]
  })
}

function T(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case C.fO.DESKTOP:
      return (0, a.jsxs)("span", {
        className: O.FL,
        children: [(0, a.jsx)(c.kN9, {}), S.intl.string(S.t.g6Dr44)]
      });
    case C.fO.CONSOLE:
      return (0, a.jsxs)("span", {
        className: O.FL,
        children: [(0, a.jsx)(c._xR, {}), S.intl.string(S.t.iyNbj5)]
      });
    default:
      return (0, u.xb)(e[0].value)
  }
}

function I(e) {
  var t, n, I, k;
  let {
    quest: w,
    questContent: P,
    onReceiveErrorHints: R,
    contentPosition: D,
    rowIndex: M,
    sourceQuestContent: L
  } = e, U = (0, i.bG)([d.A], () => d.A.useReducedMotion), B = (0, y.Xf)({
    useReducedMotion: U
  }), G = (0, m.Ut)(), F = (0, b.RR)({
    quest: w
  }), V = (0, b.Vn)(w), W = (0, b.S5)(w.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: H,
    isEnrolling: K,
    isQuestEnrollmentBlocked: z
  } = (0, i.cf)([p.A], () => ({
    isClaiming: p.A.isClaimingReward(w.id) || p.A.isFetchingRewardCode(w.id),
    isEnrolling: p.A.isEnrolling(w.id),
    isQuestEnrollmentBlocked: null != p.A.questEnrollmentBlockedUntil
  })), q = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, Q = (null == (n = w.userStatus) ? true : n.completedAt) != null, Y = Q && (null == (I = w.userStatus) ? true : I.claimedAt) == null, J = (0, g.if)(w), X = !(0, g.Ic)(w), Z = (0, b.In)(w), $ = (0, v.IO)(w), ee = (0, v.BS)(w), et = (0, v.Cr)(w), en = (0, b.fc)(w), [ea, el, ei] = (0, b.Qo)(w, en), er = X && Z === b.F3.ACCEPTED, es = er && ea === h.X0.SELECT, eo = er && !es && el.length > 1, ec = f.t$.useConfig({
    location: C.rE.QUEST_HOME_DESKTOP
  }).enabled, ed = l.useCallback(e => {
    ei(e), e === C.fO.DESKTOP && R([])
  }, [ei, R]), {
    text: eu,
    onClick: em
  } = (0, y._c)({
    progressState: Z,
    quest: w,
    questContent: P,
    questContentPosition: D,
    questContentRowIndex: M,
    inGiftInventory: true,
    isVideoQuest: $,
    inGameQuest: et,
    sourceQuestContent: L
  }), {
    startingConsoleQuest: ep,
    startConsoleQuest: eh
  } = (0, b.Wj)({
    questId: w.id,
    beforeRequest: () => {
      B.startAnimation(), G({
        questId: w.id,
        questContent: P,
        questContentCTA: m.Cy.DEFIBRILLATOR,
        questContentPosition: D,
        questContentRowIndex: M,
        sourceQuestContent: L
      })
    },
    afterRequest: e => {
      B.stopAnimation(), R(e)
    }
  }), ef = (null == (k = w.userStatus) ? true : k.claimedAt) != null, {
    launchInGameActivity: ex
  } = (0, b.zW)(w), eb = (0, x.NA)({
    quest: w,
    shortText: true
  }), eg = null;
  return (J && Y ? eg = (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: H,
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : Q ? eg = $ ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      icon: c.mqY,
      text: S.intl.string(S.t.YsCuyF),
      onClick: () => {
        (0, A.d5)({
          quest: w,
          questContent: P,
          sourceQuestContent: L,
          sourceQuestContentCTA: m.Cy.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu
    })]
  }) : (0, j.vA)(w) ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      icon: w.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY) ? c.hpF : c._xR,
      text: eb,
      onClick: () => {
        ex()
      }
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu
    })]
  }) : (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : X ? X && Y ? eg = (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: H,
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : ee ? eg = ec && !q ? (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(_.A, {
      quest: w,
      analyticsCtxQuestContent: P,
      analyticsCtxSourceQuestContent: L,
      analyticsCtxQuestContentPosition: D
    })
  }) : (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: K,
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : X && q && !ef ? eg = es ? (0, a.jsx)(r.Pw, {
    className: O.dd,
    isSelected: () => false,
    options: E,
    placeholder: S.intl.string(S.t.drVw4T),
    renderOptionLabel: N,
    renderOptionValue: T,
    select: ed,
    serialize: e => {
      switch (e) {
        case C.fO.DESKTOP:
          return S.intl.string(S.t["QXc01+"]);
        case C.fO.CONSOLE:
          return S.intl.string(S.t["8lAfuB"]);
        default:
          return (0, u.xb)(e)
      }
    },
    size: "sm",
    "data-migration-pending": true
  }) : (0, v.g5)(w) && !V && ea !== h.X0.DESKTOP ? F ? (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : (0, a.jsx)(o.$n, {
    "data-migration-pending": true,
    color: o.XD.PRIMARY,
    onClick: eh,
    disabled: ep,
    className: O.x6,
    children: (0, a.jsxs)("div", {
      className: O.tn,
      children: [B.render(), S.intl.string(S.t.nPThNb)]
    })
  }) : $ ? (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : (0, j.vA)(w) ? (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      icon: (0, A.Oz)(w),
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: S.intl.string(S.t["9KoPyB"]),
      fullWidth: true
    })
  }) : X && !q && (eg = z ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: S.intl.string(S.t.V293qn)
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: () => (0, A.m6)(w, P, L),
      text: S.intl.string(S.t.vY9GgG)
    })]
  }) : (0, a.jsx)("div", {
    className: O.x6,
    children: ec ? (0, a.jsx)(_.A, {
      quest: w,
      analyticsCtxQuestContent: P,
      analyticsCtxSourceQuestContent: L,
      analyticsCtxQuestContentPosition: D
    }) : (0, a.jsx)(s.$nd, {
      loading: K,
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu,
      icon: (0, A.Oz)(w),
      fullWidth: true
    })
  })) : eg = (0, a.jsx)("div", {
    className: O.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: S.intl.format(S.t["14o6QY"], {
        expiryDate: W
      }),
      fullWidth: true
    })
  }), null == eg) ? null : (0, a.jsxs)("div", {
    className: O.kL,
    children: [(0, a.jsx)("div", {
      className: O.qz,
      children: eg
    }), eo && (0, a.jsx)("div", {
      className: O.qz,
      children: (0, a.jsx)(r.Pw, {
        className: O.xZ,
        isSelected: e => {
          switch (ea) {
            case h.X0.DESKTOP:
              return e === C.fO.DESKTOP;
            case h.X0.CONSOLE:
              return e === C.fO.CONSOLE;
            default:
              returnfalse
          }
        },
        options: E,
        placeholder: S.intl.string(S.t.drVw4T),
        renderOptionLabel: N,
        renderOptionValue: T,
        select: ed,
        serialize: e => {
          switch (e) {
            case C.fO.DESKTOP:
              return S.intl.string(S.t["QXc01+"]);
            case C.fO.CONSOLE:
              return S.intl.string(S.t["8lAfuB"])
          }
        },
        size: "sm",
        "data-migration-pending": true
      })
    })]
  })
}