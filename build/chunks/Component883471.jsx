/** Chunk was on 58652 **/
/** chunk id: 883471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk75271 = require("./75271.js");
let c = e => {
  let {
    stageInstance: t
  } = e, n = i.A.getGuild(t.guild_id);
  return null == n ? null : (0, l.jsxs)("div", {
    className: o.kL,
    children: [(0, l.jsx)(r.Heading, {
      className: o.wx,
      variant: "heading-sm/semibold",
      children: s.intl.string(s.t.InbJ8x)
    }), (0, l.jsxs)("div", {
      className: o.bo,
      children: [(0, l.jsxs)("div", {
        className: o.OA,
        children: [(0, l.jsx)(a.A, {
          guild: n,
          size: a.A.Sizes.MINI,
          className: o.$f
        }), (0, l.jsx)(r.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: t.topic
      })]
    })]
  })
}