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
  Chunk926375 = require("./926375.js");

function c(e) {
  let {
    onClose: t,
    img: a,
    title: c,
    body: d,
    content: u
  } = e;
  return (0, n.jsxs)(l.Z, {
    children: [(0, n.jsxs)(r.xBx, {
      "data-migration-pending": true,
      direction: i.Z.Direction.VERTICAL,
      className: o.header,
      separator: false,
      children: [(0, n.jsx)("div", {
        className: o.illustration,
        children: a
      }), (0, n.jsx)(r.Heading, {
        className: o.title,
        variant: "heading-xl/extrabold",
        children: c
      }), (0, n.jsx)(r.olH, {
        "data-migration-pending": true,
        className: o.closeButton,
        onClick: t
      })]
    }), (0, n.jsxs)(r.hzk, {
      "data-migration-pending": true,
      className: o.body,
      paddingFix: false,
      children: [(0, n.jsx)(r.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: d
      }), u]
    }), (0, n.jsx)(r.mzw, {
      "data-migration-pending": true,
      className: o.footer,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: o.footerButton,
        children: (0, n.jsx)(r.Button, {
          variant: "primary",
          text: s.intl.string(s.t.i4jeWR),
          onClick: t
        })
      })
    })]
  })
}