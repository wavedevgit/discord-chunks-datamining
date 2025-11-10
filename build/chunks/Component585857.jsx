/** Chunk was on 50433 **/
/** chunk id: 585857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk39625 = require("./39625.js");

function p(e) {
  let {
    text: t,
    quest: n,
    sourceQuestContent: d
  } = e, p = (0, i.O5)();
  return (0, r.jsx)(s.P3F, {
    className: u.showConnectionsButton,
    onClick: () => {
      p({
        questId: n.id,
        questContent: l.jn.QUEST_BAR_V2,
        questContentCTA: i.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
        sourceQuestContent: d
      }), (0, a.openUserSettings)(o.n.CONNECTIONS_PANEL, {
        section: c.oAB.CONNECTIONS
      })
    },
    children: (0, r.jsx)(s.Text, {
      "aria-label": t,
      color: "none",
      variant: "text-xxs/normal",
      children: t
    })
  })
}

function m(e) {
  let {
    xboxAndPlaystationAccounts: t,
    quest: n,
    sourceQuestContent: s
  } = e;
  return t.length > 0 ? (0, r.jsx)(p, {
    text: d.intl.string(d.t["qiS+xj"]),
    quest: n,
    sourceQuestContent: s
  }) : null
}

function g(e) {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: d.intl.string(d.t.EJFSvD)
    }), (0, r.jsx)(m, function(e) {
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
    }({}, e))]
  })
}