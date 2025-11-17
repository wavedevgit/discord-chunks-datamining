/** Chunk was on 51343 **/
/** chunk id: 859097, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  C: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk771831 = require("./771831.js"),
  Chunk387852 = require("./387852.js");

function x(e) {
  let {
    onContinue: a,
    onClose: t,
    title: x,
    body: u
  } = e;
  return (0, n.jsxs)(i.Z, {
    children: [(0, n.jsxs)(s.xBx, {
      direction: l.Z.Direction.VERTICAL,
      className: c.header,
      separator: false,
      children: [(0, n.jsx)("img", {
        src: d,
        className: c.illustration,
        width: "254",
        height: "127",
        alt: ""
      }), (0, n.jsx)(s.Heading, {
        className: c.title,
        variant: "heading-xl/extrabold",
        children: x
      }), null != t && (0, n.jsx)(s.olH, {
        className: c.closeButton,
        onClick: t
      })]
    }), (0, n.jsx)(s.hzk, {
      className: c.body,
      paddingFix: false,
      children: (0, n.jsx)(s.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: u
      })
    }), (0, n.jsx)(s.mzw, {
      className: c.footer,
      children: (0, n.jsxs)(r.zx, {
        className: c.footerButton,
        color: r.zx.Colors.BRAND,
        onClick: a,
        children: [o.intl.string(o.t["7NqTJn"]), (0, n.jsx)(s.rgF, {
          color: "currentColor",
          className: c.launchIcon,
          size: "xs"
        })]
      })
    })]
  })
}