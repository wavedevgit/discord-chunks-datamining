/** Chunk was on 12236 **/
/** chunk id: 325272, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk715134 = require("./715134.js");
let c = e => {
  let {
    event: t
  } = e, n = (0, r.bG)([s.A], () => s.A.getGuild(t.guild_id));
  return null == n ? null : (0, l.jsxs)("div", {
    className: d.kL,
    children: [(0, l.jsx)(i.Heading, {
      className: d.wx,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.SDTOL7)
    }), (0, l.jsxs)("div", {
      className: d.bo,
      children: [(0, l.jsxs)("div", {
        className: d.OA,
        children: [(0, l.jsx)(a.A, {
          guild: n,
          size: a.A.Sizes.MINI,
          className: d.$f
        }), (0, l.jsx)(i.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: t.name
      })]
    })]
  })
}