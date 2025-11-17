/** Chunk was on web.js **/
/** chunk id: 889515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk520525 = require("./520525.js");

function s(e) {
  let {
    components: t,
    renderComponents: n
  } = e, {
    message: s
  } = (0, a.CJ)();
  return null == t || 0 === t.length ? null : (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)("div", {
      className: o.children,
      children: n(t)
    }), null != s ? (0, r.jsx)(i.ZP, {
      className: o.error,
      message: s,
      component: e
    }) : null]
  })
}