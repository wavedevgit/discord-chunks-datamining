/** Chunk was on 83615 **/
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
  Chunk313481 = require("./313481.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk373370 = require("./373370.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk924304 = require("./924304.js");
let C = [{
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

function y(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case b.cd.DESKTOP:
      n = (0, r.jsx)(l.pzj, {}), t = j.intl.string(j.t["QXc01+"]);
      break;
    case b.cd.CONSOLE:
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
    case b.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: v.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.pzj, {}), j.intl.string(j.t.g6Dr44)]
      });
    case b.cd.CONSOLE:
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
  } = e, B = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), k = (0, x.g2)({
    useReducedMotion: B
  }), I = (0, u.O5)(), D = (0, p._s)({
    quest: T
  }), q = (0, p.z)(T), L = (0, p.B6)(T.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: Q,
    isEnrolling: V,
    isQuestEnrollmentBlocked: M
  } = (0, o.cj)([m.Z], () => ({
    isClaiming: m.Z.isClaimingReward(T.id) || m.Z.isFetchingRewardCode(T.id),
    isEnrolling: m.Z.isEnrolling(T.id),
    isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil
  })), Z = (null == (t = T.userStatus) ? true : t.enrolledAt) != null, W = (null == (n = T.userStatus) ? true : n.completedAt) != null, H = W && (null == (O = T.userStatus) ? true : O.claimedAt) == null, U = (0, f.iQ)(T), F = !(0, f.zi)(T), G = (0, p._Q)(T), z = (0, f.PB)(T), K = (0, f.HJ)(T), X = (0, f.Vl)(T), Y = (0, p.Rf)(T), [J, $, ee] = (0, p.me)(T, Y), et = F && G === p.OH.ACCEPTED, en = et && J === g.LI.SELECT, er = et && !en && $.length > 1, es = s.useCallback(e => {
    ee(e), e === b.cd.DESKTOP && P([])
  }, [ee, P]), {
    text: eo,
    onClick: ea
  } = (0, x.Ks)({
    progressState: G,
    quest: T,
    questContent: w,
    questContentPosition: N,
    questContentRowIndex: A,
    inGiftInventory: true,
    isVideoQuest: z,
    inGameQuest: X,
    sourceQuestContent: R
  }), {
    startingConsoleQuest: ei,
    startConsoleQuest: el
  } = (0, p.GI)({
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
  }), ec = s.useMemo(() => T.config.features.includes(b.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [T.config.features]), ed = (null == (S = T.userStatus) ? true : S.claimedAt) != null, {
    launchInGameActivity: eu
  } = (0, p.zB)(T), ep = (0, h.CR)({
    quest: T,
    shortText: true
  }), em = null;
  return (U && H ? em = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != ea ? ea : true,
      text: eo,
      fullWidth: true
    })
  }) : W ? em = z ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      icon: l.Oe7,
      text: j.intl.string(j.t.YsCuyF),
      onClick: () => {
        (0, _.openVideoQuestModal)({
          quest: T,
          questContent: w,
          sourceQuestContent: R,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ea ? ea : true,
      text: eo
    })]
  }) : (0, f.Rt)(T) ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : l.iWm,
      text: ep,
      onClick: () => {
        eu()
      }
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ea ? ea : true,
      text: eo
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ea ? ea : true,
      text: eo,
      fullWidth: true
    })
  }) : F ? F && H ? em = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != ea ? ea : true,
      text: eo,
      fullWidth: true
    })
  }) : K ? em = ec ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != ea ? ea : true,
      text: eo,
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
  }) : F && Z && !ed ? em = en ? (0, r.jsx)(l.PhF, {
    className: v.platformSelectorPrimary,
    isSelected: () => false,
    options: C,
    placeholder: j.intl.string(j.t.drVw4T),
    renderOptionLabel: y,
    renderOptionValue: E,
    select: es,
    serialize: e => {
      switch (e) {
        case b.cd.DESKTOP:
          return j.intl.string(j.t["QXc01+"]);
        case b.cd.CONSOLE:
          return j.intl.string(j.t["8lAfuB"]);
        default:
          return (0, d.vE)(e)
      }
    },
    size: "sm"
  }) : (0, f.$J)(T) && !q && J !== g.LI.DESKTOP ? D ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      onClick: null != ea ? ea : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, r.jsx)(i.zx, {
    "data-migration-pending": true,
    color: i.Tt.PRIMARY,
    onClick: el,
    disabled: ei,
    className: v.button,
    children: (0, r.jsxs)("div", {
      className: v.ctaInner,
      children: [k.render(), j.intl.string(j.t.nPThNb)]
    })
  }) : z ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ea ? ea : true,
      text: eo,
      fullWidth: true
    })
  }) : (0, f.Rt)(T) ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      icon: (0, _.getPrimaryCtaIcon)(T),
      onClick: null != ea ? ea : true,
      text: eo,
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
  }) : F && !Z && (em = M ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.string(j.t.V293qn)
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: () => (0, _.openQuestMinorEnrollmentBlockModal)(T, w, R),
      text: j.intl.string(j.t.vY9GgG)
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      loading: V,
      variant: "primary",
      onClick: null != ea ? ea : true,
      text: eo,
      icon: (0, _.getPrimaryCtaIcon)(T),
      fullWidth: true
    })
  })) : em = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: j.intl.format(j.t["14o6QY"], {
        expiryDate: L
      }),
      fullWidth: true
    })
  }), null == em) ? null : (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)("div", {
      className: v.ctaItem,
      children: em
    }), er && (0, r.jsx)("div", {
      className: v.ctaItem,
      children: (0, r.jsx)(l.PhF, {
        className: v.platformSelectorSecondary,
        isSelected: e => {
          switch (J) {
            case g.LI.DESKTOP:
              return e === b.cd.DESKTOP;
            case g.LI.CONSOLE:
              return e === b.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: C,
        placeholder: j.intl.string(j.t.drVw4T),
        renderOptionLabel: y,
        renderOptionValue: E,
        select: es,
        serialize: e => {
          switch (e) {
            case b.cd.DESKTOP:
              return j.intl.string(j.t["QXc01+"]);
            case b.cd.CONSOLE:
              return j.intl.string(j.t["8lAfuB"])
          }
        },
        size: "sm"
      })
    })]
  })
}