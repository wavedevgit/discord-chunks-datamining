/** Chunk was on 51343 **/
/** chunk id: 376340, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  L: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk771831 = require("./771831.js");

function c(e) {
  let {
    onClose: t,
    img: a,
    title: c,
    body: d,
    content: u
  } = e;
  return (0, l.jsxs)(r.Z, {
    children: [(0, l.jsxs)(n.xBx, {
      direction: s.Z.Direction.VERTICAL,
      className: o.header,
      separator: false,
      children: [(0, l.jsx)("div", {
        className: o.illustration,
        children: a
      }), (0, l.jsx)(n.Heading, {
        className: o.title,
        variant: "heading-xl/extrabold",
        children: c
      }), (0, l.jsx)(n.olH, {
        className: o.closeButton,
        onClick: t
      })]
    }), (0, l.jsxs)(n.hzk, {
      className: o.body,
      paddingFix: false,
      children: [(0, l.jsx)(n.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: d
      }), u]
    }), (0, l.jsx)(n.mzw, {
      className: o.footer,
      children: (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: o.footerButton,
        children: (0, l.jsx)(n.Button, {
          variant: "primary",
          text: i.intl.string(i.t.i4jeWR),
          onClick: t
        })
      })
    })]
  })
}