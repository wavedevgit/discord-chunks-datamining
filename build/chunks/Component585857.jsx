/** Chunk was on web.js **/
/** chunk id: 585857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk39625 = require("./39625.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let {
    text: t,
    quest: n,
    sourceQuestContent: c
  } = e, d = (0, a.O5)();
  return (0, r.jsx)(i.P3F, {
    className: u.showConnectionsButton,
    onClick: () => {
      d({
        questId: n.id,
        questContent: s.jn.QUEST_BAR_V2,
        questContentCTA: a.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
        sourceQuestContent: c
      }), o.Z.open(l.oAB.CONNECTIONS)
    },
    children: (0, r.jsx)(i.Text, {
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
    sourceQuestContent: i
  } = e;
  return t.length > 0 ? (0, r.jsx)(_, {
    text: c.intl.string(c.t["qiS+xs"]),
    quest: n,
    sourceQuestContent: i
  }) : null
}

function h(e) {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: c.intl.string(c.t.EJFSvL)
    }), (0, r.jsx)(p, f({}, e))]
  })
}