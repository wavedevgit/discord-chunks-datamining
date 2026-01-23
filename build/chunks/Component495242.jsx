/** Chunk was on 22477 **/
/** chunk id: 495242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk805180 = require("./805180.js");

function m(e) {
  let {
    text: t,
    quest: n,
    sourceQuestContent: d
  } = e, m = (0, s.Ut)();
  return (0, a.jsx)(l.DUT, {
    className: u.Z0,
    onClick: () => {
      m({
        questId: n.id,
        questContent: o.uF.QUEST_BAR_V2,
        questContentCTA: s.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
        sourceQuestContent: d
      }), (0, i.openUserSettings)(r.X.CONNECTIONS_PANEL, {
        section: c.nc_.CONNECTIONS
      })
    },
    children: (0, a.jsx)(l.Text, {
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
    sourceQuestContent: l
  } = e;
  return t.length > 0 ? (0, a.jsx)(m, {
    text: d.intl.string(d.t["qiS+xj"]),
    quest: n,
    sourceQuestContent: l
  }) : null
}

function h(e) {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Text, {
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