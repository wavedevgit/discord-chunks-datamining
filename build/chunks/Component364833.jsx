/** Chunk was on 1272 **/
/** chunk id: 364833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
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
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk283689 = require("./283689.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk698716 = require("./698716.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk346592 = require("./346592.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773969 = require("./773969.js");

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

function P(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, h.B6)(n.config.expiresAt), l = (0, h.B6)(n.config.rewardsConfig.rewardsExpireAt), a = (0, s.e7)([c.Z], () => c.Z.getState().theme), u = (0, o.wjy)(a) ? S.BRd.DARK : S.BRd.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: N.heading,
    children: [(0, r.jsx)("img", {
      className: N.headingGameTile,
      alt: "",
      src: (0, m.fh)(n, m.eC.GAME_TILE, u).url
    }), (0, r.jsxs)("div", {
      className: N.headingCopy,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: d ? T.intl.string(T.t.XBboAK) : T.intl.formatToPlainString(T.t.EQa7os, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: d ? T.intl.formatToPlainString(T.t.APddvF, {
          expirationDate: l
        }) : T.intl.formatToPlainString(T.t["pX+fmn"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function x(e) {
  var t, n, l;
  let {
    nodeRef: c,
    quest: m
  } = e, _ = (0, d.O5)(), S = (0, s.e7)([p.Z], () => p.Z.isEnrolling(m.id), [m]), [x, A] = i.useState(false), Z = i.useCallback(() => A(true), []), w = i.useCallback(() => A(false), []), {
    launchInGameActivity: L
  } = (0, h.zB)(m), R = i.useCallback(e => {
    e.stopPropagation()
  }, []), D = i.useCallback(() => {
    (0, u.AH)(m.id, {
      questContent: f.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.ACCEPT_QUEST,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, b.Rt)(m) && L()
  }, [m, L]), M = i.useCallback(() => {
    null != m && (_({
      questId: m.id,
      questContent: f.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.TRACK_PROGRESS,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, I.navigateToQuestHome)({
      fromContent: f.jn.ACTIVITY_PANEL,
      questId: m.id
    }))
  }, [m, _]), k = i.useCallback(() => {
    _({
      questId: m.id,
      questContent: f.jn.ACTIVITY_PANEL,
      questContentCTA: d.jZ.LEARN_MORE,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, I.navigateToQuestHome)({
      fromContent: f.jn.ACTIVITY_PANEL,
      questId: m.id
    })
  }, [m.id, _]), U = (0, O.hf)({
    quest: m,
    questContent: f.jn.ACTIVITY_PANEL,
    sourceQuestContent: f.jn.ACTIVITY_PANEL
  }), G = (null == (t = m.userStatus) ? true : t.enrolledAt) != null, H = (null == (n = m.userStatus) ? true : n.completedAt) != null, B = (0, h.Rf)(m), V = (0, g.DD)({
    quest: m,
    taskDetails: B,
    location: C.dr.ACTIVITY_PANEL,
    questContent: f.jn.ACTIVITY_PANEL,
    sourceQuestContent: f.jn.ACTIVITY_PANEL
  }), F = (0, b.Rt)(m), z = (0, g.CR)({
    quest: m
  }), Y = F ? z : T.intl.string(T.t.l7E81v);
  return (0, r.jsxs)("div", {
    ref: e => {
      c.current = e
    },
    className: a()(N.wrapper, {
      [N.wrapperQuestAccepted]: G
    }),
    onClick: R,
    onKeyPress: R,
    onFocus: Z,
    onMouseEnter: Z,
    onBlur: w,
    onMouseLeave: w,
    children: [(0, r.jsxs)("div", {
      className: N.utils,
      children: [G ? (0, r.jsx)(P, {
        quest: m
      }) : (0, r.jsx)(v.Z, {}), (0, r.jsx)(E.i, {
        quest: m,
        questContent: f.jn.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (l = m.userStatus) ? true : l.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: f.jn.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(o.P3F, (t = j({}, e), n = n = {
            "aria-label": T.intl.string(T.t.DEoVWZ),
            children: (0, r.jsx)(o.xhG, {
              size: "md",
              color: "currentColor",
              className: N.submenuIcon
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
      children: [(0, r.jsx)(P, {
        quest: m
      }), (0, r.jsx)("div", {
        className: N.instructions,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: V
        })
      })]
    }), G && !H && (0, r.jsx)(y.Z, {
      autoplay: x,
      className: N.rewardTileWithInstructions,
      quest: m,
      questContent: f.jn.ACTIVITY_PANEL,
      location: C.dr.ACTIVITY_PANEL,
      taskDetails: B,
      sourceQuestContent: f.jn.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: N.ctas,
      children: [!G && (0, r.jsxs)(o.ButtonGroup, {
        size: "sm",
        direction: F ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(o.Button, {
          variant: "secondary",
          text: T.intl.string(T.t.LLLLPD),
          onClick: k
        }), (0, r.jsx)(o.Button, {
          variant: "primary",
          text: Y,
          onClick: D,
          loading: S,
          icon: (0, I.getPrimaryCtaIcon)(m)
        })]
      }), G && !H && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: T.intl.string(T.t.VN1Ajl),
        onClick: M
      }), H && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: T.intl.string(T.t.cfY4PE),
        onClick: U
      })]
    })]
  })
}
let A = function(e) {
  return (0, r.jsx)(_.A, {
    questOrQuests: e.quest,
    questContent: f.jn.ACTIVITY_PANEL,
    sourceQuestContent: f.jn.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(x, j({
      nodeRef: t
    }, e))
  })
}