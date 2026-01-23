/** Chunk was on 58652 **/
/** chunk id: 717612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk611090 = require("./611090.js");
let c = e => {
  let {
    entry: t
  } = e, n = a.A.getChannel(t.channelId);
  if (null == n) return null;
  let c = s.A.getGuild(n.guild_id);
  return null == c ? null : (0, l.jsxs)("div", {
    className: d.kL,
    children: [(0, l.jsx)(r.Heading, {
      className: d.wx,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.nTe4HC)
    }), (0, l.jsxs)("div", {
      className: d.bo,
      children: [(0, l.jsxs)("div", {
        className: d.mo,
        children: [(0, l.jsx)(i.A, {
          guild: c,
          size: i.A.Sizes.MINI,
          className: d.xG
        }), (0, l.jsx)(r.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: c.name
        })]
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: t.name
      })]
    })]
  })
}