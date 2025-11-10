/** Chunk was on 36415 **/
/** chunk id: 149865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk337030 = require("./337030.js");
let c = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n
  } = t, c = t.layout.filter(e => {
    var t, n;
    return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
  }), s = n();
  return (0, r.jsxs)("fieldset", {
    children: [(0, r.jsx)(o.Text, {
      tag: "legend",
      variant: "text-md/semibold",
      color: "header-primary",
      className: a.title,
      children: s
    }), (0, r.jsx)(o.Kqy, {
      direction: "vertical",
      gap: 8,
      children: c.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(i.Z, {
          node: e
        }), t !== c.length - 1 && (0, r.jsx)(o.izJ, {
          className: a.divider
        })]
      }, e.key))
    })]
  })
})