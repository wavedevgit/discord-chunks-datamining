/** Chunk was on 55777 **/
/** chunk id: 995712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk91709 = require("./91709.js");
let c = e => {
  var t;
  let {
    entry: n
  } = e, {
    id: c,
    icon: d,
    name: u
  } = n, _ = null != (t = l.ZP.getGuildIconURL({
    id: c,
    icon: d,
    size: 32
  })) ? t : true;
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(i.X6q, {
      className: s.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.nTe4HB)
    }), (0, r.jsx)("div", {
      className: s.guildContainer,
      children: (0, r.jsxs)("div", {
        className: s.guildInfo,
        children: [(0, r.jsx)(a.ZP, {
          mask: a.ZP.Masks.SQUIRCLE,
          width: 32,
          height: 32,
          className: s.guildIconMask,
          children: (0, r.jsx)("img", {
            src: _,
            alt: "",
            className: s.guildIcon
          })
        }), (0, r.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: u
        })]
      })
    })]
  })
}