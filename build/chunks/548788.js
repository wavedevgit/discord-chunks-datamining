/** Chunk was on 30634 **/
/** chunk id: 548788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk59049 = require("./59049.js"),
  Chunk14160 = require("./14160.js"),
  Chunk247123 = require("./247123.js"),
  Chunk207662 = require("./207662.js");
let o = {
  id: "input-label",
  selector: 'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
  tags: ["wcag2a", "wcag131", "wcag412", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Form inputs require a label",
    help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby."
  },
  check: function(e) {
    return "" === (0, r.AB)(e) ? (0, i.Uu)(e) || !(0, a.p)(e) ? l.w : "Form input has no label" : l.w
  }
}