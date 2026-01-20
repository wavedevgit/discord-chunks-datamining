/** Chunk was on 22979 **/
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
  Chunk937797 = require("./937797.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk504411 = require("./504411.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk489229 = require("./489229.js");
let O = [{
  value: Chunk324805.cd.DESKTOP,
  get label() {
    return E.intl.string(E.t["QXc01+"])
  }
}, {
  value: Chunk324805.cd.CONSOLE,
  get label() {
    return E.intl.string(E.t["8lAfuB"])
  }
}];

function N(e) {
  let t, n, {
    value: r
  } = e;
  switch (r) {
    case S.cd.DESKTOP:
      n = (0, a.jsx)(c.pzj, {}), t = E.intl.string(E.t["QXc01+"]);
      break;
    case S.cd.CONSOLE:
      n = (0, a.jsx)(c.iWm, {}), t = E.intl.string(E.t["8lAfuB"]);
      break;
    default:
      return null
  }
  return (0, a.jsxs)("div", {
    className: T.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function P(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case S.cd.DESKTOP:
      return (0, a.jsxs)("span", {
        className: T.platformSelectorPrimaryLabel,
        children: [(0, a.jsx)(c.pzj, {}), E.intl.string(E.t.g6Dr44)]
      });
    case S.cd.CONSOLE:
      return (0, a.jsxs)("span", {
        className: T.platformSelectorPrimaryLabel,
        children: [(0, a.jsx)(c.iWm, {}), E.intl.string(E.t.iyNbj5)]
      });
    default:
      return (0, u.vE)(e[0].value)
  }
}

function w(e) {
  var t, n, w, I;
  let {
    quest: k,
    questContent: R,
    onReceiveErrorHints: A,
    contentPosition: Z,
    rowIndex: D,
    sourceQuestContent: M
  } = e, L = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), U = (0, y.g2)({
    useReducedMotion: L
  }), B = (0, m.O5)(), F = (0, x._s)({
    quest: k
  }), G = (0, x.z)(k), V = (0, x.B6)(k.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: W,
    isEnrolling: z,
    isQuestEnrollmentBlocked: H
  } = (0, i.cj)([p.Z], () => ({
    isClaiming: p.Z.isClaimingReward(k.id) || p.Z.isFetchingRewardCode(k.id),
    isEnrolling: p.Z.isEnrolling(k.id),
    isQuestEnrollmentBlocked: null != p.Z.questEnrollmentBlockedUntil
  })), q = (null == (t = k.userStatus) ? true : t.enrolledAt) != null, K = (null == (n = k.userStatus) ? true : n.completedAt) != null, Q = K && (null == (w = k.userStatus) ? true : w.claimedAt) == null, Y = (0, g.iQ)(k), X = !(0, g.zi)(k), J = (0, x._Q)(k), $ = (0, v.PB)(k), ee = (0, v.HJ)(k), et = (0, v.Vl)(k), en = (0, x.Rf)(k), [ea, er, ei] = (0, x.me)(k, en), el = X && J === x.OH.ACCEPTED, es = el && ea === h.LI.SELECT, eo = el && !es && er.length > 1, ec = f.Cx.useConfig({
    location: S.dr.QUEST_HOME_DESKTOP
  }).enabled, ed = r.useCallback(e => {
    ei(e), e === S.cd.DESKTOP && A([])
  }, [ei, A]), {
    text: eu,
    onClick: em
  } = (0, y.Ks)({
    progressState: J,
    quest: k,
    questContent: R,
    questContentPosition: Z,
    questContentRowIndex: D,
    inGiftInventory: true,
    isVideoQuest: $,
    inGameQuest: et,
    sourceQuestContent: M
  }), {
    startingConsoleQuest: ep,
    startConsoleQuest: eh
  } = (0, x.GI)({
    questId: k.id,
    beforeRequest: () => {
      U.startAnimation(), B({
        questId: k.id,
        questContent: R,
        questContentCTA: m.jZ.DEFIBRILLATOR,
        questContentPosition: Z,
        questContentRowIndex: D,
        sourceQuestContent: M
      })
    },
    afterRequest: e => {
      U.stopAnimation(), A(e)
    }
  }), ef = (null == (I = k.userStatus) ? true : I.claimedAt) != null, {
    launchInGameActivity: eb
  } = (0, x.zB)(k), ex = (0, b.CR)({
    quest: k,
    shortText: true
  }), eg = null;
  return (Y && Q ? eg = (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: W,
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : K ? eg = $ ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      icon: c.Oe7,
      text: E.intl.string(E.t.YsCuyF),
      onClick: () => {
        (0, _.openVideoQuestModal)({
          quest: k,
          questContent: R,
          sourceQuestContent: M,
          sourceQuestContentCTA: m.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu
    })]
  }) : (0, j.Rt)(k) ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      icon: k.config.features.includes(S.S7.CLOUD_GAMING_ACTIVITY) ? c.v3n : c.iWm,
      text: ex,
      onClick: () => {
        eb()
      }
    }), (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu
    })]
  }) : (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : X ? X && Q ? eg = (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: W,
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : ee ? eg = ec && !q ? (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(C.Z, {
      quest: k,
      analyticsCtxQuestContent: R,
      analyticsCtxSourceQuestContent: M,
      analyticsCtxQuestContentPosition: Z
    })
  }) : (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      loading: z,
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : X && q && !ef ? eg = es ? (0, a.jsx)(l.B6, {
    className: T.platformSelectorPrimary,
    isSelected: () => false,
    options: O,
    placeholder: E.intl.string(E.t.drVw4T),
    renderOptionLabel: N,
    renderOptionValue: P,
    select: ed,
    serialize: e => {
      switch (e) {
        case S.cd.DESKTOP:
          return E.intl.string(E.t["QXc01+"]);
        case S.cd.CONSOLE:
          return E.intl.string(E.t["8lAfuB"]);
        default:
          return (0, u.vE)(e)
      }
    },
    size: "sm",
    "data-migration-pending": true
  }) : (0, v.$J)(k) && !G && ea !== h.LI.DESKTOP ? F ? (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : (0, a.jsx)(o.zx, {
    "data-migration-pending": true,
    color: o.Tt.PRIMARY,
    onClick: eh,
    disabled: ep,
    className: T.button,
    children: (0, a.jsxs)("div", {
      className: T.ctaInner,
      children: [U.render(), E.intl.string(E.t.nPThNb)]
    })
  }) : $ ? (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : (0, j.Rt)(k) ? (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "primary",
      icon: (0, _.getPrimaryCtaIcon)(k),
      onClick: null != em ? em : true,
      text: eu,
      fullWidth: true
    })
  }) : (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: E.intl.string(E.t["9KoPyB"]),
      fullWidth: true
    })
  }) : X && !q && (eg = H ? (0, a.jsxs)(s.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: E.intl.string(E.t.V293qn)
    }), (0, a.jsx)(s.zxk, {
      variant: "primary",
      onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(k, R, M),
      text: E.intl.string(E.t.vY9GgG)
    })]
  }) : (0, a.jsx)("div", {
    className: T.button,
    children: ec ? (0, a.jsx)(C.Z, {
      quest: k,
      analyticsCtxQuestContent: R,
      analyticsCtxSourceQuestContent: M,
      analyticsCtxQuestContentPosition: Z
    }) : (0, a.jsx)(s.zxk, {
      loading: z,
      variant: "primary",
      onClick: null != em ? em : true,
      text: eu,
      icon: (0, _.getPrimaryCtaIcon)(k),
      fullWidth: true
    })
  })) : eg = (0, a.jsx)("div", {
    className: T.button,
    children: (0, a.jsx)(s.zxk, {
      variant: "secondary",
      disabled: true,
      text: E.intl.format(E.t["14o6QY"], {
        expiryDate: V
      }),
      fullWidth: true
    })
  }), null == eg) ? null : (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)("div", {
      className: T.ctaItem,
      children: eg
    }), eo && (0, a.jsx)("div", {
      className: T.ctaItem,
      children: (0, a.jsx)(l.B6, {
        className: T.platformSelectorSecondary,
        isSelected: e => {
          switch (ea) {
            case h.LI.DESKTOP:
              return e === S.cd.DESKTOP;
            case h.LI.CONSOLE:
              return e === S.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: O,
        placeholder: E.intl.string(E.t.drVw4T),
        renderOptionLabel: N,
        renderOptionValue: P,
        select: ed,
        serialize: e => {
          switch (e) {
            case S.cd.DESKTOP:
              return E.intl.string(E.t["QXc01+"]);
            case S.cd.CONSOLE:
              return E.intl.string(E.t["8lAfuB"])
          }
        },
        size: "sm",
        "data-migration-pending": true
      })
    })]
  })
}