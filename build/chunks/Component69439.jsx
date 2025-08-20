/** Chunk was on web.js **/
/** chunk id: 69439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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
let O = [{
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

function v(e) {
  let t, n, {
    value: i
  } = e;
  switch (i) {
    case E.cd.DESKTOP:
      n = (0, r.jsx)(s.pzj, {}), t = b.intl.string(b.t.QXc019);
      break;
    case E.cd.CONSOLE:
      n = (0, r.jsx)(s.iWm, {}), t = b.intl.string(b.t["8lAfuL"]);
      break;
    default:
      return null
  }
  return (0, r.jsxs)("div", {
    className: y.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function I(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case E.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: y.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(s.pzj, {}), b.intl.string(b.t["g6Dr4+"])]
      });
    case E.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: y.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(s.iWm, {}), b.intl.string(b.t.iyNbj4)]
      });
    default:
      return (0, c.vE)(e[0].value)
  }
}

function T(e) {
  var t, n, T, S;
  let {
    quest: A,
    questContent: C,
    onReceiveErrorHints: N,
    contentPosition: R,
    rowIndex: P,
    sourceQuestContent: w
  } = e, D = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), x = (0, g.g2)({
    useReducedMotion: D
  }), L = (0, u.O5)(), j = (0, f._s)({
    quest: A
  }), M = (0, f.z)(A), k = (0, f.B6)(A.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: U,
    isEnrolling: G,
    isQuestEnrollmentBlocked: B
  } = (0, a.cj)([_.Z], () => ({
    isClaiming: _.Z.isClaimingReward(A.id) || _.Z.isFetchingRewardCode(A.id),
    isEnrolling: _.Z.isEnrolling(A.id),
    isQuestEnrollmentBlocked: null != _.Z.questEnrollmentBlockedUntil
  })), Z = (null == (t = A.userStatus) ? true : t.enrolledAt) != null, V = (null == (n = A.userStatus) ? true : n.completedAt) != null, F = V && (null == (T = A.userStatus) ? true : T.claimedAt) == null, H = (0, d.iQ)(A), Y = !(0, d.zi)(A), W = (0, f._Q)(A), K = (0, d.Xv)(A.config), z = (0, d.PB)(A), q = (0, d.HJ)(A), X = (0, d.Vl)(A), Q = (0, f.Rf)(A), [J, $, ee] = (0, f.me)(A, Q), et = Y && W === f.OH.ACCEPTED, en = et && J === p.LI.SELECT, er = et && !en && $.length > 1, ei = i.useCallback(e => {
    ee(e), e === E.cd.DESKTOP && N([])
  }, [ee, N]), {
    text: ea,
    onClick: eo
  } = (0, g.Ks)({
    progressState: W,
    quest: A,
    questContent: C,
    isCollectibleQuest: K,
    questContentPosition: R,
    questContentRowIndex: P,
    inGiftInventory: true,
    isVideoQuest: z,
    inGameQuest: X,
    sourceQuestContent: w
  }), {
    startingConsoleQuest: es,
    startConsoleQuest: el
  } = (0, f.GI)({
    questId: A.id,
    beforeRequest: () => {
      x.startAnimation(), L({
        questId: A.id,
        questContent: C,
        questContentCTA: u.jZ.DEFIBRILLATOR,
        questContentPosition: R,
        questContentRowIndex: P,
        sourceQuestContent: w
      })
    },
    afterRequest: e => {
      x.stopAnimation(), N(e)
    }
  }), ec = (0, h.f)({
    location: E.dr.QUEST_HOME_DESKTOP,
    questFeatures: A.config.features
  }), eu = (null == (S = A.userStatus) ? true : S.claimedAt) != null, ed = Z && !eu, ef = null;
  return (H && F ? ef = (0, r.jsx)(o.zx, {
    color: o.Tt.BRAND,
    submitting: U,
    onClick: null != eo ? eo : true,
    className: y.button,
    children: ea
  }) : V ? ef = z ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.zx, {
      color: o.Tt.PRIMARY,
      className: y.button,
      style: {
        flex: 1
      },
      onClick: () => {
        (0, m.openVideoQuestModal)({
          quest: A,
          questContent: C,
          sourceQuestContent: w,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      },
      children: (0, r.jsxs)("div", {
        className: y.ctaInner,
        children: [(0, r.jsx)(s.Oe7, {
          className: y.videoQuestPlayIcon
        }), (0, r.jsx)("span", {
          children: b.intl.string(b.t.YsCuyM)
        })]
      })
    }), (0, r.jsx)(o.zx, {
      color: o.Tt.BRAND,
      className: y.button,
      onClick: null != eo ? eo : true,
      children: ea
    })]
  }) : (0, r.jsx)(o.zx, {
    color: o.Tt.BRAND,
    className: y.button,
    onClick: null != eo ? eo : true,
    children: ea
  }) : Y ? Y && F ? ef = (0, r.jsx)(o.zx, {
    color: o.Tt.BRAND,
    submitting: U,
    onClick: null != eo ? eo : true,
    className: y.button,
    children: ea
  }) : q ? ef = ec ? (0, r.jsx)(o.zx, {
    color: o.Tt.BRAND,
    submitting: G,
    onClick: null != eo ? eo : true,
    className: y.button,
    children: ea
  }) : (0, r.jsx)(o.zx, {
    color: o.Tt.PRIMARY,
    disabled: true,
    className: y.button,
    children: b.intl.string(b.t.BkZhUF)
  }) : Y && ed ? ef = en ? (0, r.jsx)(s.PhF, {
    className: y.platformSelectorPrimary,
    isSelected: () => false,
    options: O,
    placeholder: b.intl.string(b.t.drVw4e),
    renderOptionLabel: v,
    renderOptionValue: I,
    select: ei,
    serialize: e => {
      switch (e) {
        case E.cd.DESKTOP:
          return b.intl.string(b.t.QXc019);
        case E.cd.CONSOLE:
          return b.intl.string(b.t["8lAfuL"]);
        default:
          return (0, c.vE)(e)
      }
    }
  }) : (0, d.$J)(A) && !M && J !== p.LI.DESKTOP ? j ? (0, r.jsx)(o.zx, {
    color: o.Tt.PRIMARY,
    className: y.button,
    onClick: null != eo ? eo : true,
    children: ea
  }) : (0, r.jsx)(o.zx, {
    color: o.Tt.PRIMARY,
    onClick: el,
    disabled: es,
    className: y.button,
    children: (0, r.jsxs)("div", {
      className: y.ctaInner,
      children: [x.render(), b.intl.string(b.t.nPThNT)]
    })
  }) : z || X && A.config.features.includes(E.S7.START_QUEST_CTA) ? (0, r.jsx)(o.zx, {
    color: o.Tt.BRAND,
    onClick: null != eo ? eo : true,
    className: y.button,
    children: ea
  }) : (0, r.jsx)(o.zx, {
    color: o.Tt.PRIMARY,
    disabled: true,
    className: y.button,
    children: b.intl.string(b.t["9KoPyM"])
  }) : Y && !Z && (ef = B ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.zx, {
      color: o.Tt.PRIMARY,
      className: y.button,
      disabled: true,
      children: b.intl.string(b.t.V293qq)
    }), (0, r.jsx)(o.zx, {
      color: o.Tt.BRAND,
      className: y.button,
      onClick: () => (0, m.openQuestMinorEnrollmentBlockModal)(A, C, w),
      children: b.intl.string(b.t.vY9GgI)
    })]
  }) : (0, r.jsx)(o.zx, {
    submitting: G,
    color: o.Tt.BRAND,
    onClick: null != eo ? eo : true,
    className: y.button,
    children: ea
  })) : ef = (0, r.jsx)(o.zx, {
    color: o.Tt.PRIMARY,
    disabled: true,
    className: y.button,
    children: b.intl.format(b.t["14o6QU"], {
      expiryDate: k
    })
  }), null == ef) ? null : (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsx)("div", {
      className: y.ctaItem,
      children: ef
    }), er && (0, r.jsx)("div", {
      className: y.ctaItem,
      children: (0, r.jsx)(s.PhF, {
        className: y.platformSelectorSecondary,
        isSelected: e => {
          switch (J) {
            case p.LI.DESKTOP:
              return e === E.cd.DESKTOP;
            case p.LI.CONSOLE:
              return e === E.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: O,
        placeholder: b.intl.string(b.t.drVw4e),
        renderOptionLabel: v,
        renderOptionValue: I,
        select: ei,
        serialize: e => {
          switch (e) {
            case E.cd.DESKTOP:
              return b.intl.string(b.t.QXc019);
            case E.cd.CONSOLE:
              return b.intl.string(b.t["8lAfuL"])
          }
        }
      })
    })]
  })
}