/** Chunk was on 4787 **/
/** chunk id: 249214, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk685357 = require("./685357.js"),
  Chunk597807 = require("./597807.js"),
  Chunk763424 = require("./763424.js"),
  Chunk292177 = require("./292177.js");
let i = {
  id: "input-label",
  selector: 'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
  tags: ["wcag2a", "wcag131", "wcag412", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Form inputs require a label",
    help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby."
  },
  check: function(e) {
    return "" === (0, r.D0)(e) ? (0, o.i6)(e) || !(0, a.z)(e) ? l.o : "Form input has no label" : l.o
  }
}