/** Chunk was on web.js **/
/** chunk id: 69439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk374415 = require("./374415.jsx"),
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
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179844 = require("./179844.js");
let I = [{
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

function T(e) {
  let t, n, {
    value: i
  } = e;
  switch (i) {
    case y.cd.DESKTOP:
      n = (0, r.jsx)(c.pzj, {}), t = O.intl.string(O.t.QXc019);
      break;
    case y.cd.CONSOLE:
      n = (0, r.jsx)(c.iWm, {}), t = O.intl.string(O.t["8lAfuL"]);
      break;
    default:
      return null
  }
  return (0, r.jsxs)("div", {
    className: v.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function S(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case y.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: v.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(c.pzj, {}), O.intl.string(O.t["g6Dr4+"])]
      });
    case y.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: v.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(c.iWm, {}), O.intl.string(O.t.iyNbj4)]
      });
    default:
      return (0, d.vE)(e[0].value)
  }
}

function A(e) {
  var t, n, A, C;
  let {
    quest: N,
    questContent: R,
    onReceiveErrorHints: P,
    contentPosition: w,
    rowIndex: D,
    sourceQuestContent: x
  } = e, L = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), j = (0, b.g2)({
    useReducedMotion: L
  }), k = (0, f.O5)(), M = (0, p._s)({
    quest: N
  }), U = (0, p.z)(N), G = (0, p.B6)(N.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: B,
    isEnrolling: Z,
    isQuestEnrollmentBlocked: F
  } = (0, a.cj)([h.Z], () => ({
    isClaiming: h.Z.isClaimingReward(N.id) || h.Z.isFetchingRewardCode(N.id),
    isEnrolling: h.Z.isEnrolling(N.id),
    isQuestEnrollmentBlocked: null != h.Z.questEnrollmentBlockedUntil
  })), V = (null == (t = N.userStatus) ? true : t.enrolledAt) != null, H = (null == (n = N.userStatus) ? true : n.completedAt) != null, Y = H && (null == (A = N.userStatus) ? true : A.claimedAt) == null, W = (0, _.iQ)(N), K = !(0, _.zi)(N), z = (0, p._Q)(N), q = (0, _.Xv)(N.config), X = (0, _.PB)(N), Q = (0, _.HJ)(N), J = (0, _.Vl)(N), $ = (0, p.Rf)(N), [ee, et, en] = (0, p.me)(N, $), er = K && z === p.OH.ACCEPTED, ei = er && ee === m.LI.SELECT, ea = er && !ei && et.length > 1, eo = i.useCallback(e => {
    en(e), e === y.cd.DESKTOP && P([])
  }, [en, P]), {
    text: es,
    onClick: el
  } = (0, b.Ks)({
    progressState: z,
    quest: N,
    questContent: R,
    isCollectibleQuest: q,
    questContentPosition: w,
    questContentRowIndex: D,
    inGiftInventory: true,
    isVideoQuest: X,
    inGameQuest: J,
    sourceQuestContent: x
  }), {
    startingConsoleQuest: ec,
    startConsoleQuest: eu
  } = (0, p.GI)({
    questId: N.id,
    beforeRequest: () => {
      j.startAnimation(), k({
        questId: N.id,
        questContent: R,
        questContentCTA: f.jZ.DEFIBRILLATOR,
        questContentPosition: w,
        questContentRowIndex: D,
        sourceQuestContent: x
      })
    },
    afterRequest: e => {
      j.stopAnimation(), P(e)
    }
  }), ed = (0, g.f)({
    location: y.dr.QUEST_HOME_DESKTOP,
    questFeatures: N.config.features
  }), ef = (null == (C = N.userStatus) ? true : C.claimedAt) != null, e_ = V && !ef, ep = null;
  return (W && Y ? ep = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      loading: B,
      onClick: null != el ? el : true,
      text: es,
      fullWidth: true
    })
  }) : H ? ep = X ? (0, r.jsxs)(s.h, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.z, {
      variant: "secondary",
      icon: c.Oe7,
      text: O.intl.string(O.t.YsCuyM),
      onClick: () => {
        (0, E.openVideoQuestModal)({
          quest: N,
          questContent: R,
          sourceQuestContent: x,
          sourceQuestContentCTA: f.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(o.z, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: es
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: es,
      fullWidth: true
    })
  }) : K ? K && Y ? ep = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      loading: B,
      onClick: null != el ? el : true,
      text: es,
      fullWidth: true
    })
  }) : Q ? ep = ed ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      loading: Z,
      onClick: null != el ? el : true,
      text: es,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "secondary",
      disabled: true,
      text: O.intl.string(O.t.BkZhUF),
      fullWidth: true
    })
  }) : K && e_ ? ep = ei ? (0, r.jsx)(c.PhF, {
    className: v.platformSelectorPrimary,
    isSelected: () => false,
    options: I,
    placeholder: O.intl.string(O.t.drVw4e),
    renderOptionLabel: T,
    renderOptionValue: S,
    select: eo,
    serialize: e => {
      switch (e) {
        case y.cd.DESKTOP:
          return O.intl.string(O.t.QXc019);
        case y.cd.CONSOLE:
          return O.intl.string(O.t["8lAfuL"]);
        default:
          return (0, d.vE)(e)
      }
    }
  }) : (0, _.$J)(N) && !U && ee !== m.LI.DESKTOP ? M ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "secondary",
      onClick: null != el ? el : true,
      text: es,
      fullWidth: true
    })
  }) : (0, r.jsx)(l.zx, {
    "data-migration-pending": true,
    color: l.Tt.PRIMARY,
    onClick: eu,
    disabled: ec,
    className: v.button,
    children: (0, r.jsxs)("div", {
      className: v.ctaInner,
      children: [j.render(), O.intl.string(O.t.nPThNT)]
    })
  }) : X || J && N.config.features.includes(y.S7.START_QUEST_CTA) ? (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      onClick: null != el ? el : true,
      text: es,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "secondary",
      disabled: true,
      text: O.intl.string(O.t["9KoPyM"]),
      fullWidth: true
    })
  }) : K && !V && (ep = F ? (0, r.jsxs)(s.h, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(o.z, {
      variant: "secondary",
      disabled: true,
      text: O.intl.string(O.t.V293qq)
    }), (0, r.jsx)(o.z, {
      variant: "primary",
      onClick: () => (0, E.openQuestMinorEnrollmentBlockModal)(N, R, x),
      text: O.intl.string(O.t.vY9GgI)
    })]
  }) : (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      loading: Z,
      variant: "primary",
      onClick: null != el ? el : true,
      text: es,
      fullWidth: true
    })
  })) : ep = (0, r.jsx)("div", {
    className: v.button,
    children: (0, r.jsx)(o.z, {
      variant: "secondary",
      disabled: true,
      text: O.intl.format(O.t["14o6QU"], {
        expiryDate: G
      }),
      fullWidth: true
    })
  }), null == ep) ? null : (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)("div", {
      className: v.ctaItem,
      children: ep
    }), ea && (0, r.jsx)("div", {
      className: v.ctaItem,
      children: (0, r.jsx)(c.PhF, {
        className: v.platformSelectorSecondary,
        isSelected: e => {
          switch (ee) {
            case m.LI.DESKTOP:
              return e === y.cd.DESKTOP;
            case m.LI.CONSOLE:
              return e === y.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: I,
        placeholder: O.intl.string(O.t.drVw4e),
        renderOptionLabel: T,
        renderOptionValue: S,
        select: eo,
        serialize: e => {
          switch (e) {
            case y.cd.DESKTOP:
              return O.intl.string(O.t.QXc019);
            case y.cd.CONSOLE:
              return O.intl.string(O.t["8lAfuL"])
          }
        }
      })
    })]
  })
}