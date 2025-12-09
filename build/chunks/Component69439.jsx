/** Chunk was on 75393 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk823379 = require("./823379.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk924304 = require("./924304.js");
let E = [{
  value: Chunk324805.cd.DESKTOP,
  get label() {
    return Chunk388032.intl.string(Chunk388032.t["QXc01+"])
  }
}, {
  value: Chunk324805.cd.CONSOLE,
  get label() {
    return Chunk388032.intl.string(Chunk388032.t["8lAfuB"])
  }
}];

function O(e) {
  let t, n, {
    value: r
  } = e;
  switch (r) {
    case y.cd.DESKTOP:
      n = (0, a.jsx)(c.pzj, {}), t = C.intl.string(C.t["QXc01+"]);
      break;
    case y.cd.CONSOLE:
      n = (0, a.jsx)(c.iWm, {}), t = C.intl.string(C.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, a.jsxs)("div", {
    className: S.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function T(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case y.cd.DESKTOP:
      return (0, a.jsxs)("span", {
        className: S.platformSelectorPrimaryLabel,
        children: [(0, a.jsx)(c.pzj, {}), C.intl.string(C.t.g6Dr44)]
      });
    case y.cd.CONSOLE:
      return (0, a.jsxs)("span", {
        className: S.platformSelectorPrimaryLabel,
        children: [(0, a.jsx)(c.iWm, {}), C.intl.string(C.t.iyNbj5)]
      });
    default:
      return (0, u.vE)(e[0].value)
  }
}

function N(e) {
  var t, n, N, P;
  let {
    quest: w,
    questContent: I,
    onReceiveErrorHints: k,
    contentPosition: R,
    rowIndex: A,
    sourceQuestContent: D
  } = e, Z = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), L = (0, j.g2)({
    useReducedMotion: Z
  }), M = (0, m.O5)(), U = (0, f._s)({
    quest: w
  }), B = (0, f.z)(w), F = (0, f.B6)(w.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: G,
    isEnrolling: V,
    isQuestEnrollmentBlocked: H
  } = (0, i.cj)([p.Z], () => ({
    isClaiming: p.Z.isClaimingReward(w.id) || p.Z.isFetchingRewardCode(w.id),
    isEnrolling: p.Z.isEnrolling(w.id),
    isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil
  })), W = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, z = (null == (n = w.userStatus) ? true : n.completedAt) != null, K = z && (null == (N = w.userStatus) ? true : N.claimedAt) == null, q = (0, g.iQ)(w), Q = !(0, g.zi)(w), Y = (0, f._Q)(w), X = (0, b.PB)(w), J = (0, b.HJ)(w), $ = (0, b.Vl)(w), ee = (0, f.Rf)(w), [et, en, ea] = (0, f.me)(w, ee), er = Q && Y === f.OH.ACCEPTED, ei = er && et === h.LI.SELECT, el = er && !ei && en.length > 1, es = r.useCallback(e => {
    ea(e), e === y.cd.DESKTOP && k([])
  }, [ea, k]), {
    text: eo,
    onClick: ec
  } = (0, j.Ks)({
    progressState: Y,
    quest: w,
    questContent: I,
    questContentPosition: R,
    questContentRowIndex: A,
    inGiftInventory: true,
    isVideoQuest: X,
    inGameQuest: $,
    sourceQuestContent: D
  }), {
    startingConsoleQuest: ed,
    startConsoleQuest: eu
  } = (0, f.GI)({
    questId: w.id,
    beforeRequest: () => {
      L.startAnimation(), M({
        questId: w.id,
        questContent: I,
        questContentCTA: m.jZ.DEFIBRILLATOR,
        questContentPosition: R,
        questContentRowIndex: A,
        sourceQuestContent: D
      })
    },
    afterRequest: e => {
      L.stopAnimation(), k(e)
    }
  }), em = (null == (P = w.userStatus) ? true : P.claimedAt) != null, {
    launchInGameActivity: ep
  } = (0, f.zB)(w), eh = (0, x.CR)({
    quest: w,
    shortText: true
  }), ex = null;
  return (q && K ? ex = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: G,
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : z ? ex = X ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      icon: c.Oe7,
      text: C.intl.string(C.t.YsCuyF),
      onClick: () => {
        (0, _.openVideoQuestModal)({
          quest: w,
          questContent: I,
          sourceQuestContent: D,
          sourceQuestContentCTA: m.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: eo
    })]
  }) : (0, v.Rt)(w) ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      icon: w.config.features.includes(y.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
      text: eh,
      onClick: () => {
        ep()
      }
    }), (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: eo
    })]
  }) : (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : Q ? Q && K ? ex = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: G,
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : J ? ex = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : Q && W && !em ? ex = ei ? (0, a.jsx)(l.B6, {
    className: S.platformSelectorPrimary,
    isSelected: () => false,
    options: E,
    placeholder: C.intl.string(C.t.drVw4T),
    renderOptionLabel: O,
    renderOptionValue: T,
    select: es,
    serialize: e => {
      switch (e) {
        case y.cd.DESKTOP:
          return C.intl.string(C.t["QXc01+"]);
        case y.cd.CONSOLE:
          return C.intl.string(C.t["8lAfuB"]);
        default:
          return (0, u.vE)(e)
      }
    },
    size: "sm"
  }) : (0, b.$J)(w) && !B && et !== h.LI.DESKTOP ? U ? (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, a.jsx)(o.zx, {
    "data-migration-pending": true,
    color: o.Tt.PRIMARY,
    onClick: eu,
    disabled: ed,
    className: S.button,
    children: (0, a.jsxs)("div", {
      className: S.ctaInner,
      children: [L.render(), C.intl.string(C.t.nPThNb)]
    })
  }) : X ? (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, v.Rt)(w) ? (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      icon: (0, _.getPrimaryCtaIcon)(w),
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: C.intl.string(C.t["9KoPyB"]),
      fullWidth: true
    })
  }) : Q && !W && (ex = H ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: C.intl.string(C.t.V293qn)
    }), (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(w, I, D),
      text: C.intl.string(C.t.vY9GgG)
    })]
  }) : (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      loading: V,
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: eo,
      icon: (0, _.getPrimaryCtaIcon)(w),
      fullWidth: true
    })
  })) : ex = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: C.intl.format(C.t["14o6QY"], {
        expiryDate: F
      }),
      fullWidth: true
    })
  }), null == ex) ? null : (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)("div", {
      className: S.ctaItem,
      children: ex
    }), el && (0, a.jsx)("div", {
      className: S.ctaItem,
      children: (0, a.jsx)(l.B6, {
        className: S.platformSelectorSecondary,
        isSelected: e => {
          switch (et) {
            case h.LI.DESKTOP:
              return e === y.cd.DESKTOP;
            case h.LI.CONSOLE:
              return e === y.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: E,
        placeholder: C.intl.string(C.t.drVw4T),
        renderOptionLabel: O,
        renderOptionValue: T,
        select: es,
        serialize: e => {
          switch (e) {
            case y.cd.DESKTOP:
              return C.intl.string(C.t["QXc01+"]);
            case y.cd.CONSOLE:
              return C.intl.string(C.t["8lAfuB"])
          }
        },
        size: "sm"
      })
    })]
  })
}