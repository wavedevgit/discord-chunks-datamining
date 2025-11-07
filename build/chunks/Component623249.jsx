/** Chunk was on 10150 **/
/** chunk id: 623249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O,
  y: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301889 = require("./301889.js");

function O(e) {
  var t;
  let {
    quest: n,
    errorHints: o,
    transitionState: _,
    onClose: O,
    sourceQuestContent: T
  } = e, [w, P] = (0, s.useState)(o), N = (0, x.KX)(), A = (0, g.O5)(), R = null == (t = (0, f.WD)()) ? true : t.getId(), B = (0, l.e7)([p.Z], () => p.Z.useReducedMotion), k = (0, v.g2)({
    useReducedMotion: B,
    className: E.colorTransition
  }), I = w.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), D = (0, h.Bz)(n), q = (0, l.e7)([m.Z], () => m.Z.getState().theme), Q = (0, d.wj)(q) ? C.BRd.DARK : C.BRd.LIGHT, {
    startConsoleQuest: L,
    startingConsoleQuest: V
  } = (0, x.GI)({
    questId: n.id,
    beforeRequest: () => {
      k.startAnimation(), A({
        questId: n.id,
        questContent: j.jn.CONNECTIONS_MODAL,
        questContentCTA: g.jZ.DEFIBRILLATOR,
        sourceQuestContent: T
      })
    },
    afterRequest: e => {
      k.stopAnimation(), P(e)
    }
  });
  return (0, r.jsx)(i.Modal, {
    transitionState: _,
    onClose: O,
    title: y.intl.string(y.t.W5lmKt),
    subtitle: N.message,
    actions: [{
      variant: "secondary",
      onClick: () => void(O(), (0, h.V$)({
        quest: n
      }, {
        content: j.jn.CONNECTIONS_MODAL,
        ctaContent: g.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
        impressionId: R,
        sourceQuestContent: T
      })),
      text: y.intl.string(y.t["qiS+xj"])
    }, {
      variant: "primary",
      onClick: () => O(),
      text: y.intl.string(y.t.cpT0Cq)
    }],
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: E.contentHeader,
        children: [(0, r.jsx)(u.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: y.intl.string(y.t["+/hZM/"])
        }), (0, r.jsxs)(u.P3F, {
          className: a()(E.refreshWrapper, {
            [E.disabled]: V
          }),
          onClick: L,
          children: [k.render(), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            className: E.colorTransition,
            children: y.intl.string(y.t.wzzjk9)
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: E.accountsWrapper,
        children: [(0, r.jsx)(S, {
          icon: (0, r.jsx)(u.pzj, {
            size: "sm"
          }),
          text: y.intl.string(y.t.br3uIi)
        }), (0, r.jsx)(S, {
          icon: (0, r.jsx)(u.iWm, {
            size: "sm"
          }),
          text: y.intl.string(y.t.XF4wuA),
          errors: D ? true : I.map(e => e.message),
          gameTile: D ? (0, r.jsx)(c.u, {
            "aria-label": n.config.messages.gameTitle,
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
              className: E.tooltip,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: n.config.messages.gameTitle
              }), (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: y.intl.string(y.t.STpNEC)
              })]
            }),
            children: (0, r.jsx)("img", {
              className: E.gameTile,
              alt: n.config.messages.gameTitle,
              src: (0, b.fh)(n, b.eC.GAME_TILE, Q).url
            })
          }) : null
        })]
      })]
    })
  })
}

function S(e) {
  let {
    icon: t,
    text: n,
    errors: s = [],
    gameTile: o
  } = e, i = s.length > 0, l = i ? u._3e : u.B_b;
  return (0, r.jsxs)("div", {
    className: E.connectionRow,
    children: [(0, r.jsxs)("div", {
      className: a()(E.connectionRowHeader, {
        [E.connectionRowHeaderError]: i
      }),
      children: [(0, r.jsxs)("div", {
        className: E.connectionRowHeaderContent,
        children: [t, (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        })]
      }), (0, r.jsxs)("div", {
        className: E.connectionRowHeaderContent,
        children: [o, (0, r.jsx)(l, {
          color: "currentColor",
          size: "sm",
          className: a()({
            [E.success]: !i,
            [E.error]: i
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: E.errorsContainer,
      children: s.map(e => (0, r.jsxs)("div", {
        className: E.errorRow,
        children: [(0, r.jsx)(u.aNP, {
          size: "sm",
          color: "currentColor",
          className: E.error
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: e
        })]
      }, e))
    })]
  })
}

function T(e) {
  (0, u.ZDy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 623249));
    return function(n) {
      return (0, r.jsx)(_.A, {
        overrideVisibility: true,
        questOrQuests: e.quest,
        questContent: j.jn.CONNECTIONS_MODAL,
        sourceQuestContent: e.sourceQuestContent,
        children: () => (0, r.jsx)(t, function(e) {
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
        }({}, n, e))
      })
    }
  })
}