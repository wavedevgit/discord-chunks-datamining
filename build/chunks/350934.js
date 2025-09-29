/** Chunk was on 30634 **/
/** chunk id: 350934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk424706 = require("./424706.js"),
  Chunk14160 = require("./14160.js"),
  Chunk247123 = require("./247123.js"),
  Chunk207662 = require("./207662.js");
let o = {
  id: "alt-text",
  selector: 'img, [role="img"]',
  tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Images must have alternative text.",
    help: ""
  },
  check: function(e) {
    return "" === (0, r.AB)(e) ? "IMG" === e.tagName && e.hasAttribute("alt") || (0, i.Uu)(e) || !(0, a.p)(e) ? l.w : "Image has no alternative text" : l.w
  }
}