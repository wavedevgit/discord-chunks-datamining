/** Chunk was on 29725 **/
/** chunk id: 585857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574944 = require("./574944.js");

function m(e) {
  let {
    text: t,
    quest: n,
    sourceQuestContent: d
  } = e, m = (0, s.O5)();
  return (0, a.jsx)(r.P3F, {
    className: u.showConnectionsButton,
    onClick: () => {
      m({
        questId: n.id,
        questContent: o.jn.QUEST_BAR_V2,
        questContentCTA: s.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
        sourceQuestContent: d
      }), (0, i.openUserSettings)(l.n.CONNECTIONS_PANEL, {
        section: c.oAB.CONNECTIONS
      })
    },
    children: (0, a.jsx)(r.Text, {
      "aria-label": t,
      color: "none",
      variant: "text-xxs/normal",
      children: t
    })
  })
}

function p(e) {
  let {
    xboxAndPlaystationAccounts: t,
    quest: n,
    sourceQuestContent: r
  } = e;
  return t.length > 0 ? (0, a.jsx)(m, {
    text: d.intl.string(d.t["qiS+xj"]),
    quest: n,
    sourceQuestContent: r
  }) : null
}

function h(e) {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: d.intl.string(d.t.EJFSvD)
    }), (0, a.jsx)(p, function(e) {
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
    }({}, e))]
  })
}