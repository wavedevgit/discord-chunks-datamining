/** Chunk was on 30634 **/
/** chunk id: 883349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk424706 = require("./424706.js"),
  Chunk14160 = require("./14160.js"),
  Chunk247123 = require("./247123.js"),
  Chunk207662 = require("./207662.js");
let o = {
  id: "button-name",
  selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
  tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Ensures buttons have discernible text",
    help: ""
  },
  check: function(e) {
    return "" !== (0, r.AB)(e) || (0, i.Uu)(e) || !(0, a.p)(e) ? l.w : "button's accessible name is empty."
  }
}