/** Chunk was on 1272 **/
/** chunk id: 364833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk862657 = require("./862657.js"),
  Chunk283689 = require("./283689.js"),
  Chunk602667 = require("./602667.js"),
  Chunk698716 = require("./698716.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk504411 = require("./504411.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk346592 = require("./346592.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773969 = require("./773969.js");

function A(e) {
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

function Z(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, m.B6)(n.config.expiresAt), l = (0, m.B6)(n.config.rewardsConfig.rewardsExpireAt), a = (0, o.e7)([c.Z], () => c.Z.getState().theme), u = (0, s.wjy)(a) ? j.BRd.DARK : j.BRd.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
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
        color: "text-strong",
        children: d ? x.intl.string(x.t.XBboAK) : x.intl.formatToPlainString(x.t.EQa7os, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: d ? x.intl.formatToPlainString(x.t.APddvF, {
          expirationDate: l
        }) : x.intl.formatToPlainString(x.t["pX+fmn"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function w(e) {
  var t, n, l;
  let {
    nodeRef: c,
    quest: b
  } = e, O = (0, d.O5)(), j = (0, o.e7)([p.Z], () => p.Z.isEnrolling(b.id), [b]), [w, L] = i.useState(false), R = i.useCallback(() => L(true), []), D = i.useCallback(() => L(false), []), {
    launchInGameActivity: M
  } = (0, m.zB)(b), k = g.Cx.useConfig({
    location: N.dr.ACTIVITY_PANEL
  }).enabled, U = i.useCallback(e => {
    e.stopPropagation()
  }, []), G = i.useCallback(() => {
    (0, u.AH)(b.id, {
      questContent: f.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.ACCEPT_QUEST,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, _.Rt)(b) && M()
  }, [b, M]), H = i.useCallback(() => {
    null != b && (O({
      questId: b.id,
      questContent: f.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.TRACK_PROGRESS,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, T.navigateToQuestHome)({
      fromContent: f.jn.ACTIVITY_PANEL,
      questId: b.id
    }))
  }, [b, O]), B = i.useCallback(() => {
    O({
      questId: b.id,
      questContent: f.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.LEARN_MORE,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, T.navigateToQuestHome)({
      fromContent: f.jn.ACTIVITY_PANEL,
      questId: b.id
    })
  }, [b.id, O]), V = (0, I.hf)({
    quest: b,
    questContent: f.jn.ACTIVITY_PANEL,
    sourceQuestContent: f.jn.ACTIVITY_PANEL
  }), F = (null == (t = b.userStatus) ? true : t.enrolledAt) != null, z = (null == (n = b.userStatus) ? true : n.completedAt) != null, Y = (0, m.Rf)(b), W = (0, h.DD)({
    quest: b,
    taskDetails: Y,
    location: N.dr.ACTIVITY_PANEL,
    questContent: f.jn.ACTIVITY_PANEL,
    sourceQuestContent: f.jn.ACTIVITY_PANEL
  }), K = (0, _.Rt)(b), q = (0, h.CR)({
    quest: b
  }), Q = K ? q : x.intl.string(x.t.l7E81v);
  return (0, r.jsxs)("div", {
    ref: e => {
      c.current = e
    },
    className: a()(P.wrapper, {
      [P.wrapperQuestAccepted]: F
    }),
    onClick: U,
    onKeyPress: U,
    onFocus: R,
    onMouseEnter: R,
    onBlur: D,
    onMouseLeave: D,
    children: [(0, r.jsxs)("div", {
      className: P.utils,
      children: [F ? (0, r.jsx)(Z, {
        quest: b
      }) : (0, r.jsx)(C.Z, {}), (0, r.jsx)(v.i, {
        quest: b,
        questContent: f.jn.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (l = b.userStatus) ? true : l.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: f.jn.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(s.P3F, (t = A({}, e), n = n = {
            "aria-label": x.intl.string(x.t.DEoVWZ),
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
    }), !F && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(Z, {
        quest: b
      }), (0, r.jsx)("div", {
        className: P.instructions,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: W
        })
      })]
    }), F && !z && (0, r.jsx)(S.Z, {
      autoplay: w,
      className: P.rewardTileWithInstructions,
      quest: b,
      questContent: f.jn.ACTIVITY_PANEL,
      location: N.dr.ACTIVITY_PANEL,
      taskDetails: Y,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: P.ctas,
      children: [!F && (0, r.jsxs)(s.ButtonGroup, {
        size: "sm",
        direction: K ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(s.Button, {
          variant: "secondary",
          text: x.intl.string(x.t.LLLLPD),
          onClick: B
        }), k && !(0, E.zi)(b) ? (0, r.jsx)(y.Z, {
          quest: b,
          size: "md",
          analyticsCtxQuestContent: f.jn.ACTIVITY_PANEL,
          analyticsCtxSourceQuestContent: f.jn.ACTIVITY_PANEL
        }) : (0, r.jsx)(s.Button, {
          variant: "primary",
          text: Q,
          onClick: G,
          loading: j,
          icon: (0, T.getPrimaryCtaIcon)(b)
        })]
      }), F && !z && (0, r.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: x.intl.string(x.t.VN1Ajl),
        onClick: H
      }), z && (0, r.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: x.intl.string(x.t.cfY4PE),
        onClick: V
      })]
    })]
  })
}
let L = function(e) {
  return (0, r.jsx)(O.A, {
    questOrQuests: e.quest,
    questContent: f.jn.ACTIVITY_PANEL,
    sourceQuestContent: f.jn.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(w, A({
      nodeRef: t
    }, e))
  })
}