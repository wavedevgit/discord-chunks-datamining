/** Chunk was on web.js **/
/** chunk id: 901750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632357 = require("./632357.js");

function s(e) {
  let {
    hasGuildBoostSlots: t,
    hasAppliedGuildBoosts: n,
    hasBoostPerk: r,
    canAddBoosts: i
  } = e;
  return i ? t ? r && !n ? o.intl.format(o.t.s9zQyG, {}) : o.intl.format(o.t.Rb8Jhs, {}) : o.intl.string(o.t["2rh0by"]) : o.intl.format(o.t.Rb8Jhs, {})
}
let l = function(e) {
  let {
    hasGuildBoostSlots: t,
    hasAppliedGuildBoosts: o,
    hasBoostPerk: l,
    canAddBoosts: c
  } = e;
  return (0, r.jsxs)("div", {
    className: a.wrapper,
    children: [(0, r.jsx)("div", {
      className: a.guildBoostGemWrapper,
      children: (0, r.jsx)("img", {
        alt: "",
        className: a.guildBoostGem,
        src: n(908635)
      })
    }), (0, r.jsxs)("div", {
      className: a.gradient,
      children: [(0, r.jsx)(i.Heading, {
        variant: "display-md",
        className: a.heading,
        children: s({
          hasGuildBoostSlots: t,
          hasBoostPerk: l,
          hasAppliedGuildBoosts: o,
          canAddBoosts: c
        })
      }), (0, r.jsx)("svg", {
        viewBox: "0 0 660 210",
        className: a.wave,
        children: (0, r.jsx)("path", {
          d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z"
        })
      })]
    })]
  })
}