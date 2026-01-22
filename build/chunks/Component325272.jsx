/** Chunk was on 58652 **/
/** chunk id: 325272, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk715134 = require("./715134.js");
let d = e => {
  let {
    event: t
  } = e, n = (0, r.bG)([s.A], () => s.A.getGuild(t.guild_id));
  return null == n ? null : (0, l.jsxs)("div", {
    className: c.kL,
    children: [(0, l.jsx)(a.Heading, {
      className: c.wx,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.SDTOL7)
    }), (0, l.jsxs)("div", {
      className: c.bo,
      children: [(0, l.jsxs)("div", {
        className: c.OA,
        children: [(0, l.jsx)(i.A, {
          guild: n,
          size: i.A.Sizes.MINI,
          className: c.$f
        }), (0, l.jsx)(a.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: t.name
      })]
    })]
  })
}