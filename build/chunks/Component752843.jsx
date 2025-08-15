/** Chunk was on 86282 **/
/** chunk id: 752843, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  V: () => u,
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk628028 = require("./628028.jsx"),
  Chunk220427 = require("./220427.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk692547 = require("./692547.js"),
  Chunk330711 = require("./330711.js"),
  Chunk922762 = require("./922762.js");

function d(e) {
  let {
    type: n
  } = e;
  return (0, t.jsx)(u, {
    icon: "user" === n ? (0, t.jsx)(i.t, {
      size: "xxs",
      color: a.Z.colors.INTERACTIVE_NORMAL
    }) : (0, t.jsx)(r.Q, {
      size: "xxs",
      color: a.Z.colors.INTERACTIVE_NORMAL
    }),
    text: "user" === n ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
  })
}

function u(e) {
  let {
    icon: n,
    text: l
  } = e;
  return (0, t.jsxs)("div", {
    className: c.container,
    children: [n, (0, t.jsx)(s.x, {
      color: "header-primary",
      variant: "text-sm/medium",
      children: l
    })]
  })
}