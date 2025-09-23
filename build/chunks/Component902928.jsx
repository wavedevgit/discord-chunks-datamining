/** Chunk was on 69773 **/
/** chunk id: 902928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159277 = require("./159277.js"),
  Chunk481060 = require("./481060.js"),
  Chunk713938 = require("./713938.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk763093 = require("./763093.js"),
  Chunk942605 = require("./942605.js"),
  Chunk534345 = require("./534345.js");
let f = e => {
  let {
    onComplete: t,
    data: n
  } = e, f = (0, r.useId)(), h = null, p = null, x = n.scopes.some(e => (0, l.sg)(e));
  return n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? h = d.Z : x && (h = u.Z), null != n.twoWayLinkCode ? p = s.intl.string(s.t.QhATl5) : x && (p = s.intl.string(s.t.vBPvKy)), (0, a.jsxs)("div", {
    className: c.content,
    children: [null != h ? (0, a.jsx)("img", {
      src: h,
      className: c.artwork,
      alt: "",
      "aria-labelledby": f
    }) : null, (0, a.jsxs)("div", {
      className: c.innerContent,
      children: [(0, a.jsx)(i.X6q, {
        variant: "heading-xl/extrabold",
        id: f,
        children: s.intl.string(s.t.qDtJmJ)
      }), null != p ? (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: p
      }) : null]
    }), (0, a.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: c.footerButton,
      children: (0, a.jsx)(i.zxk, {
        variant: "primary",
        text: s.intl.string(s.t.i4jeWV),
        onClick: t
      })
    })]
  })
}