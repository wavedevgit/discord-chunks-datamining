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
  Chunk359059 = require("./359059.js"),
  Chunk942605 = require("./942605.js"),
  Chunk534345 = require("./534345.js");
let f = e => {
  let {
    onComplete: t,
    data: n
  } = e, f = (0, a.useId)(), p = null, h = null, x = n.scopes.some(e => (0, s.sg)(e));
  return n.clientId === i.t.PLAYSTATION_APPLICATION_ID || n.clientId === i.t.PLAYSTATION_STAGING_APPLICATION_ID ? p = d.Z : x && (p = u.Z), null != n.twoWayLinkCode ? h = l.intl.string(l.t.QhATl2) : x && (h = l.intl.string(l.t.vBPvK3)), (0, r.jsxs)("div", {
    className: c.content,
    children: [null != p ? (0, r.jsx)("img", {
      src: p,
      className: c.artwork,
      alt: "",
      "aria-labelledby": f
    }) : null, (0, r.jsxs)("div", {
      className: c.innerContent,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        id: f,
        children: l.intl.string(l.t.qDtJmD)
      }), null != h ? (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: h
      }) : null]
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: c.footerButton,
      children: (0, r.jsx)(o.Button, {
        variant: "primary",
        text: l.intl.string(l.t.i4jeWR),
        onClick: t
      })
    })]
  })
}