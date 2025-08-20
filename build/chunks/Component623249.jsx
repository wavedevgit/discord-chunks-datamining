/** Chunk was on web.js **/
/** chunk id: 623249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => R,
  y: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301889 = require("./301889.js"),
  Chunk708901 = require("./708901.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  var t;
  let {
    questId: n,
    errorHints: a,
    transitionState: S,
    onClose: C,
    sourceQuestContent: R
  } = e, w = (0, g.sf)(n);
  null == w && C();
  let [D, x] = (0, i.useState)(a), L = (0, g.KX)(), j = (0, p.O5)(), M = null == (t = (0, h.WD)()) ? true : t.getId(), k = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), U = (0, y.g2)({
    useReducedMotion: k,
    className: I.colorTransition
  }), G = D.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), B = (0, m.Bz)(w), Z = (0, s.e7)([_.Z], () => _.Z.getState().theme), V = (0, l.wj)(Z) ? O.BRd.DARK : O.BRd.LIGHT, {
    startConsoleQuest: F,
    startingConsoleQuest: H
  } = (0, g.GI)({
    questId: w.id,
    beforeRequest: () => {
      U.startAnimation(), j({
        questId: w.id,
        questContent: E.jn.CONNECTIONS_MODAL,
        questContentCTA: p.jZ.DEFIBRILLATOR,
        sourceQuestContent: R
      })
    },
    afterRequest: e => {
      U.stopAnimation(), x(e)
    }
  }), Y = () => {
    C(), (0, m.V$)({
      quest: w
    }, {
      content: E.jn.CONNECTIONS_MODAL,
      ctaContent: p.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: M,
      sourceQuestContent: R
    })
  }, W = () => B ? (0, r.jsx)(u.ua7, {
    "aria-label": w.config.messages.gameTitle,
    text: () => (0, r.jsxs)("div", {
      className: I.tooltip,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: w.config.messages.gameTitle
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: v.intl.string(v.t.STpNEB)
      })]
    }),
    children: e => (0, r.jsx)("img", N(A({}, e), {
      className: I.gameTile,
      alt: w.config.messages.gameTitle,
      src: (0, b.fh)(w, b.eC.GAME_TILE, V).url
    }))
  }) : null;
  return (0, r.jsxs)(u.Y0X, {
    transitionState: S,
    size: u.CgR.DYNAMIC,
    className: I.modalRoot,
    parentComponent: "QuestConsoleConnectionErrorsModal",
    children: [(0, r.jsxs)(u.xBx, {
      direction: f.Z.Direction.VERTICAL,
      separator: false,
      className: I.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: I.modalTop,
        children: [(0, r.jsx)("div", {
          className: I.iconFrame,
          children: (0, r.jsx)("img", {
            className: I.icon,
            alt: "",
            src: T
          })
        }), (0, r.jsx)(u.olH, {
          className: I.closeBtn,
          onClick: C
        })]
      }), (0, r.jsx)(u.X6q, {
        variant: "heading-xl/bold",
        children: v.intl.string(v.t.W5lmKi)
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: I.upperBodyText,
        children: L.message
      })]
    }), (0, r.jsxs)(u.hzk, {
      className: I.modalContent,
      children: [(0, r.jsxs)("div", {
        className: I.contentHeader,
        children: [(0, r.jsx)(u.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: v.intl.string(v.t["+/hZMz"])
        }), (0, r.jsxs)(u.P3F, {
          className: o()(I.refreshWrapper, {
            [I.disabled]: H
          }),
          onClick: F,
          children: [U.render(), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            className: I.colorTransition,
            children: v.intl.string(v.t.wzzjk5)
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: I.accountsWrapper,
        children: [(0, r.jsx)(P, {
          icon: (0, r.jsx)(u.pzj, {
            size: "sm"
          }),
          text: v.intl.string(v.t.br3uIi)
        }), (0, r.jsx)(P, {
          icon: (0, r.jsx)(u.iWm, {
            size: "sm"
          }),
          text: v.intl.string(v.t.XF4wuL),
          errors: B ? true : G.map(e => e.message),
          gameTile: W()
        })]
      })]
    }), (0, r.jsxs)(u.mzw, {
      className: I.footer,
      children: [(0, r.jsx)(c.zx, {
        size: c.Ph.MIN,
        onClick: C,
        className: I.footerCloseButton,
        children: v.intl.string(v.t.cpT0Cg)
      }), (0, r.jsx)(u.zxk, {
        variant: "secondary",
        text: v.intl.string(v.t["qiS+xs"]),
        onClick: Y
      })]
    })]
  })
}

function P(e) {
  let {
    icon: t,
    text: n,
    errors: i = [],
    gameTile: a
  } = e, s = i.length > 0, l = s ? u._3e : u.B_b;
  return (0, r.jsxs)("div", {
    className: I.connectionRow,
    children: [(0, r.jsxs)("div", {
      className: o()(I.connectionRowHeader, {
        [I.connectionRowHeaderError]: s
      }),
      children: [(0, r.jsxs)("div", {
        className: I.connectionRowHeaderContent,
        children: [t, (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        })]
      }), (0, r.jsxs)("div", {
        className: I.connectionRowHeaderContent,
        children: [a, (0, r.jsx)(l, {
          color: "currentColor",
          size: "sm",
          className: o()({
            [I.success]: !s,
            [I.error]: s
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: I.errorsContainer,
      children: i.map(e => (0, r.jsxs)("div", {
        className: I.errorRow,
        children: [(0, r.jsx)(u.aNP, {
          size: "sm",
          color: "currentColor",
          className: I.error
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: e
        })]
      }, e))
    })]
  })
}

function w(e) {
  (0, u.ZDy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 623249));
    return n => (0, r.jsx)(t, A({}, n, e))
  })
}