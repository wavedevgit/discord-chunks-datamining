/** Chunk was on 22979 **/
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
  Chunk489229 = require("./489229.js");
let E = [{
  value: Chunk324805.cd.DESKTOP,
  get label() {
    return _.intl.string(_.t["QXc01+"])
  }
}, {
  value: Chunk324805.cd.CONSOLE,
  get label() {
    return _.intl.string(_.t["8lAfuB"])
  }
}];

function T(e) {
  let t, n, {
    value: r
  } = e;
  switch (r) {
    case C.cd.DESKTOP:
      n = (0, a.jsx)(c.pzj, {}), t = _.intl.string(_.t["QXc01+"]);
      break;
    case C.cd.CONSOLE:
      n = (0, a.jsx)(c.iWm, {}), t = _.intl.string(_.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, a.jsxs)("div", {
    className: S.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function O(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case C.cd.DESKTOP:
      return (0, a.jsxs)("span", {
        className: S.platformSelectorPrimaryLabel,
        children: [(0, a.jsx)(c.pzj, {}), _.intl.string(_.t.g6Dr44)]
      });
    case C.cd.CONSOLE:
      return (0, a.jsxs)("span", {
        className: S.platformSelectorPrimaryLabel,
        children: [(0, a.jsx)(c.iWm, {}), _.intl.string(_.t.iyNbj5)]
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
  }), M = (0, m.O5)(), U = (0, x._s)({
    quest: w
  }), B = (0, x.z)(w), F = (0, x.B6)(w.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: G,
    isEnrolling: V,
    isQuestEnrollmentBlocked: z
  } = (0, i.cj)([p.Z], () => ({
    isClaiming: p.Z.isClaimingReward(w.id) || p.Z.isFetchingRewardCode(w.id),
    isEnrolling: p.Z.isEnrolling(w.id),
    isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil
  })), H = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, W = (null == (n = w.userStatus) ? true : n.completedAt) != null, K = W && (null == (N = w.userStatus) ? true : N.claimedAt) == null, q = (0, b.iQ)(w), Y = !(0, b.zi)(w), Q = (0, x._Q)(w), X = (0, g.PB)(w), J = (0, g.HJ)(w), $ = (0, g.Vl)(w), ee = (0, x.Rf)(w), [et, en, ea] = (0, x.me)(w, ee), er = Y && Q === x.OH.ACCEPTED, ei = er && et === h.LI.SELECT, el = er && !ei && en.length > 1, es = r.useCallback(e => {
    ea(e), e === C.cd.DESKTOP && k([])
  }, [ea, k]), {
    text: eo,
    onClick: ec
  } = (0, j.Ks)({
    progressState: Q,
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
  } = (0, x.GI)({
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
  } = (0, x.zB)(w), eh = (0, f.CR)({
    quest: w,
    shortText: true
  }), ef = null;
  return (q && K ? ef = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: G,
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : W ? ef = X ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      icon: c.Oe7,
      text: _.intl.string(_.t.YsCuyF),
      onClick: () => {
        (0, y.openVideoQuestModal)({
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
      icon: w.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
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
  }) : Y ? Y && K ? ef = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: G,
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : J ? ef = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : Y && H && !em ? ef = ei ? (0, a.jsx)(l.B6, {
    className: S.platformSelectorPrimary,
    isSelected: () => false,
    options: E,
    placeholder: _.intl.string(_.t.drVw4T),
    renderOptionLabel: T,
    renderOptionValue: O,
    select: es,
    serialize: e => {
      switch (e) {
        case C.cd.DESKTOP:
          return _.intl.string(_.t["QXc01+"]);
        case C.cd.CONSOLE:
          return _.intl.string(_.t["8lAfuB"]);
        default:
          return (0, u.vE)(e)
      }
    },
    size: "sm"
  }) : (0, g.$J)(w) && !B && et !== h.LI.DESKTOP ? U ? (0, a.jsx)("div", {
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
      children: [L.render(), _.intl.string(_.t.nPThNb)]
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
      icon: (0, y.getPrimaryCtaIcon)(w),
      onClick: null != ec ? ec : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: _.intl.string(_.t["9KoPyB"]),
      fullWidth: true
    })
  }) : Y && !H && (ef = z ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: _.intl.string(_.t.V293qn)
    }), (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: () => (0, y.openQuestMinorEnrollmentBlockModal)(w, I, D),
      text: _.intl.string(_.t.vY9GgG)
    })]
  }) : (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      loading: V,
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: eo,
      icon: (0, y.getPrimaryCtaIcon)(w),
      fullWidth: true
    })
  })) : ef = (0, a.jsx)("div", {
    className: S.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: _.intl.format(_.t["14o6QY"], {
        expiryDate: F
      }),
      fullWidth: true
    })
  }), null == ef) ? null : (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)("div", {
      className: S.ctaItem,
      children: ef
    }), el && (0, a.jsx)("div", {
      className: S.ctaItem,
      children: (0, a.jsx)(l.B6, {
        className: S.platformSelectorSecondary,
        isSelected: e => {
          switch (et) {
            case h.LI.DESKTOP:
              return e === C.cd.DESKTOP;
            case h.LI.CONSOLE:
              return e === C.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: E,
        placeholder: _.intl.string(_.t.drVw4T),
        renderOptionLabel: T,
        renderOptionValue: O,
        select: es,
        serialize: e => {
          switch (e) {
            case C.cd.DESKTOP:
              return _.intl.string(_.t["QXc01+"]);
            case C.cd.CONSOLE:
              return _.intl.string(_.t["8lAfuB"])
          }
        },
        size: "sm"
      })
    })]
  })
}