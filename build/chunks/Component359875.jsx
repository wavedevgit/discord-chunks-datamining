/** Chunk was on web.js **/
/** chunk id: 359875, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk565138 = require("./565138.jsx"),
  Chunk457926 = require("./457926.jsx"),
  Chunk640775 = require("./640775.js");
let c = function(e) {
  let {
    guild: t,
    children: n
  } = e, i = null != t ? (0, r.jsx)(o.Z, {
    guild: t,
    size: o.Z.Sizes.MEDIUM,
    className: a()(l.icon, null == t.icon ? l.textIcon : l.imageIcon),
    active: true
  }) : null;
  return (0, r.jsxs)("span", {
    children: [(0, r.jsx)(s.Z, {
      children: i
    }), (0, r.jsx)("span", {
      className: l.name,
      children: n
    })]
  })
}