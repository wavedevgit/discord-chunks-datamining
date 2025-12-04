/** Chunk was on 83615 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
let O = [{
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

function S(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case C.cd.DESKTOP:
      n = (0, r.jsx)(c.pzj, {}), t = y.intl.string(y.t["QXc01+"]);
      break;
    case C.cd.CONSOLE:
      n = (0, r.jsx)(c.iWm, {}), t = y.intl.string(y.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, r.jsxs)("div", {
    className: E.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function T(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case C.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: E.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(c.pzj, {}), y.intl.string(y.t.g6Dr44)]
      });
    case C.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: E.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(c.iWm, {}), y.intl.string(y.t.iyNbj5)]
      });
    default:
      return (0, u.vE)(e[0].value)
  }
}

function w(e) {
  var t, n, w, P;
  let {
    quest: N,
    questContent: R,
    onReceiveErrorHints: A,
    contentPosition: B,
    rowIndex: k,
    sourceQuestContent: I
  } = e, D = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), q = (0, j.g2)({
    useReducedMotion: D
  }), L = (0, p.O5)(), Q = (0, h._s)({
    quest: N
  }), V = (0, h.z)(N), M = (0, h.B6)(N.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: W,
    isEnrolling: Z,
    isQuestEnrollmentBlocked: H
  } = (0, o.cj)([m.Z], () => ({
    isClaiming: m.Z.isClaimingReward(N.id) || m.Z.isFetchingRewardCode(N.id),
    isEnrolling: m.Z.isEnrolling(N.id),
    isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil
  })), U = (null == (t = N.userStatus) ? true : t.enrolledAt) != null, z = (null == (n = N.userStatus) ? true : n.completedAt) != null, F = z && (null == (w = N.userStatus) ? true : w.claimedAt) == null, G = (0, x.iQ)(N), K = !(0, x.zi)(N), X = (0, h._Q)(N), Y = (0, _.PB)(N), J = (0, _.HJ)(N), $ = (0, _.Vl)(N), ee = (0, h.Rf)(N), [et, en, er] = (0, h.me)(N, ee), es = K && X === h.OH.ACCEPTED, eo = es && et === g.LI.SELECT, ea = es && !eo && en.length > 1, ei = s.useCallback(e => {
    er(e), e === C.cd.DESKTOP && A([])
  }, [er, A]), {
    text: el,
    onClick: ec
  } = (0, j.Ks)({
    progressState: X,
    quest: N,
    questContent: R,
    questContentPosition: B,
    questContentRowIndex: k,
    inGiftInventory: true,
    isVideoQuest: Y,
    inGameQuest: $,
    sourceQuestContent: I
  }), {
    startingConsoleQuest: ed,
    startConsoleQuest: eu
  } = (0, h.GI)({
    questId: N.id,
    beforeRequest: () => {
      q.startAnimation(), L({
        questId: N.id,
        questContent: R,
        questContentCTA: p.jZ.DEFIBRILLATOR,
        questContentPosition: B,
        questContentRowIndex: k,
        sourceQuestContent: I
      })
    },
    afterRequest: e => {
      q.stopAnimation(), A(e)
    }
  }), ep = (null == (P = N.userStatus) ? true : P.claimedAt) != null, {
    launchInGameActivity: em
  } = (0, h.zB)(N), eg = (0, f.CR)({
    quest: N,
    shortText: true
  }), ef = null;
  return (G && F ? ef = (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "primary",
      loading: W,
      onClick: null != ec ? ec : true,
      text: el,
      fullWidth: true
    })
  }) : z ? ef = Y ? (0, r.jsxs)(i.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(i.zxk, {
      variant: "secondary",
      icon: c.Oe7,
      text: y.intl.string(y.t.YsCuyF),
      onClick: () => {
        (0, v.openVideoQuestModal)({
          quest: N,
          questContent: R,
          sourceQuestContent: I,
          sourceQuestContentCTA: p.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: el
    })]
  }) : (0, b.Rt)(N) ? (0, r.jsxs)(i.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(i.zxk, {
      variant: "secondary",
      icon: N.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
      text: eg,
      onClick: () => {
        em()
      }
    }), (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: el
    })]
  }) : (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: el,
      fullWidth: true
    })
  }) : K ? K && F ? ef = (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "primary",
      loading: W,
      onClick: null != ec ? ec : true,
      text: el,
      fullWidth: true
    })
  }) : J ? ef = (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "primary",
      loading: Z,
      onClick: null != ec ? ec : true,
      text: el,
      fullWidth: true
    })
  }) : K && U && !ep ? ef = eo ? (0, r.jsx)(a.B6, {
    className: E.platformSelectorPrimary,
    isSelected: () => false,
    options: O,
    placeholder: y.intl.string(y.t.drVw4T),
    renderOptionLabel: S,
    renderOptionValue: T,
    select: ei,
    serialize: e => {
      switch (e) {
        case C.cd.DESKTOP:
          return y.intl.string(y.t["QXc01+"]);
        case C.cd.CONSOLE:
          return y.intl.string(y.t["8lAfuB"]);
        default:
          return (0, u.vE)(e)
      }
    },
    size: "sm"
  }) : (0, _.$J)(N) && !V && et !== g.LI.DESKTOP ? Q ? (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "secondary",
      onClick: null != ec ? ec : true,
      text: el,
      fullWidth: true
    })
  }) : (0, r.jsx)(l.zx, {
    "data-migration-pending": true,
    color: l.Tt.PRIMARY,
    onClick: eu,
    disabled: ed,
    className: E.button,
    children: (0, r.jsxs)("div", {
      className: E.ctaInner,
      children: [q.render(), y.intl.string(y.t.nPThNb)]
    })
  }) : Y ? (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: el,
      fullWidth: true
    })
  }) : (0, b.Rt)(N) ? (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "primary",
      icon: (0, v.getPrimaryCtaIcon)(N),
      onClick: null != ec ? ec : true,
      text: el,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "secondary",
      disabled: true,
      text: y.intl.string(y.t["9KoPyB"]),
      fullWidth: true
    })
  }) : K && !U && (ef = H ? (0, r.jsxs)(i.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(i.zxk, {
      variant: "secondary",
      disabled: true,
      text: y.intl.string(y.t.V293qn)
    }), (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(N, R, I),
      text: y.intl.string(y.t.vY9GgG)
    })]
  }) : (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      loading: Z,
      variant: "primary",
      onClick: null != ec ? ec : true,
      text: el,
      icon: (0, v.getPrimaryCtaIcon)(N),
      fullWidth: true
    })
  })) : ef = (0, r.jsx)("div", {
    className: E.button,
    children: (0, r.jsx)(i.zxk, {
      variant: "secondary",
      disabled: true,
      text: y.intl.format(y.t["14o6QY"], {
        expiryDate: M
      }),
      fullWidth: true
    })
  }), null == ef) ? null : (0, r.jsxs)("div", {
    className: E.container,
    children: [(0, r.jsx)("div", {
      className: E.ctaItem,
      children: ef
    }), ea && (0, r.jsx)("div", {
      className: E.ctaItem,
      children: (0, r.jsx)(a.B6, {
        className: E.platformSelectorSecondary,
        isSelected: e => {
          switch (et) {
            case g.LI.DESKTOP:
              return e === C.cd.DESKTOP;
            case g.LI.CONSOLE:
              return e === C.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: O,
        placeholder: y.intl.string(y.t.drVw4T),
        renderOptionLabel: S,
        renderOptionValue: T,
        select: ei,
        serialize: e => {
          switch (e) {
            case C.cd.DESKTOP:
              return y.intl.string(y.t["QXc01+"]);
            case C.cd.CONSOLE:
              return y.intl.string(y.t["8lAfuB"])
          }
        },
        size: "sm"
      })
    })]
  })
}