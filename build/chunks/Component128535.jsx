/** Chunk was on web.js **/
/** chunk id: 128535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk959078 = require("./959078.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk553795 = require("./553795.js"),
  Chunk358085 = require("./358085.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk111382 = require("./111382.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926189 = require("./926189.js");
let O = 16,
  v = e => 0 === e.length ? y.warning : y.danger,
  I = (e, t) => 0 === e.length ? b.intl.formatToPlainString(b.t.gX0Qc3, {
    gameTitle: t
  }) : b.intl.formatToPlainString(b.t["28Ql29"], {
    gameTitle: t
  }),
  T = e => {
    let {
      quest: t,
      location: n,
      errors: i,
      gameTitle: o,
      consoleHelpArticle: s,
      expiredCredentialsInteractable: l,
      impressionId: u,
      sourceQuestContent: p
    } = e;
    if (0 === i.length) return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: b.intl.format(b.t.GXqvCw, {
        gameTitle: o
      })
    });
    let h = [],
      g = [s];
    (0, m.Nj)({
      quest: t
    }) && h.push((0, f.isWeb)() ? b.intl.string(b.t["0UTkPz"]) : b.intl.string(b.t.XGRUho));
    let E = [...h, ...i.map(e => {
      if (e.type !== a.K.EXPIRED_CREDENTIAL || !l) return e.message;
      let r = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
        i = (0, m.C9)(e),
        o = (0, m._j)(e);
      return b.intl.format(i, {
        account_name: null == r ? true : r.name,
        onClick: () => {
          (0, m.fY)({
            quest: t,
            platformType: o
          }, {
            content: n,
            ctaContent: _.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
            impressionId: u,
            sourceQuestContent: p
          })
        }
      })
    }), ...g];
    return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: E.reduce((e, t) => [...e, t, " "], [])
    })
  },
  S = function(e) {
    let t = e.quest.config.messages.gameTitle,
      n = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
      i = (0, E.k3)(e.quest.id, e.location, e.sourceQuestContent),
      a = (0, h.n)(),
      d = (0, _.O5)(),
      f = (0, p.aM)(),
      m = (0, E.g2)({
        useReducedMotion: n,
        className: y.refreshIcon
      }),
      {
        errorHints: S,
        startingConsoleQuest: A,
        startConsoleQuest: N
      } = (0, g.GI)({
        questId: e.quest.id,
        beforeRequest: () => {
          m.startAnimation(), d({
            questId: e.quest.id,
            questContent: e.location,
            questContentCTA: _.jZ.DEFIBRILLATOR,
            sourceQuestContent: e.sourceQuestContent
          })
        },
        afterRequest: m.stopAnimation
      });
    return (0, r.jsxs)("div", {
      className: o()(y.container, {
        [y.inFlight]: A
      }),
      children: [(0, r.jsxs)("div", {
        className: y.info,
        children: [(0, r.jsxs)("div", {
          className: y.header,
          children: [(0, r.jsx)(c.Mgn, {
            className: o()(y.headerIcon, v(S)),
            size: "custom",
            color: "currentColor",
            width: O,
            height: O
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: I(S, t)
          })]
        }), T({
          quest: e.quest,
          errors: S,
          gameTitle: t,
          location: e.location,
          consoleHelpArticle: i,
          expiredCredentialsInteractable: a,
          impressionId: f,
          sourceQuestContent: e.sourceQuestContent
        })]
      }), (0, r.jsx)("div", {
        className: y.cta,
        children: (0, r.jsx)(l.zx, {
          color: l.Tt.PRIMARY,
          onClick: N,
          disabled: A,
          children: (0, r.jsxs)("div", {
            className: y.ctaInner,
            children: [m.render(), b.intl.string(b.t.nPThNT)]
          })
        })
      })]
    })
  }