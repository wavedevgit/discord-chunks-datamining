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
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
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
  Chunk408228 = require("./408228.js");

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
  } = e, i = (0, f.B6)(n.config.expiresAt), l = (0, f.B6)(b.r.build(n.config).rewardsExpireAt), a = (0, s.e7)([c.Z], () => c.Z.getState().theme), u = (0, o.wjy)(a) ? T.BRd.DARK : T.BRd.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: P.heading,
    children: [(0, r.jsx)("img", {
      className: P.headingGameTile,
      alt: "",
      src: (0, _.fh)(n, _.eC.GAME_TILE, u).url
    }), (0, r.jsxs)("div", {
      className: P.headingCopy,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: d ? N.intl.string(N.t.XBboAK) : N.intl.formatToPlainString(N.t.EQa7os, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: d ? N.intl.formatToPlainString(N.t.APddvF, {
          expirationDate: l
        }) : N.intl.formatToPlainString(N.t["pX+fmn"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function A(e) {
  var t, n, l;
  let {
    nodeRef: c,
    quest: _
  } = e, b = (0, d.O5)(), E = (0, s.e7)([m.Z], () => m.Z.isEnrolling(_.id), [_]), [T, A] = i.useState(false), Z = i.useCallback(() => A(true), []), w = i.useCallback(() => A(false), []), {
    launchInGameActivity: L
  } = (0, f.zB)(_), R = i.useCallback(e => {
    e.stopPropagation()
  }, []), D = i.useCallback(() => {
    (0, u.AH)(_.id, {
      questContent: h.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.ACCEPT_QUEST,
      sourceQuestContent: h.jn.ACTIVITY_PANEL
    }), (0, p.Rt)(_) && L()
  }, [_, L]), M = i.useCallback(() => {
    null != _ && (b({
      questId: _.id,
      questContent: h.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.TRACK_PROGRESS,
      sourceQuestContent: h.jn.ACTIVITY_PANEL
    }), (0, I.navigateToQuestHome)({
      fromContent: h.jn.ACTIVITY_PANEL,
      questId: _.id
    }))
  }, [_, b]), k = i.useCallback(() => {
    b({
      questId: _.id,
      questContent: h.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.LEARN_MORE,
      sourceQuestContent: h.jn.ACTIVITY_PANEL
    }), (0, I.navigateToQuestHome)({
      fromContent: h.jn.ACTIVITY_PANEL,
      questId: _.id
    })
  }, [_.id, b]), U = (0, v.hf)({
    quest: _,
    questContent: h.jn.ACTIVITY_PANEL,
    sourceQuestContent: h.jn.ACTIVITY_PANEL
  }), G = (null == (t = _.userStatus) ? true : t.enrolledAt) != null, B = (null == (n = _.userStatus) ? true : n.completedAt) != null, H = (0, f.Rf)(_), V = (0, g.DD)({
    quest: _,
    taskDetails: H,
    location: S.dr.ACTIVITY_PANEL,
    questContent: h.jn.ACTIVITY_PANEL,
    sourceQuestContent: h.jn.ACTIVITY_PANEL
  }), F = (0, p.Rt)(_), z = (0, g.CR)({
    quest: _
  }), Y = F ? z : N.intl.string(N.t.l7E81v);
  return (0, r.jsxs)("div", {
    ref: e => {
      c.current = e
    },
    className: a()(P.wrapper, {
      [P.wrapperQuestAccepted]: G
    }),
    onClick: R,
    onKeyPress: R,
    onFocus: Z,
    onMouseEnter: Z,
    onBlur: w,
    onMouseLeave: w,
    children: [(0, r.jsxs)("div", {
      className: P.utils,
      children: [G ? (0, r.jsx)(x, {
        quest: _
      }) : (0, r.jsx)(O.Z, {}), (0, r.jsx)(y.r, {
        quest: _,
        questContent: h.jn.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (l = _.userStatus) ? true : l.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: h.jn.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(o.P3F, (t = j({}, e), n = n = {
            "aria-label": N.intl.string(N.t.DEoVWZ),
            children: (0, r.jsx)(o.xhG, {
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
    }), !G && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x, {
        quest: _
      }), (0, r.jsx)("div", {
        className: P.instructions,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: V
        })
      })]
    }), G && !B && (0, r.jsx)(C.Z, {
      autoplay: T,
      className: P.rewardTileWithInstructions,
      quest: _,
      questContent: h.jn.ACTIVITY_PANEL,
      location: S.dr.ACTIVITY_PANEL,
      taskDetails: H,
      sourceQuestContent: h.jn.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: P.ctas,
      children: [!G && (0, r.jsxs)(o.ButtonGroup, {
        size: "sm",
        direction: F ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(o.Button, {
          variant: "secondary",
          text: N.intl.string(N.t.LLLLPD),
          onClick: k
        }), (0, r.jsx)(o.Button, {
          variant: "primary",
          text: Y,
          onClick: D,
          loading: E,
          icon: (0, I.getPrimaryCtaIcon)(_)
        })]
      }), G && !B && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: N.intl.string(N.t.VN1Ajl),
        onClick: M
      }), B && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: N.intl.string(N.t.cfY4PE),
        onClick: U
      })]
    })]
  })
}
let Z = function(e) {
  return (0, r.jsx)(E.A, {
    questOrQuests: e.quest,
    questContent: h.jn.ACTIVITY_PANEL,
    sourceQuestContent: h.jn.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(A, j({
      nodeRef: t
    }, e))
  })
}