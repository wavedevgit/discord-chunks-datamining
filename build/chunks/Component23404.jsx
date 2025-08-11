/** Chunk was on 1272 **/
/** chunk id: 23404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk860151 = require("./860151.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk396896 = require("./396896.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function A(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, f.B6)(n.config.expiresAt), l = (0, f.B6)(O.r.build(n.config).rewardsExpireAt), a = (0, o.e7)([u.Z], () => u.Z.getState().theme), s = (0, c.wjy)(a) ? T.BRd.DARK : T.BRd.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: j.heading,
    children: [(0, r.jsx)("img", {
      className: j.headingGameTile,
      alt: "",
      src: (0, _.fh)(n, _.eC.GAME_TILE, s).url
    }), (0, r.jsxs)("div", {
      className: j.headingCopy,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: d ? P.intl.string(P.t.XBboAA) : P.intl.formatToPlainString(P.t.EQa7oq, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: d ? P.intl.formatToPlainString(P.t.APddvL, {
          expirationDate: l
        }) : P.intl.formatToPlainString(P.t["pX+fmp"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function Z(e) {
  var t, n, l, u;
  let {
    nodeRef: _,
    quest: O
  } = e, E = (0, d.O5)(), T = (0, o.e7)([g.Z], () => g.Z.isEnrolling(O.id), [O]), Z = (0, o.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []), [w, L] = i.useState(false), R = i.useCallback(() => L(true), []), D = i.useCallback(() => L(false), []), k = i.useCallback(e => {
    e.stopPropagation()
  }, []), M = i.useCallback(() => {
    (0, h.AH)(O.id, {
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.ACCEPT_QUEST,
      sourceQuestContent: m.jn.ACTIVITY_PANEL
    })
  }, [O]), U = i.useCallback(() => {
    null != O && (E({
      questId: O.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.TRACK_PROGRESS,
      sourceQuestContent: m.jn.ACTIVITY_PANEL
    }), (0, v.navigateToQuestHome)({
      fromContent: m.jn.ACTIVITY_PANEL,
      questId: O.id
    }))
  }, [O, E]), G = i.useCallback(() => {
    E({
      questId: O.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.LEARN_MORE,
      sourceQuestContent: m.jn.ACTIVITY_PANEL
    }), (0, v.navigateToQuestHome)({
      fromContent: m.jn.ACTIVITY_PANEL,
      questId: O.id
    })
  }, [O.id, E]), V = (0, C.hf)({
    quest: O,
    questContent: m.jn.ACTIVITY_PANEL,
    sourceQuestContent: m.jn.ACTIVITY_PANEL
  }), H = (0, f.tP)(O), B = (null == (t = O.userStatus) ? true : t.enrolledAt) != null, F = (null == (n = O.userStatus) ? true : n.completedAt) != null, z = (null == (l = O.userStatus) ? true : l.claimedAt) != null, W = (null == O ? true : O.userStatus) != null && (0, p.zE)(O.userStatus, m.jn.ACTIVITY_PANEL), Y = (0, f.Rf)(O), K = (0, b.DD)({
    quest: O,
    taskDetails: Y,
    location: N.dr.ACTIVITY_PANEL,
    questContent: m.jn.ACTIVITY_PANEL,
    sourceQuestContent: m.jn.ACTIVITY_PANEL
  });
  return W || H || z || Z ? null : (0, r.jsxs)("div", {
    ref: e => {
      _.current = e
    },
    className: a()(j.wrapper, {
      [j.wrapperQuestAccepted]: B
    }),
    onClick: k,
    onKeyPress: k,
    onFocus: R,
    onMouseEnter: R,
    onBlur: D,
    onMouseLeave: D,
    children: [(0, r.jsxs)("div", {
      className: j.utils,
      children: [B ? (0, r.jsx)(A, {
        quest: O
      }) : (0, r.jsx)(y.Z, {}), (0, r.jsx)(I.r, {
        quest: O,
        questContent: m.jn.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (u = O.userStatus) ? true : u.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: m.jn.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(c.P3F, (t = x({}, e), n = n = {
            "aria-label": P.intl.string(P.t.DEoVWV),
            children: (0, r.jsx)(c.xhG, {
              size: "md",
              color: "currentColor",
              className: j.submenuIcon
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })]
    }), !B && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A, {
        quest: O
      }), (0, r.jsx)("div", {
        className: j.instructions,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: K
        })
      })]
    }), B && !F && (0, r.jsx)(S.Z, {
      autoplay: w,
      className: j.rewardTileWithInstructions,
      quest: O,
      questContent: m.jn.ACTIVITY_PANEL,
      location: N.dr.ACTIVITY_PANEL,
      taskDetails: Y,
      sourceQuestContent: m.jn.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: j.ctas,
      children: [!B && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.zx, {
          className: j.cta,
          color: s.zx.Colors.PRIMARY,
          fullWidth: true,
          size: s.zx.Sizes.SMALL,
          onClick: G,
          children: P.intl.string(P.t.LLLLPD)
        }), (0, r.jsx)(s.zx, {
          className: j.cta,
          color: s.zx.Colors.BRAND,
          fullWidth: true,
          onClick: M,
          size: s.zx.Sizes.SMALL,
          submitting: T,
          children: P.intl.string(P.t.l7E81t)
        })]
      }), B && !F && (0, r.jsx)(s.zx, {
        className: j.cta,
        color: s.zx.Colors.BRAND,
        fullWidth: true,
        onClick: U,
        size: s.zx.Sizes.SMALL,
        children: P.intl.string(P.t.VN1Ajo)
      }), F && (0, r.jsx)(s.zx, {
        className: j.cta,
        color: s.zx.Colors.BRAND,
        fullWidth: true,
        onClick: V,
        size: s.zx.Sizes.SMALL,
        children: P.intl.string(P.t.cfY4PD)
      })]
    })]
  })
}
let w = function(e) {
  return (0, r.jsx)(E.A, {
    questOrQuests: e.quest,
    questContent: m.jn.ACTIVITY_PANEL,
    sourceQuestContent: m.jn.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(Z, x({
      nodeRef: t
    }, e))
  })
}