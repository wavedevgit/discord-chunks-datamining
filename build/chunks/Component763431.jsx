/** Chunk was on 73705 **/
/** chunk id: 763431, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk99563 = require("./99563.js");
let s = e => {
  let {
    guild: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(i.Heading, {
      className: o.header,
      variant: "heading-sm/semibold",
      children: a.intl.string(a.t["0ox7Hh"])
    }), (0, r.jsx)("div", {
      className: o.guildContainer,
      children: (0, r.jsxs)("div", {
        className: o.guildInfo,
        children: [(0, r.jsx)("div", {
          className: o.guildIcon,
          children: (0, r.jsx)(l.Z, {
            guild: t,
            size: l.Z.Sizes.LARGE
          })
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(i.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: t.name
          })
        })]
      })
    })]
  })
}