/** Chunk was on web.js **/
/** chunk id: 329242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk606837 = require("./606837.js");
let c = e => {
  let {
    user: t,
    fill: n,
    hideUserTag: i
  } = e, c = "\xa0(@".concat(s.ZP.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, r.jsxs)(o.Text, {
    className: a()([{
      [l.fill]: n
    }]),
    variant: "text-md/medium",
    children: [(0, r.jsx)("span", {
      className: l.username,
      children: s.ZP.getName(t)
    }), i ? null : (0, r.jsx)("span", {
      className: l.discriminator,
      children: c
    })]
  })
}