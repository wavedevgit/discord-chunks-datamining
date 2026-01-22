/** Chunk was on 58831 **/
/** chunk id: 677074, original params: e,s,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk743981 = require("./743981.js"),
  Chunk283306 = require("./283306.js");
let h = Chunk64700.memo(function(e) {
  let {
    guildId: s,
    guildProfile: a
  } = e;
  return (0, d.jsx)("div", {
    className: n.I8,
    children: (0, d.jsxs)("div", {
      className: n.Tc,
      children: [null != a.badge && (0, d.jsx)(t.Z9, {
        src: (0, l.gC)(s, a.badge, r.Sl.SIZE_32),
        size: r.Sl.SIZE_32,
        className: n.qS
      }), (0, d.jsx)(i.Text, {
        tag: "span",
        variant: "heading-xl/semibold",
        children: a.tag
      })]
    })
  })
})