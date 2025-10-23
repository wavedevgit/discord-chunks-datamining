/** Chunk was on 95468 **/
/** chunk id: 463115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk888592 = require("./888592.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk330966 = require("./330966.js");
let d = e => {
  let {
    school: t,
    setStep: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)("div", {
      className: c.topImage
    }), (0, r.jsx)(a.Heading, {
      className: i()(c.centerText, c.header),
      variant: "heading-xl/semibold",
      children: o.intl.string(o.t.OaloU5)
    }), (0, r.jsx)("div", {
      className: c.descriptionWidth,
      children: (0, r.jsx)(a.Text, {
        className: c.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.intl.format(o.t.Rs7MXJ, {
          school: t
        })
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: c.__invalid_resendLink,
      children: (0, r.jsx)(a.Avr, {
        variant: "primary",
        size: "sm",
        text: o.intl.string(o.t.Zg63h4),
        onClick: () => {
          n(s.tF.VERIFY_EMAIL)
        }
      })
    })]
  })
}