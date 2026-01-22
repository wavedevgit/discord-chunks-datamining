/** Chunk was on 4787 **/
/** chunk id: 283014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk685357 = require("./685357.js"),
  Chunk597807 = require("./597807.js"),
  Chunk763424 = require("./763424.js"),
  Chunk292177 = require("./292177.js");
let i = {
  id: "alt-text",
  selector: 'img, [role="img"]',
  tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Images must have alternative text.",
    help: ""
  },
  check: function(e) {
    return "" === (0, r.D0)(e) ? "IMG" === e.tagName && e.hasAttribute("alt") || (0, o.i6)(e) || !(0, a.z)(e) ? l.o : "Image has no alternative text" : l.o
  }
}