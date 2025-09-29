/** Chunk was on web.js **/
/** chunk id: 585857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => m
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
  Chunk63803 = require("./63803.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  let {
    text: t,
    quest: n,
    sourceQuestContent: u
  } = e, f = (0, s.O5)();
  return (0, r.jsx)(i.P3F, {
    className: d.showConnectionsButton,
    onClick: () => {
      f({
        questId: n.id,
        questContent: l.jn.QUEST_BAR_V2,
        questContentCTA: s.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
        sourceQuestContent: u
      }), (0, o.openUserSettings)(a.n.CONNECTIONS_PANEL, {
        section: c.oAB.CONNECTIONS
      })
    },
    children: (0, r.jsx)(i.Text, {
      "aria-label": t,
      color: "none",
      variant: "text-xxs/normal",
      children: t
    })
  })
}

function h(e) {
  let {
    xboxAndPlaystationAccounts: t,
    quest: n,
    sourceQuestContent: i
  } = e;
  return t.length > 0 ? (0, r.jsx)(p, {
    text: u.intl.string(u.t["qiS+xs"]),
    quest: n,
    sourceQuestContent: i
  }) : null
}

function m(e) {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: u.intl.string(u.t.EJFSvL)
    }), (0, r.jsx)(h, _({}, e))]
  })
}