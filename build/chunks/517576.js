/** Chunk was on 4787 **/
/** chunk id: 517576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./747238.js");
var Chunk944181 = require("./944181.js"),
  Chunk763424 = require("./763424.js");
let l = new Set(Chunk944181.roles.keys()),
  o = {
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
      return a.o
    }
  }