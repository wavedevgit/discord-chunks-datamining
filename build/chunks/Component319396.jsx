/** Chunk was on 49902 **/
/** chunk id: 319396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk541699 = require("./541699.js"),
  Chunk594174 = require("./594174.js"),
  Chunk835255 = require("./835255.jsx"),
  Chunk855587 = require("./855587.js");

function s(e) {
  let {
    item: t,
    user: n
  } = e;
  return (0, i.Q)(t) ? (0, r.jsx)(a.Z, {
    item: t,
    user: n
  }) : null
}

function c(e) {
  let {
    items: t
  } = e, n = l.default.getCurrentUser();
  return null == n ? null : (0, r.jsx)("div", {
    className: o.grid,
    children: t.map(e => (0, r.jsx)(s, {
      item: e,
      user: n
    }, e.skuId))
  })
}