/** Chunk was on 30634 **/
/** chunk id: 993173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js"), require("./35282.js");
var Chunk485589 = require("./485589.js"),
  Chunk247123 = require("./247123.js");
let l = new Set(Chunk485589.roles.keys()),
  i = {
    id: "aria-valid-roles",
    selector: "[role]",
    tags: ["wcag2a", "wcag412"],
    metadata: {
      description: "ARIA roles used must conform to valid values",
      help: "Ensures all elements with a role attribute use a valid value"
    },
    check: function(e) {
      for (let t of e.getAttribute("role").split(" "))
        if (!l.has(t)) return "Role '".concat(t, "' is not a valid ARIA role");
      return a.w
    }
  }