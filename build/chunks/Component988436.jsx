/** Chunk was on 22477 **/
/** chunk id: 988436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O,
  i: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk544028 = require("./544028.js"),
  Chunk216456 = require("./216456.js"),
  Chunk906822 = require("./906822.jsx"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk901406 = require("./901406.js"),
  Chunk792620 = require("./792620.js"),
  Chunk73473 = require("./73473.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk868566 = require("./868566.js");

function O(e) {
  var t;
  let {
    quest: n,
    errorHints: i,
    transitionState: y,
    onClose: O,
    sourceQuestContent: N
  } = e, [T, I] = (0, l.useState)(i), w = (0, b.UX)(), k = (0, h.Ut)(), P = null == (t = (0, f.vU)()) ? true : t.getId(), R = (0, o.bG)([m.A], () => m.A.useReducedMotion), D = (0, _.Xf)({
    useReducedMotion: R,
    className: S.Zf
  }), M = T.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), L = (0, j.YL)(n), U = (0, o.bG)([p.A], () => p.A.getState().theme), B = (0, d.Mw)(U) ? A.NJ.DARK : A.NJ.LIGHT, {
    startConsoleQuest: G,
    startingConsoleQuest: F
  } = (0, b.Wj)({
    questId: n.id,
    beforeRequest: () => {
      D.startAnimation(), k({
        questId: n.id,
        questContent: x.uF.CONNECTIONS_MODAL,
        questContentCTA: h.Cy.DEFIBRILLATOR,
        sourceQuestContent: N
      })
    },
    afterRequest: e => {
      D.stopAnimation(), I(e)
    }
  });
  return (0, a.jsx)(s.Modal, {
    transitionState: y,
    onClose: O,
    title: C.intl.string(C.t.W5lmKt),
    subtitle: w.message,
    actions: [{
      variant: "secondary",
      onClick: () => void(O(), (0, v.b6)({
        quest: n
      }, {
        content: x.uF.CONNECTIONS_MODAL,
        ctaContent: h.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
        impressionId: P,
        sourceQuestContent: N
      })),
      text: C.intl.string(C.t["qiS+xj"])
    }, {
      variant: "primary",
      onClick: () => O(),
      text: C.intl.string(C.t.cpT0Cq)
    }],
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: S.$Q,
        children: [(0, a.jsx)(u.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: C.intl.string(C.t["+/hZM/"])
        }), (0, a.jsxs)(u.DUT, {
          className: r()(S.Tm, {
            [S.r9]: F
          }),
          onClick: G,
          children: [D.render(), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            className: S.Zf,
            children: C.intl.string(C.t.wzzjk9)
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: S.ei,
        children: [(0, a.jsx)(E, {
          icon: (0, a.jsx)(u.kN9, {
            size: "sm"
          }),
          text: C.intl.string(C.t.br3uIi)
        }), (0, a.jsx)(E, {
          icon: (0, a.jsx)(u._xR, {
            size: "sm"
          }),
          text: C.intl.string(C.t.XF4wuA),
          errors: L ? true : M.map(e => e.message),
          gameTile: L ? (0, a.jsx)(c.m, {
            "aria-label": n.config.messages.gameTitle,
            __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
              className: S.YL,
              children: [(0, a.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: n.config.messages.gameTitle
              }), (0, a.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: C.intl.string(C.t.STpNEC)
              })]
            }),
            children: (0, a.jsx)("img", {
              className: S.rC,
              alt: n.config.messages.gameTitle,
              src: (0, g.tW)(n, g.fY.GAME_TILE, B).url
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
    gameTile: i
  } = e, s = l.length > 0, o = s ? u.esW : u.QtE;
  return (0, a.jsxs)("div", {
    className: S.dJ,
    children: [(0, a.jsxs)("div", {
      className: r()(S.w_, {
        [S.qu]: s
      }),
      children: [(0, a.jsxs)("div", {
        className: S.d3,
        children: [t, (0, a.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        })]
      }), (0, a.jsxs)("div", {
        className: S.d3,
        children: [i, (0, a.jsx)(o, {
          color: "currentColor",
          size: "sm",
          className: r()({
            [S.kX]: !s,
            [S.z3]: s
          })
        })]
      })]
    }), (0, a.jsx)("div", {
      className: S.Tt,
      children: l.map(e => (0, a.jsxs)("div", {
        className: S.Ff,
        children: [(0, a.jsx)(u.id, {
          size: "sm",
          color: "currentColor",
          className: S.z3
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
        questContent: x.uF.CONNECTIONS_MODAL,
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