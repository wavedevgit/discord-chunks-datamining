/** Chunk was on 88615 **/
/** chunk id: 289588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk379512 = require("./379512.js"),
  Chunk568065 = require("./568065.js"),
  Chunk924190 = require("./924190.js");

function d(e) {
  let {
    count: t,
    type: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.k,
    children: [(0, r.jsxs)("div", {
      className: u.N,
      children: [(0, r.jsx)(l.BoostGemIcon, {
        size: "sm",
        color: n !== a.yG.AVAILABLE ? o.A.colors.TEXT_MUTED : o.A.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(i.DZT, {
        color: n !== a.yG.AVAILABLE ? "text-muted" : "text-strong",
        variant: "heading-lg/semibold",
        children: t
      })]
    }), (0, r.jsx)(i.EYj, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: (0, s.F)(t, n)
    })]
  })
}