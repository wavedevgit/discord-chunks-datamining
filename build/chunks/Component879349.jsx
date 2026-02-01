/** Chunk was on 42402 **/
/** chunk id: 879349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk71393 = require("./71393.js"),
  Chunk234021 = require("./234021.js");

function c(e) {
  let {
    channel: t
  } = e, n = (0, l.bG)([a.A], () => a.A.getGuild(t.guild_id)), c = (0, s.gU)(t, n);
  return null == c ? null : (0, r.jsxs)("div", {
    className: o.hY,
    children: [(0, r.jsx)(c, {
      className: o.p
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/semibold",
      color: "interactive-text-default",
      className: o.HA,
      children: t.name
    })]
  })
}