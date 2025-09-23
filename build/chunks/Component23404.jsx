/** Chunk was on 1272 **/
/** chunk id: 23404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk123611 = require("./123611.js");

function j(e) {
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

function x(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, f.B6)(n.config.expiresAt), l = (0, f.B6)(_.r.build(n.config).rewardsExpireAt), a = (0, o.e7)([c.Z], () => c.Z.getState().theme), u = (0, s.wjy)(a) ? T.BRd.DARK : T.BRd.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: P.heading,
    children: [(0, r.jsx)("img", {
      className: P.headingGameTile,
      alt: "",
      src: (0, b.fh)(n, b.eC.GAME_TILE, u).url
    }), (0, r.jsxs)("div", {
      className: P.headingCopy,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: d ? N.intl.string(N.t.XBboAA) : N.intl.formatToPlainString(N.t.EQa7oq, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: d ? N.intl.formatToPlainString(N.t.APddvL, {
          expirationDate: l
        }) : N.intl.formatToPlainString(N.t["pX+fmp"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function A(e) {
  var t, n, l, c;
  let {
    nodeRef: b,
    quest: _
  } = e, O = (0, u.O5)(), T = (0, o.e7)([h.Z], () => h.Z.isEnrolling(_.id), [_]), A = (0, o.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []), [Z, w] = i.useState(false), L = i.useCallback(() => w(true), []), R = i.useCallback(() => w(false), []), D = i.useCallback(e => {
    e.stopPropagation()
  }, []), k = i.useCallback(() => {
    (0, p.AH)(_.id, {
      questContent: g.jn.ACTIVITY_PANEL,
      questContentCTA: u.jZ.ACCEPT_QUEST,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    })
  }, [_]), M = i.useCallback(() => {
    null != _ && (O({
      questId: _.id,
      questContent: g.jn.ACTIVITY_PANEL,
      questContentCTA: u.jZ.TRACK_PROGRESS,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    }), (0, y.navigateToQuestHome)({
      fromContent: g.jn.ACTIVITY_PANEL,
      questId: _.id
    }))
  }, [_, O]), U = i.useCallback(() => {
    O({
      questId: _.id,
      questContent: g.jn.ACTIVITY_PANEL,
      questContentCTA: u.jZ.LEARN_MORE,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    }), (0, y.navigateToQuestHome)({
      fromContent: g.jn.ACTIVITY_PANEL,
      questId: _.id
    })
  }, [_.id, O]), G = (0, I.hf)({
    quest: _,
    questContent: g.jn.ACTIVITY_PANEL,
    sourceQuestContent: g.jn.ACTIVITY_PANEL
  }), B = (0, f.tP)(_), V = (null == (t = _.userStatus) ? true : t.enrolledAt) != null, H = (null == (n = _.userStatus) ? true : n.completedAt) != null, F = (null == (l = _.userStatus) ? true : l.claimedAt) != null, z = (null == _ ? true : _.userStatus) != null && (0, d.zE)(_.userStatus, g.jn.ACTIVITY_PANEL), W = (0, f.Rf)(_), Y = (0, m.DD)({
    quest: _,
    taskDetails: W,
    location: S.dr.ACTIVITY_PANEL,
    questContent: g.jn.ACTIVITY_PANEL,
    sourceQuestContent: g.jn.ACTIVITY_PANEL
  }), K = (0, d.Rt)(_), q = (0, m.CR)({
    quest: _
  }), Q = K ? q : N.intl.string(N.t.l7E81t);
  return z || B || F || A ? null : (0, r.jsxs)("div", {
    ref: e => {
      b.current = e
    },
    className: a()(P.wrapper, {
      [P.wrapperQuestAccepted]: V
    }),
    onClick: D,
    onKeyPress: D,
    onFocus: L,
    onMouseEnter: L,
    onBlur: R,
    onMouseLeave: R,
    children: [(0, r.jsxs)("div", {
      className: P.utils,
      children: [V ? (0, r.jsx)(x, {
        quest: _
      }) : (0, r.jsx)(E.Z, {}), (0, r.jsx)(v.r, {
        quest: _,
        questContent: g.jn.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (c = _.userStatus) ? true : c.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: g.jn.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(s.P3F, (t = j({}, e), n = n = {
            "aria-label": N.intl.string(N.t.DEoVWV),
            children: (0, r.jsx)(s.xhG, {
              size: "md",
              color: "currentColor",
              className: P.submenuIcon
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
    }), !V && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x, {
        quest: _
      }), (0, r.jsx)("div", {
        className: P.instructions,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: Y
        })
      })]
    }), V && !H && (0, r.jsx)(C.Z, {
      autoplay: Z,
      className: P.rewardTileWithInstructions,
      quest: _,
      questContent: g.jn.ACTIVITY_PANEL,
      location: S.dr.ACTIVITY_PANEL,
      taskDetails: W,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: P.ctas,
      children: [!V && (0, r.jsxs)(s.hE2, {
        size: "sm",
        direction: K ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(s.zxk, {
          variant: "secondary",
          text: N.intl.string(N.t.LLLLPD),
          onClick: U
        }), (0, r.jsx)(s.zxk, {
          variant: "primary",
          text: Q,
          onClick: k,
          loading: T,
          icon: _.config.features.includes(S.S7.CLOUD_GAMING_ACTIVITY) ? s.v3n : true
        })]
      }), V && !H && (0, r.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: N.intl.string(N.t.VN1Ajo),
        onClick: M
      }), H && (0, r.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: N.intl.string(N.t.cfY4PD),
        onClick: G
      })]
    })]
  })
}
let Z = function(e) {
  return (0, r.jsx)(O.A, {
    questOrQuests: e.quest,
    questContent: g.jn.ACTIVITY_PANEL,
    sourceQuestContent: g.jn.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(A, j({
      nodeRef: t
    }, e))
  })
}