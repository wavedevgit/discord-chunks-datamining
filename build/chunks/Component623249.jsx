/** Chunk was on 75393 **/
/** chunk id: 623249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O,
  y: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk387745 = require("./387745.js"),
  Chunk254579 = require("./254579.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301889 = require("./301889.js");

function O(e) {
  var t;
  let {
    quest: n,
    errorHints: i,
    transitionState: _,
    onClose: O,
    sourceQuestContent: N
  } = e, [P, w] = (0, r.useState)(i), I = (0, g.KX)(), k = (0, h.O5)(), R = null == (t = (0, x.WD)()) ? true : t.getId(), A = (0, o.e7)([m.Z], () => m.Z.useReducedMotion), D = (0, y.g2)({
    useReducedMotion: A,
    className: E.colorTransition
  }), Z = P.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), L = (0, j.Bz)(n), M = (0, o.e7)([p.Z], () => p.Z.getState().theme), U = (0, d.wj)(M) ? C.BR.DARK : C.BR.LIGHT, {
    startConsoleQuest: B,
    startingConsoleQuest: F
  } = (0, g.GI)({
    questId: n.id,
    beforeRequest: () => {
      D.startAnimation(), k({
        questId: n.id,
        questContent: f.jn.CONNECTIONS_MODAL,
        questContentCTA: h.jZ.DEFIBRILLATOR,
        sourceQuestContent: N
      })
    },
    afterRequest: e => {
      D.stopAnimation(), w(e)
    }
  });
  return (0, a.jsx)(s.Modal, {
    transitionState: _,
    onClose: O,
    title: S.intl.string(S.t.W5lmKt),
    subtitle: I.message,
    actions: [{
      variant: "secondary",
      onClick: () => void(O(), (0, v.V$)({
        quest: n
      }, {
        content: f.jn.CONNECTIONS_MODAL,
        ctaContent: h.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
        impressionId: R,
        sourceQuestContent: N
      })),
      text: S.intl.string(S.t["qiS+xj"])
    }, {
      variant: "primary",
      onClick: () => O(),
      text: S.intl.string(S.t.cpT0Cq)
    }],
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: E.contentHeader,
        children: [(0, a.jsx)(u.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: S.intl.string(S.t["+/hZM/"])
        }), (0, a.jsxs)(u.P3F, {
          className: l()(E.refreshWrapper, {
            [E.disabled]: F
          }),
          onClick: B,
          children: [D.render(), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            className: E.colorTransition,
            children: S.intl.string(S.t.wzzjk9)
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: E.accountsWrapper,
        children: [(0, a.jsx)(T, {
          icon: (0, a.jsx)(u.pzj, {
            size: "sm"
          }),
          text: S.intl.string(S.t.br3uIi)
        }), (0, a.jsx)(T, {
          icon: (0, a.jsx)(u.iWm, {
            size: "sm"
          }),
          text: S.intl.string(S.t.XF4wuA),
          errors: L ? true : Z.map(e => e.message),
          gameTile: L ? (0, a.jsx)(c.u, {
            "aria-label": n.config.messages.gameTitle,
            __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
              className: E.tooltip,
              children: [(0, a.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: n.config.messages.gameTitle
              }), (0, a.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: S.intl.string(S.t.STpNEC)
              })]
            }),
            children: (0, a.jsx)("img", {
              className: E.gameTile,
              alt: n.config.messages.gameTitle,
              src: (0, b.fh)(n, b.eC.GAME_TILE, U).url
            })
          }) : null
        })]
      })]
    })
  })
}

function T(e) {
  let {
    icon: t,
    text: n,
    errors: r = [],
    gameTile: i
  } = e, s = r.length > 0, o = s ? u._3e : u.B_b;
  return (0, a.jsxs)("div", {
    className: E.connectionRow,
    children: [(0, a.jsxs)("div", {
      className: l()(E.connectionRowHeader, {
        [E.connectionRowHeaderError]: s
      }),
      children: [(0, a.jsxs)("div", {
        className: E.connectionRowHeaderContent,
        children: [t, (0, a.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        })]
      }), (0, a.jsxs)("div", {
        className: E.connectionRowHeaderContent,
        children: [i, (0, a.jsx)(o, {
          color: "currentColor",
          size: "sm",
          className: l()({
            [E.success]: !s,
            [E.error]: s
          })
        })]
      })]
    }), (0, a.jsx)("div", {
      className: E.errorsContainer,
      children: r.map(e => (0, a.jsxs)("div", {
        className: E.errorRow,
        children: [(0, a.jsx)(u.aNP, {
          size: "sm",
          color: "currentColor",
          className: E.error
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: e
        })]
      }, e))
    })]
  })
}

function N(e) {
  (0, u.ZDy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 623249));
    return function(n) {
      return (0, a.jsx)(_.A, {
        overrideVisibility: true,
        questOrQuests: e.quest,
        questContent: f.jn.CONNECTIONS_MODAL,
        sourceQuestContent: e.sourceQuestContent,
        children: () => (0, a.jsx)(t, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({}, n, e))
      })
    }
  })
}