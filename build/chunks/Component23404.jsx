/** Chunk was on 1272 **/
/** chunk id: 23404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
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
  } = e, i = (0, f.B6)(n.config.expiresAt), l = (0, f.B6)(_.r.build(n.config).rewardsExpireAt), a = (0, o.e7)([c.Z], () => c.Z.getState().theme), u = (0, s.wjy)(a) ? N.BRd.DARK : N.BRd.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: P.heading,
    children: [(0, r.jsx)("img", {
      className: P.headingGameTile,
      alt: "",
      src: (0, b.fh)(n, b.eC.GAME_TILE, u).url
    }), (0, r.jsxs)("div", {
      className: P.headingCopy,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: d ? T.intl.string(T.t.XBboAA) : T.intl.formatToPlainString(T.t.EQa7oq, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: d ? T.intl.formatToPlainString(T.t.APddvL, {
          expirationDate: l
        }) : T.intl.formatToPlainString(T.t["pX+fmp"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function Z(e) {
  var t, n, l;
  let {
    nodeRef: c,
    quest: b
  } = e, _ = (0, u.O5)(), E = (0, o.e7)([h.Z], () => h.Z.isEnrolling(b.id), [b]), [N, Z] = i.useState(false), A = i.useCallback(() => Z(true), []), w = i.useCallback(() => Z(false), []), {
    launchInGameActivity: L
  } = (0, f.zB)(b), R = i.useCallback(e => {
    e.stopPropagation()
  }, []), D = i.useCallback(() => {
    (0, p.AH)(b.id, {
      questContent: g.jn.ACTIVITY_PANEL,
      questContentCTA: u.jZ.ACCEPT_QUEST,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    }), (0, d.Rt)(b) && L()
  }, [b, L]), M = i.useCallback(() => {
    null != b && (_({
      questId: b.id,
      questContent: g.jn.ACTIVITY_PANEL,
      questContentCTA: u.jZ.TRACK_PROGRESS,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    }), (0, v.navigateToQuestHome)({
      fromContent: g.jn.ACTIVITY_PANEL,
      questId: b.id
    }))
  }, [b, _]), k = i.useCallback(() => {
    _({
      questId: b.id,
      questContent: g.jn.ACTIVITY_PANEL,
      questContentCTA: u.jZ.LEARN_MORE,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    }), (0, v.navigateToQuestHome)({
      fromContent: g.jn.ACTIVITY_PANEL,
      questId: b.id
    })
  }, [b.id, _]), U = (0, I.hf)({
    quest: b,
    questContent: g.jn.ACTIVITY_PANEL,
    sourceQuestContent: g.jn.ACTIVITY_PANEL
  }), G = (null == (t = b.userStatus) ? true : t.enrolledAt) != null, B = (null == (n = b.userStatus) ? true : n.completedAt) != null, H = (0, f.Rf)(b), V = (0, m.DD)({
    quest: b,
    taskDetails: H,
    location: S.dr.ACTIVITY_PANEL,
    questContent: g.jn.ACTIVITY_PANEL,
    sourceQuestContent: g.jn.ACTIVITY_PANEL
  }), F = (0, d.Rt)(b), z = (0, m.CR)({
    quest: b
  }), W = F ? z : T.intl.string(T.t.l7E81t);
  return (0, r.jsxs)("div", {
    ref: e => {
      c.current = e
    },
    className: a()(P.wrapper, {
      [P.wrapperQuestAccepted]: G
    }),
    onClick: R,
    onKeyPress: R,
    onFocus: A,
    onMouseEnter: A,
    onBlur: w,
    onMouseLeave: w,
    children: [(0, r.jsxs)("div", {
      className: P.utils,
      children: [G ? (0, r.jsx)(x, {
        quest: b
      }) : (0, r.jsx)(O.Z, {}), (0, r.jsx)(y.r, {
        quest: b,
        questContent: g.jn.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (l = b.userStatus) ? true : l.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: g.jn.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(s.P3F, (t = j({}, e), n = n = {
            "aria-label": T.intl.string(T.t.DEoVWV),
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
    }), !G && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x, {
        quest: b
      }), (0, r.jsx)("div", {
        className: P.instructions,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: V
        })
      })]
    }), G && !B && (0, r.jsx)(C.Z, {
      autoplay: N,
      className: P.rewardTileWithInstructions,
      quest: b,
      questContent: g.jn.ACTIVITY_PANEL,
      location: S.dr.ACTIVITY_PANEL,
      taskDetails: H,
      sourceQuestContent: g.jn.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: P.ctas,
      children: [!G && (0, r.jsxs)(s.ButtonGroup, {
        size: "sm",
        direction: F ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(s.Button, {
          variant: "secondary",
          text: T.intl.string(T.t.LLLLPD),
          onClick: k
        }), (0, r.jsx)(s.Button, {
          variant: "primary",
          text: W,
          onClick: D,
          loading: E,
          icon: (0, I.gF)(b)
        })]
      }), G && !B && (0, r.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: T.intl.string(T.t.VN1Ajo),
        onClick: M
      }), B && (0, r.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: T.intl.string(T.t.cfY4PD),
        onClick: U
      })]
    })]
  })
}
let A = function(e) {
  return (0, r.jsx)(E.A, {
    questOrQuests: e.quest,
    questContent: g.jn.ACTIVITY_PANEL,
    sourceQuestContent: g.jn.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(Z, j({
      nodeRef: t
    }, e))
  })
}