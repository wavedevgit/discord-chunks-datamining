/** Chunk was on 30634 **/
/** chunk id: 807608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk485589 = require("./485589.js"),
  Chunk424706 = require("./424706.js"),
  Chunk14160 = require("./14160.js"),
  Chunk247123 = require("./247123.js");
let u = {
  id: "nested-interactive",
  selector: "button, a, ".concat(Array.from(Chunk485589.roles.entries()).reduce((e, t) => {
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
            switch ((0, a.cY)(e)) {
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
    }(e) && (0, l.p)(e) ? "Nested interactive element" : i.w
  }
}