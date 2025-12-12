/** Chunk was on web.js **/
/** chunk id: 874365, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk21730 = require("./21730.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305348 = require("./305348.js"),
  Chunk87181 = require("./87181.js");

function h(e, t, n) {
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
      h(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    questId: t,
    questContent: n,
    fullWidth: i
  } = e, o = () => {
    (0, u.navigateToQuestHome)({
      fromContent: n
    }), l.default.track(f.rMx.QUEST_CONTENT_CLICKED, g({
      quest_id: t,
      click_id: (0, a.Z)(),
      cta_name: c.jZ.VIEW_QUESTS,
      is_targeted: false
    }, (0, c.mH)(n)))
  };
  return (0, r.jsx)("div", {
    className: _.buttonContainer,
    children: (0, r.jsx)(s.Button, {
      fullWidth: i,
      variant: "primary",
      onClick: o,
      text: p.intl.string(p.t.GURBQl)
    })
  })
}

function b(e) {
  let {
    questId: t,
    fallbackReason: n,
    bodyText: i,
    questContent: a
  } = e, {
    containerRef: l,
    size: u
  } = (0, d.h)();
  return (0, c.Zk)(n, t), (0, r.jsxs)("div", {
    ref: e => {
      l.current = e
    },
    className: o()(_.container, {
      [_.wide]: "lg" === u,
      [_.tall]: "lg" !== u
    }),
    children: [(0, r.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, r.jsx)(s.Heading, {
        variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
        color: "text-strong",
        children: p.intl.string(p.t.vnP31W)
      }), (0, r.jsx)(s.Text, {
        variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: _.__invalid_mobileWebCopy,
        children: i
      }), (0, r.jsx)(E, {
        questId: t,
        questContent: a,
        fullWidth: "lg" !== u
      })]
    }), (0, r.jsx)("div", {
      className: _.imgContainer,
      children: (0, r.jsx)("img", {
        src: m,
        alt: "",
        className: _.missingQuestImage
      })
    })]
  })
}