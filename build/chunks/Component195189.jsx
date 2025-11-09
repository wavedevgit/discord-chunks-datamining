/** Chunk was on 29679 **/
/** chunk id: 195189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk449226 = require("./449226.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298392 = require("./298392.js");

function d(e) {
  let {
    title: t,
    details: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: c.itemContent,
      children: [(0, r.jsx)(l.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), "string" == typeof n ? (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: n
      }) : n]
    }), (0, r.jsx)(i.u, {
      text: o.intl.string(o.t.NQ4nCp),
      children: (0, r.jsx)(a.Z, {
        checked: true,
        disabled: true,
        onChange: s.dG,
        className: c.bringToFront
      })
    })]
  })
}