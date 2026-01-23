/** Chunk was on web.js **/
/** chunk id: 665816, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk216456 = require("./216456.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk394900 = require("./394900.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933674 = require("./933674.js"),
  Chunk956324 = require("./956324.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    questId: t,
    questContent: n,
    fullWidth: i
  } = e, a = () => {
    (0, u.navigateToQuestHome)({
      fromContent: n
    }), l.default.track(f.HAw.QUEST_CONTENT_CLICKED, g({
      quest_id: t,
      click_id: (0, s.A)(),
      cta_name: c.Cy.VIEW_QUESTS,
      is_targeted: false
    }, (0, c.fF)(n)))
  };
  return (0, r.jsx)("div", {
    className: _.UD,
    children: (0, r.jsx)(o.Button, {
      fullWidth: i,
      variant: "primary",
      onClick: a,
      text: p.intl.string(p.t.GURBQl)
    })
  })
}

function y(e) {
  let {
    questId: t,
    fallbackReason: n,
    bodyText: i,
    questContent: s
  } = e, {
    containerRef: l,
    size: u
  } = (0, d.L)();
  return (0, c.Ii)(n, t), (0, r.jsxs)("div", {
    ref: e => {
      l.current = e
    },
    className: a()(_.kL, {
      [_.U]: "lg" === u,
      [_.SP]: "lg" !== u
    }),
    children: [(0, r.jsxs)("div", {
      className: _.hQ,
      children: [(0, r.jsx)(o.Heading, {
        variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
        color: "text-strong",
        children: p.intl.string(p.t.vnP31W)
      }), (0, r.jsx)(o.Text, {
        variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: _.__invalid_mobileWebCopy,
        children: i
      }), (0, r.jsx)(E, {
        questId: t,
        questContent: s,
        fullWidth: "lg" !== u
      })]
    }), (0, r.jsx)("div", {
      className: _.Dg,
      children: (0, r.jsx)("img", {
        src: h,
        alt: "",
        className: _.Wg
      })
    })]
  })
}