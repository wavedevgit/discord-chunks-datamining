/** Chunk was on 90228 **/
/** chunk id: 713457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
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
  Chunk33621 = require("./33621.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk79545 = require("./79545.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk421193 = require("./421193.js");
let N = [{
  value: Chunk654487.fO.DESKTOP,
  get label() {
    return T.intl.string(T.t["QXc01+"])
  }
}, {
  value: Chunk654487.fO.CONSOLE,
  get label() {
    return T.intl.string(T.t["8lAfuB"])
  }
}];

function w(e) {
  let t, n, {
    value: l
  } = e;
  switch (l) {
    case O.fO.DESKTOP:
      n = (0, a.jsx)(c.kN9, {}), t = T.intl.string(T.t["QXc01+"]);
      break;
    case O.fO.CONSOLE:
      n = (0, a.jsx)(c._xR, {}), t = T.intl.string(T.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, a.jsxs)("div", {
    className: E.FL,
    children: [n, t]
  })
}

function I(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case O.fO.DESKTOP:
      return (0, a.jsxs)("span", {
        className: E.FL,
        children: [(0, a.jsx)(c.kN9, {}), T.intl.string(T.t.g6Dr44)]
      });
    case O.fO.CONSOLE:
      return (0, a.jsxs)("span", {
        className: E.FL,
        children: [(0, a.jsx)(c._xR, {}), T.intl.string(T.t.iyNbj5)]
      });
    default:
      return (0, u.xb)(e[0].value)
  }
}

function k(e) {
  var t, n, k, P;
  let {
    quest: R,
    questContent: D,
    onReceiveErrorHints: M,
    contentPosition: L,
    rowIndex: U,
    sourceQuestContent: B
  } = e, G = (0, r.bG)([d.A], () => d.A.useReducedMotion), F = (0, y.Xf)({
    useReducedMotion: G
  }), V = (0, f.Ut)(), W = (0, g.RR)({
    quest: R
  }), H = (0, g.Vn)(R), K = (0, g.S5)(R.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: z,
    isEnrolling: q,
    isQuestEnrollmentBlocked: Q
  } = (0, r.cf)([m.A], () => ({
    isClaiming: m.A.isClaimingReward(R.id) || m.A.isFetchingRewardCode(R.id),
    isEnrolling: m.A.isEnrolling(R.id),
    isQuestEnrollmentBlocked: null != m.A.questEnrollmentBlockedUntil
  })), Y = (null == (t = R.userStatus) ? true : t.enrolledAt) != null, J = (null == (n = R.userStatus) ? true : n.completedAt) != null, X = J && (null == (k = R.userStatus) ? true : k.claimedAt) == null, Z = (0, v.if)(R), $ = !(0, v.Ic)(R), ee = (0, g.In)(R), et = (0, j.IO)(R), en = (0, j.BS)(R), ea = (0, j.Cr)(R), el = (0, g.fc)(R), [er, ei, es] = (0, g.Qo)(R, el), eo = $ && ee === g.F3.ACCEPTED, ec = eo && er === p.X0.SELECT, ed = eo && !ec && ei.length > 1, eu = h.t.useConfig({
    location: O.rE.QUEST_HOME_DESKTOP
  }), em = (0, C.P)(R), ep = l.useCallback(e => {
    es(e), e === O.fO.DESKTOP && M([])
  }, [es, M]), {
    text: eh,
    onClick: ex
  } = (0, y._c)({
    progressState: ee,
    quest: R,
    questContent: D,
    questContentPosition: L,
    questContentRowIndex: U,
    inGiftInventory: true,
    isVideoQuest: et,
    inGameQuest: ea,
    sourceQuestContent: B
  }), {
    startingConsoleQuest: eg,
    startConsoleQuest: ef
  } = (0, g.Wj)({
    questId: R.id,
    beforeRequest: () => {
      F.startAnimation(), V({
        questId: R.id,
        questContent: D,
        questContentCTA: b.Cy.DEFIBRILLATOR,
        questContentPosition: L,
        questContentRowIndex: U,
        sourceQuestContent: B
      })
    },
    afterRequest: e => {
      F.stopAnimation(), M(e)
    }
  }), eb = (null == (P = R.userStatus) ? true : P.claimedAt) != null, {
    launchInGameActivity: ev
  } = (0, g.zW)(R), ej = (0, x.NA)({
    quest: R,
    shortText: true
  }), e_ = null;
  return (Z && X ? e_ = (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: z,
      onClick: null != ex ? ex : true,
      text: eh,
      fullWidth: true
    })
  }) : J ? e_ = et ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    wrap: false,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      icon: c.mqY,
      text: T.intl.string(T.t.YsCuyF),
      onClick: () => {
        (0, S.d5)({
          quest: R,
          questContent: D,
          sourceQuestContent: B,
          sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ex ? ex : true,
      text: eh
    })]
  }) : (0, _.vA)(R) ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    wrap: false,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      icon: R.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY) ? c.hpF : c._xR,
      text: ej,
      onClick: () => {
        ev()
      }
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ex ? ex : true,
      text: eh
    })]
  }) : (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ex ? ex : true,
      text: eh,
      fullWidth: true
    })
  }) : $ ? $ && X ? e_ = (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: z,
      onClick: null != ex ? ex : true,
      text: eh,
      fullWidth: true
    })
  }) : en ? e_ = eu.enabled && em === C.U.UNENROLLED && eu.enabledQuestStates.has(C.U.UNENROLLED) ? (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(A.A, {
      quest: R,
      analyticsCtxQuestContent: D,
      analyticsCtxSourceQuestContent: B,
      analyticsCtxQuestContentPosition: L
    })
  }) : (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      loading: q,
      onClick: null != ex ? ex : true,
      text: eh,
      fullWidth: true
    })
  }) : $ && Y && !eb ? e_ = ec ? (0, a.jsx)(i.Pw, {
    className: E.dd,
    isSelected: () => false,
    options: N,
    placeholder: T.intl.string(T.t.drVw4T),
    renderOptionLabel: w,
    renderOptionValue: I,
    select: ep,
    serialize: e => {
      switch (e) {
        case O.fO.DESKTOP:
          return T.intl.string(T.t["QXc01+"]);
        case O.fO.CONSOLE:
          return T.intl.string(T.t["8lAfuB"]);
        default:
          return (0, u.xb)(e)
      }
    },
    size: "sm",
    "data-migration-pending": true
  }) : (0, j.g5)(R) && !H && er !== p.X0.DESKTOP ? W ? (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      onClick: null != ex ? ex : true,
      text: eh,
      fullWidth: true
    })
  }) : (0, a.jsx)(o.$n, {
    "data-migration-pending": true,
    color: o.XD.PRIMARY,
    onClick: ef,
    disabled: eg,
    className: E.x6,
    children: (0, a.jsxs)("div", {
      className: E.tn,
      children: [F.render(), T.intl.string(T.t.nPThNb)]
    })
  }) : et ? (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: null != ex ? ex : true,
      text: eh,
      fullWidth: true
    })
  }) : (0, _.vA)(R) ? (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "primary",
      icon: (0, S.Oz)(R),
      onClick: null != ex ? ex : true,
      text: eh,
      fullWidth: true
    })
  }) : (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: T.intl.string(T.t["9KoPyB"]),
      fullWidth: true
    })
  }) : $ && !Y && (e_ = Q ? (0, a.jsxs)(s.e2v, {
    direction: "horizontal",
    fullWidth: true,
    wrap: false,
    children: [(0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: T.intl.string(T.t.V293qn)
    }), (0, a.jsx)(s.$nd, {
      variant: "primary",
      onClick: () => (0, S.m6)(R, D, B),
      text: T.intl.string(T.t.vY9GgG)
    })]
  }) : (0, a.jsx)("div", {
    className: E.x6,
    children: eu.enabled && em === C.U.UNENROLLED && eu.enabledQuestStates.has(C.U.UNENROLLED) ? (0, a.jsx)(A.A, {
      quest: R,
      analyticsCtxQuestContent: D,
      analyticsCtxSourceQuestContent: B,
      analyticsCtxQuestContentPosition: L
    }) : (0, a.jsx)(s.$nd, {
      loading: q,
      variant: "primary",
      onClick: null != ex ? ex : true,
      text: eh,
      icon: (0, S.Oz)(R),
      fullWidth: true
    })
  })) : e_ = (0, a.jsx)("div", {
    className: E.x6,
    children: (0, a.jsx)(s.$nd, {
      variant: "secondary",
      disabled: true,
      text: T.intl.format(T.t["14o6QY"], {
        expiryDate: K
      }),
      fullWidth: true
    })
  }), null == e_) ? null : (0, a.jsxs)("div", {
    className: E.kL,
    children: [(0, a.jsx)("div", {
      className: E.qz,
      children: e_
    }), ed && (0, a.jsx)("div", {
      className: E.qz,
      children: (0, a.jsx)(i.Pw, {
        className: E.xZ,
        isSelected: e => {
          switch (er) {
            case p.X0.DESKTOP:
              return e === O.fO.DESKTOP;
            case p.X0.CONSOLE:
              return e === O.fO.CONSOLE;
            default:
              returnfalse
          }
        },
        options: N,
        placeholder: T.intl.string(T.t.drVw4T),
        renderOptionLabel: w,
        renderOptionValue: I,
        select: ep,
        serialize: e => {
          switch (e) {
            case O.fO.DESKTOP:
              return T.intl.string(T.t["QXc01+"]);
            case O.fO.CONSOLE:
              return T.intl.string(T.t["8lAfuB"])
          }
        },
        size: "sm",
        "data-migration-pending": true
      })
    })]
  })
}