/** Chunk was on 54844 **/
/** chunk id: 995712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  } = n, m = null != (t = a.ZP.getGuildIconURL({
    id: c,
    icon: d,
    size: 32
  })) ? t : true;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(l.Heading, {
      className: o.header,
      variant: "heading-sm/semibold",
      children: s.intl.string(s.t.nTe4HC)
    }), (0, r.jsx)("div", {
      className: o.guildContainer,
      children: (0, r.jsxs)("div", {
        className: o.guildInfo,
        children: [(0, r.jsx)(i.ZP, {
          mask: i.ZP.Masks.SQUIRCLE,
          width: 32,
          height: 32,
          className: o.guildIconMask,
          children: (0, r.jsx)("img", {
            src: m,
            alt: "",
            className: o.guildIcon
          })
        }), (0, r.jsx)(l.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: u
        })]
      })
    })]
  })
}