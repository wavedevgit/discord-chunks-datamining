/** Chunk was on web.js **/
/** chunk id: 625252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk342386 = require("./342386.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk861526 = require("./861526.js"),
  Chunk66094 = require("./66094.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
let v = "https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png";

function S(e) {
  let {
    inOldSettings: t = false
  } = e, n = (0, l.wj)((0, u.ZP)()), a = i.useMemo(() => ({
    backgroundImage: "url(".concat(v, ")")
  }), []), y = i.useCallback(() => {
    (0, d.default)(), (0, h.navigateToQuestHome)({
      fromContent: _.jn.QUEST_HOME_MOVE_CALLOUT
    }), f.default.track(m.rMx.QUEST_CONTENT_CLICKED, O({
      cta_name: p.jZ.VIEW_QUESTS,
      click_id: (0, s.Z)(),
      is_targeted: false
    }, (0, p.mH)(_.jn.QUEST_HOME_MOVE_CALLOUT)))
  }, []);
  return (0, r.jsx)("div", {
    className: o()(E.container, {
      [E.withMargin]: t
    }),
    style: a,
    children: (0, r.jsxs)(c.Kqy, {
      className: E.textContainer,
      justify: "space-between",
      children: [(0, r.jsxs)(c.Kqy, {
        gap: 4,
        children: [(0, r.jsxs)("div", {
          className: E.headerContainer,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: b,
            className: E.icon
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: g.intl.string(g.t.z8YP2A)
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: g.intl.string(g.t.HdKh65)
        })]
      }), (0, r.jsx)(c.Button, {
        variant: n ? "primary" : "overlay-primary",
        text: g.intl.string(g.t.GURBQl),
        onClick: y
      })]
    })
  })
}