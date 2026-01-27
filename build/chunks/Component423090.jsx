/** Chunk was on 70104 **/
/** chunk id: 423090, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  M: () => o,
  v: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk855522 = require("./855522.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk477540 = require("./477540.js");

function o(t) {
  let {
    type: e
  } = t;
  return (0, n.jsx)(c, {
    icon: "user" === e ? (0, n.jsx)(s.nys, {
      size: "xxs",
      color: i.A.colors.INTERACTIVE_TEXT_DEFAULT
    }) : (0, n.jsx)(s.RR9, {
      size: "xxs",
      color: i.A.colors.INTERACTIVE_TEXT_DEFAULT
    }),
    text: "user" === e ? l.A.Messages.STOREFRONT_USER_SUBSCRIPTION : l.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION
  })
}

function c(t) {
  let {
    icon: e,
    text: r
  } = t;
  return (0, n.jsxs)("div", {
    className: a.k,
    children: [e, (0, n.jsx)(s.EYj, {
      color: "text-strong",
      variant: "text-sm/medium",
      children: r
    })]
  })
}