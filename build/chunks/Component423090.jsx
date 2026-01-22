/** Chunk was on web.js **/
/** chunk id: 423090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => l,
  v: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk855522 = require("./855522.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk477540 = require("./477540.js");

function l(e) {
  let {
    type: t
  } = e;
  return (0, r.jsx)(c, {
    icon: "user" === t ? (0, r.jsx)(a.nys, {
      size: "xxs",
      color: s.A.colors.INTERACTIVE_TEXT_DEFAULT
    }) : (0, r.jsx)(a.RR9, {
      size: "xxs",
      color: s.A.colors.INTERACTIVE_TEXT_DEFAULT
    }),
    text: "user" === t ? i.A.Messages.STOREFRONT_USER_SUBSCRIPTION : i.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION
  })
}

function c(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o.k,
    children: [t, (0, r.jsx)(a.EYj, {
      color: "text-strong",
      variant: "text-sm/medium",
      children: n
    })]
  })
}