/** Chunk was on web.js **/
/** chunk id: 953683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk559374 = require("./559374.js"),
  i = {
    passive: true
  };
let a = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {},
  effect: function(e) {
    var t = e.state,
      n = e.instance,
      a = e.options,
      o = a.scroll,
      s = true === o || o,
      l = a.resize,
      c = true === l || l,
      u = (0, r.A)(t.elements.popper),
      d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(e) {
        e.addEventListener("scroll", n.update, i)
      }), c && u.addEventListener("resize", n.update, i),
      function() {
        s && d.forEach(function(e) {
          e.removeEventListener("scroll", n.update, i)
        }), c && u.removeEventListener("resize", n.update, i)
      }
  },
  data: {}
}