/** Chunk was on 69773 **/
/** chunk id: 902928, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  u: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159277 = require("./159277.js"),
  Chunk481060 = require("./481060.js"),
  Chunk713938 = require("./713938.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk406096 = require("./406096.js"),
  Chunk140606 = require("./140606.js"),
  Chunk833600 = require("./833600.js");
let f = e => {
  let {
    onComplete: t,
    data: n
  } = e, f = (0, r.useId)(), p = null, h = null, x = n.scopes.some(e => (0, s.sg)(e));
  return n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? p = d.Z : x && (p = u.Z), null != n.twoWayLinkCode ? h = c.intl.string(c.t.QhATl2) : x && (h = c.intl.string(c.t.vBPvK3)), (0, a.jsxs)("div", {
    className: l.content,
    children: [null != p ? (0, a.jsx)("img", {
      src: p,
      className: l.artwork,
      alt: "",
      "aria-labelledby": f
    }) : null, (0, a.jsxs)("div", {
      className: l.innerContent,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xl/extrabold",
        id: f,
        children: c.intl.string(c.t.qDtJmD)
      }), null != h ? (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: h
      }) : null]
    }), (0, a.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: l.footerButton,
      children: (0, a.jsx)(i.Button, {
        variant: "primary",
        text: c.intl.string(c.t.i4jeWR),
        onClick: t
      })
    })]
  })
}