/** Chunk was on 51343 **/
/** chunk id: 859097, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  C: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926375 = require("./926375.js"),
  Chunk387852 = require("./387852.js");

function u(e) {
  let {
    onContinue: t,
    onClose: a,
    title: u,
    body: x
  } = e;
  return (0, n.jsxs)(s.Z, {
    children: [(0, n.jsxs)(i.xBx, {
      "data-migration-pending": true,
      direction: l.Z.Direction.VERTICAL,
      className: c.header,
      separator: false,
      children: [(0, n.jsx)("img", {
        src: d,
        className: c.illustration,
        width: "254",
        height: "127",
        alt: ""
      }), (0, n.jsx)(i.Heading, {
        className: c.title,
        variant: "heading-xl/extrabold",
        children: u
      }), null != a && (0, n.jsx)(i.olH, {
        className: c.closeButton,
        onClick: a
      })]
    }), (0, n.jsx)(i.hzk, {
      "data-migration-pending": true,
      className: c.body,
      paddingFix: false,
      children: (0, n.jsx)(i.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: x
      })
    }), (0, n.jsx)(i.mzw, {
      "data-migration-pending": true,
      className: c.footer,
      children: (0, n.jsxs)(r.zx, {
        className: c.footerButton,
        color: r.zx.Colors.BRAND,
        onClick: t,
        children: [o.intl.string(o.t["7NqTJn"]), (0, n.jsx)(i.rgF, {
          color: "currentColor",
          className: c.launchIcon,
          size: "xs"
        })]
      })
    })]
  })
}