/** Chunk was on 37082 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk142468 = require("./142468.js");
let v = [{
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

function C(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case j.cd.DESKTOP:
      n = (0, r.jsx)(i.pzj, {}), t = b.intl.string(b.t.QXc019);
      break;
    case j.cd.CONSOLE:
      n = (0, r.jsx)(i.iWm, {}), t = b.intl.string(b.t["8lAfuL"]);
      break;
    default:
      return null
  }
  return (0, r.jsxs)("div", {
    className: _.platformSelectorPrimaryLabel,
    children: [n, t]
  })
}

function y(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case j.cd.DESKTOP:
      return (0, r.jsxs)("span", {
        className: _.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(i.pzj, {}), b.intl.string(b.t["g6Dr4+"])]
      });
    case j.cd.CONSOLE:
      return (0, r.jsxs)("span", {
        className: _.platformSelectorPrimaryLabel,
        children: [(0, r.jsx)(i.iWm, {}), b.intl.string(b.t.iyNbj4)]
      });
    default:
      return (0, c.vE)(e[0].value)
  }
}

function O(e) {
  var t, n, O, E;
  let {
    quest: S,
    questContent: T,
    onReceiveErrorHints: w,
    contentPosition: P,
    rowIndex: A,
    sourceQuestContent: N
  } = e, R = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), B = (0, h.g2)({
    useReducedMotion: R
  }), k = (0, u.O5)(), q = (0, p._s)({
    quest: S
  }), I = (0, p.z)(S), Q = (0, p.B6)(S.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: D,
    isEnrolling: V,
    isQuestEnrollmentBlocked: M
  } = (0, o.cj)([m.Z], () => ({
    isClaiming: m.Z.isClaimingReward(S.id) || m.Z.isFetchingRewardCode(S.id),
    isEnrolling: m.Z.isEnrolling(S.id),
    isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil
  })), L = (null == (t = S.userStatus) ? true : t.enrolledAt) != null, Z = (null == (n = S.userStatus) ? true : n.completedAt) != null, W = Z && (null == (O = S.userStatus) ? true : O.claimedAt) == null, U = (0, d.iQ)(S), H = !(0, d.zi)(S), F = (0, p._Q)(S), z = (0, d.Xv)(S.config), X = (0, d.PB)(S), K = (0, d.HJ)(S), Y = (0, d.Vl)(S), G = (0, p.Rf)(S), [J, $, ee] = (0, p.me)(S, G), et = H && F === p.OH.ACCEPTED, en = et && J === g.LI.SELECT, er = et && !en && $.length > 1, es = s.useCallback(e => {
    ee(e), e === j.cd.DESKTOP && w([])
  }, [ee, w]), {
    text: eo,
    onClick: ea
  } = (0, h.Ks)({
    progressState: F,
    quest: S,
    questContent: T,
    isCollectibleQuest: z,
    questContentPosition: P,
    questContentRowIndex: A,
    inGiftInventory: true,
    isVideoQuest: X,
    inGameQuest: Y,
    sourceQuestContent: N
  }), {
    startingConsoleQuest: ei,
    startConsoleQuest: el
  } = (0, p.GI)({
    questId: S.id,
    beforeRequest: () => {
      B.startAnimation(), k({
        questId: S.id,
        questContent: T,
        questContentCTA: u.jZ.DEFIBRILLATOR,
        questContentPosition: P,
        questContentRowIndex: A,
        sourceQuestContent: N
      })
    },
    afterRequest: e => {
      B.stopAnimation(), w(e)
    }
  }), ec = (0, f.f)({
    location: j.dr.QUEST_HOME_DESKTOP,
    questFeatures: S.config.features
  }), eu = (null == (E = S.userStatus) ? true : E.claimedAt) != null, ed = null;
  return (U && W ? ed = (0, r.jsx)(a.zx, {
    color: a.Tt.BRAND,
    submitting: D,
    onClick: null != ea ? ea : true,
    className: _.button,
    children: eo
  }) : Z ? ed = X ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.zx, {
      color: a.Tt.PRIMARY,
      className: _.button,
      style: {
        flex: 1
      },
      onClick: () => {
        (0, x.openVideoQuestModal)({
          quest: S,
          questContent: T,
          sourceQuestContent: N,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      },
      children: (0, r.jsxs)("div", {
        className: _.ctaInner,
        children: [(0, r.jsx)(i.Oe7, {
          className: _.videoQuestPlayIcon
        }), (0, r.jsx)("span", {
          children: b.intl.string(b.t.YsCuyM)
        })]
      })
    }), (0, r.jsx)(a.zx, {
      color: a.Tt.BRAND,
      className: _.button,
      onClick: null != ea ? ea : true,
      children: eo
    })]
  }) : (0, r.jsx)(a.zx, {
    color: a.Tt.BRAND,
    className: _.button,
    onClick: null != ea ? ea : true,
    children: eo
  }) : H ? H && W ? ed = (0, r.jsx)(a.zx, {
    color: a.Tt.BRAND,
    submitting: D,
    onClick: null != ea ? ea : true,
    className: _.button,
    children: eo
  }) : K ? ed = ec ? (0, r.jsx)(a.zx, {
    color: a.Tt.BRAND,
    submitting: V,
    onClick: null != ea ? ea : true,
    className: _.button,
    children: eo
  }) : (0, r.jsx)(a.zx, {
    color: a.Tt.PRIMARY,
    disabled: true,
    className: _.button,
    children: b.intl.string(b.t.BkZhUF)
  }) : H && L && !eu ? ed = en ? (0, r.jsx)(i.PhF, {
    className: _.platformSelectorPrimary,
    isSelected: () => false,
    options: v,
    placeholder: b.intl.string(b.t.drVw4e),
    renderOptionLabel: C,
    renderOptionValue: y,
    select: es,
    serialize: e => {
      switch (e) {
        case j.cd.DESKTOP:
          return b.intl.string(b.t.QXc019);
        case j.cd.CONSOLE:
          return b.intl.string(b.t["8lAfuL"]);
        default:
          return (0, c.vE)(e)
      }
    }
  }) : (0, d.$J)(S) && !I && J !== g.LI.DESKTOP ? q ? (0, r.jsx)(a.zx, {
    color: a.Tt.PRIMARY,
    className: _.button,
    onClick: null != ea ? ea : true,
    children: eo
  }) : (0, r.jsx)(a.zx, {
    color: a.Tt.PRIMARY,
    onClick: el,
    disabled: ei,
    className: _.button,
    children: (0, r.jsxs)("div", {
      className: _.ctaInner,
      children: [B.render(), b.intl.string(b.t.nPThNT)]
    })
  }) : X || Y && S.config.features.includes(j.S7.START_QUEST_CTA) ? (0, r.jsx)(a.zx, {
    color: a.Tt.BRAND,
    onClick: null != ea ? ea : true,
    className: _.button,
    children: eo
  }) : (0, r.jsx)(a.zx, {
    color: a.Tt.PRIMARY,
    disabled: true,
    className: _.button,
    children: b.intl.string(b.t["9KoPyM"])
  }) : H && !L && (ed = M ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.zx, {
      color: a.Tt.PRIMARY,
      className: _.button,
      disabled: true,
      children: b.intl.string(b.t.V293qq)
    }), (0, r.jsx)(a.zx, {
      color: a.Tt.BRAND,
      className: _.button,
      onClick: () => (0, x.openQuestMinorEnrollmentBlockModal)(S, T, N),
      children: b.intl.string(b.t.vY9GgI)
    })]
  }) : (0, r.jsx)(a.zx, {
    submitting: V,
    color: a.Tt.BRAND,
    onClick: null != ea ? ea : true,
    className: _.button,
    children: eo
  })) : ed = (0, r.jsx)(a.zx, {
    color: a.Tt.PRIMARY,
    disabled: true,
    className: _.button,
    children: b.intl.format(b.t["14o6QU"], {
      expiryDate: Q
    })
  }), null == ed) ? null : (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsx)("div", {
      className: _.ctaItem,
      children: ed
    }), er && (0, r.jsx)("div", {
      className: _.ctaItem,
      children: (0, r.jsx)(i.PhF, {
        className: _.platformSelectorSecondary,
        isSelected: e => {
          switch (J) {
            case g.LI.DESKTOP:
              return e === j.cd.DESKTOP;
            case g.LI.CONSOLE:
              return e === j.cd.CONSOLE;
            default:
              returnfalse
          }
        },
        options: v,
        placeholder: b.intl.string(b.t.drVw4e),
        renderOptionLabel: C,
        renderOptionValue: y,
        select: es,
        serialize: e => {
          switch (e) {
            case j.cd.DESKTOP:
              return b.intl.string(b.t.QXc019);
            case j.cd.CONSOLE:
              return b.intl.string(b.t["8lAfuL"])
          }
        }
      })
    })]
  })
}