/** Chunk was on 17013 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk924304 = require("./924304.js");
let C = [{
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

function y(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case b.cd.DESKTOP:
      n = (0, r.jsx)(l.pzj, {}), t = v.intl.string(v.t.QXc019);
      break;
    case b.cd.CONSOLE:
      n = (0, r.jsx)(l.iWm, {}), t = v.intl.string(v.t["8lAfuL"]);
      break;
    default:
      return null
  }
  return (0, r.jsxs)("div", {
    className: j.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function E(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case b.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: j.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.pzj, {}), v.intl.string(v.t["g6Dr4+"])]
      });
    case b.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: j.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(l.iWm, {}), v.intl.string(v.t.iyNbj4)]
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
  } = e, B = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), k = (0, _.g2)({
    useReducedMotion: B
  }), I = (0, u.O5)(), q = (0, m._s)({
    quest: T
  }), D = (0, m.z)(T), L = (0, m.B6)(T.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: V,
    isEnrolling: Q,
    isQuestEnrollmentBlocked: M
  } = (0, o.cj)([g.Z], () => ({
    isClaiming: g.Z.isClaimingReward(T.id) || g.Z.isFetchingRewardCode(T.id),
    isEnrolling: g.Z.isEnrolling(T.id),
    isQuestEnrollmentBlocked: null != g.Z.questEnrollmentBlockedUntil
  })), Z = (null == (t = T.userStatus) ? true : t.enrolledAt) != null, W = (null == (n = T.userStatus) ? true : n.completedAt) != null, U = W && (null == (O = T.userStatus) ? true : O.claimedAt) == null, H = (0, p.iQ)(T), F = !(0, p.zi)(T), X = (0, m._Q)(T), z = (0, p.Xv)(T.config), G = (0, p.PB)(T), K = (0, p.HJ)(T), Y = (0, p.Vl)(T), J = (0, m.Rf)(T), [$, ee, et] = (0, m.me)(T, J), en = F && X === m.OH.ACCEPTED, er = en && $ === f.LI.SELECT, es = en && !er && ee.length > 1, eo = s.useCallback(e => {
    et(e), e === b.cd.DESKTOP && P([])
  }, [et, P]), {
    text: ea,
    onClick: ei
  } = (0, _.Ks)({
    progressState: X,
    quest: T,
    questContent: w,
    isCollectibleQuest: z,
    questContentPosition: N,
    questContentRowIndex: A,
    inGiftInventory: true,
    isVideoQuest: G,
    inGameQuest: Y,
    sourceQuestContent: R
  }), {
    startingConsoleQuest: el,
    startConsoleQuest: ec
  } = (0, m.GI)({
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
  }), ed = (0, h.f)({
    location: b.dr.QUEST_HOME_DESKTOP,
    questFeatures: T.config.features
  }), eu = (null == (S = T.userStatus) ? true : S.claimedAt) != null, ep = null;
  return (H && U ? ep = (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : W ? ep = G ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      icon: l.Oe7,
      text: v.intl.string(v.t.YsCuyM),
      onClick: () => {
        (0, x.openVideoQuestModal)({
          quest: T,
          questContent: w,
          sourceQuestContent: R,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea
    })]
  }) : (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : F ? F && U ? ep = (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: V,
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : K ? ep = ed ? (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      loading: Q,
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.string(v.t.BkZhUF),
      fullWidth: true
    })
  }) : F && Z && !eu ? ep = er ? (0, r.jsx)(l.PhF, {
    className: j.platformSelectorPrimary,
    isSelected: () => false,
    options: C,
    placeholder: v.intl.string(v.t.drVw4e),
    renderOptionLabel: y,
    renderOptionValue: E,
    select: eo,
    serialize: e => {
      switch (e) {
        case b.cd.DESKTOP:
          return v.intl.string(v.t.QXc019);
        case b.cd.CONSOLE:
          return v.intl.string(v.t["8lAfuL"]);
        default:
          return (0, d.vE)(e)
      }
    },
    size: "sm"
  }) : (0, p.$J)(T) && !D && $ !== f.LI.DESKTOP ? q ? (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : (0, r.jsx)(i.zx, {
    "data-migration-pending": true,
    color: i.Tt.PRIMARY,
    onClick: ec,
    disabled: el,
    className: j.button,
    children: (0, r.jsxs)("div", {
      className: j.ctaInner,
      children: [k.render(), v.intl.string(v.t.nPThNT)]
    })
  }) : G ? (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : (0, p.Rt)(T) ? (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : true,
      onClick: null != ei ? ei : true,
      text: ea,
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.string(v.t["9KoPyM"]),
      fullWidth: true
    })
  }) : F && !Z && (ep = M ? (0, r.jsxs)(a.hE2, {
    direction: "horizontal",
    fullWidth: true,
    children: [(0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.string(v.t.V293qq)
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(T, w, R),
      text: v.intl.string(v.t.vY9GgI)
    })]
  }) : (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      loading: Q,
      variant: "primary",
      onClick: null != ei ? ei : true,
      text: ea,
      icon: T.config.features.includes(b.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : true,
      fullWidth: true
    })
  })) : ep = (0, r.jsx)("div", {
    className: j.button,
    children: (0, r.jsx)(a.zxk, {
      variant: "secondary",
      disabled: true,
      text: v.intl.format(v.t["14o6QU"], {
        expiryDate: L
      }),
      fullWidth: true
    })
  }), null == ep) ? null : (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)("div", {
      className: j.ctaItem,
      children: ep
    }), es && (0, r.jsx)("div", {
      className: j.ctaItem,
      children: (0, r.jsx)(l.PhF, {
        className: j.platformSelectorSecondary,
        isSelected: e => {
          switch ($) {
            case f.LI.DESKTOP:
              return e === b.cd.DESKTOP;
            case f.LI.CONSOLE:
              return e === b.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: C,
        placeholder: v.intl.string(v.t.drVw4e),
        renderOptionLabel: y,
        renderOptionValue: E,
        select: eo,
        serialize: e => {
          switch (e) {
            case b.cd.DESKTOP:
              return v.intl.string(v.t.QXc019);
            case b.cd.CONSOLE:
              return v.intl.string(v.t["8lAfuL"])
          }
        },
        size: "sm"
      })
    })]
  })
}