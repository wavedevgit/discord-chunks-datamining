/** Chunk was on 51343 **/
/** chunk id: 376340, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  L: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200025 = require("./200025.js");

function c(e) {
  let {
    onClose: a,
    img: t,
    title: c,
    body: d,
    content: x
  } = e;
  return (0, n.jsxs)(l.Z, {
    children: [(0, n.jsxs)(r.xBx, {
      direction: s.Z.Direction.VERTICAL,
      className: o.header,
      separator: false,
      children: [(0, n.jsx)("div", {
        className: o.illustration,
        children: t
      }), (0, n.jsx)(r.Heading, {
        className: o.title,
        variant: "heading-xl/extrabold",
        children: c
      }), (0, n.jsx)(r.olH, {
        className: o.closeButton,
        onClick: a
      })]
    }), (0, n.jsxs)(r.hzk, {
      className: o.body,
      paddingFix: false,
      children: [(0, n.jsx)(r.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: d
      }), x]
    }), (0, n.jsx)(r.mzw, {
      className: o.footer,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: o.footerButton,
        children: (0, n.jsx)(r.Button, {
          variant: "primary",
          text: i.intl.string(i.t.i4jeWR),
          onClick: a
        })
      })
    })]
  })
}