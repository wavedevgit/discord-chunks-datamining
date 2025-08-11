/** Chunk was on 54844 **/
/** chunk id: 763431, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179979 = require("./179979.js");
let o = e => {
  let {
    guild: t
  } = e;
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(l.X6q, {
      className: s.header,
      variant: "heading-sm/semibold",
      children: a.intl.string(a.t["0ox7Hh"])
    }), (0, r.jsx)("div", {
      className: s.guildContainer,
      children: (0, r.jsxs)("div", {
        className: s.guildInfo,
        children: [(0, r.jsx)("div", {
          className: s.guildIcon,
          children: (0, r.jsx)(i.Z, {
            guild: t,
            size: i.Z.Sizes.LARGE
          })
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: t.name
          })
        })]
      })
    })]
  })
}