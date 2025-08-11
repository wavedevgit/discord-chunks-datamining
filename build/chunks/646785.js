/** Chunk was on 30634 **/
/** chunk id: 646785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk485589 = require("./485589.js"),
  Chunk424706 = require("./424706.js"),
  Chunk14160 = require("./14160.js"),
  Chunk247123 = require("./247123.js"),
  Chunk207662 = require("./207662.js");
let o = {
  id: "aria-allowed-attributes",
  selector: Chunk207662.J8,
  tags: ["wcag2a", "wcag412"],
  metadata: {
    description: "Only use supported ARIA attributes",
    help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page."
  },
  check: function(e) {
    let t = (0, a.cY)(e),
      n = r.roles.get(t);
    if (null == n) return i.w;
    for (let r of u.cg)
      if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
        if ("aria-expanded" === r && e.hasAttribute("aria-controls")) continue;
        if (!(0, l.p)(e)) return i.w;
        return "'".concat(t, "' does not support the ").concat(r, " attribute")
      } return i.w
  }
}