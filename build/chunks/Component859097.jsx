/** Chunk was on 51343 **/
/** chunk id: 859097, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  C: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926375 = require("./926375.js"),
  Chunk387852 = require("./387852.js");

function d(e) {
  let {
    onContinue: t,
    onClose: a,
    title: d,
    body: u
  } = e;
  return (0, n.jsxs)(l.Z, {
    children: [(0, n.jsxs)(i.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: o.header,
      separator: false,
      children: [(0, n.jsx)("img", {
        src: c,
        className: o.illustration,
        width: "254",
        height: "127",
        alt: ""
      }), (0, n.jsx)(i.Heading, {
        className: o.title,
        variant: "heading-xl/extrabold",
        children: d
      }), null != a && (0, n.jsx)(i.olH, {
        className: o.closeButton,
        onClick: a
      })]
    }), (0, n.jsx)(i.hzk, {
      "data-migration-pending": true,
      className: o.body,
      paddingFix: false,
      children: (0, n.jsx)(i.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: u
      })
    }), (0, n.jsx)(i.mzw, {
      "data-migration-pending": true,
      className: o.footer,
      children: (0, n.jsx)(i.Button, {
        text: s.intl.format(s.t["4X7vPo"], {
          popoutWindowIcon: {},
          popoutWindowIconHook: () => (0, n.jsx)(i.rgF, {
            color: "currentColor",
            className: o.launchIcon,
            size: "xs"
          })
        }),
        onClick: t,
        fullWidth: true
      })
    })]
  })
}