/** Chunk was on web.js **/
/** chunk id: 889515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk933033 = require("./933033.js");

function s(e) {
  let {
    components: t,
    renderComponents: n
  } = e, {
    message: s
  } = (0, o.CJ)();
  return null == t || 0 === t.length ? null : (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsx)("div", {
      className: a.children,
      children: n(t)
    }), null != s ? (0, r.jsx)(i.ZP, {
      className: a.error,
      message: s,
      component: e
    }) : null]
  })
}