/** Chunk was on 20501 **/
/** chunk id: 901750, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk863562 = require("./863562.js");
let l = function(e) {
  let {
    hasGuildBoostSlots: t,
    hasAppliedGuildBoosts: l,
    hasBoostPerk: o,
    canAddBoosts: c
  } = e;
  return (0, i.jsxs)("div", {
    className: a.wrapper,
    children: [(0, i.jsx)("div", {
      className: a.guildBoostGemWrapper,
      children: (0, i.jsx)("img", {
        alt: "",
        className: a.guildBoostGem,
        src: n(908635)
      })
    }), (0, i.jsxs)("div", {
      className: a.gradient,
      children: [(0, i.jsx)(r.X6q, {
        variant: "display-md",
        className: a.heading,
        children: function(e) {
          let {
            hasGuildBoostSlots: t,
            hasAppliedGuildBoosts: n,
            hasBoostPerk: i,
            canAddBoosts: r
          } = e;
          return r ? t ? i && !n ? s.intl.format(s.t.s9zQyM, {}) : s.intl.format(s.t.Rb8Jho, {}) : s.intl.string(s.t["2rh0b2"]) : s.intl.format(s.t.Rb8Jho, {})
        }({
          hasGuildBoostSlots: t,
          hasBoostPerk: o,
          hasAppliedGuildBoosts: l,
          canAddBoosts: c
        })
      }), (0, i.jsx)("svg", {
        viewBox: "0 0 660 210",
        className: a.wave,
        children: (0, i.jsx)("path", {
          d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z"
        })
      })]
    })]
  })
}