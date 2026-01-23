/** Chunk was on 58831 **/
/** chunk id: 677074, original params: a,e,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk743981 = require("./743981.js"),
  Chunk283306 = require("./283306.js");
let b = Chunk64700.memo(function(a) {
  let {
    guildId: e,
    guildProfile: s
  } = a;
  return (0, d.jsx)("div", {
    className: r.I8,
    children: (0, d.jsxs)("div", {
      className: r.Tc,
      children: [null != s.badge && (0, d.jsx)(l.Z9, {
        src: (0, i.gC)(e, s.badge, n.Sl.SIZE_32),
        size: n.Sl.SIZE_32,
        className: r.qS
      }), (0, d.jsx)(t.Text, {
        tag: "span",
        variant: "heading-xl/semibold",
        children: s.tag
      })]
    })
  })
})