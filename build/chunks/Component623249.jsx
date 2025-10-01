/** Chunk was on 17013 **/
/** chunk id: 623249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E,
  y: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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

function E(e) {
  var t;
  let {
    quest: n,
    errorHints: o,
    transitionState: b,
    onClose: E,
    sourceQuestContent: T
  } = e, [w, P] = (0, s.useState)(o), N = (0, h.KX)(), A = (0, m.O5)(), R = null == (t = (0, g.WD)()) ? true : t.getId(), B = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), k = (0, j.g2)({
    useReducedMotion: B,
    className: y.colorTransition
  }), I = w.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), q = (0, f.Bz)(n), D = (0, l.e7)([p.Z], () => p.Z.getState().theme), L = (0, c.wj)(D) ? v.BRd.DARK : v.BRd.LIGHT, {
    startConsoleQuest: V,
    startingConsoleQuest: Q
  } = (0, h.GI)({
    questId: n.id,
    beforeRequest: () => {
      k.startAnimation(), A({
        questId: n.id,
        questContent: x.jn.CONNECTIONS_MODAL,
        questContentCTA: m.jZ.DEFIBRILLATOR,
        sourceQuestContent: T
      })
    },
    afterRequest: e => {
      k.stopAnimation(), P(e)
    }
  });
  return (0, r.jsx)(i.Modal, {
    transitionState: b,
    onClose: E,
    title: C.intl.string(C.t.W5lmKi),
    subtitle: N.message,
    actions: [{
      variant: "secondary",
      onClick: () => void(E(), (0, f.V$)({
        quest: n
      }, {
        content: x.jn.CONNECTIONS_MODAL,
        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
        impressionId: R,
        sourceQuestContent: T
      })),
      text: C.intl.string(C.t["qiS+xs"])
    }, {
      variant: "primary",
      onClick: () => E(),
      text: C.intl.string(C.t.cpT0Cg)
    }],
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: y.contentHeader,
        children: [(0, r.jsx)(d.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: C.intl.string(C.t["+/hZMz"])
        }), (0, r.jsxs)(d.P3F, {
          className: a()(y.refreshWrapper, {
            [y.disabled]: Q
          }),
          onClick: V,
          children: [k.render(), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            className: y.colorTransition,
            children: C.intl.string(C.t.wzzjk5)
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: y.accountsWrapper,
        children: [(0, r.jsx)(S, {
          icon: (0, r.jsx)(d.pzj, {
            size: "sm"
          }),
          text: C.intl.string(C.t.br3uIi)
        }), (0, r.jsx)(S, {
          icon: (0, r.jsx)(d.iWm, {
            size: "sm"
          }),
          text: C.intl.string(C.t.XF4wuL),
          errors: q ? true : I.map(e => e.message),
          gameTile: q ? (0, r.jsx)(d.ua7, {
            "aria-label": n.config.messages.gameTitle,
            text: () => (0, r.jsxs)("div", {
              className: y.tooltip,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: n.config.messages.gameTitle
              }), (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: C.intl.string(C.t.STpNEB)
              })]
            }),
            children: e => {
              var t, s;
              return (0, r.jsx)("img", (t = O({}, e), s = s = {
                className: y.gameTile,
                alt: n.config.messages.gameTitle,
                src: (0, _.fh)(n, _.eC.GAME_TILE, L).url
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
              }), t))
            }
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
  } = e, i = s.length > 0, l = i ? d._3e : d.B_b;
  return (0, r.jsxs)("div", {
    className: y.connectionRow,
    children: [(0, r.jsxs)("div", {
      className: a()(y.connectionRowHeader, {
        [y.connectionRowHeaderError]: i
      }),
      children: [(0, r.jsxs)("div", {
        className: y.connectionRowHeaderContent,
        children: [t, (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        })]
      }), (0, r.jsxs)("div", {
        className: y.connectionRowHeaderContent,
        children: [o, (0, r.jsx)(l, {
          color: "currentColor",
          size: "sm",
          className: a()({
            [y.success]: !i,
            [y.error]: i
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: y.errorsContainer,
      children: s.map(e => (0, r.jsxs)("div", {
        className: y.errorRow,
        children: [(0, r.jsx)(d.aNP, {
          size: "sm",
          color: "currentColor",
          className: y.error
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: e
        })]
      }, e))
    })]
  })
}

function T(e) {
  (0, d.ZDy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 623249));
    return function(n) {
      return (0, r.jsx)(b.A, {
        overrideVisibility: true,
        questOrQuests: e.quest,
        questContent: x.jn.CONNECTIONS_MODAL,
        sourceQuestContent: e.sourceQuestContent,
        children: () => (0, r.jsx)(t, O({}, n, e))
      })
    }
  })
}