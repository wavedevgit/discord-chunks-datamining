/** Chunk was on 4787 **/
/** chunk id: 908665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js"), require("./321073.js");
var Chunk944181 = require("./944181.js"),
  Chunk685357 = require("./685357.js"),
  Chunk597807 = require("./597807.js"),
  Chunk763424 = require("./763424.js");
let i = {
  id: "nested-interactive",
  selector: "button, a, ".concat(Array.from(Chunk944181.roles.entries()).reduce((e, t) => {
    let [n, r] = t;
    returntrue === r.childrenPresentational && e.push('[role="'.concat(n, '"]')), e
  }, []).join(", ")),
  tags: [],
  metadata: {
    description: "Interactive controls must not be nested",
    help: "Nested focusable elements are inaccessible to screen readers"
  },
  check: function(e) {
    return ! function(e) {
      let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
        n = t.nextNode();
      for (; null !== n;) {
        if (n !== e && function(e) {
            switch (e.nodeName) {
              case "IFRAME":
              case "EMBED":
              case "DETAILS":
              case "LABEL":
                returntrue;
              case "INPUT":
                return "hidden" !== e.getAttribute("type")
            }
            switch ((0, a.Lw)(e)) {
              case "link":
                return e.hasAttribute("href");
              case "audio":
                return e.hasAttribute("controls");
              case "img":
                return e.hasAttribute("usemap");
              case "button":
                returntrue;
              default:
                returnfalse
            }
          }(n)) returnfalse;
        n = t.nextNode()
      }
      returntrue
    }(e) && (0, l.z)(e) ? "Nested interactive element" : o.o
  }
}