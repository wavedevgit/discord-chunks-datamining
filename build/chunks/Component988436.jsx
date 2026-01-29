/** Chunk was on 65298 **/
/** chunk id: 988436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T,
  i: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk544028 = require("./544028.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk971649 = require("./971649.js"),
  Chunk901406 = require("./901406.js"),
  Chunk792620 = require("./792620.js"),
  Chunk73473 = require("./73473.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk868566 = require("./868566.js");

function T(e) {
  var t;
  let {
    quest: n,
    errorHints: r,
    transitionState: y,
    onClose: T,
    sourceQuestContent: N
  } = e, [w, I] = (0, l.useState)(r), P = (0, x.UX)(), k = (0, f.Ut)(), R = null == (t = (0, v.vU)()) ? true : t.getId(), D = (0, o.bG)([m.A], () => m.A.useReducedMotion), M = (0, A.Xf)({
    useReducedMotion: D,
    className: O.Zf
  }), L = w.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), U = (0, _.YL)(n), B = (0, o.bG)([p.A], () => p.A.getState().theme), G = (0, d.Mw)(B) ? C.NJ.DARK : C.NJ.LIGHT, {
    startConsoleQuest: F,
    startingConsoleQuest: V
  } = (0, x.Wj)({
    questId: n.id,
    beforeRequest: () => {
      M.startAnimation(), k({
        questId: n.id,
        questContent: h.uF.CONNECTIONS_MODAL,
        questContentCTA: b.Cy.DEFIBRILLATOR,
        sourceQuestContent: N
      })
    },
    afterRequest: e => {
      M.stopAnimation(), I(e)
    }
  });
  return (0, a.jsx)(s.Modal, {
    transitionState: y,
    onClose: T,
    title: S.intl.string(S.t.W5lmKt),
    subtitle: P.message,
    actions: [{
      variant: "secondary",
      onClick: () => void(T(), (0, j.b6)({
        quest: n
      }, {
        content: h.uF.CONNECTIONS_MODAL,
        ctaContent: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
        impressionId: R,
        sourceQuestContent: N
      })),
      text: S.intl.string(S.t["qiS+xj"])
    }, {
      variant: "primary",
      onClick: () => T(),
      text: S.intl.string(S.t.cpT0Cq)
    }],
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: O.$Q,
        children: [(0, a.jsx)(u.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: S.intl.string(S.t["+/hZM/"])
        }), (0, a.jsxs)(u.DUT, {
          className: i()(O.Tm, {
            [O.r9]: V
          }),
          onClick: F,
          children: [M.render(), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            className: O.Zf,
            children: S.intl.string(S.t.wzzjk9)
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: O.ei,
        children: [(0, a.jsx)(E, {
          icon: (0, a.jsx)(u.kN9, {
            size: "sm"
          }),
          text: S.intl.string(S.t.br3uIi)
        }), (0, a.jsx)(E, {
          icon: (0, a.jsx)(u._xR, {
            size: "sm"
          }),
          text: S.intl.string(S.t.XF4wuA),
          errors: U ? true : L.map(e => e.message),
          gameTile: U ? (0, a.jsx)(c.m, {
            "aria-label": n.config.messages.gameTitle,
            __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
              className: O.YL,
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
              className: O.rC,
              alt: n.config.messages.gameTitle,
              src: (0, g.tW)(n, g.fY.GAME_TILE, G).url
            })
          }) : null
        })]
      })]
    })
  })
}

function E(e) {
  let {
    icon: t,
    text: n,
    errors: l = [],
    gameTile: r
  } = e, s = l.length > 0, o = s ? u.esW : u.QtE;
  return (0, a.jsxs)("div", {
    className: O.dJ,
    children: [(0, a.jsxs)("div", {
      className: i()(O.w_, {
        [O.qu]: s
      }),
      children: [(0, a.jsxs)("div", {
        className: O.d3,
        children: [t, (0, a.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        })]
      }), (0, a.jsxs)("div", {
        className: O.d3,
        children: [r, (0, a.jsx)(o, {
          color: "currentColor",
          size: "sm",
          className: i()({
            [O.kX]: !s,
            [O.z3]: s
          })
        })]
      })]
    }), (0, a.jsx)("div", {
      className: O.Tt,
      children: l.map(e => (0, a.jsxs)("div", {
        className: O.Ff,
        children: [(0, a.jsx)(u.id, {
          size: "sm",
          color: "currentColor",
          className: O.z3
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
  (0, u.mMO)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 988436));
    return function(n) {
      return (0, a.jsx)(y.R, {
        overrideVisibility: true,
        questOrQuests: e.quest,
        questContent: h.uF.CONNECTIONS_MODAL,
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