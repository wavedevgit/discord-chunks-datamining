/** Chunk was on web.js **/
/** chunk id: 942682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => c,
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk330711 = require("./330711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk931632 = require("./931632.js");

function l(e) {
  let {
    type: t
  } = e;
  return (0, r.jsx)(c, {
    icon: "user" === t ? (0, r.jsx)(a.tBG, {
      size: "xxs",
      color: o.Z.colors.INTERACTIVE_TEXT_DEFAULT
    }) : (0, r.jsx)(a.QTo, {
      size: "xxs",
      color: o.Z.colors.INTERACTIVE_TEXT_DEFAULT
    }),
    text: "user" === t ? i.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : i.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
  })
}

function c(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [t, (0, r.jsx)(a.xvT, {
      color: "text-strong",
      variant: "text-sm/medium",
      children: n
    })]
  })
}