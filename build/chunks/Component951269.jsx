/** Chunk was on 7285 **/
/** chunk id: 951269, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942721 = require("./942721.js"),
  Chunk462991 = require("./462991.js");

function d(t) {
  let {
    onClose: e,
    transitionState: s,
    kind: d
  } = t, u = (0, l.Dt)();
  return (0, n.jsxs)(i.Y0X, {
    transitionState: s,
    "aria-labelledby": u,
    size: i.CgR.SMALL,
    parentComponent: "InaccessibleLinkModal",
    children: [(0, n.jsxs)(i.hzk, {
      className: c.content,
      children: [(0, n.jsx)(i.olH, {
        className: c.closeButton,
        onClick: e
      }), (0, n.jsx)("img", {
        className: c.image,
        src: r,
        alt: ""
      }), (0, n.jsx)(i.X6q, {
        id: u,
        variant: "heading-xl/bold",
        color: "header-primary",
        children: o.intl.string(o.t.r0DLNj)
      }), (0, n.jsx)(i.Text, {
        className: c.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: "user" === d ? o.intl.string(o.t.Fqqbho) : o.intl.string(o.t["6Y0JlJ"])
      })]
    }), (0, n.jsx)(i.mzw, {
      children: (0, n.jsx)(a.zx, {
        className: c.button,
        color: a.zx.Colors.BRAND,
        onClick: e,
        size: a.zx.Sizes.LARGE,
        children: o.intl.string(o.t.BddRzc)
      })
    })]
  })
}