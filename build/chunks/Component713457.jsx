/** Chunk was on 65298 **/
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
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
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
    return O.intl.string(O.t["QXc01+"])
  }
}, {
  value: Chunk654487.fO.CONSOLE,
  get label() {
    return O.intl.string(O.t["8lAfuB"])
  }
}];

function N(e) {
  let t, n, {
    value: l
  } = e;
  switch (l) {
    case S.fO.DESKTOP:
      n = (0, a.jsx)(c.kN9, {}), t = O.intl.string(O.t["QXc01+"]);
      break;
    case S.fO.CONSOLE:
      n = (0, a.jsx)(c._xR, {}), t = O.intl.string(O.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, a.jsxs)("div", {
    className: T.FL,
    children: [n, t]
  })
}

function w(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case S.fO.DESKTOP:
      return (0, a.jsxs)("span", {
        className: T.FL,
        children: [(0, a.jsx)(c.kN9, {}), O.intl.string(O.t.g6Dr44)]
      });
    case S.fO.CONSOLE:
      return (0, a.jsxs)("span", {
        className: T.FL,
        children: [(0, a.jsx)(c._xR, {}), O.intl.string(O.t.iyNbj5)]
      });
    default:
      return (0, u.xb)(e[0].value)
  }
}

function I(e) {
  var t, n, I, k;
  let {
    quest: P,
    questContent: R,
    onReceiveErrorHints: D,
    contentPosition: M,
    rowIndex: L,
    sourceQuestContent: U
  } = e, B = (0, r.bG)([d.A], () => d.A.useReducedMotion), G = (0, y.Xf)({
    useReducedMotion: B
  }), F = (0, f.Ut)(), V = (0, g.RR)({
    quest: P
  }), W = (0, g.Vn)(P), H = (0, g.S5)(P.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: K,
    isEnrolling: z,
    isQuestEnrollmentBlocked: q
  } = (0, r.cf)([m.A], () => ({
    isClaiming: m.A.isClaimingReward(P.id) || m.A.isFetchingRewardCode(P.id),
    isEnrolling: m.A.isEnrolling(P.id),
    isQuestEnrollmentBlocked: null != m.A.questEnrollmentBlockedUntil
  })), Q = (null == (t = P.userStatus) ? true : t.enrolledAt) != null, Y = (null == (n = P.userStatus) ? true : n.completedAt) != null, J = Y && (null == (I = P.userStatus) ? true : I.claimedAt) == null, X = (0, v.if)(P), $ = !(0, v.Ic)(P), Z = (0, g.In)(P), ee = (0, j.IO)(P), et = (0, j.BS)(P), en = (0, j.Cr)(P), ea = (0, g.fc)(P), [el, er, ei] = (0, g.Qo)(P, ea), es = $ && Z === g.F3.ACCEPTED, eo = es && el === p.X0.SELECT, ec = es && !eo && er.length > 1, ed = h.t$.useConfig({
    location: S.rE.QUEST_HOME_DESKTOP
  }).enabled, eu = l.useCallback(e => {
    ei(e), e === S.fO.DESKTOP && D([])
  }, [ei, D]), {
    text: em,
    onClick: ep
  } = (0, y._c)({
    progressState: Z,
    quest: P,
    questContent: R,
    questContentPosition: M,
    questContentRowIndex: L,
    inGiftInventory: true,
    isVideoQuest: ee,
    inGameQuest: en,
    sourceQuestContent: U
  }), {
    startingConsoleQuest: eh,
    startConsoleQuest: ex
  } = (0, g.Wj)({
    questId: P.id,
    beforeRequest: () => {
      G.startAnimation(), F({
        questId: P.id,
        questContent: R,
        questContentCTA: b.Cy.DEFIBRILLATOR,
        questContentPosition: M,
        questContentRowIndex: L,
        sourceQuestContent: U
      })
    },
    afterRequest: e => {
      G.stopAnimation(), D(e)
    }
  }), eg = (null == (k = P.userStatus) ? true : k.claimedAt) != null, {
    launchInGameActivity: ef
  } = (0, g.zW)(P), eb = (0, x.NA)({
    quest: P,
    shortText: true
  }), ev = null;
  return (X && J ? ev = (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: K,
      onClick: null != ep ? ep : true,
      text: em,
      fullWidth: true
    })
  }) : Y ? ev = ee ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    wrap: false,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      icon: c.mqY,
      text: O.intl.string(O.t.YsCuyF),
      onClick: () => {
        (0, C.d5)({
          quest: P,
          questContent: R,
          sourceQuestContent: U,
          sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ep ? ep : true,
      text: em
    })]
  }) : (0, _.vA)(P) ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    wrap: false,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      icon: P.config.features.includes(S.Li.CLOUD_GAMING_ACTIVITY) ? c.hpF : c._xR,
      text: eb,
      onClick: () => {
        ef()
      }
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ep ? ep : true,
      text: em
    })]
  }) : (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ep ? ep : true,
      text: em,
      fullWidth: true
    })
  }) : $ ? $ && J ? ev = (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: K,
      onClick: null != ep ? ep : true,
      text: em,
      fullWidth: true
    })
  }) : et ? ev = ed && !Q ? (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(A.A, {
      quest: P,
      analyticsCtxQuestContent: R,
      analyticsCtxSourceQuestContent: U,
      analyticsCtxQuestContentPosition: M
    })
  }) : (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: z,
      onClick: null != ep ? ep : true,
      text: em,
      fullWidth: true
    })
  }) : $ && Q && !eg ? ev = eo ? (0, a.jsx)(i.Pw, {
    className: T.dd,
    isSelected: () => false,
    options: E,
    placeholder: O.intl.string(O.t.drVw4T),
    renderOptionLabel: N,
    renderOptionValue: w,
    select: eu,
    serialize: e => {
      switch (e) {
        case S.fO.DESKTOP:
          return O.intl.string(O.t["QXc01+"]);
        case S.fO.CONSOLE:
          return O.intl.string(O.t["8lAfuB"]);
        default:
          return (0, u.xb)(e)
      }
    },
    size: "sm",
    "data-migration-pending": true
  }) : (0, j.g5)(P) && !W && el !== p.X0.DESKTOP ? V ? (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      onClick: null != ep ? ep : true,
      text: em,
      fullWidth: true
    })
  }) : (0, a.jsx)(o.$n, {
    "data-migration-pending": true,
    color: o.XD.PRIMARY,
    onClick: ex,
    disabled: eh,
    className: T.x6,
    children: (0, a.jsxs)("div", {
      className: T.tn,
      children: [G.render(), O.intl.string(O.t.nPThNb)]
    })
  }) : ee ? (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ep ? ep : true,
      text: em,
      fullWidth: true
    })
  }) : (0, _.vA)(P) ? (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      icon: (0, C.Oz)(P),
      onClick: null != ep ? ep : true,
      text: em,
      fullWidth: true
    })
  }) : (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: O.intl.string(O.t["9KoPyB"]),
      fullWidth: true
    })
  }) : $ && !Q && (ev = q ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    wrap: false,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: O.intl.string(O.t.V293qn)
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: () => (0, C.m6)(P, R, U),
      text: O.intl.string(O.t.vY9GgG)
    })]
  }) : (0, a.jsx)("div", {
    className: T.x6,
    children: ed ? (0, a.jsx)(A.A, {
      quest: P,
      analyticsCtxQuestContent: R,
      analyticsCtxSourceQuestContent: U,
      analyticsCtxQuestContentPosition: M
    }) : (0, a.jsx)(s.$nd, {
      loading: z,
      variant: "primary",
      onClick: null != ep ? ep : true,
      text: em,
      icon: (0, C.Oz)(P),
      fullWidth: true
    })
  })) : ev = (0, a.jsx)("div", {
    className: T.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: O.intl.format(O.t["14o6QY"], {
        expiryDate: H
      }),
      fullWidth: true
    })
  }), null == ev) ? null : (0, a.jsxs)("div", {
    className: T.kL,
    children: [(0, a.jsx)("div", {
      className: T.qz,
      children: ev
    }), ec && (0, a.jsx)("div", {
      className: T.qz,
      children: (0, a.jsx)(i.Pw, {
        className: T.xZ,
        isSelected: e => {
          switch (el) {
            case p.X0.DESKTOP:
              return e === S.fO.DESKTOP;
            case p.X0.CONSOLE:
              return e === S.fO.CONSOLE;
            default:
              returnfalse
          }
        },
        options: E,
        placeholder: O.intl.string(O.t.drVw4T),
        renderOptionLabel: N,
        renderOptionValue: w,
        select: eu,
        serialize: e => {
          switch (e) {
            case S.fO.DESKTOP:
              return O.intl.string(O.t["QXc01+"]);
            case S.fO.CONSOLE:
              return O.intl.string(O.t["8lAfuB"])
          }
        },
        size: "sm",
        "data-migration-pending": true
      })
    })]
  })
}