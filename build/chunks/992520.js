/** Chunk was on 4787 **/
/** chunk id: 992520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk944181 = require("./944181.js"),
  Chunk685357 = require("./685357.js"),
  Chunk597807 = require("./597807.js"),
  Chunk763424 = require("./763424.js"),
  Chunk292177 = require("./292177.js");
let u = {
  id: "aria-allowed-attributes",
  selector: Chunk292177.vN,
  tags: ["wcag2a", "wcag412"],
  metadata: {
    description: "Only use supported ARIA attributes",
    help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page."
  },
  check: function(e) {
    let t = (0, a.Lw)(e),
      n = r.roles.get(t);
    if (null == n) return o.o;
    for (let r of i.ye)
      if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
        if ("aria-expanded" === r && e.hasAttribute("aria-controls")) continue;
        if (!(0, l.z)(e)) return o.o;
        return "'".concat(t, "' does not support the ").concat(r, " attribute")
      } return o.o
  }
}