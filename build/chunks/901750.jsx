/** Chunk was on 75708 **/
/** chunk id: 901750, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk947239 = require("./947239.js");
let l = function(e) {
  let {
    hasGuildBoostSlots: t,
    hasAppliedGuildBoosts: l,
    hasBoostPerk: o,
    canAddBoosts: c
  } = e;
  return <div className={a.wrapper}>{<div className={a.guildBoostGemWrapper}><img alt={""} className={a.guildBoostGem} src={n(908635)} /></div>}{<div className={a.gradient}>{<r.X6q variant={"display-md"} className={a.heading}>{function(e) {
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
        })}</r.X6q>}{<svg viewBox={"0 0 660 210"} className={a.wave}><path d={"M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z"} /></svg>}</div>}</div>
}